import ColumnsSetting from './columns-setting.vue'
import { withInstall } from '../utils'

export default withInstall(ColumnsSetting)

export type ColumnsSettingInstance = InstanceType<typeof ColumnsSetting>

declare module 'vue' {
  export interface GlobalComponents {
    DevopsColumnsSetting: typeof ColumnsSetting
  }
}
