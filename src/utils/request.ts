import store from '/@/store'
import axios, { AxiosResponse } from 'axios'
import { Toast } from 'vant'

const baseURL = import.meta.env.VITE_APP_BASE_API as string
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: baseURL,
  timeout: 60000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: { message: string }) => {
  Toast.fail(error.message || 'error')
  return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
  const { token } = store.getters
  // 如果 token 存在
  if (token) {
    config.headers.token = token
  }
  return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<IResponse>): Promise<any> | AxiosResponse<IResponse> => {
    const data = response.data
    if (data.code && data.code !== 200) {
      if (data.code === 501) {
        const hasRedirect = true
        store.dispatch('user/logout', hasRedirect)
      }

      Toast.fail(data.message || 'error')
      return Promise.reject(new Error(data.message || 'Error'))
    }
    if (response.config.responseType === 'blob') {
      return response
    }
    return Promise.resolve(data)
  },
  errorHandler
)

export default request
