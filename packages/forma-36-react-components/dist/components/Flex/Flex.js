"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Flex = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _forma36Tokens = _interopRequireDefault(require("@contentful/forma-36-tokens"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  "Flex": "Flex__Flex___Cpju1",
  "Flex__inline": "Flex__Flex__inline___39eAP",
  "Flex__fullWidth": "Flex__Flex__fullWidth___2JBEp",
  "Flex__fullHeight": "Flex__Flex__fullHeight___xgjho",
  "Flex__noShrink": "Flex__Flex__noShrink___2H1Bm"
};

var handleSpacing = function handleSpacing(value) {
  return value === 'none' ? 0 : _forma36Tokens["default"][value];
};

var defaultProps = {
  testId: 'cf-ui-flex'
};

var Flex = function Flex(props) {
  var _cn;

  var _props$htmlTag = props.htmlTag,
      Container = _props$htmlTag === void 0 ? 'div' : _props$htmlTag,
      fullWidth = props.fullWidth,
      fullHeight = props.fullHeight,
      noShrink = props.noShrink,
      flexWrap = props.flexWrap,
      flexDirection = props.flexDirection,
      flexGrow = props.flexGrow,
      inlineFlex = props.inlineFlex,
      justifyContent = props.justifyContent,
      justifyItems = props.justifyItems,
      justifySelf = props.justifySelf,
      alignItems = props.alignItems,
      alignSelf = props.alignSelf,
      margin = props.margin,
      marginTop = props.marginTop,
      marginRight = props.marginRight,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      padding = props.padding,
      paddingTop = props.paddingTop,
      paddingRight = props.paddingRight,
      paddingBottom = props.paddingBottom,
      paddingLeft = props.paddingLeft,
      className = props.className,
      children = props.children,
      testId = props.testId,
      style = props.style,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["htmlTag", "fullWidth", "fullHeight", "noShrink", "flexWrap", "flexDirection", "flexGrow", "inlineFlex", "justifyContent", "justifyItems", "justifySelf", "alignItems", "alignSelf", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "className", "children", "testId", "style"]);
  var fullMargins = {
    margin: margin && handleSpacing(margin)
  };
  var sidesMargins = {
    marginTop: marginTop && handleSpacing(marginTop),
    marginRight: marginRight && handleSpacing(marginRight),
    marginBottom: marginBottom && handleSpacing(marginBottom),
    marginLeft: marginLeft && handleSpacing(marginLeft)
  };
  var fullPaddings = {
    padding: padding && handleSpacing(padding)
  };
  var sidesPaddings = {
    paddingTop: paddingTop && handleSpacing(paddingTop),
    paddingRight: paddingRight && handleSpacing(paddingRight),
    paddingBottom: paddingBottom && handleSpacing(paddingBottom),
    paddingLeft: paddingLeft && handleSpacing(paddingLeft)
  };
  var marginResult = margin ? fullMargins : sidesMargins;
  var paddingsResult = padding ? fullPaddings : sidesPaddings;
  var inlineStyle = {
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    justifyItems: justifyItems,
    justifySelf: justifySelf,
    alignItems: alignItems,
    alignSelf: alignSelf,
    flexWrap: flexWrap,
    flexGrow: flexGrow
  };
  var classNames = (0, _classnames["default"])(styles.Flex, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles.Flex__inline, inlineFlex), (0, _defineProperty2["default"])(_cn, styles.Flex__fullWidth, fullWidth), (0, _defineProperty2["default"])(_cn, styles.Flex__fullHight, fullHeight), (0, _defineProperty2["default"])(_cn, styles.Flex__noShrink, noShrink), _cn));
  return /*#__PURE__*/_react["default"].createElement(Container, (0, _extends2["default"])({}, otherProps, {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, inlineStyle), marginResult), paddingsResult), style),
    className: classNames,
    "data-test-id": testId
  }), children);
};

exports.Flex = Flex;
Flex.displayName = "Flex";
Flex.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  htmlTag: _propTypes["default"].any,
  fullWidth: _propTypes["default"].bool,
  fullHeight: _propTypes["default"].bool,
  inlineFlex: _propTypes["default"].bool,
  noShrink: _propTypes["default"].bool,
  flexWrap: _propTypes["default"].any,
  flexDirection: _propTypes["default"].any,
  flexGrow: _propTypes["default"].any,
  justifyContent: _propTypes["default"].any,
  justifyItems: _propTypes["default"].any,
  justifySelf: _propTypes["default"].any,
  alignItems: _propTypes["default"].any,
  alignSelf: _propTypes["default"].any,
  margin: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  marginTop: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  marginRight: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  marginBottom: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  marginLeft: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  padding: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  paddingTop: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  paddingRight: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  paddingBottom: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl'])
};
Flex.defaultProps = defaultProps;
var _default = Flex;
exports["default"] = _default;