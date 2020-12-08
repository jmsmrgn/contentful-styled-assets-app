"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ControlledInput = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ControlledInput": "ControlledInput__ControlledInput___2XK3j",
  "ControlledInput--disabled": "ControlledInput__ControlledInput--disabled___3prPF"
};
var defaultProps = {
  testId: 'cf-ui-controlled-input',
  required: false,
  disabled: false,
  type: 'checkbox',
  willBlurOnEsc: true
};

var ControlledInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ControlledInput, _Component);

  var _super = _createSuper(ControlledInput);

  function ControlledInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, ControlledInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleKeyDown = function (e) {
      var ESC = 27;

      if (e.keyCode === ESC && _this.props.willBlurOnEsc) {
        e.currentTarget.blur();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(ControlledInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          testId = _this$props.testId,
          required = _this$props.required,
          disabled = _this$props.disabled,
          _onFocus = _this$props.onFocus,
          _onBlur = _this$props.onBlur,
          name = _this$props.name,
          _onChange = _this$props.onChange,
          checked = _this$props.checked,
          value = _this$props.value,
          type = _this$props.type,
          labelText = _this$props.labelText,
          willBlurOnEsc = _this$props.willBlurOnEsc,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "id", "testId", "required", "disabled", "onFocus", "onBlur", "name", "onChange", "checked", "value", "type", "labelText", "willBlurOnEsc"]);
      var classNames = (0, _classnames["default"])(styles['ControlledInput'], className, (0, _defineProperty2["default"])({}, styles['ControlledInput--disabled'], disabled));
      return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        className: classNames,
        value: value,
        name: name,
        checked: this.props.checked,
        type: type,
        "data-test-id": testId,
        onChange: function onChange(e) {
          if (_onChange) {
            _onChange(e);
          }
        },
        onBlur: function onBlur(e) {
          if (_onBlur) {
            _onBlur(e);
          }
        },
        onFocus: function onFocus(e) {
          if (_onFocus) {
            _onFocus(e);
          }
        },
        "aria-label": labelText,
        id: id,
        required: required,
        disabled: disabled,
        onKeyDown: this.handleKeyDown
      }, otherProps));
    }
  }]);
  return ControlledInput;
}(_react.Component);

exports.ControlledInput = ControlledInput;
ControlledInput.displayName = "ControlledInput";
ControlledInput.propTypes = {
  id: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  labelText: _propTypes["default"].string.isRequired,
  checked: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['checkbox', 'radio']),
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  willBlurOnEsc: _propTypes["default"].bool.isRequired
};
ControlledInput.defaultProps = defaultProps;
var _default = ControlledInput;
exports["default"] = _default;