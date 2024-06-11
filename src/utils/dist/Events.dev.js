"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var events = new Map();
var _default = {
  $on: function $on(eventName, fn) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }

    events.get(eventName).push(fn);
  },
  $off: function $off(eventName, fn) {
    throw {
      message: 'Not implemented'
    };
  },
  $emit: function $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach(function (fn) {
        return fn(data);
      });
    }
  }
};
exports["default"] = _default;