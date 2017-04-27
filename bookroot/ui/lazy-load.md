# Introduction
{{ introduction }}





# Example
```js
var LazyLoad = require('blear.ui.lazy-load');

new LazyLoad(options);
```




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：容器
- 默认：`document`

## `.defaults.itemSelector`
- 类型：`String`
- 说明：元素选择器
- 默认：`img,div`

## `.defaults.dataOriginal`
- 类型：`String`
- 说明：原始 data 属性名
- 默认：`original`，即 `data-original` 属性

## `.defaults.offset`
- 类型：`Number`
- 说明：偏移量，单位像素
- 默认：`10`，即 10 像素之前就显示图片

## `.defaults.delay`
- 类型：`Number`
- 说明：中间延迟时间，单位 ms
- 默认：`30`




# `new LazyLoad(options)`
实例化一个懒加载 UI，参数为 `options`，默认值为 `.defaults`。



# Prototype
原型属性、方法

## `#update(): this`
更新容器范围内的懒加载元素信息，请在容器内有新元素新增或删除的时候手动触发。


## `#destroy()`
销毁实例。


# Events
## `view(el)`
元素进入可视范围内触发，事件返回 `false` 则不处理该元素。


## `beforeLoad(el, original)`
元素加载原图之前触发。

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `original`
- 类型：`String`
- 说明：原始地址

## `afterLoad(err, el)`
元素加载原图之后触发。

### `err`
- 类型：`Error | null`
- 说明：错误

### `el`
- 类型：`HTMLElement`
- 说明：元素




# Dependencies
{{ dependencies }}





# Reference
无。

