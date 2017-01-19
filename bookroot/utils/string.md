# Introduction
{{ introduction }}





# Example
```js
var string = require('blear.utils.string');
```







# Static


## `.trim(str): trimStr`
本方法，未来会被删除，请使用 `String.prototype.trim` 代替。


## `.ify(str): ifyStr`
字符化，如果参数 null 或 undefined，则返回空字符串；否则返回 `String(str)` 结果

```js
string.ify();
// => ""

string.ify(null);
// => ""

string.ify(1);
// => "1"
```

### `str`
- 类型：`*`

### `ifyStr`
- 类型：`String`


## `.humprize(str, [upperCaseFirstChar=false]): humprizedStr`
转换分隔符字符串为驼峰形式。
```js
string.humprize('moz-border-radius');
// => "mozBorderRadius"
```

### `str`
- 类型：`String`
- 说明：分隔符类型字符串

### `upperCaseFirstChar`
- 类型：`Boolean`
- 说明：是否大写第一个字符
- 默认：`false`

### `humprizedStr`
- 类型：`String`
- 说明：驼峰形式字符串


## `.separatorize(str, [separator="-"], [lowerCaseFirstChar=false]): separatorizedStr`
转换驼峰字符串为分隔符字符串。
```js
string.separatorize('mozBorderRadius');
// => "moz-border-radius"
```

### `str`
- 类型：`String`
- 说明：驼峰形式字符串

### `separator`
- 类型：`String`
- 说明：分隔符
- 默认：`-`

### `lowerCaseFirstChar`
- 类型：`Boolean`
- 说明：是否小写第一个字符
- 默认：`false`

### `separatorizedStr`
- 类型：`String`
- 说明：分隔符形式字符串


## `.repeat(str, times): repeatStr`
重复生成字符串。
```js
string.repeat('abc', 3);
// => "abcabcabc"
```

### `str`
- 类型：`String`
- 说明：待重复字符串

### `times`
- 类型：`Number`
- 说明：重复次数

### `repeatStr`
- 类型：`String`
- 说明：重复后的字符串


## `.padStart(str, maxLength, [char=" "]): padStr`
左填充字符串。

```js
string.padStart(1, 2, '0');
// => "01"
```


### `str`
- 类型：`String`
- 说明：原始字符串

### `maxLength`
- 类型：`Number`
- 说明：字符串限制的最大长度

### `char`
- 类型：`String`
- 说明：填充的字符
- 默认：` `（1 个空白字符）

### `padStr`
- 类型：`String`
- 说明：填充后的字符串

## `.padEnd(str, maxLength, [char=" "]): padStr`
右填充字符串。

```js
string.padEnd(1, 2, '0');
// => "10"
```


### `str`
- 类型：`String`
- 说明：原始字符串

### `maxLength`
- 类型：`Number`
- 说明：字符串限制的最大长度

### `char`
- 类型：`String`
- 说明：填充的字符
- 默认：` `（1 个空白字符）

### `padStr`
- 类型：`String`
- 说明：填充后的字符串




## `.escapeHTML(str, [all=false]): escapedStr`
编码字符串为 html 实体符。
```js
string.escapeHTML('<b>');
// => "&lt;br&gt;"

string.escapeHTML('<b>', true);
// => "&#60;&#98;&#114;&#62;"
```

### `str`
- 类型：`String`

### `all`
- 类型：`String`
- 说明：是否编码所有字符
- 默认：`false`

### `escapedStr`
- 类型：`String`


## `.unescapeHTML(str): unescapedStr`
反编码 html 实体符为普通字符串。
```js
string.unescapeHTML('&lt;b&gt;');
// => "<b>"
```

### `str`
- 类型：`String`

### `unescapedStr`
- 类型：`String`


## `.escapeRegExp(str): escapeRegExpStr`
转换正则字符串为普通正则字符串。
```js
string.escapeRegExp('/')
// => "\/"
```

### `str`
- 类型：`String`
- 说明：转义字符包括：
    - `.`
    - `*`
    - `+`
    - `?`
    - `^`
    - `=`
    - `!`
    - `:`
    - `$`
    - `{`
    - `}`
    - `(`
    - `)`
    - `|`
    - `[`
    - `]`
    - `/`
    - `\`
    - `-`

### `escapeRegExpStr`
- 类型：`String`



## `.versionThan(v1, v2, [flag=">"]): versionThan`
版本字符比较大小。
```js
string.versionThan('1.2.2.1', '1.2.2.0', '>');
// => true
```

### `v1`
- 类型：`String`
- 说明：版本 1

### `v2`
- 类型：`String`
- 说明：版本 1

### `flag`
- 类型：`String`
- 说明：比较类型，如`>`、`<`
- 默认：`>`

### `versionThan`
- 类型：`Boolean`
- 说明：比较结果



## `.assign(str, ...args, [filter]): assignStr`
分配字符串。
```js
string.assign('Hello ${name}, how are you ${time}?', {
    name: 'Bob',
    time: 'today'
});
// => "Hello Bob, how are you today?"

string.assign('Hello ${1}, how are you ${2}?', 'Bob', 'today');
// => "Hello Bob, how are you today?"

string.assign('Hello ${1}, how are you ${2}?', 'Bob', 'today', function(val) {
    return '[' + val + ']';
});
// => "Hello [Bob] , how are you [today]?"
```

### `str`
- 类型：`String`
- 说明：使用 `${varible}` 表示填充变量

### `...args`
- 类型：`*`
- 说明：待填充的变量，如果是单个参数，以对象形式表示；如果是多个则以数字形式表示（起始值为 1）

### `filter`
- 类型：`Function`
- 说明：对传入的变量进行二次转换
- 默认：`null`

### `assignStr`
- 类型：`String`
- 说明：分配后的字符串




## `.textify(str): textifyStr`
字符串文本化。就是将字符串转换为一个引号包裹的字符串。

```js
string.textify('abc');
// => '"abc"'
```

常用于 Node 端输出字符串到 html 模板引擎内。

```js
// node 
res.render('example.html', {
    summary: 'abc\ndef'
});
```

<div class="split text_center">+</div>

```html
<script>
var nodeSummary = "{{summary}}";
//                 ^^^^^^^^^^^
//                 这里使用 {{ 和 }} 表示插值
// 但是这里最好 html 输出的时候会报错
</script>
```

<div class="split text_center">=</div>

```html
<script>
var nodeSummary = "abc
def";
// ^^^^^^^^^
// 这不是合法字符串表示
</script>
```

而如果在输出前做一次转换就不会出错了：

```js
// node 
res.render('example.html', {
    summary: string.textify('abc\ndef')
});
```

<div class="split text_center">+</div>

```html
<script>
var nodeSummary = "{{summary}}";
//                 ^^^^^^^^^^^
//                 这里使用 {{ 和 }} 表示插值
</script>
```

<div class="split text_center">=</div>

```html
<script>
var nodeSummary = "abc\ndef";
// 这才是合法字符串表示
</script>
```


### `str`
- 类型：`String`

### `textifyStr`
- 类型：`String`
- 说明：引号包裹的字符串



# Dependencies
{{ dependencies }}





# Reference
- 实体符维基百科：<https://zh.wikipedia.org/zh-cn/XML%E4%B8%8EHTML%E5%AD%97%E7%AC%A6%E5%AE%9E%E4%BD%93%E5%BC%95%E7%94%A8%E5%88%97%E8%A1%A8>
- 正则表达式 MDN：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions>
