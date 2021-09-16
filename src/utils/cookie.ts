import Cookies from 'js-cookie'

const TokenKey = 'Token'

/**
 * 获取token
 * @returns token
 */
export function getToken(): string | undefined {
  return Cookies.get(TokenKey)
}

/**
 * 设置token
 * @returns token
 */
export function setToken(token: string): string | undefined {
  return Cookies.set(TokenKey, token)
}

/**
 * 移除token
 */
export function removeToken(): void {
  Cookies.remove(TokenKey)
}
