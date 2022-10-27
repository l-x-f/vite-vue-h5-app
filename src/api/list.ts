import type { AxiosResponse } from 'axios'
import request from '@/utils/request'

/**
 * 首页接口
 */
class HomeServe {
  /**
   * 获取列表
   */
  getList<T = any>(params = {}): Promise<AxiosResponse<T>> {
    return request({
      url: `/list`,
      method: 'get',
      params
    })
  }
}

export default new HomeServe()
