# Introduction
{{ introduction }}





# Example
```js
var example = require('blear.core.example');
```




# `new Example(...)`
本身是一个方法


语法规则
```text
# 代表原型方法、属性
. 代表静态方法、属性
[] 代表可选
() 代表函数，里面填参数
(): 函数末尾的表示函数的返回值
fn: a 表示 fn 函数的形参 

标题需抽象写明方法的形参，如
# `#getUserInfo(userName, [options], callback(err, userInfo)): someReturn`

在说明各个参数，分别都要写明，甚至包括函数的 this

## `userName`
## `options`
### `options.key1`
### `options.key2`
## `callback`
### `callback: this`
### `callback: err`
### `callback: userInfo`
## `someReturn`
```




# Prototype
原型属性、方法

## `#bala(arg)`

### `arg`
- 类型：`Object`
- 说明：巴拉巴拉






# Static
静态属性、方法


## `.bala`





# Dependencies
{{ dependencies }}





# Reference
这里写参考内容。

