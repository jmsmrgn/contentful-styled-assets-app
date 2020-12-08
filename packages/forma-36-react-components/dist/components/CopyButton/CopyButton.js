"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CopyButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Tooltip = require("../Tooltip");

var _TabFocusTrap = _interopRequireDefault(require("../TabFocusTrap"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "CopyButton": "CopyButton__CopyButton___OoA5D",
  "CopyButton__button": "CopyButton__CopyButton__button___52Bc0 a11y__focus-outline--default___2hwb1",
  "CopyButton__text": "CopyButton__CopyButton__text___269PQ helpers__sr-only___3Kv3z",
  "CopyButton__TabFocusTrap": "CopyButton__CopyButton__TabFocusTrap___1Q_DQ"
};
var defaultProps = {
  testId: 'cf-ui-copy-button',
  tooltipText: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Copy to ", /*#__PURE__*/_react["default"].createElement("br", null), " clipboard"),
  tooltipCopiedText: 'Copied!'
};

var CopyButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CopyButton, _Component);

  var _super = _createSuper(CopyButton);

  function CopyButton() {
    var _this;

    (0, _classCallCheck2["default"])(this, CopyButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      copied: false
    };
    _this.copyButton = null;
    _this.tooltipAnchor = null;

    _this.onCopy = function (e) {
      if (_this.props.onCopy) {
        _this.props.onCopy(e);
      }

      _this.setState({
        copied: true
      });

      setTimeout(function () {
        _this.setState({
          copied: false
        });

        if (_this.copyButton) {
          _this.copyButton.blur();
        }
      }, 1000);
    };

    return _this;
  }

  (0, _createClass2["default"])(CopyButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          copyValue = _this$props.copyValue,
          className = _this$props.className,
          testId = _this$props.testId,
          onCopy = _this$props.onCopy,
          tooltipPlace = _this$props.tooltipPlace,
          tooltipText = _this$props.tooltipText,
          tooltipCopiedText = _this$props.tooltipCopiedText,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["copyValue", "className", "testId", "onCopy", "tooltipPlace", "tooltipText", "tooltipCopiedText"]);
      var classNames = (0, _classnames["default"])(styles['CopyButton'], className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        ref: function ref(_ref2) {
          _this2.tooltipAnchor = _ref2;
        },
        className: classNames,
        id: "copyButton",
        "data-test-id": testId
      }, otherProps), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
        text: copyValue || '',
        onCopy: this.onCopy
      }, /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
        place: tooltipPlace,
        content: this.state.copied ? tooltipCopiedText : /*#__PURE__*/_react["default"].createElement("span", null, tooltipText)
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        ref: function ref(_ref) {
          _this2.copyButton = _ref;
        },
        className: styles['CopyButton__button']
      }, /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['CopyButton__TabFocusTrap']
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['CopyButton__text']
      }, "Copy ", copyValue, " to clipboard"), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "Copy",
        color: "muted"
      }))))));
    }
  }]);
  return CopyButton;
}(_react.Component);

exports.CopyButton = CopyButton;
CopyButton.displayName = "CopyButton";
CopyButton.propTypes = {
  copyValue: _propTypes["default"].string,
  onCopy: _propTypes["default"].func,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  tooltipPlace: _propTypes["default"].any,
  tooltipText: _propTypes["default"].node,
  tooltipCopiedText: _propTypes["default"].node
};
CopyButton.defaultProps = defaultProps;
var _default = CopyButton;
exports["default"] = _default;