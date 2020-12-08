"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var dateUtils = _interopRequireWildcard(require("./dateUtils"));

// NOTE: all times will be "localized" to the TZ in test/config/globalSetup.js
describe('formatAbsoluteDateTime', function () {
  it('formats with the expected values', function () {
    var dateToExpected = [['2020-02-29T09:31:46.345Z', '29 Feb 2020 at 1:31 am'], ['2020-04-22T07:00:01.000Z', '22 Apr 2020 at 12:00 am'], ['2021-01-01T07:59:56.999Z', '31 Dec 2020 at 11:59 pm']];
    dateToExpected.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          str = _ref2[0],
          expected = _ref2[1];

      var date = new Date(str);
      expect(dateUtils.formatDateTime(date)).toEqual(expected);
    });
  });
});
describe('formatWeekdayDate', function () {
  it('formats with the expected values', function () {
    var dateToExpected = [['2020-08-12T23:45:00.000Z', 'Wed, 12 Aug']];
    dateToExpected.forEach(function (_ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          str = _ref4[0],
          expected = _ref4[1];

      var date = new Date(str);
      expect(dateUtils.formatWeekdayDate(date)).toEqual(expected);
    });
  });
});
describe('formatRelativeDateTime', function () {
  it('formats with the expected values', function () {
    var baseDate = new Date('2020-04-15T17:00:00.000Z');
    var dateToExpected = [[(0, _dayjs["default"])(baseDate).subtract(25, 'second'), 'a few seconds ago'], [(0, _dayjs["default"])(baseDate).subtract(25, 'minute'), '25 minutes ago'], [(0, _dayjs["default"])(baseDate).subtract(60, 'minute'), 'an hour ago'], [(0, _dayjs["default"])(baseDate).subtract(1, 'day'), 'a day ago'], [(0, _dayjs["default"])(baseDate).subtract(13, 'day'), '13 days ago'], [(0, _dayjs["default"])(baseDate).subtract(3, 'month'), '3 months ago'], [(0, _dayjs["default"])(baseDate).subtract(12, 'month'), 'a year ago'], [(0, _dayjs["default"])(baseDate).subtract(2, 'year'), '2 years ago'], [(0, _dayjs["default"])(baseDate).add(25, 'second'), 'in a few seconds'], [(0, _dayjs["default"])(baseDate).add(25, 'minute'), 'in 25 minutes'], [(0, _dayjs["default"])(baseDate).add(60, 'minute'), 'in an hour'], [(0, _dayjs["default"])(baseDate).add(1, 'day'), 'in a day'], [(0, _dayjs["default"])(baseDate).add(13, 'day'), 'in 13 days'], [(0, _dayjs["default"])(baseDate).add(3, 'month'), 'in 3 months'], [(0, _dayjs["default"])(baseDate).add(12, 'month'), 'in a year'], [(0, _dayjs["default"])(baseDate).add(2, 'year'), 'in 2 years']];
    dateToExpected.forEach(function (_ref5) {
      var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
          date = _ref6[0],
          expected = _ref6[1];

      expect(dateUtils.formatRelativeDateTime(date.toDate(), baseDate)).toEqual(expected);
    });
  });
});