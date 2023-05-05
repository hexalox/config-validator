import { ConfigItem } from "./configitem.mjs";
import { ConfigItemCollectionList } from "./configitemcollectionlist.mjs";
import { ConfigDataTypes } from "./datatypes.mjs";


export class ConfigItemCollection {
    constructor(){
        this.itemCollection = {};
        return this;
    }

    addItem = (key, value) => {
        if((typeof value === "string" && Object.values(ConfigDataTypes).includes(value)) || 
            value instanceof ConfigItemCollection || value instanceof ConfigItemCollectionList ||
            value instanceof ConfigItem){
                this.itemCollection[key] = value;
        } else {
            console.log(typeof value);
            throw new Error("Not a valid item", value);
        }
        return this;
    }

    toJSON = () => {
        return this.itemCollection;
    }
}
