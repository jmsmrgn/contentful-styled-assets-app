"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AccordionItem = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _useId = _interopRequireDefault(require("../../../utils/useId"));

var _AccordionHeader = _interopRequireDefault(require("../AccordionHeader"));

var _AccordionPanel = _interopRequireDefault(require("../AccordionPanel"));

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
  title: 'Accordion Title',
  testId: 'cf-ui-accordion-item',
  titleElement: 'h2'
};

var AccordionItem = function AccordionItem(_ref) {
  var title = _ref.title,
      titleElement = _ref.titleElement,
      testId = _ref.testId,
      onExpand = _ref.onExpand,
      onCollapse = _ref.onCollapse,
      children = _ref.children;
  var id = (0, _useId["default"])();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var onClick = function onClick() {
    if (!isExpanded && onExpand) {
      onExpand();
    }

    if (isExpanded && onCollapse) {
      onCollapse();
    }

    setIsExpanded(!isExpanded);
  };

  return /*#__PURE__*/_react["default"].createElement("li", {
    className: styles.AccordionItem,
    "data-test-id": "".concat(testId, "-").concat(id)
  }, /*#__PURE__*/_react["default"].createElement(_AccordionHeader["default"], {
    handleClick: onClick,
    isExpanded: isExpanded,
    element: titleElement,
    ariaId: id
  }, title), /*#__PURE__*/_react["default"].createElement(_AccordionPanel["default"], {
    ariaId: id,
    isExpanded: isExpanded
  }, children));
};

exports.AccordionItem = AccordionItem;
AccordionItem.displayName = "AccordionItem";
AccordionItem.propTypes = {
  title: _propTypes["default"].node.isRequired,
  titleElement: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  onExpand: _propTypes["default"].any,
  onCollapse: _propTypes["default"].any
};
AccordionItem.defaultProps = defaultProps;
var _default = AccordionItem;
exports["default"] = _default;