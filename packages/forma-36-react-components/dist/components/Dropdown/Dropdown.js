"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = Dropdown;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPopper = require("react-popper");

var _DropdownListItem = _interopRequireDefault(require("./DropdownListItem/DropdownListItem"));

var _DropdownContainer = _interopRequireDefault(require("./DropdownContainer"));

var styles = {
  "Dropdown": "Dropdown__Dropdown___nAsJ-"
};
/**
 * Popper.js modifier to give the popper element the full width of the reference
 */

var sameWidth = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: function fn(_ref) {
    var state = _ref.state;
    state.styles.popper.width = "".concat(state.rects.reference.width, "px");
  },
  effect: function effect(_ref2) {
    var state = _ref2.state;
    var reference = state.elements.reference;
    state.elements.popper.style.width = "".concat(reference.offsetWidth, "px");
    return function () {};
  }
};

/**
 * Helper method to map our current Dropdown position props to Popper.js
 * placements.
 *
 * @todo: Maybe we can use the Popper placements in the next breaking change?
 */
var mapPositionTypeToPlacement = function mapPositionTypeToPlacement(position) {
  switch (position) {
    case 'bottom-left':
      return 'bottom-start';

    case 'bottom-right':
      return 'bottom-end';

    case 'right':
      return 'right-start';

    case 'left':
      return 'left-start';

    case 'top-left':
      return 'top-start';

    case 'top-right':
      return 'top-end';

    default:
      return position;
  }
};

function Dropdown(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      dropdownContainerClassName = _ref3.dropdownContainerClassName,
      getContainerRef = _ref3.getContainerRef,
      isAutoalignmentEnabled = _ref3.isAutoalignmentEnabled,
      isFullWidth = _ref3.isFullWidth,
      isOpenProp = _ref3.isOpen,
      onClose = _ref3.onClose,
      position = _ref3.position,
      submenuToggleLabel = _ref3.submenuToggleLabel,
      testId = _ref3.testId,
      toggleElement = _ref3.toggleElement,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref3, ["children", "className", "dropdownContainerClassName", "getContainerRef", "isAutoalignmentEnabled", "isFullWidth", "isOpen", "onClose", "position", "submenuToggleLabel", "testId", "toggleElement"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      referenceElement = _useState2[0],
      setReferenceElement = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      popperElement = _useState4[0],
      setPopperElement = _useState4[1];

  var _useState5 = (0, _react.useState)(isOpenProp),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var placement = mapPositionTypeToPlacement(position);

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    placement: placement,
    modifiers: [isFullWidth ? sameWidth : {}, isAutoalignmentEnabled !== undefined ? {
      name: 'preventOverflow',
      options: {
        mainAxis: isAutoalignmentEnabled
      }
    } : {}, isAutoalignmentEnabled === false ? {
      name: 'flip',
      options: {
        fallbackPlacements: []
      }
    } : {}]
  }),
      attributes = _usePopper.attributes,
      forceUpdate = _usePopper.forceUpdate,
      popperStyles = _usePopper.styles;

  var classNames = (0, _classnames["default"])(styles['Dropdown'], className);
  var containerTestId = testId ? "".concat(testId, "-container") : testId;
  (0, _react.useEffect)(function () {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);
  (0, _react.useEffect)(function () {
    if (forceUpdate) {
      forceUpdate();
    }
  }, [children, forceUpdate]);

  var openSubmenu = function openSubmenu(isOpen) {
    if (submenuToggleLabel) {
      setIsOpen(isOpen);
    }
  };

  var close = (0, _react.useCallback)(function () {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  }, [onClose, setIsOpen]);
  var handleEscapeKey = (0, _react.useCallback)(function (event) {
    if (event.code === 'Escape') {
      event.stopPropagation();
      close();
    }
  }, [close]);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey, true);
      return function () {
        document.removeEventListener('keydown', handleEscapeKey, true);
      };
    }
  }, [handleEscapeKey, isOpen]);
  return submenuToggleLabel ? /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], (0, _extends2["default"])({
    testId: testId,
    submenuToggleLabel: submenuToggleLabel,
    onEnter: function onEnter() {
      return setIsOpen(true);
    },
    onLeave: function onLeave() {
      return setIsOpen(false);
    },
    ref: setReferenceElement
  }, otherProps), toggleElement && _react["default"].cloneElement(toggleElement, {
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen
  }), isOpen && /*#__PURE__*/_react["default"].createElement(_DropdownContainer["default"], (0, _extends2["default"])({
    className: dropdownContainerClassName,
    getRef: getContainerRef,
    isOpen: isOpen,
    onClose: onClose,
    openSubmenu: openSubmenu,
    position: position,
    ref: setPopperElement,
    style: popperStyles.popper,
    submenu: true
  }, attributes.popper), children)) : /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    "data-test-id": testId,
    className: classNames,
    ref: setReferenceElement
  }, otherProps), toggleElement && _react["default"].cloneElement(toggleElement, {
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen
  }), isOpen && /*#__PURE__*/_react["default"].createElement(_DropdownContainer["default"], (0, _extends2["default"])({
    className: dropdownContainerClassName,
    getRef: getContainerRef,
    isOpen: isOpen,
    onClose: onClose,
    openSubmenu: openSubmenu,
    position: position,
    ref: setPopperElement,
    style: popperStyles.popper,
    submenu: false,
    testId: containerTestId
  }, attributes.popper), children));
}

Dropdown.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  dropdownContainerClassName: _propTypes["default"].string,
  getContainerRef: _propTypes["default"].func,
  isAutoalignmentEnabled: _propTypes["default"].bool,
  isFullWidth: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  onClose: _propTypes["default"].any,
  position: _propTypes["default"].oneOf(['top', 'right', 'left', 'bottom-left', 'bottom-right', 'top-right', 'top-left']),
  submenuToggleLabel: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  toggleElement: _propTypes["default"].element
};
Dropdown.defaultProps = {
  testId: 'cf-ui-dropdown',
  position: 'bottom-left',
  isAutoalignmentEnabled: true,
  isOpen: false,
  getContainerRef: function getContainerRef() {}
};
var _default = Dropdown;
exports["default"] = _default;