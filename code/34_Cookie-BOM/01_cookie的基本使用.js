// 1.服务器设置cookie

// 比如登录 ，我们把账号密码传给服务器 ，服务器返回结果的时候，response header会有set-cookie ，自动帮我们设置cookie

// 之后发送的请求 request header，都会有cookie,服务器可以自己读

// 2.客户端设置cookie

cookie.set;
