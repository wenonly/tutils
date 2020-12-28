import { Clone } from "../types/index";

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
const clone: Clone = (obj: any) => {
  if (isObject(obj)) {
    const newObj: any = obj instanceof Array ? [] : {};
    for (const key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  } else {
    return obj;
  }
};

function isObject(target: any) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

export default clone;
