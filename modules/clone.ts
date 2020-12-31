import { Clone } from "../types/index";
import isObject from "./isObject";

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

export default clone;
