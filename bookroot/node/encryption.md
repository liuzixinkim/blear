# Introduction
{{ introduction }}





# Example
```js
var encryption = require('blear.node.encryption');
```




# Static
## `.md5(source): ret`
md5 加密。

```js
encryption.md5('123');
// => "202cb962ac59075b964b07152d234b70"
```

### `source`
- 类型：`String`
- 说明：原始字符串

### `ret`
- 类型：`String`
- 说明：加密结果


## `.sha1(source, [secret]): ret`
sha1 加密。
```js
encryption.sha1('123');
// => "40bd001563085fc35165329ea1ff5c5ecbdbbeef"

encryption.sha1('123', 'abc');
// => "be9106a650ede01f4a31fde2381d06f5fb73e612"
```

### `source`
- 类型：`String`
- 说明：原始字符串

### `secret`
- 类型：`String`
- 说明：密钥
- 默认：`""`

### `ret`
- 类型：`String`
- 说明：加密结果


## `.etag(file, [callback]): ret`
文件内容的 etag 计算（文件内容的 MD5 计算）。

### `file`
- 类型：`String`
- 说明：文件路径

### `callback`
- 类型：`Function`
- 说明：回调，如果有值则以流的形式进行计算（适用于大文件），如果无值则直接在内存中进行计算（适用于小文件）
- 默认：`null`

### `ret`
- 类型：`String`
- 说明：加密结果



## `.lastModified(file): ret`
文件内容的 lastModified 计算（文件最后修改日期的 MD5 计算）。

### `file`
- 类型：`String`
- 说明：文件路径

### `ret`
- 类型：`String`
- 说明：加密结果



## `.encode(source, secret): ret`
可逆的编码。
```js
encryption.encode('123', 'abc');
// => "a7c64fded7c394f4a1404c528ad3adec"

encryption.decode('a7c64fded7c394f4a1404c528ad3adec', 'abc');
// => "123"
```

### `source`
- 类型：`String`
- 说明：原始字符串

### `secret`
- 类型：`String`
- 说明：密钥
- 默认：`""`

### `ret`
- 类型：`String`
- 说明：编码结果


## `.decode(source, secret): ret`
可逆的解码。

### `source`
- 类型：`String`
- 说明：加密后的内容

### `secret`
- 类型：`String`
- 说明：密钥
- 默认：`""`

### `ret`
- 类型：`String`
- 说明：解码结果







# Dependencies
{{ dependencies }}





# Reference
无。

