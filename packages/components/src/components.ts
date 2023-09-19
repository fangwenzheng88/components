import type { App, Plugin } from 'vue'

import Scrollbar from './scrollbar'
import ResizeObserver from './resize-observer'
import ExpandText from './expand-text'

const components: Record<string, Plugin> = {
  Scrollbar,
  ResizeObserver,
  ExpandText
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default install
