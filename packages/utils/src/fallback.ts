import { isArray, isString } from './is'

/**
 * 返回具有回退（fallback）行为的数组
 * @category fallback
 * @param array 原数组
 * @param fallback 回退数组
 * @returns 返回原数组（如果不为 `undefined`、`null`、`[]`），否则返回回退数组
 *
 * @example
 * ```ts
 * fallbackArray([1, 2, 3], [4, 5]) // [1, 2, 3]
 * fallbackArray([], [4, 5]) // [4, 5]
 * fallbackArray(undefined, [4, 5]) // [4, 5]
 * fallbackArray(null, [4, 5]) // [4, 5]
 * ```
 */
export function fallbackArray<T>(array: T[] | undefined | null, fallback: T[] = []): T[] {
  return isArray(array) && array.length > 0 ? array : fallback
}

/**
 * 返回具有回退（fallback）行为的字符串
 * @category fallback
 * @param str 原字符串
 * @param fallback 回退字符串
 * @returns 返回原字符串（如果不为 `undefined`、`null`、`""`），否则返回回退字符串
 *
 * @example
 * ```ts
 * fallbackString('hello', 'Fallback Text') // 'hello'
 * fallbackString(null, 'Fallback Text') // 'Fallback Text'
 * fallbackString(undefined, 'Fallback Text') // 'Fallback Text'
 * fallbackString('', 'Fallback Text') // 'Fallback Text'
 * ```
 */
export function fallbackString(str: string | undefined | null, fallback: string = ''): string {
  return isString(str) && str.length > 0 ? str : fallback
}
