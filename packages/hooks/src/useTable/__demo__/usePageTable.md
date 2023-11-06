# useTablePage

`a-table` 前端页场景的工具函数，简化前端表格的配置

通过 `useColumns` 实现表格列minWidth，visible的功能

:::demo

```vue
<template>
  <div class="vp-raw">
    <a-card :bordered="false" title="查询表格">
      <a-row>
        <a-col :flex="1">
          <a-form :model="formModel" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }" label-align="left">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="number" label="集合编号">
                  <a-input v-model="formModel.number" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" label="集合名称">
                  <a-input v-model="formModel.name" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="contentType" label="内容体裁">
                  <a-select v-model="formModel.contentType" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="filterType" label="筛选方式">
                  <a-select v-model="formModel.filterType" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="createdTime" label="创建时间">
                  <a-range-picker v-model="formModel.createdTime" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="status" label="状态">
                  <a-select v-model="formModel.status" :options="options" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="loadTableData()">
              <template #icon>
                <icon-search />
              </template>
              <span>查询</span>
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              <span>重置</span>
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
              <span>新建</span>
            </a-button>
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  <span>批量导入</span>
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col :span="8" style="text-align: right">
          <a-button>
            <template #icon>
              <icon-download />
            </template>
            <span>下载</span>
          </a-button>
        </a-col>
      </a-row>
      <a-table :bordered="false" :scrollbar="false" :sticky-header="true" v-bind="tableConfig">
        <template #contentType="{ record }">
          <a-space>
            <a-avatar v-if="record.contentType === 'img'" :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-avatar v-else-if="record.contentType === 'horizontalVideo'" :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-avatar v-else :size="16" shape="square">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            {{ record.contentType }}
          </a-space>
        </template>
        <template #filterType="{ record }">
          {{ record.filterType }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ record.status }}
        </template>
        <template #operations="{ record }">
          <a-link type="text" size="small">编辑</a-link>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { useTablePage, useSelectOptions } from '@devops-web/hooks'
import { TablePageData } from '@devops-web/hooks'
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
        status: '已下线',
        filterType: '人工筛选',
        createdTime: new Date()
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

const { options } = useSelectOptions(
  () => {
    return Promise.resolve([
      { label: 'label-1', value: 0 },
      { label: 'label-2', value: 1 }
    ])
  },
  { immediate: true }
)

const generateFormModel = () => {
  return {
    number: '',
    name: '',
    contentType: '',
    filterType: '',
    createdTime: [],
    status: ''
  }
}
const formModel = ref(generateFormModel())

const { loadTableData, tableConfig } = useTablePage({
  fetch(pagination) {
    console.log('查询条件：', formModel.value)
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
      dataIndex: 'contentType',
      slotName: 'contentType'
    },
    {
      title: '筛选方式',
      dataIndex: 'filterType',
      slotName: 'filterType'
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
      title: '状态',
      dataIndex: 'status',
      slotName: 'status'
    },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      width: 120
    }
  ],
  immediate: true // 传true会自动调用一次loadTableData()
})

const reset = () => {
  formModel.value = generateFormModel()
}
</script>
```

:::
