const btns = document.getElementsByTagName("button");

// 这种情况去点击，必定都是btn.length 因为var不受块级作用域影响
// for (var i = 0; i < btns.length; i++) {
//   (function(n) {
//     btns[i].onclick = function() {
//       console.log("第" + n + "个按钮被点击")
//     }
//   })(i)
// }

// console.log(i)

// let受作用域影响 所以每个都不一样
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + i + "个按钮被点击");
  };
}

// console.log(i)
