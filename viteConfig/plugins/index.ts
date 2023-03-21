import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import type { RegisterPluginsParams, VitePlugins } from '../type'
import registerDevPlugins from './dev'
import registerProdPlugins from './prod'

/**
 *  注册插件
 * @param options
 * @returns
 */
export default function registerPlugins(options: RegisterPluginsParams): VitePlugins {
  const { env, pathResolve, isEnvProduction } = options
  // vite插件
  let plugins: VitePlugins = [
    vue(),
    // defineOptions 宏
    DefineOptions(),
    createHtmlPlugin({
      inject: {
        data: { ...env }
      },
      minify: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    }),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
      dts: false,
      directoryAsNamespace: true
    })
  ]

  plugins = isEnvProduction
    ? [...plugins, ...registerProdPlugins(options)]
    : [...plugins, ...registerDevPlugins(options)]

  return plugins
}
