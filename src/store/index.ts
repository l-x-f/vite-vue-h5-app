/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore, createLogger, ModuleTree, Store, useStore as baseUseStore } from 'vuex'

import { parseModuleFiles } from '/@/utils/parseModuleFiles'
import { isEnvDevelopment } from '/@/utils/env'
import { toRefs, InjectionKey, readonly, ToRefs, DeepReadonly } from 'vue'
import getters from './getters'

// 自动同步导入`./modules`文件夹下所有子模块
const moduleFiles = import.meta.globEager('./modules/*.ts')
const modules = parseModuleFiles(moduleFiles) as ModuleTree<IStoreState>

// store唯一key
export const key: InjectionKey<Store<IStoreState>> = Symbol()

export const store = createStore<IStoreState>({
  getters,
  modules,
  plugins: isEnvDevelopment ? [createLogger()] : [],
  strict: isEnvDevelopment
})

// 简化 useStore 用法
export const useStore = (): Store<IStoreState> => {
  return baseUseStore<IStoreState>(key) || {}
}

export type IStoreGettersReturnType = ToRefs<
  DeepReadonly<{ [K in keyof IStoreGetters]: IStoreGetters[K] }>
>

// 自定义Getters解决默认的Getters无提示问题
export const useGetters = (): IStoreGettersReturnType => {
  const temp = readonly<IStoreGetters>(store?.getters || {})
  return { ...toRefs(temp) }
}

export default store
