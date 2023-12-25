<template>
  <a-form ref="formRef" disabled class="vp-raw" :model="form" :auto-label-width="true">
    <a-form-item field="name" label="Username" validate-trigger="input" required>
      <a-input v-model="form.name" placeholder="please enter your username..." />
      <template #extra>
        <div>Used to login</div>
      </template>
    </a-form-item>
    <a-form-item field="post" label="Post" validate-trigger="input" required>
      <a-input v-model="form.post" placeholder="please enter your post..." />
      <template #extra>
        <div>Used to login</div>
      </template>
      <template #help>
        <div>Custom valitae message</div>
      </template>
    </a-form-item>
    <a-form-item field="tableData" :disabled="disabled" label="tableData" validate-trigger="input" required>
      <devops-edit-table
        :is-editing="isEditing"
        column-resizable
        :bordered="true"
        :scrollbar="false"
        :sticky-header="true"
        :data="form.tableData"
        :columns="columns"
      >
        <template #editor="{ record, column, cellendedit }">
          <devops-input-editor v-if="column.dataIndex === 'number'" v-model="record[column.dataIndex]" @blur="cellendedit">
            <template #suffix>元</template>
          </devops-input-editor>
          <devops-select-editor
            v-else-if="column.dataIndex === 'name'"
            v-model="record[column.dataIndex]"
            multiple
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-select-editor>
          <devops-date-editor
            v-else-if="column.dataIndex === 'createdTime'"
            v-model="record[column.dataIndex]"
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-date-editor>
          <devops-number-editor v-else-if="column.dataIndex === 'count'" v-model="record[column.dataIndex]" @blur="cellendedit">
            <template #suffix>单位</template>
          </devops-number-editor>
        </template>
      </devops-edit-table>
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button html-type="submit">Submit</a-button>
      </a-space>
    </a-form-item>
  </a-form>
  <a-switch v-model="disabled"></a-switch>
  {{ form }}
</template>

<script setup lang="ts">
import type { EditTableCellParams } from '@devops-web/components'
import type { TableColumnDataPlus } from '@devops-web/hooks'
import { reactive, ref } from 'vue'

const disabled = ref(false)

const form = reactive({
  name: '',
  post: '',
  isRead: false,
  tableData: [{ index: '1' }]
})

const columns: TableColumnDataPlus[] = [
  {
    title: '编号',
    dataIndex: 'index',
    width: 100
  },
  {
    title: '集合编号',
    dataIndex: 'number',
    minWidth: 200
  },
  {
    title: '集合名称',
    dataIndex: 'name'
  },
  {
    title: '内容体裁',
    dataIndex: 'contentType',
    slotName: 'contentType'
  },
  {
    title: '筛选方式',
    dataIndex: 'filterType',
    slotName: 'filterType'
  },
  {
    title: '内容量',
    dataIndex: 'count'
  },
  {
    title: '创建时间',
    dataIndex: 'createdTime'
  },
  {
    title: '状态',
    dataIndex: 'status',
    slotName: 'status'
  }
]

function isEditing(data: EditTableCellParams) {
  if (['number', 'name', 'createdTime', 'daterange', 'count'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}
</script>
