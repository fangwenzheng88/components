import { test, expect, describe } from 'vitest'
import { remove, removeBy, removeAll, removeAllBy, addIfNotExists } from '../index'

describe('remove', () => {
  test('should remove the value from the array and return true', () => {
    const array = [1, 2, 3, 4, 5]
    expect(remove(array, 3)).toBe(true)
    expect(array).toEqual([1, 2, 4, 5])

    const array2 = ['a', 'b', 'c', 'd']
    expect(remove(array2, 'c')).toBe(true)
    expect(array2).toEqual(['a', 'b', 'd'])
  })

  test('should return false if the value is not found in the array', () => {
    const array = [1, 2, 3]
    expect(remove(array, 4)).toBe(false)
    expect(array).toEqual([1, 2, 3])

    const array2 = ['a', 'b', 'c']
    expect(remove(array2, 'd')).toBe(false)
    expect(array2).toEqual(['a', 'b', 'c'])
  })
})

describe('removeBy', () => {
  test('should remove the item from the array and return true', () => {
    const array = [1, 2, 3, 4, 5]
    expect(removeBy(array, (item) => item === 3)).toBe(true)
    expect(array).toEqual([1, 2, 4, 5])

    const array2 = ['a', 'b', 'c', 'd']
    expect(removeBy(array2, (item) => item === 'c')).toBe(true)
    expect(array2).toEqual(['a', 'b', 'd'])
  })

  test('should return false if no item matches the predicate', () => {
    const array = [1, 2, 3]
    expect(removeBy(array, (item) => item === 4)).toBe(false)
    expect(array).toEqual([1, 2, 3])

    const array2 = ['a', 'b', 'c']
    expect(removeBy(array2, (item) => item === 'd')).toBe(false)
    expect(array2).toEqual(['a', 'b', 'c'])
  })
})

describe('removeAll', () => {
  test('should remove all occurrences of the value from the array and return the count', () => {
    const array = [1, 2, 3, 4, 3, 5, 3]
    expect(removeAll(array, 3)).toBe(3)
    expect(array).toEqual([1, 2, 4, 5])

    const array2 = ['a', 'b', 'c', 'c', 'd']
    expect(removeAll(array2, 'c')).toBe(2)
    expect(array2).toEqual(['a', 'b', 'd'])
  })

  test('should return 0 if the value is not found in the array', () => {
    const array = [1, 2, 3]
    expect(removeAll(array, 4)).toBe(0)
    expect(array).toEqual([1, 2, 3])

    const array2 = ['a', 'b', 'c']
    expect(removeAll(array2, 'd')).toBe(0)
    expect(array2).toEqual(['a', 'b', 'c'])
  })
})

describe('removeAllBy', () => {
  test('should remove all items that match the predicate from the array and return the count', () => {
    const array = [1, 2, 3, 4, 5]
    expect(removeAllBy(array, (item) => item % 2 === 0)).toBe(2)
    expect(array).toEqual([1, 3, 5])

    const array2 = ['apple', 'banana', 'cherry']
    expect(removeAllBy(array2, (item) => item.includes('a'))).toBe(2)
    expect(array2).toEqual(['cherry'])
  })

  test('should return 0 if no item matches the predicate', () => {
    const array = [1, 2, 3]
    expect(removeAllBy(array, (item) => item === 4)).toBe(0)
    expect(array).toEqual([1, 2, 3])

    const array2 = ['a', 'b', 'c']
    expect(removeAllBy(array2, (item) => item === 'd')).toBe(0)
    expect(array2).toEqual(['a', 'b', 'c'])
  })
})

describe('addIfNotExists', () => {
  test('should add the value to the array if it does not exist and return true', () => {
    const array = [1, 2, 3]
    expect(addIfNotExists(array, 4)).toBe(true)
    expect(array).toEqual([1, 2, 3, 4])

    const array2 = ['a', 'b', 'c']
    expect(addIfNotExists(array2, 'd')).toBe(true)
    expect(array2).toEqual(['a', 'b', 'c', 'd'])
  })

  test('should not add the value to the array if it already exists and return false', () => {
    const array = [1, 2, 3]
    expect(addIfNotExists(array, 3)).toBe(false)
    expect(array).toEqual([1, 2, 3])

    const array2 = ['a', 'b', 'c']
    expect(addIfNotExists(array2, 'c')).toBe(false)
    expect(array2).toEqual(['a', 'b', 'c'])
  })
})
