"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalConfirm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Button = _interopRequireDefault(require("../../Button"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  testId: 'cf-ui-modal-confirm',
  confirmTestId: 'cf-ui-modal-confirm-confirm-button',
  secondaryTestId: 'cf-ui-modal-confirm-secondary-button',
  cancelTestId: 'cf-ui-modal-confirm-cancel-button',
  title: 'Are you sure?',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  intent: 'positive',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  isConfirmDisabled: false,
  isConfirmLoading: false,
  size: 'medium',
  allowHeightOverflow: false
};

var ModalConfirm = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalConfirm, _Component);

  var _super = _createSuper(ModalConfirm);

  function ModalConfirm() {
    (0, _classCallCheck2["default"])(this, ModalConfirm);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalConfirm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          testId = _this$props.testId,
          isShown = _this$props.isShown,
          title = _this$props.title,
          onConfirm = _this$props.onConfirm,
          onSecondary = _this$props.onSecondary,
          onCancel = _this$props.onCancel,
          size = _this$props.size,
          confirmLabel = _this$props.confirmLabel,
          secondaryLabel = _this$props.secondaryLabel,
          cancelLabel = _this$props.cancelLabel,
          intent = _this$props.intent,
          secondaryIntent = _this$props.secondaryIntent,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          allowHeightOverflow = _this$props.allowHeightOverflow,
          isConfirmDisabled = _this$props.isConfirmDisabled,
          isSecondaryDisabled = _this$props.isSecondaryDisabled,
          isConfirmLoading = _this$props.isConfirmLoading,
          isSecondaryLoading = _this$props.isSecondaryLoading,
          confirmTestId = _this$props.confirmTestId,
          secondaryTestId = _this$props.secondaryTestId,
          cancelTestId = _this$props.cancelTestId;
      return /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
        testId: testId,
        isShown: isShown,
        onClose: onCancel,
        size: size,
        shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        allowHeightOverflow: allowHeightOverflow
      }, function () {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Modal["default"].Header, (0, _extends2["default"])({
          title: title
        }, _this.props.modalHeaderProps)), /*#__PURE__*/_react["default"].createElement(_Modal["default"].Content, _this.props.modalContentProps, children), /*#__PURE__*/_react["default"].createElement(_Modal["default"].Controls, _this.props.modalControlsProps, confirmLabel && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          testId: confirmTestId,
          disabled: isConfirmDisabled,
          loading: isConfirmLoading,
          buttonType: intent,
          onClick: function onClick() {
            return onConfirm();
          }
        }, confirmLabel), secondaryLabel && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          testId: secondaryTestId,
          disabled: isSecondaryDisabled,
          loading: isSecondaryLoading,
          buttonType: secondaryIntent,
          onClick: function onClick() {
            return onSecondary && onSecondary();
          }
        }, secondaryLabel), cancelLabel && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          testId: cancelTestId,
          buttonType: "muted",
          onClick: function onClick() {
            return onCancel();
          }
        }, cancelLabel)));
      });
    }
  }]);
  return ModalConfirm;
}(_react.Component);

exports.ModalConfirm = ModalConfirm;
ModalConfirm.displayName = "ModalConfirm";
ModalConfirm.propTypes = {
  isShown: _propTypes["default"].bool.isRequired,
  onConfirm: _propTypes["default"].any.isRequired,
  onSecondary: _propTypes["default"].any,
  onCancel: _propTypes["default"].any.isRequired,
  title: _propTypes["default"].string,
  confirmLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf([false])]),
  secondaryLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf([false])]),
  cancelLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf([false])]),
  intent: _propTypes["default"].oneOf(['primary', 'positive', 'negative']),
  secondaryIntent: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'muted']),
  size: _propTypes["default"].any,
  shouldCloseOnOverlayClick: _propTypes["default"].bool,
  shouldCloseOnEscapePress: _propTypes["default"].bool,
  isConfirmDisabled: _propTypes["default"].bool,
  isSecondaryDisabled: _propTypes["default"].bool,
  isConfirmLoading: _propTypes["default"].bool,
  isSecondaryLoading: _propTypes["default"].bool,
  allowHeightOverflow: _propTypes["default"].bool,
  modalHeaderProps: _propTypes["default"].any,
  modalContentProps: _propTypes["default"].any,
  modalControlsProps: _propTypes["default"].any,
  testId: _propTypes["default"].string,
  confirmTestId: _propTypes["default"].string,
  secondaryTestId: _propTypes["default"].string,
  cancelTestId: _propTypes["default"].string
};
ModalConfirm.defaultProps = defaultProps;
var _default = ModalConfirm;
exports["default"] = _default;