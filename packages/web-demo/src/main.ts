import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@arco-themes/vue-devops/css/arco.css'
import Components from '@devops-web/components'
import '@devops-web/components/src/index.less'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import router from './router'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(createPinia())
app.use(router)
app.use(Components)

app.mount('#app')
