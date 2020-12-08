"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonContainer = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "SkeletonContainer": "SkeletonContainer__SkeletonContainer___23jiu"
};
var idCounter = 0;
var defaultProps = {
  testId: 'cf-ui-skeleton-form',
  ariaLabel: 'Loading component...',
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMidYMid meet',

  get clipId() {
    return "cf-ui-skeleton-clip-".concat(idCounter++);
  },

  get gradientId() {
    return "cf-ui-skeleton-clip-gradient-".concat(idCounter++);
  },

  get animateId() {
    return "animation-".concat(idCounter++);
  },

  backgroundColor: '#e5ebed',
  backgroundOpacity: 1,
  animate: true,
  speed: 2,
  foregroundColor: '#f7f9fa',
  foregroundOpacity: 1,
  svgWidth: '100%',
  svgHeight: '100%'
};

var SkeletonContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SkeletonContainer, _Component);

  var _super = _createSuper(SkeletonContainer);

  function SkeletonContainer() {
    (0, _classCallCheck2["default"])(this, SkeletonContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SkeletonContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          ariaLabel = _this$props.ariaLabel,
          width = _this$props.width,
          height = _this$props.height,
          preserveAspectRatio = _this$props.preserveAspectRatio,
          clipId = _this$props.clipId,
          gradientId = _this$props.gradientId,
          animateId = _this$props.animateId,
          backgroundColor = _this$props.backgroundColor,
          backgroundOpacity = _this$props.backgroundOpacity,
          animate = _this$props.animate,
          speed = _this$props.speed,
          foregroundColor = _this$props.foregroundColor,
          foregroundOpacity = _this$props.foregroundOpacity,
          svgWidth = _this$props.svgWidth,
          svgHeight = _this$props.svgHeight,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "ariaLabel", "width", "height", "preserveAspectRatio", "clipId", "gradientId", "animateId", "backgroundColor", "backgroundOpacity", "animate", "speed", "foregroundColor", "foregroundOpacity", "svgWidth", "svgHeight"]);
      var classNames = (0, _classnames["default"])(styles['SkeletonContainer'], className);
      return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
        role: "img",
        className: classNames,
        "aria-label": ariaLabel,
        preserveAspectRatio: preserveAspectRatio,
        width: svgWidth,
        height: svgHeight,
        "data-test-id": testId
      }, otherProps), ariaLabel ? /*#__PURE__*/_react["default"].createElement("title", null, ariaLabel) : null, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "0",
        width: width,
        height: height,
        clipPath: "url(#".concat(clipId, ")"),
        style: {
          fill: "url(#".concat(gradientId, ")")
        }
      }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: clipId
      }, children), /*#__PURE__*/_react["default"].createElement("linearGradient", {
        id: gradientId
      }, /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
      }, animate && /*#__PURE__*/_react["default"].createElement("animate", {
        id: animateId,
        attributeName: "stop-color",
        values: "".concat(backgroundColor, "; ").concat(foregroundColor, "; ").concat(backgroundColor),
        dur: "".concat(speed, "s"),
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "50%",
        stopColor: foregroundColor,
        stopOpacity: foregroundOpacity
      }, animate && /*#__PURE__*/_react["default"].createElement("animate", {
        attributeName: "stop-color",
        values: "".concat(backgroundColor, "; ").concat(foregroundColor, "; ").concat(backgroundColor),
        begin: "".concat(animateId, ".begin+0.25s"),
        dur: "".concat(speed, "s"),
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "100%",
        stopColor: backgroundColor,
        stopOpacity: backgroundOpacity
      }, animate && /*#__PURE__*/_react["default"].createElement("animate", {
        attributeName: "stop-color",
        begin: "".concat(animateId, ".begin+0.5s"),
        values: "".concat(backgroundColor, "; ").concat(foregroundColor, "; ").concat(backgroundColor),
        dur: "".concat(speed, "s"),
        repeatCount: "indefinite"
      })))));
    }
  }]);
  return SkeletonContainer;
}(_react.Component);

exports.SkeletonContainer = SkeletonContainer;
SkeletonContainer.displayName = "SkeletonContainer";
SkeletonContainer.propTypes = {
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  preserveAspectRatio: _propTypes["default"].string,
  clipId: _propTypes["default"].string,
  gradientId: _propTypes["default"].string,
  animateId: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  backgroundOpacity: _propTypes["default"].number,
  animate: _propTypes["default"].bool,
  speed: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  foregroundColor: _propTypes["default"].string,
  foregroundOpacity: _propTypes["default"].number,
  svgWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  svgHeight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
SkeletonContainer.defaultProps = defaultProps;
var _default = SkeletonContainer;
exports["default"] = _default;