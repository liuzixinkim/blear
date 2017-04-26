# Introduction
{{ introduction }}





# Example
```js
var hashbang = require('blear.core.hashbang');
```




# Static
静态属性、方法


## `.set(path, [split]): hash`
设置 hash。

```js
hashbang.set('/a/b/c?d=e&f=g', '!');
// => "#!/a/b/c?d=e&f=g"
```

### `path`
- 类型：`String`
- 说明：设置的路径。

### `split`
- 类型：`String`
- 说明：分隔符
- 默认：`""`

### `hash`
- 类型：`String`
- 说明：待设置的 hash 字符串


## `.get(): path`
获取当前的 hashbang。

```js
// "#!/a/b/c?d=e&f=g"
hashbang.get();
// => "/a/b/c?d=e&f=g"
```

### `path`
- 类型：`String`
- 说明：返回当前的 hashbang 信息


## `.parse(): ret`
解析当前的 hashbang。

```js
// "#!/a/b/c?d=e&f=g"
hashbang.parse();
// => {
//    href: '/a/b/c?d=e&f=g',
//    pathname: '/a/b/c',
//    query: {
//        d: 'e'
//        f: 'g'
//    }
// }
```

### `ret`
- 类型：`Object`
- 说明：解析数据

### `ret.href`
- 类型：`String`
- 说明：原始路径

### `ret.path`
- 类型：`String`
- 说明：原始路径

### `ret.pathname`
- 类型：`String`
- 说明：路径名称

### `ret.querystring`
- 类型：`String`
- 说明：查询参数字符串

### `ret.query`
- 类型：`Object`
- 说明：查询参数对象


## `.getPathname(): pathname`
获取当前 hashbang 的路径名称。
### `pathname`
- 类型：`String`
- 说明：路径名称


## `.getQuery([key]): query`
获取当前 hashbang 的查询参数。
### `key`
- 类型：`String`
- 说明：参数名称，无名称时返回参数对象
- 默认：`undefined`

### `query`
- 类型：`String | Object`
- 说明：参数值或参数对象


## `.setPathname(pathname, [split]): hash`
设置当前 hashbang 的路径名称。
### `pathname`
- 类型：`String`
- 说明：路径名称

### `split`
- 类型：`String`
- 说明：分隔符
- 默认：`""`

### `hash`
- 类型：`String`
- 说明：待设置的 hash 字符串


## `.setQuery(key, [val], [split]): hash`
设置当前 hashbang 的查询参数。
### `key`
- 类型：`String | Object`
- 说明：参数名称或参数对象

### `val`
- 类型：`String`
- 说明：参数值

### `split`
- 类型：`String`
- 说明：分隔符
- 默认：`""`

### `hash`
- 类型：`String`
- 说明：待设置的 hash 字符串



## `.removeQuery(key, [split]): hash`
移除当前 hashbang 的查询参数。
### `key`
- 类型：`String`
- 说明：参数名称

### `split`
- 类型：`String`
- 说明：分隔符
- 默认：`""`

### `hash`
- 类型：`String`
- 说明：待设置的 hash 字符串




# Dependencies
{{ dependencies }}





# Reference
无。

