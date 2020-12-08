"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DisplayText = void 0;

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

var _Typography = require("../Typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "DisplayText": "DisplayText__DisplayText___172Lq",
  "DisplayText--default": "DisplayText__DisplayText--default___25iJC",
  "DisplayText--large": "DisplayText__DisplayText--large___2QHQE"
};
var defaultProps = {
  element: 'h1',
  testId: 'cf-ui-display-text',
  size: 'default'
};

var DisplayText = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DisplayText, _Component);

  var _super = _createSuper(DisplayText);

  function DisplayText() {
    (0, _classCallCheck2["default"])(this, DisplayText);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DisplayText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          element = _this$props.element,
          size = _this$props.size,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "element", "size"]);
      var classNames = (0, _classnames["default"])(styles['DisplayText'], className, (0, _defineProperty2["default"])({}, styles["DisplayText--".concat(size)], size));
      var Element = element; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      return /*#__PURE__*/_react["default"].createElement(_Typography.TypographyContext.Consumer, null, function (value) {
        var contextSize = size === 'large' ? value['displayTextLarge'] : value['displayText'];
        return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
          className: (0, _classnames["default"])(classNames, [contextSize && "f36-margin-bottom--".concat(contextSize.spacing)]),
          "data-test-id": testId
        }, otherProps), children);
      });
    }
  }]);
  return DisplayText;
}(_react.Component);

exports.DisplayText = DisplayText;
DisplayText.displayName = "DisplayText";
DisplayText.propTypes = {
  element: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  size: _propTypes["default"].oneOf(['default', 'large']),
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  style: _propTypes["default"].any,
  testId: _propTypes["default"].string
};
DisplayText.defaultProps = defaultProps;
var _default = DisplayText;
exports["default"] = _default;