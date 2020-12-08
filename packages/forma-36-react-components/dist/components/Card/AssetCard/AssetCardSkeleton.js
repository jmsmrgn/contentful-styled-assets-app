"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SkeletonContainer = _interopRequireDefault(require("../../Skeleton/SkeletonContainer"));

var _SkeletonBodyText = _interopRequireDefault(require("../../Skeleton/SkeletonBodyText"));

var _SkeletonImage = _interopRequireDefault(require("../../Skeleton/SkeletonImage"));

var AssetCardSkeleton = function AssetCardSkeleton(props) {
  return /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    svgWidth: props.size === 'small' ? 150 : 240,
    clipId: "f36-asset-card-skeleton"
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonImage["default"], {
    offsetLeft: props.size === 'small' ? 40 : 85,
    offsetTop: props.size === 'small' ? 50 : 100
  }), /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    offsetLeft: props.size === 'small' ? 25 : 70,
    offsetTop: props.size === 'small' ? 140 : 190,
    numberOfLines: 1,
    width: 100
  }));
};

AssetCardSkeleton.displayName = "AssetCardSkeleton";
AssetCardSkeleton.propTypes = {
  size: _propTypes["default"].oneOf(['small', 'default'])
};
var _default = AssetCardSkeleton;
exports["default"] = _default;