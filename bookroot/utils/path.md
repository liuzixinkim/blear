# Introduction
{{ introduction }}





# Example
```js
var path = require('blear.utils.path');
```





# Static
## `.normalize(path): normalizedPath`
路径标准化。
```js
path.normalize('/a/b/c/../d/');
// => /a/b/d/
```

### `path`
- 类型：`String`
- 说明：待标准化的路径

### `normalizedPath`
- 类型：`String`
- 说明：标准化后的路径




## `.isStatic(path): isStatic`
判断路径是否为静态路径。
```js
path.isStatic('http://a.com/b');
path.isStatic('https://a.com/b');
path.isStatic('//a.com/b');
// => true
```

### `path`
- 类型：`String`
- 说明：路径

### isStatic
- 类型：`Boolean`
- 说明：含有协议或者自动协议的路径都属于静态的



## `.isAbsolute(path): isAbsolute`
判断路径是否为绝对路径。
```js
path.isAbsolute('/a');
// => true
```

### `path`
- 类型：`String`
- 说明：路径

### `isAbsolute`
- 类型：`Boolean`
- 说明：以单个 `/` 开头的路径都为绝对路径




## `.isRelative(path): isRelative`
判断路径是否为相对路径。
```js
path.isRelative('./a');
path.isRelative('../a');
path.isRelative('a');
// => true
```

### `path`
- 类型：`String`
- 说明：路径

### `isRelative`
- 类型：`Boolean`
- 说明：以单个 `./` 或 `../` 或其他非路径分隔符开头的路径都为相对路径




## `.dirname(path): dirname`
获取路径目录，我们认为路径以 `/` 结尾的都为目录。
```js
path.dirname('/a/b/c');
// => "a/b/"

path.dirname('/a/b/c？');
// => "a/b/c/"
```

### `path`
- 类型：`String`
- 说明：路径

### `dirname`
- 类型：`String`
- 说明：目录路径。



## `.resolve(from, ...to): resolvedPath`
解决路径合并关系。

```js
path.resolve('/a/b', 'c/d');
// => "/a/c/d"
```

### `from`
- 类型：`String`
- 说明：参考路径

### `...to`
- 类型：`String`
- 说明：目标路径，可以是多个，将会依次合并

### `resolvedPath`
- 类型：`String`
- 说明：处理之后的路径




## `.join(from, ...to): joinedPath`
路径合并，与 `resolve` 之间的差别是：join 不会区分路径是否目录，差别在于例子。

```js
path.join('/a/b', 'c/d');
// => "/a/b/c/d"
```

### `from`
- 类型：`String`
- 说明：参考路径

### `...to`
- 类型：`String`
- 说明：目标路径，可以是多个，将会依次合并

### `joinedPath`
- 类型：`String`
- 说明：处理之后的路径







# Dependencies
{{ dependencies }}


