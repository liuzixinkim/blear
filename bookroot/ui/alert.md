# Introduction
{{ introduction }}





# Example
```js
var Alert = require('blear.ui.alert');

var alert = new Alert({
    message: '注意啊，这是一个警告对话框'
});

alert.on('sure', function() {
    // 点击了确认按钮
});
```




# Static
## `.defaults`
## `.defaults.width`
- 类型：`Number`
- 说明：警告框宽度
- 默认：`300`

## `.defaults.sure`
- 类型：`Object`
- 说明：确认按钮配置

## `.defaults.sure.text`
- 类型：`String`
- 说明：确认按钮文本
- 默认：`"好"`

## `.defaults.sure.type`
- 类型：`String`
- 说明：确认按钮类型
- 默认：`"primary"`

## `.defaults.title`
- 类型：`String`
- 说明：警告框标题
- 默认：`"提醒"`

## `.defaults.message`
- 类型：`String`
- 说明：警告框消息
- 默认：`""`

## `.defaults.addClass`
- 类型：`String`
- 说明：警告框附加的类名
- 默认：`""`





# `new Alert(options)`
实例化一个警告框，`options` 默认为 `.defaults`。




# Prototype
无。


# Events
## `sure()`
点击确认按钮之后触发，对话框自动关闭。





# Dependencies
{{ dependencies }}





# Reference
无。
