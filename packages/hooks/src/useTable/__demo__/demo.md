# useTable

:::demo

```vue
<template>
  <a-table class="vp-raw" v-bind="tableConfig"></a-table>
</template>

<script lang="ts" setup>
import { useTable } from '@devops-web/hooks'

function getList() {
  return new Promise<Record<string, any>[]>((resolve) => {
    const list = new Array(30).fill(1).map((item, index) => {
      return {
        index: index + 1,
        name: `name-${index}`,
        htbhnew: `NO-${index}`,
        qdrq: new Date(),
        level: 1
      }
    })
    setTimeout(() => {
      resolve(list)
    })
  })
}

/**
 * 示例:前端分页
 */
const { tableConfig } = useTable({
  fetch: getList,
  columns: [
    {
      title: '编号',
      dataIndex: 'index',
      width: 120
    },
    {
      title: '事项主题',
      dataIndex: 'name'
    },
    {
      title: '相关合同',
      dataIndex: 'htbhnew'
    },
    {
      title: '到期日期',
      dataIndex: 'qdrq'
    },
    {
      title: '优先级',
      dataIndex: 'level'
    }
  ],
  immediate: true,
  pagination: true
})
</script>
```

:::
