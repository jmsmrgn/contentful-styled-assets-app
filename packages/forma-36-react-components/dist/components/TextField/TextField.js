"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextField = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

var _ValidationMessage = _interopRequireDefault(require("../ValidationMessage"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

var _HelpText = _interopRequireDefault(require("../HelpText"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextLink = _interopRequireDefault(require("../TextLink"));

var _Textarea = _interopRequireDefault(require("../Textarea"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "TextField": "TextField__TextField___Sf6eo",
  "TextField--small": "TextField__TextField--small___13h4C",
  "TextField--medium": "TextField__TextField--medium___1bB-F",
  "TextField--large": "TextField__TextField--large___3GaTm",
  "TextField--full": "TextField__TextField--full___11DBK",
  "TextField__label-wrapper": "TextField__TextField__label-wrapper___2-MJT",
  "TextField__label-link": "TextField__TextField__label-link___u94cw",
  "TextField__validation-message": "TextField__TextField__validation-message___1Idkl",
  "TextField__help-text": "TextField__TextField__help-text___p4rVf",
  "TextField__hints": "TextField__TextField__hints___3Di2P",
  "TextField__count": "TextField__TextField__count___jiTTs"
};
var defaultProps = {
  testId: 'cf-ui-text-field',
  textarea: false,
  required: false,
  countCharacters: false,
  width: 'full'
};

var TextField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextField, _Component);

  var _super = _createSuper(TextField);

  function TextField() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: _this.props.value || '',
      initialValue: _this.props.value
    };

    _this.handleOnChange = function (evt) {
      _this.setState({
        value: evt.target.value
      });

      if (_this.props.onChange) _this.props.onChange(evt);
    };

    return _this;
  }

  (0, _createClass2["default"])(TextField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          validationMessage = _this$props.validationMessage,
          className = _this$props.className,
          textInputProps = _this$props.textInputProps,
          testId = _this$props.testId,
          width = _this$props.width,
          formLabelProps = _this$props.formLabelProps,
          textLinkProps = _this$props.textLinkProps,
          labelText = _this$props.labelText,
          helpText = _this$props.helpText,
          textarea = _this$props.textarea,
          countCharacters = _this$props.countCharacters,
          required = _this$props.required,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          value = _this$props.value,
          name = _this$props.name,
          id = _this$props.id,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["validationMessage", "className", "textInputProps", "testId", "width", "formLabelProps", "textLinkProps", "labelText", "helpText", "textarea", "countCharacters", "required", "onChange", "onBlur", "onFocus", "value", "name", "id"]);
      var widthClass = "TextField--".concat(width);
      var classNames = (0, _classnames["default"])(styles['TextField'], styles[widthClass], className); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var Element = textarea ? _Textarea["default"] : _TextInput["default"];
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames
      }, otherProps, {
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['TextField__label-wrapper']
      }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], (0, _extends2["default"])({}, formLabelProps, {
        htmlFor: id,
        required: required
      }), labelText), textLinkProps && /*#__PURE__*/_react["default"].createElement(_TextLink["default"], _objectSpread(_objectSpread({}, textLinkProps), {}, {
        className: styles['TextField__label-link']
      }), textLinkProps.text)), /*#__PURE__*/_react["default"].createElement(Element, _objectSpread(_objectSpread({
        error: !!validationMessage,
        name: name,
        id: id,
        onBlur: onBlur,
        onFocus: onFocus,
        onChange: this.handleOnChange,
        value: value,
        required: required
      }, textInputProps), {}, {
        width: 'full'
      })), validationMessage && /*#__PURE__*/_react["default"].createElement(_ValidationMessage["default"], {
        className: styles['TextField__validation-message']
      }, validationMessage), (helpText || countCharacters) && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['TextField__hints']
      }, helpText && /*#__PURE__*/_react["default"].createElement(_HelpText["default"], {
        className: styles['TextField__help-text']
      }, helpText), countCharacters && textInputProps && textInputProps.maxLength && /*#__PURE__*/_react["default"].createElement(_HelpText["default"], {
        className: (0, _classnames["default"])(styles['TextField__help-text'], styles['TextField__count'])
      }, this.state.value ? this.state.value.length : 0, "/", textInputProps.maxLength)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value !== state.initialValue) {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: props.value,
          initialValue: props.value
        });
      }

      return state;
    }
  }]);
  return TextField;
}(_react.Component);

exports.TextField = TextField;
TextField.displayName = "TextField";
TextField.propTypes = {
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].string,
  labelText: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string,
  validationMessage: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  formLabelProps: _propTypes["default"].any,
  textLinkProps: _propTypes["default"].any,
  textInputProps: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].any]),
  helpText: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  textarea: _propTypes["default"].bool,
  countCharacters: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
};
TextField.defaultProps = defaultProps;
var _default = TextField;
exports["default"] = _default;