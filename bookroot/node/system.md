# Introduction
{{ introduction }}





# Example
```js
var system = require('blear.node.system');
```




# Static

## `.localIP(): localIP`
获取本地（本机局域网）IP。

### `localIP`
- 类型：`String`
- 说明：IP 地址，如果没有获取到，返回 `"localhost"`


## `.remoteIP([req]): remoteIP`
获取本机的广域网 IP 地址。

### `req`
- 类型：`Object`
- 说明：请求对象，如 express 模块的请求对象，依次读取请求头里的 `x-real-ip`、`x-forwarded-for`、`remote-ip`、`remoteip` 进行判断
- 默认：`null`，如果未设置请求对象，则从 `http://ip.taobao.com/service/getIpInfo2.php` 处获取

### `remoteIP`
- 类型：`String`
- 说明：IP 地址，如果没有获取到，返回 `"127.0.0.1"`


## `.os(): os`
获取操作系统信息。

### `os`
- 类型：`Object`
- 说明：操作系统信息

#### `os.cpus`
- 类型：`Number`
- 说明：CPU 核心数量

#### `os.hostname`
- 类型：`String`
- 说明：操作系统的宿主名称

#### `os.platform`
- 类型：`String`
- 说明：操作系统的平台名称，如 `linux2`、`darwin` 等

#### `os.release`
- 类型：`String`
- 说明：操作系统的发布名称

#### `os.alias`
- 类型：`String`
- 说明：操作系统的别名，如 `Windows 10`、`Mac OS X Sieera`

#### `os.name`
- 类型：`String`
- 说明：操作系统名称，如 `unknown`、`mac`、`windows`、`linux`

#### `os.arch`
- 类型：`String`
- 说明：操作系统架构，如 `arm`、`ia32`、`x64`

#### `os.username`
- 类型：`String`
- 说明：操作系统当前用户名

#### `os.language`
- 类型：`String`
- 说明：操作系统当前主语言

#### `os.node`
- 类型：`String`
- 说明：操作系统当前 node 版本

#### `os.isUnknow`
- 类型：`Boolean`
- 说明：操作系统是否未知

#### `os.isMac`
- 类型：`Boolean`
- 说明：操作系统是否为 MAC

#### `os.isWindows`
- 类型：`Boolean`
- 说明：操作系统是否为 Windows

#### `os.isLinux`
- 类型：`Boolean`
- 说明：操作系统是否为 Linux



## `.parseIP(ip, callback(info)): undefined`
解析 IP 地址信息，解析信息来源于 `http://ip.taobao.com/service/getIpInfo2.php`。

### `ip`
- 类型：`String`
- 说明：IP 地址

### `callback`
- 类型：`Function`
- 说明：查询结果回调

### `callback: info`
- 类型：`Object`
- 说明：查询结果

### `callback: info.ip`
- 类型：`String`
- 说明：查询的 IP

### `callback: info.area`
- 类型：`String`
- 说明：该 IP 所在区域，如 `华东`

### `callback: info.country`
- 类型：`String`
- 说明：该 IP 所在国家

### `callback: info.province`
- 类型：`String`
- 说明：该 IP 所在省份

### `callback: info.city`
- 类型：`String`
- 说明：该 IP 所在城市

### `callback: info.isp`
- 类型：`String`
- 说明：该 IP 所在运营商，如 `电信`



## `.cpuUsage(): usage`
计算当前 Node 进程占用的 CPU 使用率。

### `usage`
- 类型：`Number`
- 说明：使用率（≤1）


## `.memoryUsage(): usage`
计算当前 Node 进程占用的内存使用量。

### `usage`
- 类型：`Number`
- 说明：使用量（单位：B）





# Dependencies
{{ dependencies }}





# Reference
这里写参考内容。

