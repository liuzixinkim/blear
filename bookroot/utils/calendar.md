# Introduction
{{ introduction }}


# Example
```js
var calendar = require('blear.utils.calendar');
```


# Static
## `.month(year, month, [options]): calendarGroup`
月历计算。
```js
calendar.month(2016, 3);
// =>
// 从 2.27 开始填充
// [
//     [
//         {
//             "year": 2016,
//             "month": 2,
//             "date": 27,
//             "prevMonth": true,
//             "id": 20160327,
//             "thisMonth": false,
//             "nextMonth": false,
//             "today": false,
//             "startTime": 1459008000000,
//             "endTime": 1459094399999,
//             "day": 0,
//             "weeks": 0
//         },
//         ...
//     ],
//     ...
// ]
```

### `year`
- 类型：`Number`
- 说明：需要计算月历的年

### `month`
- 类型：`Number`
- 说明：需要计算月历的月

### `options`
- 类型：`Object`
- 说明：可选配置项

#### `options.firstDayInWeek`
- 类型：`Number`
- 说明：每周的第一天是星期几
- 默认：`0`，即星期日

#### `options.weeks`
- 类型：`Number`
- 说明：月历需要展示几周
- 默认：自动最小周数

#### `options.filter`
- 类型：`Function`
- 说明：对月历的一个过滤操作，但不会对其进行筛选

### `calendarGroup`
- 类型：`Array`
- 说明：一个二维数组`[[第一周的每天], [第二周的每天], ...]`


# Dependencies
{{ dependencies }}


# Reference
这里写更多的额外内容，可以不写。

