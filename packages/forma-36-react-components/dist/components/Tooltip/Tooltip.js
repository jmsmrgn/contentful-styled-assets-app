"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

var _classnames = _interopRequireDefault(require("classnames"));

var _forma36Tokens = _interopRequireDefault(require("@contentful/forma-36-tokens"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  "Tooltip__target-wrapper": "Tooltip__Tooltip__target-wrapper___Mtw42",
  "Tooltip": "Tooltip__Tooltip___32xAi",
  "Tooltip--hidden": "Tooltip__Tooltip--hidden___3uqEe",
  "Tooltip__arrow": "Tooltip__Tooltip__arrow___JuQmJ"
};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$containerElement = _ref.containerElement,
      ContainerElement = _ref$containerElement === void 0 ? 'span' : _ref$containerElement,
      content = _ref.content,
      id = _ref.id,
      isVisible = _ref.isVisible,
      maxWidth = _ref.maxWidth,
      _onBlur = _ref.onBlur,
      _onFocus = _ref.onFocus,
      _onMouseLeave = _ref.onMouseLeave,
      onMouseOver = _ref.onMouseOver,
      place = _ref.place,
      targetWrapperClassName = _ref.targetWrapperClassName,
      testId = _ref.testId,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "containerElement", "content", "id", "isVisible", "maxWidth", "onBlur", "onFocus", "onMouseLeave", "onMouseOver", "place", "targetWrapperClassName", "testId"]);

  var _useState = (0, _react.useState)(isVisible),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(getArrowPosition('bottom')),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      arrowPosition = _useState4[0],
      setArrowPosition = _useState4[1];

  var elementRef = (0, _react.useRef)(null);
  var popperRef = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      arrowRef = _useState6[0],
      setArrowRef = _useState6[1];

  var _usePopper = (0, _reactPopper.usePopper)(elementRef.current, popperRef.current, {
    placement: place,
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowRef
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }]
  }),
      popperStyles = _usePopper.styles,
      attributes = _usePopper.attributes,
      forceUpdate = _usePopper.forceUpdate; // necessary to update tooltip position in case the content is being updated


  (0, _react.useEffect)(function () {
    if (forceUpdate !== null) {
      forceUpdate();
    }
  }, [content, forceUpdate]);
  (0, _react.useEffect)(function () {
    if (attributes.popper) {
      var newPosition = getArrowPosition(attributes.popper['data-popper-placement']);
      setArrowPosition(newPosition);
    }
  }, [attributes.popper]);

  var arrowStyles = _objectSpread(_objectSpread(_objectSpread({}, popperStyles.arrow), arrowPosition), {}, {
    transform: 'rotate(45deg)'
  });

  var contentMaxWidth = typeof maxWidth === 'string' ? maxWidth : "".concat(maxWidth, "px");

  var contentStyles = _objectSpread({
    zIndex: _forma36Tokens["default"].zIndexTooltip,
    maxWidth: contentMaxWidth
  }, popperStyles.popper);

  if (!content) {
    return /*#__PURE__*/_react["default"].createElement(ContainerElement, {
      className: targetWrapperClassName
    }, children);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ContainerElement, (0, _extends2["default"])({
    ref: elementRef,
    className: targetWrapperClassName,
    onMouseEnter: function onMouseEnter(evt) {
      setShow(true);
      if (onMouseOver) onMouseOver(evt);
    },
    onMouseLeave: function onMouseLeave(evt) {
      setShow(false);
      if (_onMouseLeave) _onMouseLeave(evt);
    },
    onFocus: function onFocus(evt) {
      setShow(true);
      if (_onFocus) _onFocus(evt);
    },
    onBlur: function onBlur(evt) {
      setShow(false);
      if (_onBlur) _onBlur(evt);
    }
  }, otherProps), children), show && /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    id: id,
    ref: popperRef,
    "aria-hidden": show ? 'true' : 'false',
    role: "tooltip",
    style: contentStyles,
    className: (0, _classnames["default"])(styles.Tooltip, className, (0, _defineProperty2["default"])({}, styles['Tooltip--hidden'], !show)),
    "data-test-id": testId
  }, attributes.popper), content, /*#__PURE__*/_react["default"].createElement("span", {
    ref: setArrowRef,
    style: arrowStyles,
    className: styles.Tooltip__arrow
  })));
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  containerElement: _propTypes["default"].any,
  content: _propTypes["default"].node,
  id: _propTypes["default"].string,
  isVisible: _propTypes["default"].bool,
  maxWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  place: _propTypes["default"].any,
  targetWrapperClassName: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
Tooltip.defaultProps = {
  containerElement: 'span',
  isVisible: false,
  maxWidth: 360,
  testId: 'cf-ui-tooltip',
  place: 'auto'
};

function getArrowPosition(popperPlacement) {
  var centered = 'calc(50% - 5px)';
  var oppositeToThisSide = 'calc(100% - 5px)';
  var atThisSide = '-5px';
  var atStart = '10px';
  var atEnd = 'calc(100% - 20px)'; // the arrow is 10x10, that's why we need the -5px to correct its center

  switch (popperPlacement) {
    case 'top':
      return {
        top: oppositeToThisSide,
        left: centered
      };
    // arrow will be V

    case 'top-start':
      return {
        top: oppositeToThisSide,
        left: atStart
      };

    case 'top-end':
      return {
        top: oppositeToThisSide,
        left: atEnd
      };

    case 'right':
      return {
        top: centered,
        left: atThisSide
      };
    // arrow will be <

    case 'right-start':
      return {
        top: atStart,
        left: atThisSide
      };

    case 'right-end':
      return {
        top: atEnd,
        left: atThisSide
      };

    case 'left':
      return {
        top: centered,
        left: oppositeToThisSide
      };
    // arrow will be >

    case 'left-start':
      return {
        top: atStart,
        left: oppositeToThisSide
      };

    case 'left-end':
      return {
        top: atEnd,
        left: oppositeToThisSide
      };

    case 'bottom-start':
      return {
        top: atThisSide,
        left: atStart
      };
    // arrow will be ^

    case 'bottom-end':
      return {
        top: atThisSide,
        left: atEnd
      };

    default:
      return {
        top: atThisSide,
        left: centered
      };
  }
}

var _default = Tooltip;
exports["default"] = _default;