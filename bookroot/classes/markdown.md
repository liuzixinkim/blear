# Introduction
{{ introduction }}





# Example
```js
var Markdown = require('blear.classes.markdown');
```

自定义 markdown 渲染器。



# Static
## `.defaults`
默认配置。

### `.defaults.gfm`
- 类型：`Boolean`
- 说明：是否为 github 风格，参考 <https://help.github.com/articles/github-flavored-markdown>
- 默认：`true`

### `.defaults.tables`
- 类型：`Boolean`
- 说明：是否显示表格
- 默认：`true`

### `.defaults.breaks`
- 类型：`Boolean`
- 说明：是否显示断行（是否在断行文字后面添加换行符）
- 默认：`false`

### `.defaults.pedantic`
- 类型：`Boolean`
- 说明：是否非完整匹配模式
- 默认：`false`

### `.defaults.sanitize`
- 类型：`Boolean`
- 说明：是否过滤 HTML
- 默认：`false`

### `.defaults.smartLists`
- 类型：`Boolean`
- 说明：是否智能列表
- 默认：`true`

### `.defaults.smartypants`
- 类型：`Boolean`
- 说明：是否智能修正模式
- 默认：`true`

### `.defaults.langPrefix`
- 类型：`String`
- 说明：pre 语言前缀
- 默认：`lang-`

## `.marked`
导出 marked 原始对象，详细参考底部引用地址。


# `new Markdown(options)`
本身是一个方法

## `options`
默认值为 `.defaults`。



# Prototype
## `#renderer(type, renderer): this`
自定义渲染模式。支持：

### `"code", (code, lang, escaped)`
定义代码块的渲染。如（以下类似，不多举例）：
```js
md.renderer('code', function(code, lang, escaped) {
    var options = this.options;
    code = escaped ? code : customerEscape(code);
    return '<pre ' + options.langPrefix + lang + '><code>' + code + '</code></pre>';
});
```

#### `code`
- 类型：`String`
- 说明：代码

#### `lang`
- 类型：`String`
- 说明：语言

#### `escaped`
- 类型：`Boolean`
- 说明：是否已被转义


### `"blockquote", (quote)`
定义引用块的渲染。

#### `quote`
- 类型：`String`
- 说明：引用的内容



### `"html", (html)`
定义原始 html 的渲染。

#### `html`
- 类型：`String`
- 说明：html 内容




### `"heading", (text, level, raw)`
定义标题的渲染。

#### text
- 类型：`String`
- 说明：文本

#### level
- 类型：`Number`
- 说明：级别，1-6

#### raw
- 类型：`String`
- 说明：原始字符串



### `"hr", ()`
定义分割线渲染。无参数。


### `"list", (body, ordered)`
定义列表渲染。

#### body
- 类型：`String`
- 说明：文本

#### ordered
- 类型：`Boolean`
- 说明：是否为有序列表


### `"listitem", (text)`
定义列表项目渲染。
#### `text`
- 类型：`String`
- 说明：文本


### `"paragraph", (text)`
定义段落渲染。
#### `text`
- 类型：`String`
- 说明：文本



### `"table", (header, body)`
定义表格渲染。
#### `header`
- 类型：`String`
- 说明：表格头部

#### `body`
- 类型：`String`
- 说明：表格内容



### `"tablerow", (content)`
定义表格行渲染。
#### `content`
- 类型：`String`
- 说明：表格行内容




### `"tablecell", (content, flags)`
定义表格单元格渲染。
#### `content`
- 类型：`String`
- 说明：表格单元格内容

#### `flags`
- 类型：`Object`
- 说明：表格单元格标记

#### `flags.header`
- 类型：`Boolean`
- 说明：是否为表格头部单元格

#### `flags.align`
- 类型：`String`
- 说明：表格单元格对齐方式





### `"strong", (text)`
定义着重标签渲染。
#### `text`
- 类型：`String`
- 说明：文本




### `"em", (text)`
定义倾斜标签渲染。
#### `text`
- 类型：`String`
- 说明：文本



### `"codespan", (text)`
定义行内代码渲染。
#### `text`
- 类型：`String`
- 说明：文本





### `"br", ()`
定义换行符渲染。




### `"del", (text)`
定义倾斜标签渲染。
#### `text`
- 类型：`String`
- 说明：文本




### `"link", (href, title, text, auto)`
定义链接渲染。

#### `href`
- 类型：`String`
- 说明：链接地址

#### `title`
- 类型：`String`
- 说明：链接标题

#### `text`
- 类型：`String`
- 说明：链接文本

#### `auto`
- 类型：`Boolean`
- 说明：是否为自动链接（使用 `<` 和 `>` 包裹的链接）



### `"image", (href, title, text)`
定义图片渲染。

#### `href`
- 类型：`String`
- 说明：图片地址，可以使用尺寸标记，如：
    - `![自动尺寸](http://img.com/abc.png)`
    - `![自定义宽度](http://img.com/abc.png =100)`
    - `![自定义宽高](http://img.com/abc.png =100x100)`
    - `![自定义宽高](http://img.com/abc.png =100X100)`

![](https://image.japaholic.com/article/images/2015/01/E1419490230135_1.jpg)
自动宽度

![](https://image.japaholic.com/article/images/2015/01/E1419490230135_1.jpg =200)
=200

![](https://image.japaholic.com/article/images/2015/01/E1419490230135_1.jpg =100x100)
=100x100

#### `title`
- 类型：`String`
- 说明：图片标题

#### `text`
- 类型：`String`
- 说明：图片文本




### `"text", (text)`
定义原始文本的渲染。

#### `text`
- 类型：`String`
- 说明：文本内容



## `#render(markdown): html`
渲染 markdown 为 html。

### `markdown`
- 类型：`String`
- 说明：markdown 内容

### `html`
- 类型：`String`
- 说明：html 内容



# Events






# Dependencies
{{ dependencies }}





# Reference
- marked：<https://github.com/chjj/marked>

