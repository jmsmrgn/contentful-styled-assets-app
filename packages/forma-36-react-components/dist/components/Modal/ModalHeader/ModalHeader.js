"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalHeader = void 0;

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

var _IconButton = _interopRequireDefault(require("../../IconButton/IconButton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "ModalHeader": "ModalHeader__ModalHeader___1yD1S",
  "ModalHeader__title": "ModalHeader__ModalHeader__title___3IuOy",
  "ModalHeader__title--is-not-wrapped": "ModalHeader__ModalHeader__title--is-not-wrapped___39i2J"
};
var defaultProps = {
  testId: 'cf-ui-modal-header'
};

var ModalHeader = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalHeader, _Component);

  var _super = _createSuper(ModalHeader);

  function ModalHeader() {
    (0, _classCallCheck2["default"])(this, ModalHeader);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          title = _this$props.title,
          testId = _this$props.testId,
          isNotWrapped = _this$props.isNotWrapped,
          className = _this$props.className,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["onClose", "title", "testId", "isNotWrapped", "className"]);
      var titleClassNames = (0, _classnames["default"])(styles.ModalHeader__title, (0, _defineProperty2["default"])({}, styles['ModalHeader__title--is-not-wrapped'], isNotWrapped));
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, rest, {
        className: (0, _classnames["default"])(styles.ModalHeader, className),
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement("h1", {
        className: titleClassNames
      }, title), onClose && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        iconProps: {
          icon: 'Close'
        },
        buttonType: "muted",
        label: "Close",
        onClick: function onClick() {
          return onClose();
        }
      }));
    }
  }]);
  return ModalHeader;
}(_react.Component);

exports.ModalHeader = ModalHeader;
ModalHeader.displayName = "ModalHeader";
ModalHeader.propTypes = {
  title: _propTypes["default"].string.isRequired,
  onClose: _propTypes["default"].any,
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  isNotWrapped: _propTypes["default"].bool,
  style: _propTypes["default"].any
};
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports["default"] = _default;