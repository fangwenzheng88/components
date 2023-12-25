import _EditTable from './edit-table'
import { withInstall } from '../utils'

export { InputEditor, SelectEditor, DateEditor, DateRangeEditor, NumberEditor } from './editor'

export const EditTable = withInstall(_EditTable)

export default EditTable

export type EditTableInstance = InstanceType<typeof EditTable>

export type { EditTableColumnData, EditTableCellParams, EditTableCellEditParams } from './interface'

declare module 'vue' {
  export interface GlobalComponents {
    DevopsEditTable: typeof EditTable
  }
}
