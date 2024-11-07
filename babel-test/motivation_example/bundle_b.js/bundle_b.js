var _excluded = ["context", "forceRefresh"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var __temp_86__ = Object.defineProperty; if (!__temp_86__) __temp_86__ = function __temp_86__(t, e, r) { t[e] = r.value; }; var __temp_87__ = i.iterator; if (!__temp_87__) __temp_87__ = "@@iterator"; var __temp_88__ = i.asyncIterator; if (!__temp_88__) __temp_88__ = "@@asyncIterator"; var __temp_89__ = i.toStringTag; if (!__temp_89__) __temp_89__ = "@@toStringTag"; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = __temp_86__, i = "function" == typeof Symbol ? Symbol : {}, a = __temp_87__, c = __temp_88__, u = __temp_89__; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var __temp_90__ = e; if (__temp_90__) __temp_90__ = e.prototype instanceof Generator; var __temp_91__ = n; if (!__temp_91__) __temp_91__ = []; var i = __temp_90__ ? e : Generator, a = Object.create(i.prototype), c = new Context(__temp_91__); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var __temp_92__ = d; if (__temp_92__) __temp_92__ = d(d(values([]))); var d = Object.getPrototypeOf, v = __temp_92__; v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var __temp_93__ = t.completion; if (!__temp_93__) __temp_93__ = {}; var e = __temp_93__; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var __temp_94__ = "function" == typeof t; if (__temp_94__) __temp_94__ = t.constructor; var e = __temp_94__; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var __temp_85__ = r; if (!__temp_85__) __temp_85__ = "default"; var i = e.call(t, __temp_85__); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var __temp_83__ = "undefined" != typeof Symbol; if (__temp_83__) __temp_83__ = r[Symbol.iterator]; var __temp_84__ = __temp_83__; if (!__temp_84__) __temp_84__ = r["@@iterator"]; var t = null == r ? null : __temp_84__; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var __temp_81__ = "undefined" != typeof Symbol; if (__temp_81__) __temp_81__ = r[Symbol.iterator]; var __temp_82__ = __temp_81__; if (!__temp_82__) __temp_82__ = r["@@iterator"]; var t = __temp_82__; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******/(function () {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = [(/* 0 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    "use strict";

    module.exports = npa;
    module.exports.resolve = resolve;
    module.exports.toPurl = toPurl;
    module.exports.Result = Result;
    var _webpack_require__ = __webpack_require__(Object(function webpackMissingModule() {
        var e = new Error("Cannot find module 'url'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }())),
      URL = _webpack_require__.URL;
    var HostedGit = __webpack_require__(1);
    var semver = __webpack_require__(6);
    var path = __webpack_require__.g.FAKE_WINDOWS ? Object(function webpackMissingModule() {
      var e = new Error("Cannot find module 'path'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }()) : __webpack_require__(Object(function webpackMissingModule() {
      var e = new Error("Cannot find module 'path'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }()));
    var validatePackageName = __webpack_require__(51);
    var _webpack_require__2 = __webpack_require__(Object(function webpackMissingModule() {
        var e = new Error("Cannot find module 'os'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }())),
      homedir = _webpack_require__2.homedir;
    var _webpack_require__3 = __webpack_require__(52),
      log = _webpack_require__3.log;
    var __temp_0__ = process.platform === 'win32';
    if (!__temp_0__) __temp_0__ = __webpack_require__.g.FAKE_WINDOWS;
    var isWindows = __temp_0__;
    var hasSlashes = isWindows ? /\\|[/]/ : /[/]/;
    var isURL = /^(?:git[+])?[a-z]+:/i;
    var isGit = /^[^@]+@[^:.]+\.[^:]+:.+$/i;
    var isFilename = /[.](?:tgz|tar.gz|tar)$/i;
    function npa(arg, where) {
      var name;
      var spec;
      if (_typeof(arg) === 'object') {
        if (arg instanceof Result && (!where || where === arg.where)) {
          return arg;
        } else if (arg.name && arg.rawSpec) {
          return npa.resolve(arg.name, arg.rawSpec, where || arg.where);
        } else {
          return npa(arg.raw, where || arg.where);
        }
      }
      var nameEndsAt = arg[0] === '@' ? arg.slice(1).indexOf('@') + 1 : arg.indexOf('@');
      var namePart = nameEndsAt > 0 ? arg.slice(0, nameEndsAt) : arg;
      if (isURL.test(arg)) {
        spec = arg;
      } else if (isGit.test(arg)) {
        spec = "git+ssh://".concat(arg);
      } else if (namePart[0] !== '@' && (hasSlashes.test(namePart) || isFilename.test(namePart))) {
        spec = arg;
      } else if (nameEndsAt > 0) {
        name = namePart;
        var __temp_1__ = arg.slice(nameEndsAt + 1);
        if (!__temp_1__) __temp_1__ = '*';
        spec = __temp_1__;
      } else {
        var valid = validatePackageName(arg);
        if (valid.validForOldPackages) {
          name = arg;
          spec = '*';
        } else {
          spec = arg;
        }
      }
      return resolve(name, spec, where, arg);
    }
    var isFilespec = isWindows ? /^(?:[.]|~[/]|[/\\]|[a-zA-Z]:)/ : /^(?:[.]|~[/]|[/]|[a-zA-Z]:)/;
    function resolve(name, spec, where, arg) {
      var res = new Result({
        raw: arg,
        name: name,
        rawSpec: spec,
        fromArgument: arg != null
      });
      if (name) {
        res.setName(name);
      }
      if (spec && (isFilespec.test(spec) || /^file:/i.test(spec))) {
        return fromFile(res, where);
      } else if (spec && /^npm:/i.test(spec)) {
        return fromAlias(res, where);
      }
      var hosted = HostedGit.fromUrl(spec, {
        noGitPlus: true,
        noCommittish: true
      });
      if (hosted) {
        return fromHostedGit(res, hosted);
      } else if (spec && isURL.test(spec)) {
        return fromURL(res);
      } else if (spec && (hasSlashes.test(spec) || isFilename.test(spec))) {
        return fromFile(res, where);
      } else {
        return fromRegistry(res);
      }
    }
    var defaultRegistry = 'https://registry.npmjs.org';
    function toPurl(arg) {
      var __temp_2__ = arguments.length > 1;
      if (__temp_2__) __temp_2__ = arguments[1] !== undefined;
      var reg = __temp_2__ ? arguments[1] : defaultRegistry;
      var res = npa(arg);
      if (res.type !== 'version') {
        throw invalidPurlType(res.type, res.raw);
      }

      // URI-encode leading @ of scoped packages
      var purl = 'pkg:npm/' + res.name.replace(/^@/, '%40') + '@' + res.rawSpec;
      if (reg !== defaultRegistry) {
        purl += '?repository_url=' + reg;
      }
      return purl;
    }
    function invalidPackageName(name, valid, raw) {
      // eslint-disable-next-line max-len
      var err = new Error("Invalid package name \"".concat(name, "\" of package \"").concat(raw, "\": ").concat(valid.errors.join('; '), "."));
      err.code = 'EINVALIDPACKAGENAME';
      return err;
    }
    function invalidTagName(name, raw) {
      // eslint-disable-next-line max-len
      var err = new Error("Invalid tag name \"".concat(name, "\" of package \"").concat(raw, "\": Tags may not have any characters that encodeURIComponent encodes."));
      err.code = 'EINVALIDTAGNAME';
      return err;
    }
    function invalidPurlType(type, raw) {
      // eslint-disable-next-line max-len
      var err = new Error("Invalid type \"".concat(type, "\" of package \"").concat(raw, "\": Purl can only be generated for \"version\" types."));
      err.code = 'EINVALIDPURLTYPE';
      return err;
    }
    function Result(opts) {
      this.type = opts.type;
      this.registry = opts.registry;
      this.where = opts.where;
      if (opts.raw == null) {
        this.raw = opts.name ? opts.name + '@' + opts.rawSpec : opts.rawSpec;
      } else {
        this.raw = opts.raw;
      }
      this.name = undefined;
      this.escapedName = undefined;
      this.scope = undefined;
      var __temp_3__ = opts.rawSpec;
      if (!__temp_3__) __temp_3__ = '';
      this.rawSpec = __temp_3__;
      this.saveSpec = opts.saveSpec;
      this.fetchSpec = opts.fetchSpec;
      if (opts.name) {
        this.setName(opts.name);
      }
      this.gitRange = opts.gitRange;
      this.gitCommittish = opts.gitCommittish;
      this.gitSubdir = opts.gitSubdir;
      this.hosted = opts.hosted;
    }
    Result.prototype.setName = function (name) {
      var valid = validatePackageName(name);
      if (!valid.validForOldPackages) {
        throw invalidPackageName(name, valid, this.raw);
      }
      this.name = name;
      this.scope = name[0] === '@' ? name.slice(0, name.indexOf('/')) : undefined;
      // scoped packages in couch must have slash url-encoded, e.g. @foo%2Fbar
      this.escapedName = name.replace('/', '%2f');
      return this;
    };
    Result.prototype.toString = function () {
      var full = [];
      if (this.name != null && this.name !== '') {
        full.push(this.name);
      }
      var __temp_4__ = this.saveSpec;
      if (!__temp_4__) __temp_4__ = this.fetchSpec;
      var __temp_5__ = __temp_4__;
      if (!__temp_5__) __temp_5__ = this.rawSpec;
      var spec = __temp_5__;
      if (spec != null && spec !== '') {
        full.push(spec);
      }
      return full.length ? full.join('@') : this.raw;
    };
    Result.prototype.toJSON = function () {
      var result = Object.assign({}, this);
      delete result.hosted;
      return result;
    };

    // sets res.gitCommittish, res.gitRange, and res.gitSubdir
    function setGitAttrs(res, committish) {
      if (!committish) {
        res.gitCommittish = null;
        return;
      }

      // for each :: separated item:
      var _iterator = _createForOfIteratorHelper(committish.split('::')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          // if the item has no : the n it is a commit-ish
          if (!part.includes(':')) {
            if (res.gitRange) {
              throw new Error('cannot override existing semver range with a committish');
            }
            if (res.gitCommittish) {
              throw new Error('cannot override existing committish with a second committish');
            }
            res.gitCommittish = part;
            continue;
          }
          // split on name:value
          var _part$split = part.split(':'),
            _part$split2 = _slicedToArray(_part$split, 2),
            name = _part$split2[0],
            value = _part$split2[1];
          // if name is semver do semver lookup of ref or tag
          if (name === 'semver') {
            if (res.gitCommittish) {
              throw new Error('cannot override existing committish with a semver range');
            }
            if (res.gitRange) {
              throw new Error('cannot override existing semver range with a second semver range');
            }
            res.gitRange = decodeURIComponent(value);
            continue;
          }
          if (name === 'path') {
            if (res.gitSubdir) {
              throw new Error('cannot override existing path with a second path');
            }
            res.gitSubdir = "/".concat(value);
            continue;
          }
          log.warn('npm-package-arg', "ignoring unknown key \"".concat(name, "\""));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    function fromFile(res, where) {
      if (!where) {
        where = process.cwd();
      }
      res.type = isFilename.test(res.rawSpec) ? 'file' : 'directory';
      res.where = where;

      // always put the '/' on where when resolving urls, or else
      // file:foo from /path/to/bar goes to /path/to/foo, when we want
      // it to be /path/to/bar/foo

      var specUrl;
      var resolvedUrl;
      var prefix = !/^file:/.test(res.rawSpec) ? 'file:' : '';
      var rawWithPrefix = prefix + res.rawSpec;
      var rawNoPrefix = rawWithPrefix.replace(/^file:/, '');
      try {
        resolvedUrl = new URL(rawWithPrefix, "file://".concat(path.resolve(where), "/"));
        specUrl = new URL(rawWithPrefix);
      } catch (originalError) {
        var er = new Error('Invalid file: URL, must comply with RFC 8089');
        throw Object.assign(er, {
          raw: res.rawSpec,
          spec: res,
          where: where,
          originalError: originalError
        });
      }

      // XXX backwards compatibility lack of compliance with RFC 8089
      if (resolvedUrl.host && resolvedUrl.host !== 'localhost') {
        var rawSpec = res.rawSpec.replace(/^file:\/\//, 'file:///');
        resolvedUrl = new URL(rawSpec, "file://".concat(path.resolve(where), "/"));
        specUrl = new URL(rawSpec);
        rawNoPrefix = rawSpec.replace(/^file:/, '');
      }
      // turn file:/../foo into file:../foo
      // for 1, 2 or 3 leading slashes since we attempted
      // in the previous step to make it a file protocol url with a leading slash
      if (/^\/{1,3}\.\.?(\/|$)/.test(rawNoPrefix)) {
        var _rawSpec = res.rawSpec.replace(/^file:\/{1,3}/, 'file:');
        resolvedUrl = new URL(_rawSpec, "file://".concat(path.resolve(where), "/"));
        specUrl = new URL(_rawSpec);
        rawNoPrefix = _rawSpec.replace(/^file:/, '');
      }
      // XXX end RFC 8089 violation backwards compatibility section

      // turn /C:/blah into just C:/blah on windows
      var specPath = decodeURIComponent(specUrl.pathname);
      var resolvedPath = decodeURIComponent(resolvedUrl.pathname);
      if (isWindows) {
        specPath = specPath.replace(/^\/+([a-z]:\/)/i, '$1');
        resolvedPath = resolvedPath.replace(/^\/+([a-z]:\/)/i, '$1');
      }

      // replace ~ with homedir, but keep the ~ in the saveSpec
      // otherwise, make it relative to where param
      if (/^\/~(\/|$)/.test(specPath)) {
        res.saveSpec = "file:".concat(specPath.substr(1));
        resolvedPath = path.resolve(homedir(), specPath.substr(3));
      } else if (!path.isAbsolute(rawNoPrefix)) {
        res.saveSpec = "file:".concat(path.relative(where, resolvedPath));
      } else {
        res.saveSpec = "file:".concat(path.resolve(resolvedPath));
      }
      res.fetchSpec = path.resolve(where, resolvedPath);
      return res;
    }
    function fromHostedGit(res, hosted) {
      res.type = 'git';
      res.hosted = hosted;
      res.saveSpec = hosted.toString({
        noGitPlus: false,
        noCommittish: false
      });
      res.fetchSpec = hosted.getDefaultRepresentation() === 'shortcut' ? null : hosted.toString();
      setGitAttrs(res, hosted.committish);
      return res;
    }
    function unsupportedURLType(protocol, spec) {
      var err = new Error("Unsupported URL Type \"".concat(protocol, "\": ").concat(spec));
      err.code = 'EUNSUPPORTEDPROTOCOL';
      return err;
    }
    function fromURL(res) {
      var rawSpec = res.rawSpec;
      res.saveSpec = rawSpec;
      if (rawSpec.startsWith('git+ssh:')) {
        // git ssh specifiers are overloaded to also use scp-style git
        // specifiers, so we have to parse those out and treat them special.
        // They are NOT true URIs, so we can't hand them to URL.

        // This regex looks for things that look like:
        // git+ssh://git@my.custom.git.com:username/project.git#deadbeef
        // ...and various combinations. The username in the beginning is *required*.
        var matched = rawSpec.match(/^git\+ssh:\/\/([^:#]+:[^#]+(?:\.git)?)(?:#(.*))?$/i);
        if (matched && !matched[1].match(/:[0-9]+\/?.*$/i)) {
          res.type = 'git';
          setGitAttrs(res, matched[2]);
          res.fetchSpec = matched[1];
          return res;
        }
      } else if (rawSpec.startsWith('git+file://')) {
        // URL can't handle windows paths
        rawSpec = rawSpec.replace(/\\/g, '/');
      }
      var parsedUrl = new URL(rawSpec);
      // check the protocol, and then see if it's git or not
      switch (parsedUrl.protocol) {
        case 'git:':
        case 'git+http:':
        case 'git+https:':
        case 'git+rsync:':
        case 'git+ftp:':
        case 'git+file:':
        case 'git+ssh:':
          res.type = 'git';
          setGitAttrs(res, parsedUrl.hash.slice(1));
          if (parsedUrl.protocol === 'git+file:' && /^git\+file:\/\/[a-z]:/i.test(rawSpec)) {
            // URL can't handle drive letters on windows file paths, the host can't contain a :
            res.fetchSpec = "git+file://".concat(parsedUrl.host.toLowerCase(), ":").concat(parsedUrl.pathname);
          } else {
            parsedUrl.hash = '';
            res.fetchSpec = parsedUrl.toString();
          }
          if (res.fetchSpec.startsWith('git+')) {
            res.fetchSpec = res.fetchSpec.slice(4);
          }
          break;
        case 'http:':
        case 'https:':
          res.type = 'remote';
          res.fetchSpec = res.saveSpec;
          break;
        default:
          throw unsupportedURLType(parsedUrl.protocol, rawSpec);
      }
      return res;
    }
    function fromAlias(res, where) {
      var subSpec = npa(res.rawSpec.substr(4), where);
      if (subSpec.type === 'alias') {
        throw new Error('nested aliases not supported');
      }
      if (!subSpec.registry) {
        throw new Error('aliases only work for registry deps');
      }
      res.subSpec = subSpec;
      res.registry = true;
      res.type = 'alias';
      res.saveSpec = null;
      res.fetchSpec = null;
      return res;
    }
    function fromRegistry(res) {
      res.registry = true;
      var spec = res.rawSpec.trim();
      // no save spec for registry components as we save based on the fetched
      // version, not on the argument so this can't compute that.
      res.saveSpec = null;
      res.fetchSpec = spec;
      var version = semver.valid(spec, true);
      var range = semver.validRange(spec, true);
      if (version) {
        res.type = 'version';
      } else if (range) {
        res.type = 'range';
      } else {
        if (encodeURIComponent(spec) !== spec) {
          throw invalidTagName(spec, res.raw);
        }
        res.type = 'tag';
      }
      return res;
    }

    /***/
  }), (/* 1 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    "use strict";

    var _webpack_require__4 = __webpack_require__(2),
      LRUCache = _webpack_require__4.LRUCache;
    var hosts = __webpack_require__(3);
    var _fromUrl = __webpack_require__(4);
    var _parseUrl = __webpack_require__(5);
    var cache = new LRUCache({
      max: 1000
    });
    var _GitHost_brand = /*#__PURE__*/new WeakSet();
    var GitHost = /*#__PURE__*/function () {
      function GitHost(type, user, auth, project, committish, defaultRepresentation) {
        var __temp_6__ = arguments.length > 6;
        if (__temp_6__) __temp_6__ = arguments[6] !== undefined;
        var _opts = __temp_6__ ? arguments[6] : {};
        _classCallCheck(this, GitHost);
        _classPrivateMethodInitSpec(this, _GitHost_brand);
        Object.assign(this, _gitHosts._[type], {
          type: type,
          user: user,
          auth: auth,
          project: project,
          committish: committish,
          "default": defaultRepresentation,
          opts: _opts
        });
      }
      return _createClass(GitHost, [{
        key: "hash",
        value: function hash() {
          return this.committish ? "#".concat(this.committish) : '';
        }
      }, {
        key: "ssh",
        value: function ssh(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.sshtemplate, opts);
        }
      }, {
        key: "sshurl",
        value: function sshurl(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.sshurltemplate, opts);
        }
      }, {
        key: "browse",
        value: function browse(path) {
          // not a string, treat path as opts
          if (typeof path !== 'string') {
            return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.browsetemplate, path);
          }
          if (typeof (arguments.length <= 1 ? undefined : arguments[1]) !== 'string') {
            return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.browsetreetemplate, _objectSpread(_objectSpread({}, arguments.length <= 1 ? undefined : arguments[1]), {}, {
              path: path
            }));
          }
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.browsetreetemplate, _objectSpread(_objectSpread({}, arguments.length <= 2 ? undefined : arguments[2]), {}, {
            fragment: arguments.length <= 1 ? undefined : arguments[1],
            path: path
          }));
        }

        // If the path is known to be a file, then browseFile should be used. For some hosts
        // the url is the same as browse, but for others like GitHub a file can use both `/tree/`
        // and `/blob/` in the path. When using a default committish of `HEAD` then the `/tree/`
        // path will redirect to a specific commit. Using the `/blob/` path avoids this and
        // does not redirect to a different commit.
      }, {
        key: "browseFile",
        value: function browseFile(path) {
          if (typeof (arguments.length <= 1 ? undefined : arguments[1]) !== 'string') {
            return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.browseblobtemplate, _objectSpread(_objectSpread({}, arguments.length <= 1 ? undefined : arguments[1]), {}, {
              path: path
            }));
          }
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.browseblobtemplate, _objectSpread(_objectSpread({}, arguments.length <= 2 ? undefined : arguments[2]), {}, {
            fragment: arguments.length <= 1 ? undefined : arguments[1],
            path: path
          }));
        }
      }, {
        key: "docs",
        value: function docs(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.docstemplate, opts);
        }
      }, {
        key: "bugs",
        value: function bugs(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.bugstemplate, opts);
        }
      }, {
        key: "https",
        value: function https(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.httpstemplate, opts);
        }
      }, {
        key: "git",
        value: function git(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.gittemplate, opts);
        }
      }, {
        key: "shortcut",
        value: function shortcut(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.shortcuttemplate, opts);
        }
      }, {
        key: "path",
        value: function path(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.pathtemplate, opts);
        }
      }, {
        key: "tarball",
        value: function tarball(opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.tarballtemplate, _objectSpread(_objectSpread({}, opts), {}, {
            noCommittish: false
          }));
        }
      }, {
        key: "file",
        value: function file(path, opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.filetemplate, _objectSpread(_objectSpread({}, opts), {}, {
            path: path
          }));
        }
      }, {
        key: "edit",
        value: function edit(path, opts) {
          return _assertClassBrand(_GitHost_brand, this, _fill).call(this, this.edittemplate, _objectSpread(_objectSpread({}, opts), {}, {
            path: path
          }));
        }
      }, {
        key: "getDefaultRepresentation",
        value: function getDefaultRepresentation() {
          return this["default"];
        }
      }, {
        key: "toString",
        value: function toString(opts) {
          if (this["default"] && typeof this[this["default"]] === 'function') {
            return this[this["default"]](opts);
          }
          return this.sshurl(opts);
        }
      }], [{
        key: "addHost",
        value: function addHost(name, host) {
          _gitHosts._[name] = host;
          _gitHosts._.byDomain[host.domain] = name;
          _gitHosts._.byShortcut["".concat(name, ":")] = name;
          _protocols._["".concat(name, ":")] = {
            name: name
          };
        }
      }, {
        key: "fromUrl",
        value: function fromUrl(giturl, opts) {
          if (typeof giturl !== 'string') {
            return;
          }
          var __temp_7__ = opts;
          if (!__temp_7__) __temp_7__ = {};
          var key = giturl + JSON.stringify(__temp_7__);
          if (!cache.has(key)) {
            var hostArgs = _fromUrl(giturl, opts, {
              gitHosts: _gitHosts._,
              protocols: _protocols._
            });
            cache.set(key, hostArgs ? _construct(GitHost, _toConsumableArray(hostArgs)) : undefined);
          }
          return cache.get(key);
        }
      }, {
        key: "parseUrl",
        value: function parseUrl(url) {
          return _parseUrl(url);
        }
      }]);
    }();
    function _fill(template, opts) {
      if (typeof template !== 'function') {
        return null;
      }
      var options = _objectSpread(_objectSpread(_objectSpread({}, this), this.opts), opts);

      // the path should always be set so we don't end up with 'undefined' in urls
      if (!options.path) {
        options.path = '';
      }

      // template functions will insert the leading slash themselves
      if (options.path.startsWith('/')) {
        options.path = options.path.slice(1);
      }
      if (options.noCommittish) {
        options.committish = null;
      }
      var result = template(options);
      return options.noGitPlus && result.startsWith('git+') ? result.slice(4) : result;
    }
    var _gitHosts = {
      _: {
        byShortcut: {},
        byDomain: {}
      }
    };
    var _protocols = {
      _: {
        'git+ssh:': {
          name: 'sshurl'
        },
        'ssh:': {
          name: 'sshurl'
        },
        'git+https:': {
          name: 'https',
          auth: true
        },
        'git:': {
          auth: true
        },
        'http:': {
          auth: true
        },
        'https:': {
          auth: true
        },
        'git+http:': {
          auth: true
        }
      }
    };
    for (var _i2 = 0, _Object$entries = Object.entries(hosts); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        name = _Object$entries$_i[0],
        host = _Object$entries$_i[1];
      GitHost.addHost(name, host);
    }
    module.exports = GitHost;

    /***/
  }), (/* 2 */
  /***/function (__unused_webpack_module, exports) {
    "use strict";

    /**
     * @module LRUCache
     */
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LRUCache = void 0;
    var __temp_8__ = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object';
    if (__temp_8__) __temp_8__ = performance;
    var __temp_9__ = __temp_8__;
    if (__temp_9__) __temp_9__ = typeof performance.now === 'function';
    var perf = __temp_9__ ? performance : Date;
    var warned = new Set();
    /* c8 ignore start */
    var __temp_10__ = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object';
    if (__temp_10__) __temp_10__ = !!process;
    var PROCESS = __temp_10__ ? process : {};
    /* c8 ignore start */
    var emitWarning = function emitWarning(msg, type, code, fn) {
      typeof PROCESS.emitWarning === 'function' ? PROCESS.emitWarning(msg, type, code, fn) : console.error("[".concat(code, "] ").concat(type, ": ").concat(msg));
    };
    var AC = globalThis.AbortController;
    var AS = globalThis.AbortSignal;
    /* c8 ignore start */
    if (typeof AC === 'undefined') {
      var _PROCESS$env;
      //@ts-ignore
      AS = /*#__PURE__*/function () {
        function AbortSignal() {
          _classCallCheck(this, AbortSignal);
          _defineProperty(this, "_onabort", []);
          _defineProperty(this, "aborted", false);
        }
        return _createClass(AbortSignal, [{
          key: "addEventListener",
          value: function addEventListener(_, fn) {
            this._onabort.push(fn);
          }
        }]);
      }();
      //@ts-ignore
      AC = /*#__PURE__*/function () {
        function AbortController() {
          _classCallCheck(this, AbortController);
          _defineProperty(this, "signal", new AS());
          _warnACPolyfill();
        }
        return _createClass(AbortController, [{
          key: "abort",
          value: function abort(reason) {
            var _this$signal$onabort, _this$signal;
            if (this.signal.aborted) return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            var _iterator2 = _createForOfIteratorHelper(this.signal._onabort),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fn = _step2.value;
                fn(reason);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            (_this$signal$onabort = (_this$signal = this.signal).onabort) === null || _this$signal$onabort === void 0 || _this$signal$onabort.call(_this$signal, reason);
          }
        }]);
      }();
      var __temp_11__ = (_PROCESS$env = PROCESS.env) === null;
      if (!__temp_11__) __temp_11__ = _PROCESS$env === void 0;
      var printACPolyfillWarning = (__temp_11__ ? void 0 : _PROCESS$env.LRU_CACHE_IGNORE_AC_WARNING) !== '1';
      var _warnACPolyfill = function warnACPolyfill() {
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' + 'node 14, load an AbortController polyfill from the ' + '`node-abort-controller` package. A minimal polyfill is ' + 'provided for use by LRUCache.fetch(), but it should not be ' + 'relied upon in other contexts (eg, passing it to other APIs that ' + 'use AbortController/AbortSignal might have undesirable effects). ' + 'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', _warnACPolyfill);
      };
    }
    /* c8 ignore stop */
    var shouldWarn = function shouldWarn(code) {
      return !warned.has(code);
    };
    var TYPE = Symbol('type');
    var isPosInt = function isPosInt(n) {
      return n && n === Math.floor(n) && n > 0 && isFinite(n);
    };
    /* c8 ignore start */
    // This is a little bit ridiculous, tbh.
    // The maximum array length is 2^32-1 or thereabouts on most JS impls.
    // And well before that point, you're caching the entire world, I mean,
    // that's ~32GB of just integers for the next/prev links, plus whatever
    // else to hold that many keys and values.  Just filling the memory with
    // zeroes at init time is brutal when you get that big.
    // But why not be complete?
    // Maybe in the future, these limits will have expanded.
    var getUintArray = function getUintArray(max) {
      return !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
    };
    /* c8 ignore stop */
    var ZeroArray = /*#__PURE__*/function (_Array) {
      function ZeroArray(size) {
        var _this;
        _classCallCheck(this, ZeroArray);
        _this = _callSuper(this, ZeroArray, [size]);
        _this.fill(0);
        return _this;
      }
      _inherits(ZeroArray, _Array);
      return _createClass(ZeroArray);
    }(/*#__PURE__*/_wrapNativeSuper(Array));
    var Stack = /*#__PURE__*/function () {
      function Stack(max, HeapCls) {
        _classCallCheck(this, Stack);
        /* c8 ignore start */
        if (!_constructing._) {
          throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */
        this.heap = new HeapCls(max);
        this.length = 0;
      }
      return _createClass(Stack, [{
        key: "push",
        value: function push(n) {
          this.heap[this.length++] = n;
        }
      }, {
        key: "pop",
        value: function pop() {
          return this.heap[--this.length];
        }
      }], [{
        key: "create",
        value: function create(max) {
          var HeapCls = getUintArray(max);
          if (!HeapCls) return [];
          _constructing._ = true;
          var s = new Stack(max, HeapCls);
          _constructing._ = false;
          return s;
        }
      }]);
    }();
    /**
     * Default export, the thing you're using this module to get.
     *
     * The `K` and `V` types define the key and value types, respectively. The
     * optional `FC` type defines the type of the `context` object passed to
     * `cache.fetch()` and `cache.memo()`.
     *
     * Keys and values **must not** be `null` or `undefined`.
     *
     * All properties from the options object (with the exception of `max`,
     * `maxSize`, `fetchMethod`, `memoMethod`, `dispose` and `disposeAfter`) are
     * added as normal public members. (The listed options are read-only getters.)
     *
     * Changing any of these will alter the defaults for subsequent method calls.
     */
    // private constructor
    var _constructing = {
      _: false
    };
    var _max = /*#__PURE__*/new WeakMap();
    var _maxSize = /*#__PURE__*/new WeakMap();
    var _dispose = /*#__PURE__*/new WeakMap();
    var _disposeAfter = /*#__PURE__*/new WeakMap();
    var _fetchMethod = /*#__PURE__*/new WeakMap();
    var _memoMethod = /*#__PURE__*/new WeakMap();
    var _size = /*#__PURE__*/new WeakMap();
    var _calculatedSize = /*#__PURE__*/new WeakMap();
    var _keyMap = /*#__PURE__*/new WeakMap();
    var _keyList = /*#__PURE__*/new WeakMap();
    var _valList = /*#__PURE__*/new WeakMap();
    var _next = /*#__PURE__*/new WeakMap();
    var _prev = /*#__PURE__*/new WeakMap();
    var _head = /*#__PURE__*/new WeakMap();
    var _tail = /*#__PURE__*/new WeakMap();
    var _free = /*#__PURE__*/new WeakMap();
    var _disposed = /*#__PURE__*/new WeakMap();
    var _sizes = /*#__PURE__*/new WeakMap();
    var _starts = /*#__PURE__*/new WeakMap();
    var _ttls = /*#__PURE__*/new WeakMap();
    var _hasDispose = /*#__PURE__*/new WeakMap();
    var _hasFetchMethod = /*#__PURE__*/new WeakMap();
    var _hasDisposeAfter = /*#__PURE__*/new WeakMap();
    var _LRUCache_brand = /*#__PURE__*/new WeakSet();
    var _updateItemAge = /*#__PURE__*/new WeakMap();
    var _statusTTL = /*#__PURE__*/new WeakMap();
    var _setItemTTL = /*#__PURE__*/new WeakMap();
    var _isStale = /*#__PURE__*/new WeakMap();
    var _removeItemSize = /*#__PURE__*/new WeakMap();
    var _addItemSize = /*#__PURE__*/new WeakMap();
    var _requireSize = /*#__PURE__*/new WeakMap();
    var LRUCache = /*#__PURE__*/function () {
      function LRUCache(_options) {
        _classCallCheck(this, LRUCache);
        _classPrivateMethodInitSpec(this, _LRUCache_brand);
        // options that cannot be changed without disaster
        _classPrivateFieldInitSpec(this, _max, void 0);
        _classPrivateFieldInitSpec(this, _maxSize, void 0);
        _classPrivateFieldInitSpec(this, _dispose, void 0);
        _classPrivateFieldInitSpec(this, _disposeAfter, void 0);
        _classPrivateFieldInitSpec(this, _fetchMethod, void 0);
        _classPrivateFieldInitSpec(this, _memoMethod, void 0);
        // computed properties
        _classPrivateFieldInitSpec(this, _size, void 0);
        _classPrivateFieldInitSpec(this, _calculatedSize, void 0);
        _classPrivateFieldInitSpec(this, _keyMap, void 0);
        _classPrivateFieldInitSpec(this, _keyList, void 0);
        _classPrivateFieldInitSpec(this, _valList, void 0);
        _classPrivateFieldInitSpec(this, _next, void 0);
        _classPrivateFieldInitSpec(this, _prev, void 0);
        _classPrivateFieldInitSpec(this, _head, void 0);
        _classPrivateFieldInitSpec(this, _tail, void 0);
        _classPrivateFieldInitSpec(this, _free, void 0);
        _classPrivateFieldInitSpec(this, _disposed, void 0);
        _classPrivateFieldInitSpec(this, _sizes, void 0);
        _classPrivateFieldInitSpec(this, _starts, void 0);
        _classPrivateFieldInitSpec(this, _ttls, void 0);
        _classPrivateFieldInitSpec(this, _hasDispose, void 0);
        _classPrivateFieldInitSpec(this, _hasFetchMethod, void 0);
        _classPrivateFieldInitSpec(this, _hasDisposeAfter, void 0);
        // conditionally set private methods related to TTL
        _classPrivateFieldInitSpec(this, _updateItemAge, function () {});
        _classPrivateFieldInitSpec(this, _statusTTL, function () {});
        _classPrivateFieldInitSpec(this, _setItemTTL, function () {});
        /* c8 ignore stop */
        _classPrivateFieldInitSpec(this, _isStale, function () {
          return false;
        });
        _classPrivateFieldInitSpec(this, _removeItemSize, function (_i) {});
        _classPrivateFieldInitSpec(this, _addItemSize, function (_i, _s, _st) {});
        _classPrivateFieldInitSpec(this, _requireSize, function (_k, _v, size, sizeCalculation) {
          if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
          }
          return 0;
        });
        /**
         * A String value that is used in the creation of the default string
         * description of an object. Called by the built-in method
         * `Object.prototype.toString`.
         */
        _defineProperty(this, Symbol.toStringTag, 'LRUCache');
        var _options$max = _options.max,
          max = _options$max === void 0 ? 0 : _options$max,
          _ttl = _options.ttl,
          _options$ttlResolutio = _options.ttlResolution,
          ttlResolution = _options$ttlResolutio === void 0 ? 1 : _options$ttlResolutio,
          ttlAutopurge = _options.ttlAutopurge,
          updateAgeOnGet = _options.updateAgeOnGet,
          updateAgeOnHas = _options.updateAgeOnHas,
          _allowStale = _options.allowStale,
          dispose = _options.dispose,
          disposeAfter = _options.disposeAfter,
          noDisposeOnSet = _options.noDisposeOnSet,
          noUpdateTTL = _options.noUpdateTTL,
          _options$maxSize = _options.maxSize,
          _maxSize2 = _options$maxSize === void 0 ? 0 : _options$maxSize,
          _options$maxEntrySize = _options.maxEntrySize,
          maxEntrySize = _options$maxEntrySize === void 0 ? 0 : _options$maxEntrySize,
          _sizeCalculation = _options.sizeCalculation,
          fetchMethod = _options.fetchMethod,
          memoMethod = _options.memoMethod,
          noDeleteOnFetchRejection = _options.noDeleteOnFetchRejection,
          noDeleteOnStaleGet = _options.noDeleteOnStaleGet,
          allowStaleOnFetchRejection = _options.allowStaleOnFetchRejection,
          allowStaleOnFetchAbort = _options.allowStaleOnFetchAbort,
          ignoreFetchAbort = _options.ignoreFetchAbort;
        if (max !== 0 && !isPosInt(max)) {
          throw new TypeError('max option must be a nonnegative integer');
        }
        var UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
          throw new Error('invalid max value: ' + max);
        }
        _classPrivateFieldSet(_max, this, max);
        _classPrivateFieldSet(_maxSize, this, _maxSize2);
        var __temp_12__ = maxEntrySize;
        if (!__temp_12__) __temp_12__ = _classPrivateFieldGet(_maxSize, this);
        this.maxEntrySize = __temp_12__;
        this.sizeCalculation = _sizeCalculation;
        if (this.sizeCalculation) {
          if (!_classPrivateFieldGet(_maxSize, this) && !this.maxEntrySize) {
            throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
          }
          if (typeof this.sizeCalculation !== 'function') {
            throw new TypeError('sizeCalculation set to non-function');
          }
        }
        if (memoMethod !== undefined && typeof memoMethod !== 'function') {
          throw new TypeError('memoMethod must be a function if defined');
        }
        _classPrivateFieldSet(_memoMethod, this, memoMethod);
        if (fetchMethod !== undefined && typeof fetchMethod !== 'function') {
          throw new TypeError('fetchMethod must be a function if specified');
        }
        _classPrivateFieldSet(_fetchMethod, this, fetchMethod);
        _classPrivateFieldSet(_hasFetchMethod, this, !!fetchMethod);
        _classPrivateFieldSet(_keyMap, this, new Map());
        _classPrivateFieldSet(_keyList, this, new Array(max).fill(undefined));
        _classPrivateFieldSet(_valList, this, new Array(max).fill(undefined));
        _classPrivateFieldSet(_next, this, new UintArray(max));
        _classPrivateFieldSet(_prev, this, new UintArray(max));
        _classPrivateFieldSet(_head, this, 0);
        _classPrivateFieldSet(_tail, this, 0);
        _classPrivateFieldSet(_free, this, Stack.create(max));
        _classPrivateFieldSet(_size, this, 0);
        _classPrivateFieldSet(_calculatedSize, this, 0);
        if (typeof dispose === 'function') {
          _classPrivateFieldSet(_dispose, this, dispose);
        }
        if (typeof disposeAfter === 'function') {
          _classPrivateFieldSet(_disposeAfter, this, disposeAfter);
          _classPrivateFieldSet(_disposed, this, []);
        } else {
          _classPrivateFieldSet(_disposeAfter, this, undefined);
          _classPrivateFieldSet(_disposed, this, undefined);
        }
        _classPrivateFieldSet(_hasDispose, this, !!_classPrivateFieldGet(_dispose, this));
        _classPrivateFieldSet(_hasDisposeAfter, this, !!_classPrivateFieldGet(_disposeAfter, this));
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
          if (_classPrivateFieldGet(_maxSize, this) !== 0) {
            if (!isPosInt(_classPrivateFieldGet(_maxSize, this))) {
              throw new TypeError('maxSize must be a positive integer if specified');
            }
          }
          if (!isPosInt(this.maxEntrySize)) {
            throw new TypeError('maxEntrySize must be a positive integer if specified');
          }
          _assertClassBrand(_LRUCache_brand, this, _initializeSizeTracking).call(this);
        }
        this.allowStale = !!_allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        var __temp_13__ = isPosInt(ttlResolution);
        if (!__temp_13__) __temp_13__ = ttlResolution === 0;
        this.ttlResolution = __temp_13__ ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        var __temp_14__ = _ttl;
        if (!__temp_14__) __temp_14__ = 0;
        this.ttl = __temp_14__;
        if (this.ttl) {
          if (!isPosInt(this.ttl)) {
            throw new TypeError('ttl must be a positive integer if specified');
          }
          _assertClassBrand(_LRUCache_brand, this, _initializeTTLTracking).call(this);
        }
        // do not allow completely unbounded caches
        if (_classPrivateFieldGet(_max, this) === 0 && this.ttl === 0 && _classPrivateFieldGet(_maxSize, this) === 0) {
          throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !_classPrivateFieldGet(_max, this) && !_classPrivateFieldGet(_maxSize, this)) {
          var code = 'LRU_CACHE_UNBOUNDED';
          if (shouldWarn(code)) {
            warned.add(code);
            var msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' + 'result in unbounded memory consumption.';
            emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
          }
        }
      }
      /**
       * Return the number of ms left in the item's TTL. If item is not in cache,
       * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
       */
      return _createClass(LRUCache, [{
        key: "max",
        get:
        // Protected read-only members
        /**
         * {@link LRUCache.OptionsBase.max} (read-only)
         */
        function get() {
          return _classPrivateFieldGet(_max, this);
        }
        /**
         * {@link LRUCache.OptionsBase.maxSize} (read-only)
         */
      }, {
        key: "maxSize",
        get: function get() {
          return _classPrivateFieldGet(_maxSize, this);
        }
        /**
         * The total computed size of items in the cache (read-only)
         */
      }, {
        key: "calculatedSize",
        get: function get() {
          return _classPrivateFieldGet(_calculatedSize, this);
        }
        /**
         * The number of items stored in the cache (read-only)
         */
      }, {
        key: "size",
        get: function get() {
          return _classPrivateFieldGet(_size, this);
        }
        /**
         * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
         */
      }, {
        key: "fetchMethod",
        get: function get() {
          return _classPrivateFieldGet(_fetchMethod, this);
        }
      }, {
        key: "memoMethod",
        get: function get() {
          return _classPrivateFieldGet(_memoMethod, this);
        }
        /**
         * {@link LRUCache.OptionsBase.dispose} (read-only)
         */
      }, {
        key: "dispose",
        get: function get() {
          return _classPrivateFieldGet(_dispose, this);
        }
        /**
         * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
         */
      }, {
        key: "disposeAfter",
        get: function get() {
          return _classPrivateFieldGet(_disposeAfter, this);
        }
      }, {
        key: "getRemainingTTL",
        value: function getRemainingTTL(key) {
          return _classPrivateFieldGet(_keyMap, this).has(key) ? Infinity : 0;
        }
      }, {
        key: "entries",
        value:
        /*#__PURE__*/
        /**
         * Return a generator yielding `[key, value]` pairs,
         * in order from most recently used to least recently used.
         */
        _regeneratorRuntime().mark(function entries() {
          var _iterator3, _step3, i;
          return _regeneratorRuntime().wrap(function entries$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this));
                _context.prev = 1;
                _iterator3.s();
              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context.next = 10;
                  break;
                }
                i = _step3.value;
                if (!(_classPrivateFieldGet(_valList, this)[i] !== undefined && _classPrivateFieldGet(_keyList, this)[i] !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context.next = 8;
                  break;
                }
                _context.next = 8;
                return [_classPrivateFieldGet(_keyList, this)[i], _classPrivateFieldGet(_valList, this)[i]];
              case 8:
                _context.next = 3;
                break;
              case 10:
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                _iterator3.e(_context.t0);
              case 15:
                _context.prev = 15;
                _iterator3.f();
                return _context.finish(15);
              case 18:
              case "end":
                return _context.stop();
            }
          }, entries, this, [[1, 12, 15, 18]]);
        })
        /**
         * Inverse order version of {@link LRUCache.entries}
         *
         * Return a generator yielding `[key, value]` pairs,
         * in order from least recently used to most recently used.
         */
      }, {
        key: "rentries",
        value:
        /*#__PURE__*/
        _regeneratorRuntime().mark(function rentries() {
          var _iterator4, _step4, i;
          return _regeneratorRuntime().wrap(function rentries$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this));
                _context2.prev = 1;
                _iterator4.s();
              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context2.next = 10;
                  break;
                }
                i = _step4.value;
                if (!(_classPrivateFieldGet(_valList, this)[i] !== undefined && _classPrivateFieldGet(_keyList, this)[i] !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context2.next = 8;
                  break;
                }
                _context2.next = 8;
                return [_classPrivateFieldGet(_keyList, this)[i], _classPrivateFieldGet(_valList, this)[i]];
              case 8:
                _context2.next = 3;
                break;
              case 10:
                _context2.next = 15;
                break;
              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                _iterator4.e(_context2.t0);
              case 15:
                _context2.prev = 15;
                _iterator4.f();
                return _context2.finish(15);
              case 18:
              case "end":
                return _context2.stop();
            }
          }, rentries, this, [[1, 12, 15, 18]]);
        })
        /**
         * Return a generator yielding the keys in the cache,
         * in order from most recently used to least recently used.
         */
      }, {
        key: "keys",
        value:
        /*#__PURE__*/
        _regeneratorRuntime().mark(function keys() {
          var _iterator5, _step5, i, k;
          return _regeneratorRuntime().wrap(function keys$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _iterator5 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this));
                _context3.prev = 1;
                _iterator5.s();
              case 3:
                if ((_step5 = _iterator5.n()).done) {
                  _context3.next = 11;
                  break;
                }
                i = _step5.value;
                k = _classPrivateFieldGet(_keyList, this)[i];
                if (!(k !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 9;
                return k;
              case 9:
                _context3.next = 3;
                break;
              case 11:
                _context3.next = 16;
                break;
              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);
                _iterator5.e(_context3.t0);
              case 16:
                _context3.prev = 16;
                _iterator5.f();
                return _context3.finish(16);
              case 19:
              case "end":
                return _context3.stop();
            }
          }, keys, this, [[1, 13, 16, 19]]);
        })
        /**
         * Inverse order version of {@link LRUCache.keys}
         *
         * Return a generator yielding the keys in the cache,
         * in order from least recently used to most recently used.
         */
      }, {
        key: "rkeys",
        value:
        /*#__PURE__*/
        _regeneratorRuntime().mark(function rkeys() {
          var _iterator6, _step6, i, k;
          return _regeneratorRuntime().wrap(function rkeys$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _iterator6 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this));
                _context4.prev = 1;
                _iterator6.s();
              case 3:
                if ((_step6 = _iterator6.n()).done) {
                  _context4.next = 11;
                  break;
                }
                i = _step6.value;
                k = _classPrivateFieldGet(_keyList, this)[i];
                if (!(k !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context4.next = 9;
                  break;
                }
                _context4.next = 9;
                return k;
              case 9:
                _context4.next = 3;
                break;
              case 11:
                _context4.next = 16;
                break;
              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](1);
                _iterator6.e(_context4.t0);
              case 16:
                _context4.prev = 16;
                _iterator6.f();
                return _context4.finish(16);
              case 19:
              case "end":
                return _context4.stop();
            }
          }, rkeys, this, [[1, 13, 16, 19]]);
        })
        /**
         * Return a generator yielding the values in the cache,
         * in order from most recently used to least recently used.
         */
      }, {
        key: "values",
        value:
        /*#__PURE__*/
        _regeneratorRuntime().mark(function values() {
          var _iterator7, _step7, i, v;
          return _regeneratorRuntime().wrap(function values$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _iterator7 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this));
                _context5.prev = 1;
                _iterator7.s();
              case 3:
                if ((_step7 = _iterator7.n()).done) {
                  _context5.next = 11;
                  break;
                }
                i = _step7.value;
                v = _classPrivateFieldGet(_valList, this)[i];
                if (!(v !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context5.next = 9;
                  break;
                }
                _context5.next = 9;
                return _classPrivateFieldGet(_valList, this)[i];
              case 9:
                _context5.next = 3;
                break;
              case 11:
                _context5.next = 16;
                break;
              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](1);
                _iterator7.e(_context5.t0);
              case 16:
                _context5.prev = 16;
                _iterator7.f();
                return _context5.finish(16);
              case 19:
              case "end":
                return _context5.stop();
            }
          }, values, this, [[1, 13, 16, 19]]);
        })
        /**
         * Inverse order version of {@link LRUCache.values}
         *
         * Return a generator yielding the values in the cache,
         * in order from least recently used to most recently used.
         */
      }, {
        key: "rvalues",
        value:
        /*#__PURE__*/
        _regeneratorRuntime().mark(function rvalues() {
          var _iterator8, _step8, i, v;
          return _regeneratorRuntime().wrap(function rvalues$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _iterator8 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this));
                _context6.prev = 1;
                _iterator8.s();
              case 3:
                if ((_step8 = _iterator8.n()).done) {
                  _context6.next = 11;
                  break;
                }
                i = _step8.value;
                v = _classPrivateFieldGet(_valList, this)[i];
                if (!(v !== undefined && !_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, _classPrivateFieldGet(_valList, this)[i]))) {
                  _context6.next = 9;
                  break;
                }
                _context6.next = 9;
                return _classPrivateFieldGet(_valList, this)[i];
              case 9:
                _context6.next = 3;
                break;
              case 11:
                _context6.next = 16;
                break;
              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](1);
                _iterator8.e(_context6.t0);
              case 16:
                _context6.prev = 16;
                _iterator8.f();
                return _context6.finish(16);
              case 19:
              case "end":
                return _context6.stop();
            }
          }, rvalues, this, [[1, 13, 16, 19]]);
        })
        /**
         * Iterating over the cache itself yields the same results as
         * {@link LRUCache.entries}
         */
      }, {
        key: Symbol.iterator,
        value: function value() {
          return this.entries();
        }
      }, {
        key: "find",
        value:
        /**
         * Find a value for which the supplied fn method returns a truthy value,
         * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
         */
        function find(fn) {
          var __temp_15__ = arguments.length > 1;
          if (__temp_15__) __temp_15__ = arguments[1] !== undefined;
          var getOptions = __temp_15__ ? arguments[1] : {};
          var _iterator9 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this)),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var i = _step9.value;
              var v = _classPrivateFieldGet(_valList, this)[i];
              var value = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
              if (value === undefined) continue;
              if (fn(value, _classPrivateFieldGet(_keyList, this)[i], this)) {
                return this.get(_classPrivateFieldGet(_keyList, this)[i], getOptions);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        /**
         * Call the supplied function on each item in the cache, in order from most
         * recently used to least recently used.
         *
         * `fn` is called as `fn(value, key, cache)`.
         *
         * If `thisp` is provided, function will be called in the `this`-context of
         * the provided object, or the cache if no `thisp` object is provided.
         *
         * Does not update age or recenty of use, or iterate over stale values.
         */
      }, {
        key: "forEach",
        value: function forEach(fn) {
          var __temp_16__ = arguments.length > 1;
          if (__temp_16__) __temp_16__ = arguments[1] !== undefined;
          var thisp = __temp_16__ ? arguments[1] : this;
          var _iterator10 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this)),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var i = _step10.value;
              var v = _classPrivateFieldGet(_valList, this)[i];
              var value = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
              if (value === undefined) continue;
              fn.call(thisp, value, _classPrivateFieldGet(_keyList, this)[i], this);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
        /**
         * The same as {@link LRUCache.forEach} but items are iterated over in
         * reverse order.  (ie, less recently used items are iterated over first.)
         */
      }, {
        key: "rforEach",
        value: function rforEach(fn) {
          var __temp_17__ = arguments.length > 1;
          if (__temp_17__) __temp_17__ = arguments[1] !== undefined;
          var thisp = __temp_17__ ? arguments[1] : this;
          var _iterator11 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this)),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var i = _step11.value;
              var v = _classPrivateFieldGet(_valList, this)[i];
              var value = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
              if (value === undefined) continue;
              fn.call(thisp, value, _classPrivateFieldGet(_keyList, this)[i], this);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
        /**
         * Delete any stale entries. Returns true if anything was removed,
         * false otherwise.
         */
      }, {
        key: "purgeStale",
        value: function purgeStale() {
          var deleted = false;
          var _iterator12 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this, {
              allowStale: true
            })),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var i = _step12.value;
              if (_classPrivateFieldGet(_isStale, this).call(this, i)) {
                _assertClassBrand(_LRUCache_brand, this, _delete).call(this, _classPrivateFieldGet(_keyList, this)[i], 'expire');
                deleted = true;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
          return deleted;
        }
        /**
         * Get the extended info about a given entry, to get its value, size, and
         * TTL info simultaneously. Returns `undefined` if the key is not present.
         *
         * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
         * serialization, the `start` value is always the current timestamp, and the
         * `ttl` is a calculated remaining time to live (negative if expired).
         *
         * Always returns stale values, if their info is found in the cache, so be
         * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
         * if relevant.
         */
      }, {
        key: "info",
        value: function info(key) {
          var i = _classPrivateFieldGet(_keyMap, this).get(key);
          if (i === undefined) return undefined;
          var v = _classPrivateFieldGet(_valList, this)[i];
          var value = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
          if (value === undefined) return undefined;
          var entry = {
            value: value
          };
          if (_classPrivateFieldGet(_ttls, this) && _classPrivateFieldGet(_starts, this)) {
            var ttl = _classPrivateFieldGet(_ttls, this)[i];
            var start = _classPrivateFieldGet(_starts, this)[i];
            if (ttl && start) {
              var remain = ttl - (perf.now() - start);
              entry.ttl = remain;
              entry.start = Date.now();
            }
          }
          if (_classPrivateFieldGet(_sizes, this)) {
            entry.size = _classPrivateFieldGet(_sizes, this)[i];
          }
          return entry;
        }
        /**
         * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
         * passed to {@link LRLUCache#load}.
         *
         * The `start` fields are calculated relative to a portable `Date.now()`
         * timestamp, even if `performance.now()` is available.
         *
         * Stale entries are always included in the `dump`, even if
         * {@link LRUCache.OptionsBase.allowStale} is false.
         *
         * Note: this returns an actual array, not a generator, so it can be more
         * easily passed around.
         */
      }, {
        key: "dump",
        value: function dump() {
          var arr = [];
          var _iterator13 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _indexes).call(this, {
              allowStale: true
            })),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var i = _step13.value;
              var key = _classPrivateFieldGet(_keyList, this)[i];
              var v = _classPrivateFieldGet(_valList, this)[i];
              var value = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
              if (value === undefined || key === undefined) continue;
              var entry = {
                value: value
              };
              if (_classPrivateFieldGet(_ttls, this) && _classPrivateFieldGet(_starts, this)) {
                entry.ttl = _classPrivateFieldGet(_ttls, this)[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                var age = perf.now() - _classPrivateFieldGet(_starts, this)[i];
                entry.start = Math.floor(Date.now() - age);
              }
              if (_classPrivateFieldGet(_sizes, this)) {
                entry.size = _classPrivateFieldGet(_sizes, this)[i];
              }
              arr.unshift([key, entry]);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
          return arr;
        }
        /**
         * Reset the cache and load in the items in entries in the order listed.
         *
         * The shape of the resulting cache may be different if the same options are
         * not used in both caches.
         *
         * The `start` fields are assumed to be calculated relative to a portable
         * `Date.now()` timestamp, even if `performance.now()` is available.
         */
      }, {
        key: "load",
        value: function load(arr) {
          this.clear();
          var _iterator14 = _createForOfIteratorHelper(arr),
            _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _step14$value = _slicedToArray(_step14.value, 2),
                key = _step14$value[0],
                entry = _step14$value[1];
              if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                var age = Date.now() - entry.start;
                entry.start = perf.now() - age;
              }
              this.set(key, entry.value, entry);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
        /**
         * Add a value to the cache.
         *
         * Note: if `undefined` is specified as a value, this is an alias for
         * {@link LRUCache#delete}
         *
         * Fields on the {@link LRUCache.SetOptions} options param will override
         * their corresponding values in the constructor options for the scope
         * of this single `set()` operation.
         *
         * If `start` is provided, then that will set the effective start
         * time for the TTL calculation. Note that this must be a previous
         * value of `performance.now()` if supported, or a previous value of
         * `Date.now()` if not.
         *
         * Options object may also include `size`, which will prevent
         * calling the `sizeCalculation` function and just use the specified
         * number if it is a positive integer, and `noDisposeOnSet` which
         * will prevent calling a `dispose` function in the case of
         * overwrites.
         *
         * If the `size` (or return value of `sizeCalculation`) for a given
         * entry is greater than `maxEntrySize`, then the item will not be
         * added to the cache.
         *
         * Will update the recency of the entry.
         *
         * If the value is `undefined`, then this is an alias for
         * `cache.delete(key)`. `undefined` is never stored in the cache.
         */
      }, {
        key: "set",
        value: function set(k, v) {
          var __temp_18__ = arguments.length > 2;
          if (__temp_18__) arguments[2] !== undefined, _readOnlyError("__temp_18__");
          var setOptions = __temp_18__ ? arguments[2] : {};
          if (v === undefined) {
            this["delete"](k);
            return this;
          }
          var _setOptions$ttl = setOptions.ttl,
            ttl = _setOptions$ttl === void 0 ? this.ttl : _setOptions$ttl,
            start = setOptions.start,
            _setOptions$noDispose = setOptions.noDisposeOnSet,
            noDisposeOnSet = _setOptions$noDispose === void 0 ? this.noDisposeOnSet : _setOptions$noDispose,
            _setOptions$sizeCalcu = setOptions.sizeCalculation,
            sizeCalculation = _setOptions$sizeCalcu === void 0 ? this.sizeCalculation : _setOptions$sizeCalcu,
            status = setOptions.status;
          var _setOptions$noUpdateT = setOptions.noUpdateTTL,
            noUpdateTTL = _setOptions$noUpdateT === void 0 ? this.noUpdateTTL : _setOptions$noUpdateT;
          var __temp_19__ = setOptions.size;
          if (!__temp_19__) __temp_19__ = 0;
          var size = _classPrivateFieldGet(_requireSize, this).call(this, k, v, __temp_19__, sizeCalculation);
          // if the item doesn't fit, don't do anything
          // NB: maxEntrySize set to maxSize by default
          if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
              status.set = 'miss';
              status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            _assertClassBrand(_LRUCache_brand, this, _delete).call(this, k, 'set');
            return this;
          }
          var index = _classPrivateFieldGet(_size, this) === 0 ? undefined : _classPrivateFieldGet(_keyMap, this).get(k);
          if (index === undefined) {
            var _this$size, _this$size2;
            // addition
            index = _classPrivateFieldGet(_size, this) === 0 ? _classPrivateFieldGet(_tail, this) : _classPrivateFieldGet(_free, this).length !== 0 ? _classPrivateFieldGet(_free, this).pop() : _classPrivateFieldGet(_size, this) === _classPrivateFieldGet(_max, this) ? _assertClassBrand(_LRUCache_brand, this, _evict).call(this, false) : _classPrivateFieldGet(_size, this);
            _classPrivateFieldGet(_keyList, this)[index] = k;
            _classPrivateFieldGet(_valList, this)[index] = v;
            _classPrivateFieldGet(_keyMap, this).set(k, index);
            _classPrivateFieldGet(_next, this)[_classPrivateFieldGet(_tail, this)] = index;
            _classPrivateFieldGet(_prev, this)[index] = _classPrivateFieldGet(_tail, this);
            _classPrivateFieldSet(_tail, this, index);
            _classPrivateFieldSet(_size, this, (_this$size = _classPrivateFieldGet(_size, this), _this$size2 = _this$size++, _this$size)), _this$size2;
            _classPrivateFieldGet(_addItemSize, this).call(this, index, size, status);
            if (status) status.set = 'add';
            noUpdateTTL = false;
          } else {
            // update
            _assertClassBrand(_LRUCache_brand, this, _moveToTail).call(this, index);
            var oldVal = _classPrivateFieldGet(_valList, this)[index];
            if (v !== oldVal) {
              if (_classPrivateFieldGet(_hasFetchMethod, this) && _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, oldVal)) {
                oldVal.__abortController.abort(new Error('replaced'));
                var s = oldVal.__staleWhileFetching;
                if (s !== undefined && !noDisposeOnSet) {
                  if (_classPrivateFieldGet(_hasDispose, this)) {
                    var _classPrivateFieldGet2;
                    (_classPrivateFieldGet2 = _classPrivateFieldGet(_dispose, this)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.call(this, s, k, 'set');
                  }
                  if (_classPrivateFieldGet(_hasDisposeAfter, this)) {
                    var _classPrivateFieldGet3;
                    (_classPrivateFieldGet3 = _classPrivateFieldGet(_disposed, this)) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.push([s, k, 'set']);
                  }
                }
              } else if (!noDisposeOnSet) {
                if (_classPrivateFieldGet(_hasDispose, this)) {
                  var _classPrivateFieldGet4;
                  (_classPrivateFieldGet4 = _classPrivateFieldGet(_dispose, this)) === null || _classPrivateFieldGet4 === void 0 || _classPrivateFieldGet4.call(this, oldVal, k, 'set');
                }
                if (_classPrivateFieldGet(_hasDisposeAfter, this)) {
                  var _classPrivateFieldGet5;
                  (_classPrivateFieldGet5 = _classPrivateFieldGet(_disposed, this)) === null || _classPrivateFieldGet5 === void 0 || _classPrivateFieldGet5.push([oldVal, k, 'set']);
                }
              }
              _classPrivateFieldGet(_removeItemSize, this).call(this, index);
              _classPrivateFieldGet(_addItemSize, this).call(this, index, size, status);
              _classPrivateFieldGet(_valList, this)[index] = v;
              if (status) {
                status.set = 'replace';
                var __temp_20__ = oldVal;
                if (__temp_20__) __temp_20__ = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, oldVal);
                var oldValue = __temp_20__ ? oldVal.__staleWhileFetching : oldVal;
                if (oldValue !== undefined) status.oldValue = oldValue;
              }
            } else if (status) {
              status.set = 'update';
            }
          }
          if (ttl !== 0 && !_classPrivateFieldGet(_ttls, this)) {
            _assertClassBrand(_LRUCache_brand, this, _initializeTTLTracking).call(this);
          }
          if (_classPrivateFieldGet(_ttls, this)) {
            if (!noUpdateTTL) {
              _classPrivateFieldGet(_setItemTTL, this).call(this, index, ttl, start);
            }
            if (status) _classPrivateFieldGet(_statusTTL, this).call(this, status, index);
          }
          if (!noDisposeOnSet && _classPrivateFieldGet(_hasDisposeAfter, this) && _classPrivateFieldGet(_disposed, this)) {
            var dt = _classPrivateFieldGet(_disposed, this);
            var task;
            while (task = dt === null || dt === void 0 ? void 0 : dt.shift()) {
              var _classPrivateFieldGet6, _classPrivateFieldGet7;
              (_classPrivateFieldGet6 = _classPrivateFieldGet(_disposeAfter, this)) === null || _classPrivateFieldGet6 === void 0 || (_classPrivateFieldGet7 = _classPrivateFieldGet6).call.apply(_classPrivateFieldGet7, [this].concat(_toConsumableArray(task)));
            }
          }
          return this;
        }
        /**
         * Evict the least recently used item, returning its value or
         * `undefined` if cache is empty.
         */
      }, {
        key: "pop",
        value: function pop() {
          try {
            while (_classPrivateFieldGet(_size, this)) {
              var val = _classPrivateFieldGet(_valList, this)[_classPrivateFieldGet(_head, this)];
              _assertClassBrand(_LRUCache_brand, this, _evict).call(this, true);
              if (_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, val)) {
                if (val.__staleWhileFetching) {
                  return val.__staleWhileFetching;
                }
              } else if (val !== undefined) {
                return val;
              }
            }
          } finally {
            if (_classPrivateFieldGet(_hasDisposeAfter, this) && _classPrivateFieldGet(_disposed, this)) {
              var dt = _classPrivateFieldGet(_disposed, this);
              var task;
              while (task = dt === null || dt === void 0 ? void 0 : dt.shift()) {
                var _classPrivateFieldGet8, _classPrivateFieldGet9;
                (_classPrivateFieldGet8 = _classPrivateFieldGet(_disposeAfter, this)) === null || _classPrivateFieldGet8 === void 0 || (_classPrivateFieldGet9 = _classPrivateFieldGet8).call.apply(_classPrivateFieldGet9, [this].concat(_toConsumableArray(task)));
              }
            }
          }
        }
      }, {
        key: "has",
        value:
        /**
         * Check if a key is in the cache, without updating the recency of use.
         * Will return false if the item is stale, even though it is technically
         * in the cache.
         *
         * Check if a key is in the cache, without updating the recency of
         * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
         * to `true` in either the options or the constructor.
         *
         * Will return `false` if the item is stale, even though it is technically in
         * the cache. The difference can be determined (if it matters) by using a
         * `status` argument, and inspecting the `has` field.
         *
         * Will not update item age unless
         * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
         */
        function has(k) {
          var __temp_21__ = arguments.length > 1;
          if (__temp_21__) arguments[1] !== undefined, _readOnlyError("__temp_21__");
          var hasOptions = __temp_21__ ? arguments[1] : {};
          var _hasOptions$updateAge = hasOptions.updateAgeOnHas,
            updateAgeOnHas = _hasOptions$updateAge === void 0 ? this.updateAgeOnHas : _hasOptions$updateAge,
            status = hasOptions.status;
          var index = _classPrivateFieldGet(_keyMap, this).get(k);
          if (index !== undefined) {
            var v = _classPrivateFieldGet(_valList, this)[index];
            if (_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) && v.__staleWhileFetching === undefined) {
              return false;
            }
            if (!_classPrivateFieldGet(_isStale, this).call(this, index)) {
              if (updateAgeOnHas) {
                _classPrivateFieldGet(_updateItemAge, this).call(this, index);
              }
              if (status) {
                status.has = 'hit';
                _classPrivateFieldGet(_statusTTL, this).call(this, status, index);
              }
              return true;
            } else if (status) {
              status.has = 'stale';
              _classPrivateFieldGet(_statusTTL, this).call(this, status, index);
            }
          } else if (status) {
            status.has = 'miss';
          }
          return false;
        }
        /**
         * Like {@link LRUCache#get} but doesn't update recency or delete stale
         * items.
         *
         * Returns `undefined` if the item is stale, unless
         * {@link LRUCache.OptionsBase.allowStale} is set.
         */
      }, {
        key: "peek",
        value: function peek(k) {
          var __temp_22__ = arguments.length > 1;
          if (__temp_22__) arguments[1] !== undefined, _readOnlyError("__temp_22__");
          var peekOptions = __temp_22__ ? arguments[1] : {};
          var _peekOptions$allowSta = peekOptions.allowStale,
            allowStale = _peekOptions$allowSta === void 0 ? this.allowStale : _peekOptions$allowSta;
          var index = _classPrivateFieldGet(_keyMap, this).get(k);
          if (index === undefined || !allowStale && _classPrivateFieldGet(_isStale, this).call(this, index)) {
            return;
          }
          var v = _classPrivateFieldGet(_valList, this)[index];
          // either stale and allowed, or forcing a refresh of non-stale value
          return _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v) ? v.__staleWhileFetching : v;
        }
      }, {
        key: "fetch",
        value: function () {
          var _fetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(k) {
            var __temp_23__,
              fetchOptions,
              _fetchOptions$allowSt,
              allowStale,
              _fetchOptions$updateA,
              updateAgeOnGet,
              _fetchOptions$noDelet,
              noDeleteOnStaleGet,
              _fetchOptions$ttl,
              ttl,
              _fetchOptions$noDispo,
              noDisposeOnSet,
              _fetchOptions$size,
              size,
              _fetchOptions$sizeCal,
              sizeCalculation,
              _fetchOptions$noUpdat,
              noUpdateTTL,
              _fetchOptions$noDelet2,
              noDeleteOnFetchRejection,
              _fetchOptions$allowSt2,
              allowStaleOnFetchRejection,
              _fetchOptions$ignoreF,
              ignoreFetchAbort,
              _fetchOptions$allowSt3,
              allowStaleOnFetchAbort,
              context,
              _fetchOptions$forceRe,
              forceRefresh,
              status,
              signal,
              options,
              index,
              p,
              v,
              __temp_24__,
              stale,
              isStale,
              _p,
              hasStale,
              __temp_25__,
              staleVal,
              _args7 = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  __temp_23__ = _args7.length > 1;
                  if (__temp_23__) _args7[1] !== undefined, _readOnlyError("__temp_23__");
                  fetchOptions = __temp_23__ ? _args7[1] : {};
                  _fetchOptions$allowSt = fetchOptions.allowStale, allowStale = _fetchOptions$allowSt === void 0 ? this.allowStale : _fetchOptions$allowSt, _fetchOptions$updateA = fetchOptions.updateAgeOnGet, updateAgeOnGet = _fetchOptions$updateA === void 0 ? this.updateAgeOnGet : _fetchOptions$updateA, _fetchOptions$noDelet = fetchOptions.noDeleteOnStaleGet, noDeleteOnStaleGet = _fetchOptions$noDelet === void 0 ? this.noDeleteOnStaleGet : _fetchOptions$noDelet, _fetchOptions$ttl = fetchOptions.ttl, ttl = _fetchOptions$ttl === void 0 ? this.ttl : _fetchOptions$ttl, _fetchOptions$noDispo = fetchOptions.noDisposeOnSet, noDisposeOnSet = _fetchOptions$noDispo === void 0 ? this.noDisposeOnSet : _fetchOptions$noDispo, _fetchOptions$size = fetchOptions.size, size = _fetchOptions$size === void 0 ? 0 : _fetchOptions$size, _fetchOptions$sizeCal = fetchOptions.sizeCalculation, sizeCalculation = _fetchOptions$sizeCal === void 0 ? this.sizeCalculation : _fetchOptions$sizeCal, _fetchOptions$noUpdat = fetchOptions.noUpdateTTL, noUpdateTTL = _fetchOptions$noUpdat === void 0 ? this.noUpdateTTL : _fetchOptions$noUpdat, _fetchOptions$noDelet2 = fetchOptions.noDeleteOnFetchRejection, noDeleteOnFetchRejection = _fetchOptions$noDelet2 === void 0 ? this.noDeleteOnFetchRejection : _fetchOptions$noDelet2, _fetchOptions$allowSt2 = fetchOptions.allowStaleOnFetchRejection, allowStaleOnFetchRejection = _fetchOptions$allowSt2 === void 0 ? this.allowStaleOnFetchRejection : _fetchOptions$allowSt2, _fetchOptions$ignoreF = fetchOptions.ignoreFetchAbort, ignoreFetchAbort = _fetchOptions$ignoreF === void 0 ? this.ignoreFetchAbort : _fetchOptions$ignoreF, _fetchOptions$allowSt3 = fetchOptions.allowStaleOnFetchAbort, allowStaleOnFetchAbort = _fetchOptions$allowSt3 === void 0 ? this.allowStaleOnFetchAbort : _fetchOptions$allowSt3, context = fetchOptions.context, _fetchOptions$forceRe = fetchOptions.forceRefresh, forceRefresh = _fetchOptions$forceRe === void 0 ? false : _fetchOptions$forceRe, status = fetchOptions.status, signal = fetchOptions.signal;
                  if (_classPrivateFieldGet(_hasFetchMethod, this)) {
                    _context7.next = 7;
                    break;
                  }
                  if (status) status.fetch = 'get';
                  return _context7.abrupt("return", this.get(k, {
                    allowStale: allowStale,
                    updateAgeOnGet: updateAgeOnGet,
                    noDeleteOnStaleGet: noDeleteOnStaleGet,
                    status: status
                  }));
                case 7:
                  options = {
                    allowStale: allowStale,
                    updateAgeOnGet: updateAgeOnGet,
                    noDeleteOnStaleGet: noDeleteOnStaleGet,
                    ttl: ttl,
                    noDisposeOnSet: noDisposeOnSet,
                    size: size,
                    sizeCalculation: sizeCalculation,
                    noUpdateTTL: noUpdateTTL,
                    noDeleteOnFetchRejection: noDeleteOnFetchRejection,
                    allowStaleOnFetchRejection: allowStaleOnFetchRejection,
                    allowStaleOnFetchAbort: allowStaleOnFetchAbort,
                    ignoreFetchAbort: ignoreFetchAbort,
                    status: status,
                    signal: signal
                  };
                  index = _classPrivateFieldGet(_keyMap, this).get(k);
                  if (!(index === undefined)) {
                    _context7.next = 15;
                    break;
                  }
                  if (status) status.fetch = 'miss';
                  p = _assertClassBrand(_LRUCache_brand, this, _backgroundFetch).call(this, k, index, options, context);
                  return _context7.abrupt("return", p.__returned = p);
                case 15:
                  // in cache, maybe already fetching
                  v = _classPrivateFieldGet(_valList, this)[index];
                  if (!_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v)) {
                    _context7.next = 22;
                    break;
                  }
                  __temp_24__ = allowStale;
                  if (__temp_24__) __temp_24__ = v.__staleWhileFetching !== undefined;
                  stale = __temp_24__;
                  if (status) {
                    status.fetch = 'inflight';
                    if (stale) status.returnedStale = true;
                  }
                  return _context7.abrupt("return", stale ? v.__staleWhileFetching : v.__returned = v);
                case 22:
                  // if we force a refresh, that means do NOT serve the cached value,
                  // unless we are already in the process of refreshing the cache.
                  isStale = _classPrivateFieldGet(_isStale, this).call(this, index);
                  if (!(!forceRefresh && !isStale)) {
                    _context7.next = 29;
                    break;
                  }
                  if (status) status.fetch = 'hit';
                  _assertClassBrand(_LRUCache_brand, this, _moveToTail).call(this, index);
                  if (updateAgeOnGet) {
                    _classPrivateFieldGet(_updateItemAge, this).call(this, index);
                  }
                  if (status) _classPrivateFieldGet(_statusTTL, this).call(this, status, index);
                  return _context7.abrupt("return", v);
                case 29:
                  // ok, it is stale or a forced refresh, and not already fetching.
                  // refresh the cache.
                  _p = _assertClassBrand(_LRUCache_brand, this, _backgroundFetch).call(this, k, index, options, context);
                  hasStale = _p.__staleWhileFetching !== undefined;
                  __temp_25__ = hasStale;
                  if (__temp_25__) __temp_25__ = allowStale;
                  staleVal = __temp_25__;
                  if (status) {
                    status.fetch = isStale ? 'stale' : 'refresh';
                    if (staleVal && isStale) status.returnedStale = true;
                  }
                  return _context7.abrupt("return", staleVal ? _p.__staleWhileFetching : _p.__returned = _p);
                case 36:
                case "end":
                  return _context7.stop();
              }
            }, _callee, this);
          }));
          function fetch(_x2) {
            return _fetch.apply(this, arguments);
          }
          return fetch;
        }()
      }, {
        key: "forceFetch",
        value: function () {
          var _forceFetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(k) {
            var __temp_26__,
              fetchOptions,
              v,
              _args8 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  __temp_26__ = _args8.length > 1;
                  if (__temp_26__) __temp_26__ = _args8[1] !== undefined;
                  fetchOptions = __temp_26__ ? _args8[1] : {};
                  _context8.next = 5;
                  return this.fetch(k, fetchOptions);
                case 5:
                  v = _context8.sent;
                  if (!(v === undefined)) {
                    _context8.next = 8;
                    break;
                  }
                  throw new Error('fetch() returned undefined');
                case 8:
                  return _context8.abrupt("return", v);
                case 9:
                case "end":
                  return _context8.stop();
              }
            }, _callee2, this);
          }));
          function forceFetch(_x3) {
            return _forceFetch.apply(this, arguments);
          }
          return forceFetch;
        }()
      }, {
        key: "memo",
        value: function memo(k) {
          var __temp_27__ = arguments.length > 1;
          if (__temp_27__) arguments[1] !== undefined, _readOnlyError("__temp_27__");
          var memoOptions = __temp_27__ ? arguments[1] : {};
          var memoMethod = _classPrivateFieldGet(_memoMethod, this);
          if (!memoMethod) {
            throw new Error('no memoMethod provided to constructor');
          }
          var context = memoOptions.context,
            forceRefresh = memoOptions.forceRefresh,
            options = _objectWithoutProperties(memoOptions, _excluded);
          var v = this.get(k, options);
          if (!forceRefresh && v !== undefined) return v;
          var vv = memoMethod(k, v, {
            options: options,
            context: context
          });
          this.set(k, vv, options);
          return vv;
        }
        /**
         * Return a value from the cache. Will update the recency of the cache
         * entry found.
         *
         * If the key is not found, get() will return `undefined`.
         */
      }, {
        key: "get",
        value: function get(k) {
          var __temp_28__ = arguments.length > 1;
          if (__temp_28__) arguments[1] !== undefined, _readOnlyError("__temp_28__");
          var getOptions = __temp_28__ ? arguments[1] : {};
          var _getOptions$allowStal = getOptions.allowStale,
            allowStale = _getOptions$allowStal === void 0 ? this.allowStale : _getOptions$allowStal,
            _getOptions$updateAge = getOptions.updateAgeOnGet,
            updateAgeOnGet = _getOptions$updateAge === void 0 ? this.updateAgeOnGet : _getOptions$updateAge,
            _getOptions$noDeleteO = getOptions.noDeleteOnStaleGet,
            noDeleteOnStaleGet = _getOptions$noDeleteO === void 0 ? this.noDeleteOnStaleGet : _getOptions$noDeleteO,
            status = getOptions.status;
          var index = _classPrivateFieldGet(_keyMap, this).get(k);
          if (index !== undefined) {
            var value = _classPrivateFieldGet(_valList, this)[index];
            var fetching = _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, value);
            if (status) _classPrivateFieldGet(_statusTTL, this).call(this, status, index);
            if (_classPrivateFieldGet(_isStale, this).call(this, index)) {
              if (status) status.get = 'stale';
              // delete only if not an in-flight background fetch
              if (!fetching) {
                if (!noDeleteOnStaleGet) {
                  _assertClassBrand(_LRUCache_brand, this, _delete).call(this, k, 'expire');
                }
                if (status && allowStale) status.returnedStale = true;
                return allowStale ? value : undefined;
              } else {
                if (status && allowStale && value.__staleWhileFetching !== undefined) {
                  status.returnedStale = true;
                }
                return allowStale ? value.__staleWhileFetching : undefined;
              }
            } else {
              if (status) status.get = 'hit';
              // if we're currently fetching it, we don't actually have it yet
              // it's not stale, which means this isn't a staleWhileRefetching.
              // If it's not stale, and fetching, AND has a __staleWhileFetching
              // value, then that means the user fetched with {forceRefresh:true},
              // so it's safe to return that value.
              if (fetching) {
                return value.__staleWhileFetching;
              }
              _assertClassBrand(_LRUCache_brand, this, _moveToTail).call(this, index);
              if (updateAgeOnGet) {
                _classPrivateFieldGet(_updateItemAge, this).call(this, index);
              }
              return value;
            }
          } else if (status) {
            status.get = 'miss';
          }
        }
      }, {
        key: "delete",
        value: function (_delete2) {
          function _delete(_x) {
            return _delete2.apply(this, arguments);
          }
          _delete.toString = function () {
            return _delete2.toString();
          };
          return _delete;
        }(
        /**
         * Deletes a key out of the cache.
         *
         * Returns true if the key was deleted, false otherwise.
         */
        function (k) {
          return _assertClassBrand(_LRUCache_brand, this, _delete).call(this, k, 'delete');
        })
      }, {
        key: "clear",
        value:
        /**
         * Clear the cache entirely, throwing away all values.
         */
        function clear() {
          return _assertClassBrand(_LRUCache_brand, this, _clear).call(this, 'delete');
        }
      }], [{
        key: "unsafeExposeInternals",
        value:
        /**
         * Do not call this method unless you need to inspect the
         * inner workings of the cache.  If anything returned by this
         * object is modified in any way, strange breakage may occur.
         *
         * These fields are private for a reason!
         *
         * @internal
         */
        function unsafeExposeInternals(c) {
          return {
            // properties
            starts: _classPrivateFieldGet(_starts, c),
            ttls: _classPrivateFieldGet(_ttls, c),
            sizes: _classPrivateFieldGet(_sizes, c),
            keyMap: _classPrivateFieldGet(_keyMap, c),
            keyList: _classPrivateFieldGet(_keyList, c),
            valList: _classPrivateFieldGet(_valList, c),
            next: _classPrivateFieldGet(_next, c),
            prev: _classPrivateFieldGet(_prev, c),
            get head() {
              return _classPrivateFieldGet(_head, c);
            },
            get tail() {
              return _classPrivateFieldGet(_tail, c);
            },
            free: _classPrivateFieldGet(_free, c),
            // methods
            isBackgroundFetch: function isBackgroundFetch(p) {
              return _assertClassBrand(_LRUCache_brand, c, _isBackgroundFetch).call(c, p);
            },
            backgroundFetch: function backgroundFetch(k, index, options, context) {
              return _assertClassBrand(_LRUCache_brand, c, _backgroundFetch).call(c, k, index, options, context);
            },
            moveToTail: function moveToTail(index) {
              return _assertClassBrand(_LRUCache_brand, c, _moveToTail).call(c, index);
            },
            indexes: function indexes(options) {
              return _assertClassBrand(_LRUCache_brand, c, _indexes).call(c, options);
            },
            rindexes: function rindexes(options) {
              return _assertClassBrand(_LRUCache_brand, c, _rindexes).call(c, options);
            },
            isStale: function isStale(index) {
              return _classPrivateFieldGet(_isStale, c).call(c, index);
            }
          };
        }
      }]);
    }();
    function _initializeTTLTracking() {
      var _this2 = this;
      var ttls = new ZeroArray(_classPrivateFieldGet(_max, this));
      var starts = new ZeroArray(_classPrivateFieldGet(_max, this));
      _classPrivateFieldSet(_ttls, this, ttls);
      _classPrivateFieldSet(_starts, this, starts);
      _classPrivateFieldSet(_setItemTTL, this, function (index, ttl) {
        var __temp_29__ = arguments.length > 2;
        if (__temp_29__) __temp_29__ = arguments[2] !== undefined;
        var start = __temp_29__ ? arguments[2] : perf.now();
        starts[index] = ttl !== 0 ? start : 0;
        ttls[index] = ttl;
        if (ttl !== 0 && _this2.ttlAutopurge) {
          var t = setTimeout(function () {
            if (_classPrivateFieldGet(_isStale, _this2).call(_this2, index)) {
              _assertClassBrand(_LRUCache_brand, _this2, _delete).call(_this2, _classPrivateFieldGet(_keyList, _this2)[index], 'expire');
            }
          }, ttl + 1);
          // unref() not supported on all platforms
          /* c8 ignore start */
          if (t.unref) {
            t.unref();
          }
          /* c8 ignore stop */
        }
      });
      _classPrivateFieldSet(_updateItemAge, this, function (index) {
        starts[index] = ttls[index] !== 0 ? perf.now() : 0;
      });
      _classPrivateFieldSet(_statusTTL, this, function (status, index) {
        if (ttls[index]) {
          var ttl = ttls[index];
          var start = starts[index];
          /* c8 ignore next */
          if (!ttl || !start) return;
          status.ttl = ttl;
          status.start = start;
          var __temp_30__ = cachedNow;
          if (!__temp_30__) __temp_30__ = getNow();
          status.now = __temp_30__;
          var age = status.now - start;
          status.remainingTTL = ttl - age;
        }
      });
      // debounce calls to perf.now() to 1s so we're not hitting
      // that costly call repeatedly.
      var cachedNow = 0;
      var getNow = function getNow() {
        var n = perf.now();
        if (_this2.ttlResolution > 0) {
          cachedNow = n;
          var t = setTimeout(function () {
            return cachedNow = 0;
          }, _this2.ttlResolution);
          // not available on all platforms
          /* c8 ignore start */
          if (t.unref) {
            t.unref();
          }
          /* c8 ignore stop */
        }
        return n;
      };
      this.getRemainingTTL = function (key) {
        var index = _classPrivateFieldGet(_keyMap, _this2).get(key);
        if (index === undefined) {
          return 0;
        }
        var ttl = ttls[index];
        var start = starts[index];
        if (!ttl || !start) {
          return Infinity;
        }
        var __temp_31__ = cachedNow;
        if (!__temp_31__) __temp_31__ = getNow();
        var age = __temp_31__ - start;
        return ttl - age;
      };
      _classPrivateFieldSet(_isStale, this, function (index) {
        var s = starts[index];
        var t = ttls[index];
        return !!t && !!s && (cachedNow || getNow()) - s > t;
      });
    }
    function _initializeSizeTracking() {
      var _this3 = this;
      var sizes = new ZeroArray(_classPrivateFieldGet(_max, this));
      _classPrivateFieldSet(_calculatedSize, this, 0);
      _classPrivateFieldSet(_sizes, this, sizes);
      _classPrivateFieldSet(_removeItemSize, this, function (index) {
        _classPrivateFieldSet(_calculatedSize, _this3, _classPrivateFieldGet(_calculatedSize, _this3) - sizes[index]);
        sizes[index] = 0;
      });
      _classPrivateFieldSet(_requireSize, this, function (k, v, size, sizeCalculation) {
        // provisionally accept background fetches.
        // actual value size will be checked when they return.
        if (_assertClassBrand(_LRUCache_brand, _this3, _isBackgroundFetch).call(_this3, v)) {
          return 0;
        }
        if (!isPosInt(size)) {
          if (sizeCalculation) {
            if (typeof sizeCalculation !== 'function') {
              throw new TypeError('sizeCalculation must be a function');
            }
            size = sizeCalculation(v, k);
            if (!isPosInt(size)) {
              throw new TypeError('sizeCalculation return invalid (expect positive integer)');
            }
          } else {
            throw new TypeError('invalid size value (must be positive integer). ' + 'When maxSize or maxEntrySize is used, sizeCalculation ' + 'or size must be set.');
          }
        }
        return size;
      });
      _classPrivateFieldSet(_addItemSize, this, function (index, size, status) {
        sizes[index] = size;
        if (_classPrivateFieldGet(_maxSize, _this3)) {
          var maxSize = _classPrivateFieldGet(_maxSize, _this3) - sizes[index];
          while (_classPrivateFieldGet(_calculatedSize, _this3) > maxSize) {
            _assertClassBrand(_LRUCache_brand, _this3, _evict).call(_this3, true);
          }
        }
        _classPrivateFieldSet(_calculatedSize, _this3, _classPrivateFieldGet(_calculatedSize, _this3) + sizes[index]);
        if (status) {
          status.entrySize = size;
          status.totalCalculatedSize = _classPrivateFieldGet(_calculatedSize, _this3);
        }
      });
    }
    function _indexes() {
      var _this4 = this;
      var __temp_32__ = arguments.length > 0;
      if (__temp_32__) __temp_32__ = arguments[0] !== undefined;
      var _ref = __temp_32__ ? arguments[0] : {},
        _ref$allowStale = _ref.allowStale,
        allowStale = _ref$allowStale === void 0 ? this.allowStale : _ref$allowStale;
      return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var i;
        return _regeneratorRuntime().wrap(function _callee3$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!_classPrivateFieldGet(_size, _this4)) {
                _context9.next = 15;
                break;
              }
              i = _classPrivateFieldGet(_tail, _this4);
            case 2:
              if (!true) {
                _context9.next = 15;
                break;
              }
              if (_assertClassBrand(_LRUCache_brand, _this4, _isValidIndex).call(_this4, i)) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("break", 15);
            case 5:
              if (!(allowStale || !_classPrivateFieldGet(_isStale, _this4).call(_this4, i))) {
                _context9.next = 8;
                break;
              }
              _context9.next = 8;
              return i;
            case 8:
              if (!(i === _classPrivateFieldGet(_head, _this4))) {
                _context9.next = 12;
                break;
              }
              return _context9.abrupt("break", 15);
            case 12:
              i = _classPrivateFieldGet(_prev, _this4)[i];
            case 13:
              _context9.next = 2;
              break;
            case 15:
            case "end":
              return _context9.stop();
          }
        }, _callee3);
      })();
    }
    function _rindexes() {
      var _this5 = this;
      var __temp_33__ = arguments.length > 0;
      if (__temp_33__) __temp_33__ = arguments[0] !== undefined;
      var _ref2 = __temp_33__ ? arguments[0] : {},
        _ref2$allowStale = _ref2.allowStale,
        allowStale = _ref2$allowStale === void 0 ? this.allowStale : _ref2$allowStale;
      return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var i;
        return _regeneratorRuntime().wrap(function _callee4$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!_classPrivateFieldGet(_size, _this5)) {
                _context10.next = 15;
                break;
              }
              i = _classPrivateFieldGet(_head, _this5);
            case 2:
              if (!true) {
                _context10.next = 15;
                break;
              }
              if (_assertClassBrand(_LRUCache_brand, _this5, _isValidIndex).call(_this5, i)) {
                _context10.next = 5;
                break;
              }
              return _context10.abrupt("break", 15);
            case 5:
              if (!(allowStale || !_classPrivateFieldGet(_isStale, _this5).call(_this5, i))) {
                _context10.next = 8;
                break;
              }
              _context10.next = 8;
              return i;
            case 8:
              if (!(i === _classPrivateFieldGet(_tail, _this5))) {
                _context10.next = 12;
                break;
              }
              return _context10.abrupt("break", 15);
            case 12:
              i = _classPrivateFieldGet(_next, _this5)[i];
            case 13:
              _context10.next = 2;
              break;
            case 15:
            case "end":
              return _context10.stop();
          }
        }, _callee4);
      })();
    }
    function _isValidIndex(index) {
      return index !== undefined && _classPrivateFieldGet(_keyMap, this).get(_classPrivateFieldGet(_keyList, this)[index]) === index;
    }
    function _evict(free) {
      var _this$size3, _this$size4;
      var head = _classPrivateFieldGet(_head, this);
      var k = _classPrivateFieldGet(_keyList, this)[head];
      var v = _classPrivateFieldGet(_valList, this)[head];
      if (_classPrivateFieldGet(_hasFetchMethod, this) && _assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v)) {
        v.__abortController.abort(new Error('evicted'));
      } else if (_classPrivateFieldGet(_hasDispose, this) || _classPrivateFieldGet(_hasDisposeAfter, this)) {
        if (_classPrivateFieldGet(_hasDispose, this)) {
          var _classPrivateFieldGet10;
          (_classPrivateFieldGet10 = _classPrivateFieldGet(_dispose, this)) === null || _classPrivateFieldGet10 === void 0 || _classPrivateFieldGet10.call(this, v, k, 'evict');
        }
        if (_classPrivateFieldGet(_hasDisposeAfter, this)) {
          var _classPrivateFieldGet11;
          (_classPrivateFieldGet11 = _classPrivateFieldGet(_disposed, this)) === null || _classPrivateFieldGet11 === void 0 || _classPrivateFieldGet11.push([v, k, 'evict']);
        }
      }
      _classPrivateFieldGet(_removeItemSize, this).call(this, head);
      // if we aren't about to use the index, then null these out
      if (free) {
        _classPrivateFieldGet(_keyList, this)[head] = undefined;
        _classPrivateFieldGet(_valList, this)[head] = undefined;
        _classPrivateFieldGet(_free, this).push(head);
      }
      if (_classPrivateFieldGet(_size, this) === 1) {
        _classPrivateFieldSet(_head, this, _classPrivateFieldSet(_tail, this, 0));
        _classPrivateFieldGet(_free, this).length = 0;
      } else {
        _classPrivateFieldSet(_head, this, _classPrivateFieldGet(_next, this)[head]);
      }
      _classPrivateFieldGet(_keyMap, this)["delete"](k);
      _classPrivateFieldSet(_size, this, (_this$size3 = _classPrivateFieldGet(_size, this), _this$size4 = _this$size3--, _this$size3)), _this$size4;
      return head;
    }
    function _backgroundFetch(k, index, options, context) {
      var _this6 = this;
      var v = index === undefined ? undefined : _classPrivateFieldGet(_valList, this)[index];
      if (_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v)) {
        return v;
      }
      var ac = new AC();
      var signal = options.signal;
      // when/if our AC signals, then stop listening to theirs.
      signal === null || signal === void 0 || signal.addEventListener('abort', function () {
        return ac.abort(signal.reason);
      }, {
        signal: ac.signal
      });
      var fetchOpts = {
        signal: ac.signal,
        options: options,
        context: context
      };
      var cb = function cb(v) {
        var __temp_34__ = arguments.length > 1;
        if (__temp_34__) arguments[1] !== undefined, _readOnlyError("__temp_34__");
        var updateCache = __temp_34__ ? arguments[1] : false;
        var aborted = ac.signal.aborted;
        var __temp_35__ = options.ignoreFetchAbort;
        if (__temp_35__) __temp_35__ = v !== undefined;
        var ignoreAbort = __temp_35__;
        if (options.status) {
          if (aborted && !updateCache) {
            options.status.fetchAborted = true;
            options.status.fetchError = ac.signal.reason;
            if (ignoreAbort) options.status.fetchAbortIgnored = true;
          } else {
            options.status.fetchResolved = true;
          }
        }
        if (aborted && !ignoreAbort && !updateCache) {
          return fetchFail(ac.signal.reason);
        }
        // either we didn't abort, and are still here, or we did, and ignored
        var bf = p;
        if (_classPrivateFieldGet(_valList, _this6)[index] === p) {
          if (v === undefined) {
            if (bf.__staleWhileFetching) {
              _classPrivateFieldGet(_valList, _this6)[index] = bf.__staleWhileFetching;
            } else {
              _assertClassBrand(_LRUCache_brand, _this6, _delete).call(_this6, k, 'fetch');
            }
          } else {
            if (options.status) options.status.fetchUpdated = true;
            _this6.set(k, v, fetchOpts.options);
          }
        }
        return v;
      };
      var eb = function eb(er) {
        if (options.status) {
          options.status.fetchRejected = true;
          options.status.fetchError = er;
        }
        return fetchFail(er);
      };
      var fetchFail = function fetchFail(er) {
        var aborted = ac.signal.aborted;
        var __temp_36__ = aborted;
        if (__temp_36__) __temp_36__ = options.allowStaleOnFetchAbort;
        var allowStaleAborted = __temp_36__;
        var __temp_37__ = allowStaleAborted;
        if (!__temp_37__) __temp_37__ = options.allowStaleOnFetchRejection;
        var allowStale = __temp_37__;
        var __temp_38__ = allowStale;
        if (!__temp_38__) __temp_38__ = options.noDeleteOnFetchRejection;
        var noDelete = __temp_38__;
        var bf = p;
        if (_classPrivateFieldGet(_valList, _this6)[index] === p) {
          var __temp_39__ = !noDelete;
          if (!__temp_39__) __temp_39__ = bf.__staleWhileFetching === undefined;
          // if we allow stale on fetch rejections, then we need to ensure that
          // the stale value is not removed from the cache when the fetch fails.
          var del = __temp_39__;
          if (del) {
            _assertClassBrand(_LRUCache_brand, _this6, _delete).call(_this6, k, 'fetch');
          } else if (!allowStaleAborted) {
            // still replace the *promise* with the stale value,
            // since we are done with the promise at this point.
            // leave it untouched if we're still waiting for an
            // aborted background fetch that hasn't yet returned.
            _classPrivateFieldGet(_valList, _this6)[index] = bf.__staleWhileFetching;
          }
        }
        if (allowStale) {
          if (options.status && bf.__staleWhileFetching !== undefined) {
            options.status.returnedStale = true;
          }
          return bf.__staleWhileFetching;
        } else if (bf.__returned === bf) {
          throw er;
        }
      };
      var pcall = function pcall(res, rej) {
        var _classPrivateFieldGet12;
        var __temp_40__ = (_classPrivateFieldGet12 = _classPrivateFieldGet(_fetchMethod, _this6)) === null;
        if (!__temp_40__) __temp_40__ = _classPrivateFieldGet12 === void 0;
        var fmp = __temp_40__ ? void 0 : _classPrivateFieldGet12.call(_this6, k, v, fetchOpts);
        if (fmp && fmp instanceof Promise) {
          fmp.then(function (v) {
            return res(v === undefined ? undefined : v);
          }, rej);
        }
        // ignored, we go until we finish, regardless.
        // defer check until we are actually aborting,
        // so fetchMethod can override.
        ac.signal.addEventListener('abort', function () {
          if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
            res(undefined);
            // when it eventually resolves, update the cache.
            if (options.allowStaleOnFetchAbort) {
              res = function res(v) {
                return cb(v, true);
              };
            }
          }
        });
      };
      if (options.status) options.status.fetchDispatched = true;
      var p = new Promise(pcall).then(cb, eb);
      var bf = Object.assign(p, {
        __abortController: ac,
        __staleWhileFetching: v,
        __returned: undefined
      });
      if (index === undefined) {
        // internal, don't expose status.
        this.set(k, bf, _objectSpread(_objectSpread({}, fetchOpts.options), {}, {
          status: undefined
        }));
        index = _classPrivateFieldGet(_keyMap, this).get(k);
      } else {
        _classPrivateFieldGet(_valList, this)[index] = bf;
      }
      return bf;
    }
    function _isBackgroundFetch(p) {
      if (!_classPrivateFieldGet(_hasFetchMethod, this)) return false;
      var b = p;
      return !!b && b instanceof Promise && b.hasOwnProperty('__staleWhileFetching') && b.__abortController instanceof AC;
    }
    function _connect(p, n) {
      _classPrivateFieldGet(_prev, this)[n] = p;
      _classPrivateFieldGet(_next, this)[p] = n;
    }
    function _moveToTail(index) {
      // if tail already, nothing to do
      // if head, move head to next[index]
      // else
      //   move next[prev[index]] to next[index] (head has no prev)
      //   move prev[next[index]] to prev[index]
      // prev[index] = tail
      // next[tail] = index
      // tail = index
      if (index !== _classPrivateFieldGet(_tail, this)) {
        if (index === _classPrivateFieldGet(_head, this)) {
          _classPrivateFieldSet(_head, this, _classPrivateFieldGet(_next, this)[index]);
        } else {
          _assertClassBrand(_LRUCache_brand, this, _connect).call(this, _classPrivateFieldGet(_prev, this)[index], _classPrivateFieldGet(_next, this)[index]);
        }
        _assertClassBrand(_LRUCache_brand, this, _connect).call(this, _classPrivateFieldGet(_tail, this), index);
        _classPrivateFieldSet(_tail, this, index);
      }
    }
    function _delete(k, reason) {
      var _classPrivateFieldGet15;
      var deleted = false;
      if (_classPrivateFieldGet(_size, this) !== 0) {
        var index = _classPrivateFieldGet(_keyMap, this).get(k);
        if (index !== undefined) {
          deleted = true;
          if (_classPrivateFieldGet(_size, this) === 1) {
            _assertClassBrand(_LRUCache_brand, this, _clear).call(this, reason);
          } else {
            var _this$size5, _this$size6;
            _classPrivateFieldGet(_removeItemSize, this).call(this, index);
            var v = _classPrivateFieldGet(_valList, this)[index];
            if (_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v)) {
              v.__abortController.abort(new Error('deleted'));
            } else if (_classPrivateFieldGet(_hasDispose, this) || _classPrivateFieldGet(_hasDisposeAfter, this)) {
              if (_classPrivateFieldGet(_hasDispose, this)) {
                var _classPrivateFieldGet13;
                (_classPrivateFieldGet13 = _classPrivateFieldGet(_dispose, this)) === null || _classPrivateFieldGet13 === void 0 || _classPrivateFieldGet13.call(this, v, k, reason);
              }
              if (_classPrivateFieldGet(_hasDisposeAfter, this)) {
                var _classPrivateFieldGet14;
                (_classPrivateFieldGet14 = _classPrivateFieldGet(_disposed, this)) === null || _classPrivateFieldGet14 === void 0 || _classPrivateFieldGet14.push([v, k, reason]);
              }
            }
            _classPrivateFieldGet(_keyMap, this)["delete"](k);
            _classPrivateFieldGet(_keyList, this)[index] = undefined;
            _classPrivateFieldGet(_valList, this)[index] = undefined;
            if (index === _classPrivateFieldGet(_tail, this)) {
              _classPrivateFieldSet(_tail, this, _classPrivateFieldGet(_prev, this)[index]);
            } else if (index === _classPrivateFieldGet(_head, this)) {
              _classPrivateFieldSet(_head, this, _classPrivateFieldGet(_next, this)[index]);
            } else {
              var pi = _classPrivateFieldGet(_prev, this)[index];
              _classPrivateFieldGet(_next, this)[pi] = _classPrivateFieldGet(_next, this)[index];
              var ni = _classPrivateFieldGet(_next, this)[index];
              _classPrivateFieldGet(_prev, this)[ni] = _classPrivateFieldGet(_prev, this)[index];
            }
            _classPrivateFieldSet(_size, this, (_this$size5 = _classPrivateFieldGet(_size, this), _this$size6 = _this$size5--, _this$size5)), _this$size6;
            _classPrivateFieldGet(_free, this).push(index);
          }
        }
      }
      if (_classPrivateFieldGet(_hasDisposeAfter, this) && (_classPrivateFieldGet15 = _classPrivateFieldGet(_disposed, this)) !== null && _classPrivateFieldGet15 !== void 0 && _classPrivateFieldGet15.length) {
        var dt = _classPrivateFieldGet(_disposed, this);
        var task;
        while (task = dt === null || dt === void 0 ? void 0 : dt.shift()) {
          var _classPrivateFieldGet16, _classPrivateFieldGet17;
          (_classPrivateFieldGet16 = _classPrivateFieldGet(_disposeAfter, this)) === null || _classPrivateFieldGet16 === void 0 || (_classPrivateFieldGet17 = _classPrivateFieldGet16).call.apply(_classPrivateFieldGet17, [this].concat(_toConsumableArray(task)));
        }
      }
      return deleted;
    }
    function _clear(reason) {
      var _iterator15 = _createForOfIteratorHelper(_assertClassBrand(_LRUCache_brand, this, _rindexes).call(this, {
          allowStale: true
        })),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var index = _step15.value;
          var v = _classPrivateFieldGet(_valList, this)[index];
          if (_assertClassBrand(_LRUCache_brand, this, _isBackgroundFetch).call(this, v)) {
            v.__abortController.abort(new Error('deleted'));
          } else {
            var k = _classPrivateFieldGet(_keyList, this)[index];
            if (_classPrivateFieldGet(_hasDispose, this)) {
              var _classPrivateFieldGet20;
              (_classPrivateFieldGet20 = _classPrivateFieldGet(_dispose, this)) === null || _classPrivateFieldGet20 === void 0 || _classPrivateFieldGet20.call(this, v, k, reason);
            }
            if (_classPrivateFieldGet(_hasDisposeAfter, this)) {
              var _classPrivateFieldGet21;
              (_classPrivateFieldGet21 = _classPrivateFieldGet(_disposed, this)) === null || _classPrivateFieldGet21 === void 0 || _classPrivateFieldGet21.push([v, k, reason]);
            }
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      _classPrivateFieldGet(_keyMap, this).clear();
      _classPrivateFieldGet(_valList, this).fill(undefined);
      _classPrivateFieldGet(_keyList, this).fill(undefined);
      if (_classPrivateFieldGet(_ttls, this) && _classPrivateFieldGet(_starts, this)) {
        _classPrivateFieldGet(_ttls, this).fill(0);
        _classPrivateFieldGet(_starts, this).fill(0);
      }
      if (_classPrivateFieldGet(_sizes, this)) {
        _classPrivateFieldGet(_sizes, this).fill(0);
      }
      _classPrivateFieldSet(_head, this, 0);
      _classPrivateFieldSet(_tail, this, 0);
      _classPrivateFieldGet(_free, this).length = 0;
      _classPrivateFieldSet(_calculatedSize, this, 0);
      _classPrivateFieldSet(_size, this, 0);
      if (_classPrivateFieldGet(_hasDisposeAfter, this) && _classPrivateFieldGet(_disposed, this)) {
        var dt = _classPrivateFieldGet(_disposed, this);
        var task;
        while (task = dt === null || dt === void 0 ? void 0 : dt.shift()) {
          var _classPrivateFieldGet18, _classPrivateFieldGet19;
          (_classPrivateFieldGet18 = _classPrivateFieldGet(_disposeAfter, this)) === null || _classPrivateFieldGet18 === void 0 || (_classPrivateFieldGet19 = _classPrivateFieldGet18).call.apply(_classPrivateFieldGet19, [this].concat(_toConsumableArray(task)));
        }
      }
    }
    exports.LRUCache = LRUCache;

    /***/
  }), (/* 3 */
  /***/function (module) {
    "use strict";

    /* eslint-disable max-len */
    var maybeJoin = function maybeJoin() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return args.every(function (arg) {
        return arg;
      }) ? args.join('') : '';
    };
    var maybeEncode = function maybeEncode(arg) {
      return arg ? encodeURIComponent(arg) : '';
    };
    var formatHashFragment = function formatHashFragment(f) {
      return f.toLowerCase().replace(/^\W+|\/|\W+$/g, '').replace(/\W+/g, '-');
    };
    var defaults = {
      sshtemplate: function sshtemplate(_ref3) {
        var domain = _ref3.domain,
          user = _ref3.user,
          project = _ref3.project,
          committish = _ref3.committish;
        return "git@".concat(domain, ":").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      sshurltemplate: function sshurltemplate(_ref4) {
        var domain = _ref4.domain,
          user = _ref4.user,
          project = _ref4.project,
          committish = _ref4.committish;
        return "git+ssh://git@".concat(domain, "/").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      edittemplate: function edittemplate(_ref5) {
        var domain = _ref5.domain,
          user = _ref5.user,
          project = _ref5.project,
          committish = _ref5.committish,
          editpath = _ref5.editpath,
          path = _ref5.path;
        return "https://".concat(domain, "/").concat(user, "/").concat(project).concat(maybeJoin('/', editpath, '/', maybeEncode(committish || 'HEAD'), '/', path));
      },
      browsetemplate: function browsetemplate(_ref6) {
        var domain = _ref6.domain,
          user = _ref6.user,
          project = _ref6.project,
          committish = _ref6.committish,
          treepath = _ref6.treepath;
        return "https://".concat(domain, "/").concat(user, "/").concat(project).concat(maybeJoin('/', treepath, '/', maybeEncode(committish)));
      },
      browsetreetemplate: function browsetreetemplate(_ref7) {
        var domain = _ref7.domain,
          user = _ref7.user,
          project = _ref7.project,
          committish = _ref7.committish,
          treepath = _ref7.treepath,
          path = _ref7.path,
          fragment = _ref7.fragment,
          hashformat = _ref7.hashformat;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/").concat(treepath, "/").concat(maybeEncode(committish || 'HEAD'), "/").concat(path).concat(maybeJoin('#', hashformat(fragment || '')));
      },
      browseblobtemplate: function browseblobtemplate(_ref8) {
        var domain = _ref8.domain,
          user = _ref8.user,
          project = _ref8.project,
          committish = _ref8.committish,
          blobpath = _ref8.blobpath,
          path = _ref8.path,
          fragment = _ref8.fragment,
          hashformat = _ref8.hashformat;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/").concat(blobpath, "/").concat(maybeEncode(committish || 'HEAD'), "/").concat(path).concat(maybeJoin('#', hashformat(fragment || '')));
      },
      docstemplate: function docstemplate(_ref9) {
        var domain = _ref9.domain,
          user = _ref9.user,
          project = _ref9.project,
          treepath = _ref9.treepath,
          committish = _ref9.committish;
        return "https://".concat(domain, "/").concat(user, "/").concat(project).concat(maybeJoin('/', treepath, '/', maybeEncode(committish)), "#readme");
      },
      httpstemplate: function httpstemplate(_ref10) {
        var auth = _ref10.auth,
          domain = _ref10.domain,
          user = _ref10.user,
          project = _ref10.project,
          committish = _ref10.committish;
        return "git+https://".concat(maybeJoin(auth, '@')).concat(domain, "/").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      filetemplate: function filetemplate(_ref11) {
        var domain = _ref11.domain,
          user = _ref11.user,
          project = _ref11.project,
          committish = _ref11.committish,
          path = _ref11.path;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/raw/").concat(maybeEncode(committish || 'HEAD'), "/").concat(path);
      },
      shortcuttemplate: function shortcuttemplate(_ref12) {
        var type = _ref12.type,
          user = _ref12.user,
          project = _ref12.project,
          committish = _ref12.committish;
        return "".concat(type, ":").concat(user, "/").concat(project).concat(maybeJoin('#', committish));
      },
      pathtemplate: function pathtemplate(_ref13) {
        var user = _ref13.user,
          project = _ref13.project,
          committish = _ref13.committish;
        return "".concat(user, "/").concat(project).concat(maybeJoin('#', committish));
      },
      bugstemplate: function bugstemplate(_ref14) {
        var domain = _ref14.domain,
          user = _ref14.user,
          project = _ref14.project;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/issues");
      },
      hashformat: formatHashFragment
    };
    var hosts = {};
    hosts.github = {
      // First two are insecure and generally shouldn't be used any more, but
      // they are still supported.
      protocols: ['git:', 'http:', 'git+ssh:', 'git+https:', 'ssh:', 'https:'],
      domain: 'github.com',
      treepath: 'tree',
      blobpath: 'blob',
      editpath: 'edit',
      filetemplate: function filetemplate(_ref15) {
        var auth = _ref15.auth,
          user = _ref15.user,
          project = _ref15.project,
          committish = _ref15.committish,
          path = _ref15.path;
        return "https://".concat(maybeJoin(auth, '@'), "raw.githubusercontent.com/").concat(user, "/").concat(project, "/").concat(maybeEncode(committish || 'HEAD'), "/").concat(path);
      },
      gittemplate: function gittemplate(_ref16) {
        var auth = _ref16.auth,
          domain = _ref16.domain,
          user = _ref16.user,
          project = _ref16.project,
          committish = _ref16.committish;
        return "git://".concat(maybeJoin(auth, '@')).concat(domain, "/").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      tarballtemplate: function tarballtemplate(_ref17) {
        var domain = _ref17.domain,
          user = _ref17.user,
          project = _ref17.project,
          committish = _ref17.committish;
        return "https://codeload.".concat(domain, "/").concat(user, "/").concat(project, "/tar.gz/").concat(maybeEncode(committish || 'HEAD'));
      },
      extract: function extract(url) {
        var _url$pathname$split = url.pathname.split('/', 5),
          _url$pathname$split2 = _slicedToArray(_url$pathname$split, 5),
          user = _url$pathname$split2[1],
          project = _url$pathname$split2[2],
          type = _url$pathname$split2[3],
          committish = _url$pathname$split2[4];
        if (type && type !== 'tree') {
          return;
        }
        if (!type) {
          committish = url.hash.slice(1);
        }
        if (project && project.endsWith('.git')) {
          project = project.slice(0, -4);
        }
        if (!user || !project) {
          return;
        }
        return {
          user: user,
          project: project,
          committish: committish
        };
      }
    };
    hosts.bitbucket = {
      protocols: ['git+ssh:', 'git+https:', 'ssh:', 'https:'],
      domain: 'bitbucket.org',
      treepath: 'src',
      blobpath: 'src',
      editpath: '?mode=edit',
      edittemplate: function edittemplate(_ref18) {
        var domain = _ref18.domain,
          user = _ref18.user,
          project = _ref18.project,
          committish = _ref18.committish,
          treepath = _ref18.treepath,
          path = _ref18.path,
          editpath = _ref18.editpath;
        return "https://".concat(domain, "/").concat(user, "/").concat(project).concat(maybeJoin('/', treepath, '/', maybeEncode(committish || 'HEAD'), '/', path, editpath));
      },
      tarballtemplate: function tarballtemplate(_ref19) {
        var domain = _ref19.domain,
          user = _ref19.user,
          project = _ref19.project,
          committish = _ref19.committish;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/get/").concat(maybeEncode(committish || 'HEAD'), ".tar.gz");
      },
      extract: function extract(url) {
        var _url$pathname$split3 = url.pathname.split('/', 4),
          _url$pathname$split4 = _slicedToArray(_url$pathname$split3, 4),
          user = _url$pathname$split4[1],
          project = _url$pathname$split4[2],
          aux = _url$pathname$split4[3];
        if (['get'].includes(aux)) {
          return;
        }
        if (project && project.endsWith('.git')) {
          project = project.slice(0, -4);
        }
        if (!user || !project) {
          return;
        }
        return {
          user: user,
          project: project,
          committish: url.hash.slice(1)
        };
      }
    };
    hosts.gitlab = {
      protocols: ['git+ssh:', 'git+https:', 'ssh:', 'https:'],
      domain: 'gitlab.com',
      treepath: 'tree',
      blobpath: 'tree',
      editpath: '-/edit',
      httpstemplate: function httpstemplate(_ref20) {
        var auth = _ref20.auth,
          domain = _ref20.domain,
          user = _ref20.user,
          project = _ref20.project,
          committish = _ref20.committish;
        return "git+https://".concat(maybeJoin(auth, '@')).concat(domain, "/").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      tarballtemplate: function tarballtemplate(_ref21) {
        var domain = _ref21.domain,
          user = _ref21.user,
          project = _ref21.project,
          committish = _ref21.committish;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/repository/archive.tar.gz?ref=").concat(maybeEncode(committish || 'HEAD'));
      },
      extract: function extract(url) {
        var path = url.pathname.slice(1);
        if (path.includes('/-/') || path.includes('/archive.tar.gz')) {
          return;
        }
        var segments = path.split('/');
        var project = segments.pop();
        if (project.endsWith('.git')) {
          project = project.slice(0, -4);
        }
        var user = segments.join('/');
        if (!user || !project) {
          return;
        }
        return {
          user: user,
          project: project,
          committish: url.hash.slice(1)
        };
      }
    };
    hosts.gist = {
      protocols: ['git:', 'git+ssh:', 'git+https:', 'ssh:', 'https:'],
      domain: 'gist.github.com',
      editpath: 'edit',
      sshtemplate: function sshtemplate(_ref22) {
        var domain = _ref22.domain,
          project = _ref22.project,
          committish = _ref22.committish;
        return "git@".concat(domain, ":").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      sshurltemplate: function sshurltemplate(_ref23) {
        var domain = _ref23.domain,
          project = _ref23.project,
          committish = _ref23.committish;
        return "git+ssh://git@".concat(domain, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      edittemplate: function edittemplate(_ref24) {
        var domain = _ref24.domain,
          user = _ref24.user,
          project = _ref24.project,
          committish = _ref24.committish,
          editpath = _ref24.editpath;
        return "https://".concat(domain, "/").concat(user, "/").concat(project).concat(maybeJoin('/', maybeEncode(committish)), "/").concat(editpath);
      },
      browsetemplate: function browsetemplate(_ref25) {
        var domain = _ref25.domain,
          project = _ref25.project,
          committish = _ref25.committish;
        return "https://".concat(domain, "/").concat(project).concat(maybeJoin('/', maybeEncode(committish)));
      },
      browsetreetemplate: function browsetreetemplate(_ref26) {
        var domain = _ref26.domain,
          project = _ref26.project,
          committish = _ref26.committish,
          path = _ref26.path,
          hashformat = _ref26.hashformat;
        return "https://".concat(domain, "/").concat(project).concat(maybeJoin('/', maybeEncode(committish))).concat(maybeJoin('#', hashformat(path)));
      },
      browseblobtemplate: function browseblobtemplate(_ref27) {
        var domain = _ref27.domain,
          project = _ref27.project,
          committish = _ref27.committish,
          path = _ref27.path,
          hashformat = _ref27.hashformat;
        return "https://".concat(domain, "/").concat(project).concat(maybeJoin('/', maybeEncode(committish))).concat(maybeJoin('#', hashformat(path)));
      },
      docstemplate: function docstemplate(_ref28) {
        var domain = _ref28.domain,
          project = _ref28.project,
          committish = _ref28.committish;
        return "https://".concat(domain, "/").concat(project).concat(maybeJoin('/', maybeEncode(committish)));
      },
      httpstemplate: function httpstemplate(_ref29) {
        var domain = _ref29.domain,
          project = _ref29.project,
          committish = _ref29.committish;
        return "git+https://".concat(domain, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      filetemplate: function filetemplate(_ref30) {
        var user = _ref30.user,
          project = _ref30.project,
          committish = _ref30.committish,
          path = _ref30.path;
        return "https://gist.githubusercontent.com/".concat(user, "/").concat(project, "/raw").concat(maybeJoin('/', maybeEncode(committish)), "/").concat(path);
      },
      shortcuttemplate: function shortcuttemplate(_ref31) {
        var type = _ref31.type,
          project = _ref31.project,
          committish = _ref31.committish;
        return "".concat(type, ":").concat(project).concat(maybeJoin('#', committish));
      },
      pathtemplate: function pathtemplate(_ref32) {
        var project = _ref32.project,
          committish = _ref32.committish;
        return "".concat(project).concat(maybeJoin('#', committish));
      },
      bugstemplate: function bugstemplate(_ref33) {
        var domain = _ref33.domain,
          project = _ref33.project;
        return "https://".concat(domain, "/").concat(project);
      },
      gittemplate: function gittemplate(_ref34) {
        var domain = _ref34.domain,
          project = _ref34.project,
          committish = _ref34.committish;
        return "git://".concat(domain, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      tarballtemplate: function tarballtemplate(_ref35) {
        var project = _ref35.project,
          committish = _ref35.committish;
        return "https://codeload.github.com/gist/".concat(project, "/tar.gz/").concat(maybeEncode(committish || 'HEAD'));
      },
      extract: function extract(url) {
        var _url$pathname$split5 = url.pathname.split('/', 4),
          _url$pathname$split6 = _slicedToArray(_url$pathname$split5, 4),
          user = _url$pathname$split6[1],
          project = _url$pathname$split6[2],
          aux = _url$pathname$split6[3];
        if (aux === 'raw') {
          return;
        }
        if (!project) {
          if (!user) {
            return;
          }
          project = user;
          user = null;
        }
        if (project.endsWith('.git')) {
          project = project.slice(0, -4);
        }
        return {
          user: user,
          project: project,
          committish: url.hash.slice(1)
        };
      },
      hashformat: function hashformat(fragment) {
        return fragment && 'file-' + formatHashFragment(fragment);
      }
    };
    hosts.sourcehut = {
      protocols: ['git+ssh:', 'https:'],
      domain: 'git.sr.ht',
      treepath: 'tree',
      blobpath: 'tree',
      filetemplate: function filetemplate(_ref36) {
        var domain = _ref36.domain,
          user = _ref36.user,
          project = _ref36.project,
          committish = _ref36.committish,
          path = _ref36.path;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/blob/").concat(maybeEncode(committish) || 'HEAD', "/").concat(path);
      },
      httpstemplate: function httpstemplate(_ref37) {
        var domain = _ref37.domain,
          user = _ref37.user,
          project = _ref37.project,
          committish = _ref37.committish;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, ".git").concat(maybeJoin('#', committish));
      },
      tarballtemplate: function tarballtemplate(_ref38) {
        var domain = _ref38.domain,
          user = _ref38.user,
          project = _ref38.project,
          committish = _ref38.committish;
        return "https://".concat(domain, "/").concat(user, "/").concat(project, "/archive/").concat(maybeEncode(committish) || 'HEAD', ".tar.gz");
      },
      bugstemplate: function bugstemplate() {
        return null;
      },
      extract: function extract(url) {
        var _url$pathname$split7 = url.pathname.split('/', 4),
          _url$pathname$split8 = _slicedToArray(_url$pathname$split7, 4),
          user = _url$pathname$split8[1],
          project = _url$pathname$split8[2],
          aux = _url$pathname$split8[3];

        // tarball url
        if (['archive'].includes(aux)) {
          return;
        }
        if (project && project.endsWith('.git')) {
          project = project.slice(0, -4);
        }
        if (!user || !project) {
          return;
        }
        return {
          user: user,
          project: project,
          committish: url.hash.slice(1)
        };
      }
    };
    for (var _i3 = 0, _Object$entries2 = Object.entries(hosts); _i3 < _Object$entries2.length; _i3++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
        name = _Object$entries2$_i[0],
        host = _Object$entries2$_i[1];
      hosts[name] = Object.assign({}, defaults, host);
    }
    module.exports = hosts;

    /***/
  }), (/* 4 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    "use strict";

    var parseUrl = __webpack_require__(5);

    // look for github shorthand inputs, such as npm/cli
    var isGitHubShorthand = function isGitHubShorthand(arg) {
      // it cannot contain whitespace before the first #
      // it cannot start with a / because that's probably an absolute file path
      // but it must include a slash since repos are username/repository
      // it cannot start with a . because that's probably a relative file path
      // it cannot start with an @ because that's a scoped package if it passes the other tests
      // it cannot contain a : before a # because that tells us that there's a protocol
      // a second / may not exist before a #
      var firstHash = arg.indexOf('#');
      var firstSlash = arg.indexOf('/');
      var secondSlash = arg.indexOf('/', firstSlash + 1);
      var firstColon = arg.indexOf(':');
      var firstSpace = /\s/.exec(arg);
      var firstAt = arg.indexOf('@');
      var __temp_41__ = firstHash > -1;
      if (__temp_41__) __temp_41__ = firstSpace.index > firstHash;
      var __temp_42__ = !firstSpace;
      if (!__temp_42__) __temp_42__ = __temp_41__;
      var spaceOnlyAfterHash = __temp_42__;
      var __temp_43__ = firstHash > -1;
      if (__temp_43__) __temp_43__ = firstAt > firstHash;
      var __temp_44__ = firstAt === -1;
      if (!__temp_44__) __temp_44__ = __temp_43__;
      var atOnlyAfterHash = __temp_44__;
      var __temp_45__ = firstHash > -1;
      if (__temp_45__) __temp_45__ = firstColon > firstHash;
      var __temp_46__ = firstColon === -1;
      if (!__temp_46__) __temp_46__ = __temp_45__;
      var colonOnlyAfterHash = __temp_46__;
      var __temp_47__ = firstHash > -1;
      if (__temp_47__) __temp_47__ = secondSlash > firstHash;
      var __temp_48__ = secondSlash === -1;
      if (!__temp_48__) __temp_48__ = __temp_47__;
      var secondSlashOnlyAfterHash = __temp_48__;
      var hasSlash = firstSlash > 0;
      // if a # is found, what we really want to know is that the character
      // immediately before # is not a /
      var doesNotEndWithSlash = firstHash > -1 ? arg[firstHash - 1] !== '/' : !arg.endsWith('/');
      var doesNotStartWithDot = !arg.startsWith('.');
      return spaceOnlyAfterHash && hasSlash && doesNotEndWithSlash && doesNotStartWithDot && atOnlyAfterHash && colonOnlyAfterHash && secondSlashOnlyAfterHash;
    };
    module.exports = function (giturl, opts, _ref39) {
      var _protocols$parsed$pro;
      var gitHosts = _ref39.gitHosts,
        protocols = _ref39.protocols;
      if (!giturl) {
        return;
      }
      var correctedUrl = isGitHubShorthand(giturl) ? "github:".concat(giturl) : giturl;
      var parsed = parseUrl(correctedUrl, protocols);
      if (!parsed) {
        return;
      }
      var gitHostShortcut = gitHosts.byShortcut[parsed.protocol];
      var gitHostDomain = gitHosts.byDomain[parsed.hostname.startsWith('www.') ? parsed.hostname.slice(4) : parsed.hostname];
      var __temp_49__ = gitHostShortcut;
      if (!__temp_49__) __temp_49__ = gitHostDomain;
      var gitHostName = __temp_49__;
      if (!gitHostName) {
        return;
      }
      var __temp_50__ = gitHostShortcut;
      if (!__temp_50__) __temp_50__ = gitHostDomain;
      var gitHostInfo = gitHosts[__temp_50__];
      var auth = null;
      if ((_protocols$parsed$pro = protocols[parsed.protocol]) !== null && _protocols$parsed$pro !== void 0 && _protocols$parsed$pro.auth && (parsed.username || parsed.password)) {
        auth = "".concat(parsed.username).concat(parsed.password ? ':' + parsed.password : '');
      }
      var committish = null;
      var user = null;
      var project = null;
      var defaultRepresentation = null;
      try {
        if (gitHostShortcut) {
          var pathname = parsed.pathname.startsWith('/') ? parsed.pathname.slice(1) : parsed.pathname;
          var firstAt = pathname.indexOf('@');
          // we ignore auth for shortcuts, so just trim it out
          if (firstAt > -1) {
            pathname = pathname.slice(firstAt + 1);
          }
          var lastSlash = pathname.lastIndexOf('/');
          if (lastSlash > -1) {
            user = decodeURIComponent(pathname.slice(0, lastSlash));
            // we want nulls only, never empty strings
            if (!user) {
              user = null;
            }
            project = decodeURIComponent(pathname.slice(lastSlash + 1));
          } else {
            project = decodeURIComponent(pathname);
          }
          if (project.endsWith('.git')) {
            project = project.slice(0, -4);
          }
          if (parsed.hash) {
            committish = decodeURIComponent(parsed.hash.slice(1));
          }
          defaultRepresentation = 'shortcut';
        } else {
          var _protocols$parsed$pro2;
          if (!gitHostInfo.protocols.includes(parsed.protocol)) {
            return;
          }
          var segments = gitHostInfo.extract(parsed);
          if (!segments) {
            return;
          }
          var __temp_51__ = segments.user;
          if (__temp_51__) __temp_51__ = decodeURIComponent(segments.user);
          user = __temp_51__;
          project = decodeURIComponent(segments.project);
          committish = decodeURIComponent(segments.committish);
          var __temp_52__ = (_protocols$parsed$pro2 = protocols[parsed.protocol]) === null;
          if (!__temp_52__) __temp_52__ = _protocols$parsed$pro2 === void 0;
          var __temp_53__ = __temp_52__ ? void 0 : _protocols$parsed$pro2.name;
          if (!__temp_53__) __temp_53__ = parsed.protocol.slice(0, -1);
          defaultRepresentation = __temp_53__;
        }
      } catch (err) {
        /* istanbul ignore else */
        if (err instanceof URIError) {
          return;
        } else {
          throw err;
        }
      }
      return [gitHostName, user, auth, project, committish, defaultRepresentation, opts];
    };

    /***/
  }), (/* 5 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var url = __webpack_require__(Object(function webpackMissingModule() {
      var e = new Error("Cannot find module 'url'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }()));
    var lastIndexOfBefore = function lastIndexOfBefore(str, _char, beforeChar) {
      var startPosition = str.indexOf(beforeChar);
      return str.lastIndexOf(_char, startPosition > -1 ? startPosition : Infinity);
    };
    var safeUrl = function safeUrl(u) {
      try {
        return new url.URL(u);
      } catch (_unused) {
        // this fn should never throw
      }
    };

    // accepts input like git:github.com:user/repo and inserts the // after the first :
    var correctProtocol = function correctProtocol(arg, protocols) {
      var firstColon = arg.indexOf(':');
      var proto = arg.slice(0, firstColon + 1);
      if (Object.prototype.hasOwnProperty.call(protocols, proto)) {
        return arg;
      }
      var firstAt = arg.indexOf('@');
      if (firstAt > -1) {
        if (firstAt > firstColon) {
          return "git+ssh://".concat(arg);
        } else {
          return arg;
        }
      }
      var doubleSlash = arg.indexOf('//');
      if (doubleSlash === firstColon + 1) {
        return arg;
      }
      return "".concat(arg.slice(0, firstColon + 1), "//").concat(arg.slice(firstColon + 1));
    };

    // attempt to correct an scp style url so that it will parse with `new URL()`
    var correctUrl = function correctUrl(giturl) {
      // ignore @ that come after the first hash since the denotes the start
      // of a committish which can contain @ characters
      var firstAt = lastIndexOfBefore(giturl, '@', '#');
      // ignore colons that come after the hash since that could include colons such as:
      // git@github.com:user/package-2#semver:^1.0.0
      var lastColonBeforeHash = lastIndexOfBefore(giturl, ':', '#');
      if (lastColonBeforeHash > firstAt) {
        // the last : comes after the first @ (or there is no @)
        // like it would in:
        // proto://hostname.com:user/repo
        // username@hostname.com:user/repo
        // :password@hostname.com:user/repo
        // username:password@hostname.com:user/repo
        // proto://username@hostname.com:user/repo
        // proto://:password@hostname.com:user/repo
        // proto://username:password@hostname.com:user/repo
        // then we replace the last : with a / to create a valid path
        giturl = giturl.slice(0, lastColonBeforeHash) + '/' + giturl.slice(lastColonBeforeHash + 1);
      }
      if (lastIndexOfBefore(giturl, ':', '#') === -1 && giturl.indexOf('//') === -1) {
        // we have no : at all
        // as it would be in:
        // username@hostname.com/user/repo
        // then we prepend a protocol
        giturl = "git+ssh://".concat(giturl);
      }
      return giturl;
    };
    module.exports = function (giturl, protocols) {
      var withProtocol = protocols ? correctProtocol(giturl, protocols) : giturl;
      return safeUrl(withProtocol) || safeUrl(correctUrl(withProtocol));
    };

    /***/
  }), (/* 6 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    // just pre-load all the stuff that index.js lazily exports
    var internalRe = __webpack_require__(7);
    var constants = __webpack_require__(8);
    var SemVer = __webpack_require__(10);
    var identifiers = __webpack_require__(12);
    var parse = __webpack_require__(13);
    var valid = __webpack_require__(14);
    var clean = __webpack_require__(15);
    var inc = __webpack_require__(16);
    var diff = __webpack_require__(17);
    var major = __webpack_require__(18);
    var minor = __webpack_require__(19);
    var patch = __webpack_require__(20);
    var prerelease = __webpack_require__(21);
    var compare = __webpack_require__(22);
    var rcompare = __webpack_require__(23);
    var compareLoose = __webpack_require__(24);
    var compareBuild = __webpack_require__(25);
    var sort = __webpack_require__(26);
    var rsort = __webpack_require__(27);
    var gt = __webpack_require__(28);
    var lt = __webpack_require__(29);
    var eq = __webpack_require__(30);
    var neq = __webpack_require__(31);
    var gte = __webpack_require__(32);
    var lte = __webpack_require__(33);
    var cmp = __webpack_require__(34);
    var coerce = __webpack_require__(35);
    var Comparator = __webpack_require__(36);
    var Range = __webpack_require__(37);
    var satisfies = __webpack_require__(39);
    var toComparators = __webpack_require__(40);
    var maxSatisfying = __webpack_require__(41);
    var minSatisfying = __webpack_require__(42);
    var minVersion = __webpack_require__(43);
    var validRange = __webpack_require__(44);
    var outside = __webpack_require__(45);
    var gtr = __webpack_require__(46);
    var ltr = __webpack_require__(47);
    var intersects = __webpack_require__(48);
    var simplifyRange = __webpack_require__(49);
    var subset = __webpack_require__(50);
    module.exports = {
      parse: parse,
      valid: valid,
      clean: clean,
      inc: inc,
      diff: diff,
      major: major,
      minor: minor,
      patch: patch,
      prerelease: prerelease,
      compare: compare,
      rcompare: rcompare,
      compareLoose: compareLoose,
      compareBuild: compareBuild,
      sort: sort,
      rsort: rsort,
      gt: gt,
      lt: lt,
      eq: eq,
      neq: neq,
      gte: gte,
      lte: lte,
      cmp: cmp,
      coerce: coerce,
      Comparator: Comparator,
      Range: Range,
      satisfies: satisfies,
      toComparators: toComparators,
      maxSatisfying: maxSatisfying,
      minSatisfying: minSatisfying,
      minVersion: minVersion,
      validRange: validRange,
      outside: outside,
      gtr: gtr,
      ltr: ltr,
      intersects: intersects,
      simplifyRange: simplifyRange,
      subset: subset,
      SemVer: SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };

    /***/
  }), (/* 7 */
  /***/function (module, exports, __webpack_require__) {
    var _webpack_require__5 = __webpack_require__(8),
      MAX_SAFE_COMPONENT_LENGTH = _webpack_require__5.MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH = _webpack_require__5.MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH = _webpack_require__5.MAX_LENGTH;
    var debug = __webpack_require__(9);
    exports = module.exports = {};

    // The actual regexps go on exports.re
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = '[a-zA-Z0-9-]';

    // Replace some greedy regex tokens to prevent regex dos issues. These regex are
    // used internally via the safeRe object since all inputs in this library get
    // normalized first to trim and collapse all extra whitespace. The original
    // regexes are exported for userland consumption and lower level usage. A
    // future breaking change could export the safer regex only with a note that
    // all input should have extra whitespace removed.
    var safeRegexReplacements = [['\\s', 1], ['\\d', MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];
    var makeSafeRegex = function makeSafeRegex(value) {
      for (var _i4 = 0, _safeRegexReplacement = safeRegexReplacements; _i4 < _safeRegexReplacement.length; _i4++) {
        var _safeRegexReplacement2 = _slicedToArray(_safeRegexReplacement[_i4], 2),
          token = _safeRegexReplacement2[0],
          max = _safeRegexReplacement2[1];
        value = value.split("".concat(token, "*")).join("".concat(token, "{0,").concat(max, "}")).split("".concat(token, "+")).join("".concat(token, "{1,").concat(max, "}"));
      }
      return value;
    };
    var createToken = function createToken(name, value, isGlobal) {
      var safe = makeSafeRegex(value);
      var index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
      safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
    };

    // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.

    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.

    createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
    createToken('NUMERICIDENTIFIERLOOSE', '\\d+');

    // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    createToken('NONNUMERICIDENTIFIER', "\\d*[a-zA-Z-]".concat(LETTERDASHNUMBER, "*"));

    // ## Main Version
    // Three dot-separated numeric identifiers.

    createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
    createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")"));

    // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
    createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));

    // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
    createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))"));

    // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    createToken('BUILDIDENTIFIER', "".concat(LETTERDASHNUMBER, "+"));

    // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))"));

    // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.

    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
    createToken('FULL', "^".concat(src[t.FULLPLAIN], "$"));

    // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.
    createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
    createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));
    createToken('GTLT', '((?:<|>)?=?)');

    // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.
    createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
    createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
    createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
    createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$"));

    // Coercion.
    // Extract anything that could conceivably be a part of a valid semver
    createToken('COERCEPLAIN', "".concat('(^|[^\\d])' + '(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?"));
    createToken('COERCE', "".concat(src[t.COERCEPLAIN], "(?:$|[^\\d])"));
    createToken('COERCEFULL', src[t.COERCEPLAIN] + "(?:".concat(src[t.PRERELEASE], ")?") + "(?:".concat(src[t.BUILD], ")?") + "(?:$|[^\\d])");
    createToken('COERCERTL', src[t.COERCE], true);
    createToken('COERCERTLFULL', src[t.COERCEFULL], true);

    // Tilde ranges.
    // Meaning is "reasonably at or greater than"
    createToken('LONETILDE', '(?:~>?)');
    createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
    exports.tildeTrimReplace = '$1~';
    createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$"));

    // Caret ranges.
    // Meaning is "at least and backwards compatible with"
    createToken('LONECARET', '(?:\\^)');
    createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
    exports.caretTrimReplace = '$1^';
    createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$"));

    // A simple gt/lt/eq thing, or just "" to indicate "any version"
    createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
    createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$"));

    // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`
    createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
    exports.comparatorTrimReplace = '$1$2$3';

    // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.
    createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
    createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$");

    // Star ranges basically just allow anything at all.
    createToken('STAR', '(<|>)?=?\\s*\\*');
    // >=0.0.0 is like a star
    createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
    createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');

    /***/
  }), (/* 8 */
  /***/function (module) {
    // Note: this is the semver.org version of the spec that it implements
    // Not necessarily the package version of this code.
    var SEMVER_SPEC_VERSION = '2.0.0';
    var MAX_LENGTH = 256;
    var __temp_54__ = Number.MAX_SAFE_INTEGER;
    if (!__temp_54__) __temp_54__ = /* istanbul ignore next */9007199254740991;
    var MAX_SAFE_INTEGER = __temp_54__;

    // Max safe segment length for coercion.
    var MAX_SAFE_COMPONENT_LENGTH = 16;

    // Max safe length for a build identifier. The max length minus 6 characters for
    // the shortest version with a build 0.0.0+BUILD.
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
    module.exports = {
      MAX_LENGTH: MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
      RELEASE_TYPES: RELEASE_TYPES,
      SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };

    /***/
  }), (/* 9 */
  /***/function (module) {
    var __temp_55__ = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object';
    if (__temp_55__) __temp_55__ = process.env;
    var __temp_56__ = __temp_55__;
    if (__temp_56__) __temp_56__ = process.env.NODE_DEBUG;
    var __temp_57__ = __temp_56__;
    if (__temp_57__) __temp_57__ = /\bsemver\b/i.test(process.env.NODE_DEBUG);
    var debug = __temp_57__ ? function () {
      var _console;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return (_console = console).error.apply(_console, ['SEMVER'].concat(args));
    } : function () {};
    module.exports = debug;

    /***/
  }), (/* 10 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var debug = __webpack_require__(9);
    var _webpack_require__6 = __webpack_require__(8),
      MAX_LENGTH = _webpack_require__6.MAX_LENGTH,
      MAX_SAFE_INTEGER = _webpack_require__6.MAX_SAFE_INTEGER;
    var _webpack_require__7 = __webpack_require__(7),
      re = _webpack_require__7.safeRe,
      t = _webpack_require__7.t;
    var parseOptions = __webpack_require__(11);
    var _webpack_require__8 = __webpack_require__(12),
      compareIdentifiers = _webpack_require__8.compareIdentifiers;
    var SemVer = /*#__PURE__*/function () {
      "use strict";

      function SemVer(version, options) {
        _classCallCheck(this, SemVer);
        options = parseOptions(options);
        if (version instanceof SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== 'string') {
          throw new TypeError("Invalid version. Must be a string. Got type \"".concat(_typeof(version), "\"."));
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError("version is longer than ".concat(MAX_LENGTH, " characters"));
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError("Invalid Version: ".concat(version));
        }
        this.raw = version;

        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError('Invalid patch version');
        }

        // numberify any prerelease numeric ids
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split('.').map(function (id) {
            if (/^[0-9]+$/.test(id)) {
              var num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
      }
      return _createClass(SemVer, [{
        key: "format",
        value: function format() {
          this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
          if (this.prerelease.length) {
            this.version += "-".concat(this.prerelease.join('.'));
          }
          return this.version;
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.version;
        }
      }, {
        key: "compare",
        value: function compare(other) {
          debug('SemVer.compare', this.version, this.options, other);
          if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
              return 0;
            }
            other = new SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
      }, {
        key: "compareMain",
        value: function compareMain(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        }
      }, {
        key: "comparePre",
        value: function comparePre(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }

          // NOT having a prerelease is > having one
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          var i = 0;
          do {
            var a = this.prerelease[i];
            var b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
              return 0;
            } else if (b === undefined) {
              return 1;
            } else if (a === undefined) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
      }, {
        key: "compareBuild",
        value: function compareBuild(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          var i = 0;
          do {
            var a = this.build[i];
            var b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
              return 0;
            } else if (b === undefined) {
              return 1;
            } else if (a === undefined) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }

        // preminor will bump the version up to the next minor release, and immediately
        // down to pre-release. premajor and prepatch work the same way.
      }, {
        key: "inc",
        value: function inc(release, identifier, identifierBase) {
          switch (release) {
            case 'premajor':
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc('pre', identifier, identifierBase);
              break;
            case 'preminor':
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc('pre', identifier, identifierBase);
              break;
            case 'prepatch':
              // If this is already a prerelease, it will bump to the next version
              // drop any prereleases that might already exist, since they are not
              // relevant at this point.
              this.prerelease.length = 0;
              this.inc('patch', identifier, identifierBase);
              this.inc('pre', identifier, identifierBase);
              break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
              if (this.prerelease.length === 0) {
                this.inc('patch', identifier, identifierBase);
              }
              this.inc('pre', identifier, identifierBase);
              break;
            case 'major':
              // If this is a pre-major version, bump up to the same major version.
              // Otherwise increment major.
              // 1.0.0-5 bumps to 1.0.0
              // 1.1.0 bumps to 2.0.0
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case 'minor':
              // If this is a pre-minor version, bump up to the same minor version.
              // Otherwise increment minor.
              // 1.2.0-5 bumps to 1.2.0
              // 1.2.1 bumps to 1.3.0
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case 'patch':
              // If this is not a pre-release version, it will increment the patch.
              // If it is a pre-release it will bump up to the same patch version.
              // 1.2.0-5 patches to 1.2.0
              // 1.2.0 patches to 1.2.1
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
              {
                var base = Number(identifierBase) ? 1 : 0;
                if (!identifier && identifierBase === false) {
                  throw new Error('invalid increment argument: identifier is empty');
                }
                if (this.prerelease.length === 0) {
                  this.prerelease = [base];
                } else {
                  var i = this.prerelease.length;
                  while (--i >= 0) {
                    if (typeof this.prerelease[i] === 'number') {
                      this.prerelease[i]++;
                      i = -2;
                    }
                  }
                  if (i === -1) {
                    // didn't increment anything
                    if (identifier === this.prerelease.join('.') && identifierBase === false) {
                      throw new Error('invalid increment argument: identifier already exists');
                    }
                    this.prerelease.push(base);
                  }
                }
                if (identifier) {
                  // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                  // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                  var prerelease = [identifier, base];
                  if (identifierBase === false) {
                    prerelease = [identifier];
                  }
                  if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                    if (isNaN(this.prerelease[1])) {
                      this.prerelease = prerelease;
                    }
                  } else {
                    this.prerelease = prerelease;
                  }
                }
                break;
              }
            default:
              throw new Error("invalid increment argument: ".concat(release));
          }
          this.raw = this.format();
          if (this.build.length) {
            this.raw += "+".concat(this.build.join('.'));
          }
          return this;
        }
      }]);
    }();
    module.exports = SemVer;

    /***/
  }), (/* 11 */
  /***/function (module) {
    // parse out just the options we care about
    var looseOption = Object.freeze({
      loose: true
    });
    var emptyOpts = Object.freeze({});
    var parseOptions = function parseOptions(options) {
      if (!options) {
        return emptyOpts;
      }
      if (_typeof(options) !== 'object') {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;

    /***/
  }), (/* 12 */
  /***/function (module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = function compareIdentifiers(a, b) {
      var anum = numeric.test(a);
      var bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
      return compareIdentifiers(b, a);
    };
    module.exports = {
      compareIdentifiers: compareIdentifiers,
      rcompareIdentifiers: rcompareIdentifiers
    };

    /***/
  }), (/* 13 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var parse = function parse(version, options) {
      var __temp_58__ = arguments.length > 2;
      if (__temp_58__) __temp_58__ = arguments[2] !== undefined;
      var throwErrors = __temp_58__ ? arguments[2] : false;
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;

    /***/
  }), (/* 14 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var parse = __webpack_require__(13);
    var valid = function valid(version, options) {
      var v = parse(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;

    /***/
  }), (/* 15 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var parse = __webpack_require__(13);
    var clean = function clean(version, options) {
      var s = parse(version.trim().replace(/^[=v]+/, ''), options);
      return s ? s.version : null;
    };
    module.exports = clean;

    /***/
  }), (/* 16 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var inc = function inc(version, release, options, identifier, identifierBase) {
      if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
      }
      try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;

    /***/
  }), (/* 17 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var parse = __webpack_require__(13);
    var diff = function diff(version1, version2) {
      var v1 = parse(version1, null, true);
      var v2 = parse(version2, null, true);
      var comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      var v1Higher = comparison > 0;
      var highVersion = v1Higher ? v1 : v2;
      var lowVersion = v1Higher ? v2 : v1;
      var highHasPre = !!highVersion.prerelease.length;
      var lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing

        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
          return 'major';
        }

        // Otherwise it can be determined by checking the high version

        if (highVersion.patch) {
          // anything higher than a patch bump would result in the wrong version
          return 'patch';
        }
        if (highVersion.minor) {
          // anything higher than a minor bump would result in the wrong version
          return 'minor';
        }

        // bumping major/minor/patch all have same result
        return 'major';
      }

      // add the `pre` prefix if we are going to a prerelease version
      var prefix = highHasPre ? 'pre' : '';
      if (v1.major !== v2.major) {
        return prefix + 'major';
      }
      if (v1.minor !== v2.minor) {
        return prefix + 'minor';
      }
      if (v1.patch !== v2.patch) {
        return prefix + 'patch';
      }

      // high and low are preleases
      return 'prerelease';
    };
    module.exports = diff;

    /***/
  }), (/* 18 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var major = function major(a, loose) {
      return new SemVer(a, loose).major;
    };
    module.exports = major;

    /***/
  }), (/* 19 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var minor = function minor(a, loose) {
      return new SemVer(a, loose).minor;
    };
    module.exports = minor;

    /***/
  }), (/* 20 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var patch = function patch(a, loose) {
      return new SemVer(a, loose).patch;
    };
    module.exports = patch;

    /***/
  }), (/* 21 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var parse = __webpack_require__(13);
    var prerelease = function prerelease(version, options) {
      var parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;

    /***/
  }), (/* 22 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var compare = function compare(a, b, loose) {
      return new SemVer(a, loose).compare(new SemVer(b, loose));
    };
    module.exports = compare;

    /***/
  }), (/* 23 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var rcompare = function rcompare(a, b, loose) {
      return compare(b, a, loose);
    };
    module.exports = rcompare;

    /***/
  }), (/* 24 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var compareLoose = function compareLoose(a, b) {
      return compare(a, b, true);
    };
    module.exports = compareLoose;

    /***/
  }), (/* 25 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var compareBuild = function compareBuild(a, b, loose) {
      var versionA = new SemVer(a, loose);
      var versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;

    /***/
  }), (/* 26 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compareBuild = __webpack_require__(25);
    var sort = function sort(list, loose) {
      return list.sort(function (a, b) {
        return compareBuild(a, b, loose);
      });
    };
    module.exports = sort;

    /***/
  }), (/* 27 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compareBuild = __webpack_require__(25);
    var rsort = function rsort(list, loose) {
      return list.sort(function (a, b) {
        return compareBuild(b, a, loose);
      });
    };
    module.exports = rsort;

    /***/
  }), (/* 28 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var gt = function gt(a, b, loose) {
      return compare(a, b, loose) > 0;
    };
    module.exports = gt;

    /***/
  }), (/* 29 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var lt = function lt(a, b, loose) {
      return compare(a, b, loose) < 0;
    };
    module.exports = lt;

    /***/
  }), (/* 30 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var eq = function eq(a, b, loose) {
      return compare(a, b, loose) === 0;
    };
    module.exports = eq;

    /***/
  }), (/* 31 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var neq = function neq(a, b, loose) {
      return compare(a, b, loose) !== 0;
    };
    module.exports = neq;

    /***/
  }), (/* 32 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var gte = function gte(a, b, loose) {
      return compare(a, b, loose) >= 0;
    };
    module.exports = gte;

    /***/
  }), (/* 33 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var compare = __webpack_require__(22);
    var lte = function lte(a, b, loose) {
      return compare(a, b, loose) <= 0;
    };
    module.exports = lte;

    /***/
  }), (/* 34 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var eq = __webpack_require__(30);
    var neq = __webpack_require__(31);
    var gt = __webpack_require__(28);
    var gte = __webpack_require__(32);
    var lt = __webpack_require__(29);
    var lte = __webpack_require__(33);
    var cmp = function cmp(a, op, b, loose) {
      switch (op) {
        case '===':
          if (_typeof(a) === 'object') {
            a = a.version;
          }
          if (_typeof(b) === 'object') {
            b = b.version;
          }
          return a === b;
        case '!==':
          if (_typeof(a) === 'object') {
            a = a.version;
          }
          if (_typeof(b) === 'object') {
            b = b.version;
          }
          return a !== b;
        case '':
        case '=':
        case '==':
          return eq(a, b, loose);
        case '!=':
          return neq(a, b, loose);
        case '>':
          return gt(a, b, loose);
        case '>=':
          return gte(a, b, loose);
        case '<':
          return lt(a, b, loose);
        case '<=':
          return lte(a, b, loose);
        default:
          throw new TypeError("Invalid operator: ".concat(op));
      }
    };
    module.exports = cmp;

    /***/
  }), (/* 35 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var parse = __webpack_require__(13);
    var _webpack_require__9 = __webpack_require__(7),
      re = _webpack_require__9.safeRe,
      t = _webpack_require__9.t;
    var coerce = function coerce(version, options) {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === 'number') {
        version = String(version);
      }
      if (typeof version !== 'string') {
        return null;
      }
      var __temp_59__ = options;
      if (!__temp_59__) __temp_59__ = {};
      options = __temp_59__;
      var match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        var coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        var next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      var major = match[2];
      var __temp_60__ = match[3];
      if (!__temp_60__) __temp_60__ = '0';
      var minor = __temp_60__;
      var __temp_61__ = match[4];
      if (!__temp_61__) __temp_61__ = '0';
      var patch = __temp_61__;
      var __temp_62__ = options.includePrerelease;
      if (__temp_62__) __temp_62__ = match[5];
      var prerelease = __temp_62__ ? "-".concat(match[5]) : '';
      var __temp_63__ = options.includePrerelease;
      if (__temp_63__) __temp_63__ = match[6];
      var build = __temp_63__ ? "+".concat(match[6]) : '';
      return parse("".concat(major, ".").concat(minor, ".").concat(patch).concat(prerelease).concat(build), options);
    };
    module.exports = coerce;

    /***/
  }), (/* 36 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var ANY = Symbol('SemVer ANY');
    // hoisted class for cyclic dependency
    var Comparator = /*#__PURE__*/function () {
      "use strict";

      function Comparator(comp, options) {
        _classCallCheck(this, Comparator);
        options = parseOptions(options);
        if (comp instanceof Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = '';
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
      }
      return _createClass(Comparator, [{
        key: "parse",
        value: function parse(comp) {
          var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
          var m = comp.match(r);
          if (!m) {
            throw new TypeError("Invalid comparator: ".concat(comp));
          }
          this.operator = m[1] !== undefined ? m[1] : '';
          if (this.operator === '=') {
            this.operator = '';
          }

          // if it literally is just '>' or '' then allow anything.
          if (!m[2]) {
            this.semver = ANY;
          } else {
            this.semver = new SemVer(m[2], this.options.loose);
          }
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.value;
        }
      }, {
        key: "test",
        value: function test(version) {
          debug('Comparator.test', version, this.options.loose);
          if (this.semver === ANY || version === ANY) {
            return true;
          }
          if (typeof version === 'string') {
            try {
              version = new SemVer(version, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp(version, this.operator, this.semver, this.options);
        }
      }, {
        key: "intersects",
        value: function intersects(comp, options) {
          if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
          }
          if (this.operator === '') {
            if (this.value === '') {
              return true;
            }
            return new Range(comp.value, options).test(this.value);
          } else if (comp.operator === '') {
            if (comp.value === '') {
              return true;
            }
            return new Range(this.value, options).test(comp.semver);
          }
          options = parseOptions(options);

          // Special cases where nothing can possibly be lower
          if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
          }
          if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
          }

          // Same direction increasing (> or >=)
          if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
          }
          // Same direction decreasing (< or <=)
          if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
          }
          // same SemVer and both sides are inclusive (<= or >=)
          if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
          }
          // opposite directions less than
          if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
          }
          // opposite directions greater than
          if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
          }
          return false;
        }
      }], [{
        key: "ANY",
        get: function get() {
          return ANY;
        }
      }]);
    }();
    module.exports = Comparator;
    var parseOptions = __webpack_require__(11);
    var _webpack_require__10 = __webpack_require__(7),
      re = _webpack_require__10.safeRe,
      t = _webpack_require__10.t;
    var cmp = __webpack_require__(34);
    var debug = __webpack_require__(9);
    var SemVer = __webpack_require__(10);
    var Range = __webpack_require__(37);

    /***/
  }), (/* 37 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SPACE_CHARACTERS = /\s+/g;

    // hoisted class for cyclic dependency
    var Range = /*#__PURE__*/function () {
      "use strict";

      function Range(range, options) {
        var _this7 = this;
        _classCallCheck(this, Range);
        options = parseOptions(options);
        if (range instanceof Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          // just put it in the set and return
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = undefined;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;

        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');

        // First, split on ||
        this.set = this.raw.split('||')
        // map the range to a 2d array of comparators
        .map(function (r) {
          return _this7.parseRange(r.trim());
        })
        // throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter(function (c) {
          return c.length;
        });
        if (!this.set.length) {
          throw new TypeError("Invalid SemVer Range: ".concat(this.raw));
        }

        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
          // keep the first one, in case they're all null sets
          var first = this.set[0];
          this.set = this.set.filter(function (c) {
            return !isNullSet(c[0]);
          });
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            // if we have any that are *, then the range is just *
            var _iterator16 = _createForOfIteratorHelper(this.set),
              _step16;
            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var c = _step16.value;
                if (c.length === 1 && isAny(c[0])) {
                  this.set = [c];
                  break;
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        }
        this.formatted = undefined;
      }
      return _createClass(Range, [{
        key: "range",
        get: function get() {
          if (this.formatted === undefined) {
            this.formatted = '';
            for (var i = 0; i < this.set.length; i++) {
              if (i > 0) {
                this.formatted += '||';
              }
              var comps = this.set[i];
              for (var k = 0; k < comps.length; k++) {
                if (k > 0) {
                  this.formatted += ' ';
                }
                this.formatted += comps[k].toString().trim();
              }
            }
          }
          return this.formatted;
        }
      }, {
        key: "format",
        value: function format() {
          return this.range;
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.range;
        }
      }, {
        key: "parseRange",
        value: function parseRange(range) {
          var _this8 = this;
          var __temp_64__ = this.options.includePrerelease;
          if (__temp_64__) __temp_64__ = FLAG_INCLUDE_PRERELEASE;
          var __temp_65__ = this.options.loose;
          if (__temp_65__) __temp_65__ = FLAG_LOOSE;
          // memoize range parsing for performance.
          // this is a very hot path, and fully deterministic.
          var memoOpts = __temp_64__ | __temp_65__;
          var memoKey = memoOpts + ':' + range;
          var cached = cache.get(memoKey);
          if (cached) {
            return cached;
          }
          var loose = this.options.loose;
          // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
          var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
          range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
          debug('hyphen replace', range);

          // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
          range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
          debug('comparator trim', range);

          // `~ 1.2.3` => `~1.2.3`
          range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
          debug('tilde trim', range);

          // `^ 1.2.3` => `^1.2.3`
          range = range.replace(re[t.CARETTRIM], caretTrimReplace);
          debug('caret trim', range);

          // At this point, the range is completely trimmed and
          // ready to be split into comparators.

          var rangeList = range.split(' ').map(function (comp) {
            return parseComparator(comp, _this8.options);
          }).join(' ').split(/\s+/)
          // >=0.0.0 is equivalent to *
          .map(function (comp) {
            return replaceGTE0(comp, _this8.options);
          });
          if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter(function (comp) {
              debug('loose invalid filter', comp, _this8.options);
              return !!comp.match(re[t.COMPARATORLOOSE]);
            });
          }
          debug('range list', rangeList);

          // if any comparators are the null set, then replace with JUST null set
          // if more than one comparator, remove any * comparators
          // also, don't include the same comparator more than once
          var rangeMap = new Map();
          var comparators = rangeList.map(function (comp) {
            return new Comparator(comp, _this8.options);
          });
          var _iterator17 = _createForOfIteratorHelper(comparators),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var comp = _step17.value;
              if (isNullSet(comp)) {
                return [comp];
              }
              rangeMap.set(comp.value, comp);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
          if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap["delete"]('');
          }
          var result = _toConsumableArray(rangeMap.values());
          cache.set(memoKey, result);
          return result;
        }
      }, {
        key: "intersects",
        value: function intersects(range, options) {
          if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
          }
          return this.set.some(function (thisComparators) {
            return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
              return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
                return rangeComparators.every(function (rangeComparator) {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        }

        // if ANY of the sets match ALL of its comparators, then pass
      }, {
        key: "test",
        value: function test(version) {
          if (!version) {
            return false;
          }
          if (typeof version === 'string') {
            try {
              version = new SemVer(version, this.options);
            } catch (er) {
              return false;
            }
          }
          for (var i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version, this.options)) {
              return true;
            }
          }
          return false;
        }
      }]);
    }();
    module.exports = Range;
    var LRU = __webpack_require__(38);
    var cache = new LRU();
    var parseOptions = __webpack_require__(11);
    var Comparator = __webpack_require__(36);
    var debug = __webpack_require__(9);
    var SemVer = __webpack_require__(10);
    var _webpack_require__11 = __webpack_require__(7),
      re = _webpack_require__11.safeRe,
      t = _webpack_require__11.t,
      comparatorTrimReplace = _webpack_require__11.comparatorTrimReplace,
      tildeTrimReplace = _webpack_require__11.tildeTrimReplace,
      caretTrimReplace = _webpack_require__11.caretTrimReplace;
    var _webpack_require__12 = __webpack_require__(8),
      FLAG_INCLUDE_PRERELEASE = _webpack_require__12.FLAG_INCLUDE_PRERELEASE,
      FLAG_LOOSE = _webpack_require__12.FLAG_LOOSE;
    var isNullSet = function isNullSet(c) {
      return c.value === '<0.0.0-0';
    };
    var isAny = function isAny(c) {
      return c.value === '';
    };

    // take a set of comparators and determine whether there
    // exists a version which can satisfy it
    var isSatisfiable = function isSatisfiable(comparators, options) {
      var result = true;
      var remainingComparators = comparators.slice();
      var testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every(function (otherComparator) {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };

    // comprised of xranges, tildes, stars, and gtlt's at this point.
    // already replaced the hyphen ranges
    // turn into a set of JUST comparators.
    var parseComparator = function parseComparator(comp, options) {
      debug('comp', comp, options);
      comp = replaceCarets(comp, options);
      debug('caret', comp);
      comp = replaceTildes(comp, options);
      debug('tildes', comp);
      comp = replaceXRanges(comp, options);
      debug('xrange', comp);
      comp = replaceStars(comp, options);
      debug('stars', comp);
      return comp;
    };
    var isX = function isX(id) {
      return !id || id.toLowerCase() === 'x' || id === '*';
    };

    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    // ~0.0.1 --> >=0.0.1 <0.1.0-0
    var replaceTildes = function replaceTildes(comp, options) {
      return comp.trim().split(/\s+/).map(function (c) {
        return replaceTilde(c, options);
      }).join(' ');
    };
    var replaceTilde = function replaceTilde(comp, options) {
      var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('tilde', comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
        } else if (isX(p)) {
          // ~1.2 == >=1.2.0 <1.3.0-0
          ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
        } else if (pr) {
          debug('replaceTilde pr', pr);
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
        } else {
          // ~1.2.3 == >=1.2.3 <1.3.0-0
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(M, ".").concat(+m + 1, ".0-0");
        }
        debug('tilde return', ret);
        return ret;
      });
    };

    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    // ^0.0.1 --> >=0.0.1 <0.0.2-0
    // ^0.1.0 --> >=0.1.0 <0.2.0-0
    var replaceCarets = function replaceCarets(comp, options) {
      return comp.trim().split(/\s+/).map(function (c) {
        return replaceCaret(c, options);
      }).join(' ');
    };
    var replaceCaret = function replaceCaret(comp, options) {
      debug('caret', comp, options);
      var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      var z = options.includePrerelease ? '-0' : '';
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('caret', comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
        } else if (isX(p)) {
          if (M === '0') {
            ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
          } else {
            ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
          }
        } else if (pr) {
          debug('replaceCaret pr', pr);
          if (M === '0') {
            if (m === '0') {
              ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
            } else {
              ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
            }
          } else {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(+M + 1, ".0.0-0");
          }
        } else {
          debug('no pr');
          if (M === '0') {
            if (m === '0') {
              ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
            } else {
              ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
            }
          } else {
            ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(+M + 1, ".0.0-0");
          }
        }
        debug('caret return', ret);
        return ret;
      });
    };
    var replaceXRanges = function replaceXRanges(comp, options) {
      debug('replaceXRanges', comp, options);
      return comp.split(/\s+/).map(function (c) {
        return replaceXRange(c, options);
      }).join(' ');
    };
    var replaceXRange = function replaceXRange(comp, options) {
      comp = comp.trim();
      var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        var xM = isX(M);
        var __temp_66__ = xM;
        if (!__temp_66__) __temp_66__ = isX(m);
        var xm = __temp_66__;
        var __temp_67__ = xm;
        if (!__temp_67__) __temp_67__ = isX(p);
        var xp = __temp_67__;
        var anyX = xp;
        if (gtlt === '=' && anyX) {
          gtlt = '';
        }

        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            // nothing is allowed
            ret = '<0.0.0-0';
          } else {
            // nothing is forbidden
            ret = '*';
          }
        } else if (gtlt && anyX) {
          // we know patch is an x, because we have any x at all.
          // replace X with 0
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === '>') {
            // >1 => >=2.0.0
            // >1.2 => >=1.3.0
            gtlt = '>=';
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === '<=') {
            // <=0.7.x is actually <0.8.0, since any 0.7.x should
            // pass.  Similarly, <=7.x is actually <8.0.0, etc.
            gtlt = '<';
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === '<') {
            pr = '-0';
          }
          ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
        } else if (xm) {
          ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
        } else if (xp) {
          ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
        }
        debug('xRange return', ret);
        return ret;
      });
    };

    // Because * is AND-ed with everything else in the comparator,
    // and '' means "any version", just remove the *s entirely.
    var replaceStars = function replaceStars(comp, options) {
      debug('replaceStars', comp, options);
      // Looseness is ignored here.  star is always as loose as it gets!
      return comp.trim().replace(re[t.STAR], '');
    };
    var replaceGTE0 = function replaceGTE0(comp, options) {
      debug('replaceGTE0', comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
    };

    // This function is passed to string.replace(re[t.HYPHENRANGE])
    // M, m, patch, prerelease, build
    // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
    // 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
    // 1.2 - 3.4 => >=1.2.0 <3.5.0-0
    // TODO build?
    var hyphenReplace = function hyphenReplace(incPr) {
      return function ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) {
        if (isX(fM)) {
          from = '';
        } else if (isX(fm)) {
          from = ">=".concat(fM, ".0.0").concat(incPr ? '-0' : '');
        } else if (isX(fp)) {
          from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? '-0' : '');
        } else if (fpr) {
          from = ">=".concat(from);
        } else {
          from = ">=".concat(from).concat(incPr ? '-0' : '');
        }
        if (isX(tM)) {
          to = '';
        } else if (isX(tm)) {
          to = "<".concat(+tM + 1, ".0.0-0");
        } else if (isX(tp)) {
          to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
        } else if (tpr) {
          to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
        } else if (incPr) {
          to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
        } else {
          to = "<=".concat(to);
        }
        return "".concat(from, " ").concat(to).trim();
      };
    };
    var testSet = function testSet(set, version, options) {
      for (var i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for (var _i5 = 0; _i5 < set.length; _i5++) {
          debug(set[_i5].semver);
          if (set[_i5].semver === Comparator.ANY) {
            continue;
          }
          if (set[_i5].semver.prerelease.length > 0) {
            var allowed = set[_i5].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }

        // Version has a -pre, but it's not one of the ones we like.
        return false;
      }
      return true;
    };

    /***/
  }), (/* 38 */
  /***/function (module) {
    var LRUCache = /*#__PURE__*/function () {
      "use strict";

      function LRUCache() {
        _classCallCheck(this, LRUCache);
        this.max = 1000;
        this.map = new Map();
      }
      return _createClass(LRUCache, [{
        key: "get",
        value: function get(key) {
          var value = this.map.get(key);
          if (value === undefined) {
            return undefined;
          } else {
            // Remove the key from the map and add it to the end
            this.map["delete"](key);
            this.map.set(key, value);
            return value;
          }
        }
      }, {
        key: "delete",
        value: function _delete(key) {
          return this.map["delete"](key);
        }
      }, {
        key: "set",
        value: function set(key, value) {
          var deleted = this["delete"](key);
          if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
              var firstKey = this.map.keys().next().value;
              this["delete"](firstKey);
            }
            this.map.set(key, value);
          }
          return this;
        }
      }]);
    }();
    module.exports = LRUCache;

    /***/
  }), (/* 39 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var Range = __webpack_require__(37);
    var satisfies = function satisfies(version, range, options) {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;

    /***/
  }), (/* 40 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var Range = __webpack_require__(37);

    // Mostly just for testing and legacy API reasons
    var toComparators = function toComparators(range, options) {
      return new Range(range, options).set.map(function (comp) {
        return comp.map(function (c) {
          return c.value;
        }).join(' ').trim().split(' ');
      });
    };
    module.exports = toComparators;

    /***/
  }), (/* 41 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var Range = __webpack_require__(37);
    var maxSatisfying = function maxSatisfying(versions, range, options) {
      var max = null;
      var maxSV = null;
      var rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!max || maxSV.compare(v) === -1) {
            // compare(max, v, true)
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;

    /***/
  }), (/* 42 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var Range = __webpack_require__(37);
    var minSatisfying = function minSatisfying(versions, range, options) {
      var min = null;
      var minSV = null;
      var rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!min || minSV.compare(v) === 1) {
            // compare(min, v, true)
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;

    /***/
  }), (/* 43 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var Range = __webpack_require__(37);
    var gt = __webpack_require__(28);
    var minVersion = function minVersion(range, loose) {
      range = new Range(range, loose);
      var minver = new SemVer('0.0.0');
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer('0.0.0-0');
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      var _loop = function _loop() {
        var comparators = range.set[i];
        var setMin = null;
        comparators.forEach(function (comparator) {
          // Clone to avoid manipulating the comparator's semver object.
          var compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case '>':
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case '':
            case '>=':
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case '<':
            case '<=':
              /* Ignore maximum versions */
              break;
            /* istanbul ignore next */
            default:
              throw new Error("Unexpected operation: ".concat(comparator.operator));
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      };
      for (var i = 0; i < range.set.length; ++i) {
        _loop();
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;

    /***/
  }), (/* 44 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var Range = __webpack_require__(37);
    var validRange = function validRange(range, options) {
      try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;

    /***/
  }), (/* 45 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var SemVer = __webpack_require__(10);
    var Comparator = __webpack_require__(36);
    var ANY = Comparator.ANY;
    var Range = __webpack_require__(37);
    var satisfies = __webpack_require__(39);
    var gt = __webpack_require__(28);
    var lt = __webpack_require__(29);
    var lte = __webpack_require__(33);
    var gte = __webpack_require__(32);
    var outside = function outside(version, range, hilo, options) {
      version = new SemVer(version, options);
      range = new Range(range, options);
      var gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case '>':
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = '>';
          ecomp = '>=';
          break;
        case '<':
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = '<';
          ecomp = '<=';
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }

      // If it satisfies the range it is not outside
      if (satisfies(version, range, options)) {
        return false;
      }

      // From now on, variable terms are as if we're in "gtr" mode.
      // but note that everything is flipped for the "ltr" function.
      var _loop2 = function _loop2() {
          var comparators = range.set[i];
          var high = null;
          var low = null;
          comparators.forEach(function (comparator) {
            if (comparator.semver === ANY) {
              comparator = new Comparator('>=0.0.0');
            }
            var __temp_68__ = high;
            if (!__temp_68__) __temp_68__ = comparator;
            high = __temp_68__;
            var __temp_69__ = low;
            if (!__temp_69__) __temp_69__ = comparator;
            low = __temp_69__;
            if (gtfn(comparator.semver, high.semver, options)) {
              high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
              low = comparator;
            }
          });

          // If the edge version comparator has a operator then our version
          // isn't outside it
          if (high.operator === comp || high.operator === ecomp) {
            return {
              v: false
            };
          }

          // If the lowest version comparator has an operator and our version
          // is less than it then it isn't higher than the range
          if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return {
              v: false
            };
          } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return {
              v: false
            };
          }
        },
        _ret;
      for (var i = 0; i < range.set.length; ++i) {
        _ret = _loop2();
        if (_ret) return _ret.v;
      }
      return true;
    };
    module.exports = outside;

    /***/
  }), (/* 46 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    // Determine if version is greater than all the versions possible in the range.
    var outside = __webpack_require__(45);
    var gtr = function gtr(version, range, options) {
      return outside(version, range, '>', options);
    };
    module.exports = gtr;

    /***/
  }), (/* 47 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var outside = __webpack_require__(45);
    // Determine if version is less than all the versions possible in the range
    var ltr = function ltr(version, range, options) {
      return outside(version, range, '<', options);
    };
    module.exports = ltr;

    /***/
  }), (/* 48 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var Range = __webpack_require__(37);
    var intersects = function intersects(r1, r2, options) {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;

    /***/
  }), (/* 49 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    // given a set of versions and a range, create a "simplified" range
    // that includes the same versions that the original range does
    // If the original range is shorter than the simplified one, return that.
    var satisfies = __webpack_require__(39);
    var compare = __webpack_require__(22);
    module.exports = function (versions, range, options) {
      var set = [];
      var first = null;
      var prev = null;
      var v = versions.sort(function (a, b) {
        return compare(a, b, options);
      });
      var _iterator18 = _createForOfIteratorHelper(v),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var version = _step18.value;
          var included = satisfies(version, range, options);
          if (included) {
            prev = version;
            if (!first) {
              first = version;
            }
          } else {
            if (prev) {
              set.push([first, prev]);
            }
            prev = null;
            first = null;
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      if (first) {
        set.push([first, null]);
      }
      var ranges = [];
      for (var _i6 = 0, _set = set; _i6 < _set.length; _i6++) {
        var _set$_i = _slicedToArray(_set[_i6], 2),
          min = _set$_i[0],
          max = _set$_i[1];
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push('*');
        } else if (!max) {
          ranges.push(">=".concat(min));
        } else if (min === v[0]) {
          ranges.push("<=".concat(max));
        } else {
          ranges.push("".concat(min, " - ").concat(max));
        }
      }
      var simplified = ranges.join(' || ');
      var original = typeof range.raw === 'string' ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };

    /***/
  }), (/* 50 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    var Range = __webpack_require__(37);
    var Comparator = __webpack_require__(36);
    var ANY = Comparator.ANY;
    var satisfies = __webpack_require__(39);
    var compare = __webpack_require__(22);

    // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
    // - Every simple range `r1, r2, ...` is a null set, OR
    // - Every simple range `r1, r2, ...` which is not a null set is a subset of
    //   some `R1, R2, ...`
    //
    // Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
    // - If c is only the ANY comparator
    //   - If C is only the ANY comparator, return true
    //   - Else if in prerelease mode, return false
    //   - else replace c with `[>=0.0.0]`
    // - If C is only the ANY comparator
    //   - if in prerelease mode, return true
    //   - else replace C with `[>=0.0.0]`
    // - Let EQ be the set of = comparators in c
    // - If EQ is more than one, return true (null set)
    // - Let GT be the highest > or >= comparator in c
    // - Let LT be the lowest < or <= comparator in c
    // - If GT and LT, and GT.semver > LT.semver, return true (null set)
    // - If any C is a = range, and GT or LT are set, return false
    // - If EQ
    //   - If GT, and EQ does not satisfy GT, return true (null set)
    //   - If LT, and EQ does not satisfy LT, return true (null set)
    //   - If EQ satisfies every C, return true
    //   - Else return false
    // - If GT
    //   - If GT.semver is lower than any > or >= comp in C, return false
    //   - If GT is >=, and GT.semver does not satisfy every C, return false
    //   - If GT.semver has a prerelease, and not in prerelease mode
    //     - If no C has a prerelease and the GT.semver tuple, return false
    // - If LT
    //   - If LT.semver is greater than any < or <= comp in C, return false
    //   - If LT is <=, and LT.semver does not satisfy every C, return false
    //   - If GT.semver has a prerelease, and not in prerelease mode
    //     - If no C has a prerelease and the LT.semver tuple, return false
    // - Else return true

    var subset = function subset(sub, dom) {
      var __temp_70__ = arguments.length > 2;
      if (__temp_70__) __temp_70__ = arguments[2] !== undefined;
      var options = __temp_70__ ? arguments[2] : {};
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      var sawNonNull = false;
      var _iterator19 = _createForOfIteratorHelper(sub.set),
        _step19;
      try {
        OUTER: for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var simpleSub = _step19.value;
          var _iterator20 = _createForOfIteratorHelper(dom.set),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var simpleDom = _step20.value;
              var isSub = simpleSubset(simpleSub, simpleDom, options);
              var __temp_71__ = sawNonNull;
              if (!__temp_71__) __temp_71__ = isSub !== null;
              sawNonNull = __temp_71__;
              if (isSub) {
                continue OUTER;
              }
            }
            // the null set is a subset of everything, but null simple ranges in
            // a complex range should be ignored.  so if we saw a non-null range,
            // then we know this isn't a subset, but if EVERY simple range was null,
            // then it is a subset.
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
          if (sawNonNull) {
            return false;
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator('>=0.0.0-0')];
    var minimumVersion = [new Comparator('>=0.0.0')];
    var simpleSubset = function simpleSubset(sub, dom, options) {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      var eqSet = new Set();
      var gt, lt;
      var _iterator21 = _createForOfIteratorHelper(sub),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var c = _step21.value;
          if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
          } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
          } else {
            eqSet.add(c.semver);
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
      if (eqSet.size > 1) {
        return null;
      }
      var gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
          return null;
        }
      }

      // will iterate one or zero times
      var _iterator22 = _createForOfIteratorHelper(eqSet),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var eq = _step22.value;
          if (gt && !satisfies(eq, String(gt), options)) {
            return null;
          }
          if (lt && !satisfies(eq, String(lt), options)) {
            return null;
          }
          var _iterator24 = _createForOfIteratorHelper(dom),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _c = _step24.value;
              if (!satisfies(eq, String(_c), options)) {
                return false;
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
          return true;
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      var higher, lower;
      var hasDomLT, hasDomGT;
      // if the subset has a prerelease, we need a comparator in the superset
      // with the same tuple and a prerelease, or it's not a subset
      var __temp_72__ = lt;
      if (__temp_72__) __temp_72__ = !options.includePrerelease;
      var __temp_73__ = __temp_72__;
      if (__temp_73__) __temp_73__ = lt.semver.prerelease.length;
      var needDomLTPre = __temp_73__ ? lt.semver : false;
      var __temp_74__ = gt;
      if (__temp_74__) __temp_74__ = !options.includePrerelease;
      var __temp_75__ = __temp_74__;
      if (__temp_75__) __temp_75__ = gt.semver.prerelease.length;
      var needDomGTPre = __temp_75__ ? gt.semver : false;
      // exception: <1.2.3-0 is the same as <1.2.3
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      var _iterator23 = _createForOfIteratorHelper(dom),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _c2 = _step23.value;
          var __temp_76__ = hasDomGT;
          if (!__temp_76__) __temp_76__ = _c2.operator === '>';
          var __temp_77__ = __temp_76__;
          if (!__temp_77__) __temp_77__ = _c2.operator === '>=';
          hasDomGT = __temp_77__;
          var __temp_78__ = hasDomLT;
          if (!__temp_78__) __temp_78__ = _c2.operator === '<';
          var __temp_79__ = __temp_78__;
          if (!__temp_79__) __temp_79__ = _c2.operator === '<=';
          hasDomLT = __temp_79__;
          if (gt) {
            if (needDomGTPre) {
              if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomGTPre.major && _c2.semver.minor === needDomGTPre.minor && _c2.semver.patch === needDomGTPre.patch) {
                needDomGTPre = false;
              }
            }
            if (_c2.operator === '>' || _c2.operator === '>=') {
              higher = higherGT(gt, _c2, options);
              if (higher === _c2 && higher !== gt) {
                return false;
              }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(_c2), options)) {
              return false;
            }
          }
          if (lt) {
            if (needDomLTPre) {
              if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomLTPre.major && _c2.semver.minor === needDomLTPre.minor && _c2.semver.patch === needDomLTPre.patch) {
                needDomLTPre = false;
              }
            }
            if (_c2.operator === '<' || _c2.operator === '<=') {
              lower = lowerLT(lt, _c2, options);
              if (lower === _c2 && lower !== lt) {
                return false;
              }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(_c2), options)) {
              return false;
            }
          }
          if (!_c2.operator && (lt || gt) && gtltComp !== 0) {
            return false;
          }
        }

        // if there was a < or >, and nothing in the dom, then must be false
        // UNLESS it was limited by another range in the other direction.
        // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }

      // we needed a prerelease range in a specific tuple, but didn't get one
      // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
      // because it includes prereleases in the 1.2.3 tuple
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };

    // >=1.2.3 is lower than >1.2.3
    var higherGT = function higherGT(a, b, options) {
      if (!a) {
        return b;
      }
      var comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
    };

    // <=1.2.3 is higher than <1.2.3
    var lowerLT = function lowerLT(a, b, options) {
      if (!a) {
        return b;
      }
      var comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
    };
    module.exports = subset;

    /***/
  }), (/* 51 */
  /***/function (module, __unused_webpack_exports, __webpack_require__) {
    "use strict";

    var _webpack_require__13 = __webpack_require__(Object(function webpackMissingModule() {
        var e = new Error("Cannot find module 'module'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }())),
      builtins = _webpack_require__13.builtinModules;
    var scopedPackagePattern = new RegExp('^(?:@([^/]+?)[/])?([^/]+?)$');
    var blacklist = ['node_modules', 'favicon.ico'];
    function validate(name) {
      var warnings = [];
      var errors = [];
      if (name === null) {
        errors.push('name cannot be null');
        return done(warnings, errors);
      }
      if (name === undefined) {
        errors.push('name cannot be undefined');
        return done(warnings, errors);
      }
      if (typeof name !== 'string') {
        errors.push('name must be a string');
        return done(warnings, errors);
      }
      if (!name.length) {
        errors.push('name length must be greater than zero');
      }
      if (name.match(/^\./)) {
        errors.push('name cannot start with a period');
      }
      if (name.match(/^_/)) {
        errors.push('name cannot start with an underscore');
      }
      if (name.trim() !== name) {
        errors.push('name cannot contain leading or trailing spaces');
      }

      // No funny business
      blacklist.forEach(function (blacklistedName) {
        if (name.toLowerCase() === blacklistedName) {
          errors.push(blacklistedName + ' is a blacklisted name');
        }
      });

      // Generate warnings for stuff that used to be allowed

      // core module names like http, events, util, etc
      if (builtins.includes(name.toLowerCase())) {
        warnings.push(name + ' is a core module name');
      }
      if (name.length > 214) {
        warnings.push('name can no longer contain more than 214 characters');
      }

      // mIxeD CaSe nAMEs
      if (name.toLowerCase() !== name) {
        warnings.push('name can no longer contain capital letters');
      }
      if (/[~'!()*]/.test(name.split('/').slice(-1)[0])) {
        warnings.push('name can no longer contain special characters ("~\'!()*")');
      }
      if (encodeURIComponent(name) !== name) {
        // Maybe it's a scoped package name, like @user/package
        var nameMatch = name.match(scopedPackagePattern);
        if (nameMatch) {
          var user = nameMatch[1];
          var pkg = nameMatch[2];
          if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
            return done(warnings, errors);
          }
        }
        errors.push('name can only contain URL-friendly characters');
      }
      return done(warnings, errors);
    }
    var done = function done(warnings, errors) {
      var __temp_80__ = errors.length === 0;
      if (__temp_80__) __temp_80__ = warnings.length === 0;
      var result = {
        validForNewPackages: __temp_80__,
        validForOldPackages: errors.length === 0,
        warnings: warnings,
        errors: errors
      };
      if (!result.warnings.length) {
        delete result.warnings;
      }
      if (!result.errors.length) {
        delete result.errors;
      }
      return result;
    };
    module.exports = validate;

    /***/
  }), (/* 52 */
  /***/function (module) {
    var META = Symbol('proc-log.meta');
    module.exports = {
      META: META,
      output: {
        LEVELS: ['standard', 'error', 'buffer', 'flush'],
        KEYS: {
          standard: 'standard',
          error: 'error',
          buffer: 'buffer',
          flush: 'flush'
        },
        standard: function standard() {
          var _process;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return (_process = process).emit.apply(_process, ['output', 'standard'].concat(args));
        },
        error: function error() {
          var _process2;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return (_process2 = process).emit.apply(_process2, ['output', 'error'].concat(args));
        },
        buffer: function buffer() {
          var _process3;
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return (_process3 = process).emit.apply(_process3, ['output', 'buffer'].concat(args));
        },
        flush: function flush() {
          var _process4;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return (_process4 = process).emit.apply(_process4, ['output', 'flush'].concat(args));
        }
      },
      log: {
        LEVELS: ['notice', 'error', 'warn', 'info', 'verbose', 'http', 'silly', 'timing', 'pause', 'resume'],
        KEYS: {
          notice: 'notice',
          error: 'error',
          warn: 'warn',
          info: 'info',
          verbose: 'verbose',
          http: 'http',
          silly: 'silly',
          timing: 'timing',
          pause: 'pause',
          resume: 'resume'
        },
        error: function error() {
          var _process5;
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          return (_process5 = process).emit.apply(_process5, ['log', 'error'].concat(args));
        },
        notice: function notice() {
          var _process6;
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }
          return (_process6 = process).emit.apply(_process6, ['log', 'notice'].concat(args));
        },
        warn: function warn() {
          var _process7;
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }
          return (_process7 = process).emit.apply(_process7, ['log', 'warn'].concat(args));
        },
        info: function info() {
          var _process8;
          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }
          return (_process8 = process).emit.apply(_process8, ['log', 'info'].concat(args));
        },
        verbose: function verbose() {
          var _process9;
          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }
          return (_process9 = process).emit.apply(_process9, ['log', 'verbose'].concat(args));
        },
        http: function http() {
          var _process10;
          for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
          }
          return (_process10 = process).emit.apply(_process10, ['log', 'http'].concat(args));
        },
        silly: function silly() {
          var _process11;
          for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
          }
          return (_process11 = process).emit.apply(_process11, ['log', 'silly'].concat(args));
        },
        timing: function timing() {
          var _process12;
          for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
          }
          return (_process12 = process).emit.apply(_process12, ['log', 'timing'].concat(args));
        },
        pause: function pause() {
          return process.emit('log', 'pause');
        },
        resume: function resume() {
          return process.emit('log', 'resume');
        }
      },
      time: {
        LEVELS: ['start', 'end'],
        KEYS: {
          start: 'start',
          end: 'end'
        },
        start: function start(name, fn) {
          process.emit('time', 'start', name);
          function end() {
            return process.emit('time', 'end', name);
          }
          if (typeof fn === 'function') {
            var res = fn();
            if (res && res["finally"]) {
              return res["finally"](end);
            }
            end();
            return res;
          }
          return end;
        },
        end: function end(name) {
          return process.emit('time', 'end', name);
        }
      },
      input: {
        LEVELS: ['start', 'end', 'read'],
        KEYS: {
          start: 'start',
          end: 'end',
          read: 'read'
        },
        start: function start(fn) {
          process.emit('input', 'start');
          function end() {
            return process.emit('input', 'end');
          }
          if (typeof fn === 'function') {
            var res = fn();
            if (res && res["finally"]) {
              return res["finally"](end);
            }
            end();
            return res;
          }
          return end;
        },
        end: function end() {
          return process.emit('input', 'end');
        },
        read: function read() {
          var _process13;
          var resolve, reject;
          var promise = new Promise(function (_resolve, _reject) {
            resolve = _resolve;
            reject = _reject;
          });
          for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
            args[_key15] = arguments[_key15];
          }
          (_process13 = process).emit.apply(_process13, ['input', 'read', resolve, reject].concat(args));
          return promise;
        }
      }
    };

    /***/
  }
  /******/)];
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/global */
  /******/
  (function () {
    /******/__webpack_require__.g = function () {
      /******/if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') return globalThis;
      /******/
      try {
        /******/return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') return window;
        /******/
      }
      /******/
    }();
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/
  var __webpack_exports__ = __webpack_require__(0);
  /******/
  /******/
})();