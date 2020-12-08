"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonBodyText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var defaultProps = {
  numberOfLines: 2,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 16,
  marginBottom: 8
};

var SkeletonBodyText = function SkeletonBodyText(_ref) {
  var numberOfLines = _ref.numberOfLines,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["numberOfLines"]);
  return /*#__PURE__*/_react["default"].createElement(_SkeletonText["default"], (0, _extends2["default"])({
    numberOfLines: numberOfLines > 0 // eslint-disable-line @typescript-eslint/no-non-null-assertion
    ? numberOfLines : 1
  }, otherProps));
};

exports.SkeletonBodyText = SkeletonBodyText;
SkeletonBodyText.displayName = "SkeletonBodyText";
SkeletonBodyText.defaultProps = defaultProps;
var _default = SkeletonBodyText;
exports["default"] = _default;