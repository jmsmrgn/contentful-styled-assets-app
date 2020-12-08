"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SkeletonContainer = _interopRequireDefault(require("../../Skeleton/SkeletonContainer"));

var _SkeletonDisplayText = _interopRequireDefault(require("../../Skeleton/SkeletonDisplayText"));

var _SkeletonBodyText = _interopRequireDefault(require("../../Skeleton/SkeletonBodyText"));

var EntryCardSkeleton = function EntryCardSkeleton() {
  return /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    width: "100%",
    clipId: "f36-entry-card-skeleton"
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonDisplayText["default"], {
    numberOfLines: 1,
    offsetTop: 2.5
  }), /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 3,
    offsetTop: 37.5
  }));
};

EntryCardSkeleton.displayName = "EntryCardSkeleton";
var _default = EntryCardSkeleton;
exports["default"] = _default;