# Introduction
{{ introduction }}


# Example
```js
var Validation = require('blear.class.validation');

var  va = new Validation();
```

# Static
## `.defaults`
### `.defaults.skipInvalid`
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


## `#path(path, alias): va`
指定字段。

```js
va.path('username', '用户名');
```

### `path`
- 类型：`String`
- 说明：字段

### `alias`
- 类型：`String`
- 说明：别名

### `va`
- 类型：`Validation`
- 说明：支持链式调用

## `#constrain(rule, limit, [message]): validation`
约束条件。
```js
va
    .path('username')
    .constrain('minLength', 6)
    .constrain('maxLength', 12)
    
    .path('password')
    .constrain('pattern', /^[a-z]{6,12}$/, '不符合要求')
    
    .path('rePassword')
    .constrain('equal', 'password');
```

### `rule`
- 类型：`String`
- 说明：规则名称，内置的规则有：
    - `required`：必填
    - `type`：数据类型
        - `mobile`
        - `email`
        - `number`
        - `integer`
        - `url`、`http`
    - `min`：最小值
    - `max`：最大值
    - `lengtg`：等长
    - `minLength`：最小长度
    - `maxLength`：最大长度
    - `pattern`：正则
    - `equal`：等值

### `limit`
- 类型：`*`
- 说明：规则限制条件

### `message`
- 类型：`String`
- 说明：超过规则限制的消息
- 默认：自动生成

### `validation`
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

