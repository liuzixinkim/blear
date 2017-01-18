# Introduction
{{ introduction }}





# Example
```js
var url = require('blear.utils.url');
```


# Static
## `.parse(url): result`
解析 URL 为对象信息。

```js
var ret = url.parse('http://aa.bb.cc:9090/dd/ee/ff/?gg=hh&ii=jj&gg=kk#!/ll/mm/nn/?oo=pp&qq=rr&oo=ss#tt');

ret = {
    "href": "http://aa.bb.cc:9090/dd/ee/ff/?gg=hh&ii=jj&gg=kk#!/ll/mm/nn/?oo=pp&qq=rr&oo=ss#tt",
    "base": "http://aa.bb.cc:9090",
    "protocol": "http:",
    "host": "aa.bb.cc:9090",
    "hostname": "aa.bb.cc",
    "port": "9090",
    "pathname": "/dd/ee/ff/",
    "search": "?gg=hh&ii=jj&gg=kk",
    "hash": "#!/ll/mm/nn/?oo=pp&qq=rr&oo=ss#tt",
    "hashstring": "#!/ll/mm/nn/?oo=pp&qq=rr&oo=ss#tt",
    "querystring": "gg=hh&ii=jj&gg=kk",
    "query": {
      "gg": [
          "hh",
          "kk"
      ],
      "ii": "jj"
    },
    "origin": "http://aa.bb.cc:9090",
    "statical": true
};
```

### `url`
- 类型：`String`
- 说明：url 字符串

### `result`
- 类型：`Object`
- 说明：字段信息

#### `result.href`
- 类型：`String`
- 说明：原始 url

#### `result.base`
- 类型：`String`
- 说明：协议 + 域名 + 端口

#### `result.protocol`
- 类型：`String`
- 说明：协议

#### `result.host`
- 类型：`String`
- 说明：域名 + 端口

#### `result.hostname`
- 类型：`String`
- 说明：域名

#### `result.port`
- 类型：`String`
- 说明：端口

#### `result.pathname`
- 类型：`String`
- 说明：路径

#### `result.search`
- 类型：`String`
- 说明：查询字符串，包括 `?`

#### `result.hash`
- 类型：`String`
- 说明：哈希字符串

#### `result.hashstring`
- 类型：`String`
- 说明：哈希字符串，同 `result.hash`

#### `result.querystring`
- 类型：`String`
- 说明：查询字符串，不包括 `?`

#### `result.query`
- 类型：`Object`
- 说明：查询信息，对 `querystring` 的解析结果，详细参考 [blear.utils.querystring](/utils/querystring.md)。

#### `result.origin`
- 类型：`String`
- 说明：协议 + 域名 + 端口，同 `result.base`

#### `result.statical`
- 类型：`Boolean`
- 说明：是否静态，我们认为包含协议或自动协议的 url 都为静态的



## `.stringify(result): url`
将对象转换为 url。

```js
url.stringify({
    pathname: '/a/b.c'
});
// => "/a/b.c"
```

### `result`
- 类型：`Object`
- 说明：至少需要包括 `pathname`

### `url`
- 类型：`String`
- 说明：转换后的 url



## `.matchPath(url, rule, [options]): result`
url 路径匹配。
```js
url.matchPath('/user/123', '/user/*');
// => {}

url.matchPath('/user/123/page/456', '/user/**');
// => {}

url.matchPath('/user/123/page/456', '/user/:userId/page/:pageNo');
// => {
//    userId: "123",
//    pageNo: "456"
// }
```

### `url`
- 类型：`String`
- 说明：待匹配的 url

### `rule`
- 类型：`String`
- 说明：匹配规则
    - `*`：匹配一级路径
    - `**`：匹配多级路径
    - `:param`：匹配路径表达式

### `options`
- 类型：`Object`
- 说明：匹配配置

### `options.ignoreCase`
- 类型：`Boolean`
- 说明：是否忽略大小写
- 默认：`false`

### `options.strict`
- 类型：`Boolean`
- 说明：是否严格模式，严格模式即 `/a/b !== /a/b/` 
- 默认：`false`

### `result`
- 类型：`Object`
- 说明：匹配失败返回 `null`



## `.setQuery(url1, key, [val]): url2`
设置查询字符串。

```js
url.setQuery('/', 'a', 1);
// => "/?a=1"

url.setQuery('/', {a: 1, b: 2});
// => "/?a=1&b=2"
```

### `url1`
- 类型：`String`
- 说明：设置前的 url

### `key`
- 类型：`String | Object`
- 说明：可以是单个 `key`，也可以是多个 `key` 的对象集合

### `val`
- 类型：`String`
- 说明：如果 `key` 是一个对象，则省略 `val`；如果是单个 `key`，则需要填值

### `url2`
- 类型：`String`
- 说明：设置后的 url


## `.removeQuery(url1, key): url2`
从 url 上移除指定查询字段。

```js
url.removeQuery('/?a=1&b=2', 'a');
// => "/?a=1"

url.removeQuery('/?a=1&b=2', ['a', 'b']);
// => "/?"
```


### `url1`
- 类型：`String`
- 说明：设置前的 url

### `key`
- 类型：`String | Array`
- 说明：可以是单个 `key`，也可以是多个 `key` 的数组集合

### `url2`
- 类型：`String`
- 说明：设置后的 url


## `.qrcode(options): url`
根据参数生成二维码 URL 地址。

### `options`
- 类型：`String | Object`
- 说明：需要转换为二维码地址的文本或描述配置

### `options.bg`
- 类型：`String`
- 说明：背景色
- 默认：`#fff`

### `options.fg`
- 类型：`String`
- 说明：前景色
- 默认：`#000`

### `options.gc`
- 类型：`String`
- 说明：渐变色
- 默认：`#000`

### `options.pt`
- 类型：`String`
- 说明：定位点外框颜色
- 默认：`#000`

### `options.ipt`
- 类型：`String`
- 说明：定位点内部验收
- 默认：`#000`

### `options.el`
- 类型：`String`
- 说明：纠错等级，有`h`、`q`、`m` 和 `l` 四级
- 默认：`m`

### `options.w`
- 类型：`String`
- 说明：内容尺寸
- 默认：`300`

### `options.m`
- 类型：`String`
- 说明：边框尺寸
- 默认：`0`

### `options.logo`
- 类型：`String`
- 说明：LOGO 地址
- 默认：``

### `options.text`
- 类型：`String`
- 说明：文本
- 默认：``

### `url`
- 类型：`String`
- 说明：二维码地址



## `.resolve(from, ...to): url`
合并并解决 url。更多参考 [blear.utils.path](/utils/path.md)。

```js
url.resolve('http://example.com/a/b/c/d', 'e/f/g');
// => "http://example.com/a/b/c/e/f/g"
```


### `from`
- 类型：`String`
- 说明：源 url

### `...to`
- 类型：`String`
- 说明：目标 url，可以是多个，多个的话会连续合并

### `url`
- 类型：`String`
- 说明：合并后的 url



## `.join(from, ...to): url`
仅合并 url。更多参考 [blear.utils.path](/utils/path.md)。

```js
url.join('http://example.com/a/b/c/d', 'e/f/g');
// => "http://example.com/a/b/c/d/e/f/g"
```

### `from`
- 类型：`String`
- 说明：源 url

### `...to`
- 类型：`String`
- 说明：目标 url，可以是多个，多个的话会连续合并

### `url`
- 类型：`String`
- 说明：合并后的 url





# Dependencies
{{ dependencies }}





# Reference
- 二维码开放平台：<http://www.topscan.com/pingtai/>
- URI 百度百科：<http://baike.baidu.com/item/URI> 
- URL 百度百科：<http://baike.baidu.com/item/url> 
