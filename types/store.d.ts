/**
 * 用户状态类型
 */
declare interface UserStoreState {
  token?: string
  userInfo: {
    username: string
    id?: number
    password: string
  }
}

declare type UserInfo = UserStoreState['userInfo']
