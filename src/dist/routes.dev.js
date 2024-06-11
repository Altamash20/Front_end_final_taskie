"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _CreatePage = _interopRequireDefault(require("./views/CreatePage.vue"));

var _PageViewer = _interopRequireDefault(require("./views/PageViewer.vue"));

var _Pages = _interopRequireDefault(require("./views/Pages.vue"));

var _PagesList = _interopRequireDefault(require("./views/PagesList.vue"));

var _PageEdit = _interopRequireDefault(require("./views/PageEdit.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: [{
    path: '/:index?',
    component: _PageViewer["default"],
    props: true
  }, {
    path: '/pages',
    component: _Pages["default"],
    children: [{
      path: '',
      component: _PagesList["default"]
    }, {
      path: 'create',
      component: _CreatePage["default"]
    }, {
      path: ':index/edit',
      component: _PageEdit["default"],
      props: true
    }]
  }]
});
var _default = router;
exports["default"] = _default;