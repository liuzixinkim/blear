# Introduction
{{ introduction }}





# Example
```js
var ajax = require('blear.core.ajax');
```




# `ajax(options): undefined`
## `options`
- 类型：`Object`
- 说明：配置 

## `options.method`
- 类型：`String`
- 说明：请求方法，可以小写
- 默认：`"GET"`

## `options.url`
- 类型：`String`
- 说明：请求方法，可以小写
- 默认：`"GET"`


## `options.query`
- 类型：`String | Object`
- 说明：请求查询字符串或对象描述
- 默认：`null`

## `options.body`
- 类型：`String | FormData`
- 说明：请求方法，可以小写
- 默认：`null`

## `options.context`
- 类型：`*`
- 说明：回调上下文
- 默认：`null`

## `options.async`
- 类型：`Boolean`
- 说明：是否异步请求
- 默认：`true`

## `options.username`
- 类型：`String`
- 说明：url 鉴权用户名
- 默认：`null`

## `options.password`
- 类型：`String`
- 说明：url 鉴权密码
- 默认：`null`

## `options.dataType`
- 类型：`String`
- 说明：期望的响应数据类型，不建议修改，支持的有 `json`、`html`、`text`
- 默认：`"json"`

## `options.accepts`
- 类型：`String`
- 说明：期望接收的数据类型
- 默认：`{json: "application/json", html: "text/html", text: "text/plain"}`

## `options.cache`
- 类型：`Boolean`
- 说明：是否遵循 http 缓存策略
- 默认：`true`

## `options.crossDomain`
- 类型：`Boolean`
- 说明：是否跨域，如果非跨域将添加 `x-requested-with: XMLHttpRequest` 请求头
- 默认：`false`

## `options.onSend`
- 类型：`Function`
- 说明：请求发送时回调
- 默认：`null`

## `options.onSend: xhr`
- 类型：`XMLHttpRequest`
- 说明：ajax 请求的 `XMLHttpRequest` 实例

## `options.onSend: options`
- 类型：`Object`
- 默认：参数

## `options.onSend(xhr, options): next`
- 类型：`Boolean`
- 说明：返回 `false` 则取消 ajax
- 默认：`true`

## `options.onSuccess`
- 类型：`Function`
- 说明：请求响应成功回调
- 默认：`null`

## `options.onSuccess: result`
- 类型：`Object | String`
- 说明：如果期望响应数据类型是 `json`，则数据类型是 `Object`，否则为 `String`

## `options.onError`
- 类型：`Function`
- 说明：请求发送时回调
- 默认：`null`

## `options.onError: err`
- 类型：`Error`
- 说明：请求或响应出错都会触发，包含：
    - 请求被中断
    - 请求未成功发送
    - 请求被取消
    - 数据（JSON）解析错误
    - 响应 Code 错误
    - 响应超时错误

## `options.onComplete`
- 类型：`Function`
- 说明：请求发送时回调
- 默认：`null`

## `options.onComplete: err`
- 类型：`Error`
- 说明：请求或响应出错都会触发

## `options.onComplete: result`
- 类型：`Object | String`
- 说明：如果期望响应数据类型是 `json`，则数据类型是 `Object`，否则为 `String`

## `options.onProgress`
- 类型：`Function`
- 说明：请求发送时回调
- 默认：`null`

## `options.onProgress: ev`
- 类型：`Event`
- 说明：请求进度事件







# Dependencies
{{ dependencies }}



