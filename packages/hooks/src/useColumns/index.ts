import { type TableColumnData, type TableInstance } from '@arco-design/web-vue'
import { nextTick, ref, watchEffect, watch, type Ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import { traverseTreeBFS } from '@devops-web/utils'

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

/**
 * 过滤columns，去掉visible===false的列，和children为空的列
 */
function filterColumns<T extends TableColumnDataPlus>(columns: readonly T[]): T[] {
  const filteredNodes: T[] = []
  for (const column of columns) {
    if (column.visible !== false) {
      const { children } = column
      if (Array.isArray(children) && children.length > 0) {
        const filteredChildren = filterColumns(children)

        if (filteredChildren.length > 0) {
          filteredNodes.push({
            ...column,
            children: filteredChildren
          })
        }
      } else {
        filteredNodes.push({ ...column, _originWidth: column.width })
      }
    }
  }
  return filteredNodes
}

/**
 * arco-design 扩展表格columns，增加visible，minWidth两个配置项
 * @param columns
 * @returns
 */
export function useColumns<T extends TableColumnDataPlus>(columns: T[]) {
  const originColumns: T[] = cloneDeep(columns)
  const originColumnsRef: Ref<T[]> = ref(columns as any)
  const tableInstance: Ref<TableInstance | null> = ref(null)
  const columnKeys = ref<string[]>([])

  let lastWidth = 0
  const observer = new ResizeObserver((entries) => {
    const entry: ResizeObserverEntry = entries[0]
    if (entry.contentRect.width !== lastWidth) {
      lastWidth = entry.contentRect.width
      updateColumnsWidth()
    }
  })

  watch(tableInstance, () => {
    observer.disconnect()
    if (tableInstance.value) {
      observer.observe(tableInstance.value.$el)
    }
  })

  const columnsRef: Ref<T[]> = ref([])

  watchEffect(() => {
    columnsRef.value = filterColumns(originColumnsRef.value)
    columnKeys.value = doFlattenColumns(columnsRef.value).map((item) => item.dataIndex)
    nextTick(() => {
      updateColumnsWidth()
    })
  })

  function doFlattenColumns(columns: TableColumnDataPlus[]) {
    const result: TableColumnDataPlus[] = []
    columns.forEach((column) => {
      if (column.children && column.children.length > 0) {
        result.push(...doFlattenColumns(column.children))
      } else {
        result.push(column)
      }
    })
    return result
  }

  function getLeafColumns() {
    return doFlattenColumns(columnsRef.value)
  }

  function updateColumnsWidth() {
    if (!tableInstance.value) {
      return
    }
    const borderWidth = tableInstance.value.bordered ? 2 : 0
    const bodyWidth = tableInstance.value.$el.clientWidth - borderWidth
    let bodyMinWidth = 0

    const flattenColumns = getLeafColumns()
    // eslint-disable-next-line no-underscore-dangle
    const flexColumns = flattenColumns.filter((column) => typeof column._originWidth !== 'number')
    if (flexColumns.length > 0) {
      flattenColumns.forEach((column) => {
        // eslint-disable-next-line no-underscore-dangle
        bodyMinWidth += Number(column._originWidth || column.minWidth || 80)
      })
      if (bodyMinWidth <= bodyWidth) {
        const totalFlexWidth = bodyWidth - bodyMinWidth

        if (flexColumns.length === 1) {
          flexColumns[0].width = Number(flexColumns[0].minWidth || 80) + totalFlexWidth
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + Number(column.minWidth || 80), 0)
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth
          let noneFirstWidth = 0

          flexColumns.forEach((column, index) => {
            if (index === 0) return
            const flexWidth = Math.floor(Number(column.minWidth || 80) * flexWidthPerPixel)
            noneFirstWidth += flexWidth
            column.width = Number(column.minWidth || 80) + flexWidth
          })

          flexColumns[0].width = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth
        }
      } else {
        flexColumns.forEach((column) => {
          column.width = Number(column.minWidth)
        })
      }
    } else {
      flattenColumns.forEach((column) => {
        // eslint-disable-next-line no-underscore-dangle
        if (!column._originWidth && !column.minWidth) {
          column.width = 80
        } else {
          // eslint-disable-next-line no-underscore-dangle
          column.width = Number(column._originWidth || column.minWidth)
        }
      })
    }
  }

  function resetColumns() {
    originColumnsRef.value = originColumns
  }

  function replaceColumnByDataIndex(dataIndex: string, column: T) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        Object.keys(node).forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(column, key)) {
            // @ts-ignore
            node[key] = column[key]
          } else {
            // @ts-ignore
            delete node[key]
          }
        })
      }
    })
  }

  function updateColumnByDataIndex<K extends keyof T>(dataIndex: string, field: K, value: T[K]) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        node[field] = value
      }
    })
  }

  function changeColumnVisibleByDataIndex(dataIndex: string, visible: boolean) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        node.visible = visible
      }
    })
  }

  return {
    ref(el: any) {
      tableInstance.value = el as TableInstance
    },
    tableInstance,
    originColumns: originColumnsRef,
    columns: columnsRef,
    /**
     * visible=true的columns dataIndex集合
     * 当多级表头的时候columnKeys 为最后一级的集合
     */
    columnKeys,
    resetColumns,
    changeColumnVisibleByDataIndex,
    updateColumnByDataIndex,
    replaceColumnByDataIndex
  }
}
