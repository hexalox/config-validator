import { ConfigItem } from "./configitem.mjs";
import { ConfigItemCollection } from "./configitemcollection.mjs";
import { ConfigDataTypes } from "./datatypes.mjs";

export class ConfigItemCollectionList {
    constructor(){
        this.item = {};
        return this;
    }

    addCollectionItem = (collection) => {
        if(collection instanceof ConfigItemCollection){
                this.item = collection;
        }
        return this;
    }

    toJSON = () => {
        return [this.item];
    }
}