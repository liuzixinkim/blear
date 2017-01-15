# Introduction
{{ introduction }}





# Example
```js
var path = require('blear.utils.plan');
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
## task
定义一个异步任务。
```js
plan.task(asyncTask(next, prev));
```

### asyncTask
- 类型：`Function`
- 说明：任务处理，如果是串行，则将执行 `next` 传给下一个任务，否则传到终点

#### next(err, result)
- 类型：`Function`
- 说明：如果是串行则传给下一个任务，否则传给终点

##### err
- 类型：`Error`
- 说明：如果错误的话为 `Error` 实例，否则为 `null`

##### result
- 类型：`*`
- 说明：结果，如果是串行则传给下一个任务，否则传给终点

#### prev
- 类型：`*`
- 说明：上一个任务结果，如果是串行的话


## taskSync
定义一个同步任务。
```js
plan.taskSync(syncTask(prev));
```

### syncTask
- 类型：`Function`
- 说明：任务处理，如果是串行，则将返回值传给下一个任务，否则传到终点

#### prev
- 类型：`*`
- 说明：上一个任务结果，如果是串行的话



## each
循环处理异步任务。
```js
plan.each(list, asyncTasker(index, val, next(err, result)));
```

### list
- 类型：`Array | Object`
- 说明：集合，数组、类数组或对象

### syncTasker
- 类型：`Function`
- 说明：任务处理

#### this
- 类型：`null`

#### keyIndex
- 类型：`Number | String`
- 说明：如果是对象，则为 `String`，否则为 `Number`

#### val
- 类型：`*`
- 说明：遍历的集合值

#### next(err, result)
- 类型：`Function`
- 说明：如果是串行则传给下一个任务，否则传给终点

##### err
- 类型：`Error`
- 说明：如果错误的话为 `Error` 实例，否则为 `null`

##### result
- 类型：`*`
- 说明：结果，如果是串行则传给下一个任务，否则传给终点



## eachSync
循环处理异步任务。
```js
plan.eachSync(list, syncTasker(keyIndex, val));
```

### list
- 类型：`Array | Object`
- 说明：集合，数组、类数组或对象

### syncTasker
- 类型：`Function`
- 说明：任务处理，如果是串行，则将返回值传给下一个任务，否则传到终点

#### this
- 类型：`null`

#### keyIndex
- 类型：`Number | String`
- 说明：如果是对象，则为 `String`，否则为 `Number`

#### val
- 类型：`*`
- 说明：遍历的集合值



## repeat
再重复上一个任务的次数，**如果上一步是 each 任务，只会重复最后一次遍历任务**。
```js
plan.task|taskSync.repeat(times);
```

### times
- 类型：`Number`
- 说明：等待次数



## wait
空闲等待时间，单位 ms。
```js
plan.wait(time);
```

### time
- 类型：`Number`
- 说明：等待时间，异步



## serial
串行执行任务。
```js
plan.task...serial(callback);
```


### done
- 类型：`Function`
- 说明：完成后回调，如果有一个任务出错，则标记为失败

#### this
- 类型：`null`

#### err
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`

#### ...result
- 类型：`*`
- 说明：如果是串行，则只有一个结果；如果是并行，则有多个结果




## parallel
并行执行任务。
```js
plan.task...parallel(done(err, ...result));
```


### done
- 类型：`Function`
- 说明：完成后回调，如果有一个任务出错，则标记为失败

#### this
- 类型：`null`

#### err
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`

#### ...result
- 类型：`*`
- 说明：如果是串行，则只有一个结果；如果是并行，则有多个结果




## try
任务成功。
```js
plan.task...try(success(...result));
```

### success
- 类型：`Function`
- 说明：成功后回调

#### this
- 类型：`null`

#### ...result
- 类型：`*`
- 说明：如果是串行，则只有一个结果；如果是并行，则有多个结果






## catch
任务失败。
```js
plan.task...catch(error(err));
```

### error
- 类型：`Function`
- 说明：失败后回调

#### this
- 类型：`null`

#### err
- 类型：`Error | null`
- 说明：如果出错的话为 `Error` 实例，否则为 `null`







# Dependencies
{{ dependencies }}





# More
- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise>
- <http://zodiacg.net/2015/08/javascript-async-control-flow/>

