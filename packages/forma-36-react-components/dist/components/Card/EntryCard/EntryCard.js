"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EntryCard = void 0;

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

var _truncate = _interopRequireDefault(require("truncate"));

var _Card = _interopRequireDefault(require("../Card"));

var _CardActions = _interopRequireDefault(require("../CardActions"));

var _Tag = _interopRequireDefault(require("../../Tag"));

var _EntryCardSkeleton = _interopRequireDefault(require("./EntryCardSkeleton"));

var _CardDragHandle = _interopRequireDefault(require("../CardDragHandle"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "EntryCard": "EntryCard__EntryCard___2kIVv",
  "EntryCard--size-default": "EntryCard__EntryCard--size-default___ahhv9",
  "EntryCard--size-small": "EntryCard__EntryCard--size-small___wmiCz",
  "EntryCard--size-auto": "EntryCard__EntryCard--size-auto___roGvN",
  "EntryCard__wrapper": "EntryCard__EntryCard__wrapper___2i20k",
  "EntryCard--drag-active": "EntryCard__EntryCard--drag-active___26ZqT",
  "EntryCard--is-loading": "EntryCard__EntryCard--is-loading___310RH",
  "EntryCard__meta": "EntryCard__EntryCard__meta___3BSN4",
  "EntryCard__content-type": "EntryCard__EntryCard__content-type___77aij",
  "EntryCard__actions": "EntryCard__EntryCard__actions___1yMP3",
  "EntryCard__content": "EntryCard__EntryCard__content___1pcqO",
  "EntryCard__body": "EntryCard__EntryCard__body___21HhK",
  "EntryCard__title": "EntryCard__EntryCard__title___2q3bn",
  "EntryCard__description": "EntryCard__EntryCard__description___11s4-",
  "EntryCard__thumbnail": "EntryCard__EntryCard__thumbnail___3mEp5"
};
var defaultProps = {
  title: 'Untitled',
  testId: 'cf-ui-entry-card',
  size: 'default'
};

var EntryCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EntryCard, _Component);

  var _super = _createSuper(EntryCard);

  function EntryCard() {
    var _this;

    (0, _classCallCheck2["default"])(this, EntryCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isDropdownOpen: false
    };

    _this.renderTitle = function (size, title) {
      if (!title) {
        return;
      }

      var truncatedTitle = (0, _truncate["default"])(title, 255, {});
      return /*#__PURE__*/_react["default"].createElement("h1", {
        title: title.length > 255 ? title : '',
        className: styles.EntryCard__title,
        "data-test-id": "title"
      }, truncatedTitle);
    };

    _this.renderDescription = function (size, description) {
      if (!description || size === 'small') {
        return;
      }

      var truncatedDescription = (0, _truncate["default"])(description, 95, {});
      return /*#__PURE__*/_react["default"].createElement("p", {
        className: styles.EntryCard__description
      }, truncatedDescription);
    };

    _this.renderThumbnail = function (size, thumbnailElement) {
      if (!thumbnailElement || size === 'small') {
        return;
      }

      return /*#__PURE__*/_react["default"].createElement("figure", {
        className: styles.EntryCard__thumbnail
      }, thumbnailElement);
    };

    _this.renderStatus = function (status) {
      var label;
      var type;

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
        tagType: type
      }, label);
    };

    return _this;
  }

  (0, _createClass2["default"])(EntryCard, [{
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
      var _this$props2 = this.props,
          className = _this$props2.className,
          title = _this$props2.title,
          onClick = _this$props2.onClick,
          description = _this$props2.description,
          contentType = _this$props2.contentType,
          status = _this$props2.status,
          statusIcon = _this$props2.statusIcon,
          thumbnailElement = _this$props2.thumbnailElement,
          loading = _this$props2.loading,
          dropdownListElements = _this$props2.dropdownListElements,
          isDragActive = _this$props2.isDragActive,
          size = _this$props2.size,
          cardDragHandleComponent = _this$props2.cardDragHandleComponent,
          cardDragHandleProps = _this$props2.cardDragHandleProps,
          withDragHandle = _this$props2.withDragHandle,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "title", "onClick", "description", "contentType", "status", "statusIcon", "thumbnailElement", "loading", "dropdownListElements", "isDragActive", "size", "cardDragHandleComponent", "cardDragHandleProps", "withDragHandle"]);
      var classNames = (0, _classnames["default"])(styles.EntryCard, styles["EntryCard--size-".concat(size)], (0, _defineProperty2["default"])({}, styles['EntryCard--drag-active'], isDragActive), className);
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], (0, _extends2["default"])({
        className: classNames,
        onClick: !loading ? onClick : undefined,
        padding: "none"
      }, otherProps), loading ? /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.EntryCard__wrapper
      }, /*#__PURE__*/_react["default"].createElement(_EntryCardSkeleton["default"], null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderCardDragHandle(), /*#__PURE__*/_react["default"].createElement("article", {
        className: styles.EntryCard__wrapper
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.EntryCard__meta
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntryCard__content-type'],
        "data-test-id": "content-type"
      }, contentType), statusIcon && typeof statusIcon === 'string' ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: statusIcon,
        color: "muted",
        className: "f36-margin-right--xs"
      }) : statusIcon, status && this.renderStatus(status), dropdownListElements && /*#__PURE__*/_react["default"].createElement(_CardActions["default"], {
        className: styles['EntryCard__actions'],
        iconButtonProps: {
          onClick: function onClick(e) {
            return e.stopPropagation;
          }
        }
      }, dropdownListElements)), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.EntryCard__content
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.EntryCard__body
      }, this.renderTitle(size, title), this.renderDescription(size, description)), this.renderThumbnail(size, thumbnailElement))))));
    }
  }]);
  return EntryCard;
}(_react.Component);

exports.EntryCard = EntryCard;
EntryCard.displayName = "EntryCard";
EntryCard.propTypes = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  contentType: _propTypes["default"].node,
  status: _propTypes["default"].oneOf(['archived', 'changed', 'draft', 'published']),
  statusIcon: _propTypes["default"].node,
  thumbnailElement: _propTypes["default"].node,
  loading: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  dropdownListElements: _propTypes["default"].element,
  cardDragHandleComponent: _propTypes["default"].node,
  withDragHandle: _propTypes["default"].bool,
  cardDragHandleProps: _propTypes["default"].any,
  isDragActive: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['default', 'small', 'auto']).isRequired
};
EntryCard.defaultProps = defaultProps;
var _default = EntryCard;
exports["default"] = _default;