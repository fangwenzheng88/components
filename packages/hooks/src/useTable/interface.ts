export type OperationItem = {
  label: string
  visible?: boolean
  disabled?: boolean
  loading?: boolean
  action: (operation: OperationItem) => void
}
