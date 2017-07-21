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


## `#path(path, alias): this`
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


## `#constrain(rule, limit, [message]): this`
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


## `#rule(name, [fn(value, next([message]))]): this`
自定义实例级别的验证规则
```javascript
va.rule('is myRule', function(value, next) {
    if(value === 'myRule') {
        return next();
    }
    
    next('必须等于 `myRule`');
});
```

### `name`
- 类型：`String`
- 说明：规则名称

### `fn`
- 类型：`Function`
- 说明：规则验证方法

### `fn: value`
- 类型：`*`
- 说明：字段值

### `fn: next`
- 类型：`Function`
- 说明：异步验证回调

### `fn: next: message`
- 类型：`String`
- 说明：异步验证消息，可选，为空时表示验证通过


## `#useful(bool)`
标记某个验证是否有效。
```javascript
// a 字段必须验证
va.path('a').constrain('required', true).useful(true);

// b 字段忽略验证
va.path('b').constrain('required', true).useful(false);
```
### `bool`
- 类型：`Boolean`
- 说明：验证规则是否生效


## `#useful(fn(value): bool)`
标记某个验证是否有效。
```javascript
// a 字段必须验证
va.path('a').constrain('required', function(value) {
    return true;
}).useful(true);

// b 字段忽略验证
va.path('b').constrain('required', function(value) {
    return false;
}).useful(false);
```

### `fn`
标记方法，返回布尔值
- 类型：`Function`
- 说明：处理函数


### `fn: value`
- 类型：`*`
- 说明：字段值


### `fn: bool`
- 类型：`Boolean`
- 说明：验证规则是否生效


# Dependencies
{{ dependencies }}





