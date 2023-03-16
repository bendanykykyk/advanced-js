// 1> 用generator替代iterator

// 原本
function* createIterator(arr) {
  for (let item of arr) {
    yield item;
  }
}

let iterator = createIterator([1, 2, 3]);

// 测试
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 2> 做一个范围可迭代器
function* createRangeIterator(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
let rangeIterator = createRangeIterator(10, 12);

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// 3> class 通过generator 实现Symbol.iterator
class Classroom {
  constructor(address, students) {
    this.address = address;
    this.students = students;
  }
  enter(student) {
    this.students.push(student);
  }
  // foo = () => {

  // }
  *[Symbol.iterator]() {
    for (let stu of this.students) {
      yield stu;
    } // => yield* this.students
  }
}

let classroom = new Classroom("三幢五单元", ["liming", "xiaohong", "lihua"]);
for (let stu of classroom) {
  console.log(stu);
}
