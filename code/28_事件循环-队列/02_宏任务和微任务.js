// 在执行任何宏任务（macro task）时，必须保证微任务（micro task）队列已经被轻松
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

queueMicrotask(() => {
  console.log("queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Promise then");
});

// main scripts
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

bar();

console.log("其他代码");
