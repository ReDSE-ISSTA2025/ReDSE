const child_process = require("child_process");
const { SMTSolver } = require("../smt");

class CVC5 extends SMTSolver {

    constructor(solverPath, logic) {
        const args = [
            "--lang=smt2",
            "--strings-exp",
            "--incremental",
            "--tlimit-per=10000"
        ];
        if (process.env.UNSAT_CORES === "1") {
            args.push("--produce-unsat-cores");
        }
        args.push("-");
        const cvc5 = child_process.spawn(solverPath, args);
        super(cvc5);
        this._send(["set-logic", logic]);
        this.id = "cvc5"
    }
}

module.exports = CVC5;
