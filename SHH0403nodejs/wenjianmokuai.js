var fs = require("fs");


//fs.readFile("index.txt","utf8",function(err,data){
//    if (err){
//        console.log(err);
//    }else{
//        console.log(data);
//    }
//})

var data = fs.readFileSync("index.txt","utf8",function(err,data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log(data);

console.log("我先执行");


//读取文件异步方法 readFile(文件名,编码格式,方法(请求失败此参数有值,请求成功的值))


//读取文件同步方法  readFileSync(文件名,编码格式,方法(请求失败此参数有值,请求成功的值)) 同步意思是 我吧文件解析完了才会执行下边的代码
