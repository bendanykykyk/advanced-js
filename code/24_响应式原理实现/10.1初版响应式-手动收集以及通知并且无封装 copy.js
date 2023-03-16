const person = {
  name: "yk",
};

const reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}
// 收集依赖
watchFn(function () {
  console.log("打印1");
});

watchFn(function () {
  console.log("打印2");
});

function normalFn() {
  console.log("正常函数");
}

person.name = "yuuki";
// 通知
reactiveFns.forEach((fn) => {
  fn();
});
