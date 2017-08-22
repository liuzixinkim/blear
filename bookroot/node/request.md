# Introduction
{{ introduction }}





# Example
```js
var request = require('blear.node.request');
```



# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

### `.defaults.query`
- 类型：`Object | String`
- 说明：查询参数

### `.defaults.body`
- 类型：`String`
- 说明：请求数据，不会添加任何请求头，如果要传 JSON，需要手动添加 `content-type: application/json` 请求头

### `.defaults.form`
- 类型：`Object`
- 说明：表单，会添加 `content-type: application/x-www-form-urlencoded` 请求头

### `.defaults.formData`
- 类型：`Object`
- 说明：表单，会添加 `content-type: multipart/form-data` 请求头

### `.defaults.headers`
- 类型：`Object`
- 说明：附加的请求头

### `.defaults.cookies`
- 类型：`Object`
- 说明：附加的请求 cookie

### `.defaults.url`
- 类型：`String`
- 说明：请求地址

### `.defaults.method`
- 类型：`String`
- 说明：请求方法

### `.defaults.encoding`
- 类型：`String`
- 说明：请求编码
- 默认：`"utf8"`

### `.defaults.maxRedirects`
- 类型：`Number`
- 说明：最大跳转次数（301、302、303跳转）
- 默认：`10`

### `.defaults.timeout`
- 类型：`Number`
- 说明：超时时间（单位：毫秒）
- 默认：`15000`

### `.defaults.browser`
- 类型：`Boolean | Object`
- 说明：模拟浏览器请求头
- 默认：
```js
browser = {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'accept-encoding': 'gzip',
    'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) ' +
    'AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 ' +
    pkg.name + '/' + pkg.version,
    'cache-control': 'no-cache',
    host: true,
    origin: true,
    // 经典错误，应为 referrer
    referer: true,
    // 是否保持 cookie
    cookie: true
}
```

### `.defaults.strictSSL`
- 类型：`Boolean`
- 说明：是否严格 SSL（某些网站的 HTTPS 证书不是被公认的）
- 默认：`false`

### `.defaults.debug`
- 类型：`Boolean`
- 说明：是否调试模式（调试模式下会输出一些请求和响应日志）
- 默认：`false`


# `request(options, callback(err, body, res))`
实现一个请求。同时该模块也是继承于 Stream 模块，因此可以适应 `pipe` 方法进行数据流传递。

```js
request({
    url: 'https://www.baidu.com/'
}, function(err, body, res) {
    // ....      
});

fromStream.pipe(request({url: 'https://www.baidu.com/'})).pipe(toStream);
```

### `options`
- 类型：`Object`
- 说明：配置，覆盖 `.defaults`

### `callback`
- 类型：`Function`
- 说明：响应回调

#### `callback: err`
- 类型：`Error | Null`
- 说明：错误，如果没有，则为 `null`

#### `callback: body`
- 类型：`Object | String`
- 说明：响应内容，如果是 `HEAD` 请求，则返回响应头对象（`Object`），否则返回响应内容（`String`）

#### `callback: res`
- 类型：`Object`
- 说明：响应对象

##### `callback: res.headers`
- 类型：`Object`
- 说明：响应头

##### `callback: res.statusCode`
- 类型：`Number`
- 说明：响应编码，如 `200`

##### `callback: res.cookies`
- 类型：`Object`
- 说明：响应的 cookie（来源于 `set-cookie` 响应头）






# Dependencies
{{ dependencies }}





# Reference
- [四种数据提交方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)
