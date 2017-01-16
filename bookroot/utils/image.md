# Introduction
{{ introduction }}





# Example
```js
var image = require('blear.utils.image');
```



# Static
## `.supportWebp(callback(supportWebp)): undefined`
判断浏览器是否支持 webp，异步。
```js
image.supportWebp(function(support) {
    console.log(support ? '支持' : '不支持', 'webp')
});
```

### `callback`
- 类型：`Function`
- 说明：回调

#### `callback: this`
- 类型：`this`
- 说明：null

#### `callback: supportWebp`
- 类型：`Boolean`
- 说明：支持为 `true`，否则为 `false`



## `.qiniuWebp(url): webpURL`
七牛云存储的 webp 图片处理，使用的是 [imageView2](http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html)。

```js
image.qiniuWebp('http:/a.b/c.png');
// => http://a.b/c.png?imageView2/2/format/webp
```

### `url`
- 类型：`String`
- 说明：七牛云存储图片 url

### `webpURL`
- 类型：`String`
- 说明：处理过后的 url





# Dependencies
{{ dependencies }}





# More
- <http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html>

