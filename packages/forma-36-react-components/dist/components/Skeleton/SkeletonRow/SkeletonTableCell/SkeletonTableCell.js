"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonTableCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableCell = _interopRequireDefault(require("../../../Table/TableCell"));

var _SkeletonContainer = _interopRequireDefault(require("../../SkeletonContainer"));

var _SkeletonBodyText = _interopRequireDefault(require("../../SkeletonBodyText"));

var SkeletonTableCell = function SkeletonTableCell() {
  return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    svgHeight: 16 // This is equal to the default height of a SkeletonText line, if no value is passed the svg will be bigger than the line

  }, /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 1
  })));
};

exports.SkeletonTableCell = SkeletonTableCell;
SkeletonTableCell.displayName = "SkeletonTableCell";
var _default = SkeletonTableCell;
exports["default"] = _default;