# Introduction
{{ introduction }}





# Example
hashbang 其实是一个 hashstring `#`与分隔符之后路径

```js
var hashang = require('blear.utils.hashbang');
```




# Static
## `.stringify(path, [split=""]): hash`
将 path 转换为符合 hashbang 的 hashstring
```js
hashbang.stringify('/a/b?x=1&y=2#zzz', '!');
// => #!/a/b?x=1&y=2#zzz
```

### `hashbang`
- 类型：`String`
- 说明：待转换的路径

### `split`
- 类型：`String`
- 说明：分隔符
- 默认：为空

### `hash`
- 类型：`String`


## `.parse(hashstring): path`
解析 hashstring 为 hashbang。
```js
hashbang.parse('###!!!/a/b');
// => /a/b
```

### `hashstring`
- 类型：`String`
- 说明：包含 `#` 的 hash 字符串

### `path`
- 类型：`String`
- 说明：路径



## `.is(hashstring): isHashbang`
判断一个 hash 字符串是否为 hashbang
```js
hashbang.is('#!/a/b');
// => true
```

### `hashstring`
- 类型：`String`

### `isHashbang`
- 类型：`Boolean`




# Dependencies
{{ dependencies }}





# Reference
- <https://zh.wikipedia.org/wiki/Shebang>

