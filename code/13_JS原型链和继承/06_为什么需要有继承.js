// 百度网盘 第十课 1:08:27左右
// 下面两个构造函数，拥有相同的方法和函数，但是如果按照原型上赋值，这样会导致大量重复代码，所以出现了继承
// Student
function Student(name, age, sno) {
  this.name = name;
  this.age = age;
  this.sno = sno;
}

Student.prototype.running = function () {
  console.log(this.name + " running~");
};

Student.prototype.eating = function () {
  console.log(this.name + " eating~");
};

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

// Teacher
function Teacher(name, age, title) {
  this.name = name;
  this.age = age;
  this.title = title;
}

Teacher.prototype.running = function () {
  console.log(this.name + " running~");
};

Teacher.prototype.eating = function () {
  console.log(this.name + " eating~");
};

Teacher.prototype.teaching = function () {
  console.log(this.name + " teaching");
};
