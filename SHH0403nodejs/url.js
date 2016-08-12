/**
 * Created by lanou on 16/8/12.
 */

/*
 urlobj得到的对象
 Url {
 protocol: null,
 slashes: null,
 auth: null,
 host: null,
 port: null,
 hostname: null,
 hash: null,
 search: '?user=lck&age=26',
 query: { user: 'lck', age: '26' },本来是数组,可以通过var urlobj = url.parse(req.url,true);  的第三个参数改变为对象
 pathname: '/list',
 path: '/list?user=lck&age=26',
 href: '/list?user=lck&age=26' }

 */

var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    //console.log(req);
    var urlobj = url.parse(req.url,true);
    console.log(urlobj);
    res.end(urlobj.query.user);
});

server.listen("8092");

