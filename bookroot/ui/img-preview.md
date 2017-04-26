# Introduction
{{ introduction }}





# Example
```js
var ImgPreview = require('blear.ui.img-preview');

new ImgPreview(options);
```




# Static
## `.defaults`
默认配置。

## `.defaults.el`
- 类型：`Element | String`
- 说明：容器元素，**不是图片元素**。

## `.defaults.extension`
_ 类型：`String`
- 说明：允许的扩展名
- 默认：`".png,.jpg,.jpeg,.gif,.bmp"`

## `.defaults.maxWidth`
_ 类型：`Number`
- 说明：预览区域的最大宽度
- 默认：`1100`

## `.defaults.maxHeight`
_ 类型：`Number`
- 说明：预览区域的最大高度
- 默认：`800`

## `.defaults.onUpload`
_ 类型：`Function`
- 说明：不支持本地预览的浏览器采用选择图片后自动上传图片的函数
- 默认：`onUpload(fileInputEl, done){ done(null, "url"); }`


# `new ImgPreview(options)`
实例化一个本地图片预览，`options` 默认值为 `.defaults`。


# Prototype
原型属性、方法

## `#getImgEl(): imgEl`
获取预览的图片节点。

### `imgEl`
- 类型：`HTMLImageElement`
- 说明：图片元素

## `#preview(fileInputEl, [callback](err)): this`
获取预览的图片节点。

### `fileInputEl`
- 类型：`input:file 元素`
- 说明：文件选择器

### `callback`
- 类型：`Function`
- 说明：预览后回调

### `callback: err`
- 类型：`Error | Null`
- 说明：如果有错误的话


## `#reset(): this`
重置为初始状态。


# Events
## `beforeLoading()`
图片加载之前触发。

## `beforeUpload()`
图片上传之前触发。

## `afterUpload()`
图片上传之后触发。

## `afterLoading()`
图片加载之后触发。

## `success()`
预览成功触发。

## `error()`
预览失败（包括图片加载错误、图片上传错误等）触发。






# Dependencies
{{ dependencies }}





# Reference
- URL.createObject：<https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL>

