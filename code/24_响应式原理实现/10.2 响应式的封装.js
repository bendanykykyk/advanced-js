const person = {
  name: "yk",
};

class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDependence(fn) {
    this.reactiveFns.push(fn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const depend = new Depend();

function watchFn(fn) {
  depend.addDependence(fn);
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
depend.notify();
