# Introduction
{{ introduction }}





# Example
```js
var weixin = require('blear.utils.weixin');
```

需要自行引入官网 jssdk 脚本。

- v1.2.0：<https://res.wx.qq.com/open/js/jweixin-1.2.0.js>
- v1.1.0：<https://res.wx.qq.com/open/js/jweixin-1.1.0.js>
- v1.0.0：<https://res.wx.qq.com/open/js/jweixin-1.0.0.js>




# Prototype

## `#config(configs): weixin`
配置微信 JSSDK，返回 `weixin`，支持链式调用。官方文档：<https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E6.AD.A5.E9.AA.A4.E4.B8.89.EF.BC.9A.E9.80.9A.E8.BF.87config.E6.8E.A5.E5.8F.A3.E6.B3.A8.E5.85.A5.E6.9D.83.E9.99.90.E9.AA.8C.E8.AF.81.E9.85.8D.E7.BD.AE>

### `configs`
- 类型：`Object`
- 说明：配置信息

### `configs.debug` 
- 类型：`Boolean`
- 说明：是否调试模式
- 默认：根据 `DEBUG` 全局变量来配置

### `configs.appId`
- 类型：`String`
- 说明：公众号唯一标识，必填
 
### `configs.timestamp` 
- 类型：`String | Number`
- 说明：生成签名时的时间戳，必填
 
### `configs.nonceStr` 
- 类型：`String`
- 说明：生成签名的随机串，必填
 
### `configs.signature` 
- 类型：`String`
- 说明：签名，必填
 
### `configs.jsApiList` 
- 类型：`String`
- 说明：需要使用的JS接口列表
- 默认：已支持全部接口
 

## `#ready(callback): weixin`
微信客户端成功配置后回调，异步。返回 `weixin`，支持链式调用

### `callback`
- 类型：`Function`


## `#broken(callback): weixin`
微信客户端失败配置后回调，异步。返回 `weixin`，支持链式调用。
### `callback`
- 类型：`Function`



## `#share(shareData): weixin`
设置分享数据。返回 `weixin`，支持链式调用。

### `shareData`
- 类型：`Object`
- 说明：分享配置

### `shareData.title`
- 类型：`String`
- 说明：分享的标题，必填

### `shareData.desc`
- 类型：`String`
- 说明：分享的描述，必填

### `shareData.timelineDesc`
- 类型：`String`
- 说明：分享在朋友圈的描述

### `shareData.link`
- 类型：`String`
- 说明：分享的链接，必填

### `shareData.img`
- 类型：`String`
- 说明：分享的图片，必填

### `shareData.type`
- 类型：`String`
- 说明：分享的附加内容类型

### `shareData.data`
- 类型：`String`
- 说明：分享的附加内容



## `#support(api, callback(support)): weixin`
判断微信客户端是否支持某个 API，异步。返回 `weixin`，支持链式调用。
```js
weixin.support('chooseWXPay', function(support) {
    if (support) {
        alert('很高兴，你的微信客户端支持网页唤起微信支付。')
    } else {
        alert('对不起，你的微信客户端还不支持网页唤起微信支付，赶紧升级吧！')
    }
});
```

### `api`
- 类型：`String`
- 说明：接口名称

### `callback`
- 类型：`Function`

### `callback: this`
- 类型：`Object`
- 说明：指向 `weixin`

### `callback: support`
- 类型：`Boolean`
- 说明：如果支持，则为 `true`；否则为 `false`


## `#previewImage(data): weixin`
图片查看器。返回 `weixin`，支持链式调用。

### `data`
- 类型：`String`
- 说明：图片数据

### `data.active`
- 类型：`Number`
- 说明：初始化第几张图片
- 默认：`0`

### `data.list`
- 类型：`Array`
- 说明：图片数组



## `#getLocation(callback(result)): weixin`
获取当前地理位置，异步。返回 `weixin`，支持链式调用。

### `callback`
- 类型：`Function`

### `callback: this`
- 类型：`Object`
- 说明：指向 `weixin`

### `callback: result`
- 类型：`Object`
- 说明：地理位置描述对象

### `callback: result.latitude`
- 类型：`Number`
- 说明：纬度，`90 ~ -90` 之间

### `callback: result.longitude`
- 类型：`Number`
- 说明：经度，`180 ~ -180` 之间

### `callback: result.speed`
- 类型：`Number`
- 说明：速度，单位 `m/s`

### `callback: result.accuracy`
- 类型：`Number`
- 说明：精度



## `#hideOptionMenu(): weixin`
隐藏右上角菜单。返回 `weixin`，支持链式调用。


## `#hideShareMenus(): weixin`
隐藏分享菜单。返回 `weixin`，支持链式调用。


## `#hideExternalMenus(): weixin`
隐藏扩展菜单。返回 `weixin`，支持链式调用。


## `#showShareMenus(): weixin`
显示分享菜单。返回 `weixin`，支持链式调用。


## `#showExternalMenus(): weixin`
显示扩展菜单。返回 `weixin`，支持链式调用。


## `#showOptionMenu(): weixin`
显示右上角菜单。返回 `weixin`，支持链式调用。


## `#chooseWXPay(signature, callback(err)): weixin`
微信支付，异步。返回 `weixin`，支持链式调用。

### `signature`
- 类型：`Object`
- 说明：签名信息描述对象

### `signature.timestamp`
- 类型：`Number`
- 说明：支付签名时间戳

### `signature.nonceStr`
- 类型：`String`
- 说明：支付签名随机字符串，不长于 32 位

### `signature.package`
- 类型：`String`
- 说明：统一支付接口返回的 `prepay_id` 参数值

### `signature.signType`
- 类型：`String`
- 说明：签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
- 默认：`MD5`

### `signature.paySign`
- 类型：`String`
- 说明：支付签名


### `callback`
- 类型：`Function`

### `callback: this`
- 类型：`Object`
- 说明：指向 `weixin`

### `callback: err`
- 类型：`Error | null`
- 说明：无错误返回 `null`，否则返回 `Error` 实例


## `#scan(auto, callback(err, result)): weixin`
微信扫码，异步。返回 `weixin`，支持链式调用。

### `auto`
- 类型：`Boolean`
- 说明：是否自动处理扫码结果

### `callback`
- 类型：`Function`

### `callback: this`
- 类型：`Object`
- 说明：指向 `weixin`

### `callback: err`
- 类型：`Error | null`
- 说明：无错误返回 `null`，否则返回 `Error` 实例

### `callback: result`
- 类型：`String`
- 说明：扫码结果


## `#uploadImage(callback(err, result)): weixin`
上传图片，异步。内部会自动处理选择图片和上传图片两步。返回 `weixin`，支持链式调用。


### `callback`
- 类型：`Function`

### `callback: this`
- 类型：`Object`
- 说明：指向 `weixin`

### `callback: err`
- 类型：`Error | null`
- 说明：无错误返回 `null`，否则返回 `Error` 实例

### `callback: result`
- 类型：`String`
- 说明：上传结果

### `callback: result.serverId`
- 类型：`String`
- 说明：微信服务器对该图片的映射 ID，开发者需要自行从微信服务器下载该图片，然后上传到自己的业务服务器上，详细参考 [微信官方文档](https://mp.weixin.qq.com/wiki/12/58bfcfabbd501c7cd77c19bd9cfa8354.html)


## `#is: isWeixinClient`
判断当前是否为微信客户端。

### `isWeixinClient`
- 类型：`Boolean`


## `#version: weixinClientVersion`
获取微信客户端版本。

### `weixinClientVersion`
- 类型：`String`


## `#netWork: weixinClientNetWork`
获取微信客户端所在的网络环境。

### `weixinClientNetWork`
- 类型：`String`


## `#language: weixinClientLanguage`
获取微信客户端设置的语言。

### `weixinClientLanguage`
- 类型：`String`







# Dependencies
{{ dependencies }}





# More
- 微信 JSSDK 说明文档：<https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html>
- 微信 JS 接口签名校验工具：<https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign>


