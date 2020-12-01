/**
 * 防抖
 */
export type Debounce = (
  fn: (...args: any[]) => void,
  wait: number,
  immediate?: boolean
) => (...args: any[]) => void;

/**
 * 截流
 */
export type Throttle = (
  fn: (...args: any[]) => void,
  wait: number
) => (...args: any[]) => void;

/**
 * 钱拷贝
 */
export type Clone = (
  obj: any[] | { [key: string]: any }
) => any[] | { [key: string]: any };

/**
 * 深拷贝
 */
export type CloneDeep = (
  obj: any[] | { [key: string]: any },
  map?: WeakMap<any, any>
) => any[] | { [key: string]: any };
