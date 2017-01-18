# Introduction
{{ introduction }}





# Example
```js
var upload = require('blear.core.upload');
```




# `upload(options)`
## `options`
- 类型：`Object`
- 说明：配置信息

## `options.fileEl`
- 类型：`HTMLInputElement`
- 说明：选择的 `input:file` 元素

## `options.blob`
- 类型：`Blob`
- 说明：指定一个上传内容，`blob` 和 `fileEl` 二选一即可

## `options.multiple`
- 类型：`Boolean`
- 说明：是否为多选模式，只在指定 `blob` 时生效
- 默认：`false`

## `options.crossDomain`
- 类型：`Boolean`
- 说明：是否跨域
- 默认：`false`

## `options.method`
- 类型：`String`
- 说明：请求方法
- 默认：`"POST"`

## `options.url`
- 类型：`String`
- 说明：请求地址
- 默认：`"/"`

## `options.body`
- 类型：`Object`
- 说明：请求附加数据
- 默认：`null`

## `options.body`
- 类型：`Object`
- 说明：请求附加数据
- 默认：`null`

## `options.fileName`
- 类型：`String`
- 说明：文件字段名称
- 默认：`"file"`

## `options.context`
- 类型：`*`
- 说明：回调上下文
- 默认：`null`

## `options.dataType`
- 类型：`String`
- 说明：期望数据类型
- 默认：`"json"`

## `options.onProgress`
- 类型：`Function`
- 说明：上传进度回调，不支持 `FormData` 的浏览器是没有 `onProgress` 事件的
- 默认：`noop`

## `options.onProgress: ev`
- 类型：`Event`
- 说明：上传进度事件

## `options.onSuccess`
- 类型：`Function`
- 说明：上次成功回调
- 默认：`noop`

## `options.onSuccess: result`
- 类型：`*`
- 说明：响应内容

## `options.onError`
- 类型：`Function`
- 说明：上次失败回调
- 默认：`noop`

## `options.onError: err`
- 类型：`Error`
- 说明：错误对象

## `options.onComplete`
- 类型：`Function`
- 说明：上传完成后回调，最后触发
- 默认：`noop`

## `options.onComplete: err`
- 类型：`Error`
- 说明：错误对象

## `options.onComplete: result`
- 类型：`*`
- 说明：响应内容



# Dependencies
{{ dependencies }}





# Reference
- FormData：<https://developer.mozilla.org/zh-CN/docs/Web/API/FormData>

