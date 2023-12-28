import { ComputedRef, InjectionKey, Ref, inject, provide } from 'vue'
import type { EditTableCellEditParams, EditTableCellParams } from './interface'

type ContextProps = {
  isEditor?: (data: EditTableCellParams) => boolean
  validator?: (data: EditTableCellParams) => boolean
  cellendedit?: (data: EditTableCellEditParams) => Promise<void> | void
  showEditor: Ref<boolean>
  mergedDisabled: ComputedRef<boolean | undefined>
  mergedError: ComputedRef<boolean | undefined>
  slots: any
}

const ContextKey: InjectionKey<ContextProps> = Symbol('EditTable')

export const useProvideEditTableContext = (props: ContextProps) => {
  provide(ContextKey, props)
}

export const useInjectEditTableContext = () => {
  return inject(ContextKey, {} as ContextProps)
}
