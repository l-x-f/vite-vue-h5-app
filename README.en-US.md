# vite-vue-h5-app

**English** | [中文](./README.md)

## Technology

```code
Vue 3.2 + Typescript 5 + Vite 4 + Vant 4
```

## Preview

![home](./preview/1.jpg)![my](./preview/2.jpg)

## Development environment

| type                    | name                    | version        |
| ----------------------- | ----------------------- | -------------- |
| operating system        | Windows 11 professional | 22000.1098     |
| development tool        | Microsoft VS Code       | 1.72.2         |
| debugging tools         | Google Chrome           | 104.0.5112.102 |
| code version control    | git                     | 2.37.0         |
| environment             | node                    | 16.18.0        |
| package manager         | npm                     | 8.19.2         |
| package manager         | yarn                    | 1.22.17        |
| node version management | nvm                     | 1.1.7          |
| npm origin management   | nrm                     | 1.2.5          |

## Project Structure

```sh
.
├── README.md                           #Project introduction
├── README.zh-CN.md                     #Project introduction
├── commitlint.config.js                #commitlint config
├── cypress                             #unit testing , End to end testing
├── index.html                          #entry
├── mock                                #mock
├── package.json                        #package
├── postcss.config.js                   #postcss config
├── public                              # public file
│   ├── favicon.ico                     #icon
├── src                                 # core code
│   ├── App.vue                         #root component
│   ├── api                             #api
│   ├── assets                          #assets
│   ├── components                      #components
│   ├── config                          #mock and vconsole config
│   ├── icons                           #svg icons
│   ├── main.ts                         #entry
│   ├── router                          #router ,router-guards
│   ├── store                           #store
│   ├── styles                          #styles
│   ├── utils                           #utils
│   └── views                           #views
├── types                               #ts type
├── tsconfig.json                       #ts config
├── update.sh                           #commit code
├── viteConfig                          #vite config
├── vite.config.ts                      #vite config
└── yarn.lock                           #npm lock
```

## Project setup

### Installation Dependencies

```sh
yarn
```

### Compiles and hot-reloads for development

```sh
yarn dev
```

## Code lints and fixes files

```sh
yarn lint
```

## Style lint and fixes files

```sh
yarn stylelint
```

## Code commit

```sh
 ./update.sh
```

## Compiles and minifies for production

```sh
yarn build:prod
```

## License

MIT
