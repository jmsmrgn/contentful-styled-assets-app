"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Accordion = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var styles = {
  "Accordion": "Accordion__Accordion___2vsT6",
  "AccordionItem": "Accordion__AccordionItem___11w9U",
  "Accordion--start": "Accordion__Accordion--start___2hNCQ",
  "AccordionHeader": "Accordion__AccordionHeader___3k1Uh",
  "Accordion--end": "Accordion__Accordion--end___1WaCd",
  "AccordionHeader--expanded": "Accordion__AccordionHeader--expanded___Zmyij",
  "AccordionHeader__icon": "Accordion__AccordionHeader__icon___1pUm4"
};
var defaultProps = {
  align: 'end',
  testId: 'cf-ui-accordion'
};

var Accordion = function Accordion(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      testId = _ref.testId,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["align", "children", "className", "testId"]);
  var classNames = (0, _classnames["default"])(styles.Accordion, className, (0, _defineProperty2["default"])({}, styles["Accordion--".concat(align)], align));
  return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
    className: classNames,
    "data-test-id": testId
  }, otherProps), children);
};

exports.Accordion = Accordion;
Accordion.displayName = "Accordion";
Accordion.propTypes = {
  align: _propTypes["default"].oneOf(['start', 'end']),
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string
};
Accordion.defaultProps = defaultProps;
var _default = Accordion;
exports["default"] = _default;