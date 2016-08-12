/**
 * Created by lanou on 16/8/12.
 */
//    require  引入http模块儿
var http = require("http");
//调用模块儿(http)的createServer方法
//发送请求requset(req)     response(res)服务器返回的信息全在里面.
var server = http.createServer(function(req,res){
    //打印发送的请求信息
    console.log(req);
    var url = req.url;
    var me = req.method;
    if (me === "GET"){
        console.log("woshiget");
        if (url == "/list"){
            console.log("woshilist");
            res.write("<p>my first</p>");
        }
    }
    //回应结束可设置返回内容
    //处理一个事件的功能的代码块,叫做模块儿
    res.end("<h1>okey</h1>");
});

server.listen("8090");


//控制台寻找一个叫url的东西   找到url: '/favicon.ico',



