var http = require("http");

var server = http.createServer(function(req,res){
    console.log("chenggong");
    res.end();
});
console.log("我先执行");
server.listen("8089");
//自己有请求成功的时候才会回调函数