// 弱引用 如果没有在引用 会被GC回收；map是强引用
const obj = {name: "obj1"};
// 1.WeakMap和Map的区别二:
const map = new Map();
map.set(obj, "aaa");

const weakMap = new WeakMap();
weakMap.set(obj, "aaa");

// 2.区别一: 不能使用基本数据类型
// weakMap.set(1, "ccc")

// 3.常见方法
// get方法
console.log(weakMap.get(obj));

// has方法
console.log(weakMap.has(obj));

// delete方法
console.log(weakMap.delete(obj));
// WeakMap { <items unknown> }
console.log(weakMap);
