# Introduction
{{ introduction }}





# Example
```js
var Chart = require('blear.ui.chart');

var chart = new Chart('#demo');
chart.render(options);
```




# Static
## `.map(area, desc)`
注册地图（已内置中国地图）。
```js
Chart.map('china', require('blear.ui.chart/src/maps/china.json'));
```

### `area`
- 类型：`String`
- 说明：地图区域名称

### `desc`
- 类型：`Object`
- 说明：地图描述对象


# `new Chart(options)`
实例化一个图表实例。


# Prototype

## `#render(options): this`
对图表进行重新渲染。
### `options`
- 类型：`Object`
- 说明：图表配置

## `#decorate(options): this`
对图表进行装饰。
### `options`
- 类型：`Object`
- 说明：图表配置

## `#destroy()`
销毁实例。



# Dependencies
{{ dependencies }}





# Reference
- ECharts 官网：<http://echarts.baidu.com/>


