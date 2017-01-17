# Introduction
{{ introduction }}





# Example
blear.core.flexible 不是一个 commonjs 规范的模块，需要使用 `script` 标签引入。

```html
<head>
    <!-- 需要在 head 标签里将 flexible 内联引入 -->
    <!-- 或者内嵌引入 -->
    <script src="/node_modules/blear.core.flexible/src/index.js"></script>
</head>
```



# Static
引入 flexible 之后会在 window 上注入 `flexible` ，包含以下静态属性、方法。


## `.value`
参考值。计算公式是：`width * 100 / desginWidth`。

- 类型：`Number`


## `.onChange(callback): undefined`
`value` 值变化之后回调。

- 类型：`Function`

### `callback`
- 类型：`Function`


## `.px2rem(px): rem`
根据 `value` 值将 `px` 转换为 `rem`。

### `px`
- 类型：`Number`

### `rem`
- 类型：`Number`


## `.rem2px(rem): px`
根据 `value` 值将 `rem` 转换为 `px`。

### `rem`
- 类型：`Number`

### `px`
- 类型：`Number`




# Dependencies
{{ dependencies }}





# More
- 淘宝 flexible - 可伸缩布局方案：<https://github.com/amfe/lib-flexible>
- Rem精简版实现自适应：<http://caibaojian.com/simple-flexible.html>

