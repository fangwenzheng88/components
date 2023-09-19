import { defineComponent, VNode, computed, ref, onUnmounted, watch, onMounted, onUpdated, PropType, toRefs } from 'vue'
import { isObject, raf } from '@devops-web/utils'
import { EllipsisConfig } from './interface'
import ResizeObserver from '../resize-observer'
import measure from './utils/measure'
import getInnerText from './utils/getInnerText'

function normalizeEllipsisConfig(config: EllipsisConfig): Required<EllipsisConfig> {
  return {
    rows: 1,
    suffix: '',
    ellipsisStr: '...',
    ...config
  }
}

/**
 * @displayName Common
 * @noBrackets
 */
export default defineComponent({
  name: 'ExpandText',
  inheritAttrs: false,
  props: {
    /**
     * @zh 自动溢出省略，具体参数配置看 [EllipsisConfig](#EllipsisConfig)
     * @en Automatic overflow omission, refer to [EllipsisConfig](#EllipsisConfig) for more information.
     */
    ellipsis: {
      type: [Boolean, Object] as PropType<boolean | EllipsisConfig>,
      default: false
    }
  },
  emits: {
    /**
     * @zh 省略变化事件
     * @en Ellipsis change
     * @param {boolean} isEllipsis
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ellipsis: (isEllipsis: boolean) => true,
    /**
     * @zh 展开收起事件
     * @en Expand collapse event
     * @param {boolean} expanded
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    expand: (expanded: boolean) => true
  },
  setup(props, { slots, emit, attrs }) {
    const { ellipsis } = toRefs(props)
    const wrapperRef = ref()
    const fullText = ref('')

    // for ellipsis
    const isEllipsis = ref(false)
    const expanded = ref(false)
    const ellipsisText = ref('')
    const ellipsisConfig = computed<Required<EllipsisConfig>>(() => normalizeEllipsisConfig((isObject(ellipsis.value) && ellipsis.value) || {}))
    let rafId: number = null as any

    function onExpandClick() {
      const newVal = !expanded.value
      expanded.value = newVal
      emit('expand', newVal)
    }

    function renderOperations() {
      return (
        <a style="margin-left:8px;" onClick={onExpandClick}>
          {expanded.value ? '收起' : '展开'}
        </a>
      )
    }

    function calEllipsis() {
      if (!wrapperRef.value) return

      const { ellipsis, text } = measure(wrapperRef.value, ellipsisConfig.value, renderOperations(), fullText.value)

      if (isEllipsis.value !== ellipsis) {
        isEllipsis.value = ellipsis
      }

      if (ellipsisText.value !== text) {
        ellipsisText.value = text || ''
      }
    }

    function resizeOnNextFrame() {
      const needCalEllipsis = ellipsis.value && !expanded.value
      if (!needCalEllipsis) return

      raf.cancel(rafId)
      rafId = raf(() => {
        calEllipsis()
      })
    }

    onUnmounted(() => {
      raf.cancel(rafId)
    })

    watch(
      () => ellipsisConfig.value.rows,
      () => {
        resizeOnNextFrame()
      }
    )

    watch(ellipsis, (newVal) => {
      if (newVal) {
        resizeOnNextFrame()
      } else {
        isEllipsis.value = false
      }
    })

    let children: VNode[] = []

    const updateFullText = () => {
      if (ellipsis.value) {
        // eslint-disable-next-line no-underscore-dangle
        const _fullText = getInnerText(children)

        if (_fullText !== fullText.value) {
          fullText.value = _fullText
          resizeOnNextFrame()
        }
      }
    }

    onMounted(updateFullText)
    onUpdated(updateFullText)

    return () => {
      children = slots.default?.() || []

      const { ellipsisStr, suffix } = ellipsisConfig.value
      const showEllipsis = isEllipsis.value && !expanded.value

      const titleAttrs = showEllipsis ? { title: fullText.value } : {}

      return (
        <ResizeObserver onResize={() => resizeOnNextFrame()}>
          <div ref={wrapperRef} {...titleAttrs} {...attrs}>
            {showEllipsis ? ellipsisText.value : children}
            {showEllipsis ? ellipsisStr : null}
            {suffix}
            {renderOperations()}
          </div>
        </ResizeObserver>
      )
    }
  }
})
