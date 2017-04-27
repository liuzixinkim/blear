# Introduction
{{ introduction }}





# Example
```js
var Popover = require('blear.ui.popover');

var popover = new Popover();
```

![](https://ww1.sinaimg.cn/large/006tNbRwgy1ff11mpvebvj30h80bcglw.jpg)




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：将要箭头弹出的元素，可以为空

## `.defaults.arrowPosition`
- 类型：`String`
- 说明：弹出框箭头的位置，可选“bottom、right、bottom、left、auto”
- 默认：`"auto"`

## `.defaults.arrowSize`
- 类型：`Number`
- 说明：弹出框箭头尺寸，大约 10。
- 默认：`10`

## `.defaults.align`
- 类型：`String`
- 说明：对齐方式，可选 `center`、`side`
- 默认：`"center"`

```text
center:
       [=====]
[=========^=========]

side:
       [=====]
      [===^===============]
```

## `.defaults.offsetLeft`
- 类型：`Number`
- 说明：左偏移
- 默认：`0`

## `.defaults.offsetTop`
- 类型：`Number`
- 说明：上偏移
- 默认：`0`

## `.defaults.width`
- 类型：`Number`
- 说明：弹出泡宽度
- 默认：`"auto"`

## `.defaults.height`
- 类型：`Number`
- 说明：弹出泡高度
- 默认：`"auto"`

## `.defaults.addClass`
- 类型：`String`
- 说明：附加的 class
- 默认：`""`

## `.defaults.openAnimation`
- 类型：`Function`
- 说明：打开动画
- 默认：
```js
function openAnimation(to, done) {
    var el = this.getPopoverEl();
    attribute.style(el, to);
    done();
}
```

## `.defaults.closeAnimation`
- 类型：`Function`
- 说明：关闭动画
- 默认：
```js
function closeAnimation(to, done) {
    var el = this.getPopoverEl();
    attribute.style(el, to);
    done();
}
```






# `new Popover(options)`
实例化一个弹出泡。

# Prototype
## `#getPopoverEl(): el`
获取弹出泡元素。

### `el`
- 类型：`HTMLDIVElement`
- 说明：弹出泡元素

## `#getContentEl(): el`
获取弹出泡的内容元素。

### `el`
- 类型：`HTMLDIVElement`
- 说明：弹出泡的内容元素

## `#setHTML(html): this`
设置内容。

### `html`
- 类型：`Element | String`
- 说明：可以为元素或者 html 字符串。

## `#open(): this`
打开弹出泡。

## `#close(): this`
关闭弹出泡。

## `#isVisible(): visible`
当前弹出泡是否可见。

## `#destroy()`
销毁实例。




# Events
## `beforeOpen(to)`
弹出泡打开之前触发，返回 false 则取消打开操作。

### `to`
- 类型：`Object`
- 说明：目标样式，可修改

## `afterOpen(to)`
弹出泡打开之后触发。

## `beforeClose(to)`
弹出泡关闭之前触发，返回 false 则取消关闭操作。

### `to`
- 类型：`Object`
- 说明：目标样式，可修改

## `afterClose(to)`
弹出泡关闭之后触发。







# Dependencies
{{ dependencies }}





# Reference
无。

