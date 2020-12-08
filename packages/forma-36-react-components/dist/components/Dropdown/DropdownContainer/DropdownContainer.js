"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var styles = {
  "DropdownContainer": "DropdownContainer__DropdownContainer___3WlJM"
};
var DropdownContainer = (0, _react.forwardRef)(function (_ref, refCallback) {
  var children = _ref.children,
      className = _ref.className,
      getRef = _ref.getRef,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      openSubmenu = _ref.openSubmenu,
      position = _ref.position,
      style = _ref.style,
      submenu = _ref.submenu,
      testId = _ref.testId,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "getRef", "isOpen", "onClose", "openSubmenu", "position", "style", "submenu", "testId"]);
  // We're not dealing with React RefObjects but with useState (because we
  // want to re-render on all changes)
  var setReference = refCallback;
  var dropdown = (0, _react.useRef)(null);
  var portalTarget = (0, _react.useRef)(document.createElement('div'));
  var classNames = (0, _classnames["default"])(className, styles['DropdownContainer']);
  var trackOutsideClick = (0, _react.useCallback)(function (event) {
    if (isOpen && onClose && dropdown.current && !dropdown.current.contains(event.target)) {
      event.stopImmediatePropagation();
      onClose();
    }
  }, [isOpen, onClose]);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      var portalContainer = portalTarget.current;
      document.body.appendChild(portalContainer);
      document.addEventListener('click', trackOutsideClick, {
        capture: true
      });
      return function () {
        document.body.removeChild(portalContainer);
        document.removeEventListener('click', trackOutsideClick, {
          capture: true
        });
      };
    }
  }, [isOpen, trackOutsideClick]);
  (0, _react.useEffect)(function () {
    if (getRef && dropdown.current) {
      getRef(dropdown.current);
    }
  }, [getRef]);

  var dropdownComponent = /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    className: classNames,
    "data-test-id": testId,
    onMouseEnter: function onMouseEnter() {
      if (openSubmenu) {
        openSubmenu(true);
      }
    },
    onFocus: function onFocus() {
      if (openSubmenu) {
        openSubmenu(true);
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (openSubmenu) {
        openSubmenu(false);
      }
    },
    ref: function ref(node) {
      setReference(node);
      dropdown.current = node;
    },
    style: style
  }), children);

  return submenu ? dropdownComponent : _reactDom["default"].createPortal(dropdownComponent, portalTarget.current);
});
exports.DropdownContainer = DropdownContainer;
DropdownContainer.displayName = 'DropdownContainer';
DropdownContainer.defaultProps = {
  testId: 'cf-ui-dropdown-portal',
  position: 'bottom-left',
  submenu: false
};
var _default = DropdownContainer;
exports["default"] = _default;