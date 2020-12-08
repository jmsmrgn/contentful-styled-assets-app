"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cssStyles = {
  "DropdownList": "DropdownList__DropdownList___2EMLM",
  "DropdownList--border-top": "DropdownList__DropdownList--border-top___ojlyY",
  "DropdownList--border-bottom": "DropdownList__DropdownList--border-bottom___3F_82"
};

var DropdownList = function DropdownList(_ref) {
  var className = _ref.className,
      border = _ref.border,
      maxHeight = _ref.maxHeight,
      testId = _ref.testId,
      children = _ref.children,
      listRef = _ref.listRef,
      styles = _ref.styles,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "border", "maxHeight", "testId", "children", "listRef", "styles"]);
  var classNames = (0, _classnames["default"])(cssStyles['DropdownList'], className, (0, _defineProperty2["default"])({}, cssStyles["DropdownList--border-".concat(border)], border));
  return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
    ref: listRef,
    "data-test-id": testId,
    role: "menu",
    style: _objectSpread({
      maxHeight: maxHeight || 'auto',
      overflowY: maxHeight ? 'auto' : 'visible'
    }, styles),
    className: classNames
  }, otherProps), children);
};

exports.DropdownList = DropdownList;
DropdownList.displayName = "DropdownList";
DropdownList.propTypes = {
  children: _propTypes["default"].node.isRequired,
  listRef: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  border: _propTypes["default"].oneOf(['top', 'bottom']),
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  styles: _propTypes["default"].object
};
DropdownList.defaultProps = {
  testId: 'cf-ui-dropdown-list'
};
var _default = DropdownList;
exports["default"] = _default;