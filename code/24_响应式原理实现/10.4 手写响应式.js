let activeReactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(fn) {
    this.reactiveFns.add(fn);
  }
  depend() {
    if (activeReactiveFn) {
      this.addDepend(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const targetMap = new WeakMap();

function getDepend(target, key) {
  // 获取map
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}
const depend = new Depend();

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      //   得到depend，调用添加依赖
      const depend = getDepend(target, key);
      depend.depend();

      return Reflect.get(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver);
      const depend = getDepend(target, key);
      depend.notify();
    },
  });
}

let personProxy = reactive({
  name: "yk",
  age: 18,
});

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

watchFn(function () {
  console.log(personProxy.name + "姓名");
});
personProxy.name = "wuhu";
