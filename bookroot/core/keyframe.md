# Introduction
{{ introduction }}





# Example
```js
var keyframe = require('blear.core.keyframe');
```






# Static

## `.create([name], descriptions): name`
在 DOM 中创建一个帧动画样式。
生成的帧动画名称可用于 [blear.core.transform](/core/transform.md) 实现 JS 控制帧动画。

```js
keyframe.create({
    0: {
        width: 100,
        transform: {
            rotate: 100,
            scale: 2
        }
    },
    0.5: {
        width: 200,
        transform: {
            rotate: 200,
            scale: 1
        }
    },
    1: {
        width: 300,
        transform: {
            rotate: 300,
            scale: 0.5
        }
    }
});
// => "a2017011717525900"
```

<div class="split text_center">+</div>

```html
<style>

/*
 * keyframe a2017011717525900
 * @create at 2017-01-17 17:52:59
 */
@-webkit-keyframes a2017011717525900{0%{width:100px;transform:rotate(100deg) scale(2);}100%{width:300px;transform:rotate(300deg) scale(0.5);}50%{width:200px;transform:rotate(200deg) scale(1);}}
@-moz-keyframes a2017011717525900{0%{width:100px;transform:rotate(100deg) scale(2);}100%{width:300px;transform:rotate(300deg) scale(0.5);}50%{width:200px;transform:rotate(200deg) scale(1);}}
@-ms-keyframes a2017011717525900{0%{width:100px;transform:rotate(100deg) scale(2);}100%{width:300px;transform:rotate(300deg) scale(0.5);}50%{width:200px;transform:rotate(200deg) scale(1);}}
@keyframes a2017011717525900{0%{width:100px;transform:rotate(100deg) scale(2);}100%{width:300px;transform:rotate(300deg) scale(0.5);}50%{width:200px;transform:rotate(200deg) scale(1);}}
/**/

</style>
```

### name
- 类型：`String`
- 说明：如果为空，则随机生成一个帧动画名词，会被原样返回
- 默认：随机生成

### descriptions
- 类型：`Object`
- 说明：`[0, 1]` 之间的帧动画描述，规则与写 css 一致（参考 [blear.core.attribute](/core/attribute.md)）。





# Dependencies
{{ dependencies }}




