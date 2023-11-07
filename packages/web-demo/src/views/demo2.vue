<template>
  <DevopsScrollbar type="track" v-bind="bindObject" style="width: 800px; height: 200px; overflow: auto">
    <div style="width: 2000px; height: 2000px; background-color: red">Content</div>
  </DevopsScrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const refInstance = ref<any>(null)
const bindObject = ref<any>({
  type: 'embed',
  ref: (el: any) => {
    refInstance.value = el
  }
})
</script>
