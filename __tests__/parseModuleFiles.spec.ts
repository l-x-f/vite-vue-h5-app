import { parseModuleFiles } from '../src/utils/parseModuleFiles'
const moduleFiles = import.meta.glob('../src/store/modules/*.ts', { eager: true })
const modules = parseModuleFiles(moduleFiles as any)

console.log(modules)

describe('src/utils/pathResolve.ts', () => {
  it('pathResolve', () => {
    expect(modules).to.be.haveOwnProperty('user')
  })
})
