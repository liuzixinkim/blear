# Introduction
{{ introduction }}





# Example
Template 是一个指令类型模板引擎。

```js
var Template = require('blear.classes.template');

var tpl = new Template('{{ data }}');
var html = tpl.render({
    data: 'Hello'
});
// => "Hello"
```

# 模板语法
## 文本声明
### 变量定义、赋值
```
{{#set abc = 123}}
{{#set abc = 456}}
```

### 忽略编译
```
{{#ignore}}
.....
{{/ignore}}
```

### 判断
```
{{#if exp}}
{{#else if exp}}
{{#else}}
{{/if}}
```

## 循环
```
{{#for index, item in list}}
{{/for}}
```

### 取消编译
```
\\{{exp}} => {{exp}}
```

## 属性指令
属性里的表达式不会进行 escape

### 循环
```
<li @for="val in list"></li>
<li @for="key, val in list"></li>
```

### 循环过滤
```
<li @for="key, val in list" @filter="val > 2"></li>
```

### 循环排序
```
<li @for="key, val in list" @order="val">正序</li>
<li @for="key, val in list" @order="val -1">倒序</li>
```

### 循环选段
```
<li @for="key, val in list" @limit="10">从 0 开始，连续取 10 个</li>
<li @for="key, val in list" @limit="10 20">从 20 开始，连续取 10 个</li>
```

### 判断
```
<li @if="exp"></li>
<li @else-if="exp"></li>
<li @else></li>
```

### 属性
```
@style="font-size: fontSize + 'px'; width: width + 'px'"
@class="class-a: classA, class-b: classB"
```

## 输出
```
转义输出 {{exp}}
原样输出 {{=exp}}
```



# Static
## `.defaults`
默认配置。
### `.defaults.methods`
- 类型：`Object`
- 说明：注入的方法，可以在模板中使用
- 默认：`{}`

### `.defaults.compress`
- 类型：`Boolean`
- 说明：是否压缩输出
- 默认：`true`

### `.defaults.comment`
- 类型：`Boolean`
- 说明：是否保留注释
- 默认：`false`

### `.defaults.debug`
- 类型：`Boolean`
- 说明：是否 debug 模式
- 默认：`false`

## `.method(name, fn)`
添加静态方法（全局）。
```js
Template.method('reverse', function(value) {
    return value.split('').reverse().join('');
});

new Template('{{data}}').render({data: 'abc'});
// => "cba"
```

# `new Template(template, [options])`
## `template`
- 类型：`String`
- 说明：模板字符串

## `options`
- 类型：`Object`
- 说明：配置信息，参考 `.defaults`




# Prototype
## `#method(name, fn): this`
添加实例方法（只在当前实例中有效）。具体实现参考静态方法 `.methdod`。

## `#render(data): html`
根据数据渲染模板。

### `data`
- 类型：`Object`
- 说明：渲染的数据

### `html`
- 类型：`String`
- 说明：渲染之后的模板








# Dependencies
{{ dependencies }}





# Reference
- JavaScript模板引擎原理，几行代码的事儿：<http://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html>
- 性能卓越的 js 模板引擎：<https://github.com/aui/artTemplate>
- 有哪些好用的前端模板引擎：<https://www.zhihu.com/question/32524504>
