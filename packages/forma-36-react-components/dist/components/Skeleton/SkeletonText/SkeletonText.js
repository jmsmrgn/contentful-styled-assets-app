"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonText = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  numberOfLines: 1,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 21,
  marginBottom: 20
};

var SkeletonText = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SkeletonText, _Component);

  var _super = _createSuper(SkeletonText);

  function SkeletonText() {
    var _this;

    (0, _classCallCheck2["default"])(this, SkeletonText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getLineWidth = function (lastLine) {
      if (_this.props.width) {
        return _this.props.width;
      }

      return lastLine ? '80%' : '100%';
    };

    return _this;
  }

  (0, _createClass2["default"])(SkeletonText, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          numberOfLines = _this$props.numberOfLines,
          offsetLeft = _this$props.offsetLeft,
          offsetTop = _this$props.offsetTop,
          lineHeight = _this$props.lineHeight,
          marginBottom = _this$props.marginBottom;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Array.from(Array(numberOfLines)).map(function (_, index) {
        return /*#__PURE__*/_react["default"].createElement("rect", {
          key: "skeleton-display-text-".concat(index) // eslint-disable-line
          ,
          x: offsetLeft,
          y: index * (+lineHeight + +marginBottom) + +offsetTop // eslint-disable-line @typescript-eslint/no-non-null-assertion
          ,
          rx: "0",
          ry: "0",
          width: _this2.getLineWidth(numberOfLines > 1 && numberOfLines - index === 1 // eslint-disable-line @typescript-eslint/no-non-null-assertion
          ),
          height: lineHeight
        });
      }));
    }
  }]);
  return SkeletonText;
}(_react.Component);

exports.SkeletonText = SkeletonText;
SkeletonText.displayName = "SkeletonText";
SkeletonText.propTypes = {
  numberOfLines: _propTypes["default"].number,
  offsetTop: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  offsetLeft: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  lineHeight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  marginBottom: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
SkeletonText.defaultProps = defaultProps;
var _default = SkeletonText;
exports["default"] = _default;