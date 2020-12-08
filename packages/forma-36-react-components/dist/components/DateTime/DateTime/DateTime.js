"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DateTime = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _dateUtils = require("../dateUtils");

/**
 * Formats a JS Date object to an absolute date and time inside of a <time /> tag
 */
var DateTime = function DateTime(_ref) {
  var date = _ref.date,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'FULL' : _ref$format,
      className = _ref.className,
      testId = _ref.testId;

  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }

  var formatted = (0, _dateUtils.formatDateTime)(date, format);
  return /*#__PURE__*/_react["default"].createElement("time", {
    dateTime: date.toISOString(),
    className: className,
    "data-test-id": testId
  }, formatted);
};

exports.DateTime = DateTime;
DateTime.displayName = "DateTime";
DateTime.propTypes = {
  date: _propTypes["default"].any.isRequired,
  format: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
var _default = DateTime;
exports["default"] = _default;