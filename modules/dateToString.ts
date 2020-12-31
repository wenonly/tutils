/**
 * 格式化时间
 * @param d 时间戳或者Date
 * @param str YYYY-MM-dd HH:mm:ss
 */
export const dateToString = (
  d: Date | number,
  str: string = "YYYY-MM-dd HH:mm:ss"
): string => {
  const date: Date = new Date(d);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  const hour: number = date.getHours();
  const minutes: number = date.getMinutes();
  const seconds: number = date.getSeconds();
  str = str.replace("YYYY", numberToString(year, 4));
  str = str.replace("MM", numberToString(month));
  str = str.replace("dd", numberToString(day));
  str = str.replace("DD", numberToString(day));
  str = str.replace("HH", numberToString(hour));
  str = str.replace("mm", numberToString(minutes));
  str = str.replace("ss", numberToString(seconds));
  return str;
};

/**
 * 整数转为特定长度的字符串
 * 不足位补0，多余位去掉
 * 9 -> '09'
 * 123 -> '23'
 * @param num 数据
 * @param len 转换长度
 */
export function numberToString(num: number, len: number = 2): string {
  const arr: any[] = Array(len).fill(0)
  const str = num.toString()
  for(let i = str.length -1, j = arr.length - 1; i>=0 && j>=0;i--, j--) {
      arr[j] = str[i]
  }
  return arr.join('')
}
