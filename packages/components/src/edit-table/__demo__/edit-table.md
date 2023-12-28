# edit-table

:::demo

```vue
<template>
  <a-form ref="formRef" class="vp-raw" :model="formData" :auto-label-width="true" :rules="rules" @submit-success="handleSubmit">
    <a-form-item field="name" label="名称">
      <a-input v-model="formData.name" />
    </a-form-item>
    <a-form-item field="age" label="年龄">
      <a-input-number v-model="formData.age" />
    </a-form-item>
    <a-form-item field="tableData" label="可编辑表格">
      <devops-edit-table
        :is-editor="isEditor"
        :validator="validatorTableData"
        column-resizable
        :bordered="{ cell: true }"
        :data="formData.tableData"
        :columns="columns"
        table-layout-fixed
        :pagination="false"
        show-editor
      >
        <template #editor="{ record, column, cellendedit }">
          <devops-input-editor v-if="column.dataIndex === 'code'" v-model="record[column.dataIndex]" @blur="cellendedit"></devops-input-editor>
          <devops-select-editor
            v-else-if="column.dataIndex === 'name'"
            v-model="record[column.dataIndex]"
            :options="[1, 2, 3, 4, 5, 6]"
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-select-editor>
          <devops-input-editor v-if="column.dataIndex === 'filterType'" v-model="record[column.dataIndex]" @blur="cellendedit"></devops-input-editor>
          <devops-date-editor
            v-else-if="column.dataIndex === 'createdTime'"
            v-model="record[column.dataIndex]"
            @popup-visible-change="(visible) => !visible && cellendedit()"
          ></devops-date-editor>
          <devops-number-editor v-else-if="column.dataIndex === 'count'" v-model="record[column.dataIndex]" @blur="cellendedit">
            <template #suffix>单位</template>
          </devops-number-editor>
        </template>
        <template #operation="{ rowIndex }">
          <a-link @click="handleDeleteTableData(rowIndex)">删除</a-link>
        </template>
      </devops-edit-table>
      <template #extra>
        <a-link @click="handleAddTableData">添加一条数据</a-link>
      </template>
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button @click="handleReset">重置</a-button>
        <a-button html-type="submit">提交</a-button>
      </a-space>
    </a-form-item>
  </a-form>
  {{ formData }}
</template>

<script setup lang="ts">
import type { FormInstance, FieldRule } from '@arco-design/web-vue'
import type { EditTableCellParams } from '@devops-web/components'
import type { TableColumnDataPlus } from '@devops-web/hooks'
import { reactive, ref } from 'vue'

interface FormDataType {
  name?: string
  age?: number
  tableData: Record<string, any>[]
}

const defaultFormData = (): FormDataType => {
  return {
    name: undefined,
    age: undefined,
    tableData: []
  }
}

const formRef = ref<FormInstance | null>(null)
const formData: FormDataType = reactive(defaultFormData())

/**
 * 重置表单数据
 */
function handleReset() {
  formRef.value?.resetFields()
  Object.assign(formData, defaultFormData())
}

function handleSubmit(values: Record<string, any>) {
  console.log('表单数据:', values)
  alert('表单提交成功!')
}

const rules: Record<string, FieldRule<any> | FieldRule<any>[]> = {
  name: { required: true, message: '请填写数据' },
  age: { required: true, message: '请填写数据' },
  tableData: [
    { type: 'array', minLength: 1, message: '最少新增1条数据', required: true },
    {
      validator(value, callback) {
        const messageArr: string[] = []
        value.forEach((rowData: any, rowIndex: number) => {
          if (!rowData.code) {
            messageArr.push(`第${rowIndex + 1}行，集合编号必填`)
          }
          if (!rowData.name) {
            messageArr.push(`第${rowIndex + 1}行，集合名称必填`)
          }
        })
        callback(messageArr.join('；'))
      }
    }
  ]
}

const columns: TableColumnDataPlus[] = [
  {
    title: '集合编号',
    dataIndex: 'code'
  },
  {
    title: '集合名称',
    dataIndex: 'name'
  },
  {
    title: '筛选方式',
    dataIndex: 'filterType'
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
    title: '操作',
    width: 120,
    dataIndex: 'operation',
    slotName: 'operation'
  }
]

/**
 * 判断哪些单元格可编辑
 * 返回true的单元格可以编辑
 */
function isEditor(data: EditTableCellParams) {
  if (['code', 'name', 'filterType', 'count', 'createdTime'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}

/**
 * 校验单元格数据是否正确，只有可编辑单元格才会校验。
 *
 * 这里的校验只用作单元格的样式判断，实际提交校验需要通过表单的rules处理
 */
function validatorTableData(data: EditTableCellParams) {
  if (['code', 'name'].includes(data.column.dataIndex)) {
    const cellVal = data.record[data.column.dataIndex]
    if (cellVal === undefined || cellVal === null || cellVal === '') {
      return false
    }
  }
  return true
}

/**
 * 给可编辑表格增加一行
 */
function handleAddTableData() {
  formData.tableData.push({})
}

/**
 * 删除对应行数据
 */
function handleDeleteTableData(rowIndex: number) {
  formData.tableData.splice(rowIndex, 1)
}
</script>
```

:::
