console.log("script start");
function f() {
  console.log("heh");
}
// 业务代码 settimeout 计时操作由 浏览器的其他线程以及浏览器的事件队列来完成的 而不是js线程做的
setTimeout(f, 1000);

console.log("后续代码~");

console.log("script end");
