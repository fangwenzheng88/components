import type { SelectOptionData, SelectOptionGroup, SelectOption } from '@arco-design/web-vue'
import { isObject, isDef, isUnDef, isArray, isFunction } from '@devops-web/utils'
import { ref } from 'vue'
import type { Ref } from 'vue'

type FetchOptionsFunction = (...params: any[]) => Promise<SelectOption[]>
type SelectOptionValue = string | number | boolean | Record<string, unknown>
type FallbackFunction = (value: SelectOptionValue) => SelectOptionData

type Config = {
  valueKey: string
  fallback?: FallbackFunction
  immediate: boolean
}

/**
 * a-select 组件 options 数据的 hooks 工具
 *
 * @param fun options 数据或者一个返回 options 数据的接口函数
 * @param _config 配置
 * @param _config.valueKey 当 option 的 value 为 object 类型时，需要指定唯一标识的字段名，默认：`value`
 * @param _config.immediate 是否立即调用一次 loadOptions，默认：`false`
 * @param _config.fallback 当 value 无匹配 option 时，option 的回退函数
 *
 * @example
 * ```typescript
 * const { options } = useSelectOptions([{ label:'label-1', value:'1' }])
 *
 * // 传入函数
 * const { options, getOptions, getLabels } = useSelectOptions((params) => {
 *    console.log('传入的参数：',params)
 *    return Promise.resolve([{ label: 'label-1', value: 1 }])
 * })
 * loadOptions({type:1}) // 调用传入的函数
 *
 * // 传入函数，并立即调用loadOptions()
 * const { options, getOptions, getLabels } = useSelectOptions(() => {
 *    return Promise.resolve([{ label: 'label-1', value: 1 }])
 * },{immediate:true})
 *
 * // value为object类型
 * const { options, getOptions, getLabels } = useSelectOptions([{ label: 'label-1', value: {value:1} }])
 * getLabels(1) // label-1
 *
 * ```
 */
export function useSelectOptions(fun?: FetchOptionsFunction | SelectOption[], _config?: Partial<Config>) {
  const defaultConfig: Config = { valueKey: 'value', immediate: false }
  const config: Config = { ...defaultConfig, ..._config }

  const loading = ref(false)
  const cacheOptionsMap = new Map<string | number | boolean, SelectOptionData>()
  const options: Ref<SelectOption[]> = ref([])

  function loadOptions(...params: any[]) {
    loading.value = true
    if (isFunction(fun)) {
      return fun(...params)
        .then((data) => {
          options.value = data
          pushCacheOptions(data)
          return data
        })
        .catch((err) => {
          options.value = []
          return Promise.reject(err)
        })
        .finally(() => {
          loading.value = false
        })
    }
    return Promise.resolve([] as SelectOption[])
  }

  if (isArray(fun)) {
    options.value = fun
    pushCacheOptions(fun)
  }

  if (config.immediate) {
    loadOptions()
  }

  function isSelectOptionGroup(option: SelectOptionData | SelectOptionGroup): option is SelectOptionGroup {
    return option.isGroup === true
  }

  function pushCacheOptions(data: SelectOption[]) {
    const dataCopy = [...data]
    while (dataCopy.length > 0) {
      const option = dataCopy.pop()
      if (isDef(option)) {
        if (isObject(option)) {
          if (isSelectOptionGroup(option)) {
            dataCopy.push(...option.options)
          } else {
            const { value } = option
            if (isObject(value)) {
              cacheOptionsMap.set(value[config.valueKey] as string | number | boolean, option)
            } else if (isDef(value)) {
              cacheOptionsMap.set(value, option)
            } else {
              console.error('option：不存在value字段', option)
            }
          }
        } else {
          cacheOptionsMap.set(option, { label: String(option), value: option })
        }
      }
    }
  }

  function setOptions(data: SelectOption[]) {
    options.value = data
  }

  function getOptionFromCacheOrFallback(value: SelectOptionValue) {
    let option: SelectOptionData | undefined
    if (isObject(value)) {
      option = cacheOptionsMap.get(value[config.valueKey] as string | number | boolean)
    } else {
      option = cacheOptionsMap.get(value)
    }
    if (isUnDef(option) && isFunction(config.fallback)) {
      option = config.fallback(value)
    }
    return option
  }

  function getOptions(value: undefined | SelectOptionValue): SelectOptionData | undefined
  function getOptions(value: SelectOptionValue[]): (SelectOptionData | undefined)[]
  function getOptions(value: undefined | SelectOptionValue[]): (SelectOptionData | undefined)[] | undefined
  function getOptions(value: undefined | SelectOptionValue | SelectOptionValue[]): SelectOptionData | undefined | (SelectOptionData | undefined)[]
  function getOptions(value: undefined | SelectOptionValue | SelectOptionValue[]) {
    if (isUnDef(value)) {
      return undefined
    }
    if (Array.isArray(value)) {
      return value.map(getOptionFromCacheOrFallback)
    }
    return getOptionFromCacheOrFallback(value)
  }

  function getLabels(value: undefined | SelectOptionValue): string | undefined
  function getLabels(value: SelectOptionValue[]): (string | undefined)[]
  function getLabels(value: undefined | SelectOptionValue[]): (string | undefined)[] | undefined
  function getLabels(value: undefined | SelectOptionValue | SelectOptionValue[]): string | undefined | (string | undefined)[]
  function getLabels(value: undefined | SelectOptionValue | SelectOptionValue[]) {
    if (isUnDef(value)) {
      return undefined
    }
    const options = getOptions(value)
    if (isArray(options)) {
      return options.map((el) => {
        if (isDef(el) && isObject(el)) {
          return el.label
        }

        return el
      })
    }
    if (isUnDef(options)) {
      return undefined
    }
    if (isObject(options)) {
      return options.label
    }
    return options
  }

  function fallbackOption(value: SelectOptionValue): SelectOptionData {
    const option = getOptions(value)
    if (isDef(option)) {
      return option
    }
    if (config.fallback) {
      return config.fallback(value)
    }
    return {
      value,
      label: undefined
    }
  }
  return {
    loading,
    options,
    /**
     * 加载options，传入immediate=true，会在初始化的时候调用一次
     */
    loadOptions,
    setOptions,
    /**
     * 根据value获取对应的option，option会从之前缓存的options选项中获取，缓存的选项没有会调用传入的fallback函数并返回fallback返回的回退option，如果还没有返回undefined
     */
    getOptions,
    /**
     * 根据value获取对应的label，label会从之前缓存的options选项中获取，缓存的选项没有会调用传入的fallback函数并返回fallback返回的回退option.label，如果还没有返回undefined
     */
    getLabels,
    fallbackOption
  }
}
