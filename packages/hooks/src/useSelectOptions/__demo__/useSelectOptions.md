# useSelectOptions

简化 `a-select` options 的定义，并在远程搜索的时候缓存历史 options，避免多选场景下远程搜素时无法展示 label 的情况

## 简单示例

:::demo

```vue
<template>
  <a-select v-model="value" class="vp-raw" style="width: 320px" placeholder="Please select ..." :options="options"></a-select>

  <div style="margin-top: 20px">
    <a-space>
      <a-button type="primary" @click="handleClick">getLabels</a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useSelectOptions } from '@devops-web/hooks'
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'

const value = ref<string>()

const { options, getLabels } = useSelectOptions([
  { label: 'label-1', value: '1' },
  { label: 'label-2', value: '2' },
  { label: 'label-3', value: '3' }
])

function handleClick() {
  const labels = getLabels(value.value)
  Message.info(String(labels))
}
</script>
```

:::

## 远程搜索（单选）

:::demo

```vue
<template>
  <a-select
    v-model="value"
    class="vp-raw"
    style="width: 320px"
    placeholder="Please select ..."
    :options="options"
    :loading="loading"
    :allow-search="true"
    @search="loadOptions"
  ></a-select>

  <div style="margin-top: 20px">
    <a-space>
      <a-button type="primary" @click="handleClick">getLabels</a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useSelectOptions } from '@devops-web/hooks'
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'

const value = ref<string>()

const { options, getLabels, loading, loadOptions } = useSelectOptions((inputValue: string) => {
  if (inputValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ label: `label-${inputValue}`, value: inputValue }])
      }, 2000)
    })
  }
  return Promise.resolve([])
})

function handleClick() {
  const labels = getLabels(value.value)
  Message.info(String(labels))
}
</script>
```

:::

## 远程搜索（多选）

:::demo

```vue
<template>
  <a-select
    v-model="value"
    class="vp-raw"
    style="width: 320px"
    placeholder="Please select ..."
    :options="options"
    :loading="loading"
    :allow-search="true"
    multiple
    :show-extra-options="false"
    @search="loadOptions"
  ></a-select>

  <div style="margin-top: 20px">
    <a-space>
      <a-button type="primary" @click="handleClick">getLabels</a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useSelectOptions } from '@devops-web/hooks'
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'

const value = ref<string[]>([])

const { options, getLabels, loading, loadOptions } = useSelectOptions((inputValue: string) => {
  if (inputValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ label: `label-${inputValue}`, value: inputValue }])
      }, 2000)
    })
  }
  return Promise.resolve([])
})

function handleClick() {
  const labels = getLabels(value.value)
  Message.info(String(labels))
}
</script>
```

:::

## 远程搜索（表单回显）

:::demo

```vue
<template>
  <a-select
    v-model="value"
    class="vp-raw"
    style="width: 320px"
    placeholder="Please select ..."
    :options="options"
    :loading="loading"
    :allow-search="true"
    multiple
    @search="loadOptions"
  ></a-select>

  <div style="margin-top: 20px">
    <a-space>
      <a-button type="primary" @click="handleClick">getLabels</a-button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useSelectOptions } from '@devops-web/hooks'
import { ref, reactive, onMounted } from 'vue'
import { Message } from '@arco-design/web-vue'

const details = reactive({
  selectValue: '',
  selectLabel: ''
})
const value = ref<string>()

const { options, getLabels, loading, loadOptions } = useSelectOptions(
  (inputValue: string) => {
    if (inputValue) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{ label: `label-${inputValue}`, value: inputValue }])
        }, 2000)
      })
    }
    return Promise.resolve([])
  },
  {
    fallback(value) {
      if (value === details.selectValue) {
        return {
          label: details.selectLabel,
          value: details.selectValue
        }
      }
      return { value: value as string, label: undefined }
    }
  }
)

onMounted(() => {
  setTimeout(() => {
    Object.assign(details, {
      selectValue: '999',
      selectLabel: 'label-999'
    })
    value.value = details.selectValue
  }, 1000)
})

function handleClick() {
  const labels = getLabels(value.value)
  Message.info(String(labels))
}
</script>
```

:::
