# 点云科技前端工具函数库`@pointcloud/pcloud-utils`

![node version](<https://img.shields.io/badge/node-v16.20.0-brightgreen?logo=nodedotjs&color=rgb(0%2C126%2C298)>) ![docs](https://img.shields.io/badge/docs%20by-typedoc-brightgreen?style=flat&color=%230081ff) ![building type](https://img.shields.io/badge/rollup-%23d14f0c?style=flat-square&logo=rollupdotjs&logoColor=%23eef01a) ![license](<https://img.shields.io/badge/license-ISC-rgb(144%2C190%2C8)?style=flat>)

`@pointcloud/pcloud-utils`是一个基于 ts 编写的前端函数库，主要解决项目中常见的函数的封装，便于各个项目能够快速使用，减少开发人员的开发工作量，提升开发效率。

## 功能特性

- 支持 esm、umd 方式加载
- 支持 docker 构建文档站点
- 支持自动化发布到 npm 及版本升级
- 支持 TS 类型提示
- 完善的文档说明
- 支持按需引入

## 基本指令

- **构建项目**

  ```
  npm run build
  ```

- **构建文档站点**

  ```
  npm run doc
  ```

- **构建本地 Docker 镜像**

  ```
  npm run docker:build
  ```

- **自动化发布**

  ```
  npm run release
  ```

- **推送 Docker 镜像**

  ```
  npm run docker:push
  ```

## 使用示例

```js
import { cache } from '@pointcloud/pcloud-utils'
cache.setCache('person', { name: 'Tom', age: 16 }, 'session')
```
