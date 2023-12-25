import { defineComponent, ref, onMounted } from 'vue'
import { InputNumber, InputNumberInstance } from '@arco-design/web-vue'
import { getPrefixCls } from '../../utils'

export default defineComponent({
  name: 'NumberEditor',
  setup(props, { attrs, slots }) {
    const prefixCls = getPrefixCls('number-editor')

    const inputRef = ref<InputNumberInstance | null>(null)

    onMounted(() => {
      inputRef.value?.focus()
    })

    return () => {
      return <InputNumber ref={inputRef} class={[`${prefixCls}`]} hide-button allowClear {...attrs} v-slots={slots}></InputNumber>
    }
  }
})
