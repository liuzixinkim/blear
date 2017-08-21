# Introduction
{{ introduction }}





# Example
```js
var path = require('blear.node.path');
```




# Static
## `.basename(path): basename`
获取路径的基本名称（除去扩展名）。

```js
path.basename('path/to/file.name.ext');
// => "file.name"
```

### `path`
- 类型：`String`
- 说明：路径

### `basename`
- 类型：`String`
- 说明：基本名称


## `.extname(path): extname`
获取路径的扩展名。

```js
path.extname('path/to/file.name.ext');
// => ".ext"
```

### `path`
- 类型：`String`
- 说明：路径

### `extname`
- 类型：`String`
- 说明：扩展名





## `.dirname(path): dirname`
获取路径的目录。
```js
path.dirname('path/to/file.name.ext');
// => "path/to/"
```

### `path`
- 类型：`String`
- 说明：路径

### `dirname`
- 类型：`String`
- 说明：目录


## `.relative(from, to): relative`
路径切换距离。
```js
path.relative('path/to/a/b/c', 'path/to/a');
// => "../../"
```

### `from`
- 类型：`String`
- 说明：起始路径

### `to`
- 类型：`String`
- 说明：终点路径

### `relative`
- 类型：`String`
- 说明：切换距离



## `.resolve(point...): path`
路径合并，如果是相对路径，则会添加上当前工作目录（`process.cwd()`）。

```js
path.resolve('path/to/', '123');
// => "/Users/balabala/path/to/123"

path.resolve('/path/to/', '123');
// => "/path/to/123"

path.resolve('/path/to/', '123', '456/789');
// => "/path/to/123/456/789"
```

### `point`
- 类型：`String`
- 说明：路径点

### `path`
- 类型：`String`
- 说明：合并后的路径




## `.join(point...): path`
路径合并。

```js
path.join('path/to/', '123');
// => "/Users/balabala/path/to/123"

path.join('/path/to/', '123');
// => "/path/to/123"

path.join('/path/to/', '123', '456/789');
// => "/path/to/123/456/789"
```

### `point`
- 类型：`String`
- 说明：路径点

### `path`
- 类型：`String`
- 说明：合并后的路径




## `.normalize(path1): path2`
路径标准化处理。

```js
path.normalize('path/to/');
// => "path/to/"

path.normalize('path/to\\def');
// => "path/to/def"

path.normalize('path/to\\def//123');
// => "path/to/def/123"
```

### `path1`
- 类型：`String`
- 说明：标准化处理之前的路径

### `path`
- 类型：`String`
- 说明：标准化处理之后的路径


## `.glob(globArray, options): files`
glob 规则匹配。

```js
path.glob('path/to/**');
path.glob([
    'path/to/*.jpg',
    'path/to/*.png'
], {
    progress: function(indexGlob, indexFile, file) {
        // 进度
    }
});
// => 
// [
//    [
//        "path/to/a.jpg"
//        "path/to/b.jpg"
//    ],
//    [
//        "path/to/a.png"
//        "path/to/b.png"
//    ]
// ]
```

### `globArray`
- 类型：`String | Array`
- 说明：glob 规则

### `options`
- 类型：`Object`
- 说明：匹配配置，默认为：
```js
默认 = {
    // 起始目录（工作目录）
    srcDirname: null,
    globOptions: {
        // 是否匹配点开头的文件
        dot: false,
        
        // 是否不匹配目录
        nodir: true
    },
    // 进度（方法）
    progress: null
};
```

### `files`
- 类型：`Array`
- 说明：文件路径数组



## `.isDirectory(path): bool`
是否为目录。
### `path`
- 类型：`String`
- 说明：路径

### `bool`
- 类型：`Boolean`
- 说明：是否为目录



## `.isFile(path): bool`
是否为文件。
### `path`
- 类型：`String`
- 说明：路径

### `bool`
- 类型：`Boolean`
- 说明：是否为文件



## `.isExist(path): bool`
是否存在（不区分目录或者文件）。

### `path`
- 类型：`String`
- 说明：路径

### `bool`
- 类型：`Boolean`
- 说明：是否存在



# Dependencies
{{ dependencies }}





# Reference
无。

