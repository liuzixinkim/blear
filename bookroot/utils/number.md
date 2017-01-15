# Introduction
{{ introduction }}





# Example
```js
var number = require('blear.utils.number');
```



# Static
## parseInt
将数字转换为整数。
```js
number.parseInt(num, [dftNum=0]);
```
### num
- 类型：`*`
- 说明：待转换的数字

### dftNum
- 类型：`Number`
- 说明：转换失败的默认值

### 返回值
- 类型：`Number`
- 说明：转换后的数字


## parseFloat
将数字转换为浮点数。
```js
number.parseFloat(num, [dftNum=0]);
```
### num
- 类型：`*`
- 说明：待转换的数字

### dftNum
- 类型：`Number`
- 说明：转换失败的默认值

### 返回值
- 类型：`Number`
- 说明：转换后的数字


## format
根据规则格式数字。
```js
number.format(num, [separator=","]);

number.format(123456);
// => "123,456"
```
### num
- 类型：`Number`
- 说明：待格式化的数字

### separator
- 类型：`String`
- 说明：千分位分隔符



## abbr
大位数数字缩写。
```js
number.abbr(num, fixedLength, maxLevel);

number.abbr(123456);
// => "123K" 
```

### num
- 类型：`Number`
- 说明：大数

### fixedLength
- 类型：`Number`
- 说明：保留小数位位数
- 默认：0

### maxLevel
- 类型：`Number`
- 说明：最大级别，级别对应值为：`1=空`、`2=K`, `3=M`, `4=G`, `5=T`, `6=P`, `7=E`, `8=Z`, `9=Y`
- 默认：2（`K`）

### 返回值
- 类型：`String`
- 说明：缩写后的数字字符串



## to62
将十进制数字转换为六十二进制（0-9 + a-z + A-Z = 10 + 26 + 26 = 62）。
```js
number.to62(num10);

number.to62(230577);
// => "xyz"
```
### num10
- 类型：`Number`
- 说明：十进制

### 返回值
- 类型：`Number`
- 说明：转换后的六十二进制。



## from62
将六十二进制转换为十进制数字。
```js
number.from62(num62);

number.from62('xyz');
// => 230577
```

### num62
- 类型：`Number`
- 说明：六十二进制

### 返回值
- 类型：`Number`
- 说明：转换后的十进制。







# Dependencies
{{ dependencies }}





# More
- <http://searchstorage.techtarget.com/definition/Kilo-mega-giga-tera-peta-and-all-that>
