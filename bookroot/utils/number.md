# Introduction
{{ introduction }}





# Example
```js
var number = require('blear.utils.number');
```



# Static
## `.parseInt(num, [dftNum=0]): intNum`
将数字转换为整数。
### `num`
- 类型：`*`
- 说明：待转换的数字

### `dftNum`
- 类型：`Number`
- 说明：转换失败的默认值

### `intNum`
- 类型：`Number`
- 说明：转换后的数字


## `.parseFloat(num, [dftNum=0]): floatNum`
将数字转换为浮点数。
### `num`
- 类型：`*`
- 说明：待转换的数字

### `dftNum`
- 类型：`Number`
- 说明：转换失败的默认值

### `floatNum`
- 类型：`Number`
- 说明：转换后的数字


## `.format(num, [separator=","]): formatedStr`
根据规则格式数字。
```js
number.format(123456);
// => "123,456"
```
### `num`
- 类型：`Number`
- 说明：待格式化的数字

### `separator`
- 类型：`String`
- 说明：千分位分隔符

### `formatedStr`
- 类型：`String`
- 说明：格式化之后的数字字符串



## `.abbr(num, fixedLength, maxLevel): abbrStr`
大位数数字缩写。
```js
number.abbr(123456);
// => "123K" 
```

### `num`
- 类型：`Number`
- 说明：大数

### `fixedLength`
- 类型：`Number`
- 说明：保留小数位位数
- 默认：0

### `maxLevel`
- 类型：`Number`
- 说明：最大级别，级别对应值为：`1=空`、`2=K`, `3=M`, `4=G`, `5=T`, `6=P`, `7=E`, `8=Z`, `9=Y`
- 默认：2（`K`）

### `abbrStr`
- 类型：`String`
- 说明：缩写后的数字字符串



## `.to62(num10): num62`
将十进制数字转换为六十二进制（0-9 + a-z + A-Z = 10 + 26 + 26 = 62）。
```js
number.to62(230577);
// => "xyz"
```
### `num10`
- 类型：`Number`
- 说明：十进制

### `num62`
- 类型：`Number`
- 说明：转换后的六十二进制。



## `.from62(num62): num10`
将六十二进制转换为十进制数字。
```js
number.from62('xyz');
// => 230577
```

### `num62`
- 类型：`Number`
- 说明：六十二进制

### `num10`
- 类型：`Number`
- 说明：转换后的十进制。







# Dependencies
{{ dependencies }}





# More
- <http://searchstorage.techtarget.com/definition/Kilo-mega-giga-tera-peta-and-all-that>
