const spanEl = document.querySelector(".span");
const divEl = document.querySelector(".container");

// spanEl.addEventListener("click", () => {
//   console.log("事件冒泡:span元素被点击了");
// });

// divEl.addEventListener("click", () => {
//   console.log("事件冒泡:div元素被点击了");
// });

// document.body.addEventListener("click", () => {
//   console.log("事件冒泡:body元素被点击了");
// });

// 再次监听 这里第三个参数 true的话就是事件捕获（外传里）
spanEl.addEventListener(
  "click",
  (event) => {
    console.log("事件捕获:span元素被点击了");
    // event.stopPropagation();
  },
  true
);

divEl.addEventListener(
  "click",
  (event) => {
    console.log("事件捕获:div元素被点击了");
  },
  true
);

document.body.addEventListener(
  "click",
  (event) => {
    console.log("事件捕获:body元素被点击了");
  },
  true
);
