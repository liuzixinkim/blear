# Introduction
{{ introduction }}





# Example
```js
var Class = require('blear.classes.class');

// 创建一个动物类
var Animal = Class.extend({
    className: 'Animal',
    
    constructor: function() {
        // 相当于 super();
        Animal.parent(this);
    },
    
    speak: function() {
        console.log('动物会发声');
    }
});

// 再创建一个人类，继承于动物类
var People = Animal.extend({
    className: 'People',
    
    constructor: function() {
        // 相当于 super();
        People.parent(this);
    },
    
    speak: function() {
        // 相当于 super.speak();
        People.invoke('speak', this);
        
        console.log('人类会说话');
    }
});

// 最后创建一个学生类，继承于人类
var Student = People.extend({
    className: 'Student',
   
    constructor: function() {
        // 相当于 super();
        Student.parent(this);
    },
    
    speak: function() {
        // 相当于 super.speak();
        Student.invoke('speak', this);
        
        console.log('学生会说老师好');
    }
});

var xiaoming = new Student();

xiaoming.speak();
// => "动物会发声"
// => "人类会说话"
// => "学生会说老师好"
```






# Prototype
## `#classId`
每一个由 `Class` 继承来的类的原型都有这样一个标记，他是一个自增数字。





# Static
## `.extend(childClass)`
继承当前类，实现子类。同样的，继承的子类也有这些静态方法。

### `childClass`
- 类型：`Object | Function`
- 说明：子类实现

```js
// 直接使用一个构造函数
ParentClass.extend(function ChildClassConstructor() {
    // 子类构造函数
});

// 使用对象描述
ParentClass.extend({
    constructor: function ChildClassConstructor() {
        // 子类构造函数
    }
});
```

## `.parent(childInstance, ...args)`
- 类型：`Function`
- 说明：调用父类构造函数

### `.parent: childInstance`
- 类型：`Object`
- 说明：子类的实例

### `.parent: ...args`
- 类型：`*`
- 说明：父类构造函数接收的参数

## `.invoke(method, childInstance, ...args)`
只有在子类覆盖祖先类相同原型方法的时候才需要 `invoke` 调用祖先类的相同原型方法。
```js
var Father = Class.extend({
    constructor: function () {
        this.lang = '法语';
    },
    
    speak: function(way) {
        console.log('我会' + way + '说 ' + this.lang);
    }
});

var Child = Father.extend({
    constructor: function() {
        // father 已经教会了 child 说法语
        Father.parent(this);
        
        // child 自行学会了德语
        this.childLang = '德语';
    },
    
    speak: function(way) {
        // 把 father 教会的东西实现一次
        Child.invoke('speak', this, way);
        
        console.log('我同时会' + way + '说' + this.childLang);
    },
    
    sing: function() {
        console.log('我会唱歌');
    }
});

var xiaoming = new Child();

xiaoming.speak('站着');
// => "我会站着说法语"
// => "我同时会站着说德语"
```



### `.invoke: method`
- 类型：`String`
- 说明：祖先类的原型方法名称

### `.invoke: childInstance`
- 类型：`Object`
- 说明：子类的实例

### `.invoke: ...args`
- 类型：`*`
- 说明：祖先类的原型方法接收的参数






# Dependencies
{{ dependencies }}





# Reference
- ES6 的 class：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes>
