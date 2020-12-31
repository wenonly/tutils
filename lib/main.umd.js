(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@iwowen/utils'] = {}));
}(this, (function (exports) { 'use strict';

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
      str = str.replace("YYYY", NumTo2(year));
      str = str.replace("MM", NumTo2(month));
      str = str.replace("dd", NumTo2(day));
      str = str.replace("DD", NumTo2(day));
      str = str.replace("HH", NumTo2(hour));
      str = str.replace("mm", NumTo2(minutes));
      str = str.replace("ss", NumTo2(seconds));
      return str;
  };
  /**
   * 个位数转两位数，第一位补0
   */
  function NumTo2(num) {
      return num > 9 ? String(num) : "0" + num;
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

  var version = require("../package.json").version;

  exports.clone = clone;
  exports.cloneDeep = cloneDeep;
  exports.dateToString = dateToString;
  exports.debounce = debounce;
  exports.filterRichLabel = filterRichLabel;
  exports.throttle = throttle;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
