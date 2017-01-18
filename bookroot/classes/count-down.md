# Introduction
{{ introduction }}





# Example
```js
var CountDown = require('blear.classes.count-down');

var cd = new CountDown();

cd.on('change', function(remainTime, elapsedTime) {
    // ...
});

cd.start();
```


# `.defaults`
## `.defaults.interval`
- 类型：`Number`
- 说明：倒计时时间间隔，单位 ms
- 默认：`1000`

## `.defaults.count`
- 类型：`Number`
- 说明：倒计时时间总数，单位 ms
- 默认：`60000`


# Prototype
原型属性、方法

## `#start(): cd`
开始计时。
```js
cd.start();
```

### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#getElapsedTime(): elapsedTime`
获取流逝的时间。

```js
cd.getElapsedTime();
```

## `#getRemainTime(): remainTime`
获取剩余时间。

```js
cd.getRemainTime();
```

## `#pause(): cd`
暂停计时。
```js
cd.pause();
```

### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#resume(): cd`
恢复计时，从上一次暂停开始恢复。
```js
cd.resume();
```

### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#stop(): cd`
停止计时。
```js
cd.stop();
```

### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#setCount(count): cd`
设置倒计时总数。
```js
cd.setCount(100000);
```

### `count`
- 类型：`Number`
- 说明：倒计时总数

### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#reset(): cd`
重置倒计时。
```js
cd.start();
```



### `cd`
- 类型：`CountDown`
- 说明：支持链式调用



## `#is(): inCD`
### `inCD`
- 类型：`Boolean`
- 说明：是否在倒计时中


## `#destroy(): undefined`
停止计时，销毁计时器。




# Dependencies
{{ dependencies }}





