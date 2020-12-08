"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EntityList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var styles = {
  "EntityList": "EntityList__EntityList___foLpo"
};
var EntityList = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      children = props.children,
      testId = props.testId,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["className", "children", "testId"]);
  var classNames = (0, _classnames["default"])(styles.EntityList, className);
  return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
    ref: ref,
    className: classNames,
    "data-test-id": testId
  }, otherProps), children);
});
exports.EntityList = EntityList;
EntityList.displayName = 'EntityList';
EntityList.defaultProps = {
  testId: 'cf-ui-entity-list'
};
var _default = EntityList;
exports["default"] = _default;