# Introduction
{{ introduction }}





# Example
```js
var DateTimePicker = require('blear.ui.date-time-picker');

var dtp = new DateTimePicker();

dtp.on('select', function(date) {
    // 选中的日期为 date
});
```




# Static
## `.defaults`
## `.defaults.minDate`
- 类型：`Number | Date`
- 说明：最小日期，`0` 表示无最小日期
- 默认：`0`

## `.defaults.maxDate`
- 类型：`Number | Date`
- 说明：最大日期，`0` 表示无最大日期
- 默认：`0`

## `.defaults.firstDayInWeek`
- 类型：`Number`
- 说明：一周的第一天星期几，默认为 `0`，即星期日
- 默认：`0`

## `.defaults.timeable`
- 类型：`Boolean`
- 说明：是否时间可操作
- 默认：`false`

## `.defaults.minutesable`
- 类型：`Boolean`
- 说明：是否可操作分
- 默认：`true`

## `.defaults.secondsable`
- 类型：`Boolean`
- 说明：是否可操作秒
- 默认：`false`

## `.defaults.autoClose`
- 类型：`Boolean`
- 说明：是否自动关闭弹窗
- 默认：`true`



# `new DateTimePicker(options)`
实例化一个一定范围的时间日期选择器。`options` 默认值为 `.defaults`。



# Prototype
## `#select(date): this`
选择一个日期。

### `date`
- 类型：`Number | Date`
- 说明：时间戳或者日期

## `#changeView(year, month): this`
切换视图。

### `year`
- 类型：`Number`
- 说明：年

### `month`
- 类型：`Number`
- 说明：月


## `#changeMinDate(date): this`
改变最小日期。
### `date`
- 类型：`Number|Date`
- 说明：日期或者时间戳


## `#changeMaxDate(date): this`
改变最大日期。
### `date`
- 类型：`Number|Date`
- 说明：日期或者时间戳


## `#open(): this`
打开日期时间选择器弹窗。



# Events
## `select(date)`
选择日期后触发。
### `date`
- 类型：`Date`
- 说明：选择的日期






# Dependencies
{{ dependencies }}





# Reference
无。

