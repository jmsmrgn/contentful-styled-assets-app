"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tab = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
  "Tabs": "Tabs__Tabs___3Cp8m",
  "Tab": "Tabs__Tab___1SiYI",
  "Tabs__with-divider": "Tabs__Tabs__with-divider___2Mx3Z",
  "Tab__selected": "Tabs__Tab__selected___3erbm",
  "Tab__disabled": "Tabs__Tab__disabled___3H8Zw"
};
var defaultProps = {
  selected: false,
  disabled: false,
  testId: 'cf-ui-tab',
  tabIndex: 0
};

var Tab = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tab, _Component);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onClick = function (e) {
      if (_this.props.onSelect && !_this.props.disabled) {
        _this.props.onSelect(_this.props.id, e);
      }
    };

    _this.onKeyPress = function (e) {
      if (_this.props.onSelect && e.key === 'Enter') {
        _this.props.onSelect(_this.props.id, e);

        e.preventDefault();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(Tab, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          className = _this$props.className,
          href = _this$props.href,
          style = _this$props.style,
          testId = _this$props.testId,
          selected = _this$props.selected,
          children = _this$props.children,
          tabIndex = _this$props.tabIndex;
      var elementProps = {
        className: (0, _classnames["default"])(styles.Tab, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, styles['Tab__selected'], selected), (0, _defineProperty2["default"])(_classNames, styles['Tab__disabled'], disabled), _classNames), className),
        onClick: this.onClick,
        onKeyPress: this.onKeyPress,
        style: style,
        'data-test-id': testId,
        tabIndex: tabIndex
      };

      if (disabled) {
        elementProps['aria-disabled'] = true;
      }

      if (href) {
        elementProps['href'] = href;

        if (selected) {
          elementProps['aria-current'] = 'page';
        }

        return /*#__PURE__*/_react["default"].createElement("a", elementProps, children);
      } else {
        elementProps['aria-selected'] = selected;
        elementProps['role'] = 'tab';
        elementProps['aria-controls'] = id;
        return /*#__PURE__*/_react["default"].createElement("div", elementProps, children);
      }
    }
  }]);
  return Tab;
}(_react.Component);

exports.Tab = Tab;
Tab.displayName = "Tab";
Tab.propTypes = {
  id: _propTypes["default"].string.isRequired,
  onSelect: _propTypes["default"].func,
  selected: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  target: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].number,
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
Tab.defaultProps = defaultProps;
var _default = Tab;
exports["default"] = _default;