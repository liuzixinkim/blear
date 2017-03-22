# Introduction
{{ introduction }}





# Example
```js
var Application = require('blear.ui.application');
```




# Static
静态属性、方法


## `defaults`
### `defaults.el`
- 类型：`String | HTMLElement`
- 说明：单页面应用管理的节点
- 默认：`null`

### `defaults.platform`
- 类型：`String`
- 说明：单页面应用平台，**目前该配置未起作用**
- 默认：`mobile`



# `new Application(options)`
Application 模块是和 [blear.classes.Router](/classes/router) 模块一起配合使用的。
Router 模块实现路由的管理，Application 实现页面路由与控制器的组合。

`options` 参数默认值为 `defaults`。


# Prototype

## `#getViewsElement(): viewsEl`
获取视图容器元素。

### `viewsEl`
- 类型：`HTMLElement`
- 说明：视图容器元素


## `#destroy()`
销毁实例。


# Events
## `beforeViewUpdate(view, route)`
视图更新之前触发。（参数下同）

### `view`
- 类型：`Object`
- 说明：视图对象

### `route`
- 类型：`Object`
- 说明：路由对象

## `afterViewUpdate(view, route)`
视图更新之后触发。

## `beforeViewLeave(view, route)`
视图离开之前触发

## `afterViewLeave(view, route)`
视图离开之后触发

## `beforeViewHide(view, route)`
视图隐藏之前触发

## `afterViewHide(view, route)`
视图隐藏之后触发

## `beforeViewShow(view, route)`
视图显示之前触发

## `afterViewShow(view, route)`
视图显示之后触发

## `beforeViewEnter(view, route)`
视图进入之前触发

## `afterViewEnter(view, route)`
视图进入之后触发

## `beforeTransition(view, route)`
过场之前触发

## `afterTransition(view, route)`
过场之后触发






# Dependencies
{{ dependencies }}






