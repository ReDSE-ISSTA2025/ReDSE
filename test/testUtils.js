/* global before */

const child_process = require("child_process");
const process = require("process");

exports.testCVC5 = function() {
    const cvc5Path = process.env.CVC5_PATH || "cvc5";
    before(function() {
        try {
            child_process.execFileSync(cvc5Path, ["--version"], { encoding: "utf8" });
        } catch (e) {
            if (e.code === "ENOENT") {
                console.error(`ENOENT: could not find CVC5 at '${cvc5Path}'`);
            } else {
                throw e;
            }
            this.skip();
        }
    });
    return cvc5Path;
};

exports.testZ3 = function() {
    const z3Path = process.env.Z3_PATH || "z3";
    before(function() {
        try {
            child_process.execFileSync(z3Path, ["-version"], { encoding: "utf8" });
        } catch (e) {
            if (e.code === "ENOENT") {
                console.error(`ENOENT: could not find Z3 at '${z3Path}'`);
            } else {
                throw e;
            }
            this.skip();
        }
    });
    return z3Path;
};
