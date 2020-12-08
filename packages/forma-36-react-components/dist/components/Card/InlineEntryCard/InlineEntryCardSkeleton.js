"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SkeletonContainer = _interopRequireDefault(require("../../Skeleton/SkeletonContainer"));

var _SkeletonBodyText = _interopRequireDefault(require("../../Skeleton/SkeletonBodyText"));

var EntryCardSkeleton = function EntryCardSkeleton() {
  return /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    width: "100%",
    clipId: "f36-inline-entry-card-skeleton",
    svgHeight: 16
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 1
  }));
};

EntryCardSkeleton.displayName = "EntryCardSkeleton";
var _default = EntryCardSkeleton;
exports["default"] = _default;