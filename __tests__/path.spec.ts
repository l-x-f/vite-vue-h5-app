import pathResolve from '../src/utils/pathResolve'

describe('src/utils/pathResolve.ts', () => {
  it('pathResolve', () => {
    expect(pathResolve.resolve('/home', '/index')).equal('/index')
    expect(pathResolve.resolve('/home', 'index')).equal('/home/index')
    expect(pathResolve.resolve('', 'index')).equal('/index')
    expect(pathResolve.resolve('', '')).equal('')
    expect(pathResolve.resolve('/', '/')).equal('/')
  })
})
