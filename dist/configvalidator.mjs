"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigValidator = void 0;
class ConfigValidator {
  constructor(schema, config) {
    this.config = config;
    this.schema = schema;
    this.requiredFieldList = [];
    this.baseDataTypes = new Set(["string", "number", "boolean"]);
  }

  // accessItem = (path, object) => {
  //     return path.split('.').reduce((o, i) => o[i], object)
  // }

  accessItem = (path, object) => {
    return path.split('.').reduce((o, i) => o && o[i] !== undefined ? o[i] : undefined, object);
  };
  validate = () => {
    return this.validateFields(this.schema, [], this.config);
  };
  isArraySubset = (child, parent) => {
    return child.every(element => parent.includes(element));
  };
  validItem = (value, dataType, isRequired, allowedValues) => {
    if (value) {
      let valueTobeChecked = [value];
      if (dataType === "array" && Array.isArray(value)) {
        dataType = "object";
        valueTobeChecked = value;
      }
      if (typeof value === dataType) {
        if (allowedValues && allowedValues.length > 0) {
          if (this.isArraySubset(valueTobeChecked, allowedValues)) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return !isRequired;
    }
  };
  validateFields = (schema, parentKey = [], config) => {
    let flag = true;
    let errors = [];
    for (const [configItemsIndex, configItem] of Object.entries(schema)) {
      const itemKey = `${[...parentKey, configItemsIndex].join(".")}`;
      switch (typeof configItem) {
        case "string":
          // console.log(configItemsIndex, configItem);
          if (!this.validItem(config[configItemsIndex], configItem, false, [])) {
            errors.push(`${itemKey} is not a valid value`);
            flag = false;
          }
          break;
        case "object":
          if (Array.isArray(configItem)) {
            const [dataType, value, isRequired] = configItem;
            if (typeof dataType === "object") {
              let listOfsubConfigs = config[configItemsIndex];
              if (Array.isArray(listOfsubConfigs)) {
                listOfsubConfigs.forEach((subConfig, subConfigIndex) => {
                  let status = this.validateFields(dataType, [...parentKey, configItemsIndex, subConfigIndex], subConfig);
                  flag = flag && status.valid;
                  errors = [...errors, ...status.errors];
                });
              }
            } else if (!this.validItem(config[configItemsIndex], dataType, isRequired, value)) {
              errors.push(`${itemKey} is not a valid value`);
              flag = false;
            }
          } else {
            let status = this.validateFields(schema[configItemsIndex], [...parentKey, configItemsIndex], config[configItemsIndex]);
            flag = flag && status.valid;
            errors = [...errors, ...status.errors];
          }
          break;
      }
    }
    return {
      valid: flag,
      errors
    };
  };
}
exports.ConfigValidator = ConfigValidator;