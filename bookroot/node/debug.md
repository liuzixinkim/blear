# Introduction
{{ introduction }}





# Example
```js
var debug = require('blear.node.debug');

debug.primary('debug', 'primary');
debug.success('debug', 'success');
debug.info('debug', 'info');
debug.warning('debug', 'warning');
debug.warn('debug', 'warn');
debug.error('debug', 'error');
debug.danger('debug', 'danger');
debug.normal('debug', 'normal');
debug.ignore('debug', 'ignore');
```

![](https://ws1.sinaimg.cn/large/006tNc79gy1firbwrg5jqj30qs0l40vg.jpg =964x760)


# Static

## `.config(key, [val]): ret`
配置默认值。默认配置为：
```js
var configs = {
    // 内边距
    padding: 20,
    // 对齐方式
    align: 'right',
    // 键值分隔符
    separator: ' → ',
    // 附加颜色
    colors: []
};
```

### `key`
- 类型：`String`
- 说明：键名

### `val`
- 类型：`String`
- 说明：键值，如果有值，则为设置默认值

### `ret`
- 类型：`String`
- 说明：键值，返回 `key` 对应的默认配置


## `.primary(key, msg): undefined`
输出主要类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值


## `.success(key, msg): undefined`
输出成功类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.info(key, msg): undefined`
输出消息类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.warning(key, msg): undefined`
输出警告类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.warn(key, msg): undefined`
输出警告类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.error(key, msg): undefined`
输出错误类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.danger(key, msg): undefined`
输出危险类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.normal(key, msg): undefined`
输出普通类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.ignore(key, msg): undefined`
输出忽略类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

## `.wait(key, msg, options): undefined`
输出等待类型调试消息。

```js
var i = 0;
var j = 20;
var next = function () {
    if (i > j) {
        debug.waitEnd('find', i, {
            colors: ['red', 'bold']
        });
        return;
    }

    debug.wait('go', i, {
        colors: ['red', 'bold']
    });
    i++;
    setTimeout(next, 300);
};

next();
```

![](https://ws4.sinaimg.cn/large/006tNc79gy1fir70bx91zg310s0fs4qq.gif =1324x568)

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

### `options`
- 类型：`Object`
- 说明：配置，参考 `.config()`

## `.waitEnd(key, msg, options): undefined`
结束输出等待类型调试消息。

### `key`
- 类型：`String`
- 说明：消息键

### `msg`
- 类型：`String`
- 说明：消息值

### `options`
- 类型：`Object`
- 说明：配置，参考 `.config()`





# Dependencies
{{ dependencies }}





# Reference
这里写参考内容。

