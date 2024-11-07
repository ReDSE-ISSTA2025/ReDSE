
var debug, log = false  // TODO: add debug and log args
if (process.env.DEBUG==='true') {
    debug = true
}
if (process.env.LOG==='true') {
    log = true
}

function debugPrintln(...s) {
    if(debug)
        console.log("Debug: " , ...s);
}

function myLog(...s) {
    if(log)
        console.log("Log: ", ...s);
}


exports.debugPrintln = debugPrintln
exports.myLog = myLog