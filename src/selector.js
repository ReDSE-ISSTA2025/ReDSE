const fs = require('fs');
var axios = require('axios');

async function selector(file, lineNum, constraints) {
    let code = fs.readFileSync(file, 'utf8');
    // line是code中的第lineNum行
    let line = code.split('\n')[lineNum - 1];
    // entry是code中带有"J$.readString()"的行
    let entry = code.split('\n').findIndex((line) => line.includes('J$.readString()'));
    entry = code.split('\n')[entry];

    var data = JSON.stringify({
        "inputs": {
            "code": code,
            "line": line,
            "entry": entry,
            "constraints": constraints
        },
        "response_mode": "blocking",
        "user": "selector"
    });


    var config = {
        method: 'post',
        url: 'http://192.168.31.162/v1/workflows/run',
        headers: {
            'Authorization': 'Bearer app-Ia31aoQ2IrYjq6XniVLQFEr9',
            'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': 'localhost',
            'Connection': 'keep-alive'
        },
        data: data
    };

    console.log("Generating Initialize Input...");
    console.log("file: ", file, "lineNum: ", lineNum, "line: ", line, "entry: ", entry);
    try {
        const response = await axios(config);
        // console.log(JSON.stringify(response.data));
        return response.data.data.outputs.text - 1;
    } catch (error) {
        console.error(error);
    }
}

// 导出模块
module.exports = selector;
//
// initializer("D:\\Documents\\ISSTA\\aratha\\string_test\\npa\\motivation_example.js", 445);



