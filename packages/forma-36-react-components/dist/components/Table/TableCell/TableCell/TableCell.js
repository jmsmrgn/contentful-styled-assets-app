"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableCell = exports.sortingDirections = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableCellContext = require("./TableCellContext");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TableCell": "TableCell__TableCell___Wou8a",
  "TableCell--head": "TableCell__TableCell--head___1HhvZ",
  "TableCell--head__sorting": "TableCell__TableCell--head__sorting____Jc1k"
};
var sortingDirections = {
  asc: 'asc',
  desc: 'desc'
};
exports.sortingDirections = sortingDirections;
var defaultProps = {
  align: 'left',
  sorting: false,
  testId: 'cf-ui-table-cell'
};

var TableCell = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TableCell, _Component);

  var _super = _createSuper(TableCell);

  function TableCell() {
    (0, _classCallCheck2["default"])(this, TableCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          sorting = _this$props.sorting,
          align = _this$props.align,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "sorting", "align", "testId"]);
      return /*#__PURE__*/_react["default"].createElement(_TableCellContext.TableCellContext.Consumer, null, function (_ref) {
        var _cn;

        var context = _ref.name,
            element = _ref.element,
            offsetTop = _ref.offsetTop;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var Element = element;
        return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
          className: (0, _classnames["default"])(styles['TableCell'], className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['TableCell--head'], context === 'head'), (0, _defineProperty2["default"])(_cn, styles['TableCell--head__sorting'], sorting), _cn)),
          style: {
            top: offsetTop
          },
          align: align,
          "data-test-id": testId
        }, otherProps), children);
      });
    }
  }]);
  return TableCell;
}(_react.Component);

exports.TableCell = TableCell;
TableCell.displayName = "TableCell";
TableCell.propTypes = {
  align: _propTypes["default"].oneOf(['center', 'left', 'right']),
  sorting: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].bool]),
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node
};
TableCell.defaultProps = defaultProps;
var _default = TableCell;
exports["default"] = _default;