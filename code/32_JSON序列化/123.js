const str =
  '{"name":"why","age":18,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}';

let strObj = JSON.parse(str, (key, value) => {
  if (key === "age") {
    return value - 1;
  }
  return value;
});
console.log(strObj);
