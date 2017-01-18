# Introduction
{{ introduction }}


# Example
```js
var typeis = require('blear.utils.typeis');
```

# `typeis(any): type`
获取当前对象类型

```js
typeis('');
// => "string"

typeis();
// => "undefined"
```

## `any`
- 类型：`*`
- 说明：任意对象

## `type`
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

## `.String(any): type`
判断是否为 `String` 实例。

```js
typeis.String('');
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Number(any): type`
判断是否为 `Number` 实例。

```js
typeis.Number(1);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Array(any): type`
判断是否为 `Array` 实例。


```js
typeis.Array([]);
// => true
```


### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Object(any): type`
判断是否为 `Object` 实例。

```js
typeis.Object({});
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Function(any): type`
判断是否为 `Function` 实例。

```js
typeis.Function(function(){});
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Null(any): type`
判断是否为 `null`

```js
typeis.Function(null);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Undefined(any): type`
判断是否为 `undefined`。

```js
typeis.Undefined();
// => true
```

如果要判断一个变量是否为 `undefined`，安全的做法是使用 `typeof`。

```js
typeis(undefinedVarible) === 'undefined';
// 将会抛错，因为 `undefinedVarible` 未定义

typeof undefinedVarible === 'undefined';
// 不会抛错
```


### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Regexp(any): type`
判断是否为 `RegExp` 实例。

```js
typeis.Regexp(/a/);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Boolean(any): type`
判断是否为 `Boolean` 实例。

```js
typeis.Boolean(true);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Window(any): type`
判断是否为 `window`。

```js
typeis.Window(window.window);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Document(any): type`
判断是否为 `document`。

```js
typeis.Document(window.document);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Element(any): type`
判断是否为 `HTMLElement` 实例。

```js
typeis.Element(document.createElement('div'));
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Nan(any): type`
判断是否为 `NaN`，别名`.NaN(any): type`。

```js
typeis.Nan(NaN);
typeis.NaN(NaN);
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Arguments(any): type`
判断是否为 `arguments`

```js
(function() {
    typeis.Arguments(arguments);
    // => true
}());
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Date(any): type`
判断是否为 `Date` 实例。

```js
typeis.Date(new Date());
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`



## `.Error(any): type`
判断是否为 `Error` 实例。

```js
typeis.Error(new Error(''));
// => true
```

### `any`
- 类型：`*`
- 说明：任意对象

### `type`
- 类型：`Boolean`
- 说明：如果符合，则返回 `true`




# Dependencies
{{ dependencies }}


# Reference
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString>
