import { h, toRefs, defineComponent, PropType } from '@vue/composition-api'
import { VFadeTransition, VProgressCircular } from 'vuetify/lib'
export default defineComponent({
  name: 'WithLoading',
  props: {
    loading: {
      default: false,
      type: Boolean,
    },
    showText: {
      default: false,
      type: Boolean,
    },
    text: {
      default: 'loading',
      type: String,
    },
    justify: {
      default: 'center',
      type: String as PropType<'center' | 'start' | 'end'>,
    },
  },
  setup(props, ctx) {
    const { loading, showText, text } = toRefs(props)
    return () =>
      h(
        VFadeTransition,
        { props: { mode: 'out-in' } },
        loading.value
          ? [
              h(
                'div',
                {
                  class: `d-flex align-center justify-${props.justify}`,
                  style: 'width: 100%; height: 100%',
                },
                [
                  h(
                    VProgressCircular,
                    {
                      props: {
                        color: 'primary',
                        indeterminate: true,
                      },
                    },
                    showText.value ? text.value : undefined
                  ),
                ]
              ),
            ]
          : [ctx.slots.default?.()]
      )
  },
})
