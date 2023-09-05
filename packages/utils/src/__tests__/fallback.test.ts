import { test, expect, describe } from 'vitest'
import { fallbackArray, fallbackString, fallbackNumber } from '../fallback'

describe('fallback', () => {
  test('fallbackArray', () => {
    expect(fallbackArray([1, 2, 3], [4, 5])).toEqual([1, 2, 3])
    expect(fallbackArray([], [4, 5])).toEqual([4, 5])
    expect(fallbackArray(undefined, [4, 5])).toEqual([4, 5])
    expect(fallbackArray(null, [4, 5])).toEqual([4, 5])
  })

  test('fallbackString', () => {
    expect(fallbackString('hello', 'Fallback Text')).toBe('hello')
    expect(fallbackString(null, 'Fallback Text')).toBe('Fallback Text')
    expect(fallbackString(undefined, 'Fallback Text')).toBe('Fallback Text')
    expect(fallbackString('', 'Fallback Text')).toBe('Fallback Text')
  })
})

describe('fallbackNumber', () => {
  test('不设置fallback默认值', () => {
    expect(fallbackNumber(100)).toBe(100)
    expect(fallbackNumber('100')).toBe(100)
    expect(fallbackNumber(undefined)).toBe(0)
    expect(fallbackNumber(null)).toBe(0)
    expect(fallbackNumber('')).toBe(0)
  })

  test('设置fallback默认值为1', () => {
    expect(fallbackNumber(100, 1)).toBe(100)
    expect(fallbackNumber('100', 1)).toBe(100)
    expect(fallbackNumber(NaN, 1)).toBe(1)
    expect(fallbackNumber(undefined, 1)).toBe(1)
    expect(fallbackNumber(null, 1)).toBe(1)
    expect(fallbackNumber('', 1)).toBe(1)
  })
})
