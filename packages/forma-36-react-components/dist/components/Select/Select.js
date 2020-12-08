"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Select = void 0;

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

var _Icon = _interopRequireDefault(require("../Icon"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Select__wrapper": "Select__Select__wrapper___2mbYV",
  "Select": "Select__Select___2Gi9N a11y__focus-border--default___60AXp",
  "Select--disabled": "Select__Select--disabled___156vR",
  "Select--small": "Select__Select--small___2amb5",
  "Select--medium": "Select__Select--medium___1QRqZ",
  "Select--large": "Select__Select--large___1HaJb",
  "Select--full": "Select__Select--full___AENS4",
  "Select--auto": "Select__Select--auto___3Y-B9",
  "Select--negative": "Select__Select--negative___1lj8S",
  "Select__icon": "Select__Select__icon___OBmvS"
};
var defaultProps = {
  testId: 'cf-ui-select',
  required: false,
  hasError: false,
  isDisabled: false,
  width: 'full',
  willBlurOnEsc: true
};

var Select = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Select, _Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: _this.props.value
    };

    _this.handleKeyDown = function (e) {
      var ESC = 27;

      if (e.keyCode === ESC && _this.props.willBlurOnEsc) {
        e.currentTarget.blur();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cn,
          _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          required = _this$props.required,
          children = _this$props.children,
          width = _this$props.width,
          className = _this$props.className,
          testId = _this$props.testId,
          _onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          isDisabled = _this$props.isDisabled,
          hasError = _this$props.hasError,
          willBlurOnEsc = _this$props.willBlurOnEsc,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["id", "name", "required", "children", "width", "className", "testId", "onChange", "onBlur", "onFocus", "isDisabled", "hasError", "willBlurOnEsc"]);
      var widthClass = "Select--".concat(width);
      var classNames = (0, _classnames["default"])(styles['Select'], (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['Select--disabled'], isDisabled), (0, _defineProperty2["default"])(_cn, styles['Select--negative'], hasError), _cn));
      var wrapperClassNames = (0, _classnames["default"])(styles['Select__wrapper'], styles[widthClass], className);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClassNames
      }, /*#__PURE__*/_react["default"].createElement("select", (0, _extends2["default"])({
        id: id,
        required: required,
        name: name,
        "aria-label": name,
        "data-test-id": testId,
        className: classNames,
        value: this.state.value,
        disabled: isDisabled,
        onFocus: onFocus,
        onChange: function onChange(e) {
          if (!isDisabled) {
            _this2.setState({
              value: e.target.value
            });

            if (_onChange) {
              _onChange(e);
            }
          }
        },
        onBlur: onBlur,
        onKeyDown: this.handleKeyDown
      }, otherProps), children), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: styles['Select__icon'],
        icon: "ArrowDown",
        color: "muted"
      }));
    }
  }]);
  return Select;
}(_react.Component);

exports.Select = Select;
Select.displayName = "Select";
Select.propTypes = {
  required: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  hasError: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  isDisabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  width: _propTypes["default"].oneOf(['auto', 'small', 'medium', 'large', 'full']),
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  willBlurOnEsc: _propTypes["default"].bool
};
Select.defaultProps = defaultProps;
var _default = Select;
exports["default"] = _default;