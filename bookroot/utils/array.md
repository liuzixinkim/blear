# Introduction
{{ introduction }}


# Example
```js
var array = require('blear.utils.array');
```


# Static

## `.like(obj): isLike`
判断一个对象是否为似数组，类数组必须有 `length` 属性，并且其 `0 ~ length-1` 对应的属性名，
如`Arguments`、`NodeList`都是类数组。
```js
array.like({0: "a", 1: "b", length: 2});
// => true
```

### `obj`
- 类型：`*`

### `isLike`
- 类型：`Boolean`


## `.each(arr, callback(index, val), [invertedOrder=false]): undefined`
数组的遍历。

### `arr`
- 类型：`Array`
- 说明：数组、类数组都可以

### `callback`
- 类型：`Function`
- 说明：遍历回调

#### `callback: this`
- 类型：`this`
- 说明：指向 `arr`

#### `callback: index`
- 类型：`Number`
- 说明：遍历数组的当前索引值

#### `callback: val`
- 类型：`*`
- 说明：遍历数组的当前值

### `invertedOrder`
- 类型：`Boolean`
- 说明：是否倒序遍历，默认 `false`


## `.map(arr, callback(val, index)): mappedArray`
数组包装器，返回新数组
```js
array.map([1, 2], function(val, index) {
    return val + val;
});
// => [2, 4]
```

### `arr`
- 类型：`Array`
- 说明：数组、类数组都可以

### `callback`
- 类型：`Function`
- 说明：遍历回调，返回值将替换遍历当前值

#### `callback: this`
- 类型：`Object`
- 说明：指向 `arr`

#### `callback: val`
- 类型：`*`
- 说明：遍历数组的当前值

#### `callback: index`
- 类型：`Number`
- 说明：遍历数组的当前索引值

### `mappedArray`
- 类型：`Array`
- 说明：返回包装后的新数组




## `.filter(arr, callback): filteredArray`
数组过滤器，返回新数组。
```js
array.filter([1, 2, 3], function(val, index) {
    return index % 2 !== 0;  
});
//  => [2]
```

### `arr`
- 类型：`Array`
- 说明：数组、类数组都可以

### `callback`
- 类型：`Function`
- 说明：遍历回调，返回 `true` 则当前被遍历的值被筛选

#### `callback: this`
- 类型：`Object`
- 说明：指向 `arr`

#### `callback: val`
- 类型：`*`
- 说明：遍历数组的当前值

#### `callback: index`
- 类型：`Number`
- 说明：遍历数组的当前索引值

### `filteredArray`
- 类型：`Array`
- 说明：返回新数组



## `.from(arrayLike): reallyArray`
将类数组对象转换为真数组。

```js
array.from({0: "a", 1: "b", length: 2});
// => ["a", "b"]
```

### `arrayLike`
- 类型：`*`
- 说明：类数组，即可以被`array.like`检测通过的对象

### `reallyArray`
- 类型：`Array`
- 说明：返回新数组



## `.remove(arr, indexes): originArray`
根据索引值从数组中删除，返回原数组。
```js
array.remove(["a", "b", "c"], 0);
// => ["b", "c"]

array.remove(["a", "b", "c"], [0, 2]);
// => ["b"]
```

### `arr`
- 类型：`Array`

### `indexes`
- 类型：`Number | Array`
- 说明：待删除的数组索引值，可以是单个索引，也可以是一串索引组成的数组

### `originArray`
- 类型：`Array`
- 说明：返回原始数组



## `.delete(arr, item, [deep=false]): originArray`
根据数组元素从数组中删除，返回原数组。
```js
array.delete(["a", "b", "c", "a", "b", "c"], "a");
// => ["b", "c", "a", "b", "c"]

array.delete(["a", "b", "c", "a", "b", "c"], "a", true);
// => ["b", "c", "b", "c"]
```

### `arr`
- 类型：`Array`

### `item`
- 类型：`*`
- 说明：待删除的值

### `deep`
- 类型：`Boolean`
- 说明：是否深度删除，即完整遍历整个数组，相同匹配的项
- 默认：`false`

### `originArray`
- 类型：`Array`
- 说明：返回原始数组



## `.range(start, end): rangedArray`
根据起始、终止值返回一个由数字组成的范围数组。
```js
array.range(10, 13);
// => [10, 11, 12, 13]
```

### `start`
- 类型：`Number`
- 说明：起始值

### `end`
- 类型：`Number`
- 说明：终止值，必须大于起始值

### `rangedArray`
- 类型：`Array`
- 说明：返回一个新数组





# Dependencies
{{ dependencies }}


# Reference
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array>

