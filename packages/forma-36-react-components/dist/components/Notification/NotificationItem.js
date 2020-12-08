"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationItem = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TextLink = _interopRequireDefault(require("../TextLink"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "NotificationItem": "NotificationItem__NotificationItem___22iZo",
  "NotificationItem__intent": "NotificationItem__NotificationItem__intent___cC494 helpers__sr-only___3Kv3z",
  "NotificationItem__icon": "NotificationItem__NotificationItem__icon___3gdKj",
  "NotificationItem__icon--success": "NotificationItem__NotificationItem__icon--success___jzA45",
  "NotificationItem__icon--error": "NotificationItem__NotificationItem__icon--error___nAbZQ",
  "NotificationItem__icon--warning": "NotificationItem__NotificationItem__icon--warning___2aEPB",
  "NotificationItem__content": "NotificationItem__NotificationItem__content___2z-pT",
  "NotificationItem__text": "NotificationItem__NotificationItem__text___1-1Up",
  "NotificationItem__title": "NotificationItem__NotificationItem__title___126c1",
  "NotificationItem__body": "NotificationItem__NotificationItem__body___11cuA",
  "NotificationItem__dismiss": "NotificationItem__NotificationItem__dismiss___1Z6Df"
};
var defaultProps = {
  testId: 'cf-ui-notification',
  intent: 'success',
  hasCloseButton: true
};

var NotificationItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(NotificationItem, _Component);

  var _super = _createSuper(NotificationItem);

  function NotificationItem() {
    (0, _classCallCheck2["default"])(this, NotificationItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(NotificationItem, [{
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement("h2", {
        className: styles.NotificationItem__title
      }, title ? title : children);
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          children = _this$props2.children;
      return /*#__PURE__*/_react["default"].createElement("p", {
        className: styles.NotificationItem__body
      }, title && children);
    }
  }, {
    key: "renderCta",
    value: function renderCta() {
      var cta = this.props.cta;
      if (cta && cta.label) return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_TextLink["default"], cta.textLinkProps, cta.label));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var intent = this.props.intent;
      var iconClasses = (0, _classnames["default"])(styles.NotificationItem__icon, (0, _defineProperty2["default"])({}, styles["NotificationItem__icon--".concat(intent)], true));
      var icon;

      switch (intent) {
        case 'success':
          icon = 'CheckCircle';
          break;

        case 'warning':
          icon = 'Warning';
          break;

        case 'error':
          icon = 'ErrorCircle';
          break;

        default:
          icon = 'ErrorCircle';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: iconClasses,
        "aria-hidden": "true"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: icon,
        color: "white"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          testId = _this$props3.testId,
          intent = _this$props3.intent,
          onClose = _this$props3.onClose,
          hasCloseButton = _this$props3.hasCloseButton;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.NotificationItem,
        "data-test-id": testId,
        "data-intent": intent,
        role: "alert",
        "aria-live": intent === 'success' ? 'polite' : 'assertive'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.NotificationItem__intent
      }, intent), this.renderIcon(), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.NotificationItem__content
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.NotificationItem__text
      }, this.renderTitle(), this.renderBody(), this.renderCta()), hasCloseButton && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        buttonType: "secondary",
        iconProps: {
          icon: 'Close'
        },
        onClick: function onClick() {
          if (onClose) {
            onClose();
          }
        },
        testId: "cf-ui-notification-close",
        label: "Dismiss",
        className: styles.NotificationItem__dismiss
      })));
    }
  }]);
  return NotificationItem;
}(_react.Component);

exports.NotificationItem = NotificationItem;
NotificationItem.displayName = "NotificationItem";
NotificationItem.propTypes = {
  intent: _propTypes["default"].oneOf(['success', 'error', 'warning']),
  hasCloseButton: _propTypes["default"].bool,
  onClose: _propTypes["default"].any,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  title: _propTypes["default"].string,
  cta: _propTypes["default"].any
};
NotificationItem.defaultProps = defaultProps;
var _default = NotificationItem;
exports["default"] = _default;