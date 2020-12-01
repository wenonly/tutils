import { Clone } from "../types";

/**
 * 浅拷贝
 */
const clone: Clone = (obj) => {
  const newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

export default clone;
