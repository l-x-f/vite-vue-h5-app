import type { MockMethod } from 'vite-plugin-mock'
import chalk from 'chalk'

// 登录
const login = {
  url: '/api/login',
  method: 'post',
  response: () => {
    return {
      code: 200,
      success: true,
      message: '登录成功',
      data: {
        token: 'fsa45f4563f4a6f4-fsa45f4563f4a6f4-fsa45f4563f4a6f4',
        userInfo: {
          username: 'admin',
          id: 1
        }
      }
    }
  }
}

// 退出
const logout = {
  url: '/api/logout',
  method: 'get',
  message: '退出成功',
  response: {
    code: 200,
    success: true,
    data: {}
  }
}

const server = [
  // 登录
  login,
  // 退出
  logout
]

console.log(chalk.magentaBright('\nlist mock server running!'))

export default server as MockMethod[]
