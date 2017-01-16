# Introduction
{{ introduction }}





# Example
```js
var compatibe = require('blear.utils.compatible');
```


# Static
## `.css(standardKey, [standardVal]): compatibledCSS`
获取有浏览器前缀的CSS名称。
```js
compatible.css('border-start');
// => {key: "-webkit-border-start"}
```
### `standardKey`
- 类型：`String`
- 说明：标准的 CSS 键

### `standardVal`
- 类型：`String`
- 说明：标准的 CSS 值
- 默认：自动推断

### `compatibledCSS`
- 类型：`{{key: String, val: String}}`
- 说明：返回一个对象

#### `compatibledCSS.key`
- 类型：`String`
- 说明：浏览器支持的 CSS 键，可能含有私有前缀，如果浏览器不支持，则为空字符串

#### `compatibledCSS.val`
- 类型：`String`
- 说明：浏览器支持的 CSS 值，可能含有私有前缀


## `.event(standard, [parent=document]): eventType`
获取有浏览器前缀的事件名称。
```js
compatible.event('transitionend', window);
// => "onwebkittransitionend"
```

### `standard`
- 类型：`String`
- 说明：标准事件名称

### `parent`
- 类型：`*`
- 说明：事件触发父级
- 默认：`document`

### `eventType`
- 类型：`String | undefined`
- 说明：浏览器支持的事件名称，可能包含私有前缀，如果浏览器不支持，则返回 `undefined`





## `.js(standard, parent): compatibledProperty`
获取有浏览器前缀的方法、属性名称。
```js
compatible.js('audioContext', window);
// => "webkitAudioContext"
```

### `standard`
- 类型：`String`
- 说明：标准方法、属性名称

### `parent`
- 类型：`*`
- 说明：所在的父级
- 默认：`window`

### `compatibledProperty`
- 类型：`String | undefined`
- 说明：浏览器支持的方法、属性名称，可能包含私有前缀，如果浏览器不支持，则返回 `undefined`






# Dependencies
{{ dependencies }}




