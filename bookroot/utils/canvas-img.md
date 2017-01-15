# Introduction
{{ introduction }}


# Example
```js
var canvasImg = require('blear.utils.canvas-img');
```



# Static

## draw
将 `img` 节点内容绘制到画布上，常用于图片裁剪前准备。

![](https://dn-fed.qbox.me/@/res/20170115171617616120288011 =1200x800)

```js
canvasImg.draw(canvasEl, imgEl, options);
```

### canvasEl
- 类型：`HTMLCanvasElement`

### imgEl
- 类型：`HTMLImageElement`

### options
- 类型：`Object`
- 说明：绘制参数

#### options.scrLeft
- 类型：`Number`
- 说明：原始图像的左位移

#### options.scrTop
- 类型：`Number`
- 说明：原始图像的上位移

#### options.scrWidth
- 类型：`Number`
- 说明：原始图像的宽度
- 默认：img 节点的宽度

#### options.scrHeight
- 类型：`Number`
- 说明：原始图像的高度
- 默认：img 节点的高度

#### options.drawLeft
- 类型：`Number`
- 说明：绘制的左位移点
- 默认：`0`

#### options.drawTop
- 类型：`Number`
- 说明：绘制的左位移点
- 默认：`0`

#### options.drawWidth
- 类型：`Number`
- 说明：绘制宽度
- 默认：等于 `srcWidth`，即 1:1 宽度绘制

#### options.drawHeight
- 类型：`Number`
- 说明：绘制高度
- 默认：等于 `srcHeight`，即 1:1 高度绘制


# Dependencies
{{ dependencies }}


# More
这里写更多的额外内容，可以不写。

