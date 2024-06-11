"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var pagesKey = 'pages';
var pagesJson = localStorage.getItem(pagesKey);
var pagesStore = JSON.parse(pagesJson);

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

var _default = {
  addPage: function addPage(page) {
    pagesStore.push(page);
    save();
  },
  getAllPages: function getAllPages() {
    return pagesStore;
  },
  getSinglePage: function getSinglePage(index) {
    return pagesStore[index];
  },
  editPage: function editPage(index, page) {
    pagesStore[index] = page;
    save();
  },
  removePage: function removePage(index) {
    pagesStore.splice(index, 1);
  }
};
exports["default"] = _default;