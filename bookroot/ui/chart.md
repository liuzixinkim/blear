# Introduction
{{ introduction }}





# Example
```js
var Chart = require('blear.ui.chart');

var chart = new Chart('#demo');
chart.render(options);
```

默认不支持任何图表和组件，在实际开发中需要按需引入。

# 图表
```js
// 折线图
require('blear.ui.chart/src/echarts/chart/line');
// 柱状图
require('blear.ui.chart/src/echarts/chart/bar');
// 饼状图
require('blear.ui.chart/src/echarts/chart/pie');
// 散点图
require('blear.ui.chart/src/echarts/chart/scatter');
// 动态散点图
require('blear.ui.chart/src/echarts/chart/effectScatter');
// 雷达图
require('blear.ui.chart/src/echarts/chart/radar');
// 地图
require('blear.ui.chart/src/echarts/chart/map');
// 树图
require('blear.ui.chart/src/echarts/chart/treemap');
// 关系图
require('blear.ui.chart/src/echarts/chart/graph');
// 仪表盘图
require('blear.ui.chart/src/echarts/chart/gauge');
// 漏斗图
require('blear.ui.chart/src/echarts/chart/funnel');
// 平行坐标
require('blear.ui.chart/src/echarts/chart/parallel');
// 桑基图
require('blear.ui.chart/src/echarts/chart/sankey');
// 箱线图
require('blear.ui.chart/src/echarts/chart/boxplot');
// K线图
require('blear.ui.chart/src/echarts/chart/candlestick');
// 多折线图
require('blear.ui.chart/src/echarts/chart/lines');
// 热力图
require('blear.ui.chart/src/echarts/chart/heatmap');
// 象形柱图
require('blear.ui.chart/src/echarts/chart/pictorialBar');
// 主题河流图
require('blear.ui.chart/src/echarts/chart/themeRiver');
```

# 组件
```js
// 关系组件
require('blear.ui.chart/src/echarts/component/graphic');
// 格子组件
require('blear.ui.chart/src/echarts/component/grid');
// 说明组件
require('blear.ui.chart/src/echarts/component/legend');
// 提示组件
require('blear.ui.chart/src/echarts/component/tooltip');
// 轴线点组件
require('blear.ui.chart/src/echarts/component/axisPointer');
// 极线组件
require('blear.ui.chart/src/echarts/component/polar');
// 地理组件
require('blear.ui.chart/src/echarts/component/geo');
// 并线组件
require('blear.ui.chart/src/echarts/component/parallel');
// 单轴组件
require('blear.ui.chart/src/echarts/component/singleAxis');
// 画笔组件
require('blear.ui.chart/src/echarts/component/brush');
// 日历组件
require('blear.ui.chart/src/echarts/component/calendar');
// 标题组件
require('blear.ui.chart/src/echarts/component/title');
// 数据区域组件
require('blear.ui.chart/src/echarts/component/dataZoom');
// 可视地图组件
require('blear.ui.chart/src/echarts/component/visualMap');
// 马克点组件
require('blear.ui.chart/src/echarts/component/markPoint');
// 马克线组件
require('blear.ui.chart/src/echarts/component/markLine');
// 马克区域组件
require('blear.ui.chart/src/echarts/component/markArea');
// 时间轴组件
require('blear.ui.chart/src/echarts/component/timeline');
// 工具箱组件
require('blear.ui.chart/src/echarts/component/toolbox');
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


