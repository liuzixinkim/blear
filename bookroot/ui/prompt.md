# Introduction
{{ introduction }}





# Example
```js
var Prompt = require('blear.ui.prompt');

var prompt = new Prompt({
    title: '演示一下',
    message: '请输入你的姓名',
    placeholder: '姓名'
});
```

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff13b1c04sj30m60laq3p.jpg =798x766)




# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.width`
- 类型：`Number`
- 说明：宽度
- 默认：`300`

## `.defaults.sure`
- 类型：`Object`
- 说明：确定按钮配置

## `.defaults.sure.text`
- 类型：`String`
- 说明：确定按钮文本
- 默认：`"确定"`

## `.defaults.sure.type`
- 类型：`String`
- 说明：确定按钮样式
- 默认：`"primary"`

## `.defaults.cancel`
- 类型：`Object`
- 说明：取消按钮配置

## `.defaults.cancel.text`
- 类型：`String`
- 说明：取消按钮文本
- 默认：`"取消"`

## `.defaults.cancel.type`
- 类型：`String`
- 说明：取消按钮样式
- 默认：`"default"`

## `.defaults.surePosition`
- 类型：`Number`
- 说明：确定按钮位置，0 为左边，1 为右边
- 默认：`1`

## `.defaults.title`
- 类型：`String`
- 说明：标题
- 默认：`"确认"`

## `.defaults.message`
- 类型：`String`
- 说明：消息
- 默认：`""`

## `.defaults.placeholder`
- 类型：`String`
- 说明：输入框占位文本
- 默认：`""`

## `.defaults.value`
- 类型：`String`
- 说明：输入框默认值
- 默认：`""`

## `.defaults.addClass`
- 类型：`String`
- 说明：附加的样式
- 默认：`""`

## `.defaults.inputType`
- 类型：`String`
- 说明：输入框类型，可选：`input`、`textarea`
- 默认：`"input"`

## `.defaults.rows`
- 类型：`Number`
- 说明：输入框行数，当 `inputType` 为 `textarea` 时有效
- 默认：`3`

## `.defaults.maxLength`
- 类型：`Number`
- 说明：输入最大长度，-1 为不限制
- 默认：`-1`

## `.defaults.autoClose`
- 类型：`Number`
- 说明：是否自动关闭，即点击确定、取消后自动关闭
- 默认：`true`


# `new Prompt(options)`
实例化一个确认输入框。`options` 默认值为 `.defaults`。



# Prototype
无。



# Events
## `sure(value)`
点击确认后触发。

### `value`
- 类型：`String`
- 说明：输入框文本

## `cancel()`
点击取消后触发。






# Dependencies
{{ dependencies }}





# Reference
无。

