# Introduction
{{ introduction }}





# Example
```js
var tips = require('blear.components.tips');

tips.default('默认提示');
tips.success('成功提示');
tips.danger('危险提示');
tips.info('提醒提示');
tips.warn('警告提示');
```

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff281k2a9kj30so05a74g.jpg)

![](http://ww2.sinaimg.cn/large/006tNbRwgy1ff281uifgej30te0560sv.jpg)

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff2825bbojj30te060aab.jpg)

![](http://ww4.sinaimg.cn/large/006tNbRwgy1ff2833vc57j30sw066glv.jpg)

![](http://ww4.sinaimg.cn/large/006tNbRwgy1ff283dkj1ij30t204waa6.jpg)


# Static
## `.default(message)`
### `message`
- 类型：`String | Object`
- 说明：需要弹出警告的消息，可以是字符串，或者或者包含 `message` 属性的对象（如 Error 实例）。
- 默认：`""`

弹出默认样式的提示，以下的 `success`、`danger`、`info`、`warn` 如是。

## `.success(message)`
弹出成功样式的提示。

## `.danger(message)`
弹出危险样式的提示。

## `.info(message)`
弹出提醒样式的提示。

## `.warn(message)`
弹出警告样式的提示。




# Dependencies
{{ dependencies }}





# Reference
无。

