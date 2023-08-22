export type TreeNode<T> = {
  [key: string]: any
  children?: TreeNode<T>[]
}
