"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellContext = exports.contextOptions = void 0;

var _react = _interopRequireDefault(require("react"));

var contextOptions = {
  body: {
    name: 'body',
    element: 'td',
    offsetTop: 0
  },
  head: {
    name: 'head',
    element: 'th',
    offsetTop: 0
  }
};
exports.contextOptions = contextOptions;

var TableCellContext = _react["default"].createContext(contextOptions.body);

exports.TableCellContext = TableCellContext;