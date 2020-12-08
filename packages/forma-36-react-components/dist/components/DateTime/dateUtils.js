"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRelativeDateTime = exports.formatWeekdayDate = exports.formatTime = exports.formatDate = exports.formatDateTime = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

_dayjs["default"].extend(_relativeTime["default"]);

var formatTokens = {
  FULL: 'D MMM YYYY[ at ]h:mm a',
  DATE_ONLY: 'D MMM YYYY',
  TIME_ONLY: 'h:mm a',
  WEEKDAY_DATE: 'ddd[, ]D MMM'
};

/**
 * @example
 * > formatDateTime(date)
 * 13 Aug 2019 at 10:00 am
 *
 * @example
 * > formatDateTime(date, 'DATE_ONLY')
 * 13 Aug 2019
 */
var formatDateTime = function formatDateTime(date) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FULL';

  if (!formatTokens[token]) {
    throw new TypeError("Unknown date format '".concat(token, "'"));
  }

  return (0, _dayjs["default"])(date).format(formatTokens[token]);
};
/**
 * @example
 * > formatDate(date)
 * 13 Aug 2019
 */


exports.formatDateTime = formatDateTime;

var formatDate = function formatDate(date) {
  return formatDateTime(date, 'DATE_ONLY');
};
/**
 * @example
 * > formatTime(date)
 * 8:00 am
 */


exports.formatDate = formatDate;

var formatTime = function formatTime(date) {
  return formatDateTime(date, 'TIME_ONLY');
};
/**
 * @example
 * > formatWeekdayDate(date)
 * Mon, 12 Aug
 */


exports.formatTime = formatTime;

var formatWeekdayDate = function formatWeekdayDate(date) {
  return formatDateTime(date, 'WEEKDAY_DATE');
};

exports.formatWeekdayDate = formatWeekdayDate;

var formatRelativeDateTime = function formatRelativeDateTime(date) {
  var baseDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _dayjs["default"])(date).from(baseDate);
};

exports.formatRelativeDateTime = formatRelativeDateTime;