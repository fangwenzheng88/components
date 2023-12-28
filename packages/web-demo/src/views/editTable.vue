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
      <devops-edit-table
        :is-editor="isEditor"
        :cellendedit="handleCellendedit"
        column-resizable
        :bordered="true"
        :scrollbar="false"
        :sticky-header="true"
        v-bind="tableConfig"
      >
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
        <template #status="{ record, column }">
          <a-switch v-model="record[column.dataIndex]" />
        </template>
        <template #operation>
          <a-link type="text" size="small">编辑</a-link>
        </template>
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
  </div>
</template>

<script lang="ts" setup>
import type { EditTableCellParams, EditTableCellEditParams } from '@devops-web/components'
import { useTablePage, useSelectOptions, type TablePageData } from '@devops-web/hooks'

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
    console.log('pagination:', pagination)
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
      title: '开始时间-结束时间',
      dataIndex: 'daterange',
      width: 320,
      render({ record, column }) {
        return record[column.dataIndex!].join(' ~ ')
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      slotName: 'status'
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
  if (['number', 'name', 'createdTime', 'daterange', 'count'].includes(data.column.dataIndex)) {
    return true
  }
  return false
}

async function handleCellendedit(data: EditTableCellEditParams) {
  console.log('handleCellendedit', data)
}

const reset = () => {
  formModel.value = generateFormModel()
}
</script>
