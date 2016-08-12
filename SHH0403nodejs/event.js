var events = require("events");
//引入模块要用到util的方法
var util = require("util");

util.inherits(Girl,events);

function Girl(){

}

function Boy(name,response){
    this.name = name;
    this.response = response;
}


var boy1 = new Boy("星辰",function(){
    console.log("正伟吃鸡");
});
var boy2 = new Boy("少凯",function(){
    console.log("吃大炮");
});

var girl = new Girl();
girl.on("饿了",boy1.response);
//addListener可以设置监听事件的最大数量  setMaxListener(数值),事件监听需要放在事件上面,不然会没有效果
girl.addListener("饿了",boy2.response);


//移除单个事件
//girl.removeListener("饿了",boy2.response);

//移除所有相同事件
girl.removeAllListeners("饿了");

girl.once("饱了",function(){
    console.log("我饱了");
})

//once执行一次
//emit发射事件

girl.emit("饿了");
girl.emit("饱了");
girl.emit("饱了");

//移除事件





