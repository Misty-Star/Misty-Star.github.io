# CTF——HTTP发送头Headers整理

## http —请求header大全

| Header | 解释 | 示例 |
| :-: | :-: | :-: |
| Accept | 指定客户端可以接收的内容类型 | Accept: text/plain, text/html |
| Accept-Charset | 浏览器能够接受的字符编码集。 | Accept-Charset: iso-8859-5 |
| Accept-Encoding | 指定浏览器能够支持的web服务器返回内容压缩编码类型。 | Accept-Encoding: compress, gzip |
| Accept-Language | 浏览器可接受的语言 | Accept-Language: en,zh |
| Accept-Ranges | 能够请求网页实体的一个或者多个子范围字段 | Accept-Ranges: bytes |
| Authorization | HTTP受权的受权证书 | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Cache-Control | 指定请求和响应遵循的缓存机制 | Cache-Control: no-cache |
| Connection | 表示是否须要持久链接。（HTTP 1.1默认进行持久链接） | Connection: close |
| Cookie | HTTP请求发送时，会把保存在该请求域名下的全部cookie值一块儿发送给web服务器。 | Cookie: $Version=1; Skin=new; |
| Content-Length | 请求的内容长度 | Content-Length: 348 |
| Content-Type | 请求的与实体对应的MIME信息 | Content-Type: application/x-www-form-urlencoded |
| Date | 请求发送的日期和时间 | Date: Tue, 15 Nov 2010 08:12:31 GMT |
| Expect | 请求的特定的服务器行为 | Expect: 100-continue |
| From | 发出请求的用户的Email | From: user@email.com |
| Host | 指定请求的服务器的域名和端口号 | Host: www.zcmhi.com |
| If-Match | 只有请求内容与实体相匹配才有效 | If-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Modified-Since | 若是请求的部分在指定时间以后被修改则请求成功，未被修改则返回304代码 | If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| If-None-Match | 若是内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变 | If-None-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Range | 若是实体未改变，服务器发送客户端丢失的部分，不然发送整个实体。参数也为Etag | If-Range: “737060cd8c284d8af7ad3082f209582d” |
| If-Unmodified-Since | 只在实体在指定时间以后未被修改才请求成功 | If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| Max-Forwards | 限制信息经过代理和网关传送的时间 | Max-Forwards: 10 |
| Pragma | 用来包含实现特定的指令 | Pragma: no-cache |
| Proxy-Authorization | 链接到代理的受权证书 | Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Range | 只请求实体的一部分，指定范围 | Range: bytes=500-999 |
| Referer | 先前网页的地址，当前请求网页紧随其后,即来路 | Referer: http://www.zcmhi.com/archives/71.html |
| TE | 客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息 | TE: trailers,deflate;q=0.5 |
| Upgrade | 向服务器指定某种传输协议以便服务器进行转换（若是支持） | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11 |
| User-Agent | User-Agent的内容包含发出请求的用户信息 | User-Agent: Mozilla/5.0 (Linux; X11) |
| Via | 通知中间网关或代理服务器地址，通讯协议 | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1) |
| Warning | 关于消息实体的警告信息 | Warn: 199 Miscellaneous warning |
| X-Forwarded-For | 用来说明从哪里来的，一般用来内网伪装 | X-Forwarded-For: 127.0.0.1 |

## http —响应header大全

| Header | 解释 | 示例 |
| :-: | :-: | :-: |
| Accept-Ranges | 代表服务器是否支持指定范围请求及哪一种类型的分段请求 | Accept-Ranges: bytes |
| Age | 从原始服务器到代理缓存造成的估算时间（以秒计，非负） | Age: 12 |
| Allow | 对某网络资源的有效的请求行为，不容许则返回405 | Allow: GET, HEAD |
| Cache-Control | 告诉全部的缓存机制是否能够缓存及哪一种类型 | Cache-Control: no-cache |
| Content-Encoding | web服务器支持的返回内容压缩编码类型。 | Content-Encoding: gzip |
| Content-Language | 响应体的语言 | Content-Language: en,zh |
| Content-Length | 响应体的长度 | Content-Length: 348 |
| Content-Location | 请求资源可替代的备用的另外一地址 | Content-Location: /index.htm |
| Content-MD5 | 返回资源的MD5校验值 | Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ== |
| Content-Range | 在整个返回体中本部分的字节位置 | Content-Range: bytes 21010-47021/47022 |
| Content-Type | 返回内容的MIME类型 | Content-Type: text/html; charset=utf-8 |
| Date | 原始服务器消息发出的时间 | Date: Tue, 15 Nov 2010 08:12:31 GMT |
| ETag | 请求变量的实体标签的当前值 | ETag: “737060cd8c284d8af7ad3082f209582d” |
| Expires | 响应过时的日期和时间 | Expires: Thu, 01 Dec 2010 16:00:00 GMT |
| Last-Modified | 请求资源的最后修改时间 | Last-Modified: Tue, 15 Nov 2010 12:45:26 GMT |
| Location | 用来重定向接收方到非请求URL的位置来完成请求或标识新的资源 | Location: http://www.zcmhi.com/archives/94.html |
| Pragma | 包括实现特定的指令，它可应用到响应链上的任何接收方 | Pragma: no-cache |
| Proxy-Authenticate | 它指出认证方案和可应用到代理的该URL上的参数 | Proxy-Authenticate: Basic |
| refresh | 应用于重定向或一个新的资源被创造，在5秒以后重定向（由网景提出，被大部分浏览器支持） | Refresh: 5; url=http://www.zcmhi.com/archives/94.html |
| Retry-After | 若是实体暂时不可取，通知客户端在指定时间以后再次尝试 | Retry-After: 120 |
| Server | web服务器软件名称 | Server: Apache/1.3.27 (Unix) (Red-Hat/Linux) |
| Set-Cookie | 设置Http Cookie | Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1 |
| Trailer | 指出头域在分块传输编码的尾部存在 | Trailer: Max-Forwards |
| Transfer-Encoding | 文件传输编码 | Transfer-Encoding:chunked |
| Vary | 告诉下游代理是使用缓存响应仍是从原始服务器请求 | Vary: \* |
| Via | 告知代理客户端响应是经过哪里发送的 | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1) |
| Warning | 警告实体可能存在的问题 | Warning: 199 Miscellaneous warning |
| WWW-Authenticate | 代表客户端请求实体应该使用的受权方案 | WWW-Authenticate: Basic |

## 请求方法大全

| 方法 | 描述 |
| :-: | :-: |
| GET | 发送请求来获得服务器上的资源，请求体中不会包含请求数据，请求数据放在协议头中。另外get支持快取、缓存、可保留书签等。幂等 |
| POST | 和get一样很常见，向服务器提交资源让服务器处理，比如提交表单、上传文件等，可能导致建立新的资源或者对原有资源的修改。提交的资源放在请求体中。不支持快取。非幂等 |
| HEAD | 本质和get一样，但是响应中没有呈现数据，而是http的头信息，主要用来检查资源或超链接的有效性或是否可以可达、检查网页是否被串改或更新，获取头信息等，特别适用在有限的速度和带宽下。 |
| PUT | 和post类似，html表单不支持，发送资源与服务器，并存储在服务器指定位置，要求客户端事先知道该位置；比如post是在一个集合上（/province），而put是具体某一个资源上（/province/123）。所以put是安全的，无论请求多少次，都是在123上更改，而post可能请求几次创建了几次资源。幂等 |
| DELETE | 请求服务器删除某资源。和put都具有破坏性，可能被防火墙拦截。如果是https协议，则无需担心。幂等 |
| CONNECT | HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。就是把服务器作为跳板，去访问其他网页然后把数据返回回来，连接成功后，就可以正常的get、post了。 |
| OPTIONS | 获取http服务器支持的http请求方法，允许客户端查看服务器的性能，比如ajax跨域时的预检等。 |
| TRACE | 回显服务器收到的请求，主要用于测试或诊断。一般禁用，防止被恶意攻击或盗取信息。 |

## CTF在HTTP方面的总结

### 请求方法

当遇到题目提示是用某某某方法发送请求的则需要修改请求方法，如：**用abc方法请求**

![在这里插入图片描述](https://img-blog.csdnimg.cn/df5edb731fce4b1387ca12617f690864.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQXNpb25t,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 从内网访问

若提示是从内网访问，或者说需要某某IP才能访问的则需要用到`X-Forwarded-For`头伪装，有时候要把X-Forwarded-For的三个参数都输入，这里只演示了一个

![在这里插入图片描述](https://img-blog.csdnimg.cn/9350c95d66ae4e0bba1013ce4515b89f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQXNpb25t,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 从某网站跳转

若提示说访问此网站得由某某网站中访问，则需要改`Referer`头，如：需要从www.dubai.com里访问

![在这里插入图片描述](https://img-blog.csdnimg.cn/30ea47f647ef4671af21009eafb48582.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQXNpb25t,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 身份为admin才可以访问

若提示说身份为admin才可访问的，一般是修改cookie

![在这里插入图片描述](https://img-blog.csdnimg.cn/f19f6460f8f44572a4d0ab480ca9ab3b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQXNpb25t,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 从某某浏览器访问

若提示说要从某某浏览器访问则需要改`user-agent`,如：从dubai浏览器访问

![在这里插入图片描述](https://img-blog.csdnimg.cn/f038a129ebc44e30a1c0902aed8d215f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQXNpb25t,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

有时候还会自己自定义一个报头输入

以上就是常用的ctf中http的知识

本文转自 <https://blog.csdn.net/weixin_51735061/article/details/123647266>，如有侵权，请联系删除。