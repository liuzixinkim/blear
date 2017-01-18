# Introduction
{{ introduction }}



# Example
```js
var selector = require('blear.core.selector');
```

# Static
静态属性、方法


## `.query(sel, [context]): array`
在上下文中查找DOM元素，永远返回一个数组

```js
selector.query('body');
// => [HTMLBODYElement]
selector.query('div');
// => [div, div, ...]
```
### `sel`
- 类型：`String | Object`
- 说明：selector  选择器

### `context`
- 类型：`String | Object`
- 说明：[context=document] 上下文

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.contains(childEl, parentEl): boolean`
判断元素是否包含关系

```js
selector.contains(selector.query('div')[0], document);
// => true
selector.contains(document,selector.query('div')[0]);
// => false
```
### `childEl`
- 类型：`Object`
- 说明：selector  子元素

### `parentEl`
- 类型：`Object`
- 说明：父元素

### `boolean`
- 类型：`Boolean`
- 说明：布尔值


## `.siblings(el): array`
获取当前元素的其他兄弟元素

```js
selector.siblings(el);
// => [div, div, ...];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组

## `.index(el): number`
获取当前元素的索引值

```js
selector.index(el);
// find => [0,+∞)
// unfind => -1
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `number`
- 类型：`Number`
- 说明：未匹配到为-1，匹配到为[0,+∞)


## `.prev(el): array`
获取元素的上一个兄弟元素

```js
selector.prev(el);
// => [div];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.next(el): array`
获取元素的下一个兄弟元素

```js
selector.next(el);
// => [div];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.prevAll(el): array`
获取元素的上面全部兄弟元素

```js
selector.prevAll(el);
// => [div, div, ...];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.nextAll(el): array`
获取元素的下面全部兄弟元素

```js
selector.nextAll(el);
// => [div, div, ...];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.parent(el): array`
获得父级元素

```js
selector.parent(el);
// => [div];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.children(el): array`
获得子元素

```js
selector.children(el);
// => [div, div, ...];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.contents(el): array`
获取子节点

```js
selector.contents(el);
// => [div, div, ...];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.matches(el, sel): boolean`
元素与选择器是否匹配

```js
selector.matches(ele, 'div');
// => true OR false
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `sel`
- 类型：`String`
- 说明：sel 选择器

### `boolean`
- 类型：`Boolean`
- 说明：布尔值


## `.closest(el, sel, [rootEl]): array`
从元素本身开始获得最近匹配的祖先元素

```js
selector.closest(el, 'div');
// => [div];
```
### `el`
- 类型：`Object`
- 说明：el 元素

### `sel`
- 类型：`Object | String`
- 说明：sel 选择器

### `rootEl`
- 类型：`HTMLElement`
- 说明：[rootEl] 根元素，默认是 document

### `array`
- 类型：`Array`
- 说明：nodeList 数组


## `.filter(nodeList, filter): array`
过滤节点集合

```js
selector.filter(ele, function(){
     return this.nodeName === 'DIV';
 });
// => [div, div, ...]
```

### `nodeList`
- 类型：`array | NodeList`
- 说明：nodeList 节点集合

### `filter`
- 类型：`Function`
- 说明：filter 过滤方法，返回true选择该节点

### `array`
- 类型：`Array`
- 说明：nodeList 数组





# Dependencies
{{ dependencies }}





# Reference
这里写更多的额外内容，可以不写。

