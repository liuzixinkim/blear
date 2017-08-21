# Introduction
{{ introduction }}





# Example
```js
var console = require('blear.node.console');
```




# Static
## `.colors`
- 类型：`Object`
- 说明：颜色配置，有
`black`、`red`、`grey`、`cyan`、`green`、`blue`、`yellow`、`inverse`、`magenta`、
`bgBlack`、`blackBG`、`bgRed`、`redBG`、`bgGreen`、`greenBG`、`bgYellow`、`yellowBG`、
`bgBlue`、`blueBG`、`bgMagenta`、`magentaBG`、`bgCyan`、`cyanBG`、`bgWhite`、`whiteBG`、
`bold`、`dim`、`italic`、`underline`、`hidden`、`original`

## `.format()`
```js
console.format('a', 'b');
// => "a b"
```
- 类型：`Function`
- 说明：控制台格式化

## `.pretty(out..., colors): prettied`
```js
console.pretty('1', 'black');
console.pretty('1', '2', ['red', 'bgBlue']);
```
### `out`
- 类型：`*`
- 说明：输出结果

### `colors`
- 类型：`String | Array`
- 说明：附加颜色

### `prettied`
- 类型：`String`
- 说明：附加颜色后的字符串


## `.config(key, [val]): ret`
配置默认值。默认配置为：
```js
var configs = {
    // 是否颜色输出
    // PM2 环境不建议输出颜色，否则日志文件内有很多颜色代码
    colorful: true,
    // 日志级别
    // 生产环境建议只打印出 warn、error 日志
    level: [
        'log',
        'info',
        'warn',
        'error'
    ],
    timePrefix: 'YYYY-MM-DD HH:mm:ss.SSS',
    timeColors: ['cyan', 'bold'],
    logColors: [],
    infoColors: ['green', 'bold'],
    warnColors: ['yellow', 'bold'],
    errorColors: ['red', 'bold']
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



## `.log(): undefined`
- 类型：`Function`
- 说明：打印普通类型日志

![](https://ws4.sinaimg.cn/large/006tNc79gy1fir67fx94ij31de0isjww.jpg =1178x676)

## `.info(): undefined`
- 类型：`Function`
- 说明：打印信息类型日志

## `.warn(): undefined`
- 类型：`Function`
- 说明：打印警告类型日志

## `.error(): undefined`
- 类型：`Function`
- 说明：打印错误类型日志

## `.logWithTime(): undefined`
- 类型：`Function`
- 说明：打印时间 + 普通类型日志

## `.infoWithTime(): undefined`
- 类型：`Function`
- 说明：打印时间 + 信息类型日志

## `.warnWithTime(): undefined`
- 类型：`Function`
- 说明：打印时间 + 警告类型日志

## `.errorWithTime(): undefined`
- 类型：`Function`
- 说明：打印时间 + 错误类型日志

## `.table(trs, [options]): undefined`
打印表格。
```js
console.table([
    ['#', 'username', 'password'],
    ['1', 'John Smith', '123901'],
    ['2', 'Tom Mass', 'mmm112333']
]);
```

![](https://ws3.sinaimg.cn/large/006tNc79gy1fir61awdnej30w60bijt5.jpg =1158x414)


```js
console.table([
    ['#', 'username', 'password'],
    ['1', 'John Smith', '123901'],
    ['2', 'Tom Mass', 'mmm112333']
], {
    padding: 5,
    thead: true,
    border: true,
    colors: ['bgBlue', 'yellow']
});
```

![](https://ws4.sinaimg.cn/large/006tNc79gy1fir63obv5lj31kw0gcdj0.jpg =2048x588)

- 类型：`Function`
- 说明：打印表格类型日志

### `trs`
- 类型：`Array`
- 说明：表格行数组

### `options`
- 类型：`Object`
- 说明：打印配置，默认为
```js
defaults = {
    // 内边距
    padding: 1,
    // 是否有表头
    thead: false,
    // 外边框
    border: false,
    // 附加颜色
    colors: []
}
```

## `.point(str): undefined`
打点。
### `str`
- 类型：`String`
- 说明：点
- 默认：`"."`

```js
var points = ['-', '=', '>', '|', '<', '='];
var times = 0;
var time = setInterval(function () {
    var index = times % (points.length - 1);
    console.point(points[index]);

    if (times === 30) {
        clearInterval(time);
        console.pointEnd();
    }

    times++;
}, 300);
```

![](https://ws3.sinaimg.cn/large/006tNc79gy1fir6r91lytg30m80a84qp.gif =800x368)

## `.pointEnd(): undefined`
结束打点。


## `.lineStart(): undefined`
开始划线。

![](https://ws1.sinaimg.cn/large/006tNc79gy1fir5x553vug30m40aw15v.gif =796x392)


## `.line([str]): undefined`
划线。
### `str`
- 类型：`String`
- 说明：点
- 默认：`"="`

## `.lineEnd(): undefined`
停止划线。


## `.loading(interval, [dictionaries])`
loading 显示。

![](https://ws4.sinaimg.cn/large/006tNc79gy1fir5mtwfgzg30m40aw4dg.gif =796x392)

### `interval`
- 类型：`Number`
- 说明：间隔时间
- 默认：`80`

### `dictionaries`
- 类型：`Array`
- 说明：字典
- 默认：`['-', '\\', '|', '/', '-', '\\', '|', '/']`

## `.loadingEnd(): undefined`
停止 loading。


# Dependencies
{{ dependencies }}





# Reference
无。

