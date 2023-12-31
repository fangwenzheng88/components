import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'

const input = 'src/index.ts'
const external = ['@devops-web/utils']
export default [
  {
    input,
    external,
    output: [
      {
        format: 'umd',
        file: 'dist/index.umd.js',
        name: 'DevopsDomUtils',
        globals: {
          '@devops-web/utils': 'DevopsUtils'
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
        entryFileNames: '[name].js',
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
    plugins: [dts({ respectExternal: true })]
  },
  {
    input,
    external,
    output: [
      {
        format: 'es',
        dir: 'es',
        entryFileNames: '[name].js',
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
    plugins: [dts({ respectExternal: true })]
  }
]
