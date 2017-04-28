# Introduction
{{ introduction }}





# Example
```scss
@import './path/to/node_modules/blear.scss.hairline/src/index';

.demo {
  &-border {
    @include hairline($border-color, 30px);
  }

  &-top {
    @include hairline-top($border-color);
  }

  &-right {
    @include hairline-right($border-color);
  }

  &-bottom {
    @include hairline-bottom($border-color);
  }

  &-left {
    @include hairline-left($border-color);
  }
}
```

![](http://ww2.sinaimg.cn/large/006tNbRwgy1ff28vo8fdmj30gw0mqwf7.jpg)




# Dependencies
{{ dependencies }}





# Reference
- [《移动端高清多屏适配方案》（FED社区）](http://frontenddev.org/link/mobile-high-definition-screen-adaptation-scheme.html)
- [《移动端手机 retina 屏 1px border》（FED社区）](http://frontenddev.org/link/mobile-phone-1-px-retina-screen-border.html)
