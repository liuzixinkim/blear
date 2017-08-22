# Introduction
{{ introduction }}





# Example
```js
var qiniu = require('blear.node.qiniu');
```




# Static
## `.config(key, val): ret`
配置默认值。默认配置为：
```js
默认配置 = {
    /**
     * @type String
     * @desc 访问令牌
     */
    accessKey: '',

    /**
     * @type String
     * @desc 访问密钥
     */
    secretKey: '',

    /**
     * @type String
     * @desc 访问仓库
     */
    bucket: '',

    /**
     * @type String
     * @desc 绑定域名
     */
    host: '/',

    /**
     * @type String
     * @desc 访问目录
     */
    dirname: '/',

    /**
     * @type String
     * @desc 上传文件
     */
    filename: null,

    /**
     * @type Number
     * @desc 签名有效期，单位毫秒
     */
    expires: 10 * 60 * 1000,

    /**
     * @type String
     * @desc MIME 限制
     */
    mimeLimit: 'image/*',

    /**
     * @type Boolean
     * @desc 是否绝对路径
     * 是：转换后的 url 包含 @ 符号，即 http://qiniu.cdn.com/@/path/to/file.png，
     * 或者两个斜杆表示 http://qiniu.cdn.com//path/to/file.png
     * 否：转换后的 url 不含 @ 符号，即 http://qiniu.cdn.com/path/to/file.png
     */
    absolutely: false
};
```

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


