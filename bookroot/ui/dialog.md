# Introduction
{{ introduction }}





# Example
```js
var Dialog = require('blear.ui.dialog');
```

# Static
静态属性、方法

## `.defaults`
### `.defaults.el`
- 类型：`string | HTMLElement | null`
- 说明：元素
- 默认：`null`

### `.defaults.template`
- 类型：`String | null`
- 说明：内容模板
- 默认：`null`

### `.defaults.modal`
- 类型：`Boolean`
- 说明：是否为模态
- 默认：`true`

### `.defaults.headable`
- 类型：`Boolean`
- 说明：是否允许显示 header 部分
- 默认：`true`

### `.defaults.closeable`
- 类型：`Boolean`
- 说明：是否允许显示关闭按钮部分
- 默认：`true`

### `.defaults.maskHit`
- 类型：`Boolean`
- 说明：点击遮罩是否可以关闭对话框，如果是 modal 的话
- 默认：`false`

### `.defaults.addClass`
- 类型：`String`
- 说明：添加的类
- 默认：`true`

### `.defaults.title`
- 类型：`String`
- 说明：标题
- 默认：`untitle`

### `.defaults.buttons`
- 类型：`Array`
- 说明：按钮 `<{{text:String,type:String,className:String}}>`
- 默认：`[]`

### `.defaults.openAnimation(to, done)`
- 类型：`Null | Function`
- 说明：打开窗口的动画
- 默认：`透明度为0、缩放70%至透明度为1、缩放100&动画效果`

### `.defaults.openAnimation：to`
- 类型：`Object `
- 说明：设置动画

### `.defaults.openAnimation：done`
- 类型：`Function `
- 说明：动画执行完成回调

### `.defaults.resizeAnimation(to, done)`
- 类型：`Null | Function`
- 说明：窗口尺寸改变的动画
- 默认：`透明度为0、缩放70%至透明度为1、缩放100&动画效果`

### `.defaults.openAnimation：to`
- 类型：`Object `
- 说明：设置动画

### `.defaults.openAnimation：done`
- 类型：`Function `
- 说明：动画执行完成回调

### `.defaults.closeAnimation(to, done)`
- 类型：`Null | Function`
- 说明：关闭窗口的动画
- 默认：`透明度为1至透明度为0`

### `.defaults.openAnimation：to`
- 类型：`Object `
- 说明：设置动画

### `.defaults.openAnimation：done`
- 类型：`Function `
- 说明：动画执行完成回调


# Prototype
原型属性、方法

## `#getOptions(key): *`
获取配置

### `key`
- 类型：`String`
- 说明：键

### `*`
- 类型：`*`
- 说明：任意值


## `#setOptions(key, val): *`
设置配置

### `key`
- 类型：`String`
- 说明：键

### `val`
- 类型：`String`
- 说明：值

### `*`
- 类型：`*`
- 说明：任意值


## `#setTitle(title): dialog`
设置 dialog 标题

### `title`
- 类型：`String`
- 说明：标题

### `dialog`
- 类型：`Dialog`
- 说明：支持链式调用

## `#setHTML(html): element`
设置 HTML

### `html`
- 类型：`String | Node`
- 说明：标题

### `element`
- 类型：`HTMLElement`
- 说明：html元素

## `#getContainerEl(): element`
获取容器元素

### `element`
- 类型：`HTMLElement`
- 说明：html元素

## `#destroy(): undefined`
销毁实例


# Dependencies
{{ dependencies }}

