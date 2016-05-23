# blearjs

前后端通用脚本库。

blearjs 将会以 commonJS 的形式发布，大部分模块都适用于浏览器和 NodeJS 端。


# 命名规范

- 全部小写，语义化
- `blear.utils.object` => 浏览器和 node 通用
- `blear.classes.template` => 浏览器和 node 通用
- `blear.node.template` => node 端单独使用


# 组织规范
模块按照功能进行分类：

- `blear.core` 浏览器核心函数
- `blear.utils` 工具函数
- `blear.classes` 通用类
- `blear.ui` 浏览器 UI 类
- `blear.polyfill` 浏览器补平函数
- `blear.shims` 浏览器扩展函数
- `blear.node` Node 端独有
- `blear.express` express 中间件



