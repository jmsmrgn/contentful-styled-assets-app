"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tabs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
  "Tabs": "Tabs__Tabs___3Cp8m",
  "Tab": "Tabs__Tab___1SiYI",
  "Tabs__with-divider": "Tabs__Tabs__with-divider___2Mx3Z",
  "Tab__selected": "Tabs__Tab__selected___3erbm",
  "Tab__disabled": "Tabs__Tab__disabled___3H8Zw"
};
var defaultProps = {
  testId: 'cf-ui-tabs',
  role: 'tablist',
  withDivider: false
};

var Tabs = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs() {
    (0, _classCallCheck2["default"])(this, Tabs);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          role = _this$props.role,
          withDivider = _this$props.withDivider,
          style = _this$props.style;
      var classNames = (0, _classnames["default"])(styles.Tabs, (0, _defineProperty2["default"])({}, styles['Tabs__with-divider'], withDivider), className);
      var elementProps = {
        'data-test-id': testId,
        className: classNames,
        style: style
      };

      if (role === 'navigation') {
        return /*#__PURE__*/_react["default"].createElement("nav", (0, _extends2["default"])({}, elementProps, {
          role: "navigation"
        }), children);
      }

      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, elementProps, {
        role: "tablist"
      }), children);
    }
  }]);
  return Tabs;
}(_react.Component);

exports.Tabs = Tabs;
Tabs.displayName = "Tabs";
Tabs.propTypes = {
  role: _propTypes["default"].oneOf(['navigation', 'tablist']),
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  withDivider: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string
};
Tabs.defaultProps = defaultProps;
var _default = Tabs;
exports["default"] = _default;