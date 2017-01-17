# Introduction
{{ introduction }}





# Example
```js
var event = require('blear.core.event');
```





# Static

## `.on(el, eventType, [sel], listener): undefined`
冒泡模式的监听事件，支持代理。

```js
// 监听 div 的 click 事件
event.on(divEl, 'click', callback);

// 代理监听 div 下的 .btn 的 click 事件
event.on(divEl, 'click', '.btn', callback);
```

### `el`
- 类型：`HTMLElement`

### `eventType`
- 类型：`String`
- 说明：多个事件类型用空格分开

### `sel`
- 类型：`String | HTMLElement`
- 说明：委托代理的元素或选择器

### `listener`
- 类型：`Function`



# Dependencies
{{ dependencies }}





# More
- DOM 事件详解：<http://yujiangshui.com/javascript-event/>

