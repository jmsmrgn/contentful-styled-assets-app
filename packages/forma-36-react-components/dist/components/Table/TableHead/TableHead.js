"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableHead = void 0;

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

var _TableCell = require("../TableCell");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TableHead--sticky": "TableHead__TableHead--sticky___1YzE0"
};
var defaultProps = {
  isSticky: false,
  testId: 'cf-ui-table-head'
};

var TableHead = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TableHead, _Component);

  var _super = _createSuper(TableHead);

  function TableHead() {
    (0, _classCallCheck2["default"])(this, TableHead);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          testId = _this$props.testId,
          offsetTop = _this$props.offsetTop,
          isSticky = _this$props.isSticky,
          children = _this$props.children,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "testId", "offsetTop", "isSticky", "children"]);
      var classNames = (0, _classnames["default"])(className, (0, _defineProperty2["default"])({}, styles["TableHead--sticky"], isSticky));
      return /*#__PURE__*/_react["default"].createElement(_TableCell.TableCellContext.Provider, {
        value: _objectSpread(_objectSpread({}, _TableCell.contextOptions.head), {}, {
          offsetTop: offsetTop || 0
        })
      }, /*#__PURE__*/_react["default"].createElement("thead", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps), children));
    }
  }]);
  return TableHead;
}(_react.Component);

exports.TableHead = TableHead;
TableHead.displayName = "TableHead";
TableHead.propTypes = {
  isSticky: _propTypes["default"].bool,
  offsetTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any,
  children: _propTypes["default"].node.isRequired
};
TableHead.defaultProps = defaultProps;
var _default = TableHead;
exports["default"] = _default;