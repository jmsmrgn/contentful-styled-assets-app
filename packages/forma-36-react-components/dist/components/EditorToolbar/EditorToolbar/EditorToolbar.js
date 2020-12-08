"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EditorToolbar = void 0;

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
  "EditorToolbar": "EditorToolbar__EditorToolbar___1zyWM"
};
var defaultProps = {
  testId: 'cf-ui-editor-toolbar'
};

var EditorToolbar = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorToolbar, _Component);

  var _super = _createSuper(EditorToolbar);

  function EditorToolbar() {
    (0, _classCallCheck2["default"])(this, EditorToolbar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EditorToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId"]);
      var classNames = (0, _classnames["default"])(styles['EditorToolbar'], className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames
      }, otherProps, {
        "data-test-id": testId
      }), children);
    }
  }]);
  return EditorToolbar;
}(_react.Component);

exports.EditorToolbar = EditorToolbar;
EditorToolbar.displayName = "EditorToolbar";
EditorToolbar.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any
};
EditorToolbar.defaultProps = defaultProps;
var _default = EditorToolbar;
exports["default"] = _default;