"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIllustrationType = isIllustrationType;
exports["default"] = exports.Illustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Archive = function Archive(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    d: "M20.5 23.5h-17V.5h13l4 4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    d: "M11.5.5v2.001h1v5h-3V2.5M10.5 9.5h1M10.5 11.5h1M10.5 13.5h1M10.5 15.5h1M10.5 17.5h1M10.5 19.5h1M10.5 21.5h1M11.5 10.5h1M11.5 12.5h1M11.5 14.5h1M11.5 16.5h1M11.5 18.5h1M11.5 20.5h1"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.5 5.5H11"
  })));
};

Archive.displayName = "Archive";
Archive.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Audio = function Audio(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 12.5H7.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H9l3.5 3.5V9L9 12.5zM16 11c.834.688 1.5 1.835 1.5 3 0 1.163-.669 2.312-1.5 3M14 12.25c.562.409 1 1.001 1 1.75 0 .749-.438 1.341-1 1.75"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.5 23.5h-19V.5h13l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5.5v6h6"
  })));
};

Audio.displayName = "Audio";
Audio.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Code = function Code(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.7 23.5h-19V.5h13l6 6v17z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.7.5v6h6"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    strokeMiterlimit: "4"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.776 9.095c-3.326 0 .475 4.274-3.326 5.225M10.776 19.544c-3.326 0 .475-4.274-3.326-5.225"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.626 9.095c3.324 0-.475 4.274 3.324 5.225M13.626 19.544c3.324 0-.475-4.274 3.324-5.225"
  })))));
};

Code.displayName = "Code";
Code.defaultProps = {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "10"
};

var Image = function Image(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.5 23.5H.5V.5h13l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5.5v6h6M13 11l-3 5.5-2-2-2.5 5h10z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "7",
    cy: "9",
    r: "1.5"
  })));
};

Image.displayName = "Image";
Image.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Markup = function Markup(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.688 23.492h-17v-23h11l6 6v17z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.688.492v6h6M14.688 10.492l4 4-4 4M9.688 10.492l-4 4 4 4"
  })));
};

Markup.displayName = "Markup";
Markup.defaultProps = {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "10"
};

var Pdf = function Pdf(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5.5v6h6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.5 23.5h-19V.5h13l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.5 18.5v-5h1c1.152 0 2 1.068 2 2.5s-.848 2.5-2 2.5h-1zM16.5 18.5v-5H19M16.5 15.5H18M6.5 18.499V13.5h1.25a1.25 1.25 0 1 1 0 2.5H6.5"
  })));
};

Pdf.displayName = "Pdf";
Pdf.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Plaintext = function Plaintext(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.5 23.5h-19V.5h13l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5.5v6h6M7.5 7.5H12M7.5 10.5h9M7.5 13.5h3M7.5 16.5h3M7.5 19.5h3"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.5 14.5v-1h4v1M14.5 13.5v6M13 19.5h3"
  }))));
};

Plaintext.displayName = "Plaintext";
Plaintext.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Presentation = function Presentation(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.5.5h22v3H.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    d: "M.521 17.5h21.958"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.5 3.5h18v14h-18zM11.5 17.5v3"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "11.5",
    cy: "22",
    r: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    strokeLinecap: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.5 8.228l3.272 2.272-3.272 2.272z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "11.5",
    cy: "10.5",
    r: "5"
  }))));
};

Presentation.displayName = "Presentation";
Presentation.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Richtext = function Richtext(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.5 23.5h-19V.5h13l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5.5v6h6"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M6.5 7.5h5M6.5 10.5h9M6.5 13.5h2M6.5 16.5h2M6.5 19.5h2M11.542 20.5H17.5l-2.479-4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M11.5 13.5h6v7h-6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.5 15a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 13.5 15z"
  }));
};

Richtext.displayName = "Richtext";
Richtext.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Spreadsheet = function Spreadsheet(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.5 23.5h-17V.5h11l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.5.5v6h6M6.5 8.5h11v12h-11zM6.5 11.5h11M6.5 14.5h11M6.5 17.5h11M10.5 8.5v12"
  })));
};

Spreadsheet.displayName = "Spreadsheet";
Spreadsheet.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Video = function Video(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20.5 23.5h-17V.5h11l6 6z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.5.5v6h6M8.5 8.5l8 5-8 5z"
  })));
};

Video.displayName = "Video";
Video.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
var styles = {
  "Illustration": "Illustration__Illustration___1R5Px"
};
var ILLUSTRATION_NAMES = Object.keys(_constants.illustrationName);

function isIllustrationType(name) {
  return ILLUSTRATION_NAMES.includes(name);
}

var defaultProps = {
  testId: 'cf-ui-illustration'
};

var Illustration = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Illustration, _Component);

  var _super = _createSuper(Illustration);

  function Illustration() {
    (0, _classCallCheck2["default"])(this, Illustration);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Illustration, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          testId = _this$props.testId,
          illustration = _this$props.illustration,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "testId", "illustration"]);
      var illustrationComponents = {
        Archive: Archive,
        Audio: Audio,
        Richtext: Richtext,
        Code: Code,
        Image: Image,
        Markup: Markup,
        Pdf: Pdf,
        Plaintext: Plaintext,
        Presentation: Presentation,
        Spreadsheet: Spreadsheet,
        Video: Video
      };
      var classNames = (0, _classnames["default"])(styles['Illustration'], className);
      var Element = illustrationComponents[illustration];
      return /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({}, otherProps, {
        "data-test-id": testId,
        className: classNames
      }));
    }
  }]);
  return Illustration;
}(_react.Component);

exports.Illustration = Illustration;
Illustration.displayName = "Illustration";
Illustration.propTypes = {
  illustration: _propTypes["default"].any.isRequired,
  className: _propTypes["default"].string,
  testId: _propTypes["default"].string,
  style: _propTypes["default"].any
};
Illustration.defaultProps = defaultProps;
var _default = Illustration;
exports["default"] = _default;