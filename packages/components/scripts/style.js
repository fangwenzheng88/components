import path from 'path'
import fs from 'fs-extra'
import less from 'less'
import { glob } from 'glob'
// import ora from 'ora';
import paths from './paths.js'
import config from './vite.prod.style.js'
import CleanCSS from 'clean-css';
import { build } from 'vite';

const run = async () => {
  // 更新index.less文件
  const lessgen = () => {
    let lessContent = ``
    const lessFiles = glob.sync('**/style/index.less', {
      cwd: paths.components
    })
    lessFiles.forEach((value) => {
      lessContent += `@import './${value}';\n`
    })

    fs.outputFileSync(path.resolve(paths.components, 'index.less'), lessContent)

    console.log('generate index.less success')
  }

  lessgen()

  // 拷贝less文件到目标文件，index.less编译生成index.css
  const files = glob.sync('**/*.{less,js}', {
    cwd: paths.resolvePath('src')
  })

  for (const filename of files) {
    const absolute = paths.resolvePath(`src/${filename}`)
    fs.copySync(absolute, paths.resolvePath(`es/${filename}`))
    fs.copySync(absolute, paths.resolvePath(`lib/${filename}`))

    if (/index\.less$/.test(filename)) {
      console.log(`building ${filename}`)

      const lessContent = fs.readFileSync(absolute, 'utf8')
      less.render(
        lessContent,
        {
          filename,
          paths: [paths.resolvePath(`src/${path.dirname(filename)}`), paths.root]
        },
        (err, result) => {
          if (err) {
            console.log(err)
          } else if (result && result.css) {
            const cssFilename = filename.replace('.less', '.css')
            fs.writeFileSync(paths.resolvePath(`es/${cssFilename}`), result.css)
            fs.writeFileSync(paths.resolvePath(`lib/${cssFilename}`), result.css)
            console.log(`${filename} build success`)
          }
        }
      )
    }
  }

  // 拷贝并编译less入口文件
  console.log('build target css')
  const indexLessPath = paths.resolvePath('src/index.less')
  fs.copySync(indexLessPath, paths.resolvePath('es/index.less'))
  fs.copySync(indexLessPath, paths.resolvePath('lib/index.less'))

  const indexLess = fs.readFileSync(indexLessPath, 'utf8')
  const result = await less.render(indexLess, {
    paths: [paths.components]
  })

  fs.ensureDirSync(paths.resolvePath('dist'))

  fs.writeFileSync(paths.resolvePath('dist/arco.less'), "@import '../es/index.less';\n\n")

  fs.writeFileSync(paths.resolvePath('dist/arco.css'), result.css)

  const compress = new CleanCSS().minify(result.css)

  fs.writeFileSync(paths.resolvePath('dist/arco.min.css'), compress.styles)

  console.log(`target build success`)

  // 构建style/index.ts
  const indexFiles = glob.sync('src/**/style/index.ts', {
    cwd: paths.root
  })

  const rollupInput = indexFiles.reduce((pre, cur) => {
    pre[cur.slice(4, -3)] = cur
    return pre
  }, {})

  const buildIndex = async () => {
    if (config?.build?.rollupOptions) {
      config.build.rollupOptions.input = rollupInput
    }

    await build(config)
  }

  await buildIndex()
}

run()
