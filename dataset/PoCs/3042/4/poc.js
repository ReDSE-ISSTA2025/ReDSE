const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"\n\n"*100000+""
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\n\n";
}
str += "";

var result = htmlToText(str, "");

// real    0m35.416s
// user    0m35.365s
// sys     0m0.030s