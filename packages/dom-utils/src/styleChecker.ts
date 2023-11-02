import canUseDom from './canUseDom'

export const canUseDocElement = () => canUseDom() && window.document.documentElement

const isStyleNameSupport = (styleName: string | string[]): boolean => {
  if (canUseDom() && window.document.documentElement) {
    const styleNameList = Array.isArray(styleName) ? styleName : [styleName]
    const { documentElement } = window.document

    return styleNameList.some((name) => name in documentElement.style)
  }
  return false
}

const isStyleValueSupport = (styleName: string, value: any) => {
  if (!isStyleNameSupport(styleName)) {
    return false
  }

  const ele = document.createElement('div')
  // @ts-ignore
  const origin = ele.style[styleName]
  // @ts-ignore
  ele.style[styleName] = value
  // @ts-ignore
  return ele.style[styleName] !== origin
}

export function isStyleSupport(styleName: string | string[], styleValue?: any) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue)
  }

  return isStyleNameSupport(styleName)
}

let flexGapSupported: boolean | undefined
/**
 * 这段代码是用来检测浏览器是否支持 Flexbox 布局中的 gap 属性（包括 row-gap、column-gap 和 gap）。
 */
export const isFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported
  }

  // create flex container with row-gap set
  const flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  // create two, elements inside it
  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex)
  flexGapSupported = flex.scrollHeight === 1 // flex container should be 1px high from the row-gap
  document.body.removeChild(flex)

  return flexGapSupported
}
