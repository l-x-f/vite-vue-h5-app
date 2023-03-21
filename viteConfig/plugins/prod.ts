/* eslint-disable @typescript-eslint/no-unused-vars */
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import banner from 'vite-plugin-banner'
import type { VitePlugins, RegisterPluginsParams } from '../type'
import pkg from '../../package.json'

const registerProdPlugins = (option: RegisterPluginsParams): VitePlugins => {
  const plugins: VitePlugins = [
    // gzip插件
    viteCompression({
      filter: /\.(js|css)$/i,
      algorithm: 'brotliCompress',
      threshold: 10 * 1024 // 10kb
    }),
    // 添加版权注释
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * copyright: ${pkg.copyright}\n */`
    })
  ]

  //  包分析插件
  if (process.env.REPORT === 'true') {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return plugins
}

export default registerProdPlugins
