import type { App, Plugin } from 'vue'

import Scrollbar from './scrollbar'
import ResizeObserver from './resize-observer'

const components: Record<string, Plugin> = {
  Scrollbar,
  ResizeObserver
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default install
