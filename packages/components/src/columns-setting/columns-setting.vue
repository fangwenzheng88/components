<template>
  <a-button :class="`${prefixCls}-btn`" @click="handleClick">
    <template #icon>
      <icon-settings />
    </template>
  </a-button>
  <a-modal v-model:visible="visible" :width="1000" :mask-closable="false" :esc-to-close="false" title="表头配置">
    <div :class="`${prefixCls}-content`">
      <a-scrollbar :outer-class="`${prefixCls}-left`" :outer-style="{ height: '100%' }" style="height: 100%; overflow: auto">
        <div v-for="item in groupList.filter((el) => el.list.length > 0)" :key="item.group" :class="`${prefixCls}-group-item`">
          <div :class="`${prefixCls}-group-title-wrap`">
            <div>{{ item.title }}</div>
            <a-checkbox
              :model-value="isCheckAll(item.list)"
              :indeterminate="isIndeterminate(item.list)"
              @change="(checked) => handleChangeAll(checked, item.list)"
              >全选</a-checkbox
            >
          </div>
          <a-grid :cols="4" :col-gap="12" :row-gap="16" :class="`${prefixCls}-group-content`">
            <a-grid-item v-for="subItem in item.list" :key="subItem.dataIndex">
              <a-checkbox
                :disabled="disabledKeys.includes(subItem.dataIndex)"
                :model-value="checkedKeys.includes(subItem.dataIndex)"
                @change="(checked) => handleChange(checked, subItem)"
                >{{ subItem.title }}</a-checkbox
              >
            </a-grid-item>
          </a-grid>
        </div>
      </a-scrollbar>
      <div :class="`${prefixCls}-right`">
        <div :class="`${prefixCls}-right-header`">当前选中字段</div>
        <a-scrollbar :outer-style="{ minHeight: '0', flexGrow: '1' }" style="height: 100%; overflow: auto">
          <div :class="`${prefixCls}-sort-wrap`">
            <div
              v-for="(column, i) in visibleColumns"
              :key="column.dataIndex"
              :draggable="!disableSortKeys.includes(column.dataIndex)"
              :class="[
                `${prefixCls}-sort-item`,
                {
                  [`${prefixCls}-sort-item-delete-disabled`]: disabledKeys.includes(column.dataIndex),
                  [`${prefixCls}-sort-item-sort-disabled`]: disableSortKeys.includes(column.dataIndex)
                }
              ]"
              @dragstart="dragstart($event, i)"
              @dragenter="dragenter($event, i)"
              @dragend="dragend"
              @dragover="dragover"
            >
              <div :class="`${prefixCls}-sort-item-content`">
                <icon-drag-dot-vertical />
                <span :class="`${prefixCls}-sort-item-label`">{{ column.title }}</span>
              </div>
              <icon-close @click="handleChange(false, column)"></icon-close>
            </div>
          </div>
        </a-scrollbar>
      </div>
    </div>

    <template #footer>
      <div :class="`${prefixCls}-footer`">
        <a-checkbox :model-value="isCheckAll(copyColumns)" @change="handleCheckedAll">全选</a-checkbox>
        <span>
          <a-button @click="handleCancel">取消</a-button>
          <a-button style="margin-left: 10px" type="primary" @click="handleOk">确认</a-button>
        </span>
      </div>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, type Ref, type PropType } from 'vue'
import { IconSettings, IconClose, IconDragDotVertical } from '@arco-design/web-vue/es/icon'
import { Checkbox, Button, Modal, Grid, GridItem, Scrollbar } from '@arco-design/web-vue'
import { type TableColumnDataPlus } from '@devops-web/hooks'
import { ArrayUtils } from '@devops-web/utils'
import { getPrefixCls } from '../utils'

type Group = {
  title: string
  group: string
}

export default defineComponent({
  name: 'ColumnsSetting',
  components: {
    IconSettings,
    IconClose,
    IconDragDotVertical,
    ACheckbox: Checkbox,
    AButton: Button,
    AModal: Modal,
    AGrid: Grid,
    AGridItem: GridItem,
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
        return ['index', 'operation']
      }
    },
    disableSortKeys: {
      type: Array as PropType<string[]>,
      required: false,
      default() {
        return ['index', 'operation']
      }
    },
    columns: {
      type: Array as PropType<TableColumnDataPlus[]>,
      required: true
    },
    group: {
      type: Array as PropType<Group[]>,
      required: false,
      default() {
        return [
          { title: '人员相关', group: 'user' },
          { title: '日期相关', group: 'date' }
        ]
      }
    }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'update:columns': (columns: TableColumnDataPlus[]) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('columns-setting')

    const visible = ref(false)
    const checkedKeys = ref<string[]>([])
    const copyColumns: Ref<TableColumnDataPlus[]> = ref([])
    const groupList: {
      title: string
      group: string
      list: TableColumnDataPlus[]
    }[] = reactive(
      [{ title: '基础字段', group: 'base' }, ...props.group].map((el) => {
        return {
          title: el.title,
          group: el.group,
          list: []
        }
      })
    )

    const visibleColumns = computed(() => {
      return copyColumns.value.filter((col) => checkedKeys.value.includes(col.dataIndex))
    })

    function handleClick() {
      visible.value = !visible.value
      copyColumns.value = [...props.columns]
      groupList.forEach((el) => {
        el.list = []
      })
      copyColumns.value.forEach((col) => {
        if (col.visible !== false) {
          checkedKeys.value.push(col.dataIndex)
        }
        addGroupItem(col)
      })
    }

    function addGroupItem(column: TableColumnDataPlus) {
      const group = column.group ?? 'base'
      groupList.forEach((el) => {
        if (el.group === group) {
          el.list.push(column)
        }
      })
    }

    function handleOk() {
      copyColumns.value.forEach((col) => {
        if (checkedKeys.value.includes(col.dataIndex)) {
          col.visible = true
        } else {
          col.visible = false
        }
      })
      emit('update:columns', copyColumns.value)
      visible.value = false
    }

    function handleCancel() {
      visible.value = false
    }

    function isCheckAll(list: TableColumnDataPlus[]) {
      if (list.length === 0) {
        return false
      }
      return list.every((el) => {
        return props.disabledKeys.includes(el.dataIndex) || checkedKeys.value.includes(el.dataIndex)
      })
    }
    function isIndeterminate(list: TableColumnDataPlus[]) {
      if (list.length === 0) {
        return false
      }
      return isCheckAll(list)
        ? false
        : list.some((el) => {
            return !props.disabledKeys.includes(el.dataIndex) && checkedKeys.value.includes(el.dataIndex)
          })
    }

    function handleChange(checked: boolean | (string | number | boolean)[], column: TableColumnDataPlus) {
      if (props.disabledKeys.includes(column.dataIndex)) {
        return
      }
      if (checked) {
        ArrayUtils.addIfNotExists(checkedKeys.value, column.dataIndex)
      } else {
        ArrayUtils.removeAll(checkedKeys.value, column.dataIndex)
      }
    }

    function handleChangeAll(checked: boolean | (string | number | boolean)[], list: TableColumnDataPlus[]) {
      if (checked) {
        list.forEach((column) => {
          if (props.disabledKeys.includes(column.dataIndex)) {
            return
          }
          ArrayUtils.addIfNotExists(checkedKeys.value, column.dataIndex)
        })
      } else {
        list.forEach((column) => {
          if (props.disabledKeys.includes(column.dataIndex)) {
            return
          }
          ArrayUtils.removeAll(checkedKeys.value, column.dataIndex)
        })
      }
    }

    function handleCheckedAll(checked: boolean | (string | number | boolean)[]) {
      copyColumns.value.forEach((column) => {
        if (props.disabledKeys.includes(column.dataIndex)) {
          return
        }
        if (checked) {
          ArrayUtils.addIfNotExists(checkedKeys.value, column.dataIndex)
        } else {
          ArrayUtils.removeAll(checkedKeys.value, column.dataIndex)
        }
      })
    }

    let dragIndex = 0

    function dragstart(e: DragEvent, index: number) {
      e.stopPropagation()
      dragIndex = index
    }
    function dragenter(e: DragEvent, index: number) {
      e.preventDefault()
      // 拖拽到原位置时不触发
      if (dragIndex !== index) {
        const source = copyColumns.value[dragIndex]
        copyColumns.value.splice(dragIndex, 1)
        copyColumns.value.splice(index, 0, source)

        // 更新节点位置
        dragIndex = index
      }
    }
    function dragover(e: DragEvent) {
      e.preventDefault()
      e.dataTransfer!.dropEffect = 'move'
    }
    function dragend() {}

    return {
      prefixCls,
      visible,
      checkedKeys,
      groupList,
      copyColumns,
      visibleColumns,
      handleClick,
      handleOk,
      handleCancel,
      isCheckAll,
      isIndeterminate,
      handleChange,
      handleChangeAll,
      handleCheckedAll,
      dragstart,
      dragenter,
      dragover,
      dragend
    }
  }
})
</script>
