import type { App, Plugin } from 'vue'

import Scrollbar from './scrollbar'

const components: Record<string, Plugin> = {
  Scrollbar
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default {
  install
}
