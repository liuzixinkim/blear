# Introduction
{{ introduction }}


# Example
```js
var Draggable = require('blear.class.draggable');
```

# `.defaults`
## `.defaults.containerEl`
- 类型：`HTMLElement | String | null`
- 说明：容器
- 默认：`null`

## `.defaults.effectedSelector`
- 类型：`HTMLElement | String | null`
- 说明：拖拽被影响者
- 默认：`null`

## `.defaults.handleSelector`
- 类型：`HTMLElement | String | null`
- 说明：拖拽处理者
- 默认：`null`

## `.defaults.shadow`
- 类型：`Boolean`
- 说明：是否拖拽是出现影子来代替移动
- 默认：`true`

## `.defaults.preventDefault`
- 类型：`Boolean`
- 说明：是否取消默认
- 默认：`true`

## `.defaults.draggable`
- 类型：`Boolean`
- 说明：是否可拖动，设置为 false 时让继承者去处理
- 默认：`true`

## `.defaults.axis`
- 类型：`String`
- 说明：坐标轴
- 默认：`xy`

## `.defaults.zIndex`
- 类型：`Number`
- 说明：层级值
- 默认：`9999`

## `.defaults.resizeAnimation(el, to, done): undefined`
- 类型：`Function`
- 说明：位置变化动画
- 默认：`9999`

### `el`
- 类型：`HTMLElement | String | null`
- 说明：元素

### `to`
- 类型：`Object`
- 说明：位置变化动画设置

### `done`
- 类型：`Function`
- 说明：动画执行完毕回调

# Prototype
原型属性、方法


## `#enable(): Draggable`
启用拖拽

### `Draggable`
- 类型：`Draggable`
- 说明：支持链式调用

## `#disable(): Draggable`
禁用拖拽

### `Draggable`
- 类型：`Draggable`
- 说明：支持链式调用

## `#preventDefault(): Draggable`
阻止默认

### `Draggable`
- 类型：`Draggable`
- 说明：支持链式调用

## `#allowDefault(): Draggable`
允许默认

### `Draggable`
- 类型：`Draggable`
- 说明：支持链式调用

## `#horizontal([boolean]): *`
获取、设置水平方向拖动能力

### `boolean`
- 类型：`Boolean`
- 说明：设置是否可以水平方向拖动

### `*`
- 类型：`*`
- 说明：无`boolean`参数时，获取水平方向拖动能力，返回`Boolean`。反之是设置水平方向拖动能力，返回当前实例化对象`Draggable`。

## `#vertical([boolean]): *`
获取、设置垂直方向拖动能力

### `boolean`
- 类型：`Boolean`
- 说明：设置是否可以垂直方向拖动

### `*`
- 类型：`*`
- 说明：无`boolean`参数时，获取垂直方向拖动能力，返回`Boolean`。反之是设置垂直方向拖动能力，返回当前实例化对象`Draggable`。

## `#zIndex([zIndex]): *`
获取、设置层级

### `zIndex`
- 类型：`Number`
- 说明：层级值

### `*`
- 类型：`*`
- 说明：无`zIndex`参数时，获取层级值，返回`Number`。反之是设置层级值，返回当前实例化对象`Draggable`。

## `#destroy(): undefined`
销毁实例



# Dependencies
{{ dependencies }}





# More

