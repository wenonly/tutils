import { Clone } from "../types";

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
const clone: Clone = (obj) => {
  if (isObject(obj)) {
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  } else {
    return obj;
  }
};

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

export default clone;
