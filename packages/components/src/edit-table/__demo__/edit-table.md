# edit-table

可编辑表格的使用示例

:::demo

```vue
<template>
  <a-card class="vp-raw" :bordered="false" title="查询表格">
    <devops-edit-table
      :is-editor="isEditor"
      :cellendedit="handleCellendedit"
      column-resizable
      :bordered="true"
      :scrollbar="false"
      :sticky-header="true"
      v-bind="tableConfig"
    >
      <template #status="{ record, column }">
        <a-switch v-model="record[column.dataIndex]" />
      </template>
      <template #operation>
        <a-link type="text" size="small">编辑</a-link>
      </template>
      <template #editor="{ record, column, cellendedit }">
        <devops-number-editor v-if="column.dataIndex === 'count'" v-model="record[column.dataIndex]" @blur="cellendedit">
          <template #suffix>单位</template>
        </devops-number-editor>
        <devops-number-editor v-else-if="column.dataIndex === 'price'" v-model="record[column.dataIndex]" @blur="cellendedit">
          <template #suffix>元</template>
        </devops-number-editor>
      </template>
    </devops-edit-table>
  </a-card>
</template>

<script lang="ts" setup>
import type { EditTableCellParams, EditTableCellEditParams } from '@devops-web/components'
import { useTablePage, type TablePageData } from '@devops-web/hooks'

import { ref } from 'vue'

function getPageList(data: { pageSize: number; pageNum: number }) {
  return new Promise<TablePageData>((resolve) => {
    const list = new Array(data.pageSize).fill(1).map((item, index) => {
      return {
        count: 1,
        price: 0,
        total: 0
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
    console.log('pagination:', pagination)
    return getPageList(pagination)
  },
  columns: [
    {
      title: '数量',
      dataIndex: 'count',
      minWidth: 200
    },
    {
      title: '单价',
      dataIndex: 'price',
      minWidth: 200
    },
    {
      title: '总价',
      dataIndex: 'total',
      minWidth: 200
    },
    {
      title: '操作',
      dataIndex: 'operation',
      slotName: 'operation',
      width: 120
    }
  ],
  immediate: true // 传true会自动调用一次loadTableData()
})

function isEditor(data: EditTableCellParams) {
  if (['count', 'price'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}

function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

async function handleCellendedit(data: EditTableCellEditParams) {
  // 模拟请求后端
  await sleep()
  console.log('handleCellendedit', data)
  if (data.column.dataIndex === 'count' || data.column.dataIndex === 'price') {
    if (data.record.count !== undefined && data.record.price !== undefined) {
      data.record.total = data.record.count * data.record.price
    } else {
      data.record.total = 0
    }
  }
}
</script>
```

:::
