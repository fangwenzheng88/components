import { test, expect, describe } from 'vitest'
import { fallbackArray, fallbackString } from '../fallback'

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
