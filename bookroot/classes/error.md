# Introduction
{{ introduction }}





# Example
```js
var Error = require('blear.classes.error');
```




# `new Error([type], message)`
```js
var err1 = new Error(123, '嘻嘻');
err1.type === 123;
err1.message === '嘻嘻';
err1.id === 1;
err1.name === 'Error';

var err2 = new Error('123', '嘻嘻');
err2.type === '123';
err2.message === '嘻嘻';
err2.id === 2;
err2.name === 'Error';

var err3 = new Error('嘻嘻');
err3.type === undefined;
err3.message === '嘻嘻';
err3.id === 3;
err3.name === 'Error';

```

## `type`
- 类型：`String | Number`
- 说明：错误的类型
- 默认：`undefined`

## `message`
- 类型：`String`
- 说明：错误的描述



# Prototype
原型属性、方法

## `#name`
- 类型：`String`
- 说明：错误的名称，即 `className`

## `#type`
- 类型：`String | Number`
- 说明：错误的类型

## `#message`
- 类型：`String`
- 说明：错误的描述

## `#id`
- 类型：`Number`
- 说明：错误的 ID

## `#timeStamp`
- 类型：`Number`
- 说明：错误的时间戳

## `#stack`
- 类型：`String`
- 说明：错误的调用栈描述




# Dependencies
{{ dependencies }}





# Reference
- Error MDN：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error>
- 错误处理机制：<http://javascript.ruanyifeng.com/grammar/error.html>

