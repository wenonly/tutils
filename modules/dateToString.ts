/**
 * 格式化时间
 * @param d 时间戳或者Date
 * @param str YYYY-MM-dd HH:mm:ss
 */
const dateToString = (
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
  str = str.replace("YYYY", NumTo2(year));
  str = str.replace("MM", NumTo2(month));
  str = str.replace("dd", NumTo2(day));
  str = str.replace("DD", NumTo2(day));
  str = str.replace("HH", NumTo2(hour));
  str = str.replace("mm", NumTo2(minutes));
  str = str.replace("ss", NumTo2(seconds));
  return str;
};

/**
 * 个位数转两位数，第一位补0
 */
function NumTo2(num: number) {
  return num > 9 ? String(num) : "0" + num;
}

export default dateToString;
