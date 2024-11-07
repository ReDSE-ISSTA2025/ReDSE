"use strict";

const _ = require("lodash");
const { Constant } = require("./symbolic");

class Concolic {
    constructor(concVal, symVal) {
        this.concVal = concVal;
        this.symVal = symVal;
    }
}

const SYMBOLIC = Symbol("SYMBOLIC");

exports.Concolic = Concolic;

const HOP = Object.prototype.hasOwnProperty;

function isConcolic(val) {
    return val instanceof Concolic || (_.isObject(val) && HOP.call(val, SYMBOLIC));
}
exports.isConcolic = isConcolic;

exports.concolizeObject = function (concVal) {
    if (!_.isObject(concVal))
        throw new Error("value must be an object");
    const symVal = new Constant(concVal);
    concVal[SYMBOLIC] = symVal;
    return symVal;
};

function getConcrete(val) {
    return val instanceof Concolic ? val.concVal : val;
}
exports.getConcrete = getConcrete;

function concretize(val) {
    // throw new Error(val);
    val = getConcrete(val);
    if (_.isObject(val)) {
        const stack = [val];
        const seen = new Set(stack);
        while (stack.length > 0) {
            const obj = stack.pop();
            if (!_.isObject(obj))
                continue;

            for (const prop in obj) {
                const flags = Object.getOwnPropertyDescriptor(obj, prop);
                const concVal = getConcrete(obj[prop]);
                if (flags && flags.writable) {
                    obj[prop] = concVal;
                }
                if (_.isObject(concVal) && !seen.has(concVal)) {
                    stack.push(concVal);
                    seen.add(concVal);
                }
            }

            const proto = Object.getPrototypeOf(obj);
            if (_.isObject(proto) && !seen.has(proto)) {
                stack.push(proto);
                seen.add(proto);
            }
        }
    }
    return val;
}
exports.concretize = concretize;

function shallowConcretize(val) {
    // throw new Error(val);
    val = getConcrete(val);
    if (_.isObject(val)) {
        for (const prop in val) {
            const flags = Object.getOwnPropertyDescriptor(val, prop);
            if (flags.writable) {
                val[prop] = getConcrete(val[prop]);
            }
        }
    }
    return val;
}
exports.shallowConcretize = shallowConcretize;

exports.getSymbolic = function (val) {
    let result;
    if (val instanceof Concolic) {
        result = val.symVal;
    } else if (_.isObject(val) && SYMBOLIC in val) {
        result = val[SYMBOLIC];
    } else {
        return new Constant(val);
    }

    return result.forcedConstant ? result.forcedConstant : result;
};

exports.setSymbolic = function (val, newSymVal) {
    if (val instanceof Concolic) {
        val.symVal = newSymVal;
    } else if (_.isObject(val)) {
        val[SYMBOLIC] = newSymVal;
    } else {
        throw new Error("can't set symbolic part of non-concolic value");
    }
};
