# Introduction
{{ introduction }}





# Example
```js
var cookie = require('blear.core.cookie');
```






# Static

## `.get(name): value`
获取 cookie。

```js
cookie.get('token');
// => "balabala"
```

### `name`
- 类型：`String`
- 说明：cookie 名称

### `value`
- 类型：`String`
- 说明：对应 cookie 值



## `.getJSON(name): json`
获取 cookie 的 JSON 值。

```js
cookie.getJSON('userInfo');
// => {userName: 'Cloudcome'}
```

### `name`
- 类型：`String`
- 说明：cookie 名称

### `json`
- 类型：`Object | null`
- 说明：将对应cookie 值转换成 JSON 对象




## `.set(name, value, [options]): cookieStr`
设置 cookie。

```js
cookie.set('token', 'balabala');
// => "token=balabala"
```

### `name`
- 类型：`String`
- 说明：cookie 名称

### `value`
- 类型：`String`
- 说明：cookie 值

### `options`
- 类型：`Object`
- 说明：配置

### `options.domain`
- 类型：`String`
- 说明：cookie 域
- 默认：自动设置，如果是 `localhost`，则为空；否则为 `location.hostname`

### `options.expires`
- 类型：`Number`
- 说明：cookie 有效期，单位 ms
- 默认：`3600000`

### `options.path`
- 类型：`String`
- 说明：cookie 路径
- 默认：`"/"`

### `options.secure`
- 类型：`Boolean`
- 说明：是否以加密形式存取
- 默认：自动根据 URL 协议设置，如果是 `https:` 则为 `true`；否则为 `false`

### `cookieStr`
- 类型：`String`
- 说明：实际设置的字符串表达式


## `.setJSON(name, json, [options]): cookieStr`
设置 cookie，存储的时候转换为 JSON。

```js
cookie.set('userInfo', {
    userName: 'cloudcome'
});
// => "userInfo={"userName":"cloudcome"}"
```

### `name`
- 类型：`String`
- 说明：cookie 名称

### `json`
- 类型：`Object`
- 说明：cookie 值

### `options`
- 类型：`Object`
- 说明：配置

### `options.domain`
- 类型：`String`
- 说明：cookie 域
- 默认：自动设置，如果是 `localhost`，则为空；否则为 `location.hostname`

### `options.expires`
- 类型：`Number`
- 说明：cookie 有效期，单位 ms
- 默认：`3600000`

### `options.path`
- 类型：`String`
- 说明：cookie 路径
- 默认：`"/"`

### `options.secure`
- 类型：`Boolean`
- 说明：是否以加密形式存取
- 默认：自动根据 URL 协议设置，如果是 `https:` 则为 `true`；否则为 `false`

### `cookieStr`
- 类型：`String`
- 说明：实际设置的字符串表达式


## `.remove(name, [options]): cookieStr`
移除 cookie。其实移除 cookie 本质上也是一种设置操作，
只是将 cookie 值设为空，有效期设置为过期。

```js
cookie.remove('userInfo');
// => "userInfo=; expires=过期时间"
```

### `name`
- 类型：`String`
- 说明：cookie 名称

### `json`
- 类型：`Object`
- 说明：cookie 值

### `options`
- 类型：`Object`
- 说明：配置

### `options.domain`
- 类型：`String`
- 说明：cookie 域
- 默认：自动设置，如果是 `localhost`，则为空；否则为 `location.hostname`

### `options.path`
- 类型：`String`
- 说明：cookie 路径
- 默认：`"/"`

### `options.secure`
- 类型：`Boolean`
- 说明：是否以加密形式存取
- 默认：自动根据 URL 协议设置，如果是 `https:` 则为 `true`；否则为 `false`

### `cookieStr`
- 类型：`String`
- 说明：实际设置的字符串表达式





# Dependencies
{{ dependencies }}



