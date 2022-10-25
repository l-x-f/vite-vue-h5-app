# vite-vue-h5-app

## 技术栈

```code
Vue 3 + Typescript + Vite + Vant
```

## 项目结构

```sh
.
├── README.md                           #项目简介
├── commitlint.config.js                #commitlint配置
├── cypress                             #单元测试 端到端测试
├── index.html                          #页面入口
├── mock                                #mock
├── package.json                        #package
├── postcss.config.js                   #postcss配置
├── public                              #静态文件
│   ├── favicon.ico                     #icon
├── src                                 #核心源码
│   ├── App.vue                         #根组件
│   ├── api                             #接口
│   ├── assets                          #资源
│   ├── components                      #组件
│   ├── icons                           #svg图标
│   ├── main.ts                         #项目入口
│   ├── router                          #路由，导航守卫
│   ├── store                           #数据仓库
│   ├── styles                          #全局样式和样式变量
│   ├── utils                           #工具函数
│   └── views                           #业务页面
├── types                               #ts类型
├── tsconfig.json                       #ts项目配置
├── update.sh                           #提交代码脚本
├── viteConfig                          #vite配置
├── vite.config.ts                      #vite项目配置
└── yarn.lock                           #npm包版本锁定
```

## 项目启动

### 安装依赖

```sh
yarn
```

### 开启开发环境

```sh
yarn dev
```

## 代码检验

```sh
yarn lint
```

## 样式检验

```sh
yarn stylelint
```

## 代码提交

```sh
 ./update.sh
```

## 打包部署

```sh
yarn build:prod
```
