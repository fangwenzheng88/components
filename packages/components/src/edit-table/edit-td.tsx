import { PropType, computed, createVNode, defineComponent, getCurrentInstance, ref } from 'vue'
import { Spin, TableData } from '@arco-design/web-vue'
import { cloneDeep } from 'lodash-es'
import type { EditTableColumnData } from './interface'
import { getPrefixCls } from '../utils'
import { useInjectEditTableContext } from './context'

export default defineComponent({
  props: {
    record: {
      type: Object as PropType<TableData>,
      required: true
    },
    column: {
      type: Object as PropType<EditTableColumnData>,
      required: true
    },
    rowIndex: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const prefixCls = getPrefixCls('edit-table')

    const tableCtx = useInjectEditTableContext()

    const loading = ref(false)
    const isEditing = ref(false)

    const isEditor = computed(() => {
      if (tableCtx.isEditor && !tableCtx.mergedDisabled.value) {
        return tableCtx.isEditor({
          record: props.record,
          column: props.column,
          rowIndex: props.rowIndex
        })
      }

      return false
    })

    function isErrorCell() {
      if (tableCtx.validator && tableCtx.mergedError.value) {
        return !tableCtx.validator({
          record: props.record,
          column: props.column,
          rowIndex: props.rowIndex
        })
      }

      return false
    }

    function renderInput() {
      if (isEditing.value) {
        const inputVNode = createVNode(tableCtx.slots.editor, {
          record: props.record,
          column: props.column,
          rowIndex: props.rowIndex,
          cellendedit: handleCellendedit
        })
        return [inputVNode, loading.value ? createVNode(Spin, { class: `${prefixCls}-cell-spin` }) : null]
      }
      return [slots.default?.(), loading.value ? createVNode(Spin, { class: `${prefixCls}-cell-spin` }) : null]
    }

    let beforeRecord: any = null

    async function handleClick() {
      if (tableCtx.cellbeginedit) {
        const data = {
          record: props.record,
          column: props.column,
          rowIndex: props.rowIndex,
          cancel: false
        }
        loading.value = true
        await tableCtx.cellbeginedit(data)
        loading.value = false
        if (data.cancel) {
          return
        }
      }
      if (isEditor.value) {
        beforeRecord = cloneDeep(props.record)
        isEditing.value = true
      }
    }

    async function handleCellendedit() {
      if (tableCtx.cellendedit) {
        const data = {
          record: props.record,
          column: props.column,
          rowIndex: props.rowIndex,
          beforeRecord,
          cancel: false
        }
        loading.value = true
        await tableCtx.cellendedit(data)
        loading.value = false
        if (data.cancel === false) {
          isEditing.value = false
        }
      } else {
        isEditing.value = false
      }
      return isEditing.value
    }

    const isSummary = getCurrentInstance()?.parent?.props.summary ?? false

    return () => {
      if (isSummary || !isEditor.value) {
        return createVNode('td', {}, { default: () => [slots.default?.()] })
      }

      const className: string[] = []
      if (isEditor.value) {
        className.push(`${prefixCls}-edit-td`)
      }
      if (tableCtx.showEditor.value) {
        className.push(`${prefixCls}-edit-td-bg`)
      }
      if (isEditing.value) {
        className.push(`${prefixCls}-edit-td-active`)
      }
      const isError = isErrorCell()
      if (isError) {
        className.push(`${prefixCls}-edit-td-is-error`)
      }
      return createVNode('td', { class: className, onClick: handleClick }, { default: () => renderInput() })
    }
  }
})
