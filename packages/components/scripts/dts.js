import * as path from 'node:path'
import * as fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { ModuleResolutionKind, Project, ScriptTarget } from 'ts-morph'
import { glob } from 'glob'
import { parse } from '@vue/compiler-sfc'

async function build(input, options) {
  const root = process.cwd()
  const tsConfigFilePath = existsSync('tsconfig.json') ? 'tsconfig.json' : undefined
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      strict: true,
      target: ScriptTarget.ES2015,
      moduleResolution: ModuleResolutionKind.NodeJs,
      isolatedModules: true,
      esModuleInterop: true,
      skipLibCheck: true,
      jsx: 1
    },
    tsConfigFilePath,
    skipAddingFilesFromTsConfig: true
  })
  const isComponents = /^src/.test(input)
  if (isComponents) {
    project.compilerOptions.set({
      rootDir: path.resolve(root, 'src')
    })
  }
  if (options?.outDir) {
    project.compilerOptions.set({
      outDir: path.resolve(root, options.outDir)
    })
  }
  const files = glob.sync(input, {
    ignore: ['**/__test__/*', '**/__demo__/*']
  })
  const sourceFiles = []

  await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.resolve(root, file), 'utf8')
      if (file.endsWith('.vue')) {
        const sfc = parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let scriptContent = ''
          let isTSX = false
          if (script && script.content) {
            scriptContent += script.content
            if (script.lang === 'tsx') isTSX = true
          }
          const sourceFile = project.createSourceFile(
            path.relative(root, file).replace('.vue', isTSX ? '.tsx' : '.ts'),
            scriptContent
          )
          if (sourceFile) {
            removeVueSpecifier(sourceFile)
            sourceFiles.push(sourceFile)
          }
        }
      } else {
        const sourceFile = project.createSourceFile(path.relative(root, file), content, {
          overwrite: true
        })
        if (sourceFile) {
          removeVueSpecifier(sourceFile)
          sourceFiles.push(sourceFile)
        }
      }
    })
  )

  try {
    await Promise.all(
      sourceFiles.map(async (sourceFile) => {
        // eslint-disable-next-line no-console
        console.log(`Transform start: ${sourceFile.getFilePath()}`)
        const diagnostics = sourceFile.getPreEmitDiagnostics()
        // eslint-disable-next-line no-console
        console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))
        const emitOutput = sourceFile.getEmitOutput()
        const outputFiles = emitOutput.getOutputFiles()
        await Promise.all(
          outputFiles.map(async (outputFile) => {
            const filepath = outputFile.getFilePath()
            await fs.writeFile(filepath, outputFile.getText(), 'utf8')
            // eslint-disable-next-line no-console
            console.log(`Emitted ${filepath}`)
          })
        )
      })
    )
  } catch {}
}

const removeVueSpecifier = (sourceFile) => {
  const imports = sourceFile.getImportDeclarations()
  imports.forEach((item) => {
    const specifier = item.getModuleSpecifierValue()
    const ext = path.extname(specifier)
    if (ext === '.vue') {
      item.setModuleSpecifier(specifier.replace('.vue', ''))
    }
  })
}

build('src/**/*.{ts,tsx,vue}')
