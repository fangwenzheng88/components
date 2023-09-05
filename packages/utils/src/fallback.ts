import { isArray, isNumber, isString, isStringNumber, isUnDef } from './is'

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

/**
 * 返回具有回退（fallback）行为的数字
 * @category fallback
 * @param str 原字数字格式的符串或数字
 * @param fallback 回退字符串
 * @returns 如果不为数字或数字格式的字符串，否则返回回退字符串
 *
 * @example
 * ```ts
 * fallbackNumber(100) // 100
 * fallbackNumber('100') // 100
 * fallbackNumber(undefined) // 0
 * fallbackNumber(null) // 0
 * fallbackNumber('') // 0
 *
 * fallbackNumber(100, 1) // 100
 * fallbackNumber('100', 1) // 100
 * fallbackNumber(NaN, 1) // 1
 * fallbackNumber(undefined, 1) // 1
 * fallbackNumber(null, 1) // 1
 * fallbackNumber('', 1) // 1
 * ```
 */
export function fallbackNumber(str: string | number | null | undefined, fallback: number = 0): number {
  if (isUnDef(str) || str === '' || Number.isNaN(str)) {
    return fallback
  }
  if (isNumber(str)) {
    return str
  }
  return isStringNumber(str) ? Number(str) : fallback
}
