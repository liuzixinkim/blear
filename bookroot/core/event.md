# Introduction
{{ introduction }}





# Example
```js
var event = require('blear.core.event');
```





# Static

## `.on(el, eventType, [sel], listener): undefined`
冒泡模式的监听事件，支持代理。
[你需要知道哪些事件不能代理监听的](https://en.wikipedia.org/wiki/DOM_events#Events)。

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



## `.once(el, eventType, [sel], listener): undefined`
冒泡模式的监听事件，支持代理。
**只监听一次，触发后立即取消监听**。
[你需要知道哪些事件不能代理监听的](https://en.wikipedia.org/wiki/DOM_events#Events)。

```js
// 监听 div 的 click 事件
event.once(divEl, 'click', callback);

// 代理监听 div 下的 .btn 的 click 事件
event.once(divEl, 'click', '.btn', callback);
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



## `.un(el, eventType, listener): undefined`
取消事件监听。

```js
// 取消监听 div 的所有事件（必须由 event 监听的事件）
event.un(divEl);

// 取消监听 div 的所有 click 事件（必须由 event 监听的事件）
event.un(divEl, 'click');

// 取消监听 div 的一个 click 事件
event.un(divEl, 'click', callback);
```

### `el`
- 类型：`HTMLElement`

### `eventType`
- 类型：`String`
- 说明：多个事件类型用空格分开，如果为空，则取消所有事件
- 默认：`null`

### `listener`
- 类型：`Function`
- 说明：如果为空，则取消所有 `eventType` 事件
- 默认：`null`



## `.length(el, eventType): length`
获取 DOM 上绑定事件的数量。

### `el`
- 类型：`HTMLElement`

### `eventType`
- 类型：`String`
- 说明：只支持一个事件类型，如果为空，则返回该元素上所有事件数量
- 默认：`null`

### `length`
- 类型：`Number`



## `.create(eventType, [properties]): event`
创建一个自定义事件。

```js
// 创建一个单击事件
var clickEv = event.create('click');

// 创建一个我的单击事件
var myClickEv = event.create('my-click');
```

### `eventType`
- 类型：`String`
- 说明：一个事件类型

### `properties`
- 类型：`Object`
- 说明：事件描述

### `event`
- 类型：`Event`
- 说明：返回一个自定义事件



## `.emit(el, ev): undefined`
触发一个事件，遵循 DOM 事件的传播规则。

```js
// 触发一个单击事件
event.emit(btnEl, clickEv);

// 触发一个我的单击事件
event.emit(btnEl, myClickEv);
```

### `el`
- 类型：`HTMLElement`

### `ev`
- 类型：`Event`



# Dependencies
{{ dependencies }}





# More
- DOM 事件详解：<http://yujiangshui.com/javascript-event/>
- DOM 事件维基百科：<https://en.wikipedia.org/wiki/DOM_events#Events>
