/**
 * 用户状态类型
 */
declare interface IUserStoreState {
  token?: string
  userInfo: {
    username: string
    id?: number
    password: string
  }
}

declare type IUserUserInfo = IUserStoreState['userInfo']
