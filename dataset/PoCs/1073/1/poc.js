import { cliui } from "./index.js";

//Attack String :""+" "*100000+"!"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "!";

const mixin = {
  stripAnsi: () => {
    return str;
  },
};
const ui = cliui(null, mixin);
console.log(ui.measurePadding(str));


// real    0m6.523s
// user    0m6.504s
// sys     0m0.000s
