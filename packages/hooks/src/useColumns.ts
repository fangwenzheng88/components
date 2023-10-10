import { type TableColumnData } from '@arco-design/web-vue'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import { setValueByPath, traverseTreeBFS } from '@devops-web/utils'

export interface TableColumnDataPlus extends TableColumnData {
  [key: string]: unknown
  visible?: boolean
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

  const columnsComputed = computed(() => {
    return filterColumns(originColumnsRef.value)
  })

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

  function changeVisibleByPath(path: string, visible: string) {
    setValueByPath(originColumnsRef.value, `${path}.visible`, visible)
  }

  function changeVisibleByDataIndex(dataIndex: string, visible: boolean) {
    traverseTreeBFS(originColumnsRef.value, (node) => {
      if (node.dataIndex === dataIndex) {
        node.visible = visible
      }
    })
  }

  return {
    originColumns: originColumnsRef,
    columns: columnsComputed,
    resetColumns,
    changeVisibleByPath,
    changeVisibleByDataIndex,
    updateColumnByPath,
    updateColumnByDataIndex,
    replaceColumnByPath,
    replaceColumnByDataIndex
  }
}
