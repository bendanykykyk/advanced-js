// const iterableObj = {
//   names: [1, 2, 3, 4],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.names.length) {
//           index++;
//           return {done: false, value: this.names[index]};
//         } else {
//           index++;
//           return {done: true, value: undefined};
//         }
//       },
//     };
//   },
// };

// const personIteratorObj = iterableObj[Symbol.iterator]();
// console.log(personIteratorObj.next());
// console.log(personIteratorObj.next());
// console.log(personIteratorObj.next());
// console.log(personIteratorObj.next());

// const arr = [1, 2, 3, 4];
// let arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// function* foo() {
//   let value = 100;
//   console.log(value);
//   yield value;
//   value = 200;
//   console.log(value);
//   yield;
//   value = 300;
//   console.log(value);
//   yield;
// }

// const generator = foo();
// console.log(generator.next());
// generator.next();
// generator.next();

//  4> 3的改造
// function* foo(num) {
//   let value = 100;

//   let num1 = yield value * num;
//   value = 200;

//   let num2 = yield value * num1;
//   value = 300;

//   yield value * num2;
// }

// let generator = foo(100);

// console.log(generator.next());
// console.log(generator.next(100));
// console.log(generator.next(100));
// console.log(generator.next(100));

// 5> 异步代码的处理方案
function sendRequestData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function* getData() {
  let response1 = yield sendRequestData("yuuki");
  let response2 = yield sendRequestData(response1 + "bbb");
  let response3 = yield sendRequestData(response2 + "ccc");
  console.log(response3);
}

// let requestGenerator = getData();

// requestGenerator.next().value.then((response1) => {
//   requestGenerator.next(response1).value.then((response2) => {
//     requestGenerator.next(response2).value.then((response3) => {
//       requestGenerator.next(response3);
//     });
//   });
// });

// 用递归优化 执行上述代码
// function execGenerator(genFn) {
//   let generator = genFn();
//   function exec(res) {
//     let result = generator.next(res);
//     if (result.done) {
//       return result.value;
//     }
//     result.value.then((res) => {
//       exec(res);
//     });
//   }
//   exec();
// }

// execGenerator(getData);

// 6 >优化 : 使用 第三包co（已经可以不用了，看7） / n / commender / express <= koa
// let co = require("co");
// co(getData);

// 7> 再再优化 对比上一个getData (可以知道 async await 就是promise和generator的语法糖)
async function getData2() {
  let response1 = await sendRequestData("yuuki");
  let response2 = await sendRequestData(response1 + "bbb");
  let response3 = await sendRequestData(response2 + "ccc");
  console.log(response3);
}

getData2();
