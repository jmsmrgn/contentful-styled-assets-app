"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconButton = void 0;

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

var _Icon = _interopRequireDefault(require("../Icon"));

var _TabFocusTrap = _interopRequireDefault(require("../TabFocusTrap"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "IconButton": "IconButton__IconButton___1_XeU a11y__focus-outline--default___2hwb1",
  "IconButton__inner": "IconButton__IconButton__inner___3fnmT",
  "IconButton--disabled": "IconButton__IconButton--disabled___1YhDh",
  "IconButton--primary": "IconButton__IconButton--primary___1nYDN",
  "IconButton__icon": "IconButton__IconButton__icon___3yZQN",
  "IconButton--positive": "IconButton__IconButton--positive___HkCX3",
  "IconButton--negative": "IconButton__IconButton--negative___dW81q",
  "IconButton--secondary": "IconButton__IconButton--secondary___3Gc3d",
  "IconButton--muted": "IconButton__IconButton--muted___22_IZ",
  "IconButton--white": "IconButton__IconButton--white___3GUQP",
  "IconButton__label": "IconButton__IconButton__label___1kp5y helpers__sr-only___3Kv3z",
  "IconButton__dropdown": "IconButton__IconButton__dropdown___NoDIS"
};
var defaultProps = {
  disabled: false,
  testId: 'cf-ui-icon-button',
  buttonType: 'primary',
  withDropdown: false
};

var IconButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(IconButton, _Component);

  var _super = _createSuper(IconButton);

  function IconButton() {
    (0, _classCallCheck2["default"])(this, IconButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconButton, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          label = _this$props.label,
          iconProps = _this$props.iconProps,
          href = _this$props.href,
          testId = _this$props.testId,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          buttonType = _this$props.buttonType,
          withDropdown = _this$props.withDropdown,
          className = _this$props.className,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "iconProps", "href", "testId", "disabled", "onClick", "buttonType", "withDropdown", "className"]);
      var classNames = (0, _classnames["default"])(styles.IconButton, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['IconButton--disabled'], disabled), (0, _defineProperty2["default"])(_cn, styles["IconButton--".concat(buttonType)], buttonType), _cn));

      var elementProps = _objectSpread({
        className: classNames,
        onClick: !disabled ? onClick : undefined,
        'data-test-id': testId
      }, otherProps);

      var content = /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles.IconButton__inner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], (0, _extends2["default"])({}, iconProps, {
        className: (0, _classnames["default"])(styles.IconButton__icon, iconProps.className)
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: styles.IconButton__label
      }, label), withDropdown && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "ChevronDown",
        color: "secondary",
        className: styles.IconButton__dropdown
      }));

      if (href) {
        if (disabled) {
          return /*#__PURE__*/_react["default"].createElement("a", elementProps, content);
        }

        return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({}, elementProps, {
          href: href
        }), "content");
      }

      return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, elementProps, {
        type: "button",
        disabled: disabled
      }), content);
    }
  }]);
  return IconButton;
}(_react.Component);

exports.IconButton = IconButton;
IconButton.displayName = "IconButton";
IconButton.propTypes = {
  label: _propTypes["default"].string.isRequired,
  href: _propTypes["default"].string,
  iconProps: _propTypes["default"].any.isRequired,
  disabled: _propTypes["default"].bool,
  buttonType: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'secondary', 'muted', 'white']),
  withDropdown: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
IconButton.defaultProps = defaultProps;
var _default = IconButton;
exports["default"] = _default;