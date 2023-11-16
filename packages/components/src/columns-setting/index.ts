import _ColumnsSetting from './columns-setting.vue'
import { withInstall } from '../utils'

const ColumnsSetting = withInstall(_ColumnsSetting)

export default ColumnsSetting

export type ColumnsSettingInstance = InstanceType<typeof ColumnsSetting>

declare module 'vue' {
  export interface GlobalComponents {
    DevopsColumnsSetting: typeof ColumnsSetting
  }
}
