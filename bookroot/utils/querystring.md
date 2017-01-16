# Introduction
{{ introduction }}





# Example
```js
var qs = require('blear.utils.querystring');
```






# Static
静态属性、方法


## `.parse(querystring, [sep], [eq]): query`
解析 url 查询字符串为一个对象。

```js
qs.parse('a=1&b=2&b=3&c=4');
// => {
//    a: "1",
//    b: ["2", "3"]
//    c: "4"
// }
```


### querystring
- 类型：`String`
- 说明：url 查询字符串，`http://example.com?querystring`

### sep
- 类型：`String`
- 说明：查询字符串分隔符
- 默认：`&`

### eq
- 类型：`String`
- 说明：查询字符串相等符
- 默认：`=`

### query
- 类型：`Object`
- 说明：解析结果



## `.stringify(query, sep, eq): querystring`
将一个对象字符串化为一个 url 查询字符串。
```js
qs.stringify({
    a: 1,
    b: [2, 3],
    c: 4
});
// => "a=1&b=2&b=3&c=4"
```
### query
- 类型：`Object`
- 说明：待转换的对象

### sep
- 类型：`String`
- 说明：查询字符串分隔符
- 默认：`&`

### eq
- 类型：`String`
- 说明：查询字符串相等符
- 默认：`=`

### querystring
- 类型：`String`
- 说明：转换结果





# Dependencies
{{ dependencies }}





# More
- <https://en.wikipedia.org/wiki/Query_string>
- <https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/querystring>

