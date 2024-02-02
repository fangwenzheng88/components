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
