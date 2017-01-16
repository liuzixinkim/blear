# Introduction
{{ introduction }}


# Example
```js
var collection = require('blear.utils.collection');
```


# Static
静态方法依赖于 [blear.utils.array](/utils/array.md)、[blear.utils.object](/utils/object.md)。

## `.each(collection, callback(keyIndex, val)): undefined`
遍历对象或数组（或类数组）。

### `collection`
- 类型：`Object、Array`
- 说明：集合

### `callback`
- 类型：`Function`

#### `callback: this`
- 类型：`this`
- 说明：指向集合`coll`

#### `callback: keyIndex`
- 类型：`Number | String`
- 说明：如果集合是对象，则为 `String`，否则为 `Number`

#### `callback: val`
- 类型：`*`
- 说明：遍历值


## `.map(collection, callback(val, keyIndex)): mappedCollection`
包装对象或数组（或类数组）。

### `collection`
- 类型：`Object、Array`
- 说明：集合

### `callback`
- 类型：`Function`
- 说明：返回值将替换遍历值

#### `callback: this`
- 类型：`this`
- 说明：指向集合`coll`

#### `callback: keyIndex`
- 类型：`Number | String`
- 说明：如果集合是对象，则为 `String`，否则为 `Number`

#### `callback: val`
- 类型：`*`
- 说明：遍历值

### `mappedCollection`
- 类型：`Object | Array`
- 说明：根据传入的集合类型，返回一个新的对象或数组



## `.filter(collection, callback): filteredCollection`
过滤对象或数组（或类数组）。

### `collection`
- 类型：`Object、Array`
- 说明：集合

### `callback`
- 类型：`Function`
- 说明：返回 `true` 则该遍历值被筛选

#### `callback: this`
- 类型：`this`
- 说明：指向集合`coll`

#### `callback: keyIndex`
- 类型：`Number | String`
- 说明：如果集合是对象，则为 `String`，否则为 `Number`

#### `callback: val`
- 类型：`*`
- 说明：遍历值

### `filteredCollection`
- 类型：`Object | Array`
- 说明：根据传入的集合类型，返回一个新的对象或数组





# Dependencies
{{ dependencies }}


