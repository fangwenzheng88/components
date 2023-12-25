import _InputEditor from './input-editor'
import _SelectEditor from './select-editor'
import _DateEditor from './date-editor'
import _DateRangeEditor from './date-range-editor'
import _NumberEditor from './number-editor'
import { withInstall } from '../../utils'

export const InputEditor = withInstall(_InputEditor)
export const SelectEditor = withInstall(_SelectEditor)
export const DateEditor = withInstall(_DateEditor)
export const DateRangeEditor = withInstall(_DateRangeEditor)
export const NumberEditor = withInstall(_NumberEditor)
declare module 'vue' {
  export interface GlobalComponents {
    DevopsInputEditor: typeof InputEditor
    DevopsSelectEditor: typeof SelectEditor
    DevopsDateEditor: typeof DateEditor
    DevopsDateRangeEditor: typeof DateRangeEditor
    DevopsNumberEditor: typeof NumberEditor
  }
}
