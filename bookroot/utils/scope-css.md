# Introduction
{{ introduction }}





# Example
```js
var scopeCSS = require('blear.utils.scope-css');
```





# `scopeCSS(css, scope): scopedCSS`
将 css 添加上作用域，这样的话，css 就可以不污染其他部分，常用于单页面架构、组件架构。

```js
scopeCSS('.header{width: 100px;}', '#some-page');
// => "#some-page .header{width: 100px;}"
```


## css
- 类型：`String`
- 说明：待转换的 css

## scope
- 类型：`String`
- 说明：作用域，通常是一个 id 选择器

## scopedCSS
- 类型：`String`
- 说明：经过处理的 css



# Dependencies
{{ dependencies }}





# Reference
- scope css：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope>
- 参考：<https://github.com/thomaspark/scoper>
- 参考：<https://github.com/nathanmacinnes/scoped-style>
