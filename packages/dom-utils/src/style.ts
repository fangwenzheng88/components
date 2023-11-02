import { isNumber, isObject, isString, isStringNumber, entriesOf, keysOf } from '@devops-web/utils'
import * as CSS from 'csstype'

export interface CSSProperties extends CSS.Properties<string | number>, CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: `--${string}`]: string | number | undefined
}

const camelizeRE = /-(\w)/g
function camelize(str: string) {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

const classNameToArray = (cls = '') => cls.split(' ').filter((item) => !!item.trim())

export const hasClass = (el: Element, cls: string): boolean => {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
  let key = camelize(styleName)
  if (key === 'float') key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style) return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  } catch {
    return (element.style as any)[key]
  }
}

export const setStyle = (element: HTMLElement, styleName: CSSProperties | keyof CSSProperties, value?: string | number) => {
  if (!element || !styleName) return

  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value]) => setStyle(element, prop, value))
  } else {
    const key: any = camelize(styleName)
    element.style[key] = value as any
  }
}

export const removeStyle = (element: HTMLElement, style: CSSProperties | keyof CSSProperties) => {
  if (!element || !style) return

  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop))
  } else {
    setStyle(element, style, '')
  }
}

export function addStyleUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`
  }
  if (isString(value)) {
    return value
  }
  return ''
}
