const { splitCR } = require("./util.cjs");

//Attack String :""+"\r"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\r";
}
str += "◎";

console.log(splitCR(str));


// real    0m6.622s
// user    0m6.575s
// sys     0m0.030s
