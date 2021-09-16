/**
 * 用户状态类型
 */
declare interface IStoreUserState {
  token: string
  userInfo: any
}

/**
 * Getters 状态
 */
declare interface IStoreGetters extends IStoreUserState {}

/**
 * vuex 整体状态类型
 */

declare interface IStoreState {
  user: IStoreUserState
}
