"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tag = void 0;

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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Tag": "Tag__Tag___Y-myd",
  "Tag--primary": "Tag__Tag--primary___2Hk3I",
  "Tag--positive": "Tag__Tag--positive___1cepi",
  "Tag--negative": "Tag__Tag--negative___12luW",
  "Tag--warning": "Tag__Tag--warning___3Bet2",
  "Tag--secondary": "Tag__Tag--secondary___2vTK0",
  "Tag--muted": "Tag__Tag--muted___1Uba5"
};
var statusTagTypeMap = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative'
};
var defaultProps = {
  tagType: 'primary',
  testId: 'cf-ui-tag'
};

var Tag = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tag, _Component);

  var _super = _createSuper(Tag);

  function Tag() {
    (0, _classCallCheck2["default"])(this, Tag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          tagType = _this$props.tagType,
          entityStatusType = _this$props.entityStatusType,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "tagType", "entityStatusType", "testId"]);
      var classNames = (0, _classnames["default"])(styles.Tag, className, (0, _defineProperty2["default"])({}, styles["Tag--".concat(entityStatusType ? statusTagTypeMap[entityStatusType] : tagType)], entityStatusType ? statusTagTypeMap[entityStatusType] : tagType));
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: classNames,
        "data-test-id": testId
      }, otherProps), children);
    }
  }]);
  return Tag;
}(_react.Component);

exports.Tag = Tag;
Tag.displayName = "Tag";
Tag.propTypes = {
  tagType: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'warning', 'secondary', 'muted']),
  style: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  entityStatusType: _propTypes["default"].oneOf(['published', 'draft', 'archived', 'changed', 'deleted'])
};
Tag.defaultProps = defaultProps;
var _default = Tag;
exports["default"] = _default;