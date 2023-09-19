<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <DevopsExpandText :ellipsis="{ rows: 3, suffix: '--Arco Design' }" style="width: 200px; word-break: break-all"
    >A <b>design</b> is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result
    of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of</DevopsExpandText
  >
  <RouterView />
</template>

<style scoped lang="less">
header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
