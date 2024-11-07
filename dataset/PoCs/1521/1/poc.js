const { dashesCamelCase } = require("./conventions.js");

//Attack String :""+"-"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "-";
}
str += "\u0000";

var result = dashesCamelCase(str);

// real    0m7.600s
// user    0m7.553s
// sys     0m0.030s