# Introduction
{{ introduction }}





# Example
```js
var storage = require('blear.core.storage');
```


# `storage(store): storageAPI`
对 `store` 的一层封装，封装的接口详细参考静态方法。

`store` 必须具备以下方法：

- 获取项目：`.getItem(key): val`
- 设置项目：`.setItem(key, val)`
- 移除项目：`.removeItem(key)`
- 根据索引值去键：`.key(index)`
- 清空项目：`.clear()`
- 项目长度：`.length`

`key`、`val` 都必须为字符串。



# Static

## `.local`
本地永久性存储接口封装。

### `.get(key): val`
取值。

```js
local.get('user');
// => {
//    userName: "cloudcome"
// }
```

#### `key`
- 类型：`String`
- 说明：键名

#### `val`
- 类型：`Array | Object | Boolean | Number | String | null`
- 说明：键值

### `.set(key, val): success`
设值。
```js
local.set('user', {
    userName: 'Tom lee'
});
// => true
```

#### `key`
- 类型：`String`
- 说明：键名

#### `val`
- 类型：`Array | Object | Boolean | Number | String | null`
- 说明：键值

#### `success`
- 类型：`Boolean`
- 说明：设置成功返回 `true`，否则返回 `false`

### `.remove(key): success`
移除某一个存储。
```js
local.remove('user');
// => true
```
#### `key`
- 类型：`String`
- 说明：键名

#### `success`
- 类型：`Boolean`
- 说明：设置成功返回 `true`，否则返回 `false`

### `.clear(): success`
清空所有存储。
```js
local.clear();
// => true
```
#### `success`
- 类型：`Boolean`
- 说明：设置成功返回 `true`，否则返回 `false`

### `.keys(): keys`
返回所有键。

#### `keys`
- 类型：`Array`

### `.size(): size`
返回存储键数量。

#### `size`
- 类型：`Number`



## `.session`
本地时效性存储接口封装。接口与 `local` 一致。








# Dependencies
{{ dependencies }}



