/* global describe it context */

"use strict";

const child_process = require("child_process");
const path = require("path");

const _ = require("lodash");
const glob = require("glob");

const { testCVC5, testZ3 } = require("./testUtils");

describe("the analysis", function() {
    const scriptPath = path.resolve(__dirname, "../node_modules/jalangi2/src/js/commands/jalangi.js");
    const examplesDir = path.resolve(__dirname, "examples");
    const analysisDir = path.resolve(__dirname, "../");

    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
    let files = glob.sync("example+([0-9]).js", { nosort: true, cwd: examplesDir, absolute: true });
    files = files.concat(glob.sync("string/*.js", { nosort: true, cwd: examplesDir, absolute: true, ignore: "string/*_jalangi_*" }));
    files = files.concat(glob.sync("numeric/*.js", { nosort: true, cwd: examplesDir, absolute: true, ignore: "numeric/*_jalangi_*" }));
    files.sort(collator.compare);

    context("with CVC5", function() {
        const cvc5Path = testCVC5();
        _.forEach(files, function(filePath) {
            const testName = path.basename(filePath, ".js");
            it(`correctly executes ${testName}`, function(done) {
                child_process.execFile(
                    "node", [scriptPath, "--analysis", analysisDir, filePath], {
                        env: {
                            PATH: process.env.PATH,
                            SOLVER: "cvc5",
                            CVC5_PATH: cvc5Path
                        }
                    }, done);
            });
        });
    });

    context("with Z3", function() {
        const z3Path = testZ3();
        _.forEach(files, function(filePath) {
            const testName = path.basename(filePath, ".js");
            it(`correctly executes ${testName}`, function(done) {
                child_process.execFile(
                    "node", [scriptPath, "--analysis", analysisDir, filePath], {
                        env: {
                            PATH: process.env.PATH,
                            SOLVER: "z3",
                            Z3_PATH: z3Path
                        }
                    }, done);
            });
        });
    });
});
