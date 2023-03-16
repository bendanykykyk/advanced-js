// 增加cancel，取消功能
function debounce(fn, delay = 1000, immediate = false) {
  let timer = null;
  let invoke = false;
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (immediate && !invoke) {
        const result = fn.apply(this, args);
        invoke = true;
        resolve(result);
      }
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        const result = fn.apply(this, args);
        invoke = false;
        resolve(result);
      }, delay);
    });
  };
  // 增加cancel功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    invoke = false;
  };
  return _debounce;
}
