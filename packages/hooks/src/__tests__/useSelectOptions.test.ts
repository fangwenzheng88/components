import { test, expect, describe } from 'vitest'
import { useSelectOptions } from '../useSelectOptions'

describe('useSelectOptions', () => {
  test('入参为普通options数组', () => {
    const { options, getOptions, getLabels } = useSelectOptions([{ label: 'label-1', value: 1 }])
    expect(options.value).toMatchSnapshot()
    expect(getOptions(1)).toEqual({ label: 'label-1', value: 1 })
    expect(getLabels(1)).toBe('label-1')
  })

  test('入参为options数组，value为对象类型', () => {
    const { options, getOptions, getLabels } = useSelectOptions([{ label: 'label-1', value: { value: 1 } }])
    expect(options.value).toMatchSnapshot()
    expect(getOptions(1)).toEqual({ label: 'label-1', value: { value: 1 } })
    expect(getOptions({ value: 1 })).toEqual({ label: 'label-1', value: { value: 1 } })
    expect(getLabels({ value: 1 })).toBe('label-1')
    expect(getLabels(1)).toBe('label-1')
  })

  test('入参为options数组，value为对象类型，自定义valueKey', () => {
    const { options, getOptions, getLabels } = useSelectOptions([{ label: 'label-1', value: { valueKey: 1 } }], { valueKey: 'valueKey' })
    expect(options.value).toMatchSnapshot()
    expect(getOptions(1)).toEqual({ label: 'label-1', value: { valueKey: 1 } })
    expect(getOptions({ valueKey: 1 })).toEqual({ label: 'label-1', value: { valueKey: 1 } })
    expect(getLabels({ valueKey: 1 })).toBe('label-1')
    expect(getLabels(1)).toBe('label-1')
  })

  test('入参为函数', () => {
    const { options, getOptions, getLabels } = useSelectOptions(
      () => {
        return Promise.resolve([{ label: 'label-1', value: 1 }])
      },
      { immediate: true }
    )
    setTimeout(() => {
      expect(options.value).toMatchSnapshot()
      expect(getOptions(1)).toEqual({ label: 'label-1', value: 1 })
      expect(getLabels(1)).toBe('label-1')
    }, 1000)
  })

  test('配置fallback', () => {
    const { options, getOptions, getLabels } = useSelectOptions([], {
      fallback(value) {
        if (value === 1) {
          return { value, label: 'label-1' }
        } else {
          return { value, label: undefined }
        }
      }
    })
    expect(getOptions(1)).toEqual({ label: 'label-1', value: 1 })
    expect(getLabels(1)).toBe('label-1')

    expect(getOptions(2)).toEqual({ label: undefined, value: 2 })
    expect(getLabels(2)).toBe(undefined)
  })
})
