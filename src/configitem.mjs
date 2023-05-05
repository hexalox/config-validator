export class ConfigItem {
    baseDataTypes = new Set(["string", "number", "boolean"]);

    constructor(type, allowedValues, required = false){
        if(this.baseDataTypes.has(type)){
            this.type = type;
            allowedValues && this.setAllowedValues(allowedValues);
            this.required = required ?? false;
        } else {
            throw new Error("Invalid data type");
        }
        return this;
    }
    setAllowedValues = (allowedValues) => {
        if(Array.isArray(allowedValues)){
            this.allowedValues = allowedValues;
        } else {
            throw new Error("Allowed values should be a array");
        }
        return this;
    }

    setRequired = (required) => {
        if(required){
            this.required = required;
            this.allowedValues = this.allowedValues ?? [];
        }
        return this;
    }

    toJSON = () => {
        if(this.type){
            if(this.allowedValues){
                return [this.type, this.allowedValues, this.required];
            } else {
                return this.type;
            }
        }
    }
}