"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CardActions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = _interopRequireDefault(require("../../Dropdown"));

var _IconButton = _interopRequireDefault(require("../../IconButton"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultProps = {
  testId: 'cf-ui-card-actions',
  isDisabled: false
};

var CardActions = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CardActions, _Component);

  var _super = _createSuper(CardActions);

  function CardActions() {
    var _this;

    (0, _classCallCheck2["default"])(this, CardActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isDropdownOpen: false
    };

    _this.handleClick = function (event) {
      _this.setState(function (prevState) {
        return {
          isDropdownOpen: !prevState.isDropdownOpen
        };
      });

      if (_this.props.iconButtonProps && _this.props.iconButtonProps.onClick) {
        event.stopPropagation();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(CardActions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          testId = _this$props.testId,
          iconButtonProps = _this$props.iconButtonProps,
          isDisabled = _this$props.isDisabled,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "testId", "iconButtonProps", "isDisabled"]);
      return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], (0, _extends2["default"])({
        onClose: function onClose() {
          _this2.setState({
            isDropdownOpen: false
          });
        },
        position: "bottom-right",
        className: className,
        isOpen: this.state.isDropdownOpen,
        testId: testId,
        toggleElement: /*#__PURE__*/_react["default"].createElement(_IconButton["default"], (0, _extends2["default"])({
          iconProps: {
            icon: 'MoreHorizontal'
          },
          buttonType: "secondary",
          disabled: isDisabled,
          label: "Actions"
        }, iconButtonProps, {
          onClick: function onClick(event) {
            event.preventDefault();

            _this2.handleClick(event);
          }
        }))
      }, otherProps), _react["default"].Children.map(children, function (listItems) {
        return _react["default"].Children.map(listItems, function (item) {
          // React.Children behaves differently if the object is a Fragment.
          var resolvedChildren = item.type === _react["default"].Fragment ? item.props.children : item;

          var enhancedChildren = _react["default"].Children.map(resolvedChildren, function (child) {
            return _react["default"].cloneElement(child, {
              onClick: function onClick(e) {
                if (child.props.onClick) {
                  child.props.onClick(e);
                }

                _this2.setState({
                  isDropdownOpen: false
                });

                e.stopPropagation();
              }
            });
          });

          return enhancedChildren;
        });
      }));
    }
  }]);
  return CardActions;
}(_react.Component);

exports.CardActions = CardActions;
CardActions.displayName = "CardActions";
CardActions.propTypes = {
  className: _propTypes["default"].string,
  iconButtonProps: _propTypes["default"].any,
  isDisabled: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)]).isRequired,
  testId: _propTypes["default"].string
};
CardActions.defaultProps = defaultProps;
var _default = CardActions;
exports["default"] = _default;