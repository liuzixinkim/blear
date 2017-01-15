# Introduction
{{ introduction }}





# Example
```js
var fun = require('blear.utils.function');
```




# Static

## ensure
确保返回一个函数，避免一次 if 操作。
```js
fun.ensure(fn);

fun.ensure();
// => function noop() {}
```

### fn
- 类型：`*`

### 返回值
- 类型：`Function`
- 说明：如果 `fn` 是一个函数，则返回 `fn`，否则返回一个 `noop`




## name
获取函数名。
```js
fun.name(fn);
```

### fn
- 类型：`Function`

### 返回值
- 类型：`String`
- 说明：传入的函数的名称，如果匿名返回 `anonymous`



## throttle
确保返回一个至少间隔一段时间执行函数。

```js
fun.throttle(fn, [timeout=30]);

window.onscroll = fun.throttle(function(){
   // 在滚动期间，至少间隔 30ms 执行
});
```

### fn
- 类型：`Function`
- 说明：实际执行的函数

### timeout
- 类型：`Number`
- 说明：至少间隔时间，单位 ms
- 默认：`30`

### 返回值
- 类型：`Function`
- 说明：返回一个新函数，是 `fn` 的包装函数




## debounce
确保至少在最后一次触发的间隔时间后执行。

```js
fun.debounce(fn, [timeout=30]);

window.onscroll = fun.debounce(function(){
   // 只在最后一次触发的 30ms 后执行
});
```

### fn
- 类型：`Function`
- 说明：实际执行的函数

### timeout
- 类型：`Number`
- 说明：至少间隔时间，单位 ms
- 默认：`30`

### 返回值
- 类型：`Function`
- 说明：返回一个新函数，是 `fn` 的包装函数





## once
确保函数只被执行一次。
```js
fun.once(fn);

window.onscroll = fun.once(function(){
   // 只在第一次触发时执行
});
```

### fn
- 类型：`Function`
- 说明：实际执行的函数

### 返回值
- 类型：`Function`
- 说明：返回一个新函数，是 `fn` 的包装函数




## toggle
函数执行切换。
```js
fun.toggle(...fn);

var myFn = fun.toggle(fn1, fn2, fn3);

myFn(); // => 执行 fn1
myFn(); // => 执行 fn2
myFn(); // => 执行 fn3
myFn(); // => 执行 fn1
myFn(); // => 执行 fn2
myFn(); // => 执行 fn3
```

### fn
- 类型：`Function`
- 说明：实际执行的函数，可以是多个函数，将会按照执行次数顺序被依次执行

### 返回值
- 类型：`Function`
- 说明：返回一个新函数，是 `fn` 的包装函数



## until
确保直到条件成立之后才会被执行，异步。内部维护一个定时器来判断。

```js
fun.until(fn, condition);

fun.until(function() {
    // ...
}, function () {
    return true;
});
```

### fn
- 类型：`Function`
- 说明：实际执行的函数

### condition
- 类型：`Function`
- 说明：判断条件是否成立函数，返回 `true` 表示条件成立






# Dependencies
{{ dependencies }}





# More
- <https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs>
