# Introduction
{{ introduction }}


# Example
```js
var canvasContent = require('blear.utils.canvas-content');
```


# Static
## toBase64
将画布内容转换为 base64。
```js
canvasContent.toBase64(canvasEl, options);
```

### canvasEl
- 类型：`HTMLCanvasElement`
- 说明：画布节点

### options
- 类型：`Object`
- 说明：配置

#### options.type
- 类型：`String`
- 说明：文件类型，支持的有 `image/jpg`、`image/png`
- 默认：`image/png`

#### options.quality
- 类型：`Number`
- 说明：质量比例
- 默认：`1`

### 返回值
- 类型：`String`
- 说明：base64 字符串




## toBlob
将画布内容转换为 blob（binary large object），这是一个异步过程。
```js
canvasContent.toBlob(canvasEl, options, callback(blob));
```

### canvasEl
- 类型：`HTMLCanvasElement`
- 说明：画布节点

### options
- 类型：`Object`
- 说明：配置

#### options.type
- 类型：`String`
- 说明：文件类型，支持的有 `image/jpg`、`image/png`
- 默认：`image/png`

#### options.quality
- 类型：`Number`
- 说明：质量比例
- 默认：`1`

### callback

#### this
- 类型：`this`
- 说明：指向 `canvasEl`

#### blob
- 类型：`Blob`
- 说明：转换后的 blob



## saveAs
将画布内容保存为本地文件。
```js
canvasContent.saveAs(canvasEl, name, options);
```

### canvasEl
- 类型：`HTMLCanvasElement`
- 说明：画布节点

### name
- 类型：`String`
- 说明：待保存的文件名

### options
- 类型：`Object`
- 说明：配置

#### options.type
- 类型：`String`
- 说明：文件类型，支持的有 `image/jpg`、`image/png`
- 默认：`image/png`

#### options.quality
- 类型：`Number`
- 说明：质量比例
- 默认：`1`



## supportToBlob
是否支持将画布内容转换为 blob。
```js
canvasContent.supportToBlob;
// => true or false
```

- 类型：`Boolean`
- 说明：判断当前浏览器是否支持 Blob




# Dependencies
{{ dependencies }}


# More
- <https://developer.mozilla.org/zh-CN/docs/Web/API/Blob>
- <https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding>
