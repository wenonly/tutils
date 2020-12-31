/**
 * 存储localStorage
 */
export declare const setStorage: (name: string, content: any) => void;
/**
 * 获取localStorage指定项
 */
export declare const getStorage: (name: string) => string;
/**
 * 删除localStorage指定项
 */
export declare const removeStorage: (name: string) => void;
/**
 * 清空localStorage
 */
export declare const clearStorage: () => void;
/**
 * 存储sessionStorage
 */
export declare const setSession: (name: string, content: any) => void;
/**
 * 获取sessionStorage
 */
export declare const getSession: (name: string) => any;
/**
 * 删除sessionStorage指定项
 */
export declare const removeSession: (name: string) => void;
/**
 * 清空session
 */
export declare const clearSession: () => void;
