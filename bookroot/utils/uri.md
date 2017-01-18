# Introduction
{{ introduction }}





# Example
```js
var uri = require('blear.utils.uri');
```





# Static
## `.encode(URIComponent): encodedURI`
与 `encodeURIComponent` 的区别是，`uri.encode` 额外对 `!'()*` 进行了编码，并且不会抛错，
如果出错，则返回空字符串。

```js
uri.encode('!');
// => "%21"
```

### `URIComponent`
- 类型：`String`
- 说明：URI 片段

### `encodedURI`
- 类型：`String`
- 说明：编码后的 URI

## `.decode(URIComponent): decodedURI`
```js
uri.decode('%21');
// => "!"
```

### `URIComponent`
- 类型：`String`
- 说明：URI 片段

### `encodedURI`
- 类型：`String`
- 说明：解码后的 URI





# Dependencies
{{ dependencies }}





# Reference
- encodeURIComponent：<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent>
- rfc3986：<http://tools.ietf.org/html/rfc3986>
