# useTable

`a-table` 前端分页、不分页场景的工具函数，简化前端表格的配置

通过 `useColumns` 实现表格列 minWidth，visible 的功能

## 示例一

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
  operations() {
    return [
      {
        label: '详情',
        action: () => {
          console.log('详情')
        }
      },
      {
        label: '编辑',
        action: (operation) => {
          operation.loading = true
          setTimeout(() => {
            operation.loading = false
          }, 2000)
          console.log('编辑')
        }
      }
    ]
  },
  immediate: true,
  pagination: true
})
</script>
```

:::

## 示例二

省略 fetch 配置参数，通过其他途径设置 tableData

:::demo

```vue
<template>
  <a-table class="vp-raw" v-bind="tableConfig"></a-table>
</template>

<script lang="ts" setup>
import { useTable } from '@devops-web/hooks'
import { onMounted } from 'vue'

const { tableData, loading, tableConfig } = useTable<Record<string, any>>({
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
  operations() {
    return [
      {
        label: '详情',
        action: () => {
          console.log('详情')
        }
      },
      {
        label: '编辑',
        action: (operation) => {
          operation.loading = true
          setTimeout(() => {
            operation.loading = false
          }, 2000)
          console.log('编辑')
        }
      }
    ]
  },
  pagination: true
})

onMounted(() => {
  const list = new Array(30).fill(1).map((item, index) => {
    return {
      index: index + 1,
      name: `name-${index}`,
      htbhnew: `NO-${index}`,
      qdrq: new Date(),
      level: 1
    }
  })
  loading.value = true
  setTimeout(() => {
    loading.value = false
    tableData.value = list
  }, 1000)
})
</script>
```

:::
