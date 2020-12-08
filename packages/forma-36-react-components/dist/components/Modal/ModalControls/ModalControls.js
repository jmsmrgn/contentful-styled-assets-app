"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalControls = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ModalControls": "ModalControls__ModalControls___2bTQx"
};
var defaultProps = {
  testId: 'cf-ui-modal-controls'
};

var ModalControls = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalControls, _Component);

  var _super = _createSuper(ModalControls);

  function ModalControls() {
    (0, _classCallCheck2["default"])(this, ModalControls);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          testId = _this$props.testId,
          className = _this$props.className,
          children = _this$props.children,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["testId", "className", "children"]);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, rest, {
        className: (0, _classnames["default"])(styles.ModalControls, className),
        "data-test-id": testId
      }), children);
    }
  }]);
  return ModalControls;
}(_react.Component);

exports.ModalControls = ModalControls;
ModalControls.displayName = "ModalControls";
ModalControls.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  style: _propTypes["default"].any
};
ModalControls.defaultProps = defaultProps;
var _default = ModalControls;
exports["default"] = _default;