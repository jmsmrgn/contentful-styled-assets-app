"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAssetType = isAssetType;
exports["default"] = exports.Asset = exports.types = void 0;

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

var _AssetIcon = require("./AssetIcon/AssetIcon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Asset": "Asset__Asset___1zgnB",
  "Asset__image-container": "Asset__Asset__image-container___1oHDv",
  "Asset__image-container__image": "Asset__Asset__image-container__image___3J2Ik",
  "Asset__title-container": "Asset__Asset__title-container___jUj2R",
  "Asset__title-container__title": "Asset__Asset__title-container__title___1AHiK",
  "Asset__asset-container": "Asset__Asset__asset-container___226So",
  "Asset__asset-container__title": "Asset__Asset__asset-container__title___y3fAq",
  "Asset__illustration-container": "Asset__Asset__illustration-container___D0AVE"
};
var types = {
  archive: 'archive',
  audio: 'audio',
  code: 'code',
  image: 'image',
  markup: 'markup',
  pdf: 'pdf',
  plaintext: 'plaintext',
  presentation: 'presentation',
  richtext: 'richtext',
  spreadsheet: 'spreadsheet',
  video: 'video'
};
exports.types = types;

function isAssetType(type) {
  return Object.keys(types).includes(type);
}

var defaultProps = {
  type: 'image',
  testId: 'cf-ui-asset'
};

var Asset = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Asset, _Component);

  var _super = _createSuper(Asset);

  function Asset() {
    var _this;

    (0, _classCallCheck2["default"])(this, Asset);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderImage = function (src, title) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Asset__image-container']
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: styles['Asset__image-container__image'],
        src: src,
        alt: title
      })), title && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Asset__title-container']
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['Asset__title-container__title']
      }, title)));
    };

    _this.renderAsset = function (type, title) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Asset__asset-container']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Asset__illustration-container']
      }, /*#__PURE__*/_react["default"].createElement(_AssetIcon.AssetIcon, {
        type: type
      })), title && /*#__PURE__*/_react["default"].createElement("span", {
        className: styles['Asset__asset-container__title']
      }, title));
    };

    return _this;
  }

  (0, _createClass2["default"])(Asset, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          src = _this$props.src,
          status = _this$props.status,
          title = _this$props.title,
          type = _this$props.type,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "src", "status", "title", "type", "testId"]);
      var classNames = (0, _classnames["default"])(styles.Asset, className); // Archived images will not have a preview available

      var asImage = type && type === 'image' && (!status || status !== 'archived') && src;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps), asImage ? this.renderImage(src, title) : this.renderAsset(type, title) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      );
    }
  }]);
  return Asset;
}(_react.Component);

exports.Asset = Asset;
Asset.displayName = "Asset";
Asset.propTypes = {
  src: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].any,
  className: _propTypes["default"].string,
  status: _propTypes["default"].any,
  testId: _propTypes["default"].string
};
Asset.defaultProps = defaultProps;
var _default = Asset;
exports["default"] = _default;