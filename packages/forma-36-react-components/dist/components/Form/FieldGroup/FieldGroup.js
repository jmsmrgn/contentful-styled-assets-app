"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FieldGroup = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "FieldGroup": "FieldGroup__FieldGroup___2mLmO",
  "FieldGroup__item": "FieldGroup__FieldGroup__item___2qkC3",
  "FieldGroup--row": "FieldGroup__FieldGroup--row___17yyV"
};
var defaultProps = {
  row: false,
  testId: 'cf-ui-field-group'
};

var FieldGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FieldGroup, _Component);

  var _super = _createSuper(FieldGroup);

  function FieldGroup() {
    (0, _classCallCheck2["default"])(this, FieldGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FieldGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          row = _this$props.row,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "row", "testId"]);
      var classNames = (0, _classnames["default"])(styles.FieldGroup, className, (0, _defineProperty2["default"])({}, styles['FieldGroup--row'], row));
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
        "data-test-id": testId,
        className: classNames
      }), _react["default"].Children.map(children, function (child) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: styles.FieldGroup__item
        }, child);
      }));
    }
  }]);
  return FieldGroup;
}(_react.Component);

exports.FieldGroup = FieldGroup;
FieldGroup.displayName = "FieldGroup";
FieldGroup.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  style: _propTypes["default"].any,
  testId: _propTypes["default"].string,
  row: _propTypes["default"].bool
};
FieldGroup.defaultProps = defaultProps;
var _default = FieldGroup;
exports["default"] = _default;