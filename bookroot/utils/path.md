# Introduction
{{ introduction }}





# Example
```js
var path = require('blear.utils.path');
```





# Static
## normalize
路径标准化。
```js
path.normalize(path);

path.normalize('/a/b/c/../d/');
// => /a/b/d/
```

### path
- 类型：`String`
- 说明：待标准化的路径

### 返回值
- 类型：`String`
- 说明：标准化后的路径




## isStatic
判断路径是否为静态路径。
```js
path.isStatic(path);

path.isStatic('http://a.com/b');
path.isStatic('https://a.com/b');
path.isStatic('//a.com/b');
// => true
```

### path
- 类型：`String`
- 说明：路径

### 返回值
- 类型：`Boolean`
- 说明：含有协议或者自动协议的路径都属于静态的



## isAbsolute
判断路径是否为绝对路径。
```js
path.isAbsolute(path);

path.isAbsolute('/a');
// => true
```

### path
- 类型：`String`
- 说明：路径

### 返回值
- 类型：`Boolean`
- 说明：以单个 `/` 开头的路径都为绝对路径




## isRelative
判断路径是否为相对路径。
```js
path.isRelative(path);

path.isRelative('./a');
path.isRelative('../a');
path.isRelative('a');
// => true
```

### path
- 类型：`String`
- 说明：路径

### 返回值
- 类型：`Boolean`
- 说明：以单个 `./` 或 `../` 或其他非路径分隔符开头的路径都为相对路径




## dirname
获取路径目录，我们认为路径以 `/` 结尾的都为目录。
```js
path.dirname(path);

path.dirname('/a/b/c');
// => "a/b/"

path.dirname('/a/b/c？');
// => "a/b/c/"
```

### path
- 类型：`String`
- 说明：路径

### 返回值
- 类型：`String`
- 说明：目录路径。



## resolve
解决路径合并关系。

```js
path.resolve(from, ...to);

path.resolve('/a/b', 'c/d');
// => "/a/c/d"
```

### from
- 类型：`String`
- 说明：参考路径

### ...to
- 类型：`String`
- 说明：目标路径，可以是多个，将会依次合并

### 返回值
- 类型：`String`
- 说明：处理之后的路径




## join
路径合并，与 `resolve` 之间的差别是：join 不会区分路径是否目录，差别在于例子。

```js
path.join(from, ...to);

path.join('/a/b', 'c/d');
// => "/a/b/c/d"
```

### from
- 类型：`String`
- 说明：参考路径

### ...to
- 类型：`String`
- 说明：目标路径，可以是多个，将会依次合并

### 返回值
- 类型：`String`
- 说明：处理之后的路径







# Dependencies
{{ dependencies }}


