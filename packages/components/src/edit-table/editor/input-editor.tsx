import { defineComponent, ref, onMounted } from 'vue'
import { Input, InputInstance } from '@arco-design/web-vue'
import { getPrefixCls } from '../../utils'

export default defineComponent({
  name: 'InputEditor',
  setup(props, { attrs, slots }) {
    const prefixCls = getPrefixCls('input-editor')

    const inputRef = ref<InputInstance | null>(null)

    onMounted(() => {
      inputRef.value?.focus()
    })

    return () => {
      return <Input ref={inputRef} class={[`${prefixCls}`]} allowClear {...attrs} v-slots={slots}></Input>
    }
  }
})
