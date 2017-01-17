# Introduction
{{ introduction }}





# Example
```js
var attribute = require('blear.core.attribute');
```




# Static
## `.css(cssKey, cssVal): keyValMap`
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

### `keyValMap`
- 类型：`Object`
- 说明：包含 `key`、`val` 的键值对

### `keyValMap.key`
- 类型：`String`
- 说明：css 键

### `keyValMap.val`
- 类型：`String`
- 说明：css 值


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
设置 DOM 特性。延伸：[JS DOM 的attribute 与 property](http://frontenddev.org/link/js-dom-attribute-and-property.html)。
```js
attribute.prop(divEl, 'xxxx', {a: 1});

attribute.prop(divEl, 'xxxx');
// => {a: 1}
```
### `el`
- 类型：`HTMLElement`

### `propKey`
- 类型：`String`
- 说明：任意特性键

### `propVal`
- 类型：`*`
- 说明：任意特性值，如果为空，则为特性键返回值



## `.data(el, dataKey, [dataVal]): dataVal`
或者或设置 dataset。
```js
attribute.data(divEl, 'aBc', [1, 2, 3]);
// <div data-a-b-c="[1, 2, 3]">

attribute.data(divEl, 'a-b-c');
// => [1, 2, 3]
```

### `el`
- 类型：`HTMLElement`

### `dataKey`
- 类型：`String`
- 说明：任意属性键，会将驼峰形式转换为 `-` 分隔符小写形式

### `dataVal`
- 类型：`*`
- 说明：任意属性值，如果为空，则为属性键返回值


## `.addClass(el, className): undefined`
添加 DOM className。
```js
attribute.addClass(divEl, 'classA');
attribute.addClass(divEl, 'classA classB');
```

### `el`
- 类型：`HTMLElement`

### `className`
- 类型：`String`
- 说明：多个 className 使用空格分开


## `.removeClass(el, className): undefined`
移除 DOM className。
```js
attribute.removeClass(divEl, 'classA');
attribute.removeClass(divEl, 'classA classB');
```

### `el`
- 类型：`HTMLElement`

### `className`
- 类型：`String`
- 说明：多个 className 使用空格分开



## `.hasClass(el, className): hasClass`
判断 DOM 是否包含一个 className。
### `el`
- 类型：`HTMLElement`

### `className`
- 类型：`String`
- 说明：只能是一个 className

### `hasClass`
- 类型：`Boolean`


## `.html(el, [html]): html`
设置、获取 DOM 的 innerHTML。

```js
attribute.html(divEl, '<b>Hello</b>');
// <div><b>Hello</b></div>

attribute.html(divEl);
// "<b>Hello</b>"
```

### `el`
- 类型：`HTMLElement`

### `html`
- 类型：`String`
- 说明：如果为空，则为返回值


## `.text(el, [text]): text`
设置、获取 DOM 的 textContent。

```js
attribute.text(divEl, '<b>Hello</b>');
// <div>&lt;b&gt;Hello&lt;/b&gt;</div>

attribute.text(divEl);
// "<b>Hello</b>"
```

### `el`
- 类型：`HTMLElement`

### `text`
- 类型：`String`
- 说明：如果为空，则为返回值





# Dependencies
{{ dependencies }}





# More
- JS DOM 的attribute 与 property：<http://frontenddev.org/link/js-dom-attribute-and-property.html>

