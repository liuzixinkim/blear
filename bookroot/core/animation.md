# Introduction
{{ introduction }}





# Example
```js
var animation = require('blear.core.animation');
```



# Static

## `.animate(el, to, [options], [callback]): undefined`
JS 动画。如果想要高性能 CSS 动画，请使用 [blear.core.transform](/core/transform.md)。

### `el`
- 类型：`HTMLElement`
- 说明：动画元素

### `to`
- 类型：`Object`
- 说明：动画终点，可以使用 `scrollTop`

### `options`
- 类型：`Object`
- 说明：动画配置

### `options.easing`
- 类型：`String | Array`
- 说明：动画缓冲，详细参考 [blear.utils.easing](/utils/easing.md)。
- 默认：`"linear"`

### `options.duration`
- 类型：`Number`
- 说明：动画时间，单位 ms
- 默认：`345`

### `callback`
- 类型：`Function`
- 说明：动画完成回调
- 默认：`null`





# Dependencies
{{ dependencies }}






