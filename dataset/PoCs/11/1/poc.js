import StringUtils from "./stringUtils.js";

//Attack String :""+"<"*100000+"\n@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "<";
}
str += "\n@";

console.log(StringUtils.stripHtml(str));


// real    0m5.281s
// user    0m5.234s
// sys     0m0.020s