// 21课视频
class Promise {
  constructor(executor) {
    const resolve = (res) => {
      console.log(res);
      //   this.callback();
    };

    const reject = () => {};

    executor(resolve, reject);
  }

  then(callback) {
    this.callback = callback;
  }
}

new Promise((resolve, reject) => {
  resolve("芜湖");
}).then((res) => {
  console.log(res);
});
