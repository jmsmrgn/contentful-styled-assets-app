"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationItemContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _NotificationItem = _interopRequireDefault(require("./NotificationItem"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  isShown: false
};

var NotificationItemContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(NotificationItemContainer, _Component);

  var _super = _createSuper(NotificationItemContainer);

  function NotificationItemContainer() {
    var _this;

    (0, _classCallCheck2["default"])(this, NotificationItemContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.timer = null;
    _this.state = {
      isShown: false
    };

    _this.startTimer = function () {
      if (_this.props.duration) {
        if (_this.props.duration === 0) return;
        _this.timer = setTimeout(function () {
          _this.close();
        }, _this.props.duration);
      }
    };

    _this.stopTimer = function () {
      if (_this.props.duration === 0) return;

      if (_this.timer) {
        clearTimeout(_this.timer);
        _this.timer = null;
      }
    };

    _this.close = function () {
      _this.stopTimer();

      _this.setState({
        isShown: false
      });
    };

    _this.handleMouseEnter = function () {
      _this.stopTimer();
    };

    _this.handleMouseLeave = function () {
      _this.startTimer();
    };

    return _this;
  }

  (0, _createClass2["default"])(NotificationItemContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimer(); // eslint-disable-next-line

      this.setState({
        isShown: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isShown !== this.props.isShown) {
        // eslint-disable-next-line
        this.setState({
          isShown: this.props.isShown // eslint-disable-line @typescript-eslint/no-non-null-assertion

        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          duration = _this$props.duration,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["duration"]);
      return /*#__PURE__*/_react["default"].createElement(_reactAnimateHeight["default"], {
        duration: 200,
        height: this.state.isShown ? 'auto' : 0,
        easing: "ease-in-out",
        animateOpacity: true,
        onAnimationEnd: function onAnimationEnd() {
          if (_this2.state.isShown === false) {
            if (_this2.props.onClose) {
              _this2.props.onClose();
            }
          }
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          pointerEvents: 'all'
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], (0, _extends2["default"])({}, rest, {
        onClose: this.close
      }))));
    }
  }]);
  return NotificationItemContainer;
}(_react.Component);

exports.NotificationItemContainer = NotificationItemContainer;
NotificationItemContainer.displayName = "NotificationItemContainer";
NotificationItemContainer.propTypes = {
  duration: _propTypes["default"].number,
  isShown: _propTypes["default"].bool
};
NotificationItemContainer.defaultProps = defaultProps;
var _default = NotificationItemContainer;
exports["default"] = _default;