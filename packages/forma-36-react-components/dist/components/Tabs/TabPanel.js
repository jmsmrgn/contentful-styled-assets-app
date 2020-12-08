"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabPanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  testId: 'cf-ui-tab-panel'
};

var TabPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TabPanel, _Component);

  var _super = _createSuper(TabPanel);

  function TabPanel() {
    (0, _classCallCheck2["default"])(this, TabPanel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TabPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          testId = _this$props.testId,
          className = _this$props.className,
          children = _this$props.children,
          id = _this$props.id,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["testId", "className", "children", "id"]);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, rest, {
        id: id,
        role: "tabpanel",
        "data-test-id": testId,
        className: className
      }), children);
    }
  }]);
  return TabPanel;
}(_react.Component);

exports.TabPanel = TabPanel;
TabPanel.displayName = "TabPanel";
TabPanel.propTypes = {
  id: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any,
  children: _propTypes["default"].node.isRequired
};
TabPanel.defaultProps = defaultProps;
var _default = TabPanel;
exports["default"] = _default;