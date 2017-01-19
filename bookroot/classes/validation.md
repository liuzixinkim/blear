# Introduction
{{ introduction }}


# Example
```js
var Validation = require('blear.class.validation');
```

# `.defaults`
## `.defaults.skipInvalid`
- 类型：`Boolean`
- 说明：是否跳过非法验证继续后面的验证
- 默认：`true`

# Prototype
原型属性、方法


## `#validate(data, callback): undefined`
验证数据

### `data`
- 类型：`Object`
- 说明：待验证的数据

### `callback`
- 类型：`Function`
- 说明：验证回调

### `Switchable`
- 类型：`Switchable`
- 说明：支持链式调用


## `#path(path, alias): Validation`
指定字段

### `path`
- 类型：`String`
- 说明：字段

### `alias`
- 类型：`String`
- 说明：别名

### `Validation`
- 类型：`Validation`
- 说明：支持链式调用

## `#constrain(rule, limit, message): Validation`
约束条件

### `rule`
- 类型：`String`
- 说明：规则名称

### `limit`
- 类型：`*`
- 说明：规则限制条件

### `message`
- 类型：`String`
- 说明：超过规则限制的消息

### `Validation`
- 类型：`Validation`
- 说明：支持链式调用

## `#rule(name, fn): Validation`
自定义实例级别的验证规则

### `name`
- 类型：`String`
- 说明：规则名称

### `fn`
- 类型：`Function`
- 说明：规则验证方法

### `Validation`
- 类型：`Validation`
- 说明：支持链式调用




# Dependencies
{{ dependencies }}





# More

