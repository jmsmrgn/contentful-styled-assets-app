"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ControlledInputField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

var _HelpText = _interopRequireDefault(require("../HelpText"));

var _ValidationMessage = _interopRequireDefault(require("../ValidationMessage"));

var _ControlledInput = _interopRequireDefault(require("../ControlledInput/ControlledInput"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ControlledInputField": "ControlledInputField__ControlledInputField___2uIG9",
  "ControlledInputField--disabled": "ControlledInputField__ControlledInputField--disabled___HDWt6",
  "ControlledInputField__input": "ControlledInputField__ControlledInputField__input___3OMYB",
  "ControlledInputField__label": "ControlledInputField__ControlledInputField__label___a9J52",
  "ControlledInputField__label--light": "ControlledInputField__ControlledInputField__label--light___2G2AZ"
};
var defaultProps = {
  testId: 'cf-ui-controlled-input-field',
  labelIsLight: false,
  checked: false,
  inputType: 'checkbox'
};

var ControlledInputField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ControlledInputField, _Component);

  var _super = _createSuper(ControlledInputField);

  function ControlledInputField() {
    (0, _classCallCheck2["default"])(this, ControlledInputField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ControlledInputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          labelIsLight = _this$props.labelIsLight,
          testId = _this$props.testId,
          required = _this$props.required,
          helpText = _this$props.helpText,
          disabled = _this$props.disabled,
          labelText = _this$props.labelText,
          helpTextProps = _this$props.helpTextProps,
          formLabelProps = _this$props.formLabelProps,
          className = _this$props.className,
          checked = _this$props.checked,
          value = _this$props.value,
          validationMessage = _this$props.validationMessage,
          onChange = _this$props.onChange,
          children = _this$props.children,
          inputType = _this$props.inputType,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["id", "labelIsLight", "testId", "required", "helpText", "disabled", "labelText", "helpTextProps", "formLabelProps", "className", "checked", "value", "validationMessage", "onChange", "children", "inputType", "inputProps", "name"]);
      var classNames = (0, _classnames["default"])(styles['ControlledInputField'], className, (0, _defineProperty2["default"])({}, styles['ControlledInputField--disabled'], disabled));
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        "data-test-id": testId,
        className: classNames
      }, otherProps), /*#__PURE__*/_react["default"].createElement(_ControlledInput["default"], (0, _extends2["default"])({
        id: id,
        labelText: labelText,
        type: inputType,
        name: name,
        required: required,
        checked: checked,
        disabled: disabled,
        value: value,
        onChange: onChange,
        className: styles.ControlledInputField__input
      }, inputProps)), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Checkbox__label-wrapper']
      }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], (0, _extends2["default"])({
        className: (0, _classnames["default"])(styles.ControlledInputField__label, (0, _defineProperty2["default"])({}, styles['ControlledInputField__label--light'], labelIsLight)),
        required: required,
        htmlFor: id
      }, formLabelProps), labelText), helpText && /*#__PURE__*/_react["default"].createElement(_HelpText["default"], (0, _extends2["default"])({
        className: styles['ControlledInputField__help-text']
      }, helpTextProps), helpText), validationMessage && /*#__PURE__*/_react["default"].createElement(_ValidationMessage["default"], {
        className: styles['ControlledInputField__validation-message']
      }, validationMessage)));
    }
  }]);
  return ControlledInputField;
}(_react.Component);

exports.ControlledInputField = ControlledInputField;
ControlledInputField.displayName = "ControlledInputField";
ControlledInputField.propTypes = {
  id: _propTypes["default"].string.isRequired,
  labelText: _propTypes["default"].string.isRequired,
  labelIsLight: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  helpText: _propTypes["default"].string,
  formLabelProps: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  helpTextProps: _propTypes["default"].object,
  validationMessage: _propTypes["default"].string,
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  inputProps: _propTypes["default"].object,
  inputType: _propTypes["default"].oneOf(['radio', 'checkbox']),
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node
};
ControlledInputField.defaultProps = defaultProps;
var _default = ControlledInputField;
exports["default"] = _default;