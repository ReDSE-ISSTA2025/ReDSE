"use strict";

const fs = require("fs");

const _ = require("lodash");

const sexpr = require("../sexpr");
const { myLog } = require("../util/print");

exports.SMTSolver = class SMTSolver {

    constructor(process) {
        this._callbackQueue = [];
        this._commandLogs = [];
        this.output_log = "";

        process.stdout.setEncoding("utf8");
        process.stderr.setEncoding("utf8");

        const parser = new sexpr.Parser();
        process.stdout.on("data", (data) => {
            // record the output of smt solver to the commandlogs files.
            const comments = data.trim().split("\n").map((s) => "; " + s).join("\n") + "\n";
            for (let i = 0; i < this._commandLogs.length; i++) {
                this._commandLogs[i].write(comments, "utf8");
            }
            parser.parse(data, (stmt) => {
                this._consume(stmt);
            });
        });
        // huzi add
        process.stderr.on("data", (data) => {
            throw new Error(data)
        })
        // process.stderr.on("data", console.error);
        process.stdin.on("error", console.error);
        this.process = process;
    }
    
    logCommands(stream) {
        this._commandLogs.push(stream);
    }

    loadFiles(paths) {
        _.forEach(paths, (path) => {
            this._write(fs.readFileSync(path, { encoding: "utf8" }));
        });
    }

    push(n) {
        this._send(["push", n.toString()]);
    }

    pop(n) {
        this._send(["pop", n.toString()]);
    }

    async checkSat() {
        this._send(["check-sat"]);
        return this._getResponse();
    }

    declareConst(name, sort) {
        this._send(["declare-const", name, sort]);
    }

    addSmtLog(log) {
        if (process.env.SMTLOG){
            this._send(["set-info", ":description", '"log:', log, '"'])
        }
    }
    // declareConst(name, sort, isStr) {
    //     this._send(["declare-const", name, sort]);
    //     // huzi add, naive consider all input is string(for ostrich benchmark generation)
    //     if(isStr){
    //         this._send(["assert", ["is-Str", name]]);
    //     }
    //     if(isStr || sort === "String"){
    //         // the unicode \u{0000} is a special char which stand for null res in ostrich.
    //         this._send(["assert", ["str.in_re", ["str", name],
    //             ["re.*", ["re.range", '"\\u{0001}"', '"\\u{FFFF}"']]]])
    //     }
    // }

    assert(formula) {
        this._send(["assert", formula]);
    }

    getValue(vars) {
        this._send(["get-value", vars]);
        return this._getResponse();
    }

    getModel() {
        this._send(["get-model"]);
        return this._getResponse();
    }

    getUnsatCore() {
        this._send(["get-unsat-core"]);
        return this._getResponse();
    }

    close() {
        try {
            this._send(["exit"]);
        } catch (e) {
            console.error("error while closing:", e);
        }
    }

    _send(command) {
        // myLog("sending command: " + sexpr.stringify(command));
        this._write(sexpr.stringify(command) + "\n");
    }

    _write(output) {
        for (let i = 0; i < this._commandLogs.length; i++) {
            this._commandLogs[i].write(output, "utf8");
        }


        // if (J$.ReDoSInItem) {
        //     if (
        //         output==="(assert false)\n" ||
        //         (output.startsWith("(assert (not (distinct") && output.endsWith("\"\")))\n")) ||
        //         output.startsWith("(assert (str.in_re (str.++ \"git+ssh://\"") ||
        //         output.startsWith("(assert (not (not (js.in (str.++ (str.++ \"git+ssh://\"") ||
        //         (output.includes("git+ssh://") && output.includes("js.substr")) ||
        //         output.includes("regex_exec_0") || output.includes("regex_exec_20")
        //     )
        //         output = "; " + output;
        //     // else if (J$.ReDoS51) {
        //     //     if (J$.timeReDoS51===0) {
        //     //         J$.timeReDoS51 += 1
        //     //         output = "J$.timeReDoS51 = 1\n" + output;
        //     //     }
        //     //     if (!/(?:regex_exec_(?:(?:3[789])|(?:4\d)|(?:5[0-6])))|(?:regex_capture_4[19])|(?:check-sat)|(?:get-model)|(?:push)|(?:pop)/.test(output)) {
        //     //         output = ";; " + output;
        //     //     }
        //     //     if (output.includes("(assert (= (Str regex_exec_37) (Str (str.++ \"git+ssh://\" (js.substr (str var0) 4 undefined)))))")) {
        //     //         output = "(assert (= (Str regex_exec_37) var0))\n";
        //     //     }
        //     // }
        // }
        //
        // if (!J$.meet51&&output==="(declare-const regex_exec_48 String)\n") {
        //     J$.meet51 = true;
        //     let stack = 0;
        //     let constraints = [];
        //     let popCount = 0;
        //     // 将this.output_log按行分割，然后从后往前遍历，遇到\(pop (\d+)\)，则stack-int($1)，遇到\(push (\d+)\)，则stack+int($1)
        //     let lines = this.output_log.split("\n");
        //     for (let i = lines.length - 1; i >= 0; i--) {
        //         // if (lines[i].includes("(declare-const var0 Val)"))
        //         //     break;
        //         if (lines[i].includes("(pop")) {
        //             let popNum = parseInt(lines[i].match(/\(pop (\d+)\)/)[1]);
        //             stack -= popNum;
        //             popCount += popNum;
        //         } else if (lines[i].includes("(push")) {
        //             let pushNum = parseInt(lines[i].match(/\(push (\d+)\)/)[1]);
        //             stack += pushNum;
        //             if (popCount>0) {
        //                 popCount -= pushNum;
        //             } else {
        //                 constraints.unshift(lines[i]);
        //             }
        //         } else if (popCount===0&&/(?:regex_exec_(?:(?:3[3-9])|(?:4\d)|(?:5[0-3])))|(?:regex_capture_37)|(?:regex_capture_46)/.test(lines[i])) {
        //             constraints.unshift(lines[i]);
        //         }
        //     }
        //
        //     console.log(stack);
        //     let before = "(pop " + stack + ")\n"+
        //         "(declare-const var0 Val)\n" +
        //         "(assert (is-Str var0))\n";
        //     // let before = "(pop " + stack + ")\n";
        //     for (let i = 0; i < constraints.length; i++) {
        //         before += constraints[i] + "\n";
        //         if (constraints[i]==="; (assert (= (Str regex_exec_33) (Str (str.++ \"git+ssh://\" (js.substr (str var0) 4 undefined)))))") {
        //             before = before + "(assert (= (Str regex_exec_33) var0))\n";
        //         }
        //     }
        //     // before = before + "(assert (= (Str regex_exec_37) var0))\n";
        //     output = before + output;
        // }

        // huzi note, pass the input to solver
        this.output_log += output + "\n";
        // 如果需要追加内容到文件，可以使用 appendFile
        fs.appendFile('D:\\Documents\\ISSTA\\aratha\\tmpLog.smt2', output + "\n", (err) => {
            if (err) throw err;
        });
        this.process.stdin.write(output);
    }

    writeReDoSConstraint(output) {
        output = output.replace("str.in.re", "str.in_re")+ "\n";
        output = output.replace("str.to.re", "str.to_re")+ "\n";
        output = output.replace("(assert (= (Str regex_exec_48) (Str regex_exec_ans) ))","(assert (= (Str regex_exec_36) (Str regex_exec_ans) ))");
        output = output.replace("(assert (str.in_re regex_exec_ans attack))", "(assert (str.in_re regex_exec_ans (re.++ (re.* re.allchar) attack (re.* re.allchar))))")
        this.output_log += output + "\n";
        this.process.stdin.write(output);
    }

    async _enqueueCallback(callback) {
        this._callbackQueue.push(callback);
    }

    _consume(stmt) {
        const callback = this._callbackQueue.shift();
        if (callback) {
            callback(stmt);
        } else {
            console.error(`received ${stmt}, but there is no callback`);
        }
    }

    async _getResponse() {
        return new Promise((resolve, reject) => {
            this._enqueueCallback((stmt) => {
                if (stmt[0] !== "error") {
                    resolve(stmt);
                } else {
                   // FIXME: Workaround to avoid Error: write EPIPE
                   // at WriteWrap.afterWrite [as oncomplete]
                   // huzi add
                //    console.log(stmt[1]);
                //    fail
                    // reject(new Error(stmt[1]));
                    throw new Error(stmt[1]);
                }
            });
        });
    }
};
