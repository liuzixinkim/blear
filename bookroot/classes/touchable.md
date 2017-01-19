# Introduction
{{ introduction }}


# Example
```js
var Touchable = require('blear.class.touchable');
```

# `.defaults`
## `.defaults.el`
- 类型：`HTMLElement | String | null`
- 说明：滑动的元素
- 默认：`null`

## `.defaults.tapMaxDistance`
- 类型：`Number`
- 说明：tap 事件移动距离
- 默认：`10`

## `.defaults.tapIntervalTime`
- 类型：`Number`
- 说明：点击事件时间间隔
- 默认：`250`

## `.defaults.swipeMinDistance`
- 类型：`Number`
- 说明：滑动事件移动距离
- 默认：`60`

## `.defaults.preventDefault`
- 类型：`Boolean`
- 说明：是否取消默认
- 默认：`true`

# Events

## `dragStart(meta)`
当手指触摸屏幕时候触发

### `meta`
- 类型：`Object`
- 说明：当前事件返回的对象集合

## `dragMove(meta)`
当手指在屏幕上滑动的时候连续地触发

### `meta`
- 类型：`Object`
- 说明：当前事件返回的对象集合

## `dragEnd(meta)`
当手指从屏幕上离开的时候触发

### `meta`
- 类型：`Object`
- 说明：当前事件返回的对象集合

# Prototype
原型属性、方法

## `#destroy(): undefined`
销毁实例

```js
Scrollable.destroy();
```






# Dependencies
{{ dependencies }}





# More

