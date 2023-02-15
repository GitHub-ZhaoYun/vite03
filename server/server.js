var express = require("express");
// 引入connect-history-api-fallback中间件
const history = require("connect-history-api-fallback")
var app = express();
const hostname = "127.0.0.1"; // 这里填写要访问资源的机器IP地址，例如192.168.2.101
const port = 9080;
// 使用
app.use(history()) // 一般在创建WEB服务器对象之后使用,该中间件必须要放在express.static中间件的前面引入
app.use(express.static("../dist"));
app.listen(port, hostname, () => {
    console.log(`Server is running, biu biu biu`);
});
// cd 到当前的文件夹中 打开终端输入 指令 node server 然后浏览器访问 http://localhost:9080/index.html
