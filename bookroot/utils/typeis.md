# Description
{{description}}


# Example
```js
var typeis = require('blear.utils.typeis');
```

# Function
获取当前对象类型

```js
typeis(any);
```

## any
- 类型：`*`
- 说明：任意对象

## 返回值
- 类型：`String`
- 说明：对象类型，有：
    - `undefined`
    - `window`
    - `document`
    - `null`
    - `nan`
    - `element`
    - `arguments`
    - `number`
    - `string`
    - `boolean`
    - `function`
    - `symbol`
    - `array`
    - `regexp`
    - `error`
    - `date`


# Static

## String
判断是否为 string

```js
typeis.String(any);
```

### any
- 类型：`*`
- 说明：任意对象

## Number
判断是否为 number

```js
typeis.Number(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Array
判断是否为 nrray

```js
typeis.Array(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Object
判断是否为 object

```js
typeis.Object(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Function
判断是否为 function

```js
typeis.Function(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Null
判断是否为 null

```js
typeis.Null(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Undefined
判断是否为 undefined

```js
typeis.Undefined(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Regexp
判断是否为 regexp

```js
typeis.Regexp(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Boolean
判断是否为 boolean

```js
typeis.Boolean(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Window
判断是否为 window

```js
typeis.Window(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Document
判断是否为 document

```js
typeis.Document(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Element
判断是否为 element

```js
typeis.Element(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Nan
判断是否为 nan

```js
typeis.Nan(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Arguments
判断是否为 arguments

```js
typeis.Arguments(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Date
判断是否为 date

```js
typeis.Date(any);
```
### any
- 类型：`*`
- 说明：任意对象


## Error
判断是否为 error

```js
typeis.Error(any);
```
### any
- 类型：`*`
- 说明：任意对象



# Dependencies
{{dependencies}}


# More
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString>
