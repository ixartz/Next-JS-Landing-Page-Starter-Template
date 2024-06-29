"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _camelize = require("./camelize");

var _cssToObj = _interopRequireDefault(require("./cssToObj"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-param-reassign */
//
// These visitors normalize the SVG into something React understands:
//
var _default = function _default(t) {
  return {
    JSXAttribute: function JSXAttribute(_ref) {
      var node = _ref.node;
      var originalName = node.name;

      if (t.isJSXNamespacedName(originalName)) {
        // converts
        // <svg xmlns:xlink="asdf">
        // to
        // <svg xmlnsXlink="asdf">
        node.name = t.jSXIdentifier((0, _camelize.namespaceToCamel)(originalName.namespace.name, originalName.name.name));
      } else if (t.isJSXIdentifier(originalName)) {
        // converts
        // <tag class="blah blah1"/>
        // to
        // <tag className="blah blah1"/>
        if (originalName.name === 'class') {
          originalName.name = 'className';
        } // converts
        // <tag style="text-align: center; width: 50px">
        // to
        // <tag style={{textAlign: 'center', width: '50px'}}>


        if (originalName.name === 'style') {
          var csso = (0, _cssToObj["default"])(node.value.value);
          var properties = Object.keys(csso).map(function (prop) {
            return t.objectProperty(t.identifier((0, _camelize.hyphenToCamel)(prop)), t.stringLiteral(csso[prop]));
          });
          node.value = t.jSXExpressionContainer(t.objectExpression(properties));
        } // converts
        // <svg stroke-width="5">
        // to
        // <svg strokeWidth="5">
        // don't convert any custom data-* or aria-* attributes just wrap in quotes


        if (/^data-|^aria-/.test(originalName.name)) {
          originalName.name = "'".concat(originalName.name, "'");
        } else {
          originalName.name = (0, _camelize.hyphenToCamel)(originalName.name);
        }
      }
    },
    // converts
    // <svg>
    // to
    // <svg {...props}>
    // after passing through attributes visitors
    JSXOpeningElement: function JSXOpeningElement(_ref2) {
      var _ref2$node = _ref2.node,
          name = _ref2$node.name,
          attributes = _ref2$node.attributes;

      if (name.name.toLowerCase() === 'svg') {
        // add spread props
        attributes.push(t.jSXSpreadAttribute(t.identifier('props')));
      }
    }
  };
};

exports["default"] = _default;