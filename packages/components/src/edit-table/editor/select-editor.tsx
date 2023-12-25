import { defineComponent, ref } from 'vue'
import { Select } from '@arco-design/web-vue'
import { getPrefixCls } from '../../utils'

export default defineComponent({
  name: 'SelectEditor',
  setup(props, { attrs, slots }) {
    const prefixCls = getPrefixCls('select-editor')
    const popupVisible = ref(true)
    return () => {
      return (
        <Select
          class={[`${prefixCls}`]}
          v-model:popup-visible={popupVisible.value}
          allow-clear={true}
          bordered={false}
          trigger-props={{ popupOffset: 10, showArrow: true }}
          {...attrs}
          v-slots={slots}
        ></Select>
      )
    }
  }
})
