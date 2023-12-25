import { type TableColumnDataPlus } from '@devops-web/hooks'
import { TableData } from '@arco-design/web-vue'

export interface EditTableColumnData extends TableColumnDataPlus {
  children?: EditTableColumnData[]
}

export interface EditTableCellParams {
  column: EditTableColumnData
  record: TableData
  rowIndex: number
}

export interface EditTableCellEditParams {
  column: EditTableColumnData
  record: TableData
  rowIndex: number
  beforeRecord: unknown
  cancel: boolean
}
