import { ComputedRef, InjectionKey, computed, inject, provide } from 'vue'
import type { EditTableCellEditParams, EditTableCellParams } from './interface'

type ContextProps = {
  isEditing?: (data: EditTableCellParams) => boolean
  cellendedit?: (data: EditTableCellEditParams) => Promise<void> | void
  mergedDisabled: ComputedRef<boolean>
  slots: any
}

const ContextKey: InjectionKey<ContextProps> = Symbol('EditTable')

export const useProvideEditTableContext = (props: ContextProps) => {
  provide(ContextKey, props)
}

export const useInjectEditTableContext = () => {
  return inject(ContextKey, { slots: {}, mergedDisabled: computed(() => false) })
}
