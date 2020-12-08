"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Card = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Card": "Card__Card___1_26G",
  "Card--padding-default": "Card__Card--padding-default___xgDF9",
  "Card--padding-large": "Card__Card--padding-large___2KzUK",
  "Card--padding-none": "Card__Card--padding-none___1_Xu1",
  "Card--is-interactive": "Card__Card--is-interactive___3nFqr",
  "Card--is-selected": "Card__Card--is-selected___IBDSP"
};
var defaultProps = {
  padding: 'default',
  testId: 'cf-ui-card',
  selected: false
};

var Card = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Card, _Component);

  var _super = _createSuper(Card);

  function Card() {
    var _this;

    (0, _classCallCheck2["default"])(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleClick = function (event) {
      if (!_this.props.onClick) return;

      _this.props.onClick(event);
    };

    return _this;
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          testId = _this$props.testId,
          children = _this$props.children,
          href = _this$props.href,
          target = _this$props.target,
          onClick = _this$props.onClick,
          padding = _this$props.padding,
          selected = _this$props.selected,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "testId", "children", "href", "target", "onClick", "padding", "selected"]);
      var classNames = (0, _classnames["default"])(styles.Card, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles["Card--padding-".concat(padding)], padding), (0, _defineProperty2["default"])(_cn, styles['Card--is-interactive'], onClick || href), (0, _defineProperty2["default"])(_cn, styles['Card--is-selected'], selected), _cn));
      var Element = href ? 'a' : 'div';
      return _react["default"].createElement(Element, _objectSpread({
        href: href,
        target: href && target,
        className: classNames,
        // onClick: this.handleClick,
        'data-test-id': testId
      }, otherProps), children);
    }
  }]);
  return Card;
}(_react.Component);

exports.Card = Card;
Card.displayName = "Card";
Card.propTypes = {
  href: _propTypes["default"].string,
  selected: _propTypes["default"].bool,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  padding: _propTypes["default"].oneOf(['default', 'large', 'none']),
  title: _propTypes["default"].string,
  style: _propTypes["default"].any,
  children: _propTypes["default"].node.isRequired
};
Card.defaultProps = defaultProps;
var _default = Card;
exports["default"] = _default;