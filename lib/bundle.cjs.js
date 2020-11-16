'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// src/debounce.ts
var debounce = function (fn, delay, options) {
    if (options === void 0) { options = {
        immediate: false
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
};

exports.debounce = debounce;
//# sourceMappingURL=bundle.cjs.js.map
