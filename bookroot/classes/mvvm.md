# Introduction
{{ introduction }}


# Example
```js
var MVVM = require('blear.classes.mvvm');

var mvvm = new MVVM(Options);
```


## Options

## el
- 类型：`String | HTMLelement` 
- 说明：元素，选择器、DOM 元素

## data
- 类型：`Object` 
- 说明：需要绑定的数据，必须是对象

## computed
- 类型：`Object {Function | {get: Function, set: Function}}` 
- 说明：计算属性，必须是对象
- 例如：

```js
new MVVM({
    el: '#app',
    data: {
        firstName: 'John',
        lastName: 'Moo'
    },
    computed: {
        fullName1: function () {
            return this.firstName + this.lastName;
        },
        
        fullName2: {
            get: function () {
                return this.firstName + this.lastName;
            },
            set: function(fullName) {
                fullName = fullName.split(' ');
                this.firstName = fullName[0];
                this.lastName = fullName[1];
            }
        }
    }
});
```

# Directives
内置的指令有：

## 控制指令
### @if
```html
<div @if="bool1">if bool1 == true</div>
```

### @else-if
```html
<div @if="bool1">if bool1 == true</div>
<div @else-if="bool2">if bool1 == false && bool2 == true</div>
```

### @else
```html
<div @if="bool1">if bool1 == true</div>
<div @else-if="bool2">if bool1 == false && bool2 == true</div>
<div @else>if bool1 == false && bool2 == false</div>
```

### @show
```html
<div @show="bool1">if bool1 == true show</div>
```

### @hide
```html
<div @hide="bool1">if bool1 == true hide</div>
```

### @for
**list**必须为数组。
```html
<div @for="item in list"></div>
<div @for="index, item in list"></div>
<div @for="(index, item) in list"></div>
```

### @pre
```html
<div @pre>{{这里必须原样输出}}</div>
```

### @model
模型指令。用来监听 DOM 数据变化。
```html
<input type="text" @model="userName">
```

## 绑定指令
### :{attrName}
```html
<div :any-attr="varible"></div>
```

### :class
```js
var data = {
    isClassA: true,
    isClassB: false,
    classA: 'class-A',
    classB: 'class-B'
}
```

<div>+</div> 

```html
<div class="a" :class="{class-a: isClassA, class-b: isClassB}"></div>
<div class="b" :class="[classA, classB]"></div>
<div class="c" :class="[classA, classB, {class-a: isClassA, class-b: isClassB}]"></div>
```

<div>=</div>

```html
<div class="a class-a"></div>
<div class="b class-A class-B"></div>
<div class="c class-A class-B class-a"></div>
```

### :style
自动处理兼容性，不必写 CSS 私有前缀。

```js
var data = {
    height: 200
};
```

<div>+</div> 

```html
<div :style="width: 100, height: height"></div>
```

<div>=</div> 

```html
<div style="width: 100px; height: 200px;"></div>
```


## 事件指令
### @{eventType}
所有未明确的指令都会划分为事件指令。
```html
<button @click="onClick($el, $ev)"></button>
```
### this
- 类型：`this`
- 说明：指向 `data`

### $el
- 类型：`HTMLElement`
- 说明：当前事件源

### $ev
- 类型：`Event`
- 说明：当前事件


## 指令过滤器
使用`.`分隔符用来过滤指令。

### .once 和 *
一次性绑定。
```html
<div :any-attr.once="varible">{{* varible}}</div>
```

### prop
指定绑定属性为 property（延伸：[JS DOM 的attribute 与 property](http://frontenddev.org/link/js-dom-attribute-and-property.html)）。


### 按键别名
支持以下按键别名：

- `tab`
- `enter`
- `space`
- `delete`
- `up`
- `left`
- `right`
- `down`

用法
```html
<input type="text" @keyup.enter="onEnter">
```

### 事件传递
支持以下事件传递：

- `prevent`: 相当于`ev.preventDefault()`
- `stop`: 相当于`ev.stopPropagation()`
- `false`: 相当于`ev.preventDefault()`、`ev.stopPropagation()`和`ev.stopImmediatePropagation()`

用法

```html
<button @click.prevent="onClick"></button>
```


### 输入过滤
- `number` 将输入字符串转换为数字
- `trim` 将输入字符串去除两端空白

用法
```html
<input @model.trim="userName">
<input @model.number="age">
```


# Prototype
## #watch
监视表达式变化。

```js
mvvm.watch(exp, listener, options);
```

### exp
- 类型：`String | Function`
- 说明：表达式字符串或函数

### listener
- 类型：`Function`
- 说明：监听函数

### options
- 默认：`{imme: false, deep: false}`
- 类型：`Object`

#### options.imme
- 默认：`false`
- 类型：`Boolean`
- 是否立即回调，即回调初始值

#### options.deep
- 默认：`false`
- 类型：`Boolean`
- 是否深度监听（**目前未实现**）

## directive
自定义实例级别的指令，只能被当前实例使用。
```js
mvvm.directive(name, definition);
```

### name
- 类型：`String`
- 说明：指令名称，不需要前缀。

### definition
- 类型：`Object | Function`
- 说明：指令定义，可以是一个 update 函数，或者是指令定义对象。
- 例如：
    
```js
mvvm.directive('my-directive-1', function update(node, newVal, oldVal, singal) {
    // ...
});

mvvm.directive('my-directive-2', {
    init: function () {
        // ...
    },
    bind: function (node, newVal) {
        // ...
    },
    update: function (node, newVal, oldVal, singal) {
        // ...
    },
    destroy: function () {
        // ...
    }
});
```

## destroy
销毁当前 MVVM。
```js
mvvm.destroy();
```


# Static

## directive
自定义静态（全局）级别的指令，可以被所有实例使用。使用方法与`mvvm.directive`一致。
```js
MVVM.directive(name, definition);
```


# Dependencies
{{ dependencies }}


# More
- <https://cn.vuejs.org/>
- <http://avalonjs.coding.me/>
- <https://angularjs.org/>
- <https://facebook.github.io/react/>
