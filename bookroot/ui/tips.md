# Introduction
{{ introduction }}





# Example
```js
var Tips = require('blear.ui.tips');

new Tips({
    message: '你的会员权限已到期'
});
```

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff1bvqsuadj30jm080dg1.jpg)


# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.type`
- 类型：`String`
- 说明：提示类型，可选 `default`、`success`、`danger`、`info`、`warn`
- 默认：`"default"`

## `.defaults.message`
- 类型：`String`
- 说明：提示消息
- 默认：`""`

## `.defaults.addClass`
- 类型：`String`
- 说明：附加的 class
- 默认：`""`

## `.defaults.timeout`
- 类型：`Number`
- 说明：显示超时时间，单位 ms，小于 0 时不自动消失
- 默认：`5000`

## `.defaults.openAnimation`
- 类型：`Function`
- 说明：打开动画
- 默认：
```js
function openAnimation(to, done) {
    var el = this.getWindowEl();
    var an = new Animation(el);

    attribute.style(el, {
        display: 'block',
        transform: {
            translateY: '-100%'
        }
    });

    to.transform = {
        translateY: 0
    };
    an.transit(to, {
        duration: 234,
        easing: 'in-out'
    });
    an.start(done);
    an.destroy();
}
```
## `.defaults.closeAnimation`
- 类型：`Function`
- 说明：关闭动画
- 默认：
```js
function closeAnimation(to, done) {
    var el = this.getWindowEl();
    var an = new Animation(el);

    attribute.style(el, {
        display: 'block',
        transform: {
            translateY: 0
        }
    });

    to.transform = {
        translateY: '-100%'
    };
    an.transit(to, {
        duration: 234,
        easing: 'in-out'
    });
    an.start(done);
    an.destroy();
}
```


# `new Example(options)`
实例化一个提示 UI，`options` 为入参，默认值为 `.defaults`。


# Prototype
无。


# Events
无。






# Dependencies
{{ dependencies }}





# Reference
无。

