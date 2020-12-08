"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ArrowDown = function ArrowDown(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ArrowDown.displayName = "ArrowDown";
ArrowDown.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowDownTrimmed = function ArrowDownTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 10l5 5 5-5H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10v24H0V0z",
    fill: "none"
  }));
};

ArrowDownTrimmed.displayName = "ArrowDownTrimmed";
ArrowDownTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10 24"
};

var ArrowUp = function ArrowUp(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 14l5-5 5 5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ArrowUp.displayName = "ArrowUp";
ArrowUp.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowUpTrimmed = function ArrowUpTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 14l5-5 5 5H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10v24H0V0z",
    fill: "none"
  }));
};

ArrowUpTrimmed.displayName = "ArrowUpTrimmed";
ArrowUpTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10 24"
};

var Asset = function Asset(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.14 11.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
  })));
};

Asset.displayName = "Asset";
Asset.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AssetTrimmed = function AssetTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h18v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 5v14H2V5h14m0-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.1 11.9l-3 3.9L6 13.1 3 17h12l-3.9-5.1z"
  })));
};

AssetTrimmed.displayName = "AssetTrimmed";
AssetTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 24"
};

var Calendar = function Calendar(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 0a1 1 0 0 1 1 1v1h6V1a1 1 0 1 1 2 0v1h2.778A3.222 3.222 0 0 1 23 5.222v15.556A3.222 3.222 0 0 1 19.778 24H4.222A3.222 3.222 0 0 1 1 20.778V5.222A3.222 3.222 0 0 1 4.222 2H7V1a1 1 0 0 1 1-1zM7 4H4.222C3.547 4 3 4.547 3 5.222V9h18V5.222C21 4.547 20.453 4 19.778 4H17v1a1 1 0 1 1-2 0V4H9v1a1 1 0 0 1-2 0V4zm14 7H3v9.778C3 21.453 3.547 22 4.222 22h15.556c.675 0 1.222-.547 1.222-1.222V11z"
  }));
};

Calendar.displayName = "Calendar";
Calendar.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChatBubble = function ChatBubble(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ChatBubble.displayName = "ChatBubble";
ChatBubble.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChatBubbleTrimmed = function ChatBubbleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5 1.5h-12C.7 1.5 0 2.2 0 3v13.5l3-3h10.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }));
};

ChatBubbleTrimmed.displayName = "ChatBubbleTrimmed";
ChatBubbleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var CheckCircle = function CheckCircle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};

CheckCircle.displayName = "CheckCircle";
CheckCircle.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var CheckCircleTrimmed = function CheckCircleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zM6 12.8L2.2 9l1.1-1.1L6 10.6l5.7-5.7L12.8 6 6 12.8z"
  }));
};

CheckCircleTrimmed.displayName = "CheckCircleTrimmed";
CheckCircleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var ChevronDown = function ChevronDown(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0-.75h24v24H0z",
    fill: "none"
  }));
};

ChevronDown.displayName = "ChevronDown";
ChevronDown.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChevronDownTrimmed = function ChevronDownTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.1 5.9l3.4 3.4 3.4-3.4 1.1 1-4.5 4.5L0 6.9l1.1-1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h9v18H0V0z",
    fill: "none"
  }));
};

ChevronDownTrimmed.displayName = "ChevronDownTrimmed";
ChevronDownTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 9 18"
};

var ChevronLeft = function ChevronLeft(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ChevronLeft.displayName = "ChevronLeft";
ChevronLeft.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChevronLeftTrimmed = function ChevronLeftTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.6 5.6L4.5 4.5 0 9l4.5 4.5 1.1-1.1L2.1 9l3.5-3.4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h5.6v18H0V0z",
    fill: "none"
  }));
};

ChevronLeftTrimmed.displayName = "ChevronLeftTrimmed";
ChevronLeftTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 5.6 18"
};

var ChevronRight = function ChevronRight(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ChevronRight.displayName = "ChevronRight";
ChevronRight.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChevronRightTrimmed = function ChevronRightTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h5.6v18H0V0z",
    fill: "none"
  }));
};

ChevronRightTrimmed.displayName = "ChevronRightTrimmed";
ChevronRightTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 5.6 18"
};

var ChevronUp = function ChevronUp(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ChevronUp.displayName = "ChevronUp";
ChevronUp.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ChevronUpTrimmed = function ChevronUpTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.1 11.6l3.4-3.4 3.4 3.4L9 10.5 4.5 6 0 10.5l1.1 1.1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h9v18H0V0z",
    fill: "none"
  }));
};

ChevronUpTrimmed.displayName = "ChevronUpTrimmed";
ChevronUpTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 9 18"
};

var Clock = function Clock(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  }));
};

Clock.displayName = "Clock";
Clock.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ClockTrimmed = function ClockTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 5H9v6l5.25 3.15.75-1.23-4.5-2.67V5z"
  }));
};

ClockTrimmed.displayName = "ClockTrimmed";
ClockTrimmed.defaultProps = {
  viewBox: "0 0 20 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var Close = function Close(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Close.displayName = "Close";
Close.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CloseTrimmed = function CloseTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 6.4L12.6 5 7 10.6 1.4 5 0 6.4 5.6 12 0 17.6 1.4 19 7 13.4l5.6 5.6 1.4-1.4L8.4 12 14 6.4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14v24H0V0z",
    fill: "none"
  }));
};

CloseTrimmed.displayName = "CloseTrimmed";
CloseTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 24"
};

var Code = function Code(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
  }));
};

Code.displayName = "Code";
Code.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var CodeTrimmed = function CodeTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.5 12.5L2.1 9l3.4-3.4-1-1.1L0 9l4.5 4.5 1-1zm3.9 0L12.9 9 9.4 5.6l1.1-1.1L15 9l-4.5 4.5s-1-1-1.1-1z"
  }));
};

CodeTrimmed.displayName = "CodeTrimmed";
CodeTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var Copy = function Copy(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
  }));
};

Copy.displayName = "Copy";
Copy.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var CopyTrimmed = function CopyTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14.2v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5.8h-9C.7.8 0 1.4 0 2.2v10.5h1.5V2.2h9V.8zm2.3 3H4.5c-.8 0-1.5.6-1.5 1.4v10.5c0 .8.7 1.5 1.5 1.5h8.2c.8 0 1.5-.7 1.5-1.5V5.2c0-.8-.6-1.4-1.4-1.4zm0 12H4.5V5.2h8.2v10.6z"
  }));
};

CopyTrimmed.displayName = "CopyTrimmed";
CopyTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14.2 18"
};

var Cycle = function Cycle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Cycle.displayName = "Cycle";
Cycle.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
};

var CycleTrimmed = function CycleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 4V1L4 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 16 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L1.24 7.74A7.93 7.93 0 0 0 0 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",
    fillRule: "nonzero"
  }));
};

CycleTrimmed.displayName = "CycleTrimmed";
CycleTrimmed.defaultProps = {
  viewBox: "0 0 16 24",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "1.414"
};

var Delete = function Delete(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Delete.displayName = "Delete";
Delete.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DeleteTrimmed = function DeleteTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H1v12zM14 4h-3.5l-1-1h-5l-1 1H0v2h14V4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M-5 0h24v24H-5V0z"
  }));
};

DeleteTrimmed.displayName = "DeleteTrimmed";
DeleteTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  viewBox: "0 0 14 24"
};

var Download = function Download(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Download.displayName = "Download";
Download.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var DownloadTrimmed = function DownloadTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 6.8h-3V2.2H3v4.5H0L5.2 12l5.3-5.2zM0 13.5V15h10.5v-1.5H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10.5v18H0V0z",
    fill: "none"
  }));
};

DownloadTrimmed.displayName = "DownloadTrimmed";
DownloadTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10.5 18"
};

var Drag = function Drag(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

Drag.displayName = "Drag";
Drag.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DragTrimmed = function DragTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 4 0 4.9 0 6s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

DragTrimmed.displayName = "DragTrimmed";
DragTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10 24"
};

var Edit = function Edit(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Edit.displayName = "Edit";
Edit.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var EditTrimmed = function EditTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 12.9v2.8h2.8l8.3-8.3-2.8-2.8L0 12.9zm13.3-7.6c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0L9.1 3.8l2.8 2.8c0 .1 1.4-1.3 1.4-1.3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.5v18H0V0z",
    fill: "none"
  }));
};

EditTrimmed.displayName = "EditTrimmed";
EditTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.5 18"
};

var EmbeddedEntryBlock = function EmbeddedEntryBlock(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 15H3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM19.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.6 23H6.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM17.6 3H6.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z"
  }));
};

EmbeddedEntryBlock.displayName = "EmbeddedEntryBlock";
EmbeddedEntryBlock.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EmbeddedEntryBlockTrimmed = function EmbeddedEntryBlockTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 15H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h18c.5 0 1 .4 1 1v4c0 .6-.5 1-1 1zM17.5 7h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM17.5 19h-15c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h15c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM15.6 23H4.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 3H4.4c-.2 0-.4-.2-.4-.4V1.4c0-.2.2-.4.4-.4h11.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z"
  }));
};

EmbeddedEntryBlockTrimmed.displayName = "EmbeddedEntryBlockTrimmed";
EmbeddedEntryBlockTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "24",
  viewBox: "0 0 20 24"
};

var EmbeddedEntryInline = function EmbeddedEntryInline(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.4 17H6.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM22.5 11h-21c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM12.6 21H1.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 6H1.4c-.2 0-.4-.2-.4-.4V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"
  }));
};

EmbeddedEntryInline.displayName = "EmbeddedEntryInline";
EmbeddedEntryInline.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EmbeddedEntryInlineTrimmed = function EmbeddedEntryInlineTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.4 17H5.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM21.5 11H.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM11.6 21H.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM14.6 6H.4C.2 6 0 5.8 0 5.6V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM18.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"
  }));
};

EmbeddedEntryInlineTrimmed.displayName = "EmbeddedEntryInlineTrimmed";
EmbeddedEntryInlineTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "24",
  viewBox: "0 0 22 24"
};

var Entry = function Entry(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 16h8v2H8zM8 12h8v2H8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
  }));
};

Entry.displayName = "Entry";
Entry.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EntryTrimmed = function EntryTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h16v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 16h8v2H4zM4 12h8v2H4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H2V4h7v5h5v11z"
  }));
};

EntryTrimmed.displayName = "EntryTrimmed";
EntryTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 24"
};

var ErrorCircle = function ErrorCircle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
  }));
};

ErrorCircle.displayName = "ErrorCircle";
ErrorCircle.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ErrorCircleTrimmed = function ErrorCircleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8v-1.5h1.5v1.5zm0-3H6.8V5.2h1.5v4.6z"
  }));
};

ErrorCircleTrimmed.displayName = "ErrorCircleTrimmed";
ErrorCircleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var ExternalLink = function ExternalLink(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ExternalLink.displayName = "ExternalLink";
ExternalLink.defaultProps = {
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var ExternalLinkTrimmed = function ExternalLinkTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 14.2H1.5V3.8h5.2V2.2H1.5C.7 2.2 0 2.9 0 3.8v10.5c0 .8.7 1.5 1.5 1.5H12c.8 0 1.5-.7 1.5-1.5V9H12v5.2zm-3.8-12v1.5h2.7l-7.4 7.4 1.1 1.1L12 4.8v2.7h1.5V2.2H8.2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.5v18H0V0z",
    fill: "none"
  }));
};

ExternalLinkTrimmed.displayName = "ExternalLinkTrimmed";
ExternalLinkTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.5 18"
};

var FaceHappy = function FaceHappy(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

FaceHappy.displayName = "FaceHappy";
FaceHappy.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var FaceHappyTrimmed = function FaceHappyTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.7-7.5l.8.7.8-.8.8.8.8-.8-1.6-1.5-1.6 1.6zm-3 0l.8.7.8-.8-1.6-1.5-1.6 1.6.8.8.8-.8zm2.3 5.6c1.7 0 3.2-1.1 3.8-2.6H3.7c.6 1.5 2.1 2.6 3.8 2.6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }));
};

FaceHappyTrimmed.displayName = "FaceHappyTrimmed";
FaceHappyTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var Filter = function Filter(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Filter.displayName = "Filter";
Filter.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var FilterTrimmed = function FilterTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.2 13.5h3V12h-3v1.5zM0 4.5V6h13.5V4.5H0zm2.2 5.3h9V8.2h-9v1.6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.5v18H0V0z",
    fill: "none"
  }));
};

FilterTrimmed.displayName = "FilterTrimmed";
FilterTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.5 18"
};

var Folder = function Folder(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Folder.displayName = "Folder";
Folder.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var FolderCreate = function FolderCreate(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"
  }));
};

FolderCreate.displayName = "FolderCreate";
FolderCreate.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var FolderCreateTrimmed = function FolderCreateTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm-.7 6h-2.2v2.2H9v-2.2H6.8V9H9V6.8h1.5V9h2.2v1.5z"
  }));
};

FolderCreateTrimmed.displayName = "FolderCreateTrimmed";
FolderCreateTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var FolderOpen = function FolderOpen(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
  }));
};

FolderOpen.displayName = "FolderOpen";
FolderOpen.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var FolderOpenTrimmed = function FolderOpenTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm0 9h-12V6h12v7.5z"
  }));
};

FolderOpenTrimmed.displayName = "FolderOpenTrimmed";
FolderOpenTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var FolderTrimmed = function FolderTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-6L6 3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }));
};

FolderTrimmed.displayName = "FolderTrimmed";
FolderTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var FormatBold = function FormatBold(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

FormatBold.displayName = "FormatBold";
FormatBold.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FormatBoldTrimmed = function FormatBoldTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.6 10.8c1-.7 1.6-1.8 1.6-2.8 0-2.3-1.8-4-4-4H0v14h7c2.1 0 3.7-1.7 3.7-3.8.1-1.5-.8-2.8-2.1-3.4zM3 6.5h3c.8 0 1.5.7 1.5 1.5S6.8 9.5 6 9.5H3v-3zm3.5 9H3v-3h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10.8v24H0V0z",
    fill: "none"
  }));
};

FormatBoldTrimmed.displayName = "FormatBoldTrimmed";
FormatBoldTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10.8 24"
};

var FormatItalic = function FormatItalic(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }));
};

FormatItalic.displayName = "FormatItalic";
FormatItalic.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FormatItalicTrimmed = function FormatItalicTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h12v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 4v3h2.2l-3.4 8H0v3h8v-3H5.8l3.4-8H12V4H4z"
  }));
};

FormatItalicTrimmed.displayName = "FormatItalicTrimmed";
FormatItalicTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 24"
};

var FormatUnderlined = function FormatUnderlined(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"
  }));
};

FormatUnderlined.displayName = "FormatUnderlined";
FormatUnderlined.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FormatUnderlinedTrimmed = function FormatUnderlinedTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 17c3.3 0 6-2.7 6-6V3h-2.5v8c0 1.9-1.6 3.5-3.5 3.5S3.5 12.9 3.5 11V3H1v8c0 3.3 2.7 6 6 6zm-7 2v2h14v-2H0z"
  }));
};

FormatUnderlinedTrimmed.displayName = "FormatUnderlinedTrimmed";
FormatUnderlinedTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 24"
};

var Heading = function Heading(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.8 5v5.5H9.2V5H6.4v14h2.8v-6.1h5.6V19h2.8V5z"
  }));
};

Heading.displayName = "Heading";
Heading.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var HeadingOne = function HeadingOne(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.7 5v5.5H6.1V5H3.3v14h2.8v-6.1h5.6V19h2.8V5zM18.6 19v-6.3L17.1 14l-1-1.4 2.8-2.1h1.8V19h-2.1z"
  }));
};

HeadingOne.displayName = "HeadingOne";
HeadingOne.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var HeadingOneTrimmed = function HeadingOneTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8zM11.5 14.2V9.5l-1.1 1-.8-1 2.1-1.6H13v6.4h-1.5z"
  }));
};

HeadingOneTrimmed.displayName = "HeadingOneTrimmed";
HeadingOneTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13 18"
};

var HeadingTrimmed = function HeadingTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h8.4v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8z"
  }));
};

HeadingTrimmed.displayName = "HeadingTrimmed";
HeadingTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 8.4 18"
};

var HeadingTwo = function HeadingTwo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.8 5v5.5H5.3V5H2.4v14h2.9v-6.1h5.5V19h2.9V5zM15.4 19v-1.7l3.3-3c.2-.2.4-.4.5-.6.1-.2.2-.4.2-.7 0-.3-.1-.6-.3-.7-.2-.2-.4-.3-.8-.3-.3 0-.6.1-.8.4-.2.2-.3.5-.4.9l-1.9-.3c0-.4.2-.8.4-1.2.2-.3.4-.6.7-.9.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.4 0 .8.1 1.1.2.4.1.7.3 1 .5.3.2.5.5.7.8.2.3.3.7.3 1.2 0 .3 0 .6-.1.8-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.4-.6.5l-2 1.8h3.5V19h-6.2z"
  }));
};

HeadingTwo.displayName = "HeadingTwo";
HeadingTwo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var HeadingTwoTrimmed = function HeadingTwoTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14.4v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.3 3.8v4.1H2.2V3.8H0V14.2h2.2V9.7h4.1v4.5h2.2V3.8zM9.8 14.2V13l2.5-2.2c.2-.1.3-.3.4-.4.1-.2.2-.3.2-.5s-.1-.4-.2-.5c-.3-.3-.5-.4-.8-.4-.2 0-.5.1-.6.3-.1.1-.2.4-.3.7l-1.4-.2c0-.3.2-.6.3-.9.1-.2.3-.5.5-.7.2-.1.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.8.1.3.1.5.2.8.4.2.2.4.4.5.6s.2.5.2.9c0 .2 0 .5-.1.6-.1.1-.2.4-.2.5-.1.2-.2.3-.4.5-.2.1-.3.3-.4.4L11.8 13h2.6v1.3H9.8z"
  }));
};

HeadingTwoTrimmed.displayName = "HeadingTwoTrimmed";
HeadingTwoTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14.4 18"
};

var HelpCircle = function HelpCircle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
  }));
};

HelpCircle.displayName = "HelpCircle";
HelpCircle.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var HelpCircleTrimmed = function HelpCircleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 12.7H6.8v-1.5h1.5v1.5zm1.6-5.8l-.7.7c-.5.5-.9 1-.9 2.1H6.8v-.4c0-.8.3-1.6.9-2.1l.9-.9c.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5S6 5.9 6 6.8H4.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .6-.3 1.2-.7 1.6z"
  }));
};

HelpCircleTrimmed.displayName = "HelpCircleTrimmed";
HelpCircleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var HorizontalRule = function HorizontalRule(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.6 11.2h16.8v1.7H3.6z"
  }));
};

HorizontalRule.displayName = "HorizontalRule";
HorizontalRule.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var HorizontalRuleTrimmed = function HorizontalRuleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h12.6v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 8.4h12.6v1.3H0z"
  }));
};

HorizontalRuleTrimmed.displayName = "HorizontalRuleTrimmed";
HorizontalRuleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12.6 18"
};

var InfoCircle = function InfoCircle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  }));
};

InfoCircle.displayName = "InfoCircle";
InfoCircle.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var InfoCircleTrimmed = function InfoCircleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8V8.2h1.5v4.6zm0-6H6.8V5.2h1.5v1.6z"
  }));
};

InfoCircleTrimmed.displayName = "InfoCircleTrimmed";
InfoCircleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var Language = function Language(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
  }));
};

Language.displayName = "Language";
Language.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
};

var Link = function Link(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
  }));
};

Link.displayName = "Link";
Link.defaultProps = {
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var LinkTrimmed = function LinkTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.4 9c0-1.3 1-2.3 2.3-2.3h3V5.2h-3C1.7 5.2 0 6.9 0 9s1.7 3.8 3.8 3.8h3v-1.4h-3c-1.3-.1-2.4-1.1-2.4-2.4zm3.1.8h6V8.2h-6v1.6zm6.7-4.6h-3v1.4h3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3h-3v1.4h3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.6-3.8-3.6z"
  }));
};

LinkTrimmed.displayName = "LinkTrimmed";
LinkTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var ListBulleted = function ListBulleted(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

ListBulleted.displayName = "ListBulleted";
ListBulleted.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var ListBulletedTrimmed = function ListBulletedTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.1 7.9C.5 7.9 0 8.4 0 9s.5 1.1 1.1 1.1S2.2 9.6 2.2 9s-.5-1.1-1.1-1.1zm0-4.5C.5 3.4 0 3.9 0 4.5s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.3 1.8h10.5v-1.5H3.4v1.5zm0-4.4h10.5V8.2H3.4v1.6zm0-6v1.5h10.5V3.8H3.4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.9v18H0V0z",
    fill: "none"
  }));
};

ListBulletedTrimmed.displayName = "ListBulletedTrimmed";
ListBulletedTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.9 18"
};

var ListNumbered = function ListNumbered(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ListNumbered.displayName = "ListNumbered";
ListNumbered.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var ListNumberedTrimmed = function ListNumberedTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 12.8h1.5v.4H.8v.8h.8v.4H0v.6h2.2v-3H0v.8zM.8 6h.8V3H0v.8h.8V6zM0 8.2h1.3L0 9.8v.7h2.2v-.7H.9l1.3-1.6v-.7H0v.7zm3.8-4.4v1.5h10.5V3.8H3.8zm0 10.4h10.5v-1.5H3.8v1.5zm0-4.4h10.5V8.2H3.8v1.6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14.2v18H0V0z",
    fill: "none"
  }));
};

ListNumberedTrimmed.displayName = "ListNumberedTrimmed";
ListNumberedTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14.2 18"
};

var Lock = function Lock(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
  }));
};

Lock.displayName = "Lock";
Lock.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var LockTrimmed = function LockTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h12v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 6h-.7V4.5C9.8 2.4 8.1.7 6 .7S2.2 2.4 2.2 4.5V6h-.7C.7 6 0 6.7 0 7.5V15c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5zM6 12.8c-.8 0-1.5-.7-1.5-1.5S5.2 9.8 6 9.8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM8.3 6H3.7V4.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3V6z"
  }));
};

LockTrimmed.displayName = "LockTrimmed";
LockTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 18"
};

var Logout = function Logout(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2H5zM15.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 0 1 0-1.414z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"
  }));
};

Logout.displayName = "Logout";
Logout.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var LooksOne = function LooksOne(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"
  }));
};

LooksOne.displayName = "LooksOne";
LooksOne.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LooksOneTrimmed = function LooksOneTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h18v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9V9H7V7h4v10z"
  }));
};

LooksOneTrimmed.displayName = "LooksOneTrimmed";
LooksOneTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 24"
};

var LooksTwo = function LooksTwo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9V7h4a2 2 0 0 1 2 2v2z"
  }));
};

LooksTwo.displayName = "LooksTwo";
LooksTwo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LooksTwoTrimmed = function LooksTwoTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h18v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2H8v2h4v2H6v-4c0-1.1.9-2 2-2h2V9H6V7h4c1.1 0 2 .9 2 2v2z"
  }));
};

LooksTwoTrimmed.displayName = "LooksTwoTrimmed";
LooksTwoTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 24"
};

var Menu = function Menu(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }));
};

Menu.displayName = "Menu";
Menu.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var MenuTrimmed = function MenuTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.5v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 13.5h13.5V12H0v1.5zm0-3.7h13.5V8.2H0v1.6zm0-5.3V6h13.5V4.5H0z"
  }));
};

MenuTrimmed.displayName = "MenuTrimmed";
MenuTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.5 18"
};

var MoreHorizontal = function MoreHorizontal(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

MoreHorizontal.displayName = "MoreHorizontal";
MoreHorizontal.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var MoreHorizontalTrimmed = function MoreHorizontalTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h12v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.5 7.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm9 0C9.7 7.5 9 8.2 9 9s.7 1.5 1.5 1.5S12 9.8 12 9s-.7-1.5-1.5-1.5zM6 7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S7.5 9.8 7.5 9 6.8 7.5 6 7.5z"
  }));
};

MoreHorizontalTrimmed.displayName = "MoreHorizontalTrimmed";
MoreHorizontalTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 18"
};

var MoreVertical = function MoreVertical(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

MoreVertical.displayName = "MoreVertical";
MoreVertical.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var MoreVerticalTrimmed = function MoreVerticalTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h3v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.5 6C2.3 6 3 5.3 3 4.5S2.3 3 1.5 3 0 3.7 0 4.5.7 6 1.5 6zm0 1.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm0 4.5c-.8 0-1.5.7-1.5 1.5S.7 15 1.5 15 3 14.3 3 13.5 2.3 12 1.5 12z"
  }));
};

MoreVerticalTrimmed.displayName = "MoreVerticalTrimmed";
MoreVerticalTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 3 18"
};

var Person = function Person(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }));
};

Person.displayName = "Person";
Person.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
};

var Plus = function Plus(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Plus.displayName = "Plus";
Plus.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var PlusCircle = function PlusCircle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
  }));
};

PlusCircle.displayName = "PlusCircle";
PlusCircle.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var PlusCircleTrimmed = function PlusCircleTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm3.7 8.3h-3v3H6.8v-3h-3V8.2h3v-3h1.5v3h3v1.6z"
  }));
};

PlusCircleTrimmed.displayName = "PlusCircleTrimmed";
PlusCircleTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var PlusTrimmed = function PlusTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 9.8H6v4.5H4.5V9.8H0V8.2h4.5V3.8H6v4.5h4.5v1.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10.5v18H0V0z",
    fill: "none"
  }));
};

PlusTrimmed.displayName = "PlusTrimmed";
PlusTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10.5 18"
};

var Preview = function Preview(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }));
};

Preview.displayName = "Preview";
Preview.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "18",
  height: "18"
};

var Quote = function Quote(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Quote.displayName = "Quote";
Quote.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};

var QuoteTrimmed = function QuoteTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.8 12.8H3l1.5-3V5.2H0v4.5h2.2L.8 12.8zm6 0H9l1.5-3V5.2H6v4.5h2.2l-1.4 3.1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h10.5v18H0V0z",
    fill: "none"
  }));
};

QuoteTrimmed.displayName = "QuoteTrimmed";
QuoteTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 10.5 18"
};

var Receipt = function Receipt(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Receipt.displayName = "Receipt";
Receipt.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ReceiptTrimmed = function ReceiptTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.2 12.8h-9v-1.5h9v1.5zm0-3h-9V8.2h9v1.6zm0-3h-9V5.2h9v1.6zM0 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1L9 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1v-15l-1.1 1.1-1.1-1.1-1.1 1.1L9 1.5 7.9 2.6 6.8 1.5 5.6 2.6 4.5 1.5 3.4 2.6 2.2 1.5 1.1 2.6 0 1.5v15z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.5v18H0V0z",
    fill: "none"
  }));
};

ReceiptTrimmed.displayName = "ReceiptTrimmed";
ReceiptTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.5 18"
};

var References = function References(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"
  }));
};

References.displayName = "References";
References.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
};

var Release = function Release(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.426 1.5C3.865.569 4.68 0 5.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C23 8 23 8 23 8.455v13.09C23 22.857 21.902 24 20.571 24H3.43C2.097 24 1 22.856 1 21.546V8.455C1 8 1 8 1.066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 0 1 .03-.068zM3.838 6H11V2H5.69c-.152 0-.302.046-.441.324L3.839 6zM13 2v4h7.162l-1.426-3.715-.002-.006C18.688 2.156 18.48 2 18.311 2H13zM3.429 8C3.236 8 3 8.214 3 8.455v13.09c0 .241.236.455.429.455H20.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H3.43zM13 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1z"
  }));
};

Release.displayName = "Release";
Release.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var ReleaseTrimmed = function ReleaseTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.426 1.5C2.865.569 3.68 0 4.689 0h12.622c.995 0 1.95.666 2.294 1.57v.003s2.262 5.71 2.329 6.069C22 8 22 8 22 8.455v13.09C22 22.857 20.902 24 19.571 24H2.43C1.097 24 0 22.856 0 21.546V8.455C0 8 0 8 .066 7.642c.067-.358 2.33-6.074 2.33-6.074a.997.997 0 0 1 .03-.068zM2.838 6H10V2H4.69c-.152 0-.302.046-.441.324L2.839 6zM12 2v4h7.162l-1.426-3.715-.002-.006C17.688 2.156 17.48 2 17.311 2H12zM2.429 8C2.236 8 2 8.214 2 8.455v13.09c0 .241.236.455.429.455H19.57c.193 0 .429-.214.429-.454V8.455c0-.241-.236-.455-.429-.455H2.43zM12 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1z"
  }));
};

ReleaseTrimmed.displayName = "ReleaseTrimmed";
ReleaseTrimmed.defaultProps = {
  width: "22",
  height: "24",
  viewBox: "0 0 22 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var Search = function Search(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Search.displayName = "Search";
Search.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var SearchTrimmed = function SearchTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.4 10.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S0 4.4 0 7.1 2.2 12 4.9 12c1.2 0 2.3-.4 3.2-1.2l.1.2v.6l3.8 3.7 1.1-1.1-3.7-3.7zm-4.5 0C3 10.5 1.5 9 1.5 7.1S3 3.8 4.9 3.8s3.4 1.5 3.4 3.4-1.6 3.3-3.4 3.3z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h13.1v18H0V0z",
    fill: "none"
  }));
};

SearchTrimmed.displayName = "SearchTrimmed";
SearchTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 13.1 18"
};

var Settings = function Settings(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
  }));
};

Settings.displayName = "Settings";
Settings.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var SettingsTrimmed = function SettingsTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h14.6v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.9 9.7c0-.2.1-.5.1-.7s0-.5-.1-.7L14.5 7c.1-.1.2-.3.1-.5L13 4c-.1-.2-.3-.2-.5-.2l-1.9.8c-.3-.4-.7-.6-1.2-.8l-.3-2c0-.2-.2-.3-.4-.3h-3c-.2 0-.3.1-.4.3l-.3 2c-.3.2-.7.4-1.1.7L2 3.8c-.2-.1-.4 0-.4.2L.1 6.5c-.1.2-.1.4 0 .5l1.6 1.2c0 .2-.1.5-.1.7s0 .5.1.7L.1 11c-.1.1-.1.3 0 .5L1.6 14c.1.2.3.2.5.2l1.9-.8c.4.3.8.5 1.3.7l.3 2c0 .2.2.3.4.3h3c.2 0 .3-.1.4-.3l.3-2c.5-.2.9-.4 1.3-.7l1.9.8c.2.1.4 0 .5-.2l1.5-2.6c.1-.2.1-.4-.1-.5l-1.9-1.2zm-5.6 1.9c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6S9.9 7.6 9.9 9s-1.2 2.6-2.6 2.6z"
  }));
};

SettingsTrimmed.displayName = "SettingsTrimmed";
SettingsTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14.6 18"
};

var ShoppingCart = function ShoppingCart(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

ShoppingCart.displayName = "ShoppingCart";
ShoppingCart.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ShoppingCartTrimmed = function ShoppingCartTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.5 13.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S6 15.8 6 15s-.7-1.5-1.5-1.5zM0 1.5V3h1.5l2.7 5.7-1 1.8c-.1.2-.2.5-.2.7 0 .8.7 1.5 1.5 1.5h9v-1.5H4.8c-.1 0-.2-.1-.2-.2v-.1l.7-1.2h5.6c.6 0 1.1-.3 1.3-.8L14.9 4c.1 0 .1-.1.1-.2 0-.5-.3-.8-.8-.8h-11l-.7-1.5H0zm12 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }));
};

ShoppingCartTrimmed.displayName = "ShoppingCartTrimmed";
ShoppingCartTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var Star = function Star(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

Star.displayName = "Star";
Star.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var StarTrimmed = function StarTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 13l4.6 2.8-1.2-5.3L15 6.9l-5.4-.4-2.1-5-2.1 5-5.4.4 4.1 3.5-1.2 5.3L7.5 13z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h15v18H0V0z",
    fill: "none"
  }));
};

StarTrimmed.displayName = "StarTrimmed";
StarTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 18"
};

var Tags = function Tags(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }));
};

Tags.displayName = "Tags";
Tags.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
};

var Text = function Text(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24 24H0V0h24v24z",
    id: "a"
  })), /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: "b"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    overflow: "visible",
    xlinkHref: "#a"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    clipPath: "url(#b)",
    d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
  }));
};

Text.displayName = "Text";
Text.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
};

var TextTrimmed = function TextTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("path", {
    id: "a",
    d: "M0 0h14.2v18H0z"
  })), /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: "b"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    xlinkHref: "#a",
    overflow: "visible"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 3v2.2h3.8v9H6v-9h3.8V3H0zm14.2 3.8H7.5V9h2.2v5.2H12V9h2.2V6.8z",
    clipPath: "url(#b)"
  }));
};

TextTrimmed.displayName = "TextTrimmed";
TextTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 14.2 18"
};

var ThumbDown = function ThumbDown(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
  }));
};

ThumbDown.displayName = "ThumbDown";
ThumbDown.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ThumbDownTrimmed = function ThumbDownTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h16.5v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 2.2H3.8c-.6 0-1.2.4-1.4.9L.1 8.5c-.1.1-.1.3-.1.5v1.5c0 .8.7 1.5 1.5 1.5h4.7l-.7 3.4v.2c0 .3.1.6.3.8l.8.8 4.9-4.9c.3-.3.4-.6.4-1.1V3.8c.1-.9-.6-1.6-1.4-1.6zm3 0v9h3v-9h-3z"
  }));
};

ThumbDownTrimmed.displayName = "ThumbDownTrimmed";
ThumbDownTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16.5 18"
};

var ThumbUp = function ThumbUp(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
  }));
};

ThumbUp.displayName = "ThumbUp";
ThumbUp.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var ThumbUpTrimmed = function ThumbUpTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h16.5v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 15.8h3v-9H0v9zm16.5-8.3c0-.8-.7-1.5-1.5-1.5h-4.7l.7-3.4v-.2c0-.3-.1-.6-.3-.8L9.9.8l-5 4.9c-.2.3-.4.6-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.8c.6 0 1.2-.4 1.4-.9l2.3-5.3c.1-.2.1-.4.1-.5V7.5h-.1z"
  }));
};

ThumbUpTrimmed.displayName = "ThumbUpTrimmed";
ThumbUpTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16.5 18"
};

var Users = function Users(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
  }));
};

Users.displayName = "Users";
Users.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var UsersTrimmed = function UsersTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h16.5v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.2 8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S9 4.8 9 6s1 2.2 2.2 2.2zm-6 0c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S3 4.8 3 6s1 2.2 2.2 2.2zm0 1.6c-1.7 0-5.2.8-5.2 2.6v1.9h10.5v-1.9c0-1.8-3.5-2.6-5.3-2.6zm6 0h-.7c.9.6 1.5 1.5 1.5 2.6v1.9h4.5v-1.9c0-1.8-3.5-2.6-5.3-2.6z"
  }));
};

UsersTrimmed.displayName = "UsersTrimmed";
UsersTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16.5 18"
};

var Warning = function Warning(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
  }));
};

Warning.displayName = "Warning";
Warning.defaultProps = {
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
};

var WarningTrimmed = function WarningTrimmed(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h16.5v18H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 15.8h16.5L8.2 1.5 0 15.8zm9-2.3H7.5V12H9v1.5zm0-3H7.5v-3H9v3z"
  }));
};

WarningTrimmed.displayName = "WarningTrimmed";
WarningTrimmed.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16.5 18"
};

var Workflows = function Workflows(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.6 4l-4.4 4.533h3.3v7.934c0 1.246-.99 2.266-2.2 2.266s-2.2-1.02-2.2-2.266V8.533C13.1 6.03 11.131 4 8.7 4S4.3 6.029 4.3 8.533v7.934H1L5.4 21l4.4-4.533H6.5V8.533c0-1.246.99-2.266 2.2-2.266s2.2 1.02 2.2 2.266v7.934C10.9 18.97 12.869 21 15.3 21s4.4-2.029 4.4-4.533V8.533H23z"
  }));
};

Workflows.displayName = "Workflows";
Workflows.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var styles = {
  "Icon": "Icon__Icon___38Epv",
  "Icon--tiny": "Icon__Icon--tiny___V4Pr9",
  "Icon--small": "Icon__Icon--small___1yGZK",
  "Icon--medium": "Icon__Icon--medium___3Pezi",
  "Icon--large": "Icon__Icon--large___215R6",
  "Icon--trimmed": "Icon__Icon--trimmed___1CmZL",
  "Icon--positive": "Icon__Icon--positive___1V4nP",
  "Icon--negative": "Icon__Icon--negative___1dled",
  "Icon--warning": "Icon__Icon--warning___39Bnz",
  "Icon--secondary": "Icon__Icon--secondary___1ztcw",
  "Icon--muted": "Icon__Icon--muted___3egnD",
  "Icon--white": "Icon__Icon--white___3GVPJ"
};
var iconComponents = {
  ArrowDown: ArrowDown,
  ArrowDownTrimmed: ArrowDownTrimmed,
  ArrowUp: ArrowUp,
  ArrowUpTrimmed: ArrowUpTrimmed,
  Asset: Asset,
  AssetTrimmed: AssetTrimmed,
  Calendar: Calendar,
  ChatBubble: ChatBubble,
  ChatBubbleTrimmed: ChatBubbleTrimmed,
  CheckCircle: CheckCircle,
  CheckCircleTrimmed: CheckCircleTrimmed,
  ChevronDown: ChevronDown,
  ChevronDownTrimmed: ChevronDownTrimmed,
  ChevronLeft: ChevronLeft,
  ChevronLeftTrimmed: ChevronLeftTrimmed,
  ChevronRight: ChevronRight,
  ChevronRightTrimmed: ChevronRightTrimmed,
  ChevronUp: ChevronUp,
  ChevronUpTrimmed: ChevronUpTrimmed,
  Clock: Clock,
  ClockTrimmed: ClockTrimmed,
  Close: Close,
  CloseTrimmed: CloseTrimmed,
  Code: Code,
  CodeTrimmed: CodeTrimmed,
  Copy: Copy,
  CopyTrimmed: CopyTrimmed,
  Cycle: Cycle,
  CycleTrimmed: CycleTrimmed,
  Delete: Delete,
  DeleteTrimmed: DeleteTrimmed,
  Download: Download,
  DownloadTrimmed: DownloadTrimmed,
  Drag: Drag,
  DragTrimmed: DragTrimmed,
  Edit: Edit,
  EditTrimmed: EditTrimmed,
  EmbeddedEntryBlock: EmbeddedEntryBlock,
  EmbeddedEntryBlockTrimmed: EmbeddedEntryBlockTrimmed,
  EmbeddedEntryInline: EmbeddedEntryInline,
  EmbeddedEntryInlineTrimmed: EmbeddedEntryInlineTrimmed,
  Entry: Entry,
  EntryTrimmed: EntryTrimmed,
  ErrorCircle: ErrorCircle,
  ErrorCircleTrimmed: ErrorCircleTrimmed,
  ExternalLink: ExternalLink,
  ExternalLinkTrimmed: ExternalLinkTrimmed,
  FaceHappy: FaceHappy,
  FaceHappyTrimmed: FaceHappyTrimmed,
  Filter: Filter,
  FilterTrimmed: FilterTrimmed,
  Folder: Folder,
  FolderCreate: FolderCreate,
  FolderCreateTrimmed: FolderCreateTrimmed,
  FolderOpen: FolderOpen,
  FolderOpenTrimmed: FolderOpenTrimmed,
  FolderTrimmed: FolderTrimmed,
  FormatBold: FormatBold,
  FormatBoldTrimmed: FormatBoldTrimmed,
  FormatItalic: FormatItalic,
  FormatItalicTrimmed: FormatItalicTrimmed,
  FormatUnderlined: FormatUnderlined,
  FormatUnderlinedTrimmed: FormatUnderlinedTrimmed,
  Heading: Heading,
  HeadingOne: HeadingOne,
  HeadingOneTrimmed: HeadingOneTrimmed,
  HeadingTrimmed: HeadingTrimmed,
  HeadingTwo: HeadingTwo,
  HeadingTwoTrimmed: HeadingTwoTrimmed,
  HelpCircle: HelpCircle,
  HelpCircleTrimmed: HelpCircleTrimmed,
  HorizontalRule: HorizontalRule,
  HorizontalRuleTrimmed: HorizontalRuleTrimmed,
  InfoCircle: InfoCircle,
  InfoCircleTrimmed: InfoCircleTrimmed,
  Language: Language,
  Link: Link,
  LinkTrimmed: LinkTrimmed,
  ListBulleted: ListBulleted,
  ListBulletedTrimmed: ListBulletedTrimmed,
  ListNumbered: ListNumbered,
  ListNumberedTrimmed: ListNumberedTrimmed,
  Lock: Lock,
  LockTrimmed: LockTrimmed,
  Logout: Logout,
  LooksOne: LooksOne,
  LooksOneTrimmed: LooksOneTrimmed,
  LooksTwo: LooksTwo,
  LooksTwoTrimmed: LooksTwoTrimmed,
  Menu: Menu,
  MenuTrimmed: MenuTrimmed,
  MoreHorizontal: MoreHorizontal,
  MoreHorizontalTrimmed: MoreHorizontalTrimmed,
  MoreVertical: MoreVertical,
  MoreVerticalTrimmed: MoreVerticalTrimmed,
  Person: Person,
  Plus: Plus,
  PlusCircle: PlusCircle,
  PlusCircleTrimmed: PlusCircleTrimmed,
  PlusTrimmed: PlusTrimmed,
  Preview: Preview,
  Quote: Quote,
  QuoteTrimmed: QuoteTrimmed,
  Receipt: Receipt,
  ReceiptTrimmed: ReceiptTrimmed,
  References: References,
  Release: Release,
  ReleaseTrimmed: ReleaseTrimmed,
  Search: Search,
  SearchTrimmed: SearchTrimmed,
  Settings: Settings,
  SettingsTrimmed: SettingsTrimmed,
  ShoppingCart: ShoppingCart,
  ShoppingCartTrimmed: ShoppingCartTrimmed,
  Star: Star,
  StarTrimmed: StarTrimmed,
  Tags: Tags,
  Text: Text,
  TextTrimmed: TextTrimmed,
  ThumbDown: ThumbDown,
  ThumbDownTrimmed: ThumbDownTrimmed,
  ThumbUp: ThumbUp,
  ThumbUpTrimmed: ThumbUpTrimmed,
  Users: Users,
  UsersTrimmed: UsersTrimmed,
  Warning: Warning,
  WarningTrimmed: WarningTrimmed,
  Workflows: Workflows
};
var defaultProps = {
  testId: 'cf-ui-icon',
  size: 'small',
  color: 'primary'
};

var Icon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    (0, _classCallCheck2["default"])(this, Icon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var _cn;

      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          size = _this$props.size,
          color = _this$props.color,
          testId = _this$props.testId,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "icon", "size", "color", "testId"]);
      var classNames = (0, _classnames["default"])(styles.Icon, (_cn = {}, (0, _defineProperty2["default"])(_cn, styles["Icon--".concat(size)], size), (0, _defineProperty2["default"])(_cn, styles["Icon--".concat(color)], color), (0, _defineProperty2["default"])(_cn, styles['Icon--trimmed'], icon.toLowerCase().includes('trimmed')), _cn), className);
      var Element = iconComponents[icon];
      return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({
        "data-test-id": testId,
        className: classNames
      }, otherProps));
    }
  }]);
  return Icon;
}(_react.Component);

exports.Icon = Icon;
Icon.displayName = "Icon";
Icon.propTypes = {
  size: _propTypes["default"].oneOf(['tiny', 'small', 'medium', 'large']),
  color: _propTypes["default"].oneOf(['primary', 'positive', 'negative', 'warning', 'secondary', 'muted', 'white']),
  style: _propTypes["default"].any,
  icon: _propTypes["default"].any.isRequired,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string
};
Icon.defaultProps = defaultProps;
var _default = Icon;
exports["default"] = _default;