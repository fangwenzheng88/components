import _Scrollbar from './scrollbar.vue'
import { withInstall } from '../utils'

export default withInstall(_Scrollbar)

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>
export type { ScrollbarProps } from './interface'

declare module 'vue' {
  export interface GlobalComponents {
    DevopsScrollbar: typeof _Scrollbar
  }
}
