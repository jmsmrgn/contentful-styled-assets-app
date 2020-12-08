"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = void 0;

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

var _reactTransitionGroup = require("react-transition-group");

var _Icon = _interopRequireDefault(require("../Icon"));

var _TabFocusTrap = _interopRequireDefault(require("../TabFocusTrap"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Button": "Button__Button___1ZfFj a11y__focus-border--default___60AXp",
  "Button--disabled": "Button__Button--disabled___1E20M",
  "Button__icon": "Button__Button__icon___2YX5-",
  "Button--full-width": "Button__Button--full-width___3Fmpo",
  "Button--muted": "Button__Button--muted___2Wair",
  "Button--is-active": "Button__Button--is-active___iPvhW",
  "Button--naked": "Button__Button--naked___mB6LS",
  "Button--primary": "Button__Button--primary___JImeO",
  "Button__label": "Button__Button__label___3tcOj",
  "Button--positive": "Button__Button--positive___1t6w1",
  "Button--negative": "Button__Button--negative___22jwE",
  "Button--warning": "Button__Button--warning___2xMa4",
  "Button__inner-wrapper": "Button__Button__inner-wrapper___3qrNC",
  "Button--small": "Button__Button--small___3yyrk",
  "Button--large": "Button__Button--large___1PYrl",
  "Button__spinner": "Button__Button__spinner___3j8Aj",
  "Button--spinner--enter": "Button__Button--spinner--enter___1qgg7",
  "Button--spinner-active": "Button__Button--spinner-active___EEKjQ",
  "Button--spinner--exit": "Button__Button--spinner--exit___2RUI-",
  "Button--spinner-exit-active": "Button__Button--spinner-exit-active___3HXa7"
};
var defaultProps = {
  loading: false,
  isFullWidth: false,
  indicateDropdown: false,
  disabled: false,
  testId: 'cf-ui-button',
  buttonType: 'primary',
  type: 'button'
};

var Button = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          icon = _this$props.icon,
          buttonType = _this$props.buttonType,
          size = _this$props.size,
          isFullWidth = _this$props.isFullWidth,
          _onBlur = _this$props.onBlur,
          testId = _this$props.testId,
          _onClick = _this$props.onClick,
          loading = _this$props.loading,
          disabled = _this$props.disabled,
          indicateDropdown = _this$props.indicateDropdown,
          href = _this$props.href,
          type = _this$props.type,
          isActive = _this$props.isActive,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "icon", "buttonType", "size", "isFullWidth", "onBlur", "testId", "onClick", "loading", "disabled", "indicateDropdown", "href", "type", "isActive"]);
      var classNames = (0, _classnames["default"])(styles.Button, className, styles["Button--".concat(buttonType)], (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['Button--disabled'], disabled), (0, _defineProperty2["default"])(_cn, styles["Button--".concat(size)], size), (0, _defineProperty2["default"])(_cn, styles['Button--full-width'], isFullWidth), (0, _defineProperty2["default"])(_cn, styles['Button--is-active'], isActive), _cn));
      var iconColor = buttonType === 'muted' || buttonType === 'naked' ? 'secondary' : 'white'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var Element = href ? 'a' : 'button';
      return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        onBlur: function onBlur(e) {
          if (_onBlur && !disabled) {
            _onBlur(e);
          }
        },
        onClick: function onClick(e) {
          if (_onClick && !disabled && !loading) {
            _onClick(e);
          }
        },
        "data-test-id": testId,
        className: classNames,
        disabled: disabled,
        href: !disabled ? href : null,
        type: type
      }, otherProps), /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['Button__inner-wrapper']
      }, icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: styles.Button__icon,
        size: size === 'small' ? 'tiny' : 'small',
        icon: icon,
        color: iconColor
      }), children && /*#__PURE__*/_react["default"].createElement("span", {
        className: styles.Button__label
      }, children), indicateDropdown && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: styles['Button__dropdown-icon'],
        icon: "ArrowDown",
        color: iconColor
      }), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        "in": loading,
        timeout: 1000,
        classNames: {
          enter: styles['Button--spinner--enter'],
          enterActive: styles['Button--spinner-active'],
          exit: styles['Button--spinner--exit'],
          exitActive: styles['Button--spinner-exit-active']
        },
        mountOnEnter: true,
        unmountOnExit: true
      }, /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
        className: styles.Button__spinner,
        size: "small",
        color: buttonType === 'muted' || buttonType === 'naked' ? 'default' : 'white'
      }))));
    }
  }]);
  return Button;
}(_react.Component);

exports.Button = Button;
Button.displayName = "Button";
Button.propTypes = {
  icon: _propTypes["default"].any,
  indicateDropdown: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  isFullWidth: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  testId: _propTypes["default"].string,
  buttonType: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'warning', 'muted', 'naked']),
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset']),
  size: _propTypes["default"].oneOf(['small', 'large']),
  href: _propTypes["default"].string,
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  isActive: _propTypes["default"].bool
};
Button.defaultProps = defaultProps;
var _default = Button;
exports["default"] = _default;