import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ArcoVue);
    ctx.app.use(ArcoVueIcon);
    useComponents(ctx.app)
  }
}
