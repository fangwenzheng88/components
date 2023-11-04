import * as fs from 'node:fs'
import * as path from 'node:path'

function getAllFilesInDirectory(directory) {
  let files = []
  const items = fs.readdirSync(directory)

  items.forEach((item) => {
    const itemPath = path.join(directory, item)
    const stats = fs.statSync(itemPath)

    if (stats.isDirectory()) {
      // 递归读取文件夹
      files = files.concat(getAllFilesInDirectory(itemPath))
    } else {
      // 文件
      files.push(itemPath)
    }
  })

  return files
}

// 清空docs/hooks目录下所有非index.md文件
getAllFilesInDirectory('./docs/hooks/').forEach((el) => {
  if (!/index\.md$/.test(el)) {
    fs.unlinkSync(el)
  }
})

const files = getAllFilesInDirectory('../hooks/src/').filter((item) => /__demo__.*\.md$/.test(item))

const list = []

for (const filePath of files) {
  console.log('filePath', filePath)
  let content = fs.readFileSync(filePath, {
    encoding: 'utf8'
  })

  const firstLine = content.split('\n')[0]
  console.log(firstLine, path.basename(filePath, path.extname(filePath)))
  const fileName = path.basename(filePath, path.extname(filePath))
  list.push({
    text: firstLine.replace(/# /, ''),
    link: `/hooks/${fileName}`
  })

  fs.copyFileSync(filePath, `./docs/hooks/${path.basename(filePath)}`)
}

createHooksSidebar(list)

function createHooksSidebar(list) {
  const content = `
    export default [
      {
        text: '开发指南',
        collapsible: true,
        items: [
          {
            text: '快速上手',
            link: '/hooks/'
          }
        ]
      },
      {
        text: '功能',
        collapsible: true,
        items: ${JSON.stringify(list)}
      }
    ]
  `
  fs.writeFileSync('./docs/.vitepress/configs/sidebar/hooks.js', content, {
    encoding: 'utf8'
  })
}
