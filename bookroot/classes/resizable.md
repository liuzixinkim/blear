# Introduction
{{ introduction }}


# Example
```js
var Resizable = require('blear.class.resizable');
```

# `.defaults`
## `.defaults.el`
- 类型：`HTMLElement | String | null`
- 说明：待改变尺寸的元素
- 默认：`null`

## `.defaults.minWidth`
- 类型：`Number`
- 说明：最小宽度
- 默认：`0`

## `.defaults.minHeight`
- 类型：`Number`
- 说明：最小高度
- 默认：`0`

## `.defaults.maxWidth`
- 类型：`Number`
- 说明：最大宽度
- 默认：`0`

## `.defaults.maxHeight`
- 类型：`Number`
- 说明：最大高度
- 默认：`0`

## `.defaults.ratio`
- 类型：`Number`
- 说明：宽高比
- 默认：`0`

## `.defaults.resizable`
- 类型：`Boolean`
- 说明：是否可改变尺寸，可以交给实例自己处理
- 默认：`true`

## `.defaults.dragHandleSize`
- 类型：`Number`
- 说明：拖拽手柄尺寸
- 默认：`10`

# Prototype
原型属性、方法


## `#getSize(): object`
获取当前尺寸

### `object`
- 类型：`Object`
- 说明：{width: Number, height: Number}，返回宽高尺寸

## `#setSize(width, [height]): Resizable`
设置尺寸

### `width`
- 类型：`Number`
- 说明：宽度

### `height`
- 类型：`Number`
- 说明：高度

### `Resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#setMinSize(): Resizable`
设置最小尺寸

### `Resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#getMinSize(): object`
获取最小尺寸

### `object`
- 类型：`Object`
- 说明：{width: Number, height: Number}，返回宽高尺寸

## `#setMaxSize(): Resizable`
设置最大尺寸

### `Resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#getMaxSize(): object`
获取最大尺寸

### `object`
- 类型：`Object`
- 说明：{width: Number, height: Number}，返回宽高尺寸

## `#setOptions(options): Resizable`
设置配置项

### `options`
- 类型：`*`
- 说明：设置项

### `Resizable`
- 类型：`Resizable`
- 说明：支持链式调用

## `#destroy(): undefined`
销毁实例



# Dependencies
{{ dependencies }}





# More

