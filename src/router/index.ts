import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory as createHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

export default createRouter({
  history: createHistory(),
  routes
})
