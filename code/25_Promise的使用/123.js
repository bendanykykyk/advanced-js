const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
class YKPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCallbackFns = [];
    this.rejectedCallbackFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        // 微任务 也可以用settimeout 宏任务
        queueMicrotask(() => {
          this.value = value;
          // 如果不用queueMicrotask包裹，.then里的回调压根还没执行，就不知道这个是回调函数，所以会报not a function

          this.fulfilledCallbackFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;

        queueMicrotask(() => {
          this.reason = reason;
          this.rejectedCallbackFns.forEach((fn) => {
            fn(this.reason);
          });
          // this.rejectedCallback(reason);
        });
      }
    };
    executor(resolve, reject);
  }
  then(fulfilledCallback, rejectedCallback) {
    this.fulfilledCallbackFns.push(fulfilledCallback);
    this.rejectedCallbackFns.push(rejectedCallback);
  }
}

const promise = new YKPromise((resolve, reject) => {
  resolve("123");
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
