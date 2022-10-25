import { viteMockServe } from 'vite-plugin-mock'
import type { RegisterPluginsParams, VitePlugins } from '../type'

const registerDevPlugins = ({ command }: RegisterPluginsParams): VitePlugins => [
  viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve',
    logger: false
  })
]

export default registerDevPlugins
