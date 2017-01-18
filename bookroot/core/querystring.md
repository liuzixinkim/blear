# Introduction
{{ introduction }}



# Example
```js
var querystring = require('blear.core.querystring');
```

# Static
静态属性、方法


## `.toString(): string`
获取当前的 querystring

### `string`
- 类型：`String`
- 说明：返回去除'?'后的字符串

## `.parse(): string`
解析 querystring

### `string`
- 类型：`String`
- 说明：返回解析后的字符串

## `.get(key): val`
根据键名获取 query

### `key`
- 类型：`String`
- 说明：查询键名

### `val`
- 类型：`String | Array | Object`
- 说明：返回根据键名查询的值

## `.set(key, val): string`
根据键名获取 query

```js
querystring.set('id', 12345);
// ==> 'id=12345'
```

### `key`
- 类型：`String`
- 说明：查询键名

### `val`
- 类型：`String`
- 说明：查询键值

### `string`
- 类型：`String`
- 说明：返回新的键值字符串

## `.remove (key): string`
根据键值删除

### `key`
- 类型：`String`
- 说明：需要删除的键名

### `string`
- 类型：`String`
- 说明：返回删除后的query






# Dependencies
{{ dependencies }}


