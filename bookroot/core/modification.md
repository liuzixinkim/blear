# Introduction
{{ introduction }}



# Example
```js
var modification = require('blear.core.modification');
```

# Static
静态属性、方法


## `.parse(htmlString): node`
解析字符串为节点
```js
modification.parse('<div/>');
// => HTMLDIVElement
```

### `htmlString`
- 类型：`String`
- 说明：htmlString

### `node`
- 类型：`Node | HTMLElement`
- 说明：返回解析的节点


## `.create(nodeName, [attributes], [properties]): node`
创建节点
```js
modification.create('#text', '123');
// => textNode

modification.create('#comment', '123');
// => commentNode

modification.create('div', {id:'id-123'});
// => DIVNode
```

### `nodeName`
- 类型：`String`
- 说明：节点名称

### `attributes`
- 类型：`String`
- 说明：节点属性

### `properties`
- 类型：`String`
- 说明：节点特性

### `node | HTMLElement`
- 类型：`Node | HTMLElement`
- 说明：返回创建的节点


## `.insert(source, target, [position]): node`
将源插入到指定的目标位置，并返回指定的元素
```js
// - beforebegin ------ 0
// - <target>
//   - afterbegin ----- 1
//   - beforeend ------ 2
// - afterend --------- 3
// default return target
modification.insert(source, target, 'beforebegin');
modification.insert(source, target, 'afterbegin');
modification.insert(source, target, 'beforeend');
modification.insert(source, target, 'afterend');
```

### `source`
- 类型：`Node | HTMLElement`
- 说明：源

### `target`
- 类型：`Node | HTMLElement`
- 说明：目标

### `position`
- 类型：`String | Number`
- 说明：插入位置，分别为：beforebegin(0)、afterbegin(1)、beforeend(2)、afterend(3)
- 默认：`"beforeend"`

### `node | HTMLElement`
- 类型：`Node | HTMLElement`
- 说明：返回原始节点


## `.importStyle(cssText, sel, append): el`
添加样式
```js
modification.importStyle('body{padding: 10px;}');
```

### `cssText`
- 类型：`String`
- 说明：样式内容

### `sel`
- 类型：`Node | HTMLElement`
- 说明：选择器

### `append`
- 类型：`Boolean`
- 说明：是否为追加模式

### `el`
- 类型：`HTMLStyleElement`
- 说明：返回添加的HTMLStyleElement


## `.remove(el)`
移除某个元素
```js
modification.remove(el)
```

### `el`
- 类型：`Node | HTMLElement`
- 说明：元素


## `.empty(el)`
清空元素

### `el`
- 类型：`Node | HTMLElement`
- 说明：元素






# Dependencies
{{ dependencies }}







