# Introduction
{{ introduction }}





# Example
```js
var log = require('blear.node.log');
```




# Static
## `.expressMiddleware(options): middleware`
express 中间件，用于记录日志。

### `options`
- 类型：`Object`
- 说明：配置

### `options.inject`
- 类型：`Object`
- 说明：配置，注入属性信息
- 默认：有`request time`、`request IP`、`request URL`、`request headers`、`request session`、`request query`、`request body`

```js
log.expressMiddleware({
    inject: {
        // 可以使用直接常量
        xxx: 'xxx',
        // 也可以使用间接函数
        yyy: function(req, res) {
            return req.yyy || 'yyy';
        }
    }
});
```


## `.holdError([err]): undefined`
劫持住 Error 对象。
```js
fs.readFile(path, log.holdError);
```

### `err`
- 类型：`Error`
- 说明：错误对象，如果有的话



## `.manage(options)`
日志文件管理。

### `options`
- 类型：`Object`
- 说明：配置，默认值有
```js
默认配置 = {
    // 日志的保存目录
    dirname: null,
    outLog: 'out.log',
    errLog: 'err.log',
    // 每天 0 点切割日志
    schedules: [{
        h: [0],
        m: [0]
    }],
    // 只保留 7 天之内日志
    maxLength: 7
};
```



# Dependencies
{{ dependencies }}





# Reference
无。

