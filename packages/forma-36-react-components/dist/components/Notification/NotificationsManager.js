"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationsManager = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NotificationItemContainer = _interopRequireDefault(require("./NotificationItemContainer"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "NotificationsManager": "NotificationsManager__NotificationsManager___1uvY2",
  "NotificationsManager__container": "NotificationsManager__NotificationsManager__container___3U0e9",
  "NotificationsManager--top": "NotificationsManager__NotificationsManager--top___aRv7j"
};
var uniqueId = 0;

var getUniqueId = function getUniqueId() {
  uniqueId += 1;
  return uniqueId;
};

var NotificationsManager = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(NotificationsManager, _PureComponent);

  var _super = _createSuper(NotificationsManager);

  function NotificationsManager(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, NotificationsManager);
    _this = _super.call(this, props);

    _this.setPosition = function (position, params) {
      if (position === 'bottom' || position === 'top') {
        var positionOffset = params && params.offset ? params.offset : 20;

        _this.setState({
          position: position,
          positionOffset: positionOffset
        });
      }
    };

    _this.setDuration = function (duration) {
      _this.setState({
        duration: duration
      });
    };

    _this.close = function (id) {
      _this.setState(function (state) {
        return {
          items: state.items.map(function (item) {
            if (item.id !== id) {
              return item;
            }

            return _objectSpread(_objectSpread({}, item), {}, {
              isShown: false
            });
          })
        };
      });
    };

    _this.closeAndDelete = function (id) {
      _this.setState(function (state) {
        return {
          items: state.items.filter(function (item) {
            return item.id !== id;
          })
        };
      });
    };

    _this.closeAll = function () {
      _this.setState(function (state) {
        return {
          items: state.items.map(function (item) {
            return _objectSpread(_objectSpread({}, item), {}, {
              isShown: false
            });
          })
        };
      });
    };

    _this.show = function (text, settings) {
      var duration = settings && typeof settings.duration !== 'undefined' // Needed as 0 is falsy but 0 is valid to disable auto-closing a notification
      ? settings.duration : _this.state.duration;
      var intent = settings && settings.intent ? settings.intent : 'success';
      var canClose = settings && typeof settings.canClose !== 'undefined' ? settings.canClose : true;
      var notificationId = settings && settings.id ? settings.id : getUniqueId();
      var notification = {
        id: notificationId,
        text: text,
        close: function close() {
          return _this.closeAndDelete(notificationId);
        },
        duration: duration,
        canClose: canClose,
        isShown: true,
        intent: intent,
        title: settings && settings.title,
        cta: settings && settings.cta
      };

      var alreadyThere = _this.state.items.find(function (item) {
        return item.id === notification.id;
      });

      if (alreadyThere) {
        return alreadyThere;
      }

      _this.setState(function (state) {
        if (state.position === 'top') {
          return _objectSpread(_objectSpread({}, state), {}, {
            items: [notification].concat((0, _toConsumableArray2["default"])(state.items))
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          items: [].concat((0, _toConsumableArray2["default"])(state.items), [notification])
        });
      });

      return notification;
    };

    _this.state = {
      items: [],
      position: 'bottom',
      positionOffset: 20,
      duration: 6000
    };

    _this.props.register('close', _this.close);

    _this.props.register('show', _this.show);

    _this.props.register('closeAll', _this.closeAll);

    _this.props.register('setPosition', _this.setPosition);

    _this.props.register('setDuration', _this.setDuration);

    return _this;
  }

  (0, _createClass2["default"])(NotificationsManager, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-test-id": "cf-notification-container",
        className: (0, _classnames["default"])(styles.NotificationsManager, (0, _defineProperty2["default"])({}, styles["NotificationsManager--top"], this.state.position === 'top')),
        style: (0, _defineProperty2["default"])({}, this.state.position, this.state.positionOffset)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.NotificationsManager__container
      }, this.state.items.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_NotificationItemContainer["default"], {
          intent: item.intent,
          duration: item.duration,
          key: item.id,
          hasCloseButton: item.canClose,
          onClose: item.close,
          isShown: item.isShown,
          title: item.title,
          cta: item.cta
        }, item.text);
      })));
    }
  }]);
  return NotificationsManager;
}(_react.PureComponent);

exports.NotificationsManager = NotificationsManager;
NotificationsManager.displayName = "NotificationsManager";
NotificationsManager.propTypes = {
  register: _propTypes["default"].func.isRequired
};
var _default = NotificationsManager;
exports["default"] = _default;