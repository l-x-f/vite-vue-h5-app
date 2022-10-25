export { default as registerPlugins } from './plugins'
export type { RegisterPluginsParams } from './type'

// 分包配置
export const manualChunks: RecordType<Array<string>> = {
  vue: ['vue'],
  'vue-router': ['vue-router'],
  pinia: ['pinia'],
  vant: ['vant'],
  'lodash-es': ['lodash-es']
}
