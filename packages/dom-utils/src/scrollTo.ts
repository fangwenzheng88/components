import { isWindow, raf } from '@devops-web/utils'
import { getScroll } from './getScroll'

function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  // eslint-disable-next-line no-param-reassign
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  }
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return (cc / 2) * ((t -= 2) * t * t + 2) + b
}

interface ScrollToOptions {
  /** Scroll container, default as window */
  getContainer?: () => HTMLElement | Window | Document
  /** Scroll end callback */
  callback?: () => any
  /** Animation duration, default as 450 */
  duration?: number
}

export function scrollTo(y: number, options: ScrollToOptions = {}) {
  const { getContainer = () => window, callback, duration = 450 } = options
  const container = getContainer()
  const scrollTop = getScroll(container, true)
  const startTime = Date.now()

  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration)
    if (isWindow(container)) {
      ;(container as Window).scrollTo(window.pageXOffset, nextScrollTop)
    } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
      ;(container as Document).documentElement.scrollTop = nextScrollTop
    } else {
      ;(container as HTMLElement).scrollTop = nextScrollTop
    }
    if (time < duration) {
      raf(frameFunc)
    } else if (typeof callback === 'function') {
      callback()
    }
  }
  raf(frameFunc)
}
