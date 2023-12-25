import { Table, TableData, useFormItem } from '@arco-design/web-vue'
import { PropType, createVNode, defineComponent, toRefs } from 'vue'
import { getValueByPath } from '@devops-web/utils'
import type { EditTableCellEditParams, EditTableCellParams, EditTableColumnData } from './interface'
import EditTd from './edit-td'
import { useProvideEditTableContext } from './context'
import { getPrefixCls } from '../utils'

export default defineComponent({
  name: 'EditTable',
  props: {
    data: {
      type: Array as PropType<TableData[]>,
      required: true
    },
    columns: {
      type: Array as PropType<EditTableColumnData[]>,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isEditing: {
      type: Function as PropType<(data: EditTableCellParams) => boolean>,
      requeired: false
    },
    cellendedit: {
      type: Function as PropType<(data: EditTableCellEditParams) => Promise<void> | void>,
      requeired: false
    }
  },
  setup(props, { slots, attrs }) {
    const { disabled } = toRefs(props)

    const prefixCls = getPrefixCls('edit-table')

    const { mergedDisabled, mergedError } = useFormItem({ disabled })
    console.log('------------------->', mergedDisabled, mergedError)

    useProvideEditTableContext({
      isEditing: props.isEditing,
      cellendedit: props.cellendedit,
      mergedDisabled,
      slots
    })

    function renderTd(data: { record: TableData; column: EditTableColumnData; rowIndex: number }) {
      const { record, column, rowIndex } = data
      return createVNode(EditTd, { record, column, rowIndex })
    }

    function renderSummaryCell(data: { record: TableData; column: EditTableColumnData; rowIndex: number }) {
      const { record, column } = data
      return String(getValueByPath(record, column.dataIndex) ?? '')
    }

    function renderTable() {
      return (
        <Table
          class={prefixCls}
          data={props.data}
          columns={props.columns}
          {...attrs}
          v-slots={{
            td: renderTd,
            'summary-cell': renderSummaryCell,
            ...slots
          }}
        ></Table>
      )
    }

    return () => {
      return renderTable()
    }
  }
})
