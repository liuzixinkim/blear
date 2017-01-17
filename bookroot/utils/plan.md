# Introduction
{{ introduction }}





# Example
```js
var plan = require('blear.utils.plan');
```

plan 是一个同、异步任务串、并行流程处理工具。
plan 是自动实例化的，虽然他是一个 class。

![](https://dn-fed.qbox.me/@/res/20170115231040606109648578 =1297x1104)



## 串行计划
```js
plan
    // 异步任务
    .task(function(next) {
        setTimeout(function() {
            next(null, 1);
        });
    })
    // 同步任务
    .taskSync(function(one) {
        // 1 + 2 = 3
        return one + 2;
    })
    // 循环异步
    .each([1, 2], function(index, val, next, prev) {
        setTimeout(function() {
            // 第 1 次：3 + 1
            // 第 2 次：4 + 2
            next(null, prev + val);
        });
    })
    // 循环同步
    .eachSync([3, 4], function(index, val, prev) {
        // 第 1 次：6 + 3
        // 第 2 次：9 + 4
        return prev + val;
    })
    .serial()
    .try(function (ret) {
        // ret === 13
    });
```


## 并行计划
```js
plan
    // 异步任务
    .task(function(next) {
        setTimeout(function() {
            // 第 1 个结果：1
            next(null, 1);
        });
    })
    // 同步任务
    .taskSync(function() {
        // 第 2 个结果：2
        return 2;
    })
    // 循环异步
    .each([1, 2], function(index, val, next) {
        setTimeout(function() {
            // 第 3 个结果：1
            // 第 4 个结果：2
            next(null, val);
        });
    })
    // 循环同步
    .eachSync([3, 4], function(index, val) {
        // 第 5 个结果：3
        // 第 6 个结果：4
        return val;
    })
    .parallel()
    .try(function (ret1, ret2, ret3, ret4, ret5, ret6) {
        // ret1 === 1
        // ret2 === 2
        // ret3 === 1
        // ret4 === 2
        // ret5 === 3
        // ret6 === 4
    });
```




# Prototype
## `#task(asyncTask(next(err, result), prev)): plan`
定义一个异步任务，链式调用返回 `plan`。

```js
plan.task(function asyncTask(next, prev) {
    // 异步操作……
    next(err, result);
});
```

### `asyncTask`
- 类型：`Function`
- 说明：任务处理，如果是串行，则将执行 `next` 传给下一个任务，否则传到终点

#### `asyncTask: next(err, result)`
- 类型：`Function`
- 说明：如果是串行则传给下一个任务，否则传给终点

##### `asyncTask: next: this`
- 类型：`null`

##### `asyncTask: next: err`
- 类型：`Error`
- 说明：如果错误的话为 `Error` 实例，否则为 `null`

##### `asyncTask: next: result`
- 类型：`*`
- 说明：结果，如果是串行则传给下一个任务，否则传给终点

#### `asyncTask: prev`
- 类型：`*`
- 说明：上一个任务结果，如果是串行的话


## `#taskSync(syncTask(prev): result): plan`
定义一个同步任务，链式调用返回 `plan`。
```js
plan.taskSync(function syncTask(prev) {
    // 同步操作……
    return err || result;
});
```

### `syncTask`
- 类型：`Function`
- 说明：任务处理，如果是串行，则将返回值传给下一个任务，否则传到终点

#### `syncTask: prev`
- 类型：`*`
- 说明：上一个任务结果，如果是串行的话

#### `syncTask(): result`
- 类型：`Error | *`
- 说明：同步任务执行结果，如果执行错误，返回 `Error` 实例



## `#each(list, asyncTasker(index, val, next(err, result)), prev): plan`
循环处理异步任务，链式调用返回 `plan`。
```js
plan.each(['a', 'b'], function(index, val, next, prev) {
    // 异步操作……
    next(err || result);
});
```

### `list`
- 类型：`Array | Object`
- 说明：集合，数组、类数组或对象

### `syncTasker`
- 类型：`Function`
- 说明：任务处理

#### `syncTasker: this`
- 类型：`null`

#### `syncTasker: keyIndex`
- 类型：`Number | String`
- 说明：如果是对象，则为 `String`，否则为 `Number`

#### `syncTasker: val`
- 类型：`*`
- 说明：遍历的集合值

#### `syncTasker: next`
- 类型：`Function`
- 说明：如果是串行则传给下一个任务，否则传给终点

##### `syncTasker: next: err`
- 类型：`Error`
- 说明：如果错误的话为 `Error` 实例，否则为 `null`

##### `syncTasker: next: result`
- 类型：`*`
- 说明：结果，如果是串行则传给下一个任务，否则传给终点

#### `syncTasker: prev`
- 类型：`*`
- 说明：上一个任务的结果，如果是串行的话



## `#eachSync(list, syncTasker(keyIndex, val, prev)): plan`
循环处理异步任务，链式调用返回 `plan`。
```js
plan.eachSync(['a', 'b'], function(index, val, prev) {
    // 同步操作……
    return err || result;
});
```

### `list`
- 类型：`Array | Object`
- 说明：集合，数组、类数组或对象

### `syncTasker`
- 类型：`Function`
- 说明：任务处理，如果是串行，则将返回值传给下一个任务，否则传到终点

#### `syncTasker: this`
- 类型：`null`

#### `syncTasker: keyIndex`
- 类型：`Number | String`
- 说明：如果是对象，则为 `String`，否则为 `Number`

#### `syncTasker: val`
- 类型：`*`
- 说明：遍历的集合值

#### `syncTasker: prev`
- 类型：`*`
- 说明：上一个任务结果，如果是串行的话

#### `syncTasker(): result`
- 类型：`Error || *`
- 说明：如果错误的话为 `Error` 实例，否则为任务执行结果



## `#repeat(times): plan`
再重复上一个任务的次数，**如果上一步是 each 任务，只会重复最后一次遍历任务**，链式调用返回 `plan`。
```js
plan.taskSync(function taskA() {
    // 任务 A
}).repeat(2);
// 任务 A 将会被执行 1 + 2 = 3 次
```

### `times`
- 类型：`Number`
- 说明：再执行次数



## `#wait(timeout): plan`
空闲等待时间，单位 ms，链式调用返回 `plan`。
```js
plan.wait(10);
// 等待 10ms 
```

### `timeout`
- 类型：`Number`
- 说明：超时时间，单位 ms，异步



## `#serial(done(err, result)): plan`
串行执行任务，链式调用返回 `plan`。
```js
plan
    .task(taskA)
    .task(taskB)
    .serial();
// 串行执行 taskA 和 taskB
```


### `done`
- 类型：`Function`
- 说明：完成后回调，如果有一个任务出错，则标记为失败

#### `done: this`
- 类型：`null`

#### `done: err`
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`

#### `done: result`
- 类型：`*`
- 说明：一个结果




## `#parallel(done(err, ...result)): plan`
并行执行任务，链式调用返回 `plan`。
```js
plan
    .task(taskA)
    .task(taskB)
    .parallel();
// 并行执行 taskA 和 taskB
```


### `done`
- 类型：`Function`
- 说明：完成后回调，如果有一个任务出错，则标记为失败

#### `done: this`
- 类型：`null`

#### `done: err`
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`

#### `done: ...result`
- 类型：`*`
- 说明：任务数量个结果




## `#try(success(...result)): plan`
任务成功，链式调用返回 `plan`。
```js
plan
    .task(taskA)
    .task(taskB)
    .serial()
    .try(function(resultAB) {
        // 串行执行成功
    });

plan
    .task(taskA)
    .task(taskB)
    .parallel()
    .try(function(resultA, resultB) {
        // 并行执行成功
    });
```

### `success`
- 类型：`Function`
- 说明：成功后回调

#### `success: this`
- 类型：`null`

#### `success: ...result`
- 类型：`*`
- 说明：如果是串行，则只有一个结果；如果是并行，则有任务数量个结果






## `#catch(error(err)): plan`
任务失败，链式调用返回 `plan`。
```js
plan
    .task(taskA)
    .task(taskB)
    .serial()
    .catch(function(err) {
        // 串行执行失败
    });

plan
    .task(taskA)
    .task(taskB)
    .parallel()
    .catch(function(err) {
        // 并行执行失败
    });
```

### `error`
- 类型：`Function`
- 说明：失败后回调

#### `error: this`
- 类型：`null`

#### `error: err`
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`







# Dependencies
{{ dependencies }}





# More
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise>
- <http://zodiacg.net/2015/08/javascript-async-control-flow/>

