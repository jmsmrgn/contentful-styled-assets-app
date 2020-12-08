"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InlineEntryCard = void 0;

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

var _reactTransitionGroup = require("react-transition-group");

var _Card = _interopRequireDefault(require("../Card"));

var _CardActions = _interopRequireDefault(require("./../CardActions"));

var _InlineEntryCardSkeleton = _interopRequireDefault(require("./InlineEntryCardSkeleton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "InlineEntryCard": "InlineEntryCard__InlineEntryCard___2cGQw",
  "InlineEntryCard__skeleton-wrapper": "InlineEntryCard__InlineEntryCard__skeleton-wrapper___BA5rM",
  "InlineEntryCard__text-wrapper": "InlineEntryCard__InlineEntryCard__text-wrapper___3Sf6P",
  "InlineEntryCard__status-indicator": "InlineEntryCard__InlineEntryCard__status-indicator___1sYHe",
  "InlineEntryCard__status-indicator--published": "InlineEntryCard__InlineEntryCard__status-indicator--published___2iM7W",
  "InlineEntryCard__status-indicator--draft": "InlineEntryCard__InlineEntryCard__status-indicator--draft___8AKK1",
  "InlineEntryCard__status-indicator--archived": "InlineEntryCard__InlineEntryCard__status-indicator--archived___3-aWk",
  "InlineEntryCard__status-indicator--changed": "InlineEntryCard__InlineEntryCard__status-indicator--changed___ArwPC",
  "InlineEntryCard__actions": "InlineEntryCard__InlineEntryCard__actions___3DzZi",
  "InlineEntryCard__spinner--enter": "InlineEntryCard__InlineEntryCard__spinner--enter___jY1EO",
  "InlineEntryCard__spinner--enter-active": "InlineEntryCard__InlineEntryCard__spinner--enter-active___AZomL",
  "InlineEntryCard__spinner--exit": "InlineEntryCard__InlineEntryCard__spinner--exit___29TCK",
  "InlineEntryCard__spinner--exit-active": "InlineEntryCard__InlineEntryCard__spinner--exit-active___31qgq"
};
var defaultProps = {
  testId: 'cf-ui-inline-entry-card'
};

var InlineEntryCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(InlineEntryCard, _Component);

  var _super = _createSuper(InlineEntryCard);

  function InlineEntryCard() {
    (0, _classCallCheck2["default"])(this, InlineEntryCard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(InlineEntryCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          dropdownListElements = _this$props.dropdownListElements,
          isSelected = _this$props.isSelected,
          children = _this$props.children,
          testId = _this$props.testId,
          isLoading = _this$props.isLoading,
          status = _this$props.status,
          href = _this$props.href,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "dropdownListElements", "isSelected", "children", "testId", "isLoading", "status", "href"]);
      var classNames = (0, _classnames["default"])(styles.InlineEntryCard, className);
      var statusIndicatorClassNames = (0, _classnames["default"])(styles['InlineEntryCard__status-indicator'], (0, _defineProperty2["default"])({}, styles["InlineEntryCard__status-indicator--".concat(status)], status && !isLoading));
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], (0, _extends2["default"])({
        selected: isSelected,
        className: classNames,
        href: href
      }, otherProps, {
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
        timeout: 100,
        "in": isLoading,
        classNames: {
          enter: styles['InlineEntryCard__spinner--enter'],
          enterActive: styles['InlineEntryCard__spinner--enter-active'],
          exit: styles['InlineEntryCard__spinner--exit'],
          exitActive: styles['InlineEntryCard__spinner--exit-active']
        },
        mountOnEnter: true,
        unmountOnExit: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['InlineEntryCard__skeleton-wrapper']
      }, /*#__PURE__*/_react["default"].createElement(_InlineEntryCardSkeleton["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: statusIndicatorClassNames
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['InlineEntryCard__text-wrapper']
      }, isLoading ? 'Loading' : children), dropdownListElements && /*#__PURE__*/_react["default"].createElement(_CardActions["default"], {
        className: styles['InlineEntryCard__actions'],
        iconButtonProps: {
          onClick: function onClick(e) {
            return e.stopPropagation;
          }
        }
      }, dropdownListElements));
    }
  }]);
  return InlineEntryCard;
}(_react.Component);

exports.InlineEntryCard = InlineEntryCard;
InlineEntryCard.displayName = "InlineEntryCard";
InlineEntryCard.propTypes = {
  isSelected: _propTypes["default"].bool,
  dropdownListElements: _propTypes["default"].element,
  isLoading: _propTypes["default"].bool,
  status: _propTypes["default"].oneOf(['archived', 'changed', 'draft', 'published']),
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  href: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
InlineEntryCard.defaultProps = defaultProps;
var _default = InlineEntryCard;
exports["default"] = _default;