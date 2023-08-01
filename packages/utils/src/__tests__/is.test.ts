import { test, expect, describe } from 'vitest'
import {
  isArray,
  isNull,
  isBoolean,
  isObject,
  isPromise,
  isString,
  isNumber,
  isStringNumber,
  isRegExp,
  isDate,
  isUndefined,
  isFunction,
  isEmptyObject,
  isExist,
  isDef,
  isUnDef,
  isWindow,
  isEmptyString
} from '../index'

describe('isArray', () => {
  const array = [1, 2, 3]
  const object = { foo: 'bar' }
  const string = 'test'

  test('should return true for arrays', () => {
    expect(isArray(array)).toBe(true)
  })

  test('should return false for objects', () => {
    expect(isArray(object)).toBe(false)
  })

  test('should return false for strings', () => {
    expect(isArray(string)).toBe(false)
  })

  test('should return false for other types', () => {
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray({})).toBe(false)
  })
})

describe('isNull', () => {
  test('should return true for null value', () => {
    expect(isNull(null)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isNull(undefined)).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isNull(123)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isNull('Hello')).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isNull([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isNull([1, 2, 3])).toBe(false)
  })

  test('should return false for an object', () => {
    expect(isNull({ a: 1, b: 2 })).toBe(false)
  })
})

describe('isBoolean', () => {
  test('should return true for true boolean value', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('should return true for false boolean value', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isBoolean(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isBoolean(null)).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isBoolean(123)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isBoolean('Hello')).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isBoolean([])).toBe(false)
  })

  test('should return false for an object', () => {
    expect(isBoolean({ a: 1, b: 2 })).toBe(false)
  })
})

describe('isObject', () => {
  test('should return true for an empty object', () => {
    expect(isObject({})).toBe(true)
  })

  test('should return true for a non-empty object', () => {
    expect(isObject({ a: 1, b: 2 })).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isObject(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isObject(null)).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isObject(123)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isObject('Hello')).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isObject([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isObject([1, 2, 3])).toBe(false)
  })
})

describe('isPromise', () => {
  test('should return true for a Promise object', () => {
    const promise = new Promise((resolve) => resolve(undefined))
    expect(isPromise(promise)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isPromise(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isPromise(null)).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isPromise(123)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isPromise('Hello')).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isPromise([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isPromise([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isPromise({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isPromise({ a: 1, b: 2 })).toBe(false)
  })
})

describe('isString', () => {
  test('should return true for a string', () => {
    expect(isString('Hello')).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isString(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isString(null)).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isString(123)).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isString([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isString([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isString({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isString({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isString(true)).toBe(false)
  })
})

describe('isNumber', () => {
  test('should return true for a number', () => {
    expect(isNumber(123)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isNumber(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isNumber(null)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isNumber('Hello')).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isNumber([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isNumber([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isNumber({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isNumber({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isNumber(true)).toBe(false)
  })
})

describe('isStringNumber', () => {
  test('should return true for a valid numeric string', () => {
    expect(isStringNumber('123')).toBe(true)
  })

  test('should return true for a valid negative numeric string', () => {
    expect(isStringNumber('-456')).toBe(true)
  })

  test('should return true for a valid decimal string', () => {
    expect(isStringNumber('3.14')).toBe(true)
  })

  test('should return true for an empty string', () => {
    expect(isStringNumber('')).toBe(true)
  })

  test('should return true for a string with whitespace', () => {
    expect(isStringNumber(' 789 ')).toBe(true)
  })

  test('should return true for a string with leading zeros', () => {
    expect(isStringNumber('00123')).toBe(true)
  })

  test('should return true for a string with leading plus sign', () => {
    expect(isStringNumber('+456')).toBe(true)
  })

  test('should return false for a non-numeric string', () => {
    expect(isStringNumber('Hello')).toBe(false)
  })

  test('should return false for a string with non-digit characters', () => {
    expect(isStringNumber('12A34')).toBe(false)
  })

  test('should return false for a string with multiple decimal points', () => {
    expect(isStringNumber('3.14.159')).toBe(false)
  })

  test('should return false for a non-string value', () => {
    // @ts-ignore
    expect(isStringNumber(null)).toBe(false)
    // @ts-ignore
    expect(isStringNumber(undefined)).toBe(false)
    // @ts-ignore
    expect(isStringNumber(123)).toBe(false)
    // @ts-ignore
    expect(isStringNumber(true)).toBe(false)
    // @ts-ignore
    expect(isStringNumber({})).toBe(false)
    // @ts-ignore
    expect(isStringNumber([])).toBe(false)
  })
})

describe('isRegExp', () => {
  test('should return true for a regular expression', () => {
    expect(isRegExp(/test/)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isRegExp(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isRegExp(null)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isRegExp('Hello')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isRegExp(123)).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isRegExp([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isRegExp([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isRegExp({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isRegExp({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isRegExp(true)).toBe(false)
  })
})

describe('isDate', () => {
  test('should return true for a Date object', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isDate(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isDate(null)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isDate('Hello')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isDate(123)).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isDate([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isDate([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isDate({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isDate({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isDate(true)).toBe(false)
  })
})

describe('isUndefined', () => {
  test('should return true for undefined value', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  test('should return false for null value', () => {
    expect(isUndefined(null)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isUndefined('Hello')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isUndefined(123)).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isUndefined([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isUndefined([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isUndefined({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isUndefined({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isUndefined(true)).toBe(false)
  })
})

describe('isFunction', () => {
  test('should return true for a function', () => {
    expect(isFunction(() => {})).toBe(true)
  })

  test('should return true for an arrow function', () => {
    expect(isFunction((x: number) => x + 1)).toBe(true)
  })

  test('should return false for undefined value', () => {
    expect(isFunction(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isFunction(null)).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isFunction('Hello')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isFunction(123)).toBe(false)
  })

  test('should return false for an empty array', () => {
    expect(isFunction([])).toBe(false)
  })

  test('should return false for a non-empty array', () => {
    expect(isFunction([1, 2, 3])).toBe(false)
  })

  test('should return false for an empty object', () => {
    expect(isFunction({})).toBe(false)
  })

  test('should return false for a non-empty object', () => {
    expect(isFunction({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isFunction(true)).toBe(false)
  })
})

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1, b: 2 })).toBe(false)
  })

  test('should return false for an array', () => {
    expect(isEmptyObject([])).toBe(false)
  })

  test('should return false for a string', () => {
    expect(isEmptyObject('Hello')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isEmptyObject(123)).toBe(false)
  })

  test('should return false for undefined value', () => {
    expect(isEmptyObject(undefined)).toBe(false)
  })

  test('should return false for null value', () => {
    expect(isEmptyObject(null)).toBe(false)
  })

  test('should return false for a boolean value', () => {
    expect(isEmptyObject(true)).toBe(false)
  })

  test('should return false for a function', () => {
    expect(isEmptyObject(() => {})).toBe(false)
  })
})

describe('isExist', () => {
  test('should return true for a truthy value', () => {
    expect(isExist('Hello')).toBe(true)
    expect(isExist(123)).toBe(true)
    expect(isExist([])).toBe(true)
    expect(isExist({ a: 1 })).toBe(true)
    expect(isExist(true)).toBe(true)
    expect(isExist(0)).toBe(true)
  })

  test('should return false for a falsy value', () => {
    expect(isExist(null)).toBe(false)
    expect(isExist(undefined)).toBe(false)
    expect(isExist(false)).toBe(false)
    expect(isExist(NaN)).toBe(false)
    expect(isExist('')).toBe(false)
  })
})

describe('isDef', () => {
  test('should return true for a defined value', () => {
    expect(isDef('Hello')).toBe(true)
    expect(isDef(123)).toBe(true)
    expect(isDef([])).toBe(true)
    expect(isDef({ a: 1 })).toBe(true)
    expect(isDef(true)).toBe(true)
    expect(isDef(0)).toBe(true)
    expect(isDef(false)).toBe(true)
    expect(isDef('')).toBe(true)
  })

  test('should return false for an undefined value', () => {
    expect(isDef(undefined)).toBe(false)
  })

  test('should return false for a null value', () => {
    expect(isDef(null)).toBe(false)
  })
})

describe('isUnDef', () => {
  test('should return true for an undefined value', () => {
    expect(isUnDef(undefined)).toBe(true)
  })

  test('should return true for a null value', () => {
    expect(isUnDef(null)).toBe(true)
  })

  test('should return false for a defined value', () => {
    expect(isUnDef('Hello')).toBe(false)
    expect(isUnDef(123)).toBe(false)
    expect(isUnDef([])).toBe(false)
    expect(isUnDef({ a: 1 })).toBe(false)
    expect(isUnDef(true)).toBe(false)
    expect(isUnDef(0)).toBe(false)
    expect(isUnDef(false)).toBe(false)
    expect(isUnDef('')).toBe(false)
  })
})

describe('isWindow', () => {
  test('should return true for the window object', () => {
    expect(isWindow(window)).toBe(true)
  })

  test('should return false for other objects', () => {
    expect(isWindow({})).toBe(false)
    expect(isWindow(null)).toBe(false)
    expect(isWindow(undefined)).toBe(false)
    expect(isWindow('window')).toBe(false)
    expect(isWindow(123)).toBe(false)
  })
})

describe('isEmptyString', () => {
  test('should return true for an undefined value', () => {
    expect(isEmptyString(undefined)).toBe(true)
  })

  test('should return true for a null value', () => {
    expect(isEmptyString(null)).toBe(true)
  })

  test('should return true for an empty string', () => {
    expect(isEmptyString(null)).toBe(true)
  })

  test('should return false for a defined value', () => {
    expect(isEmptyString('Hello')).toBe(false)
    expect(isEmptyString(123)).toBe(false)
    expect(isEmptyString([])).toBe(false)
    expect(isEmptyString({ a: 1 })).toBe(false)
    expect(isEmptyString(true)).toBe(false)
    expect(isEmptyString(0)).toBe(false)
    expect(isEmptyString(false)).toBe(false)
    expect(isEmptyString(' ')).toBe(false)
  })
})
