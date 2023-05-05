"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigItemCollection = void 0;
var _configitem = require("./configitem.mjs");
var _configitemcollectionlist = require("./configitemcollectionlist.mjs");
var _datatypes = require("./datatypes.mjs");
class ConfigItemCollection {
  constructor() {
    this.itemCollection = {};
    return this;
  }
  addItem = (key, value) => {
    if (typeof value === "string" && Object.values(_datatypes.ConfigDataTypes).includes(value) || value instanceof ConfigItemCollection || value instanceof _configitemcollectionlist.ConfigItemCollectionList || value instanceof _configitem.ConfigItem) {
      this.itemCollection[key] = value;
    } else {
      console.log(typeof value);
      throw new Error("Not a valid item", value);
    }
    return this;
  };
  toJSON = () => {
    return this.itemCollection;
  };
}
exports.ConfigItemCollection = ConfigItemCollection;