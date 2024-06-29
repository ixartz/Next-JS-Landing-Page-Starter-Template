"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = optimize;

var _svgo = _interopRequireDefault(require("svgo"));

var _lodash = _interopRequireDefault(require("lodash.isplainobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var essentialPlugins = ['removeDoctype', 'removeComments'];

function isEssentialPlugin(p) {
  return essentialPlugins.indexOf(p) !== -1;
}

function validateAndFix(opts) {
  if (!(0, _lodash["default"])(opts)) return;

  if (opts.full) {
    if (typeof opts.plugins === 'undefined' || Array.isArray(opts.plugins) && opts.plugins.length === 0) {
      /* eslint no-param-reassign: 1 */
      opts.plugins = [].concat(essentialPlugins);
      return;
    }
  } // opts.full is false, plugins can be empty


  if (typeof opts.plugins === 'undefined') return;
  if (Array.isArray(opts.plugins) && opts.plugins.length === 0) return; // track whether its defined in opts.plugins

  var state = essentialPlugins.reduce(function (p, c) {
    return Object.assign(p, _defineProperty({}, c, false));
  }, {});
  opts.plugins.forEach(function (p) {
    if (typeof p === 'string' && isEssentialPlugin(p)) {
      state[p] = true;
    } else if (_typeof(p) === 'object') {
      Object.keys(p).forEach(function (k) {
        if (isEssentialPlugin(k)) {
          // make it essential
          if (!p[k]) p[k] = true; // and update state

          /* eslint no-param-reassign: 1 */

          state[k] = true;
        }
      });
    }
  });
  Object.keys(state).filter(function (key) {
    return !state[key];
  }).forEach(function (key) {
    return opts.plugins.push(key);
  });
}

function optimize(content) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validateAndFix(opts);
  var svgo = new _svgo["default"](opts); // Svgo isn't _really_ async, so let's do it this way:

  var returnValue;
  svgo.optimize(content, function (response) {
    if (response.error) {
      returnValue = response.error;
    } else {
      returnValue = response.data;
    }
  });
  return returnValue;
}