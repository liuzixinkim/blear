# Introduction
{{ introduction }}





# Example
```js
var debug = require('blear.utils.debug');
```





# Static

## `.deprecate(fn, [msg]): deprecatedFn`
标记某个方法被废弃使用。


### `fn`
- 类型：`Function`
- 说明：被替代方法

### `msg`
- 类型：`String`
- 说明：废弃说明
- 默认：`(function.name || 该) 方法已被废弃，请及时修改！`

### `deprecatedFn`
- 类型：`Function`
- 说明：被废弃的方法







# Dependencies
{{ dependencies }}




