import { defineComponent, onMounted, reactive, watch } from 'vue'
import axios from 'axios'
import './index.less'

export default defineComponent({
  name: 'HtmlParse',
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({ content: '' })
    const getHtml = async (html: string) => {
      if (typeof html === 'string' && (html.endsWith('.html') || html.endsWith('.htm'))) {
        try {
          const { data } = await axios.get(html)
          state.content = data
        } catch (error) {
          state.content = 'serverError'
        }
      } else {
        state.content = html
      }
    }
    onMounted(() => {
      getHtml(props.html)
    })
    watch(
      () => props.html,
      val => {
        getHtml(val)
      }
    )
    return () => <div class="html-parse-component" v-html={state.content}></div>
  }
})
