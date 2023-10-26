/* eslint-disable no-underscore-dangle */
import { type TableColumnData, TableInstance } from '@arco-design/web-vue'
import { nextTick, ref, watchEffect, watch } from 'vue'
import type { Ref, ComponentPublicInstance } from 'vue'
import { cloneDeep } from 'lodash-es'
import { setValueByPath, traverseTreeBFS } from '@devops-web/utils'

export interface TableColumnDataPlus extends TableColumnData {
  [key: string]: unknown
  visible?: boolean
  minWidth?: number
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
        filteredNodes.push({ ...column })
      }
    }
  }
  return filteredNodes
}

export function useColumns<T extends TableColumnDataPlus>(columns: T[]) {
  const originColumns: T[] = cloneDeep(columns)
  const originColumnsRef: Ref<T[]> = ref(columns as any)
  const tableInstance = ref<TableInstance | null>(null)

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
    nextTick(() => {
      updateColumnsWidth()
    })
  })

  const doFlattenColumns = (columns: TableColumnDataPlus[]) => {
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
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== 'number')
    if (flexColumns.length > 0) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80)
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
        if (!column.width && !column.minWidth) {
          column.width = 80
        } else {
          column.width = Number(column.width || column.minWidth)
        }
      })
    }
  }

  function resetColumns() {
    originColumnsRef.value = originColumns
  }

  function replaceColumnByPath(path: string, column: T) {
    setValueByPath(originColumnsRef.value, path, column)
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

  function updateColumnByPath<K extends keyof T>(path: string, field: K, value: T[K]) {
    setValueByPath(originColumnsRef.value, `${path}.${String(field)}`, value)
  }

  function updateColumnByDataIndex<K extends keyof T>(dataIndex: string, field: K, value: T[K]) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        node[field] = value
      }
    })
  }

  function changeColumnVisibleByPath(path: string, visible: string) {
    setValueByPath(originColumnsRef.value, `${path}.visible`, visible)
  }

  function changeColumnVisibleByDataIndex(dataIndex: string, visible: boolean) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        node.visible = visible
      }
    })
  }

  return {
    ref(el: Element | ComponentPublicInstance | null) {
      tableInstance.value = el as TableInstance
    },
    tableInstance,
    originColumns: originColumnsRef,
    columns: columnsRef,
    resetColumns,
    changeColumnVisibleByPath,
    changeColumnVisibleByDataIndex,
    updateColumnByPath,
    updateColumnByDataIndex,
    replaceColumnByPath,
    replaceColumnByDataIndex
  }
}