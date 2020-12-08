"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownListItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabFocusTrap = _interopRequireDefault(require("../../TabFocusTrap/TabFocusTrap"));

var styles = {
  "DropdownListItem": "DropdownListItem__DropdownListItem___LOUnP",
  "DropdownListItem__button": "DropdownListItem__DropdownListItem__button___1Po6h a11y__focus-outline--default___2hwb1",
  "DropdownListItem__submenu-toggle": "DropdownListItem__DropdownListItem__submenu-toggle___1SVw1",
  "DropdownListItem__button__inner-wrapper": "DropdownListItem__DropdownListItem__button__inner-wrapper___LFlkP",
  "DropdownListItem--disabled": "DropdownListItem__DropdownListItem--disabled___1txXv",
  "DropdownListItem--active": "DropdownListItem__DropdownListItem--active___21eet",
  "DropdownListItem--title": "DropdownListItem__DropdownListItem--title___CyVKB"
};
var DropdownListItem = (0, _react.forwardRef)(function (_ref, refCallback) {
  var _cn;

  var children = _ref.children,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      isTitle = _ref.isTitle,
      _onClick = _ref.onClick,
      onEnter = _ref.onEnter,
      onFocus = _ref.onFocus,
      onLeave = _ref.onLeave,
      style = _ref.style,
      submenuToggleLabel = _ref.submenuToggleLabel,
      testId = _ref.testId,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "isActive", "isDisabled", "isTitle", "onClick", "onEnter", "onFocus", "onLeave", "style", "submenuToggleLabel", "testId"]);
  var className = props.className,
      href = props.href,
      listItemRef = props.listItemRef,
      onMouseDown = props.onMouseDown,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["className", "href", "listItemRef", "onMouseDown"]); // We're not dealing with React RefObjects but with useState (because we
  // want to re-render on all changes)

  var setReference = refCallback;
  var classNames = (0, _classnames["default"])(styles['DropdownListItem'], className, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['DropdownListItem__submenu-toggle'], submenuToggleLabel || _onClick || onMouseDown || href), (0, _defineProperty2["default"])(_cn, styles['DropdownListItem--disabled'], isDisabled), (0, _defineProperty2["default"])(_cn, styles['DropdownListItem--active'], isActive), (0, _defineProperty2["default"])(_cn, styles['DropdownListItem--title'], isTitle), _cn));
  var renderListItem = (0, _react.useCallback)(function () {
    var _onMouseDown = props.onMouseDown,
        href = props.href,
        listItemRef = props.listItemRef,
        otherProps = (0, _objectWithoutProperties2["default"])(props, ["onMouseDown", "href", "listItemRef"]);
    var isClickable = _onClick || _onMouseDown || href;

    if (isClickable) {
      var Element = href ? 'a' : 'button';
      var buttonProps = {
        disabled: isDisabled,
        'aria-disabled': isDisabled
      };
      var linkProps = {
        href: href
      };
      return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        className: styles['DropdownListItem__button'],
        "data-test-id": "cf-ui-dropdown-list-item-button",
        onClick: function onClick(e) {
          if (!isDisabled && _onClick) {
            _onClick(e);
          }
        },
        onMouseDown: function onMouseDown(e) {
          if (!isDisabled && _onMouseDown) {
            _onMouseDown(e);
          }
        },
        type: "button"
      }, href ? linkProps : buttonProps, otherProps), /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
        className: styles['DropdownListItem__button__inner-wrapper']
      }, children));
    }

    return /*#__PURE__*/_react["default"].createElement("span", otherProps, children);
  }, [children, isDisabled, _onClick, props]);
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classNames,
    "data-test-id": testId,
    role: "menuitem",
    ref: function ref(node) {
      if (setReference) {
        setReference(node);
      }

      if (listItemRef) {
        listItemRef.current = node;
      }
    },
    style: style
  }, submenuToggleLabel ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    className: styles['DropdownListItem__button'],
    "data-test-id": "cf-ui-dropdown-submenu-toggle",
    onClick: _onClick,
    onFocus: onFocus,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    type: "button"
  }, otherProps), /*#__PURE__*/_react["default"].createElement(_TabFocusTrap["default"], {
    className: styles['DropdownListItem__button__inner-wrapper']
  }, submenuToggleLabel)), children) : renderListItem());
});
exports.DropdownListItem = DropdownListItem;
DropdownListItem.defaultProps = {
  testId: 'cf-ui-dropdown-list-item',
  isDisabled: false,
  isActive: false,
  isTitle: false
};
var _default = DropdownListItem;
exports["default"] = _default;