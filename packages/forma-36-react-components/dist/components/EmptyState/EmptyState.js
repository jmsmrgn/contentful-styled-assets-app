"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EmptyState = void 0;

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

var _Heading = _interopRequireDefault(require("../Typography/Heading"));

var _Paragraph = _interopRequireDefault(require("../Typography/Paragraph"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "EmptyState": "EmptyState__EmptyState___35Xbk",
  "EmptyState_container": "EmptyState__EmptyState_container___34eoG",
  "EmptyState_illustration": "EmptyState__EmptyState_illustration___3KEC9",
  "EmptyState_element": "EmptyState__EmptyState_element___1cYfd",
  "EmptyState_paragraph": "EmptyState__EmptyState_paragraph___KTUQq"
};
var defaultProps = {
  testId: 'cf-ui-empty-state'
};

var EmptyState = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EmptyState, _Component);

  var _super = _createSuper(EmptyState);

  function EmptyState() {
    (0, _classCallCheck2["default"])(this, EmptyState);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EmptyState, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          customImageElement = _this$props.customImageElement,
          imageProps = _this$props.imageProps,
          headingProps = _this$props.headingProps,
          descriptionProps = _this$props.descriptionProps,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "customImageElement", "imageProps", "headingProps", "descriptionProps"]);
      var classNames = (0, _classnames["default"])(styles.EmptyState, className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
        className: classNames,
        "data-test-id": testId
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EmptyState_container']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EmptyState_element']
      }, customImageElement ? customImageElement : imageProps && /*#__PURE__*/_react["default"].createElement("img", {
        src: imageProps.url,
        alt: imageProps.description,
        className: (0, _classnames["default"])(imageProps.className, styles['EmptyState_illustration']),
        style: {
          height: imageProps.height,
          width: imageProps.width
        }
      })), /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
        element: headingProps.elementType ? headingProps.elementType : 'h1',
        className: styles['EmptyState_element']
      }, headingProps.text), /*#__PURE__*/_react["default"].createElement(_Paragraph["default"], {
        element: descriptionProps.elementType ? descriptionProps.elementType : 'p',
        className: (0, _classnames["default"])(styles['EmptyState_paragraph'], styles['EmptyState_element'])
      }, descriptionProps.text), children));
    }
  }]);
  return EmptyState;
}(_react.Component);

exports.EmptyState = EmptyState;
EmptyState.displayName = "EmptyState";
EmptyState.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string,
  imageProps: _propTypes["default"].shape({
    url: _propTypes["default"].string.isRequired,
    width: _propTypes["default"].string.isRequired,
    height: _propTypes["default"].string.isRequired,
    description: _propTypes["default"].string.isRequired,
    className: _propTypes["default"].string
  }),
  customImageElement: _propTypes["default"].element,
  headingProps: _propTypes["default"].shape({
    text: _propTypes["default"].node.isRequired,
    elementType: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
  }).isRequired,
  descriptionProps: _propTypes["default"].shape({
    text: _propTypes["default"].node.isRequired,
    elementType: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
  }).isRequired
};
EmptyState.defaultProps = defaultProps;
var _default = EmptyState;
exports["default"] = _default;