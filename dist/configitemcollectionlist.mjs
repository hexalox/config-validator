"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigItemCollectionList = void 0;
var _configitem = require("./configitem.mjs");
var _configitemcollection = require("./configitemcollection.mjs");
var _datatypes = require("./datatypes.mjs");
class ConfigItemCollectionList {
  constructor() {
    this.item = {};
    return this;
  }
  addCollectionItem = collection => {
    if (collection instanceof _configitemcollection.ConfigItemCollection) {
      this.item = collection;
    }
    return this;
  };
  toJSON = () => {
    return [this.item];
  };
}
exports.ConfigItemCollectionList = ConfigItemCollectionList;