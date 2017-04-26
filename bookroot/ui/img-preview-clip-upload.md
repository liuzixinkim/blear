# Introduction
{{ introduction }}





# Example
```js
var ImgPreviewClipUpload = require('blear.ui.img-preview-clip-upload');

new ImgPreviewClipUpload(options);
```




# Static
## `.defaults`
默认配置。

## `.defaults.dialog`
- 说明：对话框配置
- 类型：`Object`

## `.defaults.dialog.title`
- 说明：对话框标题
- 类型：`String`
- 默认：`"裁剪图片并上传"`

## `.defaults.dialog.width`
- 说明：对话框宽度
- 类型：`Number`
- 默认：`1000`

## `.defaults.preview`
- 说明：预览配置
- 类型：`Object`

## `.defaults.preview.width`
- 说明：预览宽度
- 类型：`Number`
- 默认：`"auto"`

## `.defaults.preview.height`
- 说明：预览高度
- 类型：`Number`
- 默认：`"auto"`

## `.defaults.preview.minWidth`
- 说明：预览最小宽度
- 类型：`Number`
- 默认：`800`

## `.defaults.preview.minHeight`
- 说明：预览最小高度
- 类型：`Number`
- 默认：`"auto"`

## `.defaults.preview.maxWidth`
- 说明：预览最大宽度
- 类型：`Number`
- 默认：`1000`

## `.defaults.preview.maxHeight`
- 说明：预览最大高度
- 类型：`Number`
- 默认：`800`

## `.defaults.clip`
- 说明：裁剪配置
- 类型：`Object`

## `.defaults.clip.auto`
- 说明：自动适配到最大居中选区
- 类型：`Boolean`
- 默认：`true`

## `.defaults.clip.ratio`
- 说明：裁剪区域的宽高比
- 类型：`Number`
- 默认：`1`

## `.defaults.clip.minWidth`
- 说明：裁剪的区域的最小宽度
- 类型：`Number`
- 默认：`100`

## `.defaults.clip.minHeight`
- 说明：裁剪的区域的最小高度
- 类型：`Number`
- 默认：`100`

## `.defaults.clip.maxWidth`
- 说明：裁剪的区域的最大宽度，0 表示无限制
- 类型：`Number`
- 默认：`0`

## `.defaults.clip.maxHeight`
- 说明：裁剪的区域的最大高度，0 表示无限制
- 类型：`Number`
- 默认：`0`

## `.defaults.clip.minSelectionSize`
- 说明：开始最小选区大小
- 类型：`Number`
- 默认：`10`

## `.defaults.tips`
- 说明：选择图片区域的提示文案
- 类型：`String`
- 默认：`"点击选择文件并上传"`

## `.defaults.name`
- 说明：选择图片的名称
- 类型：`String`
- 默认：`"file"`

## `.defaults.accept`
- 说明：选择图片的的接受类型
- 类型：`String`
- 默认：`"image/png,image/jpg,image/jpeg,image/bmp"`

## `.defaults.extension`
- 说明：接受的图片扩展名
- 类型：`String`
- 默认：`".png,.jpg,.jpeg,.bmp"`

## `.defaults.multiple`
- 说明：是否接受多图
- 类型：`Boolean`
- 默认：`false`

## `.defaults.drawWdith`
- 说明：绘图宽度
- 类型：`Number`
- 默认：`100`

## `.defaults.drawHeight`
- 说明：绘图高度
- 类型：`Number`
- 默认：`100`

## `.defaults.drawQuality`
- 说明：绘图质量，小于 1
- 类型：`Number`
- 默认：`0.8`

## `.defaults.drawType`
- 说明：绘图类型
- 类型：`String`
- 默认：`"image/png"`

## `.defaults.onUpload`
- 说明：图片上传回调
- 类型：`Function`
- 默认：`function (fileInputEl, done) { done(new Error('未配置上传')); }`

## `.defaults.onBlobUpload`
- 说明：裁剪之后的内容上传
- 类型：`Function`
- 默认：`function (fileInputEl, blob, done) { done(new Error('未配置上传')); }`

## `.defaults.onFallback`
- 说明：降级回调（客户端不支持图片裁剪）
- 类型：`Function`
- 默认：`function (imgEl, clipOptions, done) { done(new Error('未配置客户端裁剪降级方案')); }`




# `new ImgPreviewClipUpload(options)`
实例化一个图片预览并且上传 UI，options 默认值为 `.defaults`。




# Prototype
原型属性、方法

## `#reset(): this`
重置为上传图片界面。

## `#destroy()`
销毁实例


# Events
## `beforePreviewUpload()`
预览上传之前触发。

## `afterPreviewUpload()`
预览上传之后触发。

## `beforePreviewLoading()`
预览加载之前触发。

## `afterPreviewLoading()`
预览加载之后触发。

## `success()`
预览并且裁剪并且上传成功之后触发。

## `error()`
预览并且裁剪并且上传失败触发。

## `beforeFallback()`
降级之前触发。

## `afterFallback()`
降级之后触发。

## `beforeBlobUpload()`
裁剪之后上传之前触发。

## `afterBlobUpload()`
裁剪之后上传之后触发。






# Dependencies
{{ dependencies }}





# Reference
这里写参考内容。

