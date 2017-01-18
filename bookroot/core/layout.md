# Introduction
{{ introduction }}



# Example
```js
var layout = require('blear.core.layout');
```

# Static
静态属性、方法


## `.width(el, [val]): number | *`
获取元素的 contentWidth

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentWidth


## `.height(el, [val]): number | *`
获取元素的 contentHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentHeight


## `.innerWidth(el, [val]): number | *`
获取元素的 contentWidth + paddingWidth

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentWidth + paddingWidth


## `.innerHeight(el, [val]): number | *`
获取元素的 contentHeight + paddingHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentHeight + paddingHeight


## `.outerWidth(el, [val]): number | *`
获取元素的 contentWidth + paddingWidth + borderWidth

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentWidth + paddingWidth + borderWidth


## `.outerHeight(el, [val]): number | *`
获取元素的 contentHeight + paddingHeight + boderHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的contentHeight + paddingHeight + boderHeight


## `.scrollLeft(el, [val]): number | *`
获取、设置元素的 scrollLeft

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`的scrollLeft


## `.scrollTop(el, [val]): number | *`
获取、设置元素的 scrollTop

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`scrollTop


## `.scrollWidth(el, [val]): number | *`
获取、设置元素的 scrollWidth

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`scrollWidth


## `.scrollHeight(el, [val]): number | *`
获取、设置元素的 scrollHeight

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`scrollHeight


## `.offsetLeft(el, [val]): number | *`
获取、设置元素在文档中的左位移

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`offsetLeft


## `.offsetTop(el, [val]): number | *`
获取、设置元素在文档中的上位移

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number`
- 说明：如果设置了val，则返回undefined，否则返回当前`el`offsetTop




# Dependencies
{{ dependencies }}





# More

