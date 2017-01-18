# Introduction
{{ introduction }}





# Example
```js
var date = require('blear.utils.date');
```




# Static

## `.id(date): id`
```js
date.id(new Date());
// => 20170115
```

### `date`
- 类型：`Date`
- 说明：日期对象

### `id`
- 类型：`Number`
- 说明：以为由`fullYear + (month + 1) + date`组成的唯一 ID，可以用作日期比较


## `.fromId(id): date`
将日期 ID 转换为日期，是 `.id` 方法的逆转。
```js
date.fromId(id);

date.fromId(20170115);
// => new Date(2017, 0, 15)
```

### `id`
- 类型：`Number`
- 说明：日期 ID

### `date`
- 类型：`Date`
- 说明：返回日期对象，精确到年月日


## `.parse(...args): date`
根据传入的参数解析为一个日期对象。

### 0 个参数
将参数作为时间戳、或者是日期字符串描述、或者是一个日期对象。
```js
date.parse();
// => new Date()
```


### 1 个参数
将参数作为时间戳、或者是日期字符串描述、或者是一个日期对象。
```js
date.parse(new Date());
// => new Date()

date.parse(new Date().getTime());
// => new Date()
```

### 2 个参数
- 参数 1：年
- 参数 2：月

### 3 个参数
- 参数 1：年
- 参数 2：月
- 参数 3：日

### 4 个参数
- 参数 1：年
- 参数 2：月
- 参数 3：日
- 参数 4：时

### 5 个参数
- 参数 1：年
- 参数 2：月
- 参数 3：日
- 参数 4：时
- 参数 5：分

### 6 个参数
- 参数 1：年
- 参数 2：月
- 参数 3：日
- 参数 4：时
- 参数 5：分
- 参数 6：秒

### 7 个参数
- 参数 1：年
- 参数 2：月
- 参数 3：日
- 参数 4：时
- 参数 5：分
- 参数 6：秒
- 参数 7：毫秒




## `.format(format, [date]): formated`
格式化日期。主要参考 [ECMA规范定义][ecma date time string format]：`YYYY-MM-DDTHH:mm:ss.sssZ`，次要参考 [moment](http://momentjs.com/)。
更多阅读参考页底的更多链接。

```js
date.format('YYYY-MM-DD HH:mm:ss.SSS 周ea');
// => "2017-01-15 18:15:01.289 周日下午"
```

### `format`
- 类型：`String`
- 说明：格式化字符串，有以下标记：
    - 年：`Y`
    - 月：`M`
    - 日：`D`
    - 时：`H` 表示 24 小时制，`h` 表示 12 小时制
    - 分：`M`
    - 秒：`s`
    - 毫秒：`S`，注意与秒区分
    - 星期：`e`，默认是汉字“一二三四五六日”
    - 上下午：`a`，默认是汉字“上午、下午”

### `date`
- 类型：`Date`

### `formated`
- 类型：`String`
- 说明：格式化之后的字符串


## `.isLeapYear(year): isLeapYear`
判断是否为闰年。
```js
date.isLeapYear(2014);
// => false
```

### `year`
- 类型：`Number`
- 说明：年

### `isLeapYear`
- 类型：`Boolean`


## `.getDaysInMonth(year, month): days`
获得某年某月的天数。
```js
date.getDaysInMonth(2014, 9);
// => 31
```

### `year`
- 类型：`Number`
- 说明：年

### `month`
- 类型：`Number`
- 说明：月

### `days`
- 类型：`Number`
- 说明：天数


## `.getDaysInMonth(year, month, date): days`
获得某年某月某日在当年的第几天。
```js
date.getDaysInMonth(2014, 0, 1);
// => 1
```

### `year`
- 类型：`Number`
- 说明：年

### `month`
- 类型：`Number`
- 说明：月

### `date`
- 类型：`Number`
- 说明：日

### `days`
- 类型：`Number`
- 说明：天数


## `.getWeeksInYear(year, month, date, [weekStartDay=0]): weeks`
计算某年某月某日是当年的第几周，第一周为 1，而不是 0。
```js
// 判断 2014 年 10 月 24 日是 2014 年的第几周
date.getWeeksInYear(2014, 9, 24);
// => 43（第 43 周）
```

### `year`
- 类型：`Number`
- 说明：年

### `month`
- 类型：`Number`
- 说明：月

### `date`
- 类型：`Number`
- 说明：日

### `weekStartDay`
- 类型：`Number`
- 说明：一周开始是星期几，0 为周日
- 默认：`0`

### `weeks`
- 类型：`Number`
- 说明：周数


## `.getWeeksInMonth(year, month, d, [weekStartDay=0]): weeks`
计算某年某月某日是当月的第几周，第一周为 1，而不是 0。

```js
// 判断 2014 年 10 月 24 日是 2014 年 10 月的第几周
date.getWeeksInMonth(2014, 9, 24);
// => 4（第 4 周）
```

### `year`
- 类型：`Number`
- 说明：年

### `month`
- 类型：`Number`
- 说明：月

### `date`
- 类型：`Number`
- 说明：日

### `weekStartDay`
- 类型：`Number`
- 说明：一周开始是星期几，0 为周日
- 默认：`0`

### `weeks`
- 类型：`Number`
- 说明：周数


## `.from(to, [from=now]): humanized`
时间比较，符合人类阅读。

```js
date.from(new Date());
// => "刚刚"
```

### `to`
- 类型：`Number | String | Date`
- 说明：比较时间

### `from`
- 类型：`Number | String | Date`
- 说明：被比较时间
- 默认：当前时间

### `humanized`
- 类型：`String`
- 说明：时间差距描述，内置的描述有
    - 过去时间
        - 刚刚
        - N秒前
        - N分钟前
        - N小时前
        - N天前
        - N月前
        - N年前
        - 很久之前
    - 将来时间
        - 即将
        - N秒后
        - N分钟后
        - N小时后
        - N天后
        - N月后
        - N年后
        - 很久之后


## `.iso(date): isoString`
将日期时间转换为 [ISO8601 标准][w3c datetime]（YYYY-MM-DDThh:mm:ss.sTZD）。
```js
date.iso(new Date());
// => "2017-01-15T10:26:09.999Z"
```

### `date`
- 类型：`Date`
- 说明：日期


### `isoString`
- 类型：`String`
- 说明：ISO 标准字符串


## `.start(date): startTime`
获取日期的开始时间（即：当天的 0:0:0:000）。

### `date`
- 类型：`Date`
- 说明：日期

### `startTime`
- 类型：`Date`
- 说明：当天开始时间



## `.end(date): endTime`
获取日期的结束时间（即：当天的 23:59:59:999）。

### `date`
- 类型：`Date`
- 说明：日期

### `endTime`
- 类型：`Date`
- 说明：当天结束时间







# Dependencies
{{ dependencies }}





# Reference
- [ecma date time string format]
- [w3c datetime]
- <https://zh.wikipedia.org/wiki/ISO_8601>
- <http://momentjs.com/>


[ecma date time string format]: http://www.ecma-international.org/ecma-262/7.0/index.html#sec-date-time-string-format
[w3c datetime]: https://www.w3.org/TR/NOTE-datetime
