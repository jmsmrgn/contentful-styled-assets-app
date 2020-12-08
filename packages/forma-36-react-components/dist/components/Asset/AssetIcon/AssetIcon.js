"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AssetIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Illustration = require("../../Illustration");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_ILLUSTRATION_NAME = 'Archive';
var defaultProps = {
  type: 'archive',
  testId: 'cf-ui-asset-icon'
};
/**
 * Renders only the Illustration that would represent this asset's type
 */

var AssetIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AssetIcon, _Component);

  var _super = _createSuper(AssetIcon);

  function AssetIcon() {
    (0, _classCallCheck2["default"])(this, AssetIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(AssetIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["type"]);
      var illustrationName = type.charAt(0).toUpperCase() + type.slice(1); // eslint-disable-line @typescript-eslint/no-non-null-assertion

      if (!(0, _Illustration.isIllustrationType)(illustrationName)) {
        illustrationName = DEFAULT_ILLUSTRATION_NAME;
      }

      return /*#__PURE__*/_react["default"].createElement(_Illustration.Illustration, (0, _extends2["default"])({
        illustration: illustrationName
      }, otherProps));
    }
  }]);
  return AssetIcon;
}(_react.Component);

exports.AssetIcon = AssetIcon;
AssetIcon.displayName = "AssetIcon";
AssetIcon.propTypes = {
  type: _propTypes["default"].any
};
AssetIcon.defaultProps = defaultProps;
var _default = AssetIcon;
exports["default"] = _default;