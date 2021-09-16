import { createApp } from 'vue'
import router from '/@/router'
import store, { key } from '/@/store'

import Vant from 'vant'
import 'vant/lib/index.css'

// 全局样式
import '/@/styles/index.scss'

// 路由守卫，动态路由处理
import '/@/router/router-guards'
import App from './App.vue'

const app = createApp(App)

app.use(router).use(store, key).use(Vant).mount('#app')
