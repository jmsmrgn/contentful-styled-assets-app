"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextLink = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TextLink": "TextLink__TextLink___1biUr a11y__focus-outline--default___2hwb1",
  "TextLink--primary": "TextLink__TextLink--primary___2Vc9F",
  "TextLink--positive": "TextLink__TextLink--positive___3X5ph",
  "TextLink--negative": "TextLink__TextLink--negative___3yhMk",
  "TextLink--secondary": "TextLink__TextLink--secondary___WbTVM",
  "TextLink--muted": "TextLink__TextLink--muted___TMxw0",
  "TextLink--white": "TextLink__TextLink--white___nesMH",
  "TextLink--disabled": "TextLink__TextLink--disabled___3vo9n",
  "TextLink__icon": "TextLink__TextLink__icon___3ggiB",
  "TextLink__icon-wrapper": "TextLink__TextLink__icon-wrapper___25_tI",
  "TextLink__icon-wrapper--right": "TextLink__TextLink__icon-wrapper--right___3ybuG"
};
var defaultProps = {
  linkType: 'primary',
  testId: 'cf-ui-text-link',
  disabled: false,
  iconPosition: 'left'
};

var TextLink = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextLink, _Component);

  var _super = _createSuper(TextLink);

  function TextLink() {
    (0, _classCallCheck2["default"])(this, TextLink);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLink, [{
    key: "renderIcon",
    value: function renderIcon(icon, linkType) {
      if (!icon) return undefined;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.iconPosition === 'right' ? styles['TextLink__icon-wrapper--right'] : styles['TextLink__icon-wrapper']
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: icon,
        color: linkType,
        className: styles.TextLink__icon
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          children = _this$props.children,
          href = _this$props.href,
          linkType = _this$props.linkType,
          testId = _this$props.testId,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          className = _this$props.className,
          icon = _this$props.icon,
          text = _this$props.text,
          iconPosition = _this$props.iconPosition,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "href", "linkType", "testId", "onClick", "disabled", "className", "icon", "text", "iconPosition"]);
      var classNames = (0, _classnames["default"])(styles.TextLink, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles["TextLink--".concat(linkType)], linkType), (0, _defineProperty2["default"])(_cn, styles['TextLink--disabled'], disabled), _cn));

      var content = /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], null, icon && iconPosition === 'left' && this.renderIcon(icon, linkType) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      , text || children, icon && iconPosition === 'right' && this.renderIcon(icon, linkType) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      );

      if (href) {
        return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({
          className: classNames,
          "data-test-id": testId,
          onClick: disabled ? function (e) {
            e.preventDefault();
          } : onClick,
          href: href
        }, otherProps), content);
      }

      return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
        type: "button",
        className: classNames,
        "data-test-id": testId,
        onClick: !disabled ? onClick : function () {},
        disabled: disabled
      }, otherProps), content);
    }
  }]);
  return TextLink;
}(_react.Component);

exports.TextLink = TextLink;
TextLink.displayName = "TextLink";
TextLink.propTypes = {
  children: _propTypes["default"].node,
  linkType: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'secondary', 'muted', 'white']),
  disabled: _propTypes["default"].bool,
  testId: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  icon: _propTypes["default"].any,
  text: _propTypes["default"].string,
  iconPosition: _propTypes["default"].oneOf(['right', 'left'])
};
TextLink.defaultProps = defaultProps;
var _default = TextLink;
exports["default"] = _default;