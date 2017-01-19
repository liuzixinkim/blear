# Introduction
{{ introduction }}


# Example
```js
var Switchable = require('blear.class.switchable');

var switchable = new Switchable({
    el: '#app'
});
```


# Static
## `.defaults`
### `.defaults.el`

```html
<ul id="switchable">
    <li><a href="#tab1">tab1</a></li>
    <li><a href="#tab2">tab2</a></li>
</ul>
```

- 类型：`String | HTMLElement`
- 说明：可切换的元素，即如上的 `#switchable`

### `.defaults.activeClass`
- 类型：`String`
- 说明：激活项目的类名
- 默认：`"active"`

### `.defaults.activeIndex`
- 类型：`Number`
- 说明：初始化激活项目的索引值

### `.defaults.triggleEvent`
- 类型：`String`
- 说明：触发的事件名称
- 默认：`"click"`

### `.defaults.preventDefault`
- 类型：`Boolean`
- 说明：是否要阻止默认事件


# `new Switchable(options)`
实例化一个可切换的类。`options` 的默认值为 `defaults`。


# Prototype
原型属性、方法


## `#change(index): switchable`
改变索引值

```js
Switchable.change(1);
```

### `index`
- 类型：`Number`
- 说明：索引值

### `switchable`
- 类型：`Switchable`
- 说明：支持链式调用


## `#destroy(): undefined`
销毁实例

```js
Switchable.destroy();
```




# Dependencies
{{ dependencies }}






