import _ResizeObserver from './resize-observer'
import { withInstall } from '../utils'

export const ResizeObserver = withInstall(_ResizeObserver)

export default ResizeObserver

export type ResizeObserverInstance = InstanceType<typeof ResizeObserver>

declare module 'vue' {
  export interface GlobalComponents {
    DevopsResizeObserver: typeof ResizeObserver
  }
}
