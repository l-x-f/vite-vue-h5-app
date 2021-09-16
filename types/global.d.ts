import { AxiosResponse } from 'axios'

declare global {
  /**
   * api数据响应类型
   */
  type IApiResponse = Promise<AxiosResponse<IResponse['data']>>
}
