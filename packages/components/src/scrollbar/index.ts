import _Scrollbar from './scrollbar.vue'
import { type App } from 'vue'
const Scrollbar = Object.assign(_Scrollbar, {
  install: (app: App) => {
    app.component('A' + _Scrollbar.name, _Scrollbar)
  }
})
export default Scrollbar

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>
export type { ScrollbarProps } from './interface'

declare module 'vue' {
  export interface GlobalComponents {
    AScrollbar: typeof Scrollbar
  }
}
