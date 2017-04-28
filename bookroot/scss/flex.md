# Introduction
{{ introduction }}





# Example
```scss
@import './path/to/node_modules/blear.scss.flex/src/index';

.flex {
  @include flex();
}

.inline-flex {
  @include flex(inline);
}

.flex-direction-row {
  @include flex-direction(row);
}

.flex-direction-default {
  @include flex-direction();
}

.flex-direction-col {
  @include flex-direction(column);
}

.flex-direction-row-reverse {
  @include flex-direction(row-reverse);
}

.flex-direction-col-reverse {
  @include flex-direction(column-reverse);
}

.flex-wrap-no {
  @include flex-wrap();
}

.flex-wrap-yes {
  @include flex-wrap(wrap);
}

.flex-basis-1 {
  @include flex-basis(1);
}

.flex-grow-1 {
  @include flex-grow(1);
}

.flex-shrink-1 {
  @include flex-shrink(1);
}

.flex-order-1 {
  @include order(1);
}

.justify-content-center {
  @include justify-content(center);
}

.align-items-center {
  @include align-items(center);
}

.align-self-center {
  @include align-self(center);
}

.align-content-center {
  @include align-content(center);
}
```




# Dependencies
{{ dependencies }}





# Reference
- [《Flex 布局教程：语法篇》（阮一峰）](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [《Flex 布局教程：实例篇》（阮一峰）](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- <http://w3.org/tr/css3-flexbox>
- [zessx/sass-flexbox](https://github.com/zessx/sass-flexbox)
- [mastastealth/sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin)

