"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonImage = void 0;

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
  testId: 'cf-ui-skeleton-image',
  width: 70,
  height: 70,
  radiusX: 0,
  radiusY: 0
};

var SkeletonImage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SkeletonImage, _Component);

  var _super = _createSuper(SkeletonImage);

  function SkeletonImage() {
    (0, _classCallCheck2["default"])(this, SkeletonImage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SkeletonImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          testId = _this$props.testId,
          offsetLeft = _this$props.offsetLeft,
          offsetTop = _this$props.offsetTop,
          width = _this$props.width,
          height = _this$props.height,
          radiusX = _this$props.radiusX,
          radiusY = _this$props.radiusY,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["testId", "offsetLeft", "offsetTop", "width", "height", "radiusX", "radiusY"]);
      return /*#__PURE__*/_react["default"].createElement("rect", (0, _extends2["default"])({
        x: offsetLeft,
        y: offsetTop,
        rx: radiusX,
        ry: radiusY,
        width: width,
        height: height
      }, otherProps));
    }
  }]);
  return SkeletonImage;
}(_react.Component);

exports.SkeletonImage = SkeletonImage;
SkeletonImage.displayName = "SkeletonImage";
SkeletonImage.propTypes = {
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  radiusX: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  radiusY: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  offsetLeft: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  offsetTop: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  testId: _propTypes["default"].string
};
SkeletonImage.defaultProps = defaultProps;
var _default = SkeletonImage;
exports["default"] = _default;