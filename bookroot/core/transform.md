# Introduction
{{ introduction }}





# Example
```js
var transform = require('blear.core.transform');
```







# Static
静态属性、方法


## `.defaults`
- 类型：`Object`
- 说明：CSS 动画默认配置

### `.defaults.easing`
- 类型：`String | Array`
- 说明：缓冲类型，参考 [blear.utils.easing](/utils/easing.md)
- 默认：`"linear"`

### `.defaults.duration`
- 类型：`Number`
- 说明：过渡时间，单位 ms
- 默认：`678`

### `.defaults.delay`
- 类型：`Number`
- 说明：动画开始延迟时间，单位 ms
- 默认：`0`

### `.defaults.count`
- 类型：`Number`
- 说明：动画次数，**只针对帧动画**
- 默认：`1`

### `.defaults.direction`
- 类型：`Number`
- 说明：动画方向，**只针对帧动画**
- 默认：`"normal"`
- 可选：
    - `"normal"`：每一次动画都会从起点开始
    - `"alternate"`：动画交替方向运行，即：第 1 次动画从起点开始到终点，第 2 次动画从终点开始到起点，后续动画同理
    - `"reverse"`：每一次动画都从终点开始
    - `"alternate-reverse"`：交替动画起点、终点，交替运行

### `.defaults.fillMode`
- 类型：`String`
- 说明：动画填充模式，**只针对帧动画**
- 默认：`"forwards"`
- 可选：
    - `"none"`：动画执行前后不改变任何样式
    - `"forwards"`：目标保持动画最后一帧的样式
    - `"backwards"`：动画采用相应第一帧的样式
    - `"both"`：动画将会执行 `forwards` 和 `backwards` 执行的动作


## `.transit(el, to, [options], [callback]): undefined`
```js
transform.transit(divEl, {
    width: 100,
    transform: {
        translateX: 200,
        rotate: 300
    }
});
```

### `el`
- 类型：`HTMLElement`
- 说明：动画元素

### `to`
- 类型：`Object`
- 说明：样式，参考 [blear.core.transform](/core/transform.md)

### `options`
- 类型：`Object`
- 说明：动画配置
- 默认：`defaults`

### `callback`
- 类型：`Function`
- 说明：动画完成后回调
- 默认：`null`


## `.frame(el, name, [options], [callback]): undefined`
```js
transform.frame(divEl, 'myKeyFrameName');
```

### `el`
- 类型：`HTMLElement`
- 说明：动画元素

### `name`
- 类型：`String`
- 说明：帧动画名称，参考 [blear.core.keyframe](/core/keyframe.md)

### `options`
- 类型：`Object`
- 说明：动画配置
- 默认：`defaults`

### `callback`
- 类型：`Function`
- 说明：N 次帧动画全部结束后回调
- 默认：`null`





# Dependencies
{{ dependencies }}





# Reference
- css3 transition：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>
- css3 keyframes：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes>

