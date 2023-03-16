const obj = {
  name: "why",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get---------");
    return Reflect.get(target, key); // => return target[key]
  },
  set: function (target, key, newValue, receiver) {
    console.log("set---------");
    target[key] = newValue;
    // target[key] = newValue
    const result = Reflect.set(target, key, newValue);
    console.log(result);
    if (result) {
    } else {
    }
  },
});

objProxy.name = "kobe";
console.log(objProxy.name);
