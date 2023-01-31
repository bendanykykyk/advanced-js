// 类的声明
class Person {}

// babel

// 类的表达式
// var Animal = class {
// }

// 研究一下类的特性
console.log(Person.prototype); // 他的原型对象
console.log(Person.prototype.__proto__); // 他的上层原型对象
console.log(Person.prototype.constructor); // Person的原型对象的构造器
console.log(typeof Person); // function

var p = new Person();
console.log(p.__proto__ === Person.prototype); // true
