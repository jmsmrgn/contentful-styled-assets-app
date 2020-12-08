"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Spinner = void 0;

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
  "Spinner": "Spinner__Spinner___32lpa",
  "rotate-cw": "Spinner__rotate-cw___dk3Pr",
  "Spinner--default": "Spinner__Spinner--default___1UP1r",
  "Spinner--small": "Spinner__Spinner--small___2hyo0",
  "Spinner--large": "Spinner__Spinner--large___3TPiL",
  "Spinner--white": "Spinner__Spinner--white___3Hsq3"
};
var defaultProps = {
  testId: 'cf-ui-spinner',
  size: 'default',
  color: 'default'
};

var Spinner = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Spinner, _Component);

  var _super = _createSuper(Spinner);

  function Spinner() {
    (0, _classCallCheck2["default"])(this, Spinner);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Spinner, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          testId = _this$props.testId,
          color = _this$props.color,
          customSize = _this$props.customSize,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "size", "testId", "color", "customSize"]);
      var classNames = (0, _classnames["default"])(styles.Spinner, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles["Spinner--".concat(size)], size), (0, _defineProperty2["default"])(_cn, styles["Spinner--".concat(color)], color), _cn));
      return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        "data-test-id": testId,
        className: classNames,
        style: customSize ? {
          height: "".concat(customSize, "px"),
          width: "".concat(customSize, "px")
        } : {}
      }, otherProps), /*#__PURE__*/_react["default"].createElement("title", null, "Loading\u2026"), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M2,10a8,8,0,0,1,8-8V0a10,10,0,0,0,0,20V18A8,8,0,0,1,2,10Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M10,0V2a8,8,0,0,1,0,16v2A10,10,0,0,0,10,0Z",
        style: {
          opacity: 0.4
        }
      }));
    }
  }]);
  return Spinner;
}(_react.Component);

exports.Spinner = Spinner;
Spinner.displayName = "Spinner";
Spinner.propTypes = {
  size: _propTypes["default"].oneOf(['default', 'small', 'large']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].oneOf(['default', 'white']),
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
Spinner.defaultProps = defaultProps;
var _default = Spinner;
exports["default"] = _default;