function debounce(fn, delay = 1000) {
  let timer = null;
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args);
    }, delay);
  };
  return _debounce;
}
