import _OperationColumn from './operation-column.vue'
import { withInstall } from '../utils'

export const OperationColumn = withInstall(_OperationColumn)

export default OperationColumn

export type OperationColumnInstance = InstanceType<typeof OperationColumn>

declare module 'vue' {
  export interface GlobalComponents {
    DevopsOperationColumn: typeof OperationColumn
  }
}
