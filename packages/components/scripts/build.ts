import type { InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

const config: InlineConfig = {
  mode: 'production',
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue', /@arco-design\/web-vue/, '@devops-web/utils', 'lodash-es'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'umd',
          name: 'DevopsComponents',
          dir: 'dist',
          entryFileNames: `devops-components.js`,
          globals: {
            vue: 'Vue',
            'lodash-es': '_',
            '@arco-design/web-vue': 'ArcoVue',
            '@devops-web/utils': 'DevopsUtils'
          }
        },
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          format: 'commonjs',
          dir: 'lib',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    },
    // 开启lib模式，但不使用下面配置
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd']
    }
  },
  // @ts-ignore vite内部类型错误
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

export default config
