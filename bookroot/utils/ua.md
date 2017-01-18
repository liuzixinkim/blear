# Introduction
{{ introduction }}







# `ua(uaStr): result`
user-agent 字符串解析，文件体积比较大，建议在 Node 端解析。

```js
var ret = ua('Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 ' +
 'like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko)' +
  ' CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3');
 
ret = {
    browser: {  //浏览器信息
        name: 'Chrome',
        version: {
            original: '19.0.1084.60'
        }
    },
    engine: {   //浏览器内核
        name: 'Webkit',
        version: {
            original: '534.46.0'
        }
    },
    os: {       //操作系统
        name: 'iOS',
        version: {
            original: '5.1.1'
        }
    },
    device: {   //硬件信息
        type: 'mobile',
        manufacturer: 'Apple',
        model: 'IPHONE'
    }
}
```

## `uaStr`
- 类型：`String`

## `result`
- 类型：`Object`
- 说明：解析之后的结果

### `result.browser.name`
- 类型：`String`
- 说明：浏览器名称，如`Chrome`

### `result.browser.version.original`
- 类型：`String`
- 说明：浏览器原始版本号

### `result.engine.name`
- 类型：`String`
- 说明：浏览器引擎

### `result.engine.version.original`
- 类型：`String`
- 说明：浏览器引擎原始版本号

### `result.os.name`
- 类型：`String`
- 说明：系统名称

### `result.os.version.original`
- 类型：`String`
- 说明：系统原始版本号

### `result.device.type`
- 类型：`String`
- 说明：设备类型
    - `mobile` 手机
    - `tablet` 平板
    - `desktop` 桌面
    
### `result.device.manufacturer`
- 类型：`String`
- 说明：设备制造商
    - `Apple`
    - `Samsung`
    - `Huawei`
    - `Xiaomi`
    - `Vivo`
    - `Oppo`
    - `Lenovo`
    - `Coolpad`
    - `Meizu`
    - `Htc`
    - `Gionee`
    - `Lg`
    - `Tcl`
    - `Zte`
    - `Uimi`
    - `Eton`
    - `Smartisan`
    - `Asus`
    - `Nubia`
    - `Haier`
    - `K-Touch`
    - `Doov`
    - `koobee`
    - `Sony`
    - `Haojixing`
    - `Hisense`

### `result.device.model`
- 类型：`String`
- 说明：设备模式，如 `IPHONE`



# Dependencies
{{ dependencies }}





# Reference
- 百度 FEX-team UA 解析：<https://github.com/fex-team/ua-device>
- user-agent 维基百科：<https://zh.wikipedia.org/zh-cn/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86>
