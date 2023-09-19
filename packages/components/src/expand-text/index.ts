import ExpandText from './base'
import { withInstall } from '../utils'

export default withInstall(ExpandText)

export type ScrollbarInstance = InstanceType<typeof ExpandText>
export type { EllipsisConfig } from './interface'

declare module 'vue' {
  export interface GlobalComponents {
    DevopsExpandText: typeof ExpandText
  }
}
