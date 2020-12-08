"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EntityListItem = void 0;

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

var _Tag = _interopRequireDefault(require("../../Tag"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _CardActions = _interopRequireDefault(require("../../Card/CardActions"));

var _SkeletonBodyText = _interopRequireDefault(require("../../Skeleton/SkeletonBodyText"));

var _SkeletonImage = _interopRequireDefault(require("../../Skeleton/SkeletonImage"));

var _SkeletonContainer = _interopRequireDefault(require("../../Skeleton/SkeletonContainer"));

var _TabFocusTrap = _interopRequireDefault(require("../../TabFocusTrap"));

var _CardDragHandle = _interopRequireDefault(require("../../Card/CardDragHandle"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "EntityListItem": "EntityListItem__EntityListItem___29x4C",
  "EntityListItem--drag-active": "EntityListItem__EntityListItem--drag-active___1qF1k",
  "EntityListItem__focus-trap": "EntityListItem__EntityListItem__focus-trap___Hm8Et",
  "EntityListItem__inner": "EntityListItem__EntityListItem__inner___3sE6J a11y__focus-outline--default___2hwb1",
  "EntityListItem__media": "EntityListItem__EntityListItem__media___33gWs",
  "EntityListItem__thumbnail": "EntityListItem__EntityListItem__thumbnail___1fjhs",
  "EntityListItem__content": "EntityListItem__EntityListItem__content___y2dN5 helpers__truncate___3ZEQa",
  "EntityListItem__heading": "EntityListItem__EntityListItem__heading___133Tm",
  "EntityListItem__title": "EntityListItem__EntityListItem__title___5sclg helpers__truncate___3ZEQa",
  "EntityListItem__content-type": "EntityListItem__EntityListItem__content-type___CoCul helpers__truncate___3ZEQa",
  "EntityListItem__description": "EntityListItem__EntityListItem__description___-sYiZ helpers__truncate___3ZEQa",
  "EntityListItem__meta": "EntityListItem__EntityListItem__meta___3xi8M",
  "EntityListItem__status": "EntityListItem__EntityListItem__status___8aOEj",
  "EntityListItem__actions": "EntityListItem__EntityListItem__actions___1BF6s"
};
var defaultProps = {
  testId: 'cf-ui-entity-list-item',
  entityType: 'entry',
  withThumbnail: true,
  isActionsDisabled: false
};

var EntityListItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EntityListItem, _Component);

  var _super = _createSuper(EntityListItem);

  function EntityListItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, EntityListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntityListItem__status']
      }, /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
        tagType: type
      }, label));
    };

    return _this;
  }

  (0, _createClass2["default"])(EntityListItem, [{
    key: "renderIcon",
    value: function renderIcon() {
      var entityType = this.props.entityType;
      var iconMap = {
        asset: 'Asset',
        entry: 'Entry',
        release: 'Release'
      };
      var icon = entityType ? iconMap[entityType.toLowerCase()] : 'Entry';
      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: icon,
        color: "muted"
      });
    }
  }, {
    key: "renderThumbnail",
    value: function renderThumbnail() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.thumbnailUrl,
        className: styles['EntityListItem__thumbnail'],
        alt: this.props.thumbnailAltText
      });
    }
  }, {
    key: "renderLoadingCard",
    value: function renderLoadingCard() {
      return /*#__PURE__*/_react["default"].createElement("article", {
        className: styles['EntityListItem__inner']
      }, /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
        clipId: "f36-entity-list-item-skeleton"
      }, /*#__PURE__*/_react["default"].createElement(_SkeletonImage["default"], {
        height: 46,
        width: 46
      }), /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
        numberOfLines: 2,
        lineHeight: 18,
        offsetLeft: 54
      })));
    }
  }, {
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
          testId = _this$props2.testId,
          title = _this$props2.title,
          description = _this$props2.description,
          contentType = _this$props2.contentType,
          entityType = _this$props2.entityType,
          withThumbnail = _this$props2.withThumbnail,
          thumbnailUrl = _this$props2.thumbnailUrl,
          thumbnailAltText = _this$props2.thumbnailAltText,
          status = _this$props2.status,
          dropdownListElements = _this$props2.dropdownListElements,
          withDragHandle = _this$props2.withDragHandle,
          isDragActive = _this$props2.isDragActive,
          isLoading = _this$props2.isLoading,
          onClick = _this$props2.onClick,
          href = _this$props2.href,
          cardDragHandleProps = _this$props2.cardDragHandleProps,
          cardDragHandleComponent = _this$props2.cardDragHandleComponent,
          isActionsDisabled = _this$props2.isActionsDisabled,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "testId", "title", "description", "contentType", "entityType", "withThumbnail", "thumbnailUrl", "thumbnailAltText", "status", "dropdownListElements", "withDragHandle", "isDragActive", "isLoading", "onClick", "href", "cardDragHandleProps", "cardDragHandleComponent", "isActionsDisabled"]);
      var classNames = (0, _classnames["default"])(styles.EntityListItem, className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['EntityListItem--drag-active'], isDragActive), (0, _defineProperty2["default"])(_cn, styles['EntityListItem--is-interactive'], onClick || href), _cn));
      var Element = onClick ? 'a' : 'article'; // archived assets will not be available on the CDN, resulting in a broken image src

      var isArchived = status === 'archived';
      var asIcon = isArchived || !thumbnailUrl;
      return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({}, otherProps, {
        className: classNames,
        "data-test-id": testId
      }), this.renderCardDragHandle(), isLoading ? this.renderLoadingCard() : /*#__PURE__*/_react["default"].createElement(Element, {
        className: styles['EntityListItem__inner'],
        onClick: onClick,
        href: href,
        tabIndex: onClick && 0,
        target: onClick && href ? '_blank' : undefined
      }, /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['EntityListItem__focus-trap']
      }, withThumbnail && /*#__PURE__*/_react["default"].createElement("figure", {
        className: styles['EntityListItem__media']
      }, asIcon ? this.renderIcon() : this.renderThumbnail()), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntityListItem__content']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntityListItem__heading']
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        className: styles['EntityListItem__title']
      }, title), contentType && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntityListItem__content-type']
      }, "(", contentType, ")")), description && /*#__PURE__*/_react["default"].createElement("p", {
        className: styles['EntityListItem__description']
      }, description)), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['EntityListItem__meta']
      }, status && this.renderStatus(status), dropdownListElements && /*#__PURE__*/_react["default"].createElement(_CardActions["default"], {
        className: styles['EntityListItem__actions'],
        isDisabled: isActionsDisabled,
        iconButtonProps: {
          onClick: function onClick(e) {
            return e.stopPropagation;
          }
        }
      }, dropdownListElements)))));
    }
  }]);
  return EntityListItem;
}(_react.Component);

exports.EntityListItem = EntityListItem;
EntityListItem.displayName = "EntityListItem";
EntityListItem.propTypes = {
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  contentType: _propTypes["default"].string,
  status: _propTypes["default"].oneOf(['archived', 'changed', 'draft', 'published']),
  withThumbnail: _propTypes["default"].bool,
  thumbnailUrl: _propTypes["default"].string,
  thumbnailAltText: _propTypes["default"].string,
  dropdownListElements: _propTypes["default"].element,
  withDragHandle: _propTypes["default"].bool,
  isDragActive: _propTypes["default"].bool,
  cardDragHandleComponent: _propTypes["default"].node,
  cardDragHandleProps: _propTypes["default"].any,
  entityType: _propTypes["default"].oneOf(['Entry', 'Asset', 'entry', 'asset', 'Release']),
  isLoading: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  href: _propTypes["default"].string,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  isActionsDisabled: _propTypes["default"].bool
};
EntityListItem.defaultProps = defaultProps;
var _default = EntityListItem;
exports["default"] = _default;