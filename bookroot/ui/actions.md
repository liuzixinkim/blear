# Introduction
{{ introduction }}





# Example
```js
var Actions = require('blear.ui.actions');

var actions = new Actions();

actions
    .group()
    .text('一段文本')
    .button('一个按钮', 'primary')
    .render();

// 打开 actions
actions.open();

// 关闭 actions
actions.close();
```




# Static
## `.defaults`
默认配置。

### `.defaults.openAnimation`
- 类型：`function | undefined`
- 说明：打开动画

### `.defaults.closeAnimation`
- 类型：`function | undefined`
- 说明：关闭动画


# `new Actions(options)`
## `options`
参考 `.defaults`




# Prototype
## `#group()`
新建一个 action 分组。



## `#text(text)`
在 action 分组里添加一个文本。

### `text`
- 类型：`String`
- 说明：文本



## `#button(text, [type], [callback])`
在 action 分组里添加一个按钮。

### `text`
- 类型：`String`
- 说明：按钮文本

### `type`
- 类型：`String`
- 说明：按钮类型
- 默认：`primary`

### `callback`
- 类型：`Function`
- 说明：按钮点击之后的回调
- 默认：`noop`



## `#render()`
渲染全部 action 分组。



# Events
## `action(index)`
点击按钮之后触发。

### `index`
- 类型：`Number`
- 说明：按钮索引值






# Dependencies
{{ dependencies }}





