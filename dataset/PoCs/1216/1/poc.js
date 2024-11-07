const { renderPlaywrightDevLinks } = require("./linkUtils.js");

//Attack String :""+"["*100000+"]"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[";
}
str += "]";

var result = renderPlaywrightDevLinks(str, "", "");

// real    0m7.068s
// user    0m7.024s
// sys     0m0.020s