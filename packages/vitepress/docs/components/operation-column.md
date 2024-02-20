# operation-column

a-table 操作列单元格组件，配合 useTable/usePageTable 使用

- operations 操作列数组

:::demo

```vue
<template>
  <div class="vp-raw">
    <a-card :bordered="false" title="表格">
      <a-table column-resizable :bordered="{ headerCell: true }" :scrollbar="false" :sticky-header="true" v-bind="tableConfig">
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
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { useTablePage, type TablePageData } from '@devops-web/hooks'

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

const { loadTableData, tableConfig } = useTablePage({
  fetch(pagination) {
    console.log('pagination:', pagination)
    return getPageList(pagination)
  },
  columns: [
    {
      title: '编号',
      dataIndex: 'index',
      width: 0,
      ellipsis: true
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
    }
  ],
  operations(record) {
    // 例子: 大于20条不展示操作列
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
  },
  immediate: true
})
</script>
```

:::
