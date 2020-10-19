"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Cell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledCell = require("../styles/components/StyledCell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var propTypes = {
  /**
   * Responsive extra small size
   */
  xs: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].string]),

  /**
   * Responsive small size
   */
  sm: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].string]),

  /**
   * Responsive medium size
   */
  md: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].string]),

  /**
   * Responsive large size
   */
  lg: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].string]),
  xsOffset: _propTypes["default"].number,
  smOffset: _propTypes["default"].number,
  mdOffset: _propTypes["default"].number,
  lgOffset: _propTypes["default"].number,
  first: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg']),
  last: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg']),

  /**
   * Component class
   */
  className: _propTypes["default"].string,

  /**
   * The cypress identifier
   */
  dataCy: _propTypes["default"].string,

  /**
   * Theme json based
   */
  theme: _propTypes["default"].shape({}),

  /**
   * Children node
   */
  children: _propTypes["default"].node
};
var defaultProps = {
  theme: _theme["default"]
};

var Cell = function Cell(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledCell.StyledCell, props);
};

exports.Cell = Cell;
_StyledCell.StyledCell.displayName = 'StyledCell';
Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Cell));

exports["default"] = _default;