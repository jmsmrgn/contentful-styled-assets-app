"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SectionHeading = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = require("../Typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "SectionHeading": "SectionHeading__SectionHeading___39J6j"
};
var defaultProps = {
  element: 'h3',
  testId: 'cf-ui-section-heading'
};

var SectionHeading = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SectionHeading, _Component);

  var _super = _createSuper(SectionHeading);

  function SectionHeading() {
    (0, _classCallCheck2["default"])(this, SectionHeading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SectionHeading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          element = _this$props.element,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "element"]);
      var classNames = (0, _classnames["default"])(styles['SectionHeading'], className);
      var Element = element; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      return /*#__PURE__*/_react["default"].createElement(_Typography.TypographyContext.Consumer, null, function (value) {
        return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
          className: (0, _classnames["default"])(classNames, [value['sectionHeading'] && "f36-margin-bottom--".concat(value['sectionHeading']['spacing'])]),
          "data-test-id": testId
        }, otherProps), children);
      });
    }
  }]);
  return SectionHeading;
}(_react.Component);

exports.SectionHeading = SectionHeading;
SectionHeading.displayName = "SectionHeading";
SectionHeading.propTypes = {
  element: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any
};
SectionHeading.defaultProps = defaultProps;
var _default = SectionHeading;
exports["default"] = _default;