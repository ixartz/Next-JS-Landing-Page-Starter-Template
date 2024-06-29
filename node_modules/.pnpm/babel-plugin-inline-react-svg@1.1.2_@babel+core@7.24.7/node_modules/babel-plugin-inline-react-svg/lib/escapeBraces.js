"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = escapeBraces;

/* If the SVG has text that has curly braces, or
if there is a <style> element (which will, of
course, have curly braces) then we need to
escape those for JSX parsing. */
function escapeBraces(raw) {
  // converts
  // <style> .class1 {} .class2{}</style>
  // to
  // <style> .class1 {`{`}{`}`} .class2{`{`}{`}`}</style>
  return raw.replace(/(\{|\})/g, '{`$1`}');
}