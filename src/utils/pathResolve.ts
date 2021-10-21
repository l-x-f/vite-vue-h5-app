interface PlatformPath {
  /**
   * 解析路径
   * @param parent
   * @param path
   */
  resolve(parent: string, path: string): string
}

/**
 * 路径处理方法
 */
class PathResolve implements PlatformPath {
  resolve(parent: string, path: string) {
    if (path && path.startsWith('/')) {
      return path
    }
    const res =
      parent && parent.startsWith('/') && parent !== '/' ? parent + '/' + path : '/' + path

    let temp = res.replace(new RegExp('//', 'g'), '/')

    if (temp.endsWith('/')) {
      temp = temp.slice(0, temp.lastIndexOf('/'))
    }

    return temp
  }
}

export default new PathResolve()
