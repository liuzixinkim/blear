# Description
{{description}}


# Example
```js
var object = require('blear.utils.object');
```


# Static

## keys
返回对象的静态键。

```js
object.keys(obj);
```

### obj
- 类型：`Object`


### 返回值
- 类型：`Array`


## isPlain
判断对象是否为无属性对象。
```js
object.isPlan(obj);
```

### obj
- 类型：`Object`
- 说明：传入对象

### 返回值
- 类型：`Boolean`



## hasOwn
判断对象是否有自身属性，即静态属性
```js
object.hasOwn(obj, key);
```

### obj
- 类型：`Object`
- 说明：待判断对象

### key
- 类型：`String`
- 说明：字段名称

### 返回值
- 类型：`Boolean`


## each
对象的遍历。
```js
object.each(obj, callback(key, val));
```

### obj
- 类型：`Object`

### callback
- 类型：`Function`
- 说明：返回 `false` 终止遍历

#### this
- 类型：`Object`
- 说明：指向当前传入的对象 `obj`

#### key
- 类型：`String`
- 说明：字段名称

#### val
- 类型：`any`
- 说明：对应字段的值

### 返回值
- 类型：`undefined`


## define
定义一个对象的属性
```js
object.define(obj, key, [desc]);

object.define({}, 'a', {
    get: function () {
        return 1
    },
    set: function() {
      
    }
});

object.define({}, {
    a: {
        value: 2
    },
    b: {
        get: function() {
            return 3;
        }
    }
});
```

### obj
- 类型：`Object`
- 说明：待定义属性的对象。

### key
- 类型：`String | Object`
- 说明：如果是字符串，则必须传入 desc，作为该字段的描述，如果是对象，则批量定义对象属性

### desc
- 类型：`Object`
- 说明：对字段的描述

描述的值有：

#### desc.writable
- 类型：`Boolean`
- 说明：是否可以被重写

#### desc.enumerable
- 类型：`Boolean`
- 说明：是否可以被重写

#### desc.configurable
- 类型：`Boolean`
- 说明：是否可以被配置，即是否可以被删除

#### desc.get
- 类型：`Function`
- 说明：取值函数

#### desc.set
- 类型：`Boolean`
- 说明：是否可以被重写

#### desc.value
- 类型：`Boolean`
- 说明：是否可以被重写



# Dependencies
{{dependencies}}


# More
这里写更多的额外内容，可以不写。

