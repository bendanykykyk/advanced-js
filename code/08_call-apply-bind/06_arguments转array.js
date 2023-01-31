function foo(num1, num2) {
  // 因为arguments 本质是个对象，所以不能直接用map之类的
  // 1.自己遍历
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10)
  // }
  // console.log(newArr)

  // 2.arguments转成array类型
  // 2.1.自己遍历arguments中所有的元素

  // 2.2.Array.prototype.slice将arguments转成array
  var newArr2 = Array.prototype.slice.call(arguments);
  console.log(newArr2);

  var newArr3 = [].slice.call(arguments);
  console.log(newArr3);

  // 2.3.ES6的语法(这种我感觉比较好记)
  var newArr4 = Array.from(arguments);
  console.log(newArr4);
  var newArr5 = [...arguments];
  console.log(newArr5);
}

foo(10, 20, 30, 40, 50);

// 额外补充的知识点: Array中的slice实现
// Array.prototype.hyslice = function(start, end) {
//   var arr = this
//   start = start || 0
//   end = end || arr.length
//   var newArray = []
//   for (var i = start; i < end; i++) {
//     newArray.push(arr[i])
//   }
//   return newArray
// }

// var newArray = Array.prototype.hyslice.call(["aaaa", "bbb", "cccc"], 1, 3)
// console.log(newArray)

// var names = ["aaa", "bbb", "ccc", "ddd"]
// names.slice(1, 3)
