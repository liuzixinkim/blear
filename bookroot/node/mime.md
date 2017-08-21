# Introduction
{{ introduction }}





# Example
```js
var mime = require('blear.node.mime');
```




# Static

## `.get(extname, defaultContentType): contentType`
根据扩展名获取 MIME。
```js
mine.get('.jpg');
// => "image/jpeg"

mine.get('xxxxxx');
// => "application/octet-stream"

mine.get('xxxxxx', 'what');
// => "what"
```

## `.set(extname, contentType): map`
根据扩展名设置 MIME。
```js
mine.set('.900', 'yyy');
// => {map}

mine.get('.900', 'zzz')
// => "yyy"
```


# Dependencies
{{ dependencies }}





# Reference
无。

