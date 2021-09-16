const getters = {
  token: (state: IStoreState): string => state.user.token,
  userInfo: (state: IStoreState): IStoreUserState => state.user.userInfo
}

export default getters
