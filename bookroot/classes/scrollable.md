# Introduction
{{ introduction }}


# Example
```js
var Scrollable = require('blear.class.scrollable');
```

# `.defaults`
## `.defaults.el`
- 类型：`HTMLElement | String | null`
- 说明：滚动的容器元素
- 默认：`null`

## `.defaults.offsetX`
- 类型：`Number`
- 说明：水平偏移值
- 默认：`20`

## `.defaults.offsetY`
- 类型：`Number`
- 说明：垂直偏移值
- 默认：`20`

# Prototype
原型属性、方法


## `#update(): Scrollable`
更新位置信息

```js
Scrollable.update();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#enable(): Scrollable`
设置滚动期间监听

```js
Scrollable.enable();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#disable(): Scrollable`
设置滚动期间不监听

```js
Scrollable.disable();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#destroy(): undefined`
销毁实例

```js
Scrollable.destroy();
```





# Dependencies
{{ dependencies }}





# More

