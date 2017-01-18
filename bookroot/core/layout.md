# Introduction
{{ introduction }}



# Example
```js
var layout = require('blear.core.layout');
```

# Static
静态属性、方法


## `.width(el, [val]): width`
获取元素的 contentWidth

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `width`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentWidth`


## `.height(el, [val]): height`
获取元素的 contentHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `height`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentHeight`


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
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentWidth + paddingWidth`


## `.innerHeight(el, [val]): innerHeight`
获取元素的 contentHeight + paddingHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `innerHeight`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentHeight + paddingHeight`


## `.outerWidth(el, [val]): outerWidth`
获取元素的 contentWidth + paddingWidth + borderWidth

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentWidth + paddingWidth + borderWidth`


## `.outerHeight(el, [val]): outerHeight`
获取元素的 contentHeight + paddingHeight + boderHeight

### `el`
- 类型：`HTMLElement`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `number | *`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `contentHeight + paddingHeight + boderHeight`


## `.scrollLeft(el, [val]): scrollLeft`
获取、设置元素的 scrollLeft

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `scrollLeft`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `scrollLeft`


## `.scrollTop(el, [val]): scrollTop`
获取、设置元素的 scrollTop

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `scrollTop`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `scrollTop`


## `.scrollWidth(el, [val]): scrollWidth`
获取、设置元素的 scrollWidth

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `scrollWidth`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `scrollWidth`


## `.scrollHeight(el, [val]): scrollHeight`
获取、设置元素的 scrollHeight

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `scrollHeight`
- 类型：`Number | *`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `scrollHeight`


## `.offsetLeft(el, [val]): offsetLeft`
获取、设置元素在文档中的左位移

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `offsetLeft`
- 类型：`Number`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `offsetLeft`


## `.offsetTop(el, [val]): offsetTop`
获取、设置元素在文档中的上位移

### `el`
- 类型：`HTMLElement | Document | Window`
- 说明：元素

### `val`
- 类型：`Number`
- 说明：设置值

### `offsetTop`
- 类型：`Number`
- 说明：如果设置了 `val`，则返回 `undefined`，否则返回当前 `el` 的 `offsetTop`




# Dependencies
{{ dependencies }}



