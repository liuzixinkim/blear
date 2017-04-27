# Introduction
{{ introduction }}





# Example
```js
var QRCode = require('blear.ui.qrcode');

new QRCode({
    el: '#demo'
}).render('hello');
```




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Object`
- 说明：渲染容器

## `.defaults.size`
- 类型：`Number`
- 说明：尺寸
- 默认：`256`

## `.defaults.background`
- 类型：`String`
- 说明：背景色
- 默认：`"#fff"`

## `.defaults.foreground`
- 类型：`String`
- 说明：前景色
- 默认：`"#000"`



# `new QRCode(options)`
实例化一个二维码渲染 UI，`options` 默认值为 `.defaults`。



# Prototype
原型属性、方法

## `#render(text): this`
将文本渲染为二维码。

### `text`
- 类型：`String`
- 说明：文本



# Events
无。






# Dependencies
{{ dependencies }}





# Reference
无。

