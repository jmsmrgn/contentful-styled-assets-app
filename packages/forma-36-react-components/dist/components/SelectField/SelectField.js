"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectField = void 0;

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

var _ValidationMessage = _interopRequireDefault(require("../ValidationMessage"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

var _HelpText = _interopRequireDefault(require("../HelpText"));

var _Select = _interopRequireDefault(require("../Select"));

var _TextLink = _interopRequireDefault(require("../TextLink"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "SelectField": "SelectField__SelectField___kbQlf",
  "SelectField__label-wrapper": "SelectField__SelectField__label-wrapper___3jGwo",
  "SelectField__label-link": "SelectField__SelectField__label-link___2bZnM",
  "SelectField__validation-message": "SelectField__SelectField__validation-message___1yelf",
  "SelectField__help-text": "SelectField__SelectField__help-text___H0RZB"
};
var defaultProps = {
  testId: 'cf-ui-select-field',
  required: false
};

var SelectField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SelectField, _Component);

  var _super = _createSuper(SelectField);

  function SelectField() {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: _this.props.value
    };

    _this.handleOnChange = function (evt) {
      _this.setState({
        value: evt.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(evt);
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(SelectField, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    } // Store a copy of the value in state.
    // This is used by this component when the `countCharacters`
    // option is on

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          validationMessage = _this$props.validationMessage,
          className = _this$props.className,
          children = _this$props.children,
          selectProps = _this$props.selectProps,
          testId = _this$props.testId,
          formLabelProps = _this$props.formLabelProps,
          textLinkProps = _this$props.textLinkProps,
          labelText = _this$props.labelText,
          helpText = _this$props.helpText,
          required = _this$props.required,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          value = _this$props.value,
          name = _this$props.name,
          id = _this$props.id,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["validationMessage", "className", "children", "selectProps", "testId", "formLabelProps", "textLinkProps", "labelText", "helpText", "required", "onChange", "onBlur", "value", "name", "id"]);
      var classNames = (0, _classnames["default"])(styles['SelectField'], className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames
      }, otherProps, {
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['SelectField__label-wrapper']
      }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], _objectSpread(_objectSpread({}, formLabelProps), {}, {
        htmlFor: id,
        required: required
      }), labelText), textLinkProps && /*#__PURE__*/_react["default"].createElement(_TextLink["default"], _objectSpread(_objectSpread({}, textLinkProps), {}, {
        className: styles['SelectField__label-link']
      }), textLinkProps.text)), /*#__PURE__*/_react["default"].createElement(_Select["default"], _objectSpread({
        hasError: !!validationMessage,
        name: name,
        id: id,
        onBlur: onBlur,
        onChange: this.handleOnChange,
        value: this.state.value,
        required: required
      }, selectProps), children), validationMessage && /*#__PURE__*/_react["default"].createElement(_ValidationMessage["default"], {
        className: styles['SelectField__validation-message']
      }, validationMessage), helpText && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['SelectField__hints']
      }, helpText && /*#__PURE__*/_react["default"].createElement(_HelpText["default"], {
        className: styles['SelectField__help-text']
      }, helpText)));
    }
  }]);
  return SelectField;
}(_react.Component);

exports.SelectField = SelectField;
SelectField.displayName = "SelectField";
SelectField.propTypes = {
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  labelText: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  value: _propTypes["default"].string,
  validationMessage: _propTypes["default"].string,
  formLabelProps: _propTypes["default"].any,
  textLinkProps: _propTypes["default"].any,
  selectProps: _propTypes["default"].any,
  helpText: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string
};
SelectField.defaultProps = defaultProps;
var _default = SelectField;
exports["default"] = _default;