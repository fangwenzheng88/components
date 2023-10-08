<template>
  <div>
    <a-table column-resizable :bordered="{ headerCell: true }" :columns="columns" :data="data" />

    <a-button @click="changeVisibleByDataIndex('email', false)">隐藏Email列</a-button>
    <a-button @click="changeVisibleByDataIndex('email', true)">显示Email列</a-button>
    <a-button @click="updateColumnByDataIndex('email', 'title', '1111111111111')">修改Email列</a-button>
    <a-button @click="updateColumnByPath('3.children.0', 'title', '333333333')">修改Email列</a-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useColumns } from '@devops-web/hooks'

const { columns, changeVisibleByDataIndex, updateColumnByDataIndex, updateColumnByPath } = useColumns([
  {
    title: 'Name',
    dataIndex: 'name',
    render({ record }) {
      return record.name
    }
  },
  {
    title: 'Salary',
    test: 1,
    dataIndex: 'salary'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: '多层Email',
    children: [
      {
        title: 'Email',
        test: '123',
        dataIndex: 'email'
      }
    ]
  }
])

const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }
])
</script>
