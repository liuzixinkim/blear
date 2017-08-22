# Introduction
{{ introduction }}





# Example
```js
var qiniu = require('blear.node.qiniu');
```




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

### `.defaults.accessKey`
- 类型：`String`
- 说明：访问令牌
- 默认：`""`

### `.defaults.secretKey`
- 类型：`String`
- 说明：访问密钥
- 默认：`""`

### `.defaults.bucket`
- 类型：`String`
- 说明：访问仓库
- 默认：`""`

### `.defaults.host`
- 类型：`String`
- 说明：绑定域名
- 默认：`"/"`

### `.defaults.dirname`
- 类型：`String`
- 说明：访问目录
- 默认：`"/"`

### `.defaults.filename`
- 类型：`String`
- 说明：上传文件
- 默认：`"/"`

### `.defaults.expires`
- 类型：`Number`
- 说明：签名有效期（单位：毫秒）
- 默认：`10 * 60 * 1000`（10分钟）

### `.defaults.mimeLimit`
- 类型：`String`
- 说明：MIME 限制
- 默认：`"image/*"`

### `.defaults.absolutely`
- 类型：`String`
- 说明：是否绝对路径，是：转换后的 url 包含 @ 符号，即 http://qiniu.cdn.com/@/path/to/file.png，或者两个斜杆表示 http://qiniu.cdn.com//path/to/file.png，否：转换后的 url 不含 @ 符号，即 http://qiniu.cdn.com/path/to/file.png
- 默认：`"image/*"`


## `.config(key, val): ret`
配置默认值。

### `key`
- 类型：`String`
- 说明：键名

### `val`
- 类型：`String`
- 说明：键值，如果有值，则为设置默认值

### `ret`
- 类型：`String`
- 说明：键值，返回 `key` 对应的默认配置

## `.signature(configs): ret`
上传文件签名。

### `configs`
- 类型：`Object`
- 说明：配置项，默认为默认值


### `ret`
- 类型：`Object`
- 说明：签名结果

#### `ret.key`
- 类型：`String`
- 说明：key，上传字段

#### `ret.token`
- 类型：`String`
- 说明：令牌，上传字段

#### `ret.url`
- 类型：`String`
- 说明：该资源的 URL






# Dependencies
{{ dependencies }}





# Reference
- [七牛文件表单上传文档](https://developer.qiniu.com/kodo/manual/1272/form-upload)
- [七牛文件上传接口文档](https://developer.qiniu.com/kodo/api/1312/upload)


