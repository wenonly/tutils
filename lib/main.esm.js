/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 * @param immediate 为true代表立即执行
 *
 * @category 函数
 */
var debounce = function (fn, wait, immediate) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        // 立即执行
        if (immediate) {
            // 第一次timer为null，则可以执行，一定时间内timer始终不为null
            var dos = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, wait);
            if (dos) {
                fn.apply(context, args);
            }
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, wait);
        }
    };
};

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 */
var throttle = function (fn, wait) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            // fn.apply(context, args);
            timer = setTimeout(function () {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    };
};

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
var clone = function (obj) {
    if (isObject(obj)) {
        var newObj = obj instanceof Array ? [] : {};
        for (var key in obj) {
            newObj[key] = obj[key];
        }
        return newObj;
    }
    else {
        return obj;
    }
};
function isObject(target) {
    var type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
var cloneDeep = function (obj, map) {
    if (map === void 0) { map = new WeakMap(); }
    if (isObject$1(obj)) {
        var newObj = obj instanceof Array ? [] : {};
        if (map.get(obj)) {
            return obj;
        }
        map.set(obj, true);
        for (var key in obj) {
            newObj[key] = cloneDeep(obj[key], map);
        }
        return newObj;
    }
    else {
        return obj;
    }
};
function isObject$1(target) {
    var type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

var version = require("../package.json").version;

export { clone, cloneDeep, debounce, throttle, version };
