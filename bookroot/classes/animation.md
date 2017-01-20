# Introduction
{{ introduction }}





# Example
```js
var Animation = require('blear.classes.animation');

var an = new Animation(divEl);

// 1、先将元素宽度过渡为 100px
an.transit({
    width: 100
});

// 2、再将元素应用 abc 关键帧动画
an.frame('abc');

// 执行动画
an.start();
```

# Static
## `defaults`
默认参数继承于 [blear.core.transform](/core/transform.md)。


# Prototype
## `.transit(to, [options]): an`
```js
an.transit(divEl, {
    width: 100,
    transform: {
        translateX: 200,
        rotate: 300
    }
});
```

### `to`
- 类型：`Object`
- 说明：样式，参考 [blear.core.transform](/core/transform.md)

### `options`
- 类型：`Object`
- 说明：动画配置
- 默认：`defaults`

### `an`
- 类型：`Animation`
- 说明：支持链式调用


## `#frame(name, [options]): an`
```js
an.frame(divEl, 'myKeyFrameName');
```

### `name`
- 类型：`String`
- 说明：帧动画名称，参考 [blear.core.keyframe](/core/keyframe.md)

### `options`
- 类型：`Object`
- 说明：动画配置
- 默认：`defaults`

### `an`
- 类型：`Animation`
- 说明：支持链式调用



## `#start([callback]): an`
动画完毕开始，结束后回调

### `callback`
- 类型：`Function`
- 说明：动画完成后回调

### `an`
- 类型：`Animation`
- 说明：支持链式调用



## `#destroy(): undefined`
销毁实例。



# Events

## `start(info)`
动画开始时触发。

### `info`
- 类型：`Object`
- 说明：信息

### `info.timeStamp`
- 类型：`Number`
- 说明：时间戳

## `stepIn(meta)`
进入某次动画时触发。

### `meta`
- 类型：`Object`
- 说明：动画元信息

### `meta.type`
- 类型：`String`
- 说明：动画类型，有：
    - `transition`
    - `keyframes`

### `meta.index`
- 类型：`Number`
- 说明：动画索引值

### `meta.to`
- 类型：`Object`
- 说明：动画终点

### `meta.frameName`
- 类型：`Object`
- 说明：帧动画名词

### `meta.options`
- 类型：`Object`
- 说明：配置

### `meta.startTime`
- 类型：`Number`
- 说明：某次动画开始时间


## `stepOut(meta)`
某次动画完成后触发。

### `meta.type`
- 类型：`String`
- 说明：动画类型，有：
    - `transition`
    - `keyframes`

### `meta.index`
- 类型：`Number`
- 说明：动画索引值

### `meta.to`
- 类型：`Object`
- 说明：动画终点

### `meta.frameName`
- 类型：`Object`
- 说明：帧动画名词

### `meta.options`
- 类型：`Object`
- 说明：配置

### `meta.startTime`
- 类型：`Number`
- 说明：某次动画开始时间

### `meta.stopTime`
- 类型：`Number`
- 说明：某次动画结束时间

### `meta.elapsedTime`
- 类型：`Number`
- 说明：某次动画流逝时间


## `stop(info)`
动画结束时触发。

### `info.timeStamp`
- 类型：`Number`
- 说明：时间戳

### `info.elaspedTime`
- 类型：`Number`
- 说明：流逝时间

# Dependencies
{{ dependencies }}


