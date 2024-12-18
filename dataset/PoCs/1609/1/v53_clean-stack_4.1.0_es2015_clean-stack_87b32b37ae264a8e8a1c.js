/* esm.sh - esbuild bundle(clean-stack@4.1.0) es2015 production */
import s from "./v53_os-browserify_0.3.0_es2015_browser_476a088316baaea08336.js";
// import i from "/v53/escape-string-regexp@5.0.0/es2015/escape-string-regexp.js";
var p = /\s+at.*[(\s](.*)\)?/,
  l =
    /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,
  f = typeof s.homedir == "undefined" ? "" : s.homedir().replace(/\\/g, "/");
function u(n, { pretty: c = !1, basePath: a } = {}) {
  let o = a && new RegExp(`(at | \\()${i(a.replace(/\\/g, "/"))}`, "g");
  if (typeof n == "string")
    return n
      .replace(/\\/g, "/")
      .split(
        `
`
      )
      .filter((e) => {
        let r = e.match(p);
        if (r === null || !r[1]) return !0;
        let t = r[1];
        return t.includes(".app/Contents/Resources/electron.asar") ||
          t.includes(".app/Contents/Resources/default_app.asar")
          ? !1
          : !l.test(t);
      })
      .filter((e) => e.trim() !== "")
      .map(
        (e) => (
          o && (e = e.replace(o, "$1")),
          c && (e = e.replace(p, (r, t) => r.replace(t, t.replace(f, "~")))),
          e
        )
      ).join(`
`);
}
export { u as default };
