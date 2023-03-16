// 增加cancel，取消功能
function debounce(fn, delay = 1000, immediate = false) {
  let timer = null;
  let invoke = false;
  const _debounce = function (...args) {
    if (immediate && !invoke) {
      fn.apply(this, args);
      invoke = true;
    }
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args);
      invoke = false;
    }, delay);
  };
  // 增加cancel功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    invoke = false;
  };
  return _debounce;
}
