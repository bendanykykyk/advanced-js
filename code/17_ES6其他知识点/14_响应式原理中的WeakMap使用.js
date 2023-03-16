// // 应用场景(vue3响应式原理)
// const obj1 = {
//   name: "why",
//   age: 18,
// };

// function obj1NameFn1() {
//   console.log("obj1NameFn1被执行");
// }

// function obj1NameFn2() {
//   console.log("obj1NameFn2被执行");
// }

// function obj1AgeFn1() {
//   console.log("obj1AgeFn1");
// }

// function obj1AgeFn2() {
//   console.log("obj1AgeFn2");
// }

// const obj2 = {
//   name: "kobe",
//   height: 1.88,
//   address: "广州市",
// };

// function obj2NameFn1() {
//   console.log("obj1NameFn1被执行");
// }

// function obj2NameFn2() {
//   console.log("obj1NameFn2被执行");
// }

// // 1.创建WeakMap
// const weakMap = new WeakMap();

// // 2.收集依赖结构
// // 2.1.对obj1收集的数据结构
// const obj1Map = new Map();
// obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
// obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
// weakMap.set(obj1, obj1Map);

// // 2.2.对obj2收集的数据结构
// const obj2Map = new Map();
// obj2Map.set("name", [obj2NameFn1, obj2NameFn2]);
// weakMap.set(obj2, obj2Map);

// // 3.如果obj1.name发生了改变
// // Proxy/Object.defineProperty
// obj1.name = "james";

// const targetMap = weakMap.get(obj1);
// const fns = targetMap.get("name");
// fns.forEach((item) => item());

const person = {
  name: "yk",
  age: 18,
};

function personAgeAdd() {
  console.log("年龄变大啦");
}
function personAgeAddBless() {
  console.log("新的一年我希望没有烦恼");
}
// 先放到weakMap是为了 能够通过 person=null 让GC回收没用的内存控件
const personWeakMap = new WeakMap();
// 后续使用map存放 key和方法的关系是因为 map可以以存基本数据为key
const depMap = new Map();
depMap.set("age", [personAgeAdd, personAgeAddBless]);
personWeakMap.set(person, depMap);

person.age++;
const targetMap = personWeakMap.get(person);
const fns = targetMap.get("age");
fns.forEach((fn) => {
  fn();
});
