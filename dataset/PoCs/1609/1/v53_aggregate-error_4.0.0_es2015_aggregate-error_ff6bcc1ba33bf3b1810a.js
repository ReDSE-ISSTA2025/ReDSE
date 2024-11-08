/* esm.sh - esbuild bundle(aggregate-error@4.0.0) es2015 production */
var l = Object.defineProperty;
var f = (n, t, e) =>
  t in n
    ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var s = (n, t, e) => (f(n, typeof t != "symbol" ? t + "" : t, e), e),
  i = (n, t, e) => {
    if (!t.has(n)) throw TypeError("Cannot " + e);
  };
var c = (n, t, e) => (
    i(n, t, "read from private field"), e ? e.call(n) : t.get(n)
  ),
  g = (n, t, e) => {
    if (t.has(n))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(n) : t.set(n, e);
  },
  o = (n, t, e, a) => (
    i(n, t, "write to private field"), a ? a.call(n, e) : t.set(n, e), e
  );
// import u from "/v53/indent-string@5.0.0/es2015/indent-string.js";
import m from "./v53_clean-stack_4.1.0_es2015_clean-stack_87b32b37ae264a8e8a1c.js";
var d = (n) => n.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, ""),
  r,
  p = class extends Error {
    constructor(t) {
      if (!Array.isArray(t))
        throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
      t = t.map((a) =>
        a instanceof Error
          ? a
          : a !== null && typeof a == "object"
          ? Object.assign(new Error(a.message), a)
          : new Error(a)
      );
      let e = t.map((a) =>
        typeof a.stack == "string" ? d(m(a.stack)) : String(a)
      ).join(`
`);
      e =
        `
` + u(e, 4);
      super(e);
      g(this, r, void 0);
      s(this, "name", "AggregateError");
      o(this, r, t);
    }
    get errors() {
      return c(this, r).slice();
    }
  };
r = new WeakMap();
export { p as default };
