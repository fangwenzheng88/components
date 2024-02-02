import { type Ref, reactive, ref, watchEffect } from 'vue'
import type { PaginationProps } from '@arco-design/web-vue'
import { isObject } from '@devops-web/utils'
import { useColumns, type TableColumnDataPlus } from '../useColumns'

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
  immediate?: boolean
}

export function useTable<T extends Record<string, unknown>>(config: TableConfig<T[]>) {
  const loading = ref(false)
  const tableData = ref([]) as Ref<T[]>
  const columnsHooks = useColumns(config.columns)
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
