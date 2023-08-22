export interface TreeDataStandardConfig<T = Record<string, string>, P = {}> {
  key?: string
  parentKey?: string
  title?: string
  children?: string
  /**
   *
   * @param node
   * @param level
   * @returns
   */
  extra?: (node: T, level: number) => P
}

export type TreeDataStandard<T = Record<string, string>, P = {}> = {
  key: string
  title: string
  parentKey?: string
  data: T
  children?: TreeDataStandard<T, P>[]
  level: number
} & P

export function convertToStandardTreeData<T extends Record<string, any>, P extends Record<string, any> = {}>(treeData: T[], config: TreeDataStandardConfig<T, P>): TreeDataStandard<T, P>[] {
  return convert(treeData, config)
}

export function convert<T extends Record<string, any>, P extends Record<string, any> = {}>(
  treeData: T[],
  config: TreeDataStandardConfig<T, P>,
  parentKey: string | undefined = undefined,
  level: number = 0
): TreeDataStandard<T, P>[] {
  const defaultConfig: Required<TreeDataStandardConfig<T, P>> = {
    key: 'key',
    parentKey: 'parentKey',
    title: 'title',
    children: 'children',
    extra() {
      return {} as P
    }
  }
  const treeDataConfig: Required<TreeDataStandardConfig<T, P>> = { ...defaultConfig, ...config }

  return treeData.map((item) => {
    const key = item[treeDataConfig.key]
    const title = item[treeDataConfig.title]
    const data = item
    const initialChildren = item[treeDataConfig.children]
    let children: TreeDataStandard<T, P>[] | undefined
    if (initialChildren) {
      children = convert(initialChildren, treeDataConfig, key, level + 1)
    }
    const extraData = treeDataConfig.extra(item, level)

    return {
      key,
      parentKey,
      title,
      data,
      children,
      level,
      ...extraData
    }
  })
}
