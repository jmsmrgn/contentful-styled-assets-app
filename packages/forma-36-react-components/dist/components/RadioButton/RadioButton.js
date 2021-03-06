"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _ControlledInput = _interopRequireDefault(require("../ControlledInput"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  required: false,
  disabled: false,
  type: 'radio',
  testId: 'cf-ui-radio-button',
  willBlurOnEsc: true
};

var RadioButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RadioButton, _Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    (0, _classCallCheck2["default"])(this, RadioButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RadioButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_ControlledInput["default"], this.props);
    }
  }]);
  return RadioButton;
}(_react.Component);

exports.RadioButton = RadioButton;
RadioButton.displayName = "RadioButton";
RadioButton.defaultProps = defaultProps;
RadioButton.defaultProps = defaultProps;
var _default = RadioButton;
exports["default"] = _default;