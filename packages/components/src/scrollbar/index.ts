import Scrollbar from './scrollbar.vue'
import { withInstall } from '../utils'

export default withInstall(Scrollbar)

export type ScrollbarInstance = InstanceType<typeof Scrollbar>
export type { ScrollbarProps } from './interface'

declare module 'vue' {
  export interface GlobalComponents {
    DevopsScrollbar: typeof Scrollbar
  }
}
