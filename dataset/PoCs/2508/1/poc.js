import { toPascalCase } from "./helpers.mjs";

//Attack String :""+"-"*100000+"!"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "-";
}
str += "!";

var result = toPascalCase(str);

// real    0m10.679s
// user    0m10.476s
// sys     0m0.020s