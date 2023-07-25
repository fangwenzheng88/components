import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'

const input = 'src/index.ts'
export default [
  {
    input,
    external: [/lodash-es/],
    output: [
      {
        format: 'es',
        dir: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [resolve(), typescript()]
  },
  {
    external: [],
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
