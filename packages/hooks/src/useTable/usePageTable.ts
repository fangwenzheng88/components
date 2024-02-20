import { type Ref, reactive, ref, h, watch } from 'vue'
import type { PaginationProps, TableData } from '@arco-design/web-vue'
import { isArray, isObject } from '@devops-web/utils'
import { OperationColumn, ResizeObserver } from '@devops-web/components'
import { useColumns, type TableColumnDataPlus } from '../useColumns'
import type { OperationItem } from './interface'

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
  operationsFixed?: 'left' | 'right' | false
  operations?: (record: TableData) => OperationItem[]
  immediate?: boolean
}

export function useTablePage<T extends Record<string, unknown>>(config: TablePageConfig<T>) {
  const columns = [...config.columns]
  if (config.operations) {
    const fixed = config.operationsFixed === false ? undefined : config.operationsFixed ?? 'right'
    columns.push({
      title: '操作',
      dataIndex: 'operation',
      fixed,
      render(data) {
        const operations = config.operations!(data.record).filter((el) => el.visible !== false)
        return h(ResizeObserver, { onResize: setOperationWidth }, () => h(OperationColumn, { operations }))
      }
    })
  }

  const loading = ref(false)
  const tableData = ref([]) as Ref<T[]>
  const columnsHooks = useColumns(columns)

  watch(tableData, (newVal) => {
    if (config.operations) {
      if (isArray(newVal) && newVal.length > 0) {
        let flag = false
        for (const rowData of newVal) {
          const operations = config.operations!(rowData).filter((el) => el.visible !== false)
          if (operations && operations.length > 0) {
            flag = true
            break
          }
        }
        columnsHooks.changeColumnVisibleByDataIndex('operation', flag)
      }
    }
  })

  function setOperationWidth(entry: ResizeObserverEntry) {
    const { width } = entry.contentRect
    columnsHooks.updateColumnByDataIndex('operation', 'width', width + 33)
  }

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
        if (isObject(data)) {
          tableData.value = Array.isArray(data.records) ? data.records : []
          pagination.value.total = data.total ?? 0
        } else {
          console.warn('useTablePage请求返回结果数据异常!', data)
        }
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
