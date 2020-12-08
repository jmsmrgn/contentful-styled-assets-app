"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Form = void 0;

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
  "Form": "Form__Form___2zwZf",
  "Form__item": "Form__Form__item___2qOZE",
  "Form__item--default": "Form__Form__item--default___1CHMK",
  "Form__item--condensed": "Form__Form__item--condensed___2iooB"
};
var defaultProps = {
  spacing: 'default',
  testId: 'cf-ui-form'
};

var Form = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Form, _Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    (0, _classCallCheck2["default"])(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleSubmit = function (event) {
      event.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(event);
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          onSubmit = _this$props.onSubmit,
          spacing = _this$props.spacing,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "onSubmit", "spacing"]);
      var classNames = (0, _classnames["default"])(styles.Form, className);
      var formItemClassNames = (0, _classnames["default"])(styles.Form__item, styles["Form__item--".concat(spacing)]);
      return /*#__PURE__*/_react["default"].createElement("form", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId,
        onSubmit: this.handleSubmit
      }, otherProps), _react["default"].Children.map(children, function (child) {
        if (child) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: formItemClassNames
          }, child);
        }

        return null;
      }));
    }
  }]);
  return Form;
}(_react.Component);

exports.Form = Form;
Form.displayName = "Form";
Form.propTypes = {
  onSubmit: _propTypes["default"].func,
  spacing: _propTypes["default"].oneOf(['condensed', 'default']),
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].any, _propTypes["default"].any]).isRequired
};
Form.defaultProps = defaultProps;
var _default = Form;
exports["default"] = _default;