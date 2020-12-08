"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AccordionHeader = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Subheading = _interopRequireDefault(require("../../Typography/Subheading"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var styles = {
  "Accordion": "Accordion__Accordion___2vsT6",
  "AccordionItem": "Accordion__AccordionItem___11w9U",
  "Accordion--start": "Accordion__Accordion--start___2hNCQ",
  "AccordionHeader": "Accordion__AccordionHeader___3k1Uh",
  "Accordion--end": "Accordion__Accordion--end___1WaCd",
  "AccordionHeader--expanded": "Accordion__AccordionHeader--expanded___Zmyij",
  "AccordionHeader__icon": "Accordion__AccordionHeader__icon___1pUm4"
};

var AccordionHeader = function AccordionHeader(_ref) {
  var children = _ref.children,
      handleClick = _ref.handleClick,
      isExpanded = _ref.isExpanded,
      ariaId = _ref.ariaId,
      element = _ref.element;
  var classNames = (0, _classnames["default"])(styles.AccordionHeader, (0, _defineProperty2["default"])({}, styles['AccordionHeader--expanded'], isExpanded));
  return /*#__PURE__*/_react["default"].createElement(_Subheading["default"], {
    element: element
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-expanded": isExpanded,
    "aria-controls": "accordion-panel--".concat(ariaId),
    id: "accordion--".concat(ariaId),
    className: classNames,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "ChevronDownTrimmed",
    color: "secondary",
    className: styles.AccordionHeader__icon
  }), children));
};

exports.AccordionHeader = AccordionHeader;
AccordionHeader.displayName = "AccordionHeader";
AccordionHeader.propTypes = {
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  handleClick: _propTypes["default"].any.isRequired,
  isExpanded: _propTypes["default"].bool,
  ariaId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf([null])]),
  element: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
AccordionHeader.defaultProps = {
  isExpanded: false,
  element: 'h2'
};
var _default = AccordionHeader;
exports["default"] = _default;