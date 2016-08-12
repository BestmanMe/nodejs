/**
 * Created by lanou on 16/8/12.
 */
//要引用一个模块,必须要有这个模块
var mymo = require("mymo");

var http = require("http");

//mymo();


console.log(module);


//终端输入sudo npm install express  安装npm 的express模块
//安装成功后 会在node_modules文件夹下面创建一个express文件.

//npm用于加载不是原生的其他的模块


//调用模块里面的方法不能直接调用  需要module.exports={}的形式来调用
// module.exports= 后面也可以是一个方法如( module.exports=function(){("你的功能代码块儿")}).此用法不常用.
//mymo.say();
//
//mymo.createServer();
//console.log(mymo.a);
//
//mymo.age();

//在模块内部定义变量 一定要用var加上var是模块内部变量, 不用的话就会变成全局变量,造成变量污染