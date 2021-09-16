/* eslint-disable no-useless-catch */
import { ActionContext } from 'vuex'
import { SET_TOKEN, SET_USER_INFO } from '/@/store/mutationTypes'
import { getToken, setToken, removeToken } from '/@/utils/cookie'
import { getUserInfo, setUserInfo, removeUserInfo } from '/@/utils/storage'

import router from '/@/router'

/**
 * Action类型 （泛型）
 */
export type TActionContext<T> = ActionContext<T, IStoreState>

const state: IStoreUserState = {
  token: getToken() || '',
  userInfo: getUserInfo() || {}
}

const mutations = {
  [SET_TOKEN](state: IStoreUserState, token: string): void {
    state.token = token
  },
  [SET_USER_INFO](state: IStoreUserState, userInfo: IStoreUserState): void {
    state.userInfo = userInfo
  }
}

const actions = {
  async login({ commit }: TActionContext<IStoreUserState>, userInfo: any): Promise<any> {
    try {
      const data = { ...userInfo }
      const userData = { ...data.user, menus: data.menus }
      commit(SET_TOKEN, data.vayoToken)
      setToken(data.vayoToken)
      commit(SET_USER_INFO, userData)
      setUserInfo(userData)

      return { ...data }
    } catch (error) {
      throw error
    }
  },
  async logout({ commit }: TActionContext<IStoreUserState>): Promise<{ message: string }> {
    // 导航到登录页面
    router.replace('/login')

    // 清除用户信息
    commit(SET_TOKEN, '')
    commit(SET_USER_INFO, { token: '' })
    // 清除用户信息
    removeToken()
    removeUserInfo()

    return { message: 'logout success' }
  }
}

const AppStore = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default AppStore
