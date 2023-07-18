export default function cssjsPlugin() {
  return {
    name: 'vite:cssjs',
    async generateBundle(outputOptions, bundle) {
      for (const filename of Object.keys(bundle)) {
        const chunk = bundle[filename]
        this.emitFile({
          type: 'asset',
          fileName: filename.replace('index.js', 'css.js'),
          source: chunk.code.replace(/\.less/g, '.css')
        })
      }
    }
  }
}
