# Introduction
{{ introduction }}





# Example
```js
var Sticky = require('blear.ui.sticky');

new Sticky({
    el: '#sticky',
    containerEl: document
});
```

![](http://ww2.sinaimg.cn/large/006tNbRwgy1ff1bdx08esj30yw0jk0ty.jpg)



# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：粘滞的元素

## `.defaults.containerEl`
- 类型：`Element | String`
- 说明：滚动的容器

## `.defaults.top`
- 类型：`Number`
- 说明：粘滞上位移
- 默认：`0`

## `.defaults.left`
- 类型：`Number`
- 说明：粘滞左位移
- 默认：`0`

## `.defaults.zIndex`
- 类型：`Number`
- 说明：粘滞层级
- 默认：`9`



# `new Sticky(options)`
实例化一个粘滞 UI，`options` 为入参，默认值为 `.defaults`。



# Prototype

## `#update(): this`
滚动容器范围内有位置变化后，手动触发以更新粘滞计算。

## `#destroy()`
销毁实例。


# Events
无。





# Dependencies
{{ dependencies }}





# Reference
- css sticky：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#Sticky_positioning>

