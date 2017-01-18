# Introduction
{{ introduction }}





# Example
```js
var json = require('blear.utils.json');
```




# Static
JSON 的安全处理。

## `.safeParse(jsonString): obj`
处理标准 JSON 或类 JSON 为 JS Object。
```js
json.safeParse('{"a":1}');
// => {a: 1}

json.safeParse('{a:1}');
// => {a: 1}

json.safeParse('');
// => null
```

### `jsonString`
- 类型：`Stringify`
- 说明：[标准 JSON](https://zh.wikipedia.org/zh-cn/JSON) 或类 JSON

### `obj`
- 类型：`Object | null`
- 说明：解析后的对象，如果解析失败返回 null，而不会抛错


## `.safeString(obj): json`
将 JS Object 安全转换为 JSON。

### `obj`
- 类型：`Object`

### `json`
- 类型：`String`
- 说明：将 JS Object 转换为 JSON，转换失败后将返回空字符串






# Dependencies
{{ dependencies }}





# Reference
- <https://zh.wikipedia.org/zh-cn/JSON>

