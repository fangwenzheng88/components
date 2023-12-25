# columns-setting

a-table 定制列组件，需要配合 useTable 或 useTablePage 这两个 hooks 使用

- columns 表格列
- disabledKeys 不允许修改显示的列 默认值 ['index']
- disableSortKeys 不允许修改排序的列 默认值 ['index', 'operation']

:::demo

```vue
<template>
  <div style="margin-bottom:20px;text-align:right;">
    <devops-columns-setting v-model:columns="originColumns"></devops-columns-setting>
  </div>
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
const { tableConfig, originColumns } = useTable({
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
      title: '创建人',
      dataIndex: 'creator',
      group: 'user'
    },
    {
      title: '到期日期',
      dataIndex: 'qdrq',
      group: 'date'
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
