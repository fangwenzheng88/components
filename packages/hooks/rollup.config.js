import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'

const input = 'src/index.ts'
const external = ['@devops-web/utils', '@devops-web/components', 'vue', 'lodash-es', /@arco-design\/web-vue/]

export default [
  {
    input,
    external,
    output: [
      {
        format: 'umd',
        file: 'dist/index.umd.js',
        name: 'DevopsHooks',
        globals: {
          vue: 'Vue',
          '@arco-design/web-vue': 'ArcoVue',
          'lodash-es': '_',
          '@devops-web/utils': 'DevopsUtils',
          '@devops-web/components': 'DevopsComponents'
        }
      }
    ],
    plugins: [resolve(), commonjs(), typescript()]
  },
  {
    input,
    external,
    output: [
      {
        format: 'cjs',
        dir: 'lib',
        entryFileNames: '[name].cjs',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [resolve(), commonjs(), typescript()]
  },
  {
    external,
    input,
    output: [
      {
        format: 'es',
        dir: 'lib',
        entryFileNames: '[name].d.ts',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [dts({ compilerOptions: { preserveSymlinks: false } })]
  },
  {
    input,
    external,
    output: [
      {
        format: 'es',
        dir: 'es',
        entryFileNames: '[name].mjs',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [resolve(), commonjs(), typescript()]
  },
  {
    external,
    input,
    output: [
      {
        format: 'es',
        dir: 'es',
        entryFileNames: '[name].d.ts',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [dts({ compilerOptions: { preserveSymlinks: false } })]
  }
]
