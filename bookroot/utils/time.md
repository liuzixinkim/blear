# Introduction
{{ introduction }}





# Example
```js
var time = require('blear.utils.time');
```







# Static

## `.nextTick(callback): undefined`
下一次执行，异步。常用于一些任务需要在下一个事件循环执行的时候。
```js
time.nextTick(function() {
    ui.emit('嘻嘻', 'Hello');
});
```

### `callback`
- 类型：`Function`


## `.nextFrame(callback): frame`
下一帧执行，异步。常用于一些计算布局的代码需要在下一帧渲染之后运行。
```js
time.nextFrame(function() {
    canvas.flash();
});
```

### `callback`
- 类型：`Function`


## `.cancelFrame(frame): undefined`
取消下一帧执行的内容。


### `frame`
- 类型：`Object`
- 说明：该参数由 `nextFrame(callback)` 返回


## `.setInterval(callback([next()]), [interval=1], [ASAP=false]): intervalInfor`
精确的定时器。
```js
var intervalInfo = time.setInterval(function() {
   ajax();
   
   // 下一次计时会在 ajax 执行完成之后进行
});

var intervalInfo = time.setInterval(function(next) {
   ajax({
       // ...
   }).success(next);
   //         ^^^^^^
   //         下一次计时会在 ajax 异步完成之后进行
});
```

### `callback`
- 类型：`Function`

### `callback: next`
- 类型：`Function`
- 说明：下一次，如果标记了该参数，则表示 callback 是异步的，下一次计时会在异步完成之后继续
- 默认：空

### `interval`
- 类型：`Number`
- 说明：定时器间隔，单位 ms
- 默认：`1`

### `ASAP`
- 类型：`Boolean`
- 说明：是否立即尽快执行，ASAP 是 as soon as possible 的意思
- 默认：`false`

### `intervalInfor`
- 类型：`Object`
- 说明：定时器信息

#### `intervalInfor.id`
- 类型：`Number`
- 说明：定时器 ID，不重复

#### `intervalInfor.times`
- 类型：`Number`
- 说明：循环次数

#### `intervalInfor.startTime`
- 类型：`Number`
- 说明：开始时间戳

#### `intervalInfor.timeStamp`
- 类型：`Number`
- 说明：当前时间戳

#### `intervalInfor.elapsedTime`
- 类型：`Number`
- 说明：消费时间

#### `intervalInfor.intervalTime`
- 类型：`Number`
- 说明：间隔时间

#### `intervalInfor.stopTimeStamp`
- 类型：`Number`
- 说明：停止时间戳



## `.clearInterval(intervalInfor): undefined`
取消定时器。
```js
time.clearInterval(intervalInfo);
```

### `intervalInfor`
- 类型：`Object`
- 说明：定时器信息，参考 `setInterval`


## `.setIntervalFrame(callback([next()]), [interval=1], [ASAP=false]): intervalInfor`
参考 `setInterval`，参数与其一致。不同的是，该定时器是由 `requestAnimationFrame` 触发。
常用于画布上的动画实现。基于此，也可以计算出屏幕当前的 fps。


## `.clearIntervalFrame(intervalInfor): undefined`
参考 `clearInterval`




# Dependencies
{{ dependencies }}





# More
- FPS 维基百科：<https://zh.wikipedia.org/wiki/%E5%B8%A7%E7%8E%87>
