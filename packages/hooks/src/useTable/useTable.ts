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

export interface TableConfig<T> {
  fetch: () => Promise<T>
  columns: TableColumnDataPlus[]
  pagination?: boolean | PaginationProps
}

export function useTable<T extends Record<string, unknown>>(config: TableConfig<T[]>) {
  const loading = ref(false)
  const tableData = ref<T[]>()
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

  function loadData() {
    loading.value = true
    return config
      .fetch()
      .then((data) => {
        tableData.value = data
        if (config.pagination !== false) {
          ;(pagination.value as PaginationPropsPlus).total = data.length
        }
      })
      .finally(() => {
        loading.value = false
      })
  }
  return {
    tableData,
    loading,
    loadData,
    pagination,
    tableInstance: columnsHooks.tableInstance,
    originColumns: columnsHooks.originColumns,
    columns: columnsHooks.columns,
    resetColumns: columnsHooks.resetColumns,
    changeColumnVisibleByPath: columnsHooks.changeColumnVisibleByPath,
    changeColumnVisibleByDataIndex: columnsHooks.changeColumnVisibleByDataIndex,
    updateColumnByPath: columnsHooks.updateColumnByPath,
    updateColumnByDataIndex: columnsHooks.updateColumnByDataIndex,
    replaceColumnByPath: columnsHooks.replaceColumnByPath,
    replaceColumnByDataIndex: columnsHooks.replaceColumnByDataIndex,
    tableConfig: reactive({
      loading,
      data: tableData,
      columns: columnsHooks.columns,
      ref: columnsHooks.ref,
      pagination,
      onPageChange,
      onPageSizeChange
    })
  }
}
