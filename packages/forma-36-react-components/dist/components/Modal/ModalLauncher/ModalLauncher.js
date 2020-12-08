"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalLauncher = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function open(componentRenderer) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options = _objectSpread({
    delay: 300
  }, options); // Allow components to specify if they wish to reuse the modal container

  var rootElId = "modals-root".concat(options.modalId || Date.now());
  var rootDom = null;

  var getRoot = function getRoot() {
    if (rootDom !== null) {
      return rootDom;
    } // Reuse the container if we find it


    rootDom = document.getElementById(rootElId);

    if (rootDom !== null) {
      return rootDom;
    } // Otherwise create it


    rootDom = document.createElement('div');
    rootDom.setAttribute('id', rootElId);
    document.body.appendChild(rootDom);
    return rootDom;
  };

  return new Promise(function (resolve) {
    var currentConfig = {
      onClose: onClose,
      isShown: true
    };

    function render(_ref) {
      var onClose = _ref.onClose,
          isShown = _ref.isShown;

      _reactDom["default"].render(componentRenderer({
        onClose: onClose,
        isShown: isShown
      }), getRoot());
    }

    function onClose(_x) {
      return _onClose.apply(this, arguments);
    }

    function _onClose() {
      _onClose = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(arg) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentConfig = _objectSpread(_objectSpread({}, currentConfig), {}, {
                  isShown: false
                });
                render(currentConfig);
                _context.next = 4;
                return new Promise(function (resolveDelay) {
                  return setTimeout(resolveDelay, options.delay);
                });

              case 4:
                _reactDom["default"].unmountComponentAtNode(getRoot());

                getRoot().remove();
                resolve(arg);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _onClose.apply(this, arguments);
    }

    render(currentConfig);
  });
}

var ModalLauncher = {
  open: open
};
exports.ModalLauncher = ModalLauncher;
var _default = ModalLauncher;
exports["default"] = _default;