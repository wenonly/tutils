/**
 * 判断当前数据是否为对象
 * @param target 函数或object
 */
function isObject(target: any) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

export default isObject;
