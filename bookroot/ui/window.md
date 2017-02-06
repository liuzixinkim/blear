# Introduction
{{ introduction }}





# Example
```js
var Window = require('blear.ui.window');
```




# Static
静态属性、方法

## `.defaults`
### `.defaults.position`
- 类型：`String`
- 说明：定位
- 默认：`fixed`

### `.defaults.width`
- 类型：`Number`
- 说明：宽度
- 默认：`600`

### `.defaults.height`
- 类型：`Number| String`
- 说明：高度
- 默认：`auto

### `.defaults.minWidth`
- 类型：`Number| String`
- 说明：最小宽度
- 默认：`none`

### `.defaults.minHeight`
- 类型：`Number| String`
- 说明：最小高度
- 默认：`none`

### `.defaults.maxWidth`
- 类型：`Number| String`
- 说明：最大宽度
- 默认：`none`

### `.defaults.maxWidth`
- 类型：`Number| String`
- 说明：最大高度
- 默认：`none`

### `.defaults.topRate`
- 类型：`Number`
- 说明：上边距占比
- 默认：`1 / 2`

### `.defaults.leftRate`
- 类型：`Number`
- 说明：左边距占比
- 默认：`1 / 2`

### `.defaults.addClass`
- 类型：`String`
- 说明：添加的类
- 默认：`''`

### `.defaults.animationOptions：object`
- 类型：`Object`
- 说明：动画参数
#### `object.duration`
- 类型：`Number`
- 说明：动画时间
- 默认：`456`
#### `object.easing`
- 类型：`String`
- 说明：动画缓冲
- 默认：`linear`

### `.defaults.openAnimation`
- 类型：`Null | Function`
- 说明：打开窗口的动画
- 默认：`Null`

### `.defaults.resizeAnimation`
- 类型：`Null | Function`
- 说明：窗口尺寸改变的动画
- 默认：`Null`

### `.defaults.closeAnimation`
- 类型：`Null | Function`
- 说明：关闭窗口的动画
- 默认：`Null`

### `.defaults.render(windowEl, options)`
- 类型：`Null | Function`
- 说明：自定义渲染器

#### `windowEl`
- 类型：`Element`
- 说明：window元素

#### `options`
- 类型：`Object`
- 说明：渲染配置项


# Prototype
原型属性、方法

## `#getSize(): object`
获得窗口的尺寸

### `object.width`
- 类型：`Number`
- 说明：窗口宽度

### `object.height`
- 类型：`Number`
- 说明：窗口高度

### `object.top`
- 类型：`Number`
- 说明：窗口距离顶部位置

### `object.left`
- 类型：`Number`
- 说明：窗口距离左侧位置

## `#zIndex(zIndex): window`
设置三维高度

### `zIndex`
- 类型：`Number`
- 说明：三维高度

### `window`
- 类型：`Window`
- 说明：支持链式调用

## `#open(callback): window`
打开窗口

### `callback`
- 类型：`Function`
- 说明：回调

### `window`
- 类型：`Window`
- 说明：支持链式调用

## `#update(callback): window`
更新 window 信息

### `callback`
- 类型：`Function`
- 说明：回调

### `window`
- 类型：`Window`
- 说明：支持链式调用

## `#resize(pos, callback): window`
调整位置，默认居中

### `pos`
- 类型：`Object`
- 说明：位置
#### `pos.width`
- 类型：`Number`
- 说明：宽度
#### `pos.height`
- 类型：`Number`
- 说明：高度
#### `pos.top`
- 类型：`Number`
- 说明：距离上方位置
#### `pos.left`
- 类型：`Number`
- 说明：距离左侧位置

### `callback`
- 类型：`Function`
- 说明：回调

### `window`
- 类型：`Window`
- 说明：支持链式调用

## `#close(callback): window`
关闭窗口

### `callback`
- 类型：`Function`
- 说明：回调

### `window`
- 类型：`Window`
- 说明：支持链式调用

## `#getWindowEl(): element`
获取 window element

### `element`
- 类型：`HTMLDivElement`
- 说明：window元素

## `#getContainerEl(): element`
获取 container element

### `element`
- 类型：`HTMLDivElement`
- 说明：container元素

## `#getOptions([key]): *`
获取配置，不同继承者的参数不同，需要自行实现

### `key`
- 类型：`*`
- 说明：配置参数

### `*`
- 类型：`*`
- 说明：任意值

## `#setOptions([key]): *`
设置配置，不同继承者的参数不同，需要自行实现

### `key`
- 类型：`*`
- 说明：设置配置参数名

### `val`
- 类型：`*`
- 说明：设置配置值

### `*`
- 类型：`*`
- 说明：任意值

## `#setHTML(html): element`
设置 HTML

### `html`
- 类型：`String | Node`
- 说明：html值

### `element`
- 类型：`HTMLElement`
- 说明：设置配置值

## `#destroy(): undefined`
销毁实例

# Dependencies
{{ dependencies }}

