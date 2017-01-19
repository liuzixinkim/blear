# Introduction
{{ introduction }}


# Example
```js
var Scrollable = require('blear.class.scrollable');

var scrollable = new Scrollable();
```

# Static
## `.defaults`
### `.defaults.el`
- 类型：`HTMLElement | String | null`
- 说明：滚动的容器元素
- 默认：`null`

### `.defaults.offsetX`
- 类型：`Number`
- 说明：水平偏移值
- 默认：`20`

### `.defaults.offsetY`
- 类型：`Number`
- 说明：垂直偏移值
- 默认：`20`


# `new Scrollable(options)`
实例化一个可滚动区域。`options` 的默认值为 `defaults`。


# Prototype
原型属性、方法


## `#update(): Scrollable`
更新位置信息

```js
scrollable.update();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#enable(): Scrollable`
设置滚动期间监听

```js
scrollable.enable();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#disable(): Scrollable`
设置滚动期间不监听

```js
scrollable.disable();
```

### `Scrollable`
- 类型：`Scrollable`
- 说明：支持链式调用


## `#destroy(): undefined`
销毁实例

```js
scrollable.destroy();
```


# Events
- 所有的事件都兼容手机，在手机上监听 `touch` 实现。
- 滚动方向参考滚动的方向。即向下滚动，滚动条向下走，但内容却向上走。

## `scrollTop(meta)`
滚动到顶部触发。

### `meta`
以下 `meta` 的参数都一致。

### `meta.scrollLeft`
- 类型：`Number`
- 说明：滚动左距离

### `meta.scrollTop`
- 类型：`Number`
- 说明：滚动上距离

### `meta.maxScrollLeft`
- 类型：`Number`
- 说明：最大滚动左距离

### `meta.maxScrollTop`
- 类型：`Number`
- 说明：最大滚动上距离


## `scrollBottom(meta)`
滚动到底部触发。

## `scrollLeft(meta)`
滚动到左边界触发。

## `scrollRight(meta)`
滚动到右边界触发。

## `scrollUp(meta)`
向上滚动触发。

## `scrollDown(meta)`
向下滚动触发。

## `scrollPush(meta)`
向右滚动触发。

## `scrollPull(meta)`
向左滚动触发。

## `scroll(meta)`
滚动过程中触发。




# Dependencies
{{ dependencies }}


