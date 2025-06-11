# 前端工具函数库 `@pointcloud/pcloud-utils`

![node version](<https://img.shields.io/badge/node-v16.20.0-brightgreen?logo=nodedotjs&color=rgb(0%2C126%2C298)>) ![docs](https://img.shields.io/badge/docs%20by-typedoc-brightgreen?style=flat&color=%230081ff) ![building type](https://img.shields.io/badge/rollup-%23d14f0c?style=flat-square&logo=rollupdotjs&logoColor=%23eef01a) ![license](<https://img.shields.io/badge/license-ISC-rgb(144%2C190%2C8)?style=flat>)

`@pointcloud/pcloud-utils` 是一个基于 TypeScript 编写的前端函数库，主要解决项目中常见的函数封装问题，便于各个项目能够快速使用，减少开发人员的工作量，提升开发效率。

## 中文说明

该文档汇总了 `pcloud-utils` 项目中所有模块导出的函数成员，仅列出函数名称和简要功能描述。

- 支持 esm、umd 方式加载
- 支持 docker 构建文档站点
- 支持自动化发布到 npm 及版本升级
- 支持 TS 类型提示
- 完善的文档说明
- 支持按需引入

## 模块列表
- [cache](#cache)
- [coordTransform](#coordtransform)
- [file](#file)
- [formTest](#formtest)
- [fscHelper](#fschelper)
- [http](#http)
- [indexDB](#indexdb)
- [numHelper](#numhelper)
- [SocketEmitter](#socketemitter)
- [treeHelper](#treehelper)
- [uuid](#uuid)
- [groupByField](#groupbyfield)
- [strHelper](#strhelper)
---

### cache

提供浏览器端缓存操作功能。

- clearAll: 清除全部缓存数据。  
- clearCache: 按键清除指定缓存项。  
- getCache: 按键获取缓存值。  
- setCache: 按键存储缓存值。

---

### coordTransform

坐标转换工具，支持多种坐标系统之间的转换。

- bd09togcj02: 百度坐标转高德坐标。  
- gcj02tobd09: 高德坐标转百度坐标。  
- gcj02towgs84: 高德坐标转 GPS 坐标。  
- lonLatToMercator: 经纬度转墨卡托投影。  
- mercatorToLonLat: 墨卡托投影转回经纬度。  
- outOfChina: 判断坐标是否在中国境外。  
- wgs84togcj02: GPS 坐标转高德坐标。

---

### file

文件处理工具，适用于浏览器端。

- convertSize: 将字节大小转换为可读格式（如 KB、MB）。  
- downloadBlobFile: 下载 Blob 类型文件。  
- getFileExtension: 获取文件扩展名。  
- previewImage: 在浏览器中预览图片流, `<a>`标签直接下载打开。  
- previewPdf: 在浏览器中预览 PDF 文件。  
- tagADownload: 使用 `<a>` 标签触发下载文件url。

---

### formTest

表单验证工具，包含正则表达式和验证方法。

- ValidatorBankCard: 验证银行卡号。  
- ValidatorCCA: 验证中国公民身份证号（备用规则）。  
- ValidatorChinese: 验证中文字符。  
- ValidatorEmail: 验证邮箱地址。  
- ValidatorIdCard: 验证中国大陆身份证号码。  
- ValidatorLetter: 验证字母字符。  
- ValidatorPsw: 验证密码格式。  
- ValidatorTel: 验证电话号码。  
- ValidatorUrl: 验证 URL 地址。

---

### fscHelper

浏览器原生全屏控制和剪贴板操作工具。

- copyToClipboard: 复制文本到剪贴板。
- exitFullscreen: 退出全屏模式。  
- fullScreenListener: 添加全屏变化监听器。  
- fullscreen: 请求进入全屏模式。  
- fullscreenEnabled: 检查是否支持全屏功能。  
- isFullscreen: 检查当前是否处于全屏状态。  
- pasteFromClipboard: 从剪贴板粘贴文本。

---

### http

HTTP 工具类，用于网络请求控制。

- asyncPool: 控制并发异步任务数量（例如多个 HTTP 请求并发限制）。

---

### indexDB

浏览器IndexDB缓存工具类的实现。

- openDB: 打开数据库。
- put: 添加存储数据。
- update: 更新数据。
- get: 获取数据。
- remove: 删除数据。
- closeDB: 关闭数据库连接。
- deleteDB: 删除数据库。

---

### SocketEmitter

用于管理 WebSocket 通信与事件订阅。

- execAction: 执行 WebSocket 上的某个动作。  
- initWS: 初始化 WebSocket 连接。  
- subscribe: 订阅特定事件。  
- unsubscribe: 取消对特定事件的订阅。

---

### numHelper

数字处理工具。

- convertToChinese: 将数字转换为中文大写形式（常用于金额显示）。  
- thousand: 数字千分位格式化。
- getRandomNumber: 生成随机数字(支持小数位数)。

---

### strHelper

字符串处理工具。

- toCamelCase: 将字符串转换为驼峰命名。  
- toKebabCase: 将字符串转换为短横线命名。
- uuid: 生成随机 UUID。

### treeHelper

树形结构操作工具。

- deepFind: 深度查找符合条件的节点。  
- deepFindPath: 查找节点并返回路径。  
- deepTraversal: 深度优先遍历树。  
- findFirstNode: 查找第一个匹配的节点。  
- getParentIdsByTreeId: 根据节点 ID 获取其所有父级 ID 路径。  
- getTreeLeaf: 获取树的所有叶子节点。  
- wideTraversal: 广度优先遍历树。
- flatToTree: 将列表结构转为树形结构。
- flatToList: 将树形结构转为列表结构。

---

以下模块均为直接导出
### uuid
获取一个全局唯一标识符

### groupByfield
将列表数据按照某个字段进行分组

---

如需更详细的使用方式、参数说明或示例，请查阅 [官方文档](./docs/index.html)。


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

---

## 使用示例

```js
import { cache, uuid } from "@pointcloud/pcloud-utils";
cache.setCache("person", { name: "Tom", age: 16 }, "session");
const uid = uuid();
```

---