'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param delay 延时时间戳
 * @param options 使用配置
 *
 * @category 函数
 */
function debounce(fn, delay, options) {
    if (options === void 0) { options = {
        immediate: false,
    }; }
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        // 立即执行
        if (options.immediate) {
            // 第一次timer为null，则可以执行，一定时间内timer始终不为null
            var dos = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, delay);
            if (dos) {
                fn.apply(context, args);
            }
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
}

/**
 * 节流函数
 * @param fn 传入回调函数
 * @param delay 延时时间戳
 * @param options 使用配置
 */
function throttle(fn, delay, options) {
    if (options === void 0) { options = {
        immediate: false,
    }; }
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            options.immediate && fn.apply(context, args);
            timer = setTimeout(function () {
                !options.immediate && fn.apply(context, args);
                timer = null;
            }, delay);
        }
    };
}

var version = require("../package.json").version;

exports.debounce = debounce;
exports.throttle = throttle;
exports.version = version;
//# sourceMappingURL=bundle.cjs.js.map
