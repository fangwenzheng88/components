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
  pagination: true,
  operations(record) {
    if (record.index > 20) {
      return []
    }
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
      },
      {
        label: '删除',
        disabled: true,
        action: () => {
          console.log('删除')
        }
      },
      {
        label: '启动',
        disabled: true,
        action: () => {
          console.log('启动')
        }
      },
      {
        label: '停止',
        action: () => {
          console.log('停止')
        }
      }
    ]
  }
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
