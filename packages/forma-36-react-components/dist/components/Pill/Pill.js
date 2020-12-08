"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pill = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _TabFocusTrap = _interopRequireDefault(require("../TabFocusTrap"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Pill": "Pill__Pill___2yQFD a11y__focus-outline--default___2hwb1",
  "Pill__label": "Pill__Pill__label____EsBZ",
  "Pill__close-button": "Pill__Pill__close-button___3OlnQ a11y__focus-outline--default___2hwb1",
  "Pill__drag-icon": "Pill__Pill__drag-icon___2aB1g",
  "Pill__icon": "Pill__Pill__icon___1NILR"
};
var defaultProps = {
  testId: 'cf-ui-pill'
};

var Pill = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Pill, _Component);

  var _super = _createSuper(Pill);

  function Pill() {
    (0, _classCallCheck2["default"])(this, Pill);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Pill, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onClose = _this$props.onClose,
          testId = _this$props.testId,
          onDrag = _this$props.onDrag,
          className = _this$props.className,
          dragHandleComponent = _this$props.dragHandleComponent,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "onClose", "testId", "onDrag", "className", "dragHandleComponent"]);
      var classNames = (0, _classnames["default"])(styles.Pill, className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps, {
        onDrag: onDrag
      }), onDrag && (dragHandleComponent ? dragHandleComponent : /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['Pill__drag-icon']
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "Drag",
        color: "muted",
        className: styles.Pill__icon
      }))), /*#__PURE__*/_react["default"].createElement("span", {
        "aria-label": label,
        title: label,
        className: styles.Pill__label
      }, label), onClose && /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        "aria-label": "close",
        onClick: onClose,
        className: styles['Pill__close-button']
      }, /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "Close",
        color: "muted",
        className: styles.Pill__icon
      }))));
    }
  }]);
  return Pill;
}(_react.Component);

exports.Pill = Pill;
Pill.displayName = "Pill";
Pill.propTypes = {
  label: _propTypes["default"].string.isRequired,
  onClose: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any,
  dragHandleComponent: _propTypes["default"].node
};
Pill.defaultProps = defaultProps;
var _default = Pill;
exports["default"] = _default;