"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Asset: true,
  AssetIcon: true
};
Object.defineProperty(exports, "Asset", {
  enumerable: true,
  get: function get() {
    return _Asset.Asset;
  }
});
Object.defineProperty(exports, "AssetIcon", {
  enumerable: true,
  get: function get() {
    return _AssetIcon.AssetIcon;
  }
});

var _Asset = require("./Asset");

Object.keys(_Asset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Asset[key];
    }
  });
});

var _AssetIcon = require("./AssetIcon/AssetIcon");