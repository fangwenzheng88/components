import type { TreeNode } from './types'

/**
 * 深度优先遍历树形数据并生成数组
 * @category tree/traverse
 * @param data 树形数据
 * @param callback 回调函数
 * @param childrenFieldName 子节点字段名
 * @returns 数组
 */
export function traverseTreeDFS<T extends TreeNode<T>>(data: T[], callback?: (node: T) => void, childrenFieldName: keyof T = 'children'): T[] {
  return traverseDFS(data, callback, childrenFieldName, [])
}

/**
 * 深度优先遍历树形数据并生成数组
 * @param data 树形数据
 * @param callback 回调函数
 * @param childrenFieldName 子节点字段名
 * @param parentNodes 父节点数组
 * @returns 数组
 */
function traverseDFS<T extends TreeNode<T>>(data: T[], callback?: (node: T, parentNodes: T[]) => void, childrenFieldName: keyof T = 'children', parentNodes: T[] = []): T[] {
  const result: T[] = []

  function traverse(node: T) {
    result.push(node)

    if (callback) {
      callback(node, [...parentNodes, node])
    }

    const children = node[childrenFieldName] as T[]
    if (Array.isArray(children)) {
      for (const child of children) {
        traverse(child)
      }
    }
  }

  for (const node of data) {
    traverse(node)
  }

  return result
}

/**
 * 广度优先遍历树形数据并生成数组
 * @category tree/traverse
 * @param data 树形数据
 * @param callback 回调函数
 * @param childrenFieldName 子节点字段名
 * @returns 数组
 */
export function traverseTreeBFS<T extends TreeNode<T>>(data: T[], callback?: (node: T) => void, childrenFieldName: keyof T = 'children'): T[] {
  return traverseBFS(data, callback, childrenFieldName, [])
}

/**
 * 广度优先遍历树形数据并生成数组
 * @param data 树形数据
 * @param callback 回调函数
 * @param childrenFieldName 子节点字段名
 * @param parentNodes 父节点数组
 * @returns 数组
 */
function traverseBFS<T extends TreeNode<T>>(data: T[], callback?: (node: T, parentNodes: T[]) => void, childrenFieldName: keyof T = 'children', parentNodes: T[] = []): T[] {
  const result: T[] = []
  const queue: { node: T; parents: T[] }[] = []

  for (const node of data) {
    queue.push({ node, parents: parentNodes })
  }

  while (queue.length > 0) {
    const { node, parents } = queue.shift()!
    result.push(node)

    if (callback) {
      callback(node, [...parents, node])
    }

    const children = node[childrenFieldName] as T[]
    if (Array.isArray(children)) {
      for (const child of children) {
        queue.push({ node: child, parents: [...parents, node] })
      }
    }
  }

  return result
}
