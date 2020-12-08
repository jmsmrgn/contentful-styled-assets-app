"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Notification = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _NotificationsManager = _interopRequireDefault(require("./NotificationsManager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initiated = false;
var internalAPI = {};

function registerAPI(fnName, fn) {
  internalAPI[fnName] = fn;
}

function createRoot(callback) {
  var container = document.createElement('div');
  document.body.appendChild(container);
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_NotificationsManager["default"], {
    register: registerAPI
  }), container, callback);
}

var afterInit = function afterInit(fn) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!initiated) {
      initiated = true;
      return new Promise(function (resolve) {
        createRoot(function () {
          resolve(fn.apply(void 0, args));
        });
      });
    } else {
      return Promise.resolve(fn.apply(void 0, args));
    }
  };
};

var show = function show(intent) {
  return function (text, settings) {
    if (internalAPI.show) {
      return internalAPI.show(text, _objectSpread(_objectSpread({}, settings || {}), {}, {
        intent: intent
      }));
    }
  };
};

var Notification = {
  success: afterInit(show('success')),
  error: afterInit(show('error')),
  warning: afterInit(show('warning')),
  close: afterInit(function (id) {
    if (internalAPI.close) {
      return internalAPI.close(id);
    }
  }),
  closeAll: afterInit(function () {
    if (internalAPI.closeAll) {
      return internalAPI.closeAll();
    }
  }),
  setPosition: afterInit(function (position, params) {
    if (internalAPI.setPosition) {
      return internalAPI.setPosition(position, params);
    }
  }),
  setDuration: afterInit(function (duration) {
    if (internalAPI.setDuration) {
      return internalAPI.setDuration(duration);
    }
  })
};
exports.Notification = Notification;
var _default = Notification;
exports["default"] = _default;