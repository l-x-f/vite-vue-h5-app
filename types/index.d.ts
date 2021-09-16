/**
 * ref 绑定的元素类型
 */
declare type ElementRefType = HTMLElement | null

/**
 * setTimeout 类型
 */
declare type Timeout = ReturnType<typeof setTimeout>

/**
 * setInterval 类型
 */
declare type Interval = ReturnType<typeof setInterval>

/**
 * 普通的对象的泛型
 */
declare interface IObject<T> {
  [index: string]: T
}

/**
 * 允许null的泛型
 */
declare type Nullable<T> = T | null

/**
 * 接口数据响应类型
 */
declare interface IResponse {
  code: number
  data: {
    data: any
    result: any
    total: number
  }
  message: string
}
