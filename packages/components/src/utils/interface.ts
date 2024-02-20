import type { TableColumnData } from '@arco-design/web-vue'

export interface TableColumnDataPlus extends TableColumnData {
  [key: string]: unknown
  visible?: boolean
  minWidth?: number
  dataIndex: string
  title: string
  group?: string
  _originWidth?: number
  children?: TableColumnDataPlus[]
}

export type OperationItem = {
  label: string
  visible?: boolean
  disabled?: boolean
  loading?: boolean
  action: (operation: OperationItem) => void
}
