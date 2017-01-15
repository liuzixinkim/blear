# Introduction
{{ introduction }}





# Example
```js
var image = require('blear.utils.image');
```



# Static
## supportWebp
判断浏览器是否支持 webp，异步。
```js
image.supportWebp(callback(supportWebp));
```

### callback
- 类型：`Function`
- 说明：回调

#### this
- 类型：`this`
- 说明：null

#### supportWebp
- 类型：`Boolean`
- 说明：支持为 `true`，否则为 `false`



## qiniuWebp
七牛云存储的 webp 图片处理，使用的是 [imageView2](http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html)。

```js
image.qiniuWebp(url);

image.qiniuWebp('http:/a.b/c.png');
// => http://a.b/c.png?imageView2/2/format/webp
```

### url
- 类型：`String`
- 说明：七牛云存储图片 url

### 返回值
- 类型：`String`
- 说明：处理过后的 url





# Dependencies
{{ dependencies }}





# More
- <http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html>

