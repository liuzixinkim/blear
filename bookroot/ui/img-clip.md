# Introduction
{{ introduction }}





# Example
```js
var ImgClip = require('blear.ui.img-clip');

new ImgClip(options);
```




# Static



## `.defaults`
### `.defaults.el`
- 类型：`Element`
- 说明：待裁剪的图片

### `.defaults.auto`
- 类型：`Boolean`
- 说明：是否自动选择最大且居中的选区
- 默认：`true`

### `.defaults.ratio`
- 类型：`Number`
- 说明：裁剪区域宽高比
- 默认：`1`，正方形

### `.defaults.minWidth`
- 类型：`Number`
- 说明：裁剪区域最小宽度
- 默认：`100`

### `.defaults.minHeight`
- 类型：`Number`
- 说明：裁剪区域最小高度
- 默认：`100`

### `.defaults.maxWidth`
- 类型：`Number`
- 说明：裁剪区域最大宽度，0 表示不限制
- 默认：`0`

### `.defaults.maxHeight`
- 类型：`Number`
- 说明：裁剪区域最大高度，0 表示不限制
- 默认：`0`

### `.defaults.minSelectionSize`
- 类型：`Number`
- 说明：最小的选区尺寸，即小于这个尺寸则自动释放
- 默认：`10`



# `new ImgClip(options)`
实例化一个图片裁剪，options 参数为 `.defaults`。





# Prototype
## `#changeImage(url): this`
改变图片地址，修改后会自动建立选区。
### `url`
- 类型：`String`
- 说明：图片地址

## `#getImage(): url`
获取当前正在裁剪的图片地址。
### `url`
- 类型：`String`
- 说明：图片地址

## `#getSelection(): sel`
获取当前正在裁剪的图片地址。
### `sel`
- 类型：`Object`
- 说明：选区描述

### `sel.left`
- 类型：`Number`
- 说明：选区左位移

### `sel.top`
- 类型：`Number`
- 说明：选区上位移

### `sel.width`
- 类型：`Number`
- 说明：选区宽度

### `sel.height`
- 类型：`Number`
- 说明：选区高度

### `sel.srcLeft`
- 类型：`Number`
- 说明：选区映射的图片的左位移

### `sel.srcTop`
- 类型：`Number`
- 说明：选区映射的图片的上位移

### `sel.srcWidth`
- 类型：`Number`
- 说明：选区映射的图片的宽度

### `sel.srcHeight`
- 类型：`Number`
- 说明：选区映射的图片的高度

## `#setSelection(sel): this`
设置选区。
### `sel`
- 类型：`Array`
- 说明：选区的范围

### `sel[0]`
- 类型：`Number`
- 说明：选区左位移

### `sel[1]`
- 类型：`Number`
- 说明：选区上位移

### `sel[2]`
- 类型：`Number`
- 说明：选区宽度

### `sel[3]`
- 类型：`Number`
- 说明：选区高度


## `#release(): this`
释放选区。


## `#reset(): this`
重置为初始状态（释放选区并且将图片设置为空）。


## `#destroy()`
销毁实例。


# Events
## `beforeLoading()`
图片加载之前触发。

## `afterLoading()`
图片加载之后触发。

## `error()`
图片加载失败触发。

## `beforeSelection()`
选区改变之前触发。

## `changeSelection(sel)`
选区改变中触发。

## `afterSelection()`
选区改变之后触发。

## `cancelSelection()`
选区取消之后触发。






# Dependencies
{{ dependencies }}





# Reference
无。

