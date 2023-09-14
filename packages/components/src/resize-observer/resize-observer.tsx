import ResizeObserver from 'resize-observer-polyfill'
import { type PropType, defineComponent, getCurrentInstance, onMounted, onUnmounted, onUpdated, watch } from 'vue'

const findDOMNode = (instance: any) => {
  let node = instance?.vnode?.el || (instance && (instance.$el || instance))
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node
}

export default defineComponent({
  name: 'ResizeObserver',
  props: {
    disabled: Boolean,
    onResize: Function as PropType<(entry: ResizeObserverEntry) => void>
  },
  emits: ['resize'],
  setup(props, { slots, emit }) {
    let currentElement: Element | null = null
    let resizeObserver: ResizeObserver | null = null

    const destroyObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    }

    const onResize: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0]
      emit('resize', entry)
    }
    const instance = getCurrentInstance()
    const registerObserver = () => {
      const { disabled } = props

      // Unregister if disabled
      if (disabled) {
        destroyObserver()
        return
      }
      // Unregister if element changed
      const element = findDOMNode(instance) as Element
      const elementChanged = element !== currentElement
      if (elementChanged) {
        destroyObserver()
        currentElement = element
      }

      if (!resizeObserver && element) {
        resizeObserver = new ResizeObserver(onResize)
        resizeObserver.observe(element)
      }
    }
    onMounted(() => {
      registerObserver()
    })
    onUpdated(() => {
      registerObserver()
    })
    onUnmounted(() => {
      destroyObserver()
    })
    watch(
      () => props.disabled,
      () => {
        registerObserver()
      },
      { flush: 'post' }
    )
    return () => {
      return slots.default?.()[0]
    }
  }
})
