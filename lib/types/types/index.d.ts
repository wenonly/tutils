/**
 * 防抖
 */
export declare type Debounce = (fn: (...args: any[]) => void, wait: number, immediate?: boolean) => (...args: any[]) => void;
/**
 * 截流
 */
export declare type Throttle = (fn: (...args: any[]) => void, wait: number) => (...args: any[]) => void;
/**
 * 钱拷贝
 */
export declare type Clone = (obj: any) => any;
/**
 * 深拷贝
 */
export declare type CloneDeep = (obj: any, map?: WeakMap<any, any>) => any;
