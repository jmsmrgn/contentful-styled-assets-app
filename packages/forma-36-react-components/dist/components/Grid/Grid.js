"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Grid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _forma36Tokens = _interopRequireDefault(require("@contentful/forma-36-tokens"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  "Grid": "Grid__Grid___2_rpl",
  "Grid__inline": "Grid__Grid__inline___2QOe3"
};
var defaultProps = {
  columns: 'auto',
  rows: 'auto',
  columnGap: 'spacingM',
  rowGap: 'none',
  testId: 'cf-ui-grid'
};

var Grid = function Grid(props) {
  var className = props.className,
      children = props.children,
      testId = props.testId,
      rows = props.rows,
      columns = props.columns,
      inline = props.inline,
      rowGap = props.rowGap,
      columnGap = props.columnGap,
      justifyContent = props.justifyContent,
      alignContent = props.alignContent,
      flow = props.flow,
      style = props.style,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["className", "children", "testId", "rows", "columns", "inline", "rowGap", "columnGap", "justifyContent", "alignContent", "flow", "style"]);

  var handleGridTemplate = function handleGridTemplate(value) {
    if (typeof value === 'number') {
      return "repeat(".concat(value, ", minmax(0, 1fr)");
    }

    return value;
  };

  var handleGap = function handleGap(value) {
    if (value === 'none') {
      return 0;
    } else {
      return _forma36Tokens["default"][value];
    }
  };

  var inlineStyle = _objectSpread({
    gridTemplateColumns: handleGridTemplate(columns),
    gridTemplateRows: handleGridTemplate(rows),
    flow: flow,
    justifyContent: justifyContent,
    alignContent: alignContent,
    gridColumnGap: columnGap && handleGap(columnGap),
    gridRowGap: rowGap && handleGap(rowGap)
  }, style);

  var classNames = (0, _classnames["default"])(styles.Grid, className, (0, _defineProperty2["default"])({}, styles.Grid__inline, inline));
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
    style: inlineStyle,
    className: classNames,
    "data-test-id": testId
  }), children);
};

exports.Grid = Grid;
Grid.displayName = "Grid";
Grid.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  columns: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  rows: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  rowGap: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  columnGap: _propTypes["default"].oneOf(['none', 'spacing2xs', 'spacingXs', 'spacingS', 'spacingM', 'spacingL', 'spacingXl', 'spacing2Xl', 'spacing3Xl', 'spacing4Xl']),
  flow: _propTypes["default"].any,
  inline: _propTypes["default"].bool,
  justifyContent: _propTypes["default"].any,
  alignContent: _propTypes["default"].any,
  style: _propTypes["default"].any
};
Grid.defaultProps = defaultProps;
var _default = Grid;
exports["default"] = _default;