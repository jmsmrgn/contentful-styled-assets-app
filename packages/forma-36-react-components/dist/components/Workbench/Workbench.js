"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkbenchHeader = WorkbenchHeader;
exports.WorkbenchSidebar = WorkbenchSidebar;
exports.WorkbenchContent = WorkbenchContent;
exports["default"] = exports.Workbench = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Heading = _interopRequireDefault(require("../Typography/Heading"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Workbench": "Workbench__Workbench___THi9K",
  "Workbench__header": "Workbench__Workbench__header___2wo2E",
  "Workbench__header-back": "Workbench__Workbench__header-back___3qZkM",
  "Workbench__header-back-button": "Workbench__Workbench__header-back-button___1G3-G",
  "Workbench__header-icon": "Workbench__Workbench__header-icon___1kJlL",
  "Workbench__header-title": "Workbench__Workbench__header-title___3xp7b",
  "Workbench__header-title__heading": "Workbench__Workbench__header-title__heading___1Pe5h",
  "Workbench__header-description": "Workbench__Workbench__header-description___1LHbc",
  "Workbench__header-description__text": "Workbench__Workbench__header-description__text___2xjBG",
  "Workbench__header-actions": "Workbench__Workbench__header-actions___mJoSR",
  "Workbench__content-wrapper": "Workbench__Workbench__content-wrapper___3yWKi",
  "Workbench__content": "Workbench__Workbench__content___1U8bV",
  "Workbench__content-inner": "Workbench__Workbench__content-inner___36_Hx",
  "Workbench__content-inner--default": "Workbench__Workbench__content-inner--default___2wRXn",
  "Workbench__content-inner--text": "Workbench__Workbench__content-inner--text___7nfTX",
  "Workbench__content-inner--full": "Workbench__Workbench__content-inner--full___3eP1v",
  "Workbench__sidebar": "Workbench__Workbench__sidebar___3i7n0",
  "Workbench__sidebar--left": "Workbench__Workbench__sidebar--left___67OKM",
  "Workbench__sidebar--right": "Workbench__Workbench__sidebar--right___3f4XO"
};

function WorkbenchHeader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(styles['Workbench__header'], props.className),
    "data-test-id": props.testId
  }, props.onBack ? /*#__PURE__*/_react["default"].createElement("div", {
    className: styles['Workbench__header-back']
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      if (typeof props.onBack === 'function') {
        props.onBack();
      }
    },
    testId: "workbench-back-btn",
    className: styles['Workbench__header-back-button'],
    label: "Back",
    buttonType: "muted",
    iconProps: {
      size: 'large',
      icon: 'ChevronLeft'
    }
  })) : null, props.icon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: styles['Workbench__header-icon']
  }, props.icon) : null, props.title && /*#__PURE__*/_react["default"].createElement("div", {
    "data-test-id": "workbench-title",
    className: styles['Workbench__header-title']
  }, typeof props.title === 'string' ? /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    className: styles['Workbench__header-title__heading']
  }, props.title) : props.title), props.description && /*#__PURE__*/_react["default"].createElement("div", {
    "data-test-id": "workbench-description",
    className: styles['Workbench__header-description']
  }, typeof props.description === 'string' ? /*#__PURE__*/_react["default"].createElement("span", {
    className: styles['Workbench__header-description__text']
  }, props.description) : props.description), props.actions ? /*#__PURE__*/_react["default"].createElement("div", {
    className: styles['Workbench__header-actions']
  }, props.actions) : null);
}

WorkbenchHeader.displayName = "WorkbenchHeader";
WorkbenchHeader.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),
  icon: _propTypes["default"].element,
  actions: _propTypes["default"].element,
  onBack: _propTypes["default"].any,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
WorkbenchHeader.defaultProps = {
  testId: 'cf-ui-workbench-header'
};
WorkbenchHeader.displayName = 'Workbench.Header';

function WorkbenchSidebar(props) {
  var _cn;

  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-test-id": "".concat(props.testId).concat(props.position ? "-".concat(props.position) : ''),
    className: (0, _classnames["default"])(styles['Workbench__sidebar'], (_cn = {}, (0, _defineProperty2["default"])(_cn, styles['Workbench__sidebar--right'], props.position === 'right'), (0, _defineProperty2["default"])(_cn, styles['Workbench__sidebar--left'], props.position === 'left'), _cn), props.className)
  }, props.children);
}

WorkbenchSidebar.displayName = "WorkbenchSidebar";
WorkbenchSidebar.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  position: _propTypes["default"].oneOf(['left', 'right']),
  testId: _propTypes["default"].string
};
WorkbenchSidebar.defaultProps = {
  testId: 'cf-ui-workbench-sidebar'
};

function WorkbenchContent(props) {
  var _cn2;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(styles['Workbench__content'], props.className),
    "data-test-id": props.testId
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(styles['Workbench__content-inner'], (_cn2 = {}, (0, _defineProperty2["default"])(_cn2, styles['Workbench__content-inner--default'], props.type === 'default'), (0, _defineProperty2["default"])(_cn2, styles['Workbench__content-inner--text'], props.type === 'text'), (0, _defineProperty2["default"])(_cn2, styles['Workbench__content-inner--full'], props.type === 'full'), _cn2))
  }, props.children));
}

WorkbenchContent.displayName = "WorkbenchContent";
WorkbenchContent.propTypes = {
  children: _propTypes["default"].node.isRequired,
  type: _propTypes["default"].oneOf(['default', 'text', 'full']),
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
WorkbenchContent.defaultProps = {
  type: 'default',
  testId: 'cf-ui-workbench-content'
};
var defaultProps = {
  testId: 'cf-ui-workbench'
};

var Workbench = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Workbench, _Component);

  var _super = _createSuper(Workbench);

  function Workbench() {
    (0, _classCallCheck2["default"])(this, Workbench);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Workbench, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId"]);

      var childrenArray = _react["default"].Children.toArray(children);

      var header = [];
      var other = [];
      childrenArray.forEach( // eslint-disable-next-line
      function (item) {
        if (item && item.type && item.type.displayName === 'Workbench.Header') {
          header.push(item);
        } else {
          other.push(item);
        }
      });
      var classNames = (0, _classnames["default"])(styles.Workbench, className);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
        className: classNames,
        "data-test-id": testId
      }), header, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['Workbench__content-wrapper']
      }, other));
    }
  }]);
  return Workbench;
}(_react.Component);

exports.Workbench = Workbench;
Workbench.displayName = "Workbench";
Workbench.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  testId: _propTypes["default"].string
};
Workbench.defaultProps = defaultProps;
Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
Workbench.Sidebar = WorkbenchSidebar;
var _default = Workbench;
exports["default"] = _default;