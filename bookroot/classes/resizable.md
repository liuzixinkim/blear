# Introduction
{{ introduction }}


# Example
```js
var Resizable = require('blear.class.resizable');

var resizeable = new Resizable({
    el: '#demo'
});
```

# Static
## `.defaults`
### `.defaults.el`
- 类型：`HTMLElement | String | null`
- 说明：待改变尺寸的元素
- 默认：`null`

### `.defaults.minWidth`
- 类型：`Number`
- 说明：最小宽度
- 默认：`0`

### `.defaults.minHeight`
- 类型：`Number`
- 说明：最小高度
- 默认：`0`

### `.defaults.maxWidth`
- 类型：`Number`
- 说明：最大宽度
- 默认：`0`

### `.defaults.maxHeight`
- 类型：`Number`
- 说明：最大高度
- 默认：`0`

### `.defaults.ratio`
- 类型：`Number`
- 说明：宽高比
- 默认：`0`

### `.defaults.resizable`
- 类型：`Boolean`
- 说明：是否可改变尺寸，可以交给实例自己处理
- 默认：`true`

### `.defaults.dragHandleSize`
- 类型：`Number`
- 说明：拖拽手柄尺寸
- 默认：`10`



# Prototype
原型属性、方法


## `#getSize(): size`
获取当前尺寸

### `size`
- 类型：`Object`
- 说明：宽高尺寸

### `size.width`
- 类型：`Number`
- 说明：当前宽，单位 px

### `size.height`
- 类型：`Number`
- 说明：当前高，单位 px


## `#setSize(width, [height]): resizable`
设置尺寸

### `width`
- 类型：`Number`
- 说明：宽度，单位 px

### `height`
- 类型：`Number`
- 说明：高度，单位 px

### `resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#setMinSize(): resizable`
设置最小尺寸

### `resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#getMinSize(): minSize`
获取最小尺寸

### `minSize`
- 类型：`Object`
- 说明：宽高尺寸

### `minSize.width`
- 类型：`Number`
- 说明：最小宽，单位 px

### `minSize.height`
- 类型：`Number`
- 说明：最小高，单位 px

## `#setMaxSize(): Resizable`
设置最大尺寸

### `Resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#getMaxSize(): maxSize`
获取最大尺寸

### `maxSize`
- 类型：`Object`
- 说明：宽高尺寸

### `maxSize.width`
- 类型：`Number`
- 说明：最大宽，单位 px

### `maxSize.height`
- 类型：`Number`
- 说明：最大高，单位 px

## `#setOptions(options): Resizable`
设置配置项

### `options`
- 类型：`*`
- 说明：设置项

### `resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#destroy(): undefined`
销毁实例



# Dependencies
{{ dependencies }}





