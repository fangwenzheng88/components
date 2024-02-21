import { type Ref, reactive, ref, watchEffect, watch, h } from 'vue'
import type { PaginationProps, TableData } from '@arco-design/web-vue'
import { isObject, toArray } from '@devops-web/utils'
import { OperationColumn, ResizeObserver } from '@devops-web/components'
import { useColumns, type TableColumnDataPlus } from '../useColumns'
import { OperationItem } from './interface'

type ModifyRequiredKeys<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P]
}

type PaginationPropsPlus = ModifyRequiredKeys<PaginationProps, 'current' | 'pageSize' | 'total'>

interface Params {
  /**
   * visible=true的dataIndex集合
   * 当多级表头的时候columnKeys 为最后一级的集合
   */
  columnKeys: string[]
}

const defaultPagination = (): PaginationPropsPlus => {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    showTotal: true,
    showPageSize: true
  }
}

export interface TableConfig<T> {
  fetch?: (data: Params) => Promise<T>
  columns: TableColumnDataPlus[]
  pagination?: boolean | PaginationProps
  operationsFixed?: 'left' | 'right' | false
  operations?: (record: TableData) => OperationItem[]
  immediate?: boolean
}

export function useTable<T extends Record<string, unknown>>(config: TableConfig<T[]>) {
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

  const pagination: Ref<PaginationPropsPlus | false> = ref(false)
  let onPageChange: undefined | ((current: number) => void)
  let onPageSizeChange: undefined | ((pageSize: number) => void)
  if (config.pagination === true || isObject(config.pagination)) {
    pagination.value = config.pagination === true ? defaultPagination() : { ...defaultPagination(), ...config.pagination }
    onPageChange = (current: number) => {
      ;(pagination.value as PaginationPropsPlus).current = current
    }

    onPageSizeChange = (pageSize: number) => {
      ;(pagination.value as PaginationPropsPlus).current = 1
      ;(pagination.value as PaginationPropsPlus).pageSize = pageSize
    }
  }

  watchEffect(() => {
    if (pagination.value !== false) {
      const len = Array.isArray(tableData.value) ? tableData.value.length : 0
      pagination.value.total = len
    }
  })

  watch(
    () => {
      if (isObject(pagination.value)) {
        return toArray(tableData.value).slice(pagination.value.pageSize * (pagination.value.current - 1), pagination.value.pageSize * pagination.value.current)
      }
      return tableData.value ?? []
    },
    (newVal) => {
      if (config.operations && newVal.length > 0) {
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
  )

  let maxWdith = 80

  function setOperationWidth(entry: ResizeObserverEntry) {
    const { width } = entry.contentRect
    maxWdith = Math.max(width, maxWdith)
    columnsHooks.updateColumnByDataIndex('operation', 'width', maxWdith + 33)
  }

  /**
   * 加载表格数据
   */
  function loadTableData() {
    loading.value = true
    if (!config.fetch) {
      throw new Error('useTable请提供fetch配置项')
    }
    return config
      .fetch({ columnKeys: [...columnsHooks.columnKeys.value] })
      .then((data) => {
        tableData.value = Array.isArray(data) ? data : []
      })
      .finally(() => {
        loading.value = false
      })
  }

  if (config.immediate === true) {
    loadTableData()
  }
  return {
    tableData,
    loading,
    loadTableData,
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
