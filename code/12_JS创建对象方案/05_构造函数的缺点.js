function Foo() {
  this.bar = function () {
    console.log("bar");
  };
}

var foo1 = new Foo();
var foo2 = new Foo();
// 每次new新的实例，会出现大量重复的方法，每次new都会占空间，如下，两个实例虽然都有bar方法，但是并不相等
console.log(foo1.bar === foo2.bar);
