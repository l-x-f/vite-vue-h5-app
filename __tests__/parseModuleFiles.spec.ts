import { parseModuleFiles } from '../src/utils/parseModuleFiles'
const moduleFiles = import.meta.globEager('../src/store/modules/*.ts')
const modules = parseModuleFiles(moduleFiles)

console.log(modules)

describe('src/utils/pathResolve.ts', () => {
  it('pathResolve', () => {
    expect(modules).to.be.haveOwnProperty('user')
  })
})
