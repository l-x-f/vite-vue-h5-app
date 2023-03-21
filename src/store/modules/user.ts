import { defineStore } from 'pinia'
import { setUserInfo, getUserInfo, removeUserInfo } from '@/utils/storage'
import { login, logout } from '@/api/login'

const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      token: getUserInfo().token || '',
      userInfo: getUserInfo().userInfo || {}
    }
  },
  getters: {
    isLogin: state => !!state.token
  },
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },
    setToken(token: string) {
      this.token = token
    },
    async login(userForm: UserInfo) {
      try {
        const { data } = await login(userForm)
        setUserInfo(data)
        this.setToken(data.token)
        this.setUserInfo(data.userInfo)
      } catch (error) {}
    },
    async logout() {
      try {
        await logout()
      } catch (error) {}
      removeUserInfo()
    }
  }
})

export { useUserStore }
