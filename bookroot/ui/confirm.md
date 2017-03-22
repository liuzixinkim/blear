# Introduction
{{ introduction }}





# Example
```js
var Confirm = require('blear.ui.confirm');

var confirm = new Confirm({
    message: '注意啊，这是一个确认框，请注意你的选择！！'
});

confirm.on('sure', function() {
    // 点击了确认
});

confirm.on('cancel', function() {
    // 点击了取消
});
```






# Static
## `.defaults`
## `.defaults.width`
- 类型：`Number`
- 说明：确认框宽度
- 默认：`300`

## `.defalts.sure`
- 类型：`Object`
- 说明：确认按钮配置

## `.defalts.sure.text`
- 类型：`String`
- 说明：确认按钮文本
- 默认：`"好"`

## `.defalts.sure.type`
- 类型：`String`
- 说明：确认按钮类型
- 默认：`"primary"`

## `.defalts.cancel`
- 类型：`Object`
- 说明：取消按钮配置

## `.defalts.cancel.text`
- 类型：`String`
- 说明：取消按钮文本
- 默认：`"好"`

## `.defalts.cancel.type`
- 类型：`String`
- 说明：取消按钮类型
- 默认：`"default"`

## `.defaults.title`
- 类型：`String`
- 说明：确认框标题
- 默认：`"提醒"`

## `.defaults.message`
- 类型：`String`
- 说明：确认框消息
- 默认：`""`

## `.defaults.addClass`
- 类型：`String`
- 说明：确认框附加的类名
- 默认：`""`

## `.defaults.surePosition`
- 类型：`Number`
- 说明：确认按钮位置，`0` 为左边，`1` 为右边
- 默认：`1`





# `new Confirm(options)`
实例化一个确认框。


## `options`
`.defaults` 为其默认值。




# Prototype
无。



# Events
## `sure()`
点击了确认按钮之后触发。

## `cancel()`
点击了取消按钮之后触发。






# Dependencies
{{ dependencies }}





# Reference
无。

