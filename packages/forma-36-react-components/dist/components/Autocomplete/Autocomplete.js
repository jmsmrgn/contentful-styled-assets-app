"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Autocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownList = _interopRequireDefault(require("../Dropdown/DropdownList"));

var _DropdownListItem = _interopRequireDefault(require("../Dropdown/DropdownListItem"));

var _SkeletonBodyText = _interopRequireDefault(require("../Skeleton/SkeletonBodyText"));

var _SkeletonContainer = _interopRequireDefault(require("../Skeleton/SkeletonContainer"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _utils = require("./utils");

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  "autocompleteDropdown": "Autocomplete__autocompleteDropdown___2Wsf1",
  "autocompleteInput": "Autocomplete__autocompleteInput___1WZ9i",
  "inputIconButton": "Autocomplete__inputIconButton___1ZS6d"
};
var TOGGLED_LIST = 'TOGGLED_LIST';
var NAVIGATED_ITEMS = 'NAVIGATED_ITEMS';
var QUERY_CHANGED = 'QUERY_CHANGED';
var ITEM_SELECTED = 'ITEM_SELECTED';
var Direction;

(function (Direction) {
  Direction[Direction["DOWN"] = 1] = "DOWN";
  Direction[Direction["UP"] = -1] = "UP";
})(Direction || (Direction = {}));

var initialState = {
  isOpen: false,
  query: '',
  highlightedItemIndex: null
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case TOGGLED_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: action.payload,
        highlightedItemIndex: null
      });

    case NAVIGATED_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: true,
        highlightedItemIndex: action.payload
      });

    case QUERY_CHANGED:
      return _objectSpread(_objectSpread({}, state), {}, {
        highlightedItemIndex: null,
        isOpen: true,
        query: action.payload
      });

    case ITEM_SELECTED:
      return _objectSpread({}, initialState);

    default:
      return state;
  }
};

var Autocomplete = function Autocomplete(_ref) {
  var children = _ref.children,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onQueryChange = _ref.onQueryChange,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Search' : _ref$name,
      width = _ref.width,
      className = _ref.className,
      maxHeight = _ref.maxHeight,
      isLoading = _ref.isLoading,
      _ref$emptyListMessage = _ref.emptyListMessage,
      emptyListMessage = _ref$emptyListMessage === void 0 ? 'No options' : _ref$emptyListMessage,
      _ref$noMatchesMessage = _ref.noMatchesMessage,
      noMatchesMessage = _ref$noMatchesMessage === void 0 ? 'No matches' : _ref$noMatchesMessage,
      willClearQueryOnClose = _ref.willClearQueryOnClose,
      dropdownProps = _ref.dropdownProps,
      renderToggleElement = _ref.renderToggleElement;
  var listRef = (0, _react.useRef)();
  var inputRef = (0, _react.useRef)();

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isOpen = _useReducer2$.isOpen,
      query = _useReducer2$.query,
      highlightedItemIndex = _useReducer2$.highlightedItemIndex,
      dispatch = _useReducer2[1];

  var toggleList = function toggleList(isOpen) {
    dispatch({
      type: TOGGLED_LIST,
      payload: isOpen
    });
  };

  var selectItem = function selectItem(item) {
    dispatch({
      type: ITEM_SELECTED
    });
    onQueryChange('');
    onChange(item);
  };

  var updateQuery = function updateQuery(value) {
    dispatch({
      type: QUERY_CHANGED,
      payload: value
    });
    onQueryChange(value);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var isEnter = event.keyCode === _utils.KEY_CODE.ENTER;
    var isTab = event.keyCode === _utils.KEY_CODE.TAB || event.keyCode === _utils.KEY_CODE.TAB && event.shiftKey;
    var hasUserSelection = highlightedItemIndex !== null;
    var lastIndex = items.length ? items.length - 1 : 0;
    var direction = getNavigationDirection(event);

    if (direction) {
      var newIndex = getNewIndex(highlightedItemIndex, direction, lastIndex);

      if (listRef.current) {
        scrollToItem(listRef.current, newIndex);
      }

      dispatch({
        type: NAVIGATED_ITEMS,
        payload: newIndex
      });
    } else if (isEnter && hasUserSelection) {
      var selected = items[highlightedItemIndex];
      selectItem(selected);
    } else if (isTab) {
      toggleList(false);
    }
  };

  var handleInputButtonClick = function handleInputButtonClick() {
    query ? updateQuery('') : toggleList();

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  var options = (0, _react.useMemo)(function () {
    return children(items).map(function (child, index) {
      return {
        child: child,
        option: items[index]
      };
    });
  }, [children, items]);
  var dropdownClassNames = (0, _classnames["default"])(styles.autocompleteDropdown, className);

  function renderDefaultToggleElement(toggleProps) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: styles.autocompleteInput
    }, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
      value: toggleProps.query,
      onChange: function onChange(e) {
        return toggleProps.onChange(e.target.value);
      },
      onFocus: toggleProps.onFocus,
      onKeyDown: toggleProps.onKeyDown,
      disabled: toggleProps.disabled,
      placeholder: toggleProps.placeholder,
      width: toggleProps.width,
      inputRef: toggleProps.inputRef,
      testId: "autocomplete.input",
      type: "search",
      autoComplete: "off",
      "aria-label": toggleProps.name
    }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      className: styles.inputIconButton,
      tabIndex: -1,
      buttonType: "muted",
      iconProps: {
        icon: toggleProps.query ? 'Close' : 'ChevronDown'
      },
      onClick: toggleProps.onToggle,
      label: toggleProps.query ? 'Clear' : 'Show list'
    }));
  }

  var toggleProps = {
    name: name,
    query: query,
    disabled: disabled,
    placeholder: placeholder,
    width: width,
    onChange: updateQuery,
    onFocus: function onFocus() {
      return toggleList(true);
    },
    onKeyDown: handleKeyDown,
    onToggle: handleInputButtonClick,
    inputRef: inputRef
  };
  var renderToggleElementFunction = renderToggleElement || renderDefaultToggleElement;
  return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], (0, _extends2["default"])({
    className: dropdownClassNames,
    isOpen: isOpen,
    onClose: function onClose() {
      willClearQueryOnClose && updateQuery('');
      dispatch({
        type: TOGGLED_LIST
      });
    },
    toggleElement: renderToggleElementFunction(toggleProps)
  }, dropdownProps), /*#__PURE__*/_react["default"].createElement(_DropdownList["default"], {
    testId: "autocomplete.dropdown-list",
    maxHeight: maxHeight
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: listRef
  }, !options.length && !isLoading && /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], {
    isDisabled: true,
    testId: "autocomplete.empty-list-message"
  }, query ? noMatchesMessage : emptyListMessage), isLoading ? /*#__PURE__*/_react["default"].createElement(OptionSkeleton, null) : options.map(function (_ref2, index) {
    var child = _ref2.child,
        option = _ref2.option;
    var isActive = index === highlightedItemIndex;
    return /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], {
      key: index,
      isActive: isActive,
      "data-selected": isActive // this should be coming from the component library
      ,
      onClick: function onClick() {
        return selectItem(option);
      },
      testId: "autocomplete.dropdown-list-item"
    }, child);
  }))));
};

exports.Autocomplete = Autocomplete;
Autocomplete.displayName = "Autocomplete";
Autocomplete.propTypes = {
  children: _propTypes["default"].func.isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onQueryChange: _propTypes["default"].func.isRequired,
  disabled: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  width: _propTypes["default"].oneOf(['small', 'medium', 'large', 'full']),
  className: _propTypes["default"].string,
  maxHeight: _propTypes["default"].number,
  isLoading: _propTypes["default"].bool,
  emptyListMessage: _propTypes["default"].string,
  noMatchesMessage: _propTypes["default"].string,
  willClearQueryOnClose: _propTypes["default"].bool,
  dropdownProps: _propTypes["default"].any,
  renderToggleElement: _propTypes["default"].func
};

function OptionSkeleton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    svgWidth: "200",
    svgHeight: 20
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 1
  }))), /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    svgWidth: "100",
    svgHeight: 20
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 1
  }))), /*#__PURE__*/_react["default"].createElement(_DropdownListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_SkeletonContainer["default"], {
    svgWidth: "150",
    svgHeight: 20
  }, /*#__PURE__*/_react["default"].createElement(_SkeletonBodyText["default"], {
    numberOfLines: 1
  }))));
}

function getNavigationDirection(event) {
  if (event.keyCode === _utils.KEY_CODE.ARROW_DOWN) {
    return Direction.DOWN;
  }

  if (event.keyCode === _utils.KEY_CODE.ARROW_UP) {
    return Direction.UP;
  }

  return null;
} // Get next navigation index based on current index and navigation direction


function getNewIndex(currentIndex, direction, lastIndex) {
  var isDown = direction === Direction.DOWN;
  var isUp = direction === Direction.UP;
  var hasNoUserSelection = currentIndex === null;
  var isLast = currentIndex === lastIndex;
  var isFirst = currentIndex === 0;

  if (isDown && (hasNoUserSelection || isLast)) {
    return 0;
  }

  if (isUp && (hasNoUserSelection || isFirst)) {
    return lastIndex;
  }

  return currentIndex + direction;
} // Find the DOM node at index and scroll if necessary


function scrollToItem(list, index) {
  if (!list || !list.children.length) {
    return;
  }

  var item = list.children[index];
  item.scrollIntoView({
    block: 'nearest'
  });
}

var _default = Autocomplete;
exports["default"] = _default;