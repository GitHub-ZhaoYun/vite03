var express = require("express");
var app = express();
const hostname = "127.0.0.1"; // 这里填写要访问资源的机器IP地址，例如192.168.2.101
const port = 9080;
app.use(express.static("../dist"));
app.listen(port, hostname, () => {
    console.log(`Server is running, biu biu biu`);
});
// cd 到当前的文件夹中 打开终端输入 指令 node server 然后浏览器访问 http://localhost:9080/index.html
