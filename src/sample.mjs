
export const sampleSchema = {
    mysql: {
        connections : [{host:["string",[],true], username:"string"}]
        //if value of the schema key is array, then it can hold multiple instance of subschema which is define in index 0
    },
    express: {
        cookie: "boolean",
        // for simple key value pair, value holds the allowed datatype
        helmet: "boolean",
        views: {
            path: "string",
            engine: ["string",["ejs"]]
        },
        proxy: {
            trust: "boolean"
        },
        isp: ["array",["ls","gs"], true],
        dsp: ["array",["ls"]],
        vsp: ["array",[],true],
        lp: "array"
    },
    webserver: {
        http: {
            port: ["number",[],true],
            //if value of the schema is a array then 0th index is allowed datatype, which is string, 
            // 1st index can be blank string or array, if array provided that will allowed list of values, 
            // 2nd index is requiredflag
        },
        https: {
            ssl:{
                key:"string",
                cert:"string",
                ca:"string"
            },
            ciphers: "string",
            honorCipherOrder:  "boolean",
            port: "number",
            keepAliveTimeout: "number",
            headersTimeout: "number"
        }
    }
};



export const sampleConfig = {
    mysql:{
        connections:[
            {host:"stagedb", username:"ziphealth"},
            {host:"string1", username:"chromeuser"}
        ]
    },
    express: {
        cookie: true,
        helmet: true,
        views: {
            path: "views",
            engine: "ejs"
        },
        proxy: {
            trust: true
        },
        isp: ["ls","gs"],
        vsp: [1,2,4],
        lp: ""
    },
    webserver: {
        http: {
            port: 1901
        },
        https: {
            ssl:{
                key:"",
                cert:"",
                ca:""
            },
            ciphers: "",
            honorCipherOrder: true,
            port: 1900,
            keepAliveTimeout: 4800,
            headersTimeout: 4800
        }
    }
};