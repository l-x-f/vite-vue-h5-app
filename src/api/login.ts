import request from '/@/utils/request'

/**
 *  登录
 * @param data
 * @returns
 */
export function login(data: any): Promise<any> {
  return request({
    url: '/doLogin',
    method: 'post',
    data
  })
}

/**
 * 退出
 * @returns
 */
export function loginout(): IApiResponse {
  return request({
    url: '/loginOut',
    method: 'get'
  })
}
