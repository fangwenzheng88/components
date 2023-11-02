export const addEventListener = <K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options: boolean | AddEventListenerOptions = false
) => {
  element.addEventListener(event, handler as EventListenerOrEventListenerObject, options)
  return () => {
    removeEventListener(element, event, handler, options)
  }
}

export const removeEventListener = <K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window,
  type: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options: boolean | EventListenerOptions = false
) => {
  element.removeEventListener(type, handler as EventListenerOrEventListenerObject, options)
}
