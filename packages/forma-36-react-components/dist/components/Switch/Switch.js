"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Switch = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

var _classnames = _interopRequireDefault(require("classnames"));

var styles = {
  "Switch__wrapper": "Switch__Switch__wrapper___1kkJg",
  "Switch": "Switch__Switch___bJH7R",
  "Switch--checked": "Switch__Switch--checked___3CVQe",
  "Switch--disabled": "Switch__Switch--disabled___4AE9X",
  "Switch__label": "Switch__Switch__label___2S5bb",
  "Switch__label--disabled": "Switch__Switch__label--disabled___2C2Sn"
};

var Switch = function Switch(props) {
  var _classNames;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(styles['Switch__wrapper'], props.className)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onClick: onToggle,
    onKeyUp: onKeyUp,
    defaultChecked: props.isChecked,
    disabled: props.isDisabled,
    className: (0, _classnames["default"])(styles['Switch'], (_classNames = {}, (0, _defineProperty2["default"])(_classNames, styles['Switch--checked'], props.isChecked), (0, _defineProperty2["default"])(_classNames, styles['Switch--disabled'], props.isDisabled), _classNames)),
    id: props.id
  }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    className: (0, _classnames["default"])(styles['Switch__label'], (0, _defineProperty2["default"])({}, styles['Switch__label--disabled'], props.isDisabled)),
    htmlFor: props.id
  }, props.labelText));

  function onToggle() {
    if (props.onToggle) {
      props.onToggle(!props.isChecked);
    }
  }

  function onKeyUp(e) {
    if (props.onToggle && e.key === 'Enter') {
      props.onToggle(!props.isChecked);
    }
  }
};

exports.Switch = Switch;
Switch.propTypes = {
  onToggle: _propTypes["default"].func,
  isChecked: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  labelText: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired
};
var _default = Switch;
exports["default"] = _default;