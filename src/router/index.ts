import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory as createHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
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
    path: '/my',
    name: 'My',
    component: () => import('@/views/my/index.vue')
  }
]

export default createRouter({
  history: createHistory(),
  routes
})
