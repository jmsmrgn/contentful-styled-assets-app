"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Textarea = void 0;

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
  "Textarea": "Textarea__Textarea___qcph7",
  "Textarea__textarea": "Textarea__Textarea__textarea___30c64 a11y__focus-border--default___60AXp",
  "Textarea--small": "Textarea__Textarea--small___3duGT",
  "Textarea--medium": "Textarea__Textarea--medium___2ylrR",
  "Textarea--large": "Textarea__Textarea--large___2jIb0",
  "Textarea--full": "Textarea__Textarea--full___1OW4s",
  "Textarea--disabled": "Textarea__Textarea--disabled___2tLQn",
  "Textarea--negative": "Textarea__Textarea--negative___1RyoO"
};
var defaultProps = {
  testId: 'cf-ui-textarea',
  disabled: false,
  required: false,
  width: 'full',
  willBlurOnEsc: true
};

var Textarea = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Textarea, _Component);

  var _super = _createSuper(Textarea);

  function Textarea() {
    var _this;

    (0, _classCallCheck2["default"])(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: _this.props.value
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

  (0, _createClass2["default"])(Textarea, [{
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
          testId = _this$props.testId,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          _onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          required = _this$props.required,
          onBlur = _this$props.onBlur,
          error = _this$props.error,
          width = _this$props.width,
          value = _this$props.value,
          name = _this$props.name,
          rows = _this$props.rows,
          id = _this$props.id,
          willBlurOnEsc = _this$props.willBlurOnEsc,
          textareaRef = _this$props.textareaRef,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "testId", "placeholder", "maxLength", "onChange", "disabled", "required", "onBlur", "error", "width", "value", "name", "rows", "id", "willBlurOnEsc", "textareaRef"]);
      var widthClass = "Textarea--".concat(width);
      var classNames = (0, _classnames["default"])(styles['Textarea'], className, styles[widthClass], (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['Textarea--disabled'], disabled), (0, _defineProperty2["default"])(_cn, styles['Textarea--negative'], error), _cn));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames
      }, /*#__PURE__*/_react["default"].createElement("textarea", (0, _extends2["default"])({
        "data-test-id": testId,
        "aria-label": name,
        className: styles['Textarea__textarea'],
        id: id,
        rows: rows,
        onBlur: onBlur,
        disabled: disabled,
        placeholder: placeholder,
        name: name,
        onChange: function onChange(e) {
          if (_onChange) {
            _onChange(e);
          }

          _this2.setState({
            value: e.target.value
          });
        },
        maxLength: maxLength,
        value: disabled ? value : this.state && this.state.value,
        onKeyDown: this.handleKeyDown,
        ref: textareaRef
      }, otherProps)));
    }
  }]);
  return Textarea;
}(_react.Component);

exports.Textarea = Textarea;
Textarea.displayName = "Textarea";
Textarea.propTypes = {
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  className: _propTypes["default"].string,
  width: _propTypes["default"].oneOf(['small', 'medium', 'large', 'full']),
  maxLength: _propTypes["default"].number,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  rows: _propTypes["default"].number,
  error: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  willBlurOnEsc: _propTypes["default"].bool,
  textareaRef: _propTypes["default"].any
};
Textarea.defaultProps = defaultProps;
var _default = Textarea;
exports["default"] = _default;