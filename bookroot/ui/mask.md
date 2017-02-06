# Introduction
{{ introduction }}





# Example
```js
var Mask = require('blear.ui.mask');
```

# Static
静态属性、方法

## `.defaults`
### `.defaults.bgColor`
- 类型：`String`
- 说明：背景颜色
- 默认：`black`

### `.defaults.opacity`
- 类型：`Number`
- 说明：透明度
- 默认：`0.5`

### `.defaults.topRate`
- 类型：`Number`
- 说明：头部占比
- 默认：`0`

### `.defaults.leftRate`
- 类型：`Number`
- 说明：左侧占比
- 默认：`0`

### `.defaults.top`
- 类型：`Number`
- 说明：距离头部距离
- 默认：`0`

### `.defaults.left`
- 类型：`Number`
- 说明：距离左侧距离
- 默认：`0`

### `.defaults.bottom`
- 类型：`Number`
- 说明：距离底部距离
- 默认：`0`

### `.defaults.right`
- 类型：`Number`
- 说明：距离右侧位置
- 默认：`0`

### `.defaults.width`
- 类型：`Number`
- 说明：遮罩层宽度
- 默认：`100%`

### `.defaults.height`
- 类型：`Number`
- 说明：遮罩层高度
- 默认：`100%`

### `.defaults.openAnimation(to, done)`
- 类型：`Null | Function`
- 说明：打开遮罩的动画
- 默认：`透明度为0、缩放70%至透明度为1、缩放100&动画效果`

### `.defaults.openAnimation：to
- 类型：`Object `
- 说明：设置动画

### `.defaults.openAnimation：done
- 类型：`Function `
- 说明：动画执行完成回调

### `.defaults.closeAnimation(to, done)`
- 类型：`Null | Function`
- 说明：关闭遮罩的动画
- 默认：`透明度为1至透明度为0`

### `.defaults.openAnimation：to
- 类型：`Object `
- 说明：设置动画

### `.defaults.openAnimation：done
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



## `#destroy(): undefined`
销毁实例

# Dependencies
{{ dependencies }}

