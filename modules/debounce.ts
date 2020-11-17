/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param delay 延时时间戳
 * @param options 使用配置
 * 
 * @category 函数
 */
function debounce(
  fn: (...args: any[]) => void,
  delay: number,
  options: { immediate: boolean } = {
    immediate: false,
  }
) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;

    // 立即执行
    if (options.immediate) {
      // 第一次timer为null，则可以执行，一定时间内timer始终不为null
      const dos = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (dos) {
        fn.apply(context, args);
      }
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
}

export default debounce;
