# Introduction
{{ introduction }}





# Example
```js
var attribute = require('blear.core.attribute');
```




# Static
## `.css(cssKey, cssVal): undefined`
根据浏览器兼容性，返回兼容性的 css key-val 键值对。
```js
attribute.css('appearance', 'none');
// => {key: "-webkit-appearance", val: "none"}

attribute.css('width', 123);
// => {key: "width", val: "123px"}

attribute.css('transform', {
    rotate: 10,
    scale: 0.2,
    translateX: 10
});
// => {key: "-webkit-transform", val: "rotate(10deg) scale(0.2) translateX(10)"}
```

### `cssKey`
- 类型：`String`
- 说明：标准 css 键

### `cssVal`
- 类型：`String | Number | Object`
- 说明：标准 css 值


## `.style(el, cssKey, cssVal): cssVal`
基于 `attribute.css(cssKey, cssVal)` 将 css 渲染到 `el` 上。

```js
attribute.style(el, 'width', 100);
// => undefined

attribute.style(el, 'width');
// => "100px"
```

### `el`
- 类型：`HTMLElement`

### `cssKey`
- 类型：`String`
- 说明：标准 css 键

### `cssVal`
- 类型：`String | Number | Object`
- 说明：标准 css 值，如果为空，则返回对应 `cssKey` 的样式


## `.show(el, [display]): undefined`
显示元素，设置元素的 `display` 为 `block`（默认）。
```js
attribute.show(divEl);
attribute.show(spanEl, 'inline');
```
### `el`
- 类型：`HTMLElement`

### `display`
- 类型：`String`
- 说明：显示样式
- 默认：`"block"`

## `.hide(el): undefined`
隐藏元素，设置元素的 `display` 为 `none`。
### `el`
- 类型：`HTMLElement`

## `.attr(el, attrKey, [attrVal]): attrVal`
设置 DOM 属性。
```js
attribute.attr(divEl, 'id', 'abc');

attribute.attr(divEl, 'id');
// => "abc"
```
### `el`
- 类型：`HTMLElement`

### `attrKey`
- 类型：`String`
- 说明：标准属性键

### `attrVal`
- 类型：`String`
- 说明：标准属性值，如果为空，则为属性键返回值



## `.removeAttr(el, attrKey): undefined`
移除 DOM 原型。
```js
attribute.removeAttr(divEl, 'id');
```
### `el`
- 类型：`HTMLElement`

### `attrKey`
- 类型：`String`
- 说明：标准属性键




## `.hasAttr(el, attrKey): hasAttr`
判断 DOM 是否包含该属性键。
```js
attribute.hasAttr(divEl, 'id');
```

### `el`
- 类型：`HTMLElement`

### `attrKey`
- 类型：`String`
- 说明：标准属性键

### `hasAttr`
- 类型：`Boolean`


## `.prop(el, propKey, [propVal]): propVal`
## `.data(el, dataKey, [dataVal]): dataVal`
## `.addClass(el, className): undefined`
## `.removeClass(el, className): undefined`
## `.hasClass(el, className): undefined`
## `.html(el, [html]): html`
## `.text(el, [text]): text`





# Dependencies
{{ dependencies }}





# More
这里写更多的额外内容，可以不写。

