"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Note = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _constants = require("../Icon/constants");

var _IconButton = _interopRequireDefault(require("../IconButton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "Note": "Note__Note___2eSKN",
  "Note--primary": "Note__Note--primary___-8-7D",
  "Note--negative": "Note__Note--negative___3fkwL",
  "Note--positive": "Note__Note--positive___3Omoh",
  "Note--warning": "Note__Note--warning___3X53I",
  "Note--hasCloseButton": "Note__Note--hasCloseButton___QFi6x",
  "Note__title": "Note__Note__title___2nwpx",
  "Note__info": "Note__Note__info___2m_-K",
  "Note__icon": "Note__Note__icon___20RqC",
  "Note__dismiss": "Note__Note__dismiss___1BXR6"
};
var Icons = {
  primary: _constants.iconName.InfoCircle,
  positive: _constants.iconName.CheckCircle,
  negative: _constants.iconName.Warning,
  warning: _constants.iconName.Warning
};
var defaultProps = {
  noteType: 'primary',
  testId: 'cf-ui-note'
};

var Note = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Note, _Component);

  var _super = _createSuper(Note);

  function Note() {
    (0, _classCallCheck2["default"])(this, Note);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Note, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this = this;

      var icon = Icons[this.props.noteType]; // eslint-disable-line @typescript-eslint/no-non-null-assertion

      if (!icon) {
        throw new Error("Intent ".concat(this.props.noteType, " is not supported in Note component."));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: this.props.style,
        className: (0, _classnames["default"])(styles.Note, this.props.className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, styles['Note--primary'], this.props.noteType === 'primary'), (0, _defineProperty2["default"])(_classNames, styles['Note--positive'], this.props.noteType === 'positive'), (0, _defineProperty2["default"])(_classNames, styles['Note--negative'], this.props.noteType === 'negative'), (0, _defineProperty2["default"])(_classNames, styles['Note--warning'], this.props.noteType === 'warning'), (0, _defineProperty2["default"])(_classNames, styles['Note--hasCloseButton'], this.props.hasCloseButton), _classNames)),
        "data-test-id": this.props.testId
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.Note__icon
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: icon,
        color: this.props.noteType
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.Note__info
      }, this.props.title && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.Note__title
      }, this.props.title), /*#__PURE__*/_react["default"].createElement("div", null, this.props.children)), this.props.hasCloseButton && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        buttonType: "secondary",
        iconProps: {
          icon: 'Close'
        },
        onClick: function onClick() {
          if (_this.props.onClose) {
            _this.props.onClose();
          }
        },
        testId: "cf-ui-note-close",
        label: "Dismiss",
        className: styles.Note__dismiss
      }));
    }
  }]);
  return Note;
}(_react.Component);

exports.Note = Note;
Note.displayName = "Note";
Note.propTypes = {
  noteType: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'warning']),
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  style: _propTypes["default"].any,
  testId: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  hasCloseButton: _propTypes["default"].bool,
  onClose: _propTypes["default"].any
};
Note.defaultProps = defaultProps;
var _default = Note;
exports["default"] = _default;