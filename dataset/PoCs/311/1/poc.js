import { splitCR } from "./util.js";

//Attack String :""+"\r"*100000+"◎"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "\r";
}
str += "◎";

console.log(splitCR(str));


// real    0m6.540s
// user    0m6.514s
// sys     0m0.010s