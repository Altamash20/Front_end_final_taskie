"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

require("../node_modules/bootstrap/dist/css/bootstrap.css");

var _Events = _interopRequireDefault(require("./utils/Events"));

var _routes = _interopRequireDefault(require("./routes"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.use(_routes["default"]); //app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;

app.provide('$bus', _Events["default"]);
app.provide('$pages', _data["default"]);
app.mount('#app');