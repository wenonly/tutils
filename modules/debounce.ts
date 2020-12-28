import { Debounce } from "../types/index";

/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 * @param immediate 为true代表立即执行
 *
 * @category 函数
 */
const debounce: Debounce = (fn, wait, immediate) => {
  let timer: any = null;
  return function () {
    const context = this;
    const args: any = arguments;

    // 立即执行
    if (immediate) {
      // 第一次timer为null，则可以执行，一定时间内timer始终不为null
      const dos = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (dos) {
        fn.apply(context, args);
      }
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
};

export default debounce;
