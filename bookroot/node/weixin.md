# Introduction
{{ introduction }}





# Example
```js
var weixin = require('blear.node.weixin');
```




# Static

## `.config(configs)`
配置。
```js
默认配置 = {
    debug: false,
    appId: '',
    appSecret: '',
    // 指定 js-api-ticket 方法
    getJsApiTicket: function (callback) {
        callback(new Error('未配置获取 js-api-ticket 方法'), {ticket: 'xxxx'});
    }
}
```
### `configs`
- 类型：`Object`
- 说明：覆盖默认配置



## `.jsApiSignature(url, callback(err, ret)): undefined`
URL 微信 js Api 签名。官方文档：<https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115>。

### `url`
- 类型：`String`
- 说明：url，如 `https://a.b/c/d/e?f=g`

### `callback`
- 类型：`Function`
- 说明：签名回调

#### `callback: err`
- 类型：`Error | Null`
- 说明：签名错误

#### `callback: ret`
- 类型：`Object`
- 说明：签名结果

##### `callback: ret.nonceStr`
- 类型：`String`
- 说明：随机字符串

##### `callback: ret.timestamp`
- 类型：`String`
- 说明：时间戳

##### `callback: ret.url`
- 类型：`String`
- 说明：原始 URL，但会被去除 hash

##### `callback: ret.jsApiTicket`
- 类型：`String`
- 说明：JS API 令牌

##### `callback: ret.signature`
- 类型：`String`
- 说明：签名结果

##### `callback: ret.state`
- 类型：`String`
- 说明：签名验证状态值

##### `callback: ret.expiresIn`
- 类型：`Number`
- 说明：签名有效期（单位：毫秒）


## `.getAuthorizationAccessToken(code, callback(err, ret)): undefined`
根据 code 获取 authorization accessToken。
官方文档：<https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842>。

### `code`
- 类型：`String`
- 说明：微信授权登录回调回来的 code 字段

### `callback`
- 类型：`Function`
- 说明：回调

#### `callback: err`
- 类型：`Error | Null`
- 说明：回调错误

#### `callback: ret`
- 类型：`Object`
- 说明：回调结果

##### `callback: ret.accessToken`
- 类型：`String`
- 说明：访问令牌

##### `callback: ret.expiresIn`
- 类型：`Number`
- 说明：有效期（单位：毫秒）

##### `callback: ret.openId`
- 类型：`String`
- 说明：用户唯一标识

##### `callback: ret.scope`
- 类型：`String`
- 说明：用户授权作用域


## `.getUserInfo(openId, accessToken, callback(err, ret)): undefined`
获取用户信息。
官方文档：<https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842>。

### `openId`
- 类型：`String`
- 说明：用户唯一标识

### `accessToken`
- 类型：`String`
- 说明：访问令牌

### `callback`
- 类型：`Function`
- 说明：回调

#### `callback: err`
- 类型：`Error`
- 说明：回调错误

#### `callback: ret`
- 类型：`Object`
- 说明：回调结果

#### `callback: ret.openId`
- 类型：`String`
- 说明：用户唯一标识

#### `callback: ret.unionId`
- 类型：`String`
- 说明：用户唯一标识2（只有该公众号绑定在开放平台之后才会有）

#### `callback: ret.nickname`
- 类型：`String`
- 说明：用户昵称（注意可能有表情符号）

#### `callback: ret.sex`
- 类型：`String`
- 说明：用户性别
    - 1：男
    - 2：女
    - 0：未知

#### `callback: ret.country`
- 类型：`String`
- 说明：用户所在的国家

#### `callback: ret.province`
- 类型：`String`
- 说明：用户所在的省份

#### `callback: ret.city`
- 类型：`String`
- 说明：用户所在的城市

#### `callback: ret.avatar`
- 类型：`String`
- 说明：用户头像



## `.request(options, callback(err, ret)): undefined`
发起一个微信格式请求。
入参出参请参考 [blear.node.request](/node/request)。


## `.parseResponseBody(body, callback(err, ret)): undefined`
解析微信响应的结果。

### `body`
- 类型：`String`
- 说明：微信响应内容

### `callback`
- 类型：`Function`
- 说明：微信响应回调

#### `callback: err`
- 类型：`Error`
- 说明：微信响应回调错误

#### `callback: ret`
- 类型：`*`
- 说明：微信响应回调结果


# Dependencies
{{ dependencies }}





# Reference
- 微信官网 wiki：<https://mp.weixin.qq.com/wiki>。

