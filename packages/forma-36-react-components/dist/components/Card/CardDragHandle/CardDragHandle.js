"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CardDragHandle = void 0;

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

var _Icon = _interopRequireDefault(require("../../Icon"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "CardDragHandle": "CardDragHandle__CardDragHandle___2rqnO",
  "CardDragHandle--drag-active": "CardDragHandle__CardDragHandle--drag-active___2e8vp",
  "CardDragHandle__sr-label": "CardDragHandle__CardDragHandle__sr-label___3CueY helpers__sr-only___3Kv3z"
};
var defaultProps = {
  testId: 'cf-ui-card-drag-handle',
  isDragActive: false
};

var CardDragHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CardDragHandle, _Component);

  var _super = _createSuper(CardDragHandle);

  function CardDragHandle() {
    (0, _classCallCheck2["default"])(this, CardDragHandle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CardDragHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          testId = _this$props.testId,
          children = _this$props.children,
          isDragActive = _this$props.isDragActive,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "testId", "children", "isDragActive"]);
      var classNames = (0, _classnames["default"])(styles.CardDragHandle, (0, _defineProperty2["default"])({}, styles['CardDragHandle--drag-active'], isDragActive), className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "Drag",
        color: "muted"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['CardDragHandle__sr-label']
      }, children));
    }
  }]);
  return CardDragHandle;
}(_react.Component);

exports.CardDragHandle = CardDragHandle;
CardDragHandle.displayName = "CardDragHandle";
CardDragHandle.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  isDragActive: _propTypes["default"].bool
};
CardDragHandle.defaultProps = defaultProps;
var _default = CardDragHandle;
exports["default"] = _default;