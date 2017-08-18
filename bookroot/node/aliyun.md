# Introduction
{{ introduction }}





# Example
```js
var aliyun = require('blear.node.aliyun');
```




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

### `.defaults.accessKeyId`
- 类型：`String`
- 说明：访问令牌
- 默认：`""`

### `.defaults.accessKeySecret`
- 类型：`String`
- 说明：访问密钥
- 默认：`""`

### `.defaults.bucket`
- 类型：`String`
- 说明：仓库
- 默认：`""`

### `.defaults.endPoint`
- 类型：`String`
- 说明：上传地址
- 默认：`"oss-cn-hangzhou.aliyuncs.com"`

### `.defaults.cacheControl`
- 类型：`String`
- 说明：访问控制
- 默认：`"public"`

### `.defaults.expires`
- 类型：`Number`
- 说明：静态资源有效期，单位 秒
- 默认：`31536000`（1年）

### `.defaults.origin`
- 类型：`String`
- 说明：绑定的域（包含协议、域名和端口）
- 默认：`""`

### `.defaults.dirname`
- 类型：`String`
- 说明：保存目录
- 默认：`"/"`

### `.defaults.method`
- 类型：`String`
- 说明：提交方式
- 默认：`"put"`

### `.defaults.headers`
- 类型：`Object`
- 说明：自定义头
- 默认：`{}`


## `.config(key, [val]): ret`
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


## `.aliossSignature(configs): ret`
阿里 OSS 签名。

### `configs`
同 `.defaults`。

### `ret`
- 类型：`Object`
- 说明：签名结果

#### `ret.requestURL`
- 类型：`String`
- 说明：请求地址

#### `ret.requestHeaders`
- 类型：`String`
- 说明：请求头

#### `ret.objectURL`
- 类型：`String`
- 说明：对象地址（已经绑定了地址）




# Dependencies
{{ dependencies }}





# Reference
无。

