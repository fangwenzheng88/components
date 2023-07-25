/**
 * 从数组中移除第一个匹配的元素，并返回布尔值表示是否成功移除。
 * @param array 要操作的数组。
 * @param value 要移除的元素。
 * @returns 如果成功移除了元素，则为true；否则为false。
 */
export function remove<T>(array: T[], value: T): boolean {
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * 从数组中移除满足给定条件的第一个元素。
 * @param array 要操作的数组。
 * @param predicate 决定要移除哪个元素的谓词函数。
 * @returns 是否移除成功。
 */
export function removeBy<T>(array: T[], predicate: (item: T) => boolean): boolean {
  const index = array.findIndex(predicate)
  if (index !== -1) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * 从数组中移除所有匹配的元素，并返回移除的元素数量。
 * @param array 要操作的数组。
 * @param value 要移除的元素。
 * @returns 返回移除的元素数量。
 */
export function removeAll<T>(array: T[], value: T): number {
  let removedCount = 0
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      array.splice(i, 1)
      removedCount++
    }
  }
  return removedCount
}

/**
 * 从数组中移除满足给定条件的所有元素。
 * @param array 要操作的数组。
 * @param predicate 决定要移除哪个元素的谓词函数。
 * @returns 返回移除的元素数量。
 */
export function removeAllBy<T>(array: T[], predicate: (item: T) => boolean): number {
  let removedCount = 0
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      array.splice(i, 1)
      removedCount++
    }
  }
  return removedCount
}

/**
 * 向数组中添加元素，仅当元素不存在于数组中时才添加，并返回布尔值表示是否成功添加。
 * @param array 要操作的数组。
 * @param value 要添加的元素。
 * @returns 如果成功添加了元素，则为true；否则为false。
 */
export function addIfNotExists<T>(array: T[], value: T): boolean {
  if (!array.includes(value)) {
    array.push(value)
    return true
  }
  return false
}
