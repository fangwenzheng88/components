# 快速上手

## 安装

安装 `@devops-web/components`

```sh
pnpm add @devops-web/components
```

## 注册全局组件

```ts
import { createApp } from 'vue'
import Components from '@devops-web/components'
import '@devops-web/components/es/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Components)
```
