import { CloneDeep } from "../types/index";
import isObject from "./isObject";

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
const cloneDeep: CloneDeep = (obj, map = new WeakMap()) => {
  if (isObject(obj)) {
    const newObj: any = obj instanceof Array ? [] : {};
    if (map.get(obj)) {
      return obj;
    }
    map.set(obj, true);
    for (const key in obj) {
      newObj[key] = cloneDeep(obj[key], map);
    }
    return newObj;
  } else {
    return obj;
  }
};

export default cloneDeep;
