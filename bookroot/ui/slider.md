# Introduction
{{ introduction }}





# Example
```js
var Slider = require('blear.ui.slider');

new SLider({
    el: '#demo',
    width: 500,
    height: 300
});
```

```html
<div id="demo">
    <ul>
        <li><img src="http://ww1.sinaimg.cn/large/006tNbRwgy1ff1a2t679oj30rs0gotb2.jpg" alt=""></li>
        <li><img src="http://ww4.sinaimg.cn/large/006tNbRwgy1ff1a40kacoj30rs0godl3.jpg" alt=""></li>
        <li><img src="http://ww1.sinaimg.cn/large/006tNbRwgy1ff1a51pu4mj30rs0gotbk.jpg" alt=""></li>
        <li><img src="http://ww3.sinaimg.cn/large/006tNbRwgy1ff1a4q0shxj30rs0gognd.jpg" alt=""></li>
        <li><img src="http://ww1.sinaimg.cn/large/006tNbRwgy1ff1a6gxn6nj30rs0go427.jpg" alt=""></li>
    </ul>
</div>
```

![](http://ww3.sinaimg.cn/large/006tNbRwgy1ff1acf07yij30vg0mo41p.jpg)



# Static
## `.defaults`
- 类型：`Object`
- 说明：默认配置

## `.defaults.el`
- 类型：`Element | String`
- 说明：轮播容器（要求`div#demo>ul>(li*N)`）

## `.defaults.width`
- 类型：`Number`
- 说明：轮播宽度

## `.defaults.height`
- 类型：`Number`
- 说明：轮播高度

## `.defaults.direction`
- 类型：`String`
- 说明：轮播方向，可选 `"x"`、`"y"`
- 默认：`"x"`

## `.defaults.addClass`
- 类型：`String`
- 说明：附加的 class
- 默认：`""`

## `.defaults.loop`
- 类型：`Boolean`
- 说明：是否循环切换
- 默认：`true`

## `.defaults.auto`
- 类型：`Boolean`
- 说明：是否自动切换
- 默认：`true`

## `.defaults.interval`
- 类型：`Number`
- 说明：自动切换间隔时间，单位 ms
- 默认：`5000`

## `.defaults.active`
- 类型：`Number`
- 说明：初始化激活的索引值
- 默认：`0`

## `.defaults.slideAnimation`
- 类型：`Number`
- 说明：切换动画
- 默认：
```js
function slideAnimation(el, to, done) {
    attribute.style(el, to);
    done();
}
```

# `new Slider(options)`
实例化一个轮播图，`options` 为入参，默认值为 `.defaults`。




# Prototype
## `#update([index]): this`
轮播图列表发生变化后，手动更新。
### `index`
- 类型：`Number`
- 说明：显示指定轮播图序号，从 0 开始
- 默认：上一次的序号

## `#prev(): this`
切换到上一个项目。

## `#next(): this`
切换到下一个项目。

## `#go(index): this`
切换到指定序号项目。

### `index`
- 类型：`Number`
- 说明：轮播图序号，从 0 开始

## `#index(): index`
当前显示项目的序号，从 0 开始。

## `#tap(sel, handle): this`
触摸到某一选择器后执行。
### `sel`
- 类型：`String`
- 说明：选择器

### `handle`
- 类型：`Function`
- 说明：回调


## `#destroy()`
销毁实例。


# Events
## `beforeSlide(index, to)`
切换之前触发。
### `index`
- 类型：`Number`
- 说明：即将要切换的索引值，从 0 开始

### `to`
- 类型：`Object`
- 说明：切换到目标位置的样式描述


## `afterSlide(index, to)`
切换之后触发。
### `index`
- 类型：`Number`
- 说明：切换后的索引值，从 0 开始


## `tap(meta)`
轮播图被触摸后触发。
### `meta`
- 类型：`Object`
- 说明：触摸信息，参考 [blear.classes.draggable](/classes/draggable.md)。






# Dependencies
{{ dependencies }}





# Reference
无。

