const obj = {
  name: "why",
  age: 18,
};

console.log(Object.entries(obj));
// console.log(Object.entries(obj))
// const objEntries = Object.entries(obj)
// objEntries.forEach(item => {
//   console.log(item[0], item[1])
// })

// console.log(Object.entries(["abc", "cba", "nba"]))
// console.log(Object.entries("abc"))

// 这里的map的二维数组就是entries后的样子
const map = new Map([
  ["name", "liHua"],
  ["name", "wuhu"],
]);
// object=> entries
console.log(Object.entries(obj));

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
