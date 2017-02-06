# Introduction
{{ introduction }}





# Example
```js
var Linkage = require('blear.classes.linkage');
```

数据联动，常用于省市区地址选择器。对数据格式无要求。



# Static
## `.defaults`
默认配置。

### `.defaults.cacheable`
- 类型：`Boolean`
- 说明：是否保留数据缓存，缓存即获取同一个列表时，则从内存中获取，如果有的话
- 默认：`true`

### `.defaults.length`
- 类型：`Number`
- 说明：联动数量
- 默认：`1`



# `new Linkage(options)`
实例化一个数据联动类。
## `options`
默认为 `.defaults`。



# Prototype
原型属性、方法

## `#ready(callback): this`
联动数据准备完毕（获取第一级数据）后回调。

### `callback`
- 类型：`Function`
- 说明：回调


## `#change(index, value, [done]): this`
改变某一级的值，此时会联动影响后面所有级联的数据。如：
```text
【国】【省】【市】【县】
      ^^^
       |----- 如果改变省份，则【市】【县】也会跟着变化
```

### `index`
- 类型：`Number`
- 说明：索引值

### `value`
- 类型：`String | Number`
- 说明：改变值

### `done`
- 类型：`Function`
- 说明：执行变化完成后回调
- 默认：`undefined`



## `#getValue(): value`
获取当前选中的值。
```js
linkage.getValue();
// => ['浙江省', '杭州市', '滨江区']
```

### `value`
- 类型：`Array`
- 说明：数组值



## `#setValue(value, [done]): this`
获取当前选中的值。
```js
linkage.setValue(['浙江省', '杭州市', '滨江区']);
```

### `value`
- 类型：`Array`
- 说明：数组值





# Events
## `getData(index, parent, callback(list))`
获取数据时触发。
### `index`
- 类型：`Number`
- 说明：索引值

### `parent`
- 类型：`String`
- 说明：上一级值

### `callback`
- 类型：`Function`
- 说明：回调

#### `callback: list`
- 类型：`Array`
- 说明：值数组


## `changeList(index, list)`
列表数据变化时触发。
### `index`
- 类型：`Number`
- 说明：索引值

### `list`
- 类型：`Array`
- 说明：数组

## `changeValue(index, value)`
联动选值变化时触发。
### `index`
- 类型：`Number`
- 说明：索引值

### `value`
- 类型：`String`
- 说明：变化后的值

## `ready()`
首次准备完毕后触发。






# Dependencies
{{ dependencies }}






