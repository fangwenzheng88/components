import type { App, Plugin } from 'vue'

import ResizeObserver from './resize-observer'
import ColumnsSetting from './columns-setting'
import EditTable, { InputEditor, SelectEditor, DateEditor, DateRangeEditor, NumberEditor } from './edit-table'

const components: Record<string, Plugin> = {
  ResizeObserver,
  ColumnsSetting,
  EditTable,
  InputEditor,
  SelectEditor,
  DateEditor,
  DateRangeEditor,
  NumberEditor
}

const install = (app: App) => {
  for (const key of Object.keys(components)) {
    app.use(components[key])
  }
}

export default install
