const { diffSentences } = require("./diff.js");

//Attack String :""+"$"*100000+" "
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "$";
}
str += " ";

var result = diffSentences(str, "", "");

// real    0m7.594s
// user    0m7.570s
// sys     0m0.010s