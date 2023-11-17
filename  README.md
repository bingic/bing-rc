项目简介 着重说明
================

这是一个基于rollup的组件打包库，主要用于快速整合自定义组件，打包成一个完整的组件库。
服务基于React,使用Typescript开发，支持ES6语法.

## 项目结构

```
├── README.md
├── dist // 打包后的组件库
│  ├── rollup-react-component.js  // rollup 打包后的组件
├── example // 示例
│  ├── public // 公共组件
│  ├── dist // 打包后的项目文件
│  ├── src // 示例项目源码
│  │  ├── App.tsx // 示例项目组件
│  │  ├── index.ts // 示例项目入口
│  ├── .babelrc  // babel 配置文件
│  ├── package.json // 示例项目依赖
│  ├── rollup.config.js // rollup配置文件
│  ├── tsconfig.json // 示例项目ts配置
├── package.json  // 项目配置文件
├── rollup.config.js // rollup 配置文件
├── src // 组件源码
│  ├── components // 组件
│  ├── index.ts // 组件入口
├── .babelrc // babel 配置文件
├── .gitignore // git 忽略文件
├── tsconfig.json // ts配置文件
├── rollup.config.js // rollup配置文件

```

## 使用

特别注意:需要编译的组件必须放在src/components目录下，否则无法打包.

运行示例项目前需要先打包组件库.

打包命令: `yarn build`

打包文件:dist/rollup-react-component.js

运行示例:`cd example && yarn dev`

将会在example/dist目录下生成打包后的文件,此文件可以直接在浏览器中运行.


## 打包上传 npm
- 将 build 复制到 npm
- 更新 package.json
``` json
{
  "name": "bing-rc",
  "version": "1.0.3",
  "description": "react components",
  "main": "./build/bundle.js",
  "types": "./build/bundle.d.ts",
  "scripts": {},
  "files": [
    "build"
  ],
  "keywords": [
    "react",
    "typescript"
  ],
  "author": {
    "name": "bingic",
    "email": "icby@qq.com"
  },
  "license": "ISC",
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}


```
- cd npm    进入文件夹
- npm pack    将文件打包
- npm login   登陆npm 已登陆可忽略
- npm publish "bing-rc-1.0.10.tgz" --access public
- 发布完毕。
