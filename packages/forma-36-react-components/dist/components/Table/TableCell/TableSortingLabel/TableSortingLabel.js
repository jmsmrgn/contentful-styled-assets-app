"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableSortingLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _TabFocusTrap = _interopRequireDefault(require("../../../TabFocusTrap/TabFocusTrap"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TableSortingLabel__button": "TableSortingLabel__TableSortingLabel__button___olUoZ",
  "TableSortingLabel__button__text": "TableSortingLabel__TableSortingLabel__button__text___ak824",
  "TableSortingLabel__icon": "TableSortingLabel__TableSortingLabel__icon___1WJBG",
  "TableSortingLabel__icon--asc": "TableSortingLabel__TableSortingLabel__icon--asc___1Tn1Z",
  "TableSortingLabel__icon--desc": "TableSortingLabel__TableSortingLabel__icon--desc___28Knm"
};
var defaultProps = {
  testId: 'cf-ui-table-sorting-label'
};

var TableSortingLabel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TableSortingLabel, _Component);

  var _super = _createSuper(TableSortingLabel);

  function TableSortingLabel() {
    (0, _classCallCheck2["default"])(this, TableSortingLabel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TableSortingLabel, [{
    key: "renderIcon",
    value: function renderIcon() {
      var direction = this.props.direction;
      var classNames = (0, _classnames["default"])(styles['TableSortingLabel__icon'], styles["TableSortingLabel__icon--".concat(direction)]);
      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classNames,
        icon: "ArrowUp",
        color: "muted"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          active = _this$props.active,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "active", "testId"]);
      return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
        type: "button",
        className: (0, _classnames["default"])(styles['TableSortingLabel__button'], className),
        "data-test-id": testId
      }, otherProps), /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['TableSortingLabel__button__text']
      }, children, active && this.renderIcon()));
    }
  }]);
  return TableSortingLabel;
}(_react.Component);

exports.TableSortingLabel = TableSortingLabel;
TableSortingLabel.displayName = "TableSortingLabel";
TableSortingLabel.propTypes = {
  children: _propTypes["default"].node.isRequired,
  direction: _propTypes["default"].any.isRequired,
  active: _propTypes["default"].bool.isRequired,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
TableSortingLabel.defaultProps = defaultProps;
var _default = TableSortingLabel;
exports["default"] = _default;