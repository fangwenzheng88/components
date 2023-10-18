<template>
  <a-space direction="vertical" size="large">
    <div>Show selections after search options</div>
    <a-select
      v-model="modelValue"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      :filter-option="false"
      :options="options"
      :fallback-option="fallbackOption"
      value-key="value2"
      @search="loadOptions"
    >
    </a-select>
    <div>{{ getLabels(modelValue).join(',') }}</div>
    <div>{{ getOptions(modelValue) }}</div>
    <div>Hide selections after search options</div>
    <a-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      :filter-option="false"
      :show-extra-options="false"
      @search="handleSearch"
    />
  </a-space>
</template>

<script lang="ts" setup>
import { useSelectOptions } from '@devops-web/hooks'
import { ref } from 'vue'

const modelValue = ref(['1-Option1'])
const { options, loadOptions, loading, setOptions, getOptions, getLabels, fallbackOption } = useSelectOptions(
  (value) => {
    if (value) {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          resolve([
            {
              label: `${value}-Option1`,
              value: `${value}-Option2`
            }
          ])
          loading.value = false
        }, 2000)
      })
    }
    return Promise.resolve([])
  },
  {
    immediate: true,
    fallback(value) {
      if (value === '1-Option1') {
        return { value, label: `+${value}+` }
      }
      return { value }
    }
  }
)

console.log(getOptions(modelValue.value))

const handleSearch = (value?: string) => {
  if (value) {
    loading.value = true
    window.setTimeout(() => {
      setOptions([`${value}-Option1`, `${value}-Option2`, `${value}-Option3`])
      loading.value = false
    }, 2000)
  }
}
</script>
