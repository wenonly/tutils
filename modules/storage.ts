/**
 * 存储localStorage
 */
export const setStorage = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage指定项
 */
export const getStorage = (name: string) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage指定项
 */
export const removeStorage = (name: string) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 清空localStorage
 */
export const clearStorage = () => {
  window.localStorage.clear();
};

/**
 * 存储sessionStorage
 */
export const setSession = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
export const getSession = (name: string) => {
  if (!name) return;
  const data = window.sessionStorage.getItem(name);
  let res: any;
  try {
    res = JSON.parse(data as string);
  } catch (error) {
    res = data;
  }
  return res;
};

/**
 * 删除sessionStorage指定项
 */
export const removeSession = (name: string) => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * 清空session
 */
export const clearSession = () => {
  window.sessionStorage.clear();
};
