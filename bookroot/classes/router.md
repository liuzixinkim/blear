# Introduction
{{ introduction }}





# Example
```js
var Router = require('blear.classes.router');

var router = new Router();
```



# Static
静态属性、方法


## `.defaults`
### `.defaults.el`
- 类型：`HTMLElement | String`
- 说明：需要监听的元素
- 默认：`"a"`

### `.defaults.ignoreCase`
- 类型：`Boolean`
- 说明：是否忽略大小写，参考 [blear.utils.url .matchPath](/utils/url#heading-3-3-4)
- 默认：`false`

### `.defaults.strict`
- 类型：`Boolean`
- 说明：是否验证模式，参考 [blear.utils.url .matchPath](/utils/url#heading-3-3-5)
- 默认：`false`

### `.defaults.split`
- 类型：`String`
- 说明：分隔符，如果为 `"!"`，则 hash 就转换为 `#!hash`
- 默认：空




# `new Router(options)`

`options` 默认为为 `defaults`。



# Prototype
## `#match([rule], fn(route, next([replaced]))): router`
中间件路由。

```js
router
// 定义一个中间件路由，一般中间件路由都在具体路由前面
.match(function(route, next) {
    // 处理一些事务
    next();
})
// 中间件路由也可以跳转到其他路由，
// 如：用户没有登录，直接跳转到登录页面
.match(function(route, next) {
    // 判断用户没有登录，需要登录
    next('/login');
})
// 中间件路由也可以对具体路由进行前置操作
// 如：当前是微信客户端，则跳转到微信登录操作
.match('/login', function(route, next) {
    // 微信客户端内，使用 oauth 方式登录
    next('/login/weixin');
})
```


### `rule`
- 类型：`String`
- 说明：路由规则，支持以下路由规则
    - `:param`：路由路径参数，如：`/page/:pageId` 匹配 `/page/123`，那么 `route.params.pageId === "123"`
    - `*`：单级路由，如：`/user/*` 匹配 `/user/cloudcome`
    - `**`：多级路由，如：`/user/**` 匹配 `/user/a`、`/user/a/b`、`/user/a/b/c`、`/user/a/b/c/d`

### `fn: route`
- 类型：`String`
- 说明：当前导航对象

### `fn: next([replaced])`
- 类型：`Function`
- 说明：处理后的回调

### `fn: next: replaced`
- 类型：`String`
- 说明：如果需要跳转到其他 url，则需要传值，否则为空
- 默认：`undefined`






## `#match([rule], fn([resolved])): router`
根据规则，匹配路由处理。返回 `router` 对象，支持链式调用。


```js
router
// 具体路由对具体页面的控制
// 异步控制器
.match('/user/:userId', function(resolved) {
    require.async('path/to/user/index.js', resolved);
})
// 具体路由对具体页面的控制
// 同步控制器
.match('/articles', function() {
    // 具体到页面的具体逻辑
});
```

### `rule`
- 类型：`String`
- 说明：路由规则，支持以下路由规则
    - `:param`：路由路径参数，如：`/page/:pageId` 匹配 `/page/123`，那么 `route.pageId === "123"`
    - `*`：单级路由，如：`/user/*` 匹配 `/user/cloudcome`
    - `**`：多级路由，如：`/user/**` 匹配 `/user/a`、`/user/a/b`、`/user/a/b/c`、`/user/a/b/c/d`

### `fn([resolved(controller)]): controller`
- 类型：`Function`
- 说明：对路由的描述函数

### `fn: resolved`
- 类型：`Function`
- 说明：异步控制器回调

### `fn: resolved: controller`
### `fn(): controller`
- 类型：`*`
- 说明：对路由的控制器

### `fn(route, next([replaced]))`
- 类型：`Function`
- 说明：对中间件路由的描述



## `#otherwise(fn([resolved(controller)]): controller): router`
未匹配的路由处理。
返回 `router` 对象，支持链式调用。
与 `fn([resolved(controller)]): controller`（[点击跳转](#heading-5-2-2)） 一致。



## `#start(): router`
启动路由监听。



## `#_change(route, next(changed))`
具体导航调用。
具体细节由调用路由的实例实现。
目前此为私有 API。后续版本会有变化。



# Route
导航类。每一个 url 都会有一个唯一的 `Route` 实例。

## Static
### `.prev`
- 类型：`Route`
- 说明：上一个导航

### `.next`
- 类型：`Route`
- 说明：下一个导航

### `.data`
- 类型：`Object`
- 说明：接收到的数据

### `.path`
- 类型：`String`
- 说明：url

### `.query`
- 类型：`Object`
- 说明：url 查询对象

### `.params`
- 类型：`Object`
- 说明：url 路径对象

### `.resolve(to): ret`
处理 url 合并关系。

```js
// 当前 url 为 /path/to/a

route.reolve('./b')
// => "/path/to/b"

route.reolve('../b')
// => "/path/b"
```

#### `to`
- 类型：`String`
- 说明：目标 url

#### `ret`
- 类型：`String`
- 说明：处理后的 url


### `.redirect(to)`
跳转到目标地址，会生成新历史。
#### `to`
- 类型：`String`
- 说明：目标地址

### `.rewrite(to)`
替换为目标地址，不会生成新历史。
#### `to`
- 类型：`String`
- 说明：目标地址


### `.rewriteQuery(key, [val])`
重写查询参数，不会生成新历史。
```js
route.rewriteQuery('a', '1');
route.rewriteQuery({
    a: 3,
    b: 4
});
```

#### `key`
- 类型：`String | Object`
- 说明：键，或键值对

#### `val`
- 类型：`String`
- 说明：值



## Prototype
### `#send(data): route`
向下一个路由发送数据。
返回 `Route` 实例，支持链式调用。

**此 API 可能会变化，因为无法确定目标导航。**

#### `data`
- 类型：`*`
- 说明：发送的数据


# Events
## `repeat(url)`
重复点击同一个 url 时触发。

### `url`
- 类型：`String`
- 说明：由用户重复点击同一个 url

## `beforeLoad(route)`
导航控制器加载之前触发。

### `route`
- 类型：`Route`
- 说明：导航对象

## `afterLoad(route)`
导航控制器加载之后触发。

### `route`
- 类型：`Route`
- 说明：导航对象

## `beforeChange(route)`
导航控制器变化之前触发。

### `route`
- 类型：`Route`
- 说明：导航对象

## `afterChange(route, changed)`
导航控制器变化之后触发。

### `route`
- 类型：`Route`
- 说明：导航对象

### `changed`
- 类型：`Boolean`
- 说明：是否接收变化






# Dependencies
{{ dependencies }}







