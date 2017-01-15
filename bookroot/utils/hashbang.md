# Introduction
{{ introduction }}





# Example
hashbang 其实是一个 hashstring `#`与分隔符之后路径

```js
var hashang = require('blear.utils.hashbang');
```




# Static
## stringify
将 path 转换为符合 hashbang 的 hashstring
```js
hashbang.stringify(path, [split]);

hashbang.stringify('/a/b?x=1&y=2#zzz', '!');
// => #!/a/b?x=1&y=2#zzz
```

### hashbang
- 类型：`String`
- 说明：待转换的路径

### split
- 类型：`String`
- 说明：分隔符
- 默认：为空

### 返回值
- 类型：`String`


## parse
解析 hashstring 为 hashbang。
```js
hashbang.parse(hashstring);

hashbang.parse('###!!!/a/b');
// => /a/b
```

### hashstring
- 类型：`String`
- 说明：包含 `#` 的 hash 字符串

### 返回值
- 类型：`String`
- 说明：路径



## is
判断一个 hash 字符串是否为 hashbang
```js
hashbang.is(hashstring);

hashbang.is('#!/a/b');
// => true
```

### hashstring
- 类型：`String`

### 返回值
- 类型：`Boolean`




# Dependencies
{{ dependencies }}





# More
- <https://zh.wikipedia.org/wiki/Shebang>

