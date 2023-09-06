import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Components from '@devops-web/components'
import '@devops-web/components/src/index.less'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Components)

app.mount('#app')
