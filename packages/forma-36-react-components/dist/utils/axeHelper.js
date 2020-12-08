"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jestAxe = require("jest-axe");

var axe = (0, _jestAxe.configureAxe)({
  rules: {
    region: {
      enabled: false
    }
  }
});
var _default = axe;
exports["default"] = _default;