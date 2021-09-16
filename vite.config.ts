import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import html from 'vite-plugin-html'
import viteCompression from 'vite-plugin-compression'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

const pathResolve = (dir: string): string => resolve(__dirname, '.', dir)

// https://vitejs.dev/config/
const config = ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 环境变量
  const env = loadEnv(mode, process.cwd())
  // 生产环境判断
  const isEnvProduction = mode === 'production'
  // vite插件
  const plugins = [
    vue(),
    vueJsx(),
    html({
      inject: {
        injectData: { ...env }
      },
      minify: true
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ]

  if (isEnvProduction) {
    plugins.push(
      // 兼容插件
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      // gzip插件
      viteCompression({
        filter: /\.(js|css)$/i,
        algorithm: 'brotliCompress',
        threshold: 10 * 1024 // 10kb
      })
    )
  } else {
    plugins.push(
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        logger: true
      })
    )
  }

  return defineConfig({
    base: './',
    plugins,
    server: {
      port: 8383,
      open: false,
      strictPort: true
    },
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 自动导入scss变量，可在任意文件内访问，无需导入
          additionalData: `@import "src/styles/variables.module.scss";`
        }
      }
    },
    optimizeDeps: {
      include: ['vant']
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 2048,
      cssCodeSplit: true,
      minify: isEnvProduction ? 'terser' : 'esbuild',
      terserOptions: {
        compress: {
          drop_console: isEnvProduction
        }
      }
    }
  })
}

export default config
