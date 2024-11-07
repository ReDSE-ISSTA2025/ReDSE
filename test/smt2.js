/* global describe context it */

const child_process = require("child_process");
const path = require("path");
const { testCVC5, testZ3 } = require("./testUtils");

describe("running CVC5", function() {
    context("on common.smt2", function() {
        const cvc5Path = testCVC5();
        it("should terminate with no errors", function(done) {
            const filePath = path.resolve(__dirname, "../src/smt2/common.smt2");
            child_process.execFile(cvc5Path, ["--lang=smt2", "--strings-exp", "--incremental", filePath], done);
        });
    });
});

describe("running Z3", function() {
    context("on common.smt2", function() {
        const z3Path = testZ3();
        it("should terminate with no errors", function(done) {
            const filePath = path.resolve(__dirname, "../src/smt2/common.smt2");
            child_process.execFile(z3Path, [filePath], done);
        });
    });
});
