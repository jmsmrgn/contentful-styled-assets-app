"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var throttle = function throttle() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var fn = arguments.length > 1 ? arguments[1] : undefined;
  var lastCall = 0; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var throttleExec = function throttleExec() {
    var now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return fn.apply(void 0, arguments); // eslint-disable-line
  };

  return throttleExec;
};

var _default = throttle;
exports["default"] = _default;