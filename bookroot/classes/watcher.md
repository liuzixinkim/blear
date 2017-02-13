# Introduction
{{ introduction }}





# Example
数据监听。

```js
var Watcher = require('blear.classes.watcher');

var data = {a: 1};
var watcher = new Watcher(data);

watcher.watch('a', function(newVal, oldVal, signal) {
    // ....
});
```




# Static
## `.defaults`
### `.defaults.keys`
- 类型：监听的键
- 说明：默认监听所有
- 默认：`null`

### `.defaults.imme`
- 类型：`Boolean`
- 说明：是否立即反馈，`immediately` 的缩写
- 默认：`false`

### `.defaults.deep`
- 类型：`Boolean`
- 说明：是否深度监听，目前未实现
- 默认：`false`


# `new Watcher(data, [options])`
实现一个监听，同一份数据可以被多次监听。





# Prototype
## `#watch(expression, listener, [options]): unwatch`

### `expression`
- 类型：`String | Function`
- 说明：表达式

如：
```js
watcher.watch('a', listener);
watcher.watch('a + b', listener);
watcher.watch(function() {
    return this.a + this.b;
}, listener);
```






# Dependencies
{{ dependencies }}





# Reference
这里写参考内容。

