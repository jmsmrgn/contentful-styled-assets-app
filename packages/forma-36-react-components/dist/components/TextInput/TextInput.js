"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextInput = void 0;

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

var _CopyButton = _interopRequireDefault(require("../CopyButton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TextInput": "TextInput__TextInput___36-K-",
  "TextInput__input": "TextInput__TextInput__input___27vDB a11y__focus-border--default___60AXp",
  "TextInput--small": "TextInput__TextInput--small___19AFQ",
  "TextInput--medium": "TextInput__TextInput--medium___1bR2D",
  "TextInput--large": "TextInput__TextInput--large___KwY4O",
  "TextInput--full": "TextInput__TextInput--full___1EJEW",
  "TextInput--disabled": "TextInput__TextInput--disabled___2t7VS",
  "TextInput--negative": "TextInput__TextInput--negative___iVq__",
  "TextInput__copy-button": "TextInput__TextInput__copy-button___3Sy2W"
};
var defaultProps = {
  withCopyButton: false,
  testId: 'cf-ui-text-input',
  disabled: false,
  isReadOnly: false,
  required: false,
  width: 'full',
  willBlurOnEsc: true
};

var TextInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextInput, _Component);

  var _super = _createSuper(TextInput);

  function TextInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: _this.props.value
    };

    _this.handleFocus = function (e) {
      if (_this.props.disabled) {
        e.target.select();
      }
    };

    _this.handleKeyDown = function (e) {
      var ESC = 27;

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }

      if (e.keyCode === ESC && _this.props.willBlurOnEsc) {
        e.currentTarget.blur();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(TextInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cn,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          withCopyButton = _this$props.withCopyButton,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isReadOnly = _this$props.isReadOnly,
          _onChange = _this$props.onChange,
          testId = _this$props.testId,
          onBlur = _this$props.onBlur,
          onCopy = _this$props.onCopy,
          error = _this$props.error,
          width = _this$props.width,
          value = _this$props.value,
          type = _this$props.type,
          name = _this$props.name,
          id = _this$props.id,
          inputRef = _this$props.inputRef,
          willBlurOnEsc = _this$props.willBlurOnEsc,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "withCopyButton", "placeholder", "maxLength", "disabled", "required", "isReadOnly", "onChange", "testId", "onBlur", "onCopy", "error", "width", "value", "type", "name", "id", "inputRef", "willBlurOnEsc"]);
      var widthClass = "TextInput--".concat(width);
      var classNames = (0, _classnames["default"])(styles['TextInput'], className, styles[widthClass], (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['TextInput--disabled'], disabled), (0, _defineProperty2["default"])(_cn, styles['TextInput--negative'], error), _cn));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames
      }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        onKeyDown: this.handleKeyDown,
        "aria-label": name,
        className: styles['TextInput__input'],
        id: id,
        name: name,
        required: required,
        placeholder: placeholder,
        maxLength: maxLength,
        "data-test-id": testId,
        disabled: disabled,
        onBlur: onBlur,
        onFocus: this.handleFocus,
        onChange: function onChange(e) {
          if (disabled || isReadOnly) return;

          if (_onChange) {
            _onChange(e);
          }

          _this2.setState({
            value: e.target.value
          });
        },
        value: this.state.value,
        type: type,
        ref: inputRef
      }, otherProps)), withCopyButton && /*#__PURE__*/_react["default"].createElement(_CopyButton["default"], {
        onCopy: onCopy,
        copyValue: this.state.value,
        className: styles['TextInput__copy-button']
      }));
    }
  }]);
  return TextInput;
}(_react.Component);

exports.TextInput = TextInput;
TextInput.displayName = "TextInput";
TextInput.propTypes = {
  width: _propTypes["default"].oneOf(['small', 'medium', 'large', 'full']),
  isReadOnly: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['text', 'password', 'email', 'number', 'search', 'url', 'date', 'time']),
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  withCopyButton: _propTypes["default"].bool,
  testId: _propTypes["default"].string,
  onCopy: _propTypes["default"].func,
  value: _propTypes["default"].string,
  inputRef: _propTypes["default"].any,
  error: _propTypes["default"].bool,
  willBlurOnEsc: _propTypes["default"].bool.isRequired
};
TextInput.defaultProps = defaultProps;
var _default = TextInput;
exports["default"] = _default;