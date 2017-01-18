# Introduction
{{ introduction }}



# Example
```js
var random = require('blear.utils.random');
```



# Static
静态属性、方法


## `.number(min, max): randomNumber`
计算包含 `min` 和 `max` 的范围内的随机整数。
```js
random.number(1, 10);
// => [1, 10] 之间随机整数
```
### `min`
- 类型：`Number`
- 说明：必须是整数，可以小于 0

### `max`
- 类型：`Number`
- 说明：必须是整数，可以小于 0，但必须大于 `min`

### `randomNumber`
- 类型：`Number`
- 说明：包含 `min` 和 `max` 的范围内的随机整数



## `.string([length=6], [dictionary="aA0"]): randomString`
计算指定长度的随机字符串，可以指定字符串字典。
```js
random.string(3, '!@#');
// => "!!!"
```
### `length`
- 类型：`Number`
- 说明：随机字符串长度
- 默认：6

### `dictionary`
- 类型：`String`
- 说明：字典
- 默认：`aA0`

字典字符说明：
- `a`：表示 `a` 到 `z` 的 26 个小写字母
- `A`：表示 `A` 到 `Z` 的 26 个小写字母
- `0`：表示 `0` 到 `9` 的 10 个阿拉伯数字

### `randomString`
- 类型：`String`
- 说明：从指定字典内随机取出指定数量的字符



## `.hexColor(): randomColor`
随机生成一个十六进制颜色值，包含 `#`。
```js
random.hexColor();
// => "#123456"
```

### `randomColor`
- 类型：`String`
- 说明：随机十六进制颜色值



## `.guid([timeStramp=false], [maxLength=16]): guid`
生成一个最短 16 位长度的随机不重复字符串。
```js
random.guid();
// => "2017011615312200"

random.guid(true);
// => "1484551860842000"
```

### `timeStramp`
- 类型：`Boolean`
- 说明：是否以时间戳的形式返回，时间戳只有 13 位，生成的 guid 将会自动补齐 3 位
- 默认：`false`

### `maxLength`
- 类型：`Number`
- 说明：最大长度，最小值是 16
- 默认：16

### `guid`
- 类型：`String`
- 说明：不重复的字符串





# Dependencies
{{ dependencies }}





# Reference
- guid 维基百科：<https://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6>

