import { computed, defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    fill: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    fontsize: {
      type: String,
      default: '12px'
    }
  },
  setup(props, { attrs }) {
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon ' + props.iconClass
      }
    })
    return () => (
      <svg
        id="svg-icon"
        style={{ fontSize: props.fontsize }}
        class={svgClass.value}
        aria-hidden="true"
        {...attrs}
      >
        <use xlinkHref={iconName.value} fill={props.fill} />
      </svg>
    )
  }
})
