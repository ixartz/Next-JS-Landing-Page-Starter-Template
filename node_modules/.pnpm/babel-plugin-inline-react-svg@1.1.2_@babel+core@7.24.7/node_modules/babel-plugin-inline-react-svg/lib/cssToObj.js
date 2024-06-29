"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cssToObj;

function cssToObj(css) {
  var o = {};
  css.split(';').filter(function (el) {
    return !!el;
  }).forEach(function (el) {
    var s = el.split(':');
    var key = s.shift().trim();
    var value = s.join(':').trim();
    o[key] = value;
  });
  return o;
}