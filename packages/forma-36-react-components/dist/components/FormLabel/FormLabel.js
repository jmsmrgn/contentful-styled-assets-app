"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormLabel = void 0;

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
  "FormLabel": "FormLabel__FormLabel___3d6zQ",
  "FormLabel__required-text": "FormLabel__FormLabel__required-text___3mvdm"
};
var defaultProps = {
  testId: 'cf-ui-form-label',
  requiredText: 'required',
  required: false
};

var FormLabel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FormLabel, _Component);

  var _super = _createSuper(FormLabel);

  function FormLabel() {
    (0, _classCallCheck2["default"])(this, FormLabel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          htmlFor = _this$props.htmlFor,
          requiredText = _this$props.requiredText,
          required = _this$props.required,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "htmlFor", "requiredText", "required"]);
      var classNames = (0, _classnames["default"])(styles.FormLabel, className);
      return /*#__PURE__*/_react["default"].createElement("label", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId,
        htmlFor: htmlFor
      }, otherProps), children, required && // eslint-disable-line @typescript-eslint/no-non-null-assertion
      !!requiredText.length &&
      /*#__PURE__*/
      // eslint-disable-line @typescript-eslint/no-non-null-assertion
      _react["default"].createElement("span", {
        className: styles['FormLabel__required-text']
      }, "(", requiredText, ")"));
    }
  }]);
  return FormLabel;
}(_react.Component);

exports.FormLabel = FormLabel;
FormLabel.displayName = "FormLabel";
FormLabel.propTypes = {
  htmlFor: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  requiredText: _propTypes["default"].string,
  required: _propTypes["default"].bool
};
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports["default"] = _default;