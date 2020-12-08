"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InViewport = void 0;

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

var _isBrowser = _interopRequireDefault(require("../../utils/isBrowser"));

var _throttle = _interopRequireDefault(require("../../utils/throttle"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "InViewport": "InViewport__InViewport___2o6g4"
};
var defaultProps = {
  testId: 'cf-ui-in-viewport',
  offset: 0
};

var InViewport = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(InViewport, _Component);

  var _super = _createSuper(InViewport);

  function InViewport() {
    var _this;

    (0, _classCallCheck2["default"])(this, InViewport);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.tGetDomPosition = null;
    _this.nodeRef = null;
    _this.lastOverflowAt = null;
    _this.tOnOverflowTop = _this.props.onOverflowTop && (0, _throttle["default"])(100, _this.props.onOverflowTop);
    _this.tOnOverflowBottom = _this.props.onOverflowBottom && (0, _throttle["default"])(100, _this.props.onOverflowBottom);
    _this.tOnOverflowRight = _this.props.onOverflowRight && (0, _throttle["default"])(100, _this.props.onOverflowRight);
    _this.tOnOverflowLeft = _this.props.onOverflowLeft && (0, _throttle["default"])(100, _this.props.onOverflowLeft);

    _this.getDomPosition = function () {
      if (_isBrowser["default"] && _this.nodeRef) {
        var html = document.documentElement;

        var boundingClientRect = _this.nodeRef.getBoundingClientRect();

        var windowWidth = window.innerWidth || html.clientWidth;
        var windowHeight = window.innerHeight || html.clientHeight;

        _this.handleOverflow(boundingClientRect, windowWidth, windowHeight);
      }
    };

    _this.bindEventListeners = function () {
      _this.tGetDomPosition = (0, _throttle["default"])(600, _this.getDomPosition);

      if (_isBrowser["default"]) {
        window.addEventListener('scroll', _this.tGetDomPosition, true);
        window.addEventListener('resize', _this.tGetDomPosition);
      }
    };

    _this.handleOverflow = function (_ref, windowWidth, windowHeight) {
      var top = _ref.top,
          left = _ref.left,
          bottom = _ref.bottom,
          right = _ref.right;
      var offset = _this.props.offset;
      var topThreshold = 0 - offset; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      var leftThreshold = 0 - offset; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      var rightThreshold = windowWidth + offset; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      var bottomThreshold = windowHeight + offset; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      if (top + right + bottom + left !== 0) {
        if (top < topThreshold && _this.lastOverflowAt !== 'bottom') {
          _this.lastOverflowAt = 'top';
          _this.tOnOverflowTop && _this.tOnOverflowTop();
        } else if (left < leftThreshold && _this.lastOverflowAt !== 'right') {
          _this.lastOverflowAt = 'left';
          _this.tOnOverflowLeft && _this.tOnOverflowLeft();
        } else if (bottom > bottomThreshold && _this.lastOverflowAt !== 'top') {
          _this.lastOverflowAt = 'bottom';
          _this.tOnOverflowBottom && _this.tOnOverflowBottom();
        } else if (right > rightThreshold && _this.lastOverflowAt !== 'left') {
          _this.lastOverflowAt = 'right';
          _this.tOnOverflowRight && _this.tOnOverflowRight();
        }
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(InViewport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getDomPosition();
      this.bindEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.getDomPosition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_isBrowser["default"] && this.tGetDomPosition) {
        window.removeEventListener('scroll', this.tGetDomPosition, true);
        window.removeEventListener('resize', this.tGetDomPosition);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          onOverflowBottom = _this$props.onOverflowBottom,
          onOverflowLeft = _this$props.onOverflowLeft,
          onOverflowRight = _this$props.onOverflowRight,
          onOverflowTop = _this$props.onOverflowTop,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "onOverflowBottom", "onOverflowLeft", "onOverflowRight", "onOverflowTop"]);
      var classNames = (0, _classnames["default"])(styles['InViewport'], className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        ref: function ref(_ref2) {
          _this2.nodeRef = _ref2;
        },
        className: classNames,
        "data-test-id": testId
      }, otherProps), children);
    }
  }]);
  return InViewport;
}(_react.Component);

exports.InViewport = InViewport;
InViewport.displayName = "InViewport";
InViewport.propTypes = {
  offset: _propTypes["default"].number,
  onOverflowTop: _propTypes["default"].any,
  onOverflowRight: _propTypes["default"].any,
  onOverflowBottom: _propTypes["default"].any,
  onOverflowLeft: _propTypes["default"].any,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string
};
InViewport.defaultProps = defaultProps;
var _default = InViewport;
exports["default"] = _default;