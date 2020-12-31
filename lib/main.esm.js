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
 * 判断当前数据是否为对象
 * @param target 函数或object
 */
function isObject(target) {
    var type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

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

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
var cloneDeep = function (obj, map) {
    if (map === void 0) { map = new WeakMap(); }
    if (isObject(obj)) {
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

/**
 * 格式化时间
 * @param d 时间戳或者Date
 * @param str YYYY-MM-dd HH:mm:ss
 */
var dateToString = function (d, str) {
    if (str === void 0) { str = "YYYY-MM-dd HH:mm:ss"; }
    var date = new Date(d);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    str = str.replace("YYYY", numberToString(year, 4));
    str = str.replace("MM", numberToString(month));
    str = str.replace("dd", numberToString(day));
    str = str.replace("DD", numberToString(day));
    str = str.replace("HH", numberToString(hour));
    str = str.replace("mm", numberToString(minutes));
    str = str.replace("ss", numberToString(seconds));
    return str;
};
/**
 * 整数转为特定长度的字符串
 * 不足位补0，多余位去掉
 * 9 -> '09'
 * 123 -> '23'
 * @param num 数据
 * @param len 转换长度
 */
function numberToString(num, len) {
    if (len === void 0) { len = 2; }
    var arr = Array(len).fill(0);
    var str = num.toString();
    for (var i = str.length - 1, j = arr.length - 1; i >= 0 && j >= 0; i--, j--) {
        arr[j] = str[i];
    }
    return arr.join('');
}

/**
 * 去掉富文本中的html标签
 */
function filterRichLabel(schemeIntroduce) {
    schemeIntroduce = schemeIntroduce.replace(/(\n)/g, ""); // 去掉换行
    schemeIntroduce = schemeIntroduce.replace(/(\t)/g, ""); // 去掉换行
    schemeIntroduce = schemeIntroduce.replace(/(\r)/g, "");
    schemeIntroduce = schemeIntroduce.replace(/<\/?[^>]*>/g, ""); // 去掉标签
    schemeIntroduce = schemeIntroduce.replace(/\s*/g, "");
    schemeIntroduce = schemeIntroduce.replace(/ /gi, " "); // 去掉
    schemeIntroduce = schemeIntroduce.replace(/&nbsp;/gi, ""); // 去掉
    return schemeIntroduce;
}

/**
 * 存储localStorage
 */
var setStorage = function (name, content) {
    if (!name)
        return;
    if (typeof content !== "string") {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage指定项
 */
var getStorage = function (name) {
    if (!name)
        return;
    return window.localStorage.getItem(name);
};
/**
 * 删除localStorage指定项
 */
var removeStorage = function (name) {
    if (!name)
        return;
    window.localStorage.removeItem(name);
};
/**
 * 清空localStorage
 */
var clearStorage = function () {
    window.localStorage.clear();
};
/**
 * 存储sessionStorage
 */
var setSession = function (name, content) {
    if (!name)
        return;
    if (typeof content !== "string") {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
};
/**
 * 获取sessionStorage
 */
var getSession = function (name) {
    if (!name)
        return;
    var data = window.sessionStorage.getItem(name);
    var res;
    try {
        res = JSON.parse(data);
    }
    catch (error) {
        res = data;
    }
    return res;
};
/**
 * 删除sessionStorage指定项
 */
var removeSession = function (name) {
    if (!name)
        return;
    window.sessionStorage.removeItem(name);
};
/**
 * 清空session
 */
var clearSession = function () {
    window.sessionStorage.clear();
};

var version = require("../package.json").version;

export { clearSession, clearStorage, clone, cloneDeep, dateToString, debounce, filterRichLabel, getSession, getStorage, isObject, numberToString, removeSession, removeStorage, setSession, setStorage, throttle, version };
