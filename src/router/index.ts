import { createRouter, createWebHistory as createHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('/@/views/home/index.vue')
  },
  {
    path: '/',
    alias: '/login',
    name: 'Login',
    component: () => import('/@/views/login/index.vue')
  }
]

export default createRouter({
  history: createHistory(),
  routes
})
