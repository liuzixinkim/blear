# Introduction
{{ introduction }}





# Example
```js
var jsonp = require('blear.core.jsonp');
```




# `jsonp(options, callback(err, result))`
发起 JSONP 请求。
```js
jsonp({
    url: 'http://example.com/'
}, function(err, result) {
    // ...
});
```

## `options`
- 类型：`Object`
- 说明：配置

## `options.url`
- 类型：`String`
- 说明：发起 JSONP 请求地址
- 默认：`null`

## `options.query`
- 类型：`String | Object`
- 说明：查询字符串或描述对象
- 默认：`null`

## `options.timeout`
- 类型：`Number`
- 说明：请求超时时间，来源于 [blear.utils.loader](/utils/loader.md)
- 默认：`10000`

## `options.cache`
- 类型：`Boolean`
- 说明：是否遵循 HTTP 缓存策略
- 默认：`true`

## `options.callbackKey`
- 类型：`String`
- 说明：回调的查询 key
- 默认：`callback`

## `options.callbackVal`
- 类型：`String`
- 说明：回调的包装函数名
- 默认：自动随机生成

## `callback`
- 类型：`Function`

## `callback: this`
- 类型：`null`

## `callback: err`
- 类型：`Error | null`
- 说明：如果没有错误，则为 `null`

## `callback: result`
- 类型：`Object`
- 说明：被包装的 JSON 对象




# Dependencies
{{ dependencies }}





# Reference
- JSONP 维基百科：<https://zh.wikipedia.org/wiki/JSONP>


