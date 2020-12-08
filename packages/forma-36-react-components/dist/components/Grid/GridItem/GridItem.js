"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GridItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var GridItem = function GridItem(props) {
  var children = props.children,
      className = props.className,
      columnStart = props.columnStart,
      columnEnd = props.columnEnd,
      rowStart = props.rowStart,
      rowEnd = props.rowEnd,
      area = props.area,
      order = props.order,
      _props$htmlTag = props.htmlTag,
      Container = _props$htmlTag === void 0 ? 'div' : _props$htmlTag,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className", "columnStart", "columnEnd", "rowStart", "rowEnd", "area", "order", "htmlTag"]);
  var calculatedArea = area ? area : [rowStart || 'auto', columnStart || 'auto', rowEnd || 'auto', columnEnd || 'auto'].join(' / ');

  var style = _objectSpread({
    gridArea: calculatedArea,
    order: order
  }, props.style);

  return /*#__PURE__*/_react["default"].createElement(Container, (0, _extends2["default"])({}, otherProps, {
    className: className,
    style: style
  }), children);
};

exports.GridItem = GridItem;
GridItem.displayName = "GridItem";
GridItem.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  columnStart: _propTypes["default"].any,
  columnEnd: _propTypes["default"].any,
  rowStart: _propTypes["default"].any,
  rowEnd: _propTypes["default"].any,
  area: _propTypes["default"].any,
  order: _propTypes["default"].number,
  style: _propTypes["default"].any,
  htmlTag: _propTypes["default"].any
};
var _default = GridItem;
exports["default"] = _default;