<template>
  <div :class="prefixCls">
    <a-spin v-for="operation in operationsShow" :key="operation.label" :size="12" :loading="operation.loading">
      <a-link :disabled="operation.disabled" @click="operation.action(operation)">{{ operation.label }}</a-link>
    </a-spin>
    <a-dropdown v-if="operationsDrops.length > 0" :hide-on-select="false" position="br" trigger="hover">
      <a-link><icon-more-vertical /></a-link>
      <template #content>
        <a-doption v-for="operation in operationsDrops" :key="operation.label" :disabled="operation.disabled" @click="operation.action(operation)">
          <a-link :disabled="operation.disabled" :loading="operation.loading">{{ operation.label }}</a-link>
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed, ref, watchEffect } from 'vue'
import type { OperationItem } from '../utils/interface'
import { getPrefixCls } from '../utils'

export default defineComponent({
  name: 'OperationColumn',
  props: {
    operations: {
      type: Array as PropType<OperationItem[]>,
      required: true
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls('operation-column')

    const operationsList = ref<OperationItem[]>([])

    watchEffect(() => {
      operationsList.value = props.operations.map((item) => {
        return {
          ...item
        }
      })
    })

    const operationsShow = computed(() => {
      return operationsList.value.slice(0, 2)
    })

    const operationsDrops = computed(() => {
      return operationsList.value.slice(2)
    })

    return {
      prefixCls,
      operationsShow,
      operationsDrops
    }
  }
})
</script>
../utils/interface
