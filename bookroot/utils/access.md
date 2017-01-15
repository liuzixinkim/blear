# Introduction
{{ introduction }}


# Example
```js
var access = require('blear.utils.access');
```


# Static
## args
将 `Arguments` 转换为数组，末尾 undefined 的项将会被丢弃。
```js
access.args(arguments);

access.args([1, 2, undefined, undefined, undefined]);
// => [1, 2]
```

### arguments
- 类型：`Arguments`
- 说明：函数传入实参

### 返回值
- 类型：`Array`
- 说明：返回一个新数组



## getSet
单个函数 get、set 处理器。

```js
access.getSet(getSet, args);

var fn = function(key, val){
    return access.getset({
        get: function(key){
            return 'get ' + key;
        },
        set: function(key, val){
            console.log('set ' + key + ' = ' + val);
        }
    }, arguments);
};

fn('a');
// => "get a"

fn(['a', 'b']);
// => {a: "get a", b: "get b"}

fn('a', 1);
// => set a = 1

fn({a: 1, b: 2});
// => set a = 1
// => set b = 2
```

### getSet
- 类型：`Object`
- 说明：get、set 描述对象

#### getSet.get
- 类型：`Function`
- 说明：取值函数

#### getSet.set
- 类型：`Function`
- 说明：设值函数

#### getSet.setLength
- 类型：`Number`
- 说明：设值时的参数的个数
- 默认：`2`

#### getSet.eachSet
- 类型：`Boolean`
- 说明：是否遍历每一次 set 操作
- 默认：`true`
- 例如：
```js
// 这是 set 操作，并且要遍历每一次 set
// 对应的 setLength=2
removeAttr(node, ['id', 'class', 'name']);
// 结果将删除 node 节点上的 id、class、name 三个属性
```

#### getSet.eachGet
- 类型：`Boolean`
- 说明：是否遍历每一次 get 操作
- 默认：`true`
- 例如：
```js
// 这是 get 操作，并且要遍历每一次 get
getAttr(node, ['id', 'class', 'name']);
// => {id: "id", class: "class", name: "name"}
```


### args
- 类型：`Arguments`
- 说明：实参




# Dependencies
{{ dependencies }}



