"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _ModalControls = _interopRequireDefault(require("./ModalControls/ModalControls"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Modal__portal": "Modal__Modal__portal___1AjJC",
  "Modal__overlay": "Modal__Modal__overlay___3gPyC",
  "Modal__overlay--after-open": "Modal__Modal__overlay--after-open___sRqhJ",
  "Modal__overlay--before-close": "Modal__Modal__overlay--before-close___3hzWL",
  "Modal__overlay--centered": "Modal__Modal__overlay--centered___2kDOU",
  "Modal__wrap": "Modal__Modal__wrap___BjfRz",
  "Modal__wrap--zen": "Modal__Modal__wrap--zen___32JOV",
  "Modal__wrap--after-open": "Modal__Modal__wrap--after-open___1XDbx",
  "Modal": "Modal__Modal___2S_pS",
  "Modal__wrap--before-close": "Modal__Modal__wrap--before-close___1jI3B",
  "Modal--overflow": "Modal__Modal--overflow___2FUtB",
  "Modal--zen": "Modal__Modal--zen___2t2w9"
};
var ModalSizesMapper = {
  medium: '520px',
  small: '400px',
  large: '700px',
  fullWidth: '100vw',
  zen: '100vw'
};
var defaultProps = {
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
  position: 'center',
  testId: 'cf-ui-modal',
  topOffset: '50px',
  size: 'medium',
  allowHeightOverflow: false
};

var Modal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    (0, _classCallCheck2["default"])(this, Modal);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Modal, [{
    key: "renderDefault",
    value: function renderDefault() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.title && /*#__PURE__*/_react["default"].createElement(_ModalHeader["default"], (0, _extends2["default"])({
        title: this.props.title,
        onClose: this.props.onClose
      }, this.props.modalHeaderProps)), /*#__PURE__*/_react["default"].createElement(_ModalContent["default"], this.props.modalContentProps, this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _cn2, _cn3;

      return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], {
        ariaHideApp: false,
        onRequestClose: this.props.onClose,
        isOpen: this.props.isShown,
        onAfterOpen: this.props.onAfterOpen,
        shouldCloseOnEsc: this.props.shouldCloseOnEscapePress,
        shouldCloseOnOverlayClick: this.props.shouldCloseOnOverlayClick,
        portalClassName: styles.Modal__portal,
        className: {
          base: (0, _classnames["default"])(styles.Modal__wrap, (0, _defineProperty2["default"])({}, styles['Modal__wrap--zen'], this.props.size === 'zen')),
          afterOpen: styles['Modal__wrap--after-open'],
          beforeClose: styles['Modal__wrap--before-close']
        },
        style: {
          content: {
            top: this.props.position === 'center' ? 0 : this.props.topOffset
          }
        },
        overlayClassName: {
          base: (0, _classnames["default"])((_cn2 = {}, (0, _defineProperty2["default"])(_cn2, styles.Modal__overlay, true), (0, _defineProperty2["default"])(_cn2, styles['Modal__overlay--centered'], this.props.position === 'center'), _cn2)),
          afterOpen: styles['Modal__overlay--after-open'],
          beforeClose: styles['Modal__overlay--before-close']
        },
        htmlOpenClassName: "Modal__html--open",
        bodyOpenClassName: "Modal__body--open",
        closeTimeoutMS: 300
      }, /*#__PURE__*/_react["default"].createElement("div", {
        "data-test-id": this.props.testId,
        style: {
          width: ModalSizesMapper[this.props.size] || this.props.size // eslint-disable-line @typescript-eslint/no-non-null-assertion

        },
        className: (0, _classnames["default"])(styles.Modal, this.props.className, (_cn3 = {}, (0, _defineProperty2["default"])(_cn3, styles['Modal--overflow'], this.props.allowHeightOverflow), (0, _defineProperty2["default"])(_cn3, styles['Modal--zen'], this.props.size === 'zen'), _cn3))
      }, typeof this.props.children === 'function' ? this.props.children(this.props) : this.renderDefault()));
    }
  }]);
  return Modal;
}(_react.Component);

exports.Modal = Modal;
Modal.displayName = "Modal";
Modal.propTypes = {
  isShown: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].any.isRequired,
  onAfterOpen: _propTypes["default"].any,
  shouldCloseOnOverlayClick: _propTypes["default"].bool,
  shouldCloseOnEscapePress: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf(['center', 'top']),
  topOffset: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  title: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['small']), _propTypes["default"].oneOf(['medium']), _propTypes["default"].oneOf(['large']), _propTypes["default"].oneOf(['fullWidth']), _propTypes["default"].oneOf(['zen']), _propTypes["default"].string, _propTypes["default"].number]),
  allowHeightOverflow: _propTypes["default"].bool,
  modalHeaderProps: _propTypes["default"].any,
  modalContentProps: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].any.isRequired
};
Modal.Header = _ModalHeader["default"];
Modal.Content = _ModalContent["default"];
Modal.Controls = _ModalControls["default"];
Modal.defaultProps = defaultProps;
var _default = Modal;
exports["default"] = _default;