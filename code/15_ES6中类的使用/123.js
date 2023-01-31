function Person() {
  this.friends = [];
}

function Student() {}
let person = new Person();
Student.prototype = person;

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu = new Student();
var stu2 = new Student();

stu.friends.push("xiaoming");
