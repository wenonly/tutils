/**
 * 格式化时间
 * @param d 时间戳或者Date
 * @param str YYYY-MM-dd HH:mm:ss
 */
export declare const dateToString: (d: Date | number, str?: string) => string;
/**
 * 整数转为特定长度的字符串
 * 不足位补0，多余位去掉
 * 9 -> '09'
 * 123 -> '23'
 * @param num 数据
 * @param len 转换长度
 */
export declare function numberToString(num: number, len?: number): string;
