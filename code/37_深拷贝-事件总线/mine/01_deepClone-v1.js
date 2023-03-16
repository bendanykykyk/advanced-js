function isObject(value) {
  let type = typeof value;
  return type !== null && ["function", "object"].includes(type);
}

function deepClone(originValue) {
  if (typeof originValue === "function") {
    return originValue;
  }
  if (!isObject(originValue)) {
    return originValue;
  }

  const newObject = Array.isArray(originValue) ? [] : {};
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key]);
  }
  return newObject;
}

const originValue = {
  name: "yk",
  age: 18,
  friend: {name: "hy", age: 17},
  foo() {
    console.log(a);
  },
};
const newValue = deepClone(originValue);

console.log("originValue", originValue);
console.log("newValue", newValue);
console.log(originValue === newValue);
console.log(originValue.friend === newValue.friend);
