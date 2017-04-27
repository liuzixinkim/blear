# Introduction
{{ introduction }}





# Example
```js
var Upload = require('blear.ui.upload');

new Upload({
    onUpload: function(fileInputEl, next) {
        ajaxUplaod(fileInputEl, function(err, json) {
            if(err) {
                return next(err);
            }
            
            next(null, json.url);
        });
    }
});
```

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff1clpmnd7j319g0qsjsr.jpg)


# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.dialog`
- 类型：`Object`
- 说明：对话框配置（参考 [blear.ui.dialog](/ui/dialog.md)）

## `.defaults.tips`
- 类型：`String`
- 说明：提示语
- 默认：`"点击选择文件并上传"`

## `.defaults.name`
- 类型：`String`
- 说明：文件选择器键名
- 默认：`"file"`

## `.defaults.accept`
- 类型：`String`
- 说明：文件选择器接受的文件类型
- 默认：`""`

## `.defaults.multiple`
- 类型：`Boolean`
- 说明：是否多文件上传
- 默认：`false`

## `.defaults.onUpload`
- 类型：`Function`
- 说明：上传回调
- 默认：
```js
function onUpload(fileInputEl, done) {
    done(new Error('未配置上传'));
}
```



# `new Upload(options)`
实例化一个上传对话框，`options` 为入参，默认值为 `.defaults`。


# Prototype

## `#getContentEl(): el`
获取内容区域的元素。

### `el`
- 类型：`HTMLDIVElement`
- 说明：元素

## `#upload(): this`
外界操作了该上传输入框之后，可以手动上传。

## `#reset(): this`
重置为上传选择文件界面。


## `#destroy()`
销毁实例。


# Events
## `beforeUpload(inputFileEl)`
上传之前触发，返回 false 取消上传。
### `inputFileEl`
- 类型：`HTMLInputElement`
- 说明：文件选择器

## `afterUpload(inputFileEl)`
上传之后触发。
### `inputFileEl`
- 类型：`HTMLInputElement`
- 说明：文件选择器

## `success(url)`
文件上传成功后触发。
### `url`
- 类型：`String`
- 说明：文件远程地址

## `error(err)`
文件上传失败后触发。
### `err`
- 类型：`Error`
- 说明：上传失败的错误对象







# Dependencies
{{ dependencies }}





# Reference
无。

