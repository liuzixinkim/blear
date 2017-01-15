# Introduction
{{ introduction }}





# Example
```js
var easing = require('blear.utils.easing');
```







# Static
以下缓冲函数都是基于贝塞尔曲线的。

![](https://dn-fed.qbox.me/@/res/20170115190717494997246027 =379x351)



## timingFunction
根据参数返回 timing function，适用于 CSS3 动画缓冲。
```js
easing.timingFunction(ease);

easing.timingFunction('linear');
easing.timingFunction([0, 0, 0, 1]);
easing.timingFunction('linear', [0, 0, 1, 1]);
easing.timingFunction(['linear', [0, 0, 1, 1]]);
```

### ease
- 类型：`String | Array`
- 说明：easing 名称或者参数数组，可以是多个参数的多维数组，ease 参数可以为多个

### 返回值
- 类型：`String`
- 说明：返回 CSS3 贝赛尔曲线描述字符串



## bezier
贝塞尔曲线函数生成。

```js
easing.bezier(p1x, p1y, p2x, p2y);

easing.bezier(0, 0, 1, 1);
// => function (timeRatio) {
//    ...
//     return processRatio;
// }
```

### p1x、p1y、p2x、p2y
- 类型：`Number`
- 说明：分别对应 p1、p2 两个点的坐标值

### 返回值
- 类型：`Function`
- 说明：贝塞尔曲线函数

#### this
- 类型：`this`

#### timeRatio
- 类型：`Number`
- 说明：时间占比 `[0, 1]`

#### 返回值
- 类型：`Number`
- 说明：过程占比



## {easingType}
内置的 easingType 有：

- `ease`
- `in`
- `in-back`
- `in-circ`
- `in-cubic`
- `in-expo`
- `in-out`
- `in-out-back`
- `in-out-circ`
- `in-out-expo`
- `in-out-quart`
- `in-out-quint`
- `in-out-sine`
- `in-quad`
- `in-quart`
- `in-quint`
- `in-sine`
- `linear`
- `out`
- `out-back`
- `out-circ`
- `out-cubic`
- `out-expo`
- `out-quad`
- `out-quart`
- `out-quint`
- `out-sine`
- `snap`

```js
easing.linear();
// => function(duration)
```

### 返回值
- 类型：`Function`
- 说明：贝赛尔曲线方法，同上。




# Dependencies
{{ dependencies }}





# More
- <https://zh.wikipedia.org/zh-cn/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A>

