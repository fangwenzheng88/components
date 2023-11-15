import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import Components from '@devops-web/components'
import '@devops-web/components/src/index.less'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ArcoVue);
    ctx.app.use(ArcoVueIcon);
    ctx.app.use(Components);
    useComponents(ctx.app)
  }
}
