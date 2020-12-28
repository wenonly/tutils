import { Throttle } from "../types/index";

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 */
const throttle: Throttle = (fn, wait) => {
  let timer: any = null;
  return function () {
    const context = this;
    const args: any = arguments;
    if (!timer) {
      // fn.apply(context, args);
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
};

export default throttle;
