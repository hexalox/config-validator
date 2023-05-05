"use strict";

let ec = new ConfigItemCollection().addItem('express', new ConfigItemCollection().addItem('cookie', ConfigDataTypes.BOOLEAN).addItem('helmet', ConfigDataTypes.BOOLEAN).addItem('views', new ConfigItemCollection().addItem('path', ConfigDataTypes.STRING).addItem('engine', new ConfigItem(ConfigDataTypes.STRING, ["ejs"]))).addItem('proxy', new ConfigItemCollection().addItem('trust', ConfigDataTypes.BOOLEAN))).addItem('mysql', new ConfigItemCollectionList().addCollectionItem(new ConfigItemCollection().addItem('host', new ConfigItem(ConfigDataTypes.STRING).setRequired(true)).addItem('port', new ConfigItem(ConfigDataTypes.STRING).setRequired(true)).addItem('username', new ConfigItem(ConfigDataTypes.STRING).setRequired(true)).addItem('password', new ConfigItem(ConfigDataTypes.STRING).setRequired(true))));
console.log(JSON.stringify(new ConfigItemCollection()));
console.log(JSON.stringify(ec, null, 4));
console.log(ec);
let validator = new ConfigValidator(sampleSchema, sampleConfig);
console.log(validator.validate());