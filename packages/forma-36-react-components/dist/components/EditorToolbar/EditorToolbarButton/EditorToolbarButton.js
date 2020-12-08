"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EditorToolbarButton = void 0;

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

var _IconButton = _interopRequireDefault(require("../../IconButton"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "EditorToolbarButton": "EditorToolbarButton__EditorToolbarButton___2t--R",
  "EditorToolbarButton--is-active": "EditorToolbarButton__EditorToolbarButton--is-active___12pD0"
};
var defaultProps = {
  testId: 'cf-ui-editor-toolbar-button',
  isActive: false,
  disabled: false,
  withDropdown: false
};

var EditorToolbarButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorToolbarButton, _Component);

  var _super = _createSuper(EditorToolbarButton);

  function EditorToolbarButton() {
    (0, _classCallCheck2["default"])(this, EditorToolbarButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EditorToolbarButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          testId = _this$props.testId,
          icon = _this$props.icon,
          tooltip = _this$props.tooltip,
          iconButtonProps = _this$props.iconButtonProps,
          isActive = _this$props.isActive,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          withDropdown = _this$props.withDropdown,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "label", "testId", "icon", "tooltip", "iconButtonProps", "isActive", "disabled", "onClick", "withDropdown"]);
      var classNames = (0, _classnames["default"])(styles['EditorToolbarButton'], className, (0, _defineProperty2["default"])({}, styles['EditorToolbarButton--is-active'], isActive));
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        content: !disabled ? tooltip : undefined
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], (0, _extends2["default"])({
        iconProps: {
          icon: icon
        }
      }, {
        testId: testId,
        buttonType: "secondary",
        label: label,
        className: classNames,
        onClick: !disabled ? onClick : function () {},
        disabled: disabled,
        withDropdown: withDropdown
      }, iconButtonProps, otherProps))));
    }
  }]);
  return EditorToolbarButton;
}(_react.Component);

exports.EditorToolbarButton = EditorToolbarButton;
EditorToolbarButton.displayName = "EditorToolbarButton";
EditorToolbarButton.propTypes = {
  label: _propTypes["default"].string.isRequired,
  icon: _propTypes["default"].any.isRequired,
  tooltip: _propTypes["default"].string,
  iconButtonProps: _propTypes["default"].any,
  isActive: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  withDropdown: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
EditorToolbarButton.defaultProps = defaultProps;
var _default = EditorToolbarButton;
exports["default"] = _default;