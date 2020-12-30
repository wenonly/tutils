/**
 * 格式化时间
 * @param d 时间戳或者Date
 * @param str YYYY-MM-dd HH:mm:ss
 */
declare const dateToString: (d: Date | number, str?: string) => string;
export default dateToString;
