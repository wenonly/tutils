/**
 * 节流函数
 * @param fn 传入回调函数
 * @param delay 延时时间戳
 * @param options 使用配置
 */
function throttle(
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
    if (!timer) {
      options.immediate && fn.apply(context, args);
      timer = setTimeout(() => {
        !options.immediate && fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

export default throttle;
