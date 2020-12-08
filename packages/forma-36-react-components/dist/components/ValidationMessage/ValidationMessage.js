"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidationMessage = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ValidationMessage": "ValidationMessage__ValidationMessage___3_rEq",
  "ValidationMessage__icon": "ValidationMessage__ValidationMessage__icon___3HPCh",
  "ValidationMessage__text": "ValidationMessage__ValidationMessage__text___8FBj5"
};
var defaultProps = {
  testId: 'cf-ui-validation-message'
};

var ValidationMessage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ValidationMessage, _Component);

  var _super = _createSuper(ValidationMessage);

  function ValidationMessage() {
    (0, _classCallCheck2["default"])(this, ValidationMessage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId"]);
      var classNames = (0, _classnames["default"])(styles['ValidationMessage'], className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
        className: classNames,
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "ErrorCircle",
        className: styles['ValidationMessage__icon'],
        color: "negative"
      }), /*#__PURE__*/_react["default"].createElement("p", {
        className: styles['ValidationMessage__text']
      }, children));
    }
  }]);
  return ValidationMessage;
}(_react.Component);

exports.ValidationMessage = ValidationMessage;
ValidationMessage.displayName = "ValidationMessage";
ValidationMessage.propTypes = {
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any,
  children: _propTypes["default"].node.isRequired
};
ValidationMessage.defaultProps = defaultProps;
var _default = ValidationMessage;
exports["default"] = _default;