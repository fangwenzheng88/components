<template>
  <a-trigger
    v-model:popup-visible="popupVisible"
    trigger="click"
    position="br"
    auto-fit-position
    :blur-to-close="false"
    :click-outside-to-close="false"
    :click-to-close="false"
    :unmount-on-close="false"
    :popup-offset="4"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <icon-settings class="devops-columns-setting-btn" v-bind="$attrs" @click="handleClick" />
    <template #content>
      <div class="devops-columns-setting-list" :style="{ width: `${width}px` }">
        <div class="devops-columns-setting-list-item">
          <a-checkbox :model-value="isAllChecked" @change="allCheckedChange">全选</a-checkbox>
        </div>
        <a-scrollbar style="height: 260px; overflow-x: hidden; overflow-y: auto">
          <a-tree
            ref="treeInstance"
            v-model:checked-keys="checkedKeys"
            default-expand-checked
            size="large"
            draggable
            block-node
            default-expand-all
            :checkable="true"
            :data="treeData"
            @select="handleSelect"
            @drop="handleDrop"
          ></a-tree>
        </a-scrollbar>
        <div class="devops-columns-setting-button-layout">
          <a-button @click="handleReset">恢复默认</a-button>
          <a-button type="primary" @click="handleComfirm">确认</a-button>
        </div>
      </div>
    </template>
  </a-trigger>
</template>

<script lang="ts">
import { ref, defineComponent, nextTick, computed } from 'vue'
import type { PropType, Ref } from 'vue'
import { IconSettings } from '@arco-design/web-vue/es/icon'
import { type TreeInstance, type TreeNodeData, Tree, Trigger, Checkbox, Button, Scrollbar } from '@arco-design/web-vue'
import { type TableColumnDataPlus } from '@devops-web/hooks'
import { getValueByPath, setValueByPath, traverseTreeDFS } from '@devops-web/utils'
import { cloneDeep } from 'lodash-es'

type TreeNodeDataPlus = {
  key: string
  visible?: boolean
  dataIndex?: string
  children?: TreeNodeDataPlus[]
} & TreeNodeData

export default defineComponent({
  name: 'ColumnsSetting',
  components: {
    IconSettings,
    ATree: Tree,
    ATrigger: Trigger,
    ACheckbox: Checkbox,
    AButton: Button,
    AScrollbar: Scrollbar
  },
  inheritAttrs: false,
  props: {
    width: {
      type: Number,
      required: false,
      default: 180
    },
    disabledKeys: {
      type: Array as PropType<string[]>,
      required: false,
      default() {
        return []
      }
    },
    columns: {
      type: Array as PropType<TableColumnDataPlus[]>,
      required: true
    }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'update:columns': (columns: TableColumnDataPlus[]) => true
  },
  setup(props, { emit }) {
    let firstColumns: TableColumnDataPlus[] | undefined
    const popupVisible = ref(false)
    const treeInstance = ref<TreeInstance | null>(null)
    const treeData = ref([]) as Ref<TreeNodeDataPlus[]>
    const checkedKeys = ref<string[]>([])
    const isAllChecked = computed(() => {
      let flag = true
      traverseTreeDFS(treeData.value as any, (node) => {
        if (!node.disableCheckbox) {
          if (!node.children || node.children.length === 0) {
            if (!checkedKeys.value.includes(node.key as string)) {
              flag = false
            }
          }
        }
      })
      return flag
    })
    function handlePopupVisibleChange(visible: boolean) {
      if (visible) {
        if (firstColumns === undefined) {
          firstColumns = cloneDeep(props.columns)
        }
        initData(props.columns)
        nextTick(() => {
          treeInstance.value?.expandAll()
        })
      }
    }

    function initData(columns: TableColumnDataPlus[]) {
      checkedKeys.value = []
      treeData.value = convert(columns)
      traverseTreeDFS(treeData.value as any, (node) => {
        if (node.children && node.children.length > 0) {
          return
        }
        if (node.visible !== false) {
          checkedKeys.value.push(node.key as string)
        }
      })
    }

    function handleSelect(selectedKeys: any, data: any) {
      treeInstance.value?.checkNode(data.node.key, !checkedKeys.value.includes(data.node.key))
    }

    function convert<T extends Record<string, any>>(treeData: readonly T[], path: number[] = [], disabled = false): TreeNodeDataPlus[] {
      return treeData.map((item, index) => {
        const key = [...path, index].join('.children.')
        const { title, visible, dataIndex } = item
        const initialChildren = item.children
        const disableCheckbox = disabled ? true : props.disabledKeys.includes(item.dataIndex)
        let children: TreeNodeDataPlus[] | undefined
        if (initialChildren) {
          children = convert(initialChildren, [...path, index], disableCheckbox)
        }
        return {
          key,
          dataIndex,
          title,
          visible,
          disableCheckbox,
          children
        } as TreeNodeDataPlus
      })
    }

    function allCheckedChange() {
      treeInstance.value?.checkAll(!isAllChecked.value)
    }

    function handleDrop({ dragNode, dropNode, dropPosition }: { e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number }) {
      const data = treeData.value
      function loop(data: TreeNodeData[], key: string | number | undefined, callback: (_: TreeNodeData, index: number, arr: TreeNodeData[]) => void) {
        data.some((item, index, arr) => {
          if (item.key === key) {
            callback(item, index, arr)
            return true
          }
          if (item.children) {
            return loop(item.children, key, callback)
          }
          return false
        })
      }

      loop(data, dragNode.key, (_, index, arr) => {
        arr.splice(index, 1)
      })

      if (dropPosition === 0) {
        loop(data, dropNode.key, (item) => {
          item.children = item.children || []
          item.children.push(dragNode)
        })
      } else {
        loop(data, dropNode.key, (_, index, arr) => {
          arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode)
        })
      }
    }

    function handleReset() {
      const copyData = cloneDeep(firstColumns)
      emit('update:columns', copyData || [])
      initData(copyData || [])
    }

    function handleComfirm() {
      popupVisible.value = false

      const nodes: TreeNodeDataPlus[] = (treeInstance.value?.getCheckedNodes({ includeHalfChecked: true }) as TreeNodeDataPlus[]) || []
      traverseTreeDFS(props.columns, (column) => {
        if (!(column.dataIndex && props.disabledKeys.includes(column.dataIndex))) {
          column.visible = false
        }
      })
      nodes.filter(Boolean).forEach((treeNode) => {
        setValueByPath(props.columns, `${treeNode.key}.visible`, true)
      })

      function loop(list: TreeNodeDataPlus[]) {
        const result: TableColumnDataPlus[] = []
        list.forEach((treeNode) => {
          const column = getValueByPath<TableColumnDataPlus>(props.columns, treeNode.key)
          if (column) {
            let children: TableColumnDataPlus[] | undefined
            if (Array.isArray(treeNode.children) && treeNode.children.length > 0) {
              children = loop(treeNode.children)
            }
            column.children = children
            result.push(column)
          }
        })
        return result
      }
      const newColumns = loop(treeData.value)
      emit('update:columns', newColumns)
    }

    function handleClick() {
      popupVisible.value = !popupVisible.value
    }

    return {
      popupVisible,
      treeInstance,
      treeData,
      checkedKeys,
      isAllChecked,
      allCheckedChange,
      handleSelect,
      handlePopupVisibleChange,
      handleDrop,
      handleReset,
      handleComfirm,
      handleClick
    }
  }
})
</script>
