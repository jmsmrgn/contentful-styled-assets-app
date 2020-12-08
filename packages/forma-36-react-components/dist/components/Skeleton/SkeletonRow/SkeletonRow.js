"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonRow = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TableRow = _interopRequireDefault(require("../../Table/TableRow"));

var _SkeletonTableCell = _interopRequireDefault(require("./SkeletonTableCell/SkeletonTableCell"));

var defaultProps = {
  rowCount: 1,
  columnCount: 5
};

var SkeletonRow = function SkeletonRow(_ref) {
  var rowCount = _ref.rowCount,
      columnCount = _ref.columnCount;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Array.from(Array(rowCount)).map(function (_, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: rowIndex
    }, Array.from(Array(columnCount)).map(function (_, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement(_SkeletonTableCell["default"], {
        key: cellIndex
      });
    }));
  }));
};

exports.SkeletonRow = SkeletonRow;
SkeletonRow.propTypes = {
  rowCount: _propTypes["default"].number,
  columnCount: _propTypes["default"].number
};
SkeletonRow.defaultProps = defaultProps;
var _default = SkeletonRow;
exports["default"] = _default;