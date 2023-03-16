// personProxy.name    targetProxy [key]
// 关系是 weakMap => map (key,) => set(收集的是Fn)
// 用于监听Fn执行前，将Fn收集到对应的map中
let activeReactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set(); // 原本也可以是数组，但是这样的话相同depend的key 有多个的话不去重就会触发多次
  }
  addDependence(fn) {
    this.reactiveFns.add(fn);
  }
  depend() {
    if (activeReactiveFn) {
      this.addDependence(activeReactiveFn);
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
      const depend = getDepend(target, key);
      depend.depend();
      return Reflect.set(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver);
      // 通知
      let depend = getDepend(target, key);
      depend.notify();
    },
  });
}
// 将对象转化成具有收集/通知功能的代理
let personProxy = reactive({
  name: "yk",
  age: 18,
});

let cityProxy = reactive({
  name: "宁波",
});

// 这里通过watchFn 来获取fn，执行前将函数赋给全局变量，以便当代理触发get操作的时候，添加这个函数到对应的依赖中

function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}
// 收集依赖
watchFn(function () {
  // 针对于多个重复的，可以用set解决，把相同的depend改掉
  console.log(personProxy.name, "-------");
  console.log(personProxy.name, "+++++++");
});

watchFn(function () {
  // 针对于多个重复的，可以用set解决，把相同的depend改掉
  console.log(cityProxy.name, "-------");
});

personProxy.name = "wuhu";

cityProxy.name = "宁波";
// personProxy.name = "wuhu";
