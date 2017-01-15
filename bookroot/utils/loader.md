# Introduction
{{ introduction }}





# Example
```js
var loader = require('blear.utils.loader');
```





# Static
## js
加载一个 JS。

```js
loader.js(options, callback(err, node));
```

### options
- 类型：`Object | String`
- 说明：配置或 url


### callback
- 类型：`Function`
- 说明：回调

#### this
- 类型：`this`
- 说明：指向创建的节点

#### err
- 类型：`Error | null`
- 说明：如果出现错误，则为 `Error` 实例，否则为 `null`

#### node
- 类型：`HTMLElement`
- 说明：创建的节点，js 创建的是 `script` 节点，css 创建的 `link` 节点，image 创建的 `img` 节点


## css
加载一个 CSS。

```js
loader.css(options, callback);
```

参数说明同 `loader.js`。



## img
加载一个 image。

```js
loader.img(options, callback);
```

参数说明同 `loader.js`。






# Dependencies
{{ dependencies }}




