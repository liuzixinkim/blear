# Introduction
{{ introduction }}





# Example
```js
var RichEditor = require('blear.ui.rich-editor');

new RichEditor({
    el: '#demo'
});
```

![](http://ww4.sinaimg.cn/large/006tNbRwgy1ff198ln07fj311m0oimyn.jpg =1354x882)



# Static

## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：渲染容器

## `.defaults.contentStyle`
- 类型：`String`
- 说明：内容样式
- 默认：内置的样式

## `.defaults.height`
- 类型：`Number`
- 说明：编辑器高度
- 默认：`300`

## `.defaults.maxHeight`
- 类型：`Number`
- 说明：编辑器最大高度
- 默认：`800`

## `.defaults.placeholder`
- 类型：`Number`
- 说明：编辑器占位文本
- 默认：`"<p style="color:#888">点击开始输入</p>"`

## `.defaults.fileName`
- 类型：`String`
- 说明：选择图片的字段名称
- 默认：`"file"`

## `.defaults.fileLabel`
- 类型：`String`
- 说明：选择图片的显示名称
- 默认：`"请选择图片"`

## `.defaults.elementPath`
- 类型：`Boolean`
- 说明：是否显示节点的路径信息
- 默认：`true`


# `new RichEditor(options)`
实例化一个富文本编辑器，`options` 为入参，默认值为 `.defaults`。




# Prototype
## `#ready(): this`
富文本编辑器准备完毕回调。

## `#getHTML(): html`
获取富文本编辑器的内容。

### `html`
- 类型：`String`
- 说明：内容

## `#setHTML(html): this`
设置富文本编辑器的内容。

### `html`
- 类型：`String`
- 说明：内容

## `#getWordCount(): count`
获取富文本编辑器的内容长度。

### `count`
- 类型：`Number`
- 说明：内容长度

## `#destroy()`
销毁实例。


# Events
## `upload(fileEl, files, next(img))`
上传文件后触发。
### `fileEl`
- 类型：`HTMLInputElement`
- 说明：上传文件选择器

### `files`
- 类型：`Array`
- 说明：选择的图片列表

### `next`
- 类型：`Function`
- 说明：上传完毕之后回调

### `next: img`
- 类型：`String | Object`
- 说明：图片上传后的路径或描述






# Dependencies
{{ dependencies }}





# Reference
- tinymce：<https://www.tinymce.com/>
- [《为什么都说富文本编辑器是天坑？》（知乎）](https://www.zhihu.com/question/38699645)

