"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioButtonField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _ControlledInputField = _interopRequireDefault(require("../ControlledInputField"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  labelIsLight: false,
  checked: false,
  inputType: 'checkbox',
  testId: 'cf-ui-radio-button-field'
};

var RadioButtonField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RadioButtonField, _Component);

  var _super = _createSuper(RadioButtonField);

  function RadioButtonField() {
    (0, _classCallCheck2["default"])(this, RadioButtonField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RadioButtonField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["testId"]);
      return /*#__PURE__*/_react["default"].createElement(_ControlledInputField["default"], (0, _extends2["default"])({
        testId: testId
      }, otherProps, {
        inputType: "radio"
      }));
    }
  }]);
  return RadioButtonField;
}(_react.Component);

exports.RadioButtonField = RadioButtonField;
RadioButtonField.displayName = "RadioButtonField";
RadioButtonField.defaultProps = defaultProps;
var _default = RadioButtonField;
exports["default"] = _default;