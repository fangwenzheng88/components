import { type Ref, reactive, ref } from 'vue'
import type { PaginationProps } from '@arco-design/web-vue'
import { isObject } from '@devops-web/utils'
import { useColumns, type TableColumnDataPlus } from '../useColumns'

type ModifyRequiredKeys<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}

type PaginationPropsPlus = ModifyRequiredKeys<PaginationProps, 'current' | 'pageSize' | 'total'>

const defaultPagination = (): PaginationPropsPlus => {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    showTotal: true,
    showPageSize: true
  }
}

export interface TablePageData<T extends Record<string, unknown> = Record<string, unknown>> {
  pageNum: number
  pageSize: number
  total: number
  records: T[]
}

interface PageParams {
  pageNum: number
  pageSize: number
  /**
   * visible=true的dataIndex集合
   * 当多级表头的时候columnKeys 为最后一级的集合
   */
  columnKeys: string[]
}

export interface TablePageConfig<T extends Record<string, unknown>> {
  fetch: (data: PageParams) => Promise<TablePageData<T>>
  columns: TableColumnDataPlus[]
  pagination?: true | PaginationProps
  immediate?: boolean
}

export function useTablePage<T extends Record<string, unknown>>(config: TablePageConfig<T>) {
  const loading = ref(false)
  const tableData = ref([]) as Ref<T[]>
  const columnsHooks = useColumns(config.columns)
  const pagination = ref(defaultPagination()) as Ref<PaginationPropsPlus>
  function onPageChange(current: number) {
    pagination.value.current = current
    return getTableData()
  }

  function onPageSizeChange(pageSize: number) {
    pagination.value.current = 1
    pagination.value.pageSize = pageSize
    return getTableData()
  }
  if (isObject(config.pagination)) {
    pagination.value = { ...defaultPagination(), ...config.pagination }
  }

  function getTableData() {
    loading.value = true
    return config
      .fetch({ pageNum: pagination.value.current, pageSize: pagination.value.pageSize, columnKeys: [...columnsHooks.columnKeys.value] })
      .then((data) => {
        tableData.value = data.records
        pagination.value.total = data.total
      })
      .finally(() => {
        loading.value = false
      })
  }

  /**
   * 刷新表格数据，pagination.pageNum不会变
   */
  function refreshData() {
    return getTableData()
  }

  /**
   * 加载表格数据，pagination.pageNum会设置为1
   */
  function loadTableData() {
    pagination.value.current = 1
    return getTableData()
  }
  if (config.immediate === true) {
    loadTableData()
  }
  return {
    tableData,
    loading,
    loadTableData,
    refreshData,
    pagination,
    tableInstance: columnsHooks.tableInstance,
    originColumns: columnsHooks.originColumns,
    columns: columnsHooks.columns,
    columnKeys: columnsHooks.columnKeys,
    resetColumns: columnsHooks.resetColumns,
    changeColumnVisibleByDataIndex: columnsHooks.changeColumnVisibleByDataIndex,
    updateColumnByDataIndex: columnsHooks.updateColumnByDataIndex,
    replaceColumnByDataIndex: columnsHooks.replaceColumnByDataIndex,
    tableConfig: reactive({
      loading,
      data: tableData,
      columns: columnsHooks.columns,
      ref: columnsHooks.ref,
      pagination,
      onPageChange,
      onPageSizeChange,
      onColumnResize(dataIndex: string, width: number) {
        columnsHooks.updateColumnByDataIndex(dataIndex, 'width', width)
        columnsHooks.updateColumnsWidth()
      }
    })
  }
}
