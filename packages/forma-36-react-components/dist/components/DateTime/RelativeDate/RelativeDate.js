"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RelativeDate = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dateUtils = require("../dateUtils");

/**
 * Expresses a historical or upcoming date as a relative date/date time
 *
 * Forma36 usage guidelines: https://f36.contentful.com/guidelines/date-and-time/
 */
var RelativeDate = function RelativeDate(_ref) {
  var date = _ref.date,
      testId = _ref.testId,
      className = _ref.className,
      baseDate = _ref.baseDate;

  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }

  var _useState = (0, _react.useState)((0, _dateUtils.formatRelativeDateTime)(date, baseDate)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      relativeTime = _useState2[0],
      setRelativeTime = _useState2[1];

  var absoluteTime = (0, _dateUtils.formatDateTime)(date);
  (0, _react.useEffect)(function () {
    if (baseDate) {
      // No need to trigger a re-render if we are doing a static comparison
      return;
    }

    var intervalId = setInterval(function () {
      setRelativeTime((0, _dateUtils.formatRelativeDateTime)(date, baseDate));
    }, 1000);
    return function cleanup() {
      clearInterval(intervalId);
    };
  });
  return /*#__PURE__*/_react["default"].createElement("time", {
    className: className,
    dateTime: date.toISOString(),
    "data-test-id": testId,
    title: absoluteTime
  }, relativeTime);
};

exports.RelativeDate = RelativeDate;
RelativeDate.displayName = "RelativeDate";
RelativeDate.propTypes = {
  date: _propTypes["default"].any.isRequired,
  baseDate: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
var _default = RelativeDate;
exports["default"] = _default;