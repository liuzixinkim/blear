# Introduction
{{ introduction }}





# Example
```js
var QRCode = require('blear.classes.qrcode');
```




# Static

## `.defaults`
暂无默认选项。


# `new QRCode(options)`
## `options`
无选项。


# Prototype
## `#draw(data): this`
绘制二维码。
### `data`
- 类型：`String`
- 说明：待绘制的数据


## `#getModuleCount(): count`
获取绘制之后的模块数量。

### `count`
- 类型：`Number`
- 说明：模块数量


## `#isDark(row, col): isDark`
判断当前模块是否为深色。

### `row`
- 类型：`Number`
- 说明：行号

### `col`
- 类型：`Number`
- 说明：列号

### `isDark`
- 类型：`Boolean`
- 说明：是否为深色





# Dependencies
{{ dependencies }}





# Reference
- 二维码百度百科：<http://baike.baidu.com/view/132241.htm>

