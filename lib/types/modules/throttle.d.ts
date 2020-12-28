import { Throttle } from "../types/index";
/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 */
declare const throttle: Throttle;
export default throttle;
