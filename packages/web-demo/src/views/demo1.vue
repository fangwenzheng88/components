<template>
  <div>
    <div style="text-align: right">
      <devops-columns-setting v-model:columns="originColumns" :disabled-keys="['name']"></devops-columns-setting>
    </div>
    <a-table column-resizable :bordered="{ headerCell: true }" :columns="columns" :data="data" />

    <a-button @click="changeColumnVisibleByDataIndex('email', false)">隐藏Email列</a-button>
    <a-button @click="changeColumnVisibleByDataIndex('email', true)">显示Email列</a-button>
    <a-button @click="updateColumnByDataIndex('email', 'title', '1111111111111')">修改Email列</a-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useColumns } from '@devops-web/hooks'

const { columns, changeColumnVisibleByDataIndex, updateColumnByDataIndex, originColumns } = useColumns([
  {
    title: 'Name',
    dataIndex: 'name',
    render({ record }) {
      return record.name
    }
  },
  {
    title: 'Salary',
    dataIndex: 'salary'
  },
  {
    title: 'AddressAddressAddressAddressAddress',
    dataIndex: 'address'
  },
  {
    title: 'Address2Address2Address2Address2Address2Address2Address2',
    dataIndex: 'address2'
  },
  {
    title: 'Address3Address3Address3Address3Address3Address3Address3',
    dataIndex: 'address3'
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
