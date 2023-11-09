import type { App, Plugin } from 'vue'

import ResizeObserver from './resize-observer'
import ColumnsSetting from './columns-setting'

const components: Record<string, Plugin> = {
  ResizeObserver,
  ColumnsSetting
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default install
