"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AssetCard = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Card = _interopRequireDefault(require("../Card"));

var _CardActions = _interopRequireDefault(require("./../CardActions"));

var _Asset = require("../../Asset");

var _TextInput = require("../../TextInput");

var _Tag = _interopRequireDefault(require("../../Tag"));

var _AssetCardSkeleton = _interopRequireDefault(require("./AssetCardSkeleton"));

var _CardDragHandle = _interopRequireDefault(require("../CardDragHandle"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "AssetCard": "AssetCard__AssetCard____VWXj",
  "AssetCard--size-small": "AssetCard__AssetCard--size-small___2fyHk",
  "AssetCard__asset": "AssetCard__AssetCard__asset___189id",
  "AssetCard--drag-active": "AssetCard__AssetCard--drag-active___WtiNB",
  "AssetCard__wrapper": "AssetCard__AssetCard__wrapper___24k3w",
  "AssetCard__header": "AssetCard__AssetCard__header___2ahyT",
  "AssetCard__actions": "AssetCard__AssetCard__actions___2Nbjg",
  "ImgClass__wrapper": "AssetCard__ImgClass__wrapper___kHrox",
  "ImgClass__input": "AssetCard__ImgClass__input___2FPjp"
}; // const foo = require('./docsIcon.png');

var defaultProps = {
  isLoading: false,
  testId: 'cf-ui-asset-card',
  size: 'default'
};

var AssetCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AssetCard, _Component);

  var _super = _createSuper(AssetCard);

  function AssetCard() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderStatus = function (status) {
      var label;
      var type = null;

      switch (status) {
        case 'archived':
          label = 'archived';
          type = 'negative';
          break;

        case 'changed':
          label = 'changed';
          type = 'primary';
          break;

        case 'published':
          label = 'published';
          type = 'positive';
          break;

        default:
          label = 'draft';
          type = 'warning';
      }

      return /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
        tagType: type,
        style: {
          marginLeft: 'auto'
        }
      }, label);
    };

    return _this;
  }

  (0, _createClass2["default"])(AssetCard, [{
    key: "renderCardDragHandle",
    value: function renderCardDragHandle() {
      var _this$props = this.props,
          cardDragHandleComponent = _this$props.cardDragHandleComponent,
          isDragActive = _this$props.isDragActive,
          cardDragHandleProps = _this$props.cardDragHandleProps,
          withDragHandle = _this$props.withDragHandle;

      if (cardDragHandleComponent) {
        return cardDragHandleComponent;
      } else if (withDragHandle) {
        return /*#__PURE__*/_react["default"].createElement(_CardDragHandle["default"], (0, _extends2["default"])({
          isDragActive: isDragActive
        }, cardDragHandleProps), "Reorder entry");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cn;

      var _this$props2 = this.props,
          className = _this$props2.className,
          src = _this$props2.src,
          type = _this$props2.type,
          title = _this$props2.title,
          status = _this$props2.status,
          isLoading = _this$props2.isLoading,
          dropdownListElements = _this$props2.dropdownListElements,
          isDragActive = _this$props2.isDragActive,
          size = _this$props2.size,
          cardDragHandleProps = _this$props2.cardDragHandleProps,
          cardDragHandleComponent = _this$props2.cardDragHandleComponent,
          withDragHandle = _this$props2.withDragHandle,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "src", "type", "title", "status", "isLoading", "dropdownListElements", "isDragActive", "size", "cardDragHandleProps", "cardDragHandleComponent", "withDragHandle"]);
      var classNames = (0, _classnames["default"])(styles.AssetCard, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['AssetCard--drag-active'], isDragActive), (0, _defineProperty2["default"])(_cn, styles["AssetCard--size-".concat(size)], size), _cn), className);
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], (0, _extends2["default"])({
        className: classNames,
        padding: "none",
        title: title
      }, otherProps), isLoading ? /*#__PURE__*/_react["default"].createElement(_AssetCardSkeleton["default"], {
        size: size
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderCardDragHandle(), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['AssetCard__wrapper']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['AssetCard__header']
      }, status && this.renderStatus(status), dropdownListElements && /*#__PURE__*/_react["default"].createElement(_CardActions["default"], {
        className: styles['AssetCard__actions'],
        iconButtonProps: {
          onClick: function onClick(e) {
            return e.stopPropagation;
          }
        }
      }, dropdownListElements)), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['AssetCard__content']
      }, /*#__PURE__*/_react["default"].createElement(_Asset.Asset, {
        className: styles['AssetCard__asset'],
        src: src,
        title: title,
        type: type,
        status: status
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['ImgClass__wrapper']
      }, "CSS Classes", /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        className: styles['ImgClass__input'],
        disabled: false,
        id: "",
        isReadOnly: false,
        maxLength: 50,
        name: "",
        required: false,
        testId: "cf-ui-text-input",
        value: "",
        width: "full",
        willBlurOnEsc: true,
        withCopyButton: false,
        placeholder: "CSS Class Names eg. float-right w-48)"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://nerdcave.com/tailwind-cheat-sheet",
        target: "_blank"
      })))));
    }
  }]);
  return AssetCard;
}(_react.Component);

exports.AssetCard = AssetCard;
AssetCard.displayName = "AssetCard";
AssetCard.propTypes = {
  src: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  isLoading: _propTypes["default"].bool,
  dropdownListElements: _propTypes["default"].element,
  status: _propTypes["default"].oneOf(['archived', 'changed', 'draft', 'published']),
  type: _propTypes["default"].any,
  cardDragHandleComponent: _propTypes["default"].node,
  withDragHandle: _propTypes["default"].bool,
  cardDragHandleProps: _propTypes["default"].any,
  isDragActive: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['small', 'default'])
};
AssetCard.defaultProps = defaultProps;
var _default = AssetCard;
exports["default"] = _default;