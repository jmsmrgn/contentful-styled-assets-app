"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = void 0;

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

var _List = _interopRequireDefault(require("../List"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ListItem": "ListItem__ListItem___3S9Oc",
  "ListItem--nested-list": "ListItem__ListItem--nested-list___dzAem"
};
var defaultProps = {
  testId: 'cf-ui-list-item'
};

var ListItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ListItem, _Component);

  var _super = _createSuper(ListItem);

  function ListItem() {
    (0, _classCallCheck2["default"])(this, ListItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId"]);
      var classNames = (0, _classnames["default"])(styles['ListItem'], className, (0, _defineProperty2["default"])({}, styles['ListItem--nested-list'], // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.props.children.type === _List["default"]));
      return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps), children);
    }
  }]);
  return ListItem;
}(_react.Component);

exports.ListItem = ListItem;
ListItem.displayName = "ListItem";
ListItem.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  testId: _propTypes["default"].string
};
ListItem.defaultProps = defaultProps;
var _default = ListItem;
exports["default"] = _default;