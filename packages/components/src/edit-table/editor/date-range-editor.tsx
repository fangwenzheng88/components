import { defineComponent, ref } from 'vue'
import { RangePicker } from '@arco-design/web-vue'
import { getPrefixCls } from '../../utils'

export default defineComponent({
  name: 'DateRangeEditor',
  setup(props, { attrs, slots }) {
    const prefixCls = getPrefixCls('date-editor')
    const popupVisible = ref(true)
    return () => {
      return <RangePicker class={[`${prefixCls}`]} v-model:popup-visible={popupVisible.value} allow-clear={true} {...attrs} v-slots={slots}></RangePicker>
    }
  }
})
