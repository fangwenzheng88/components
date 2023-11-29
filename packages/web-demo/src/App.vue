<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header>
      <a-menu :selected-keys="selectedKeys" theme="dark" mode="horizontal" @menu-item-click="handleMenuItemClick">
        <a-menu-item v-for="item of appRoutes" :key="(item.name as string)">{{ item.name }}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 20px">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { appRoutes } from '@/router/routes'

const route = useRoute()
const router = useRouter()

const selectedKeys = computed(() => {
  return [route.matched[route.matched.length - 1]?.name as string]
})

function handleMenuItemClick(key: string) {
  router.push({ name: key })
}
</script>
