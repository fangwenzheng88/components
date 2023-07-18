import path from 'node:path'

const root = process.cwd()

function resolvePath(...relativePath) {
  return path.resolve(root, ...relativePath)
}

// components相关
const components = resolvePath('./src')

export default {
  resolvePath,
  root,
  components
}
