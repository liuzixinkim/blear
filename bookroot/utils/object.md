# Introduction
{{ introduction }}


# Example
```js
var object = require('blear.utils.object');
```


# Static

## `.keys(obj): keys`
返回对象的静态键。

### `obj`
- 类型：`Object`


### `keys`
- 类型：`Array`


## `.isPlain(obj): isPlain`
判断对象是否为无属性对象。

### `obj`
- 类型：`Object`
- 说明：传入对象

### `isPlain`
- 类型：`Boolean`



## `.hasOwn(obj, key): hasOwn`
判断对象是否有自身属性，即静态属性

### `obj`
- 类型：`Object`
- 说明：待判断对象

### `key`
- 类型：`String`
- 说明：字段名称

### `hasOwn`
- 类型：`Boolean`


## `.each(obj, callback(key, val)): undefined`
对象的遍历。

### `obj`
- 类型：`Object`

### `callback`
- 类型：`Function`
- 说明：返回 `false` 终止遍历

#### `callback: this`
- 类型：`Object`
- 说明：指向当前传入的对象 `obj`

#### `callback: key`
- 类型：`String`
- 说明：字段名称

#### `callback: val`
- 类型：`*`
- 说明：对应字段的值


## `.define(obj, key, [desc]): undefiend`
定义一个对象的属性
```js
object.define({}, 'a', {
    get: function () {
        return 1
    },
    set: function() {
      
    }
});

object.define({}, {
    a: {
        value: 2
    },
    b: {
        get: function() {
            return 3;
        }
    }
});
```

### `obj`
- 类型：`Object`
- 说明：待定义属性的对象。

### `key`
- 类型：`String | Object`
- 说明：如果是字符串，则必须传入 desc，作为该字段的描述，如果是对象，则批量定义对象属性

### `desc`
- 类型：`Object`
- 说明：对字段的描述

描述的值有：

#### `desc.writable`
- 类型：`Boolean`
- 说明：是否可以被重写

#### `desc.enumerable`
- 类型：`Boolean`
- 说明：是否可以被重写

#### `desc.configurable`
- 类型：`Boolean`
- 说明：是否可以被配置，即是否可以被删除

#### `desc.get`
- 类型：`Function`
- 说明：取值函数

#### `desc.set`
- 类型：`Function`
- 说明：设值函数

#### `desc.value`
- 类型：`Boolean`
- 说明：固定值


## `.map(obj, callback(val, key)): mappedObj`
对象包装，返回一个新的对象。
```js
object.map({a: 1, b: 2}, function(val, key) {
    return val + val;
});
// => {a: 2, b: 4}
```
### `obj`
- 类型：`Object`
- 说明：待包装对象

### `callback`
- 类型：`Function`
- 说明：返回值作为该字段新值

#### `callback: this`
- 类型：`Object`
- 说明：指向当前传入的对象

#### `callback: val`
- 类型：`*`
- 说明：字段值

#### `callback: key`
- 类型：`String`
- 说明：字段

### `mappedObj`
- 类型：`Object`
- 说明：包装后的对象


## `.filter(obj, callback(val, key)): filteredObj`
对象过滤，返回一个新对象。

### `obj`
- 类型：`Object`

### `callback`
- 类型：`Function | Array`
- 说明：返回 `true` 则该字段被筛选。

#### `callback: this`
- 类型：`Object`
- 说明：指向当前传入的对象

#### `callback: val`
- 类型：`*`
- 说明：字段值

#### `callback: key`
- 类型：`String`
- 说明：字段

### `filteredObj`
- 类型：`Object`
- 说明：过滤后的对象


## `.assign([deep], source, target...): assignedSource`
分配对象 target 上不为 undefined 的属性到 source 上，与 `jQuery.extend` 功能相同。
```js
object.assign({a: 1}, {a: 2, b: 3}, {c: 4});
// => {a: 2, b: 3, c: 4}
```

### `deep`
- 类型：`Boolean`
- 说明：是否深度处理
- 默认：`false`

### `source`
- 类型：`Object | Array`

### `target`
- 类型：`*`
- 说明：`target` 可以为任意个，后面同名属性**会**覆盖前面的

### `assignedSource`
- 类型：`Object | Array`
- 说明：指向 `source` 的对象


## `.supply(deep, source, ...target): supplyedSource`
分配属性，与 `object.assign` 功能相反。
```js
object.supply({a: 1}, {a: 2, b: 3}, {c: 4});
// => {a: 1, b: 3, c: 4}
```
### `deep`
- 类型：`Boolean`
- 说明：是否深度处理
- 默认：`false`

### `source`
- 类型：`Object | Array`

### `target`
- 类型：`*`
- 说明：`target` 可以为任意个，后面同名属性**不会**覆盖前面的

### `supplyedSource`
- 类型：`Object | Array`
- 说明：指向 `source` 的对象


## `.path(path): pathList`
根据路径获取路径数组
```js
object.path('a.b.c');
// => ["a", "b", "c"]
```
### `path`
- 类型：`String | Array`
- 说明：待处理字段字符串或数组，如果是数组则原样返回

### `pathList`
- 类型：`Array`
- 说明：字段路径数组



## `.get(obj, path): val`
根据路径返回属性值。
```js
object.get({a: {b: 1}}, 'a.b');
// => 1
```

### `obj`
- 类型：`Object`
- 说明：待取值对象

### `path`
- 类型：`String | Array`
- 说明：路径字符串或数组

### `val`
- 类型：`*`
- 说明：返回路径对应属性值，如果路径不存在，返回 `undefined`。


## `.set(obj, path, val): parent`
根据路径设置属性值。
```js
object.set({a: {b: 1}}, 'a.b.c', 2);
// => {c: 2}
```

### `obj`
- 类型：`Object`
- 说明：待取值对象

### `path`
- 类型：`String | Array`
- 说明：路径字符串或数组

### `val`
- 类型：`*`
- 说明：被设置的值

### `parent`
- 类型：`Object | Array`
- 说明：返回被设置的父级对象。


# Dependencies
{{ dependencies }}


# Reference
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object>
