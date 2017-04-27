# Introduction
{{ introduction }}





# Example
```js
var Popup = require('blear.ui.popup');

var popup = new Popup({
    el: '#demo'
});

popup.open();
```

![](http://ww2.sinaimg.cn/large/006tNbRwgy1ff11vwmdpwj30lo0smaax.jpg =780x1030)


# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：弹出元素

## `.defaults.maskOptions`
- 类型：`Object`
- 说明：遮罩配置 [blear.ui.mask](/ui/mask.md)
- 默认：`{}`

## `.defaults.width`
- 类型：`Number`
- 说明：弹出层宽度
- 默认：`"auto"`

## `.defaults.height`
- 类型：`Number`
- 说明：弹出层高度
- 默认：`"auto"`

## `.defaults.minWidth`
- 类型：`Number`
- 说明：弹出层最小宽度
- 默认：`"100%"`

## `.defaults.minHeight`
- 类型：`Number`
- 说明：弹出层最小高度
- 默认：`"none"`

## `.defaults.maxWidth`
- 类型：`Number`
- 说明：弹出层最大宽度
- 默认：`"100%"`

## `.defaults.maxHeight`
- 类型：`Number`
- 说明：弹出层最大高度
- 默认：`"100%"`

## `.defaults.top`
- 类型：`Number`
- 说明：上位移
- 默认：`"auto"`

## `.defaults.right`
- 类型：`Number`
- 说明：右位移
- 默认：`0`

## `.defaults.bottom`
- 类型：`Number`
- 说明：下位移
- 默认：`0`

## `.defaults.left`
- 类型：`Number`
- 说明：左位移
- 默认：`0`

## `.defaults.openAnimation`
- 类型：`Function`
- 说明：打开动画
- 默认：
```js
function openAnimation(to, done) {
    var the = this;
    var el = the.getWindowEl();
    var an = new Animation(el, the.getOptions('animationOptions'));

    attribute.style(el, {
        display: 'block',
        transform: {
            translateY: '100%'
        }
    });

    to.transform = {
        translateY: 0
    };
    an.transit(to, {
        duration: 234,
        easing: 'in-out'
    });
    an.start(function () {
        an.destroy();
        done();
    });
}
```

## `.defaults.closeAnimation`
- 类型：`Function`
- 说明：关闭动画
- 默认：
```js
function closeAnimation(to, done) {
    var the = this;
    var el = the.getWindowEl();
    var an = new Animation(el, the.getOptions('animationOptions'));

    attribute.style(el, {
        display: 'block',
        transform: {
            translateY: 0
        }
    });

    to.transform = {
        translateY: '100%'
    };
    an.transit(to, {
        duration: 234,
        easing: 'in-out'
    });
    an.start(function () {
        an.destroy();
        done();
    });
}
```


# `new Popup(options)`
实例化一个弹出框，`options` 默认值为 `.defaults`。



# Prototype
原型属性、方法

## `#getOptions([path]): options`

### `path`
- 类型：`String`
- 说明：配置路径
- 默认：空

### `options`
- 类型：`Object | *`
- 说明：配置值

## `#setOptions(path, val): this`
### `key`
- 类型：`String`
- 说明：配置路径
- 默认：空

### `val`
- 类型：`*`
- 说明：配置值


## `#setHTML(html): this`
设置 HTML。
### `html`
- 类型：`String | Element`
- 说明：设置的字符串或元素


## `#getPopupEl(): el`
获取弹出框元素。
### `el`
- 类型：`Element`
- 说明：弹出框元素

## `#destroy()`
销毁实例。


# Events
无。





# Dependencies
{{ dependencies }}





# Reference
无。

