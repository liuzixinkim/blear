# Introduction
{{ introduction }}





# Example
```js
var Redis = require('blear.classes.redis');
```




# Static
## `.defaults`
默认配置。
### `.defaults.url`
- 类型：`String`
- 说明：redis 地址
- 默认：`""`

### `.defaults.pass`
- 类型：`String`
- 说明：redis 密码
- 默认：`""`

### `.defaults.db`
- 类型：`String`
- 说明：redis 分片
- 默认：`0`

### `.defaults.expires`
- 类型：`Number`
- 说明：有效期，单位 ms
- 默认：1 天

# `new Redis(options)`
实例化一个 redis 访问类。

## `options`
配置，参考 `defaults`。



# Prototype
## `#expressSessionStorage(expressSession, prefix)`
创建一个 [express-session](https://github.com/expressjs/session) storage。
```js
var session = require('express-session')

redis.expressSessionStorage(session);
```

### `expressSession`
- 类型：`Object`
- 说明：express session 实例

### `prefix`
- 类型：`String`
- 说明：session 前缀
- 默认：`"sess:"`



## `#get(key, callback(err, val))`
从 redis 获取值。
### `key`
- 类型：`String`
- 说明：键名

### `callback`
- 类型：`Function`

### `callback: err`
- 类型：`Error | null`
- 说明：是否获取出错

### `callback: val`
- 类型：`*`
- 说明：获取值


## `#set(key, val, [expires], [callback](err))`
向 redis 里设置数据。
### `key`
- 类型：`String`
- 说明：键名

### `val`
- 类型：`*`
- 说明：键值

### `[expires]`
- 类型：`Number | Date`
- 说明：过期时间，可以是有效期长度或日期
- 默认：继承于配置

### `[callback]`
- 类型：`Function`
- 说明：回调

### `[callback]: err`
- 类型：`Error | null`
- 说明：是否设置出错


## `#remove(key, [callback](err))`
从 redis 中删除数据。
### `key`
- 类型：`String`
- 说明：键名

### `[callback]`
- 类型：`Function`
- 说明：回调

### `[callback]: err`
- 类型：`Error | null`
- 说明：是否设置出错



## `#destroy()`
销毁实例，断开连接。




# Events
## `connect()`
连接到 redis 成功时触发。

## `disconnect(err)`
连接到 redis 失败时触发。

### `err`
- 类型：`Error`





# Dependencies
{{ dependencies }}





# Reference
- express-session：<https://github.com/expressjs/session>

