"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleButton = void 0;

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

var _Card = _interopRequireDefault(require("../Card/Card"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _TabFocusTrap = _interopRequireDefault(require("../TabFocusTrap/TabFocusTrap"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Toggle": "ToggleButton__Toggle___1gUNN",
  "Toggle--active": "ToggleButton__Toggle--active___cx5OU",
  "Toggle--disabled": "ToggleButton__Toggle--disabled___2uZSk",
  "Toggle__button": "ToggleButton__Toggle__button___g0Ntb a11y__focus-outline--default___2hwb1",
  "Toggle__button__icon": "ToggleButton__Toggle__button__icon___2v22X",
  "Toggle__content-wrapper": "ToggleButton__Toggle__content-wrapper___1VoAt",
  "Toggle__button__inner-wrapper": "ToggleButton__Toggle__button__inner-wrapper___1MGKY",
  "Toggle--square": "ToggleButton__Toggle--square___3nugi"
};
var defaultProps = {
  testId: 'cf-ui-toggle-button',
  isActive: false,
  isDisabled: false
};

var ToggleButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ToggleButton, _Component);

  var _super = _createSuper(ToggleButton);

  function ToggleButton() {
    var _this;

    (0, _classCallCheck2["default"])(this, ToggleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleToggle = function () {
      if (!_this.props.isDisabled) {
        if (_this.props.onToggle) {
          _this.props.onToggle();
        }
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(ToggleButton, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          children = _this$props.children,
          isActive = _this$props.isActive,
          isDisabled = _this$props.isDisabled,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "icon", "children", "isActive", "isDisabled"]);
      var classNames = (0, _classnames["default"])(styles.Toggle, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['Toggle--active'], isActive), (0, _defineProperty2["default"])(_cn, styles['Toggle--disabled'], isDisabled), (0, _defineProperty2["default"])(_cn, styles['Toggle--square'], !children), _cn));
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], (0, _extends2["default"])({
        className: classNames,
        padding: "none",
        selected: isActive
      }, otherProps), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: styles.Toggle__button,
        disabled: isDisabled,
        "data-test-id": "button",
        onClick: this.handleToggle,
        "aria-pressed": isActive
      }, /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['Toggle__button__inner-wrapper']
      }, icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: icon,
        color: "secondary",
        className: styles.Toggle__button__icon
      }), children && /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['Toggle__content-wrapper']
      }, children))));
    }
  }]);
  return ToggleButton;
}(_react.Component);

exports.ToggleButton = ToggleButton;
ToggleButton.displayName = "ToggleButton";
ToggleButton.propTypes = {
  children: _propTypes["default"].node.isRequired,
  icon: _propTypes["default"].any,
  isActive: _propTypes["default"].bool,
  onToggle: _propTypes["default"].any,
  isDisabled: _propTypes["default"].bool,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string
};
ToggleButton.defaultProps = defaultProps;
var _default = ToggleButton;
exports["default"] = _default;