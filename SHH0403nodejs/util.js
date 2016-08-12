var util = require("util");

function Person(){
    this.name = "lck";
}
Person.prototype.say = function(){
    console.log(this.name);
}
function Child(){
    Person.call(this);
}
util.inherits(Child,Person);
var child = new Child();
child.say();


//判断对象类型,一个参数(要判断的对象)
console.log(util.isRegExp(/\d/));




//inspect输出对象,一个参数(要输出的对象)
//console.log(util.inspect(child));





//var person = new Person();


//inherits通过这种方式可以继承父类原型的方法和属性,配合js的方法就可以实现全继承


