import ResizeObserver from './resize-observer'
import { withInstall } from '../utils'

export default withInstall(ResizeObserver)

export type ResizeObserverInstance = InstanceType<typeof ResizeObserver>

declare module 'vue' {
  export interface GlobalComponents {
    DevopsResizeObserver: typeof ResizeObserver
  }
}
