# Introduction
{{ introduction }}





# Example
```js
var DateSelct = require('blear.ui.date-select');
```




# Static
`.defaults`
`.defaults.el`
- 类型：`String|HTMLElement`
- 说明：元素

`.defaults.addClass`
- 类型：`String`
- 说明：附加的类名

`.defaults.dates`
- 类型：`Array`
- 说明：指定的日期数组

`.defaults.active`
- 类型：`Number`
- 说明：激活的索引值

`.defaults.descriptions`
- 类型：`Array`
- 说明：日期描述

`.defaults.weeks`
- 类型：`Number`
- 说明：一个月显示几周
- 默认：`6`

`.defaults.firstDayInWeek`
- 类型：`Number`
- 说明：每周开始第一天是星期几
- 默认：`0`（周日）

`.defaults.hideBefore`
- 类型：`Boolean`
- 说明：是否隐藏今天以前
- 默认：`true`

`.defaults.hideToday`
- 类型：`Boolean`
- 说明：隐藏今天
- 默认：`true`

`.defaults.hideNotMonth`
- 类型：`Boolean`
- 说明：隐藏非本月日期
- 默认：`false`

`.defaults.slideAnimation`
- 类型：`function`
- 说明：滑动动画
- 默认：`undefined`



# `new DateSelect(options)`
实例化一个有限日期选择器。



# Prototype
原型属性、方法

## `#getOrderedDates(): dates`
### `dates`
- 类型：`Array`
- 说明：排序之后的日期



## `#destroy()`
销毁实例。




# Events
## `select(index, date)`
选择日期之后触发。
### `index`
- 类型：`Number`
- 说明：日期索引值

### `date`
- 类型：`Date`
- 说明：日期






# Dependencies
{{ dependencies }}





# Reference
无。

