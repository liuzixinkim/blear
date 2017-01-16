# Introduction
{{ introduction }}





# Example
```js
var validator = require('blear.utils.validator');
```


# Static
## `.isNumber(str): isNumber`
验证字符串是否为一个合法数字。

```js
validator.isNumber('-12.34');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isNumber`
- 类型：`Boolean`



## `.isHTTP(str): isHTTP`
验证字符串是否为一个合法 HTTP 地址。

```js
validator.isHTTP('http://blear.ydr.me');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isHTTP`
- 类型：`Boolean`



## `.isEmail(str): isEmail`
验证字符串是否为一个合法邮箱地址。

```js
validator.isEmail('cloud@come.com');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isEmail`
- 类型：`Boolean`



## `.isMobile(str): isMobile`
验证字符串是否为一个合法手机号。目前验证的手机号规则是：

* 13段：130、131、132、133、134、135、136、137、138、139
* 14段：145、147
* 15段：150、151、152、153、155、156、157、158、159
* 17段：170、171、173、176、177、178
* 18段：180、181、182、183、184、185、186、187、188、189

```js
validator.isMobile('18812349876');
// => true
```


### `str`
- 类型：`String`
- 说明：待验证字符串

### `isMobile`
- 类型：`Boolean`



## `.isIP(str): isIP`
验证字符串是否为一个合法 IP 地址。

```js
validator.isIP('123.123.123.123');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isIP`
- 类型：`Boolean`



## `.isInteger(str): isInteger`
验证字符串是否为一个合法整数。

```js
validator.isInteger('123');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isInteger`
- 类型：`Boolean`



## `.isIDCard(str): isIDCard`
验证字符串是否为一个合法身份证号码。

```js
validator.isIDCard('123123199909091234');
// => true
```

### `str`
- 类型：`String`
- 说明：待验证字符串

### `isIDCard`
- 类型：`Boolean`






# Dependencies
{{ dependencies }}




