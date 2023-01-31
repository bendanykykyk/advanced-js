// function sum(m, n) {
//   return m + n
// }

// // 假如在程序中,我们经常需要把5和另外一个数字进行相加
// console.log(sum(5, 10))
// console.log(sum(5, 14))
// console.log(sum(5, 1100))
// console.log(sum(5, 555))

function makeAdder(count) {
  count = count * count;

  return function (num) {
    return count + num;
  };
}

// var result = makeAdder(5)(10)
// console.log(result)
var adder5 = makeAdder(5);
adder5(10);
adder5(14);
adder5(1100);
adder5(555);

// 实例1：假如我们现在经常需要以 5*5 + 13   6*6 +24 这种算式的复用，我们也可以使用到柯里化
function makeMultiPlus(multiplyNumber) {
  let multiplyResult = multiplyNumber * multiplyNumber;
  return function (addNumber) {
    return multiplyResult + addNumber;
  };
}
// 我们可以先把公共部分提前做完，之后调用的时候填写的参数更加单一，也更容易理解
const makeMulti5Plus = makeMultiPlus(5);
console.log(makeMulti5Plus(10));
console.log(makeMulti5Plus(30));
console.log(makeMulti5Plus(50));
