# Introduction
{{ introduction }}





# Example
```js
var Pagination = require('blear.ui.pagination');

new Pagination({
    el: '#pagination'
});
```


# Static
## `.defaults`
### `.defaults.el`
- 类型：`String | HTMLElement`
- 说明：容器，如果容器不为空，则以容器的 html 作为分页模板

### `.defaults.mode`
- 类型：`String`
- 说明：分页模式，可选值：`simple`、`range`
- 默认：`"simple"`

**simple 模式**
![](https://ww3.sinaimg.cn/large/006tNbRwgy1fem0fchgxrj30hu0am0ss.jpg)

**range 模式（可视区为 7）**
![](http://ww1.sinaimg.cn/large/006tNbRwgy1fem0hgzff9j30ts09g74j.jpg)


### `.defaults.range`
- 类型：`Number`
- 说明：分页可视范围，只在 `range` 模式下有效
- 默认：`7`

### `.defaults.total`
- 类型：`Number`
- 说明：分页总数
- 默认：`1`

### `.defaults.page`
- 类型：`Number`
- 说明：当前分页
- 默认：`1`

### `.defaults.prev`
- 类型：`String`
- 说明：前一页文本
- 默认：`"≪"`

### `.defaults.next`
- 类型：`String`
- 说明：后一页文本
- 默认：`"≫"`

### `.defaults.ellipsis`
- 类型：`String`
- 说明：省略文本
- 默认：`"..."`




# `new Pagination(options)`
实例化一个分页器。`options` 默认值为 `.defaults`。 




# Prototype
无。



# Events
## `change(page, callback(options))`
分页点击变化后触发。

### `page`
- 类型：`Number`
- 说明：当前点击的分页值

### `callback`
- 类型：`Function`
- 说明：分页信息处理完毕后回调

### `callback: options`
- 类型：`Object`
- 说明：处理参数，需要包含 `{page: Number, total: Number}` 等信息





# Dependencies
{{ dependencies }}





# Reference
无。

