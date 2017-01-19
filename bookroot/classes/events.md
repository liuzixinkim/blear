# Introduction
{{ introduction }}





# Example
```js
var Events = require('blear.classes.events');

// 用于实例化
var events = new Events();

// 用于继承
var MyClass = Events.extend({
    constructor: function() {
        MyClass.parent(this);
        // ...
    }
});
```

`Events` 模块充当着和 NodeJS 里的 Events 模块一样的功能，
可以派发事件，接受传递事件，实现的是一个观察者模式。



# Prototype
原型属性、方法

## `#emit(event, ...args): result`
发射事件。

```js
events.emit('my-first-event', 1, 2, 3);
events.emit('mySecondEvent', 1);
events.emit('myThirdEvent');
```

如果有某事件被监听了，在发射的时候是同步执行的。
因此，合理的做法是先 `on` 然后再 `emit`。

### `event`
- 类型：`String`
- 说明：事件名称，多个事件名称使用空格分开

### `...args`
- 类型：`*`
- 说明：该事件附加的一些参数

## `#on(event, fn(...args)): Events`
监听事件。

### `event`
- 类型：`String`
- 说明：事件名称，多个事件名称使用空格分开

### `fn(...args)`
- 类型：`Function`
- 说明：回调

### `fn: this`
- 类型：`Events`

### `fn: ...args`
- 类型：`*`
- 说明：参数需要与 `emit` 一致。

### `result`
- 类型：`Boolean`
- 说明：如果某个监听返回 `false`，则为 `false`，否则为 `true`


## `#once(event, fn(...args)): Events`
一次性监听事件，使用方法与 `on` 一致。


## `#un(event, [fn]): Events`
卸载事件监听。
```js
// 卸载 fn1 监听在 myEvent 上的事件
event.un('myEvent', fn1);

// 卸载所有监听在 myEvent 上的事件
event.un('myEvent');
```

### `event`
- 类型：`String`
- 说明：事件名称，多个事件名称使用空格分开

### `fn`
- 类型：`Function`
- 说明：卸载对应的事件，如果为空卸载所有对应的事件
- 默认：`null`

## `#size([event]): size`
获取监听某个事件的长度。
```js
event.on('a', fn1);
event.on('a', fn2);
event.on('b', fn3);

event.size('a');
// => 2

event.size();
// => 3
```

### `event`
- 类型：`String`
- 说明：单个事件名称
- 默认：`null`

### `size`
- 类型：`Number`
- 说明：如果指定了事件名称，则返回对应事件的监听数量，否则返回所有数量


## `#destroy(): undefined`
销毁实例。












# Dependencies
{{ dependencies }}







