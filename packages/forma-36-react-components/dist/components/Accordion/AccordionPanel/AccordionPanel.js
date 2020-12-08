"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AccordionPanel = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _forma36Tokens = _interopRequireDefault(require("@contentful/forma-36-tokens"));

var styles = {
  "AccordionPanel": "AccordionPanel__AccordionPanel___V6i9q",
  "AccordionPanel--expanded": "AccordionPanel__AccordionPanel--expanded___3oPtd"
};

var AccordionPanel = function AccordionPanel(_ref) {
  var children = _ref.children,
      isExpanded = _ref.isExpanded,
      ariaId = _ref.ariaId;
  var panelEl = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    var current = panelEl.current;

    if (current) {
      // height + padding-top + padding-bottom of the accordion’s panel final state
      // we need this math because the height will depend on the accordion’s content
      var panelHeight = "".concat(current.scrollHeight / 16, "rem"); // converting height pixels into rem

      var finalHeight = "calc(".concat(panelHeight, " + ").concat(_forma36Tokens["default"].spacingXs, " + ").concat(_forma36Tokens["default"].spacingM, ")");

      if (isExpanded) {
        requestAnimationFrame(function () {
          current.style.height = '0px';
          requestAnimationFrame(function () {
            current.style.height = finalHeight;
          });
        });
      } else {
        requestAnimationFrame(function () {
          current.style.height = '0px';
        });
      }
    }
  }, [isExpanded]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "accordion-panel--".concat(ariaId),
    role: "region",
    "aria-labelledby": "accordion--".concat(ariaId),
    "aria-hidden": !isExpanded,
    className: (0, _classnames["default"])(styles.AccordionPanel, (0, _defineProperty2["default"])({}, styles['AccordionPanel--expanded'], isExpanded)),
    ref: panelEl
  }, children);
};

exports.AccordionPanel = AccordionPanel;
AccordionPanel.displayName = "AccordionPanel";
AccordionPanel.propTypes = {
  children: _propTypes["default"].node,
  isExpanded: _propTypes["default"].bool,
  ariaId: _propTypes["default"].number.isRequired
};
AccordionPanel.defaultProps = {
  isExpanded: false
};
var _default = AccordionPanel;
exports["default"] = _default;