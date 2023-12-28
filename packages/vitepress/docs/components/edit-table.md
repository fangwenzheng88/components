# edit-table

:::demo

```vue
<template>
  <a-card class="vp-raw" :bordered="false" title="编辑表格">
    <devops-edit-table
      :is-editor="isEditor"
      :cellendedit="handleCellendedit"
      column-resizable
      :bordered="true"
      :scrollbar="false"
      :sticky-header="true"
      v-bind="tableConfig"
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
        <devops-date-range-editor
          v-else-if="column.dataIndex === 'daterange'"
          v-model="record[column.dataIndex]"
          @popup-visible-change="(visible) => !visible && cellendedit()"
        ></devops-date-range-editor>
        <devops-number-editor v-else-if="column.dataIndex === 'count'" v-model="record[column.dataIndex]" @blur="cellendedit">
          <template #suffix>单位</template>
        </devops-number-editor>
      </template>
    </devops-edit-table>
  </a-card>
</template>

<script lang="ts" setup>
import type { EditTableCellParams, EditTableCellEditParams } from '@devops-web/components'
import { useTablePage } from '@devops-web/hooks'
import { ref } from 'vue'

function getPageList(data: { pageSize: number; pageNum: number }) {
  return new Promise<TablePageData>((resolve) => {
    const list = new Array(data.pageSize).fill(1).map((item, index) => {
      return {
        index: data.pageSize * (data.pageNum - 1) + index + 1,
        number: `number-${index}`,
        name: 'XGMUNG',
        contentType: 'img',
        count: 6,
        status: true,
        filterType: '人工筛选',
        createdTime: '2023-01-09',
        daterange: ['2023-01-09', '2023-01-09']
      }
    })
    setTimeout(() => {
      resolve({
        records: list,
        total: 1000,
        pageNum: data.pageNum,
        pageSize: data.pageSize
      })
    })
  })
}

const { loadTableData, tableConfig } = useTablePage({
  fetch(pagination) {
    return getPageList(pagination)
  },
  columns: [
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
      dataIndex: 'contentType'
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
      title: '开始时间-结束时间',
      dataIndex: 'daterange',
      width: 320,
      render({ record, column }) {
        return record[column.dataIndex!].join(' ~ ')
      }
    },
    {
      title: '状态',
      dataIndex: 'status'
    }
  ],
  immediate: true // 传true会自动调用一次loadTableData()
})

function isEditor(data: EditTableCellParams) {
  console.log(data)
  if (['number', 'name', 'createdTime', 'daterange', 'count'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}

async function handleCellendedit(data: EditTableCellEditParams) {
  console.log('handleCellendedit', data)
}
</script>
```

:::
