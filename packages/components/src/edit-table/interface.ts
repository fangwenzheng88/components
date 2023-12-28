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
  /**
   * 当前列数据
   */
  column: EditTableColumnData
  /**
   * 当前行数据
   */
  record: TableData
  /**
   * 当前行的数组下标
   */
  rowIndex: number
  /**
   * 编辑之前行数据的深拷贝
   */
  beforeRecord: unknown
  /**
   * 是否取消，赋值为true，可以阻止编辑单元格被关闭
   */
  cancel: boolean
}
