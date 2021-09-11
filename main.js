/*! For license information please see main.js.LICENSE.txt */
!function() {
    var t, e = {
        655: function(t, e, r) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var o = function(t) {
                "use strict";
                var e, r = Object.prototype, o = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }
                function f(t, e, r, n) {
                    var o = e && e.prototype instanceof v ? e : v
                      , i = Object.create(o.prototype)
                      , a = new j(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = h;
                        return function(o, i) {
                            if (n === p)
                                throw new Error("Generator is already running");
                            if (n === y) {
                                if ("throw" === o)
                                    throw i;
                                return R()
                            }
                            for (r.method = o,
                            r.arg = i; ; ) {
                                var a = r.delegate;
                                if (a) {
                                    var s = A(a, r);
                                    if (s) {
                                        if (s === m)
                                            continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method)
                                    r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === h)
                                        throw n = y,
                                        r.arg;
                                    r.dispatchException(r.arg)
                                } else
                                    "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? y : d,
                                    u.arg === m)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = y,
                                r.method = "throw",
                                r.arg = u.arg)
                            }
                        }
                    }(t, r, a),
                    i
                }
                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = f;
                var h = "suspendedStart"
                  , d = "suspendedYield"
                  , p = "executing"
                  , y = "completed"
                  , m = {};
                function v() {}
                function b() {}
                function g() {}
                var w = {};
                w[a] = function() {
                    return this
                }
                ;
                var _ = Object.getPrototypeOf
                  , E = _ && _(_(O([])));
                E && E !== r && o.call(E, a) && (w = E);
                var S = g.prototype = v.prototype = Object.create(w);
                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function T(t, e) {
                    function r(i, a, s, u) {
                        var c = l(t[i], t, a);
                        if ("throw" !== c.type) {
                            var f = c.arg
                              , h = f.value;
                            return h && "object" === n(h) && o.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                r("next", t, s, u)
                            }
                            ), (function(t) {
                                r("throw", t, s, u)
                            }
                            )) : e.resolve(h).then((function(t) {
                                f.value = t,
                                s(f)
                            }
                            ), (function(t) {
                                return r("throw", t, s, u)
                            }
                            ))
                        }
                        u(c.arg)
                    }
                    var i;
                    this._invoke = function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                }
                function A(t, r) {
                    var n = t.iterator[r.method];
                    if (n === e) {
                        if (r.delegate = null,
                        "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return",
                            r.arg = e,
                            A(t, r),
                            "throw" === r.method))
                                return m;
                            r.method = "throw",
                            r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var o = l(n, t.iterator, r.arg);
                    if ("throw" === o.type)
                        return r.method = "throw",
                        r.arg = o.arg,
                        r.delegate = null,
                        m;
                    var i = o.arg;
                    return i ? i.done ? (r[t.resultName] = i.value,
                    r.next = t.nextLoc,
                    "return" !== r.method && (r.method = "next",
                    r.arg = e),
                    r.delegate = null,
                    m) : i : (r.method = "throw",
                    r.arg = new TypeError("iterator result is not an object"),
                    r.delegate = null,
                    m)
                }
                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function P(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(L, this),
                    this.reset(!0)
                }
                function O(t) {
                    if (t) {
                        var r = t[a];
                        if (r)
                            return r.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var n = -1
                              , i = function r() {
                                for (; ++n < t.length; )
                                    if (o.call(t, n))
                                        return r.value = t[n],
                                        r.done = !1,
                                        r;
                                return r.value = e,
                                r.done = !0,
                                r
                            };
                            return i.next = i
                        }
                    }
                    return {
                        next: R
                    }
                }
                function R() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return b.prototype = S.constructor = g,
                g.constructor = b,
                b.displayName = c(g, u, "GeneratorFunction"),
                t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g,
                    c(t, u, "GeneratorFunction")),
                    t.prototype = Object.create(S),
                    t
                }
                ,
                t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                x(T.prototype),
                T.prototype[s] = function() {
                    return this
                }
                ,
                t.AsyncIterator = T,
                t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new T(f(e, r, n, o),i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                x(S),
                c(S, u, "Generator"),
                S[a] = function() {
                    return this
                }
                ,
                S.toString = function() {
                    return "[object Generator]"
                }
                ,
                t.keys = function(t) {
                    var e = [];
                    for (var r in t)
                        e.push(r);
                    return e.reverse(),
                    function r() {
                        for (; e.length; ) {
                            var n = e.pop();
                            if (n in t)
                                return r.value = n,
                                r.done = !1,
                                r
                        }
                        return r.done = !0,
                        r
                    }
                }
                ,
                t.values = O,
                j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = e,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = e,
                        this.tryEntries.forEach(P),
                        !t)
                            for (var r in this)
                                "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var r = this;
                        function n(n, o) {
                            return s.type = "throw",
                            s.arg = t,
                            r.next = n,
                            o && (r.method = "next",
                            r.arg = e),
                            !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return n("end");
                            if (a.tryLoc <= this.prev) {
                                var u = o.call(a, "catchLoc")
                                  , c = o.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc)
                                        return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return n(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc)
                                        return n(a.catchLoc, !0)
                                } else {
                                    if (!c)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t,
                        a.arg = e,
                        i ? (this.method = "next",
                        this.next = i.finallyLoc,
                        m) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        m
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t)
                                return this.complete(r.completion, r.afterLoc),
                                P(r),
                                m
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    P(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: r,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = e),
                        m
                    }
                },
                t
            }("object" === n(t = r.nmd(t)) ? t.exports : {});
            try {
                regeneratorRuntime = o
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(o)
            }
        },
        699: function(t, e, r) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            !function(t) {
                "use strict";
                var e, r = function() {
                    try {
                        if (t.URLSearchParams && "bar" === new t.URLSearchParams("foo=bar").get("foo"))
                            return t.URLSearchParams
                    } catch (t) {}
                    return null
                }(), o = r && "a=1" === new r({
                    a: 1
                }).toString(), i = r && "+" === new r("s=%2B").get("s"), a = !r || ((e = new r).append("s", " &"),
                "s=+%26" === e.toString()), s = l.prototype, u = !(!t.Symbol || !t.Symbol.iterator);
                if (!(r && o && i && a)) {
                    var c;
                    s.append = function(t, e) {
                        m(this.__URLSearchParams__, t, e)
                    }
                    ,
                    s.delete = function(t) {
                        delete this.__URLSearchParams__[t]
                    }
                    ,
                    s.get = function(t) {
                        var e = this.__URLSearchParams__;
                        return this.has(t) ? e[t][0] : null
                    }
                    ,
                    s.getAll = function(t) {
                        var e = this.__URLSearchParams__;
                        return this.has(t) ? e[t].slice(0) : []
                    }
                    ,
                    s.has = function(t) {
                        return b(this.__URLSearchParams__, t)
                    }
                    ,
                    s.set = function(t, e) {
                        this.__URLSearchParams__[t] = ["" + e]
                    }
                    ,
                    s.toString = function() {
                        var t, e, r, n, o = this.__URLSearchParams__, i = [];
                        for (e in o)
                            for (r = h(e),
                            t = 0,
                            n = o[e]; t < n.length; t++)
                                i.push(r + "=" + h(n[t]));
                        return i.join("&")
                    }
                    ,
                    i && r && !o && t.Proxy ? (c = new Proxy(r,{
                        construct: function(t, e) {
                            return new t(new l(e[0]).toString())
                        }
                    })).toString = Function.prototype.toString.bind(l) : c = l,
                    Object.defineProperty(t, "URLSearchParams", {
                        value: c
                    });
                    var f = t.URLSearchParams.prototype;
                    f.polyfill = !0,
                    f.forEach = f.forEach || function(t, e) {
                        var r = y(this.toString());
                        Object.getOwnPropertyNames(r).forEach((function(n) {
                            r[n].forEach((function(r) {
                                t.call(e, r, n, this)
                            }
                            ), this)
                        }
                        ), this)
                    }
                    ,
                    f.sort = f.sort || function() {
                        var t, e, r, n = y(this.toString()), o = [];
                        for (t in n)
                            o.push(t);
                        for (o.sort(),
                        e = 0; e < o.length; e++)
                            this.delete(o[e]);
                        for (e = 0; e < o.length; e++) {
                            var i = o[e]
                              , a = n[i];
                            for (r = 0; r < a.length; r++)
                                this.append(i, a[r])
                        }
                    }
                    ,
                    f.keys = f.keys || function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push(r)
                        }
                        )),
                        p(t)
                    }
                    ,
                    f.values = f.values || function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        p(t)
                    }
                    ,
                    f.entries = f.entries || function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push([r, e])
                        }
                        )),
                        p(t)
                    }
                    ,
                    u && (f[t.Symbol.iterator] = f[t.Symbol.iterator] || f.entries)
                }
                function l(t) {
                    ((t = t || "")instanceof URLSearchParams || t instanceof l) && (t = t.toString()),
                    this.__URLSearchParams__ = y(t)
                }
                function h(t) {
                    var e = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": "\0"
                    };
                    return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g, (function(t) {
                        return e[t]
                    }
                    ))
                }
                function d(t) {
                    return t.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, (function(t) {
                        return decodeURIComponent(t)
                    }
                    ))
                }
                function p(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return u && (r[t.Symbol.iterator] = function() {
                        return r
                    }
                    ),
                    r
                }
                function y(t) {
                    var e = {};
                    if ("object" === n(t))
                        if (v(t))
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r];
                                if (!v(o) || 2 !== o.length)
                                    throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                                m(e, o[0], o[1])
                            }
                        else
                            for (var i in t)
                                t.hasOwnProperty(i) && m(e, i, t[i]);
                    else {
                        0 === t.indexOf("?") && (t = t.slice(1));
                        for (var a = t.split("&"), s = 0; s < a.length; s++) {
                            var u = a[s]
                              , c = u.indexOf("=");
                            -1 < c ? m(e, d(u.slice(0, c)), d(u.slice(c + 1))) : u && m(e, d(u), "")
                        }
                    }
                    return e
                }
                function m(t, e, r) {
                    var n = "string" == typeof r ? r : null != r && "function" == typeof r.toString ? r.toString() : JSON.stringify(r);
                    b(t, e) ? t[e].push(n) : t[e] = [n]
                }
                function v(t) {
                    return !!t && "[object Array]" === Object.prototype.toString.call(t)
                }
                function b(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
            }(void 0 !== r.g ? r.g : "undefined" != typeof window ? window : this)
        }
    }, r = {};
    function n(t) {
        var o = r[t];
        if (void 0 !== o)
            return o.exports;
        var i = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n),
        i.loaded = !0,
        i.exports
    }
    n.m = e,
    n.d = function(t, e) {
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    n.f = {},
    n.e = function(t) {
        return Promise.all(Object.keys(n.f).reduce((function(e, r) {
            return n.f[r](t, e),
            e
        }
        ), []))
    }
    ,
    n.u = function(t) {
        return t + ".main.js"
    }
    ,
    n.miniCssF = function(t) {}
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    t = {},
    n.l = function(e, r, o, i) {
        if (t[e])
            t[e].push(r);
        else {
            var a, s;
            if (void 0 !== o)
                for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                    var f = u[c];
                    if (f.getAttribute("src") == e) {
                        a = f;
                        break
                    }
                }
            a || (s = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            n.nc && a.setAttribute("nonce", n.nc),
            a.src = e),
            t[e] = [r];
            var l = function(r, n) {
                a.onerror = a.onload = null,
                clearTimeout(h);
                var o = t[e];
                if (delete t[e],
                a.parentNode && a.parentNode.removeChild(a),
                o && o.forEach((function(t) {
                    return t(n)
                }
                )),
                r)
                    return r(n)
            }
              , h = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = l.bind(null, a.onerror),
            a.onload = l.bind(null, a.onload),
            s && document.head.appendChild(a)
        }
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.nmd = function(t) {
        return t.paths = [],
        t.children || (t.children = []),
        t
    }
    ,
    function() {
        var t;
        n.g.importScripts && (t = n.g.location + "");
        var e = n.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src),
        !t)) {
            var r = e.getElementsByTagName("script");
            r.length && (t = r[r.length - 1].src)
        }
        if (!t)
            throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = t
    }(),
    function() {
        var t = {
            179: 0
        };
        n.f.j = function(e, r) {
            var o = n.o(t, e) ? t[e] : void 0;
            if (0 !== o)
                if (o)
                    r.push(o[2]);
                else {
                    var i = new Promise((function(r, n) {
                        o = t[e] = [r, n]
                    }
                    ));
                    r.push(o[2] = i);
                    var a = n.p + n.u(e)
                      , s = new Error;
                    n.l(a, (function(r) {
                        if (n.o(t, e) && (0 !== (o = t[e]) && (t[e] = void 0),
                        o)) {
                            var i = r && ("load" === r.type ? "missing" : r.type)
                              , a = r && r.target && r.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = a,
                            o[1](s)
                        }
                    }
                    ), "chunk-" + e, e)
                }
        }
        ;
        var e = function(e, r) {
            var o, i, a = r[0], s = r[1], u = r[2], c = 0;
            for (o in s)
                n.o(s, o) && (n.m[o] = s[o]);
            for (u && u(n),
            e && e(r); c < a.length; c++)
                i = a[c],
                n.o(t, i) && t[i] && t[i][0](),
                t[a[c]] = 0
        }
          , r = self.webpackChunk = self.webpackChunk || [];
        r.forEach(e.bind(null, 0)),
        r.push = e.bind(null, r.push.bind(r))
    }(),
    function() {
        "use strict";
        n(655);
        var t = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return [].slice.call(e.querySelectorAll(t))
        };
        function e(e) {
            var r = t(".drawer", e.parentNode)[0]
              , n = t(".drawer-content", r)[0];
            function o(t) {
                t.stopPropagation(),
                document.body.classList.add("has-open-drawer"),
                r.classList.add("open"),
                document.body.addEventListener("click", i)
            }
            function i(t) {
                n.contains(t.target) || a()
            }
            function a() {
                document.body.classList.remove("has-open-drawer"),
                r.classList.remove("open"),
                document.body.removeEventListener("click", i),
                e.addEventListener("click", o)
            }
            e && r && (n.addEventListener("focusout", a),
            e.addEventListener("click", o))
        }
        n(699);
        var r = function(t) {
            var e = this.constructor;
            return this.then((function(r) {
                return e.resolve(t()).then((function() {
                    return r
                }
                ))
            }
            ), (function(r) {
                return e.resolve(t()).then((function() {
                    return e.reject(r)
                }
                ))
            }
            ))
        };
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var i = function(t) {
            return new this((function(e, r) {
                if (!t || void 0 === t.length)
                    return r(new TypeError(o(t) + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var n = Array.prototype.slice.call(t);
                if (0 === n.length)
                    return e([]);
                var i = n.length;
                function a(t, r) {
                    if (r && ("object" === o(r) || "function" == typeof r)) {
                        var s = r.then;
                        if ("function" == typeof s)
                            return void s.call(r, (function(e) {
                                a(t, e)
                            }
                            ), (function(r) {
                                n[t] = {
                                    status: "rejected",
                                    reason: r
                                },
                                0 == --i && e(n)
                            }
                            ))
                    }
                    n[t] = {
                        status: "fulfilled",
                        value: r
                    },
                    0 == --i && e(n)
                }
                for (var s = 0; s < n.length; s++)
                    a(s, n[s])
            }
            ))
        };
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var s = setTimeout;
        function u(t) {
            return Boolean(t && void 0 !== t.length)
        }
        function c() {}
        function f(t) {
            if (!(this instanceof f))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            m(t, this)
        }
        function l(t, e) {
            for (; 3 === t._state; )
                t = t._value;
            0 !== t._state ? (t._handled = !0,
            f._immediateFn((function() {
                var r = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== r) {
                    var n;
                    try {
                        n = r(t._value)
                    } catch (t) {
                        return void d(e.promise, t)
                    }
                    h(e.promise, n)
                } else
                    (1 === t._state ? h : d)(e.promise, t._value)
            }
            ))) : t._deferreds.push(e)
        }
        function h(t, e) {
            try {
                if (e === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === a(e) || "function" == typeof e)) {
                    var r = e.then;
                    if (e instanceof f)
                        return t._state = 3,
                        t._value = e,
                        void p(t);
                    if ("function" == typeof r)
                        return void m((n = r,
                        o = e,
                        function() {
                            n.apply(o, arguments)
                        }
                        ), t)
                }
                t._state = 1,
                t._value = e,
                p(t)
            } catch (e) {
                d(t, e)
            }
            var n, o
        }
        function d(t, e) {
            t._state = 2,
            t._value = e,
            p(t)
        }
        function p(t) {
            2 === t._state && 0 === t._deferreds.length && f._immediateFn((function() {
                t._handled || f._unhandledRejectionFn(t._value)
            }
            ));
            for (var e = 0, r = t._deferreds.length; e < r; e++)
                l(t, t._deferreds[e]);
            t._deferreds = null
        }
        function y(t, e, r) {
            this.onFulfilled = "function" == typeof t ? t : null,
            this.onRejected = "function" == typeof e ? e : null,
            this.promise = r
        }
        function m(t, e) {
            var r = !1;
            try {
                t((function(t) {
                    r || (r = !0,
                    h(e, t))
                }
                ), (function(t) {
                    r || (r = !0,
                    d(e, t))
                }
                ))
            } catch (t) {
                if (r)
                    return;
                r = !0,
                d(e, t)
            }
        }
        f.prototype.catch = function(t) {
            return this.then(null, t)
        }
        ,
        f.prototype.then = function(t, e) {
            var r = new this.constructor(c);
            return l(this, new y(t,e,r)),
            r
        }
        ,
        f.prototype.finally = r,
        f.all = function(t) {
            return new f((function(e, r) {
                if (!u(t))
                    return r(new TypeError("Promise.all accepts an array"));
                var n = Array.prototype.slice.call(t);
                if (0 === n.length)
                    return e([]);
                var o = n.length;
                function i(t, s) {
                    try {
                        if (s && ("object" === a(s) || "function" == typeof s)) {
                            var u = s.then;
                            if ("function" == typeof u)
                                return void u.call(s, (function(e) {
                                    i(t, e)
                                }
                                ), r)
                        }
                        n[t] = s,
                        0 == --o && e(n)
                    } catch (t) {
                        r(t)
                    }
                }
                for (var s = 0; s < n.length; s++)
                    i(s, n[s])
            }
            ))
        }
        ,
        f.allSettled = i,
        f.resolve = function(t) {
            return t && "object" === a(t) && t.constructor === f ? t : new f((function(e) {
                e(t)
            }
            ))
        }
        ,
        f.reject = function(t) {
            return new f((function(e, r) {
                r(t)
            }
            ))
        }
        ,
        f.race = function(t) {
            return new f((function(e, r) {
                if (!u(t))
                    return r(new TypeError("Promise.race accepts an array"));
                for (var n = 0, o = t.length; n < o; n++)
                    f.resolve(t[n]).then(e, r)
            }
            ))
        }
        ,
        f._immediateFn = "function" == typeof setImmediate && function(t) {
            setImmediate(t)
        }
        || function(t) {
            s(t, 0)
        }
        ,
        f._unhandledRejectionFn = function(t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }
        ;
        var v = f
          , b = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== n.g)
                return n.g;
            throw new Error("unable to locate global object")
        }();
        function g(t) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        "function" != typeof b.Promise ? b.Promise = v : b.Promise.prototype.finally ? b.Promise.allSettled || (b.Promise.allSettled = i) : b.Promise.prototype.finally = r;
        var w = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== w && w
          , _ = "URLSearchParams"in w
          , E = "Symbol"in w && "iterator"in Symbol
          , S = "FileReader"in w && "Blob"in w && function() {
            try {
                return new Blob,
                !0
            } catch (t) {
                return !1
            }
        }()
          , x = "FormData"in w
          , T = "ArrayBuffer"in w;
        if (T)
            var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
              , L = ArrayBuffer.isView || function(t) {
                return t && A.indexOf(Object.prototype.toString.call(t)) > -1
            }
            ;
        function P(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
                throw new TypeError('Invalid character in header field name: "' + t + '"');
            return t.toLowerCase()
        }
        function j(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function O(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return E && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function R(t) {
            this.map = {},
            t instanceof R ? t.forEach((function(t, e) {
                this.append(e, t)
            }
            ), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }
            ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }
            ), this)
        }
        function k(t) {
            if (t.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }
        function U(t) {
            return new Promise((function(e, r) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    r(t.error)
                }
            }
            ))
        }
        function B(t) {
            var e = new FileReader
              , r = U(e);
            return e.readAsArrayBuffer(t),
            r
        }
        function F(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function N() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                var e;
                this.bodyUsed = this.bodyUsed,
                this._bodyInit = t,
                t ? "string" == typeof t ? this._bodyText = t : S && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : x && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : _ && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : T && S && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = F(t.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer])) : T && (ArrayBuffer.prototype.isPrototypeOf(t) || L(t)) ? this._bodyArrayBuffer = F(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _ && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            S && (this.blob = function() {
                var t = k(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? k(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(B)
            }
            ),
            this.text = function() {
                var t, e, r, n = k(this);
                if (n)
                    return n;
                if (this._bodyBlob)
                    return t = this._bodyBlob,
                    r = U(e = new FileReader),
                    e.readAsText(t),
                    r;
                if (this._bodyArrayBuffer)
                    return Promise.resolve(function(t) {
                        for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
                            r[n] = String.fromCharCode(e[n]);
                        return r.join("")
                    }(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            x && (this.formData = function() {
                return this.text().then(C)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        R.prototype.append = function(t, e) {
            t = P(t),
            e = j(e);
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e
        }
        ,
        R.prototype.delete = function(t) {
            delete this.map[P(t)]
        }
        ,
        R.prototype.get = function(t) {
            return t = P(t),
            this.has(t) ? this.map[t] : null
        }
        ,
        R.prototype.has = function(t) {
            return this.map.hasOwnProperty(P(t))
        }
        ,
        R.prototype.set = function(t, e) {
            this.map[P(t)] = j(e)
        }
        ,
        R.prototype.forEach = function(t, e) {
            for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }
        ,
        R.prototype.keys = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push(r)
            }
            )),
            O(t)
        }
        ,
        R.prototype.values = function() {
            var t = [];
            return this.forEach((function(e) {
                t.push(e)
            }
            )),
            O(t)
        }
        ,
        R.prototype.entries = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push([r, e])
            }
            )),
            O(t)
        }
        ,
        E && (R.prototype[Symbol.iterator] = R.prototype.entries);
        var D = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function I(t, e) {
            if (!(this instanceof I))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, n, o = (e = e || {}).body;
            if (t instanceof I) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new R(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                this.signal = t.signal,
                o || null == t._bodyInit || (o = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "same-origin",
            !e.headers && this.headers || (this.headers = new R(e.headers)),
            this.method = (n = (r = e.method || this.method || "GET").toUpperCase(),
            D.indexOf(n) > -1 ? n : r),
            this.mode = e.mode || this.mode || null,
            this.signal = e.signal || this.signal,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && o)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(o),
            !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                var i = /([?&])_=[^&]*/;
                i.test(this.url) ? this.url = this.url.replace(i, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
        function C(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var r = t.split("=")
                      , n = r.shift().replace(/\+/g, " ")
                      , o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }
            )),
            e
        }
        function G(t, e) {
            if (!(this instanceof G))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            e || (e = {}),
            this.type = "default",
            this.status = void 0 === e.status ? 200 : e.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = void 0 === e.statusText ? "" : "" + e.statusText,
            this.headers = new R(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        I.prototype.clone = function() {
            return new I(this,{
                body: this._bodyInit
            })
        }
        ,
        N.call(I.prototype),
        N.call(G.prototype),
        G.prototype.clone = function() {
            return new G(this._bodyInit,{
                status: this.status,
                statusText: this.statusText,
                headers: new R(this.headers),
                url: this.url
            })
        }
        ,
        G.error = function() {
            var t = new G(null,{
                status: 0,
                statusText: ""
            });
            return t.type = "error",
            t
        }
        ;
        var q = [301, 302, 303, 307, 308];
        G.redirect = function(t, e) {
            if (-1 === q.indexOf(e))
                throw new RangeError("Invalid status code");
            return new G(null,{
                status: e,
                headers: {
                    location: t
                }
            })
        }
        ;
        var H = w.DOMException;
        try {
            new H
        } catch (t) {
            (H = function(t, e) {
                this.message = t,
                this.name = e;
                var r = Error(t);
                this.stack = r.stack
            }
            ).prototype = Object.create(Error.prototype),
            H.prototype.constructor = H
        }
        function M(t, e) {
            return new Promise((function(r, n) {
                var o = new I(t,e);
                if (o.signal && o.signal.aborted)
                    return n(new H("Aborted","AbortError"));
                var i = new XMLHttpRequest;
                function a() {
                    i.abort()
                }
                i.onload = function() {
                    var t, e, n = {
                        status: i.status,
                        statusText: i.statusText,
                        headers: (t = i.getAllResponseHeaders() || "",
                        e = new R,
                        t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                            return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                        }
                        )).forEach((function(t) {
                            var r = t.split(":")
                              , n = r.shift().trim();
                            if (n) {
                                var o = r.join(":").trim();
                                e.append(n, o)
                            }
                        }
                        )),
                        e)
                    };
                    n.url = "responseURL"in i ? i.responseURL : n.headers.get("X-Request-URL");
                    var o = "response"in i ? i.response : i.responseText;
                    setTimeout((function() {
                        r(new G(o,n))
                    }
                    ), 0)
                }
                ,
                i.onerror = function() {
                    setTimeout((function() {
                        n(new TypeError("Network request failed"))
                    }
                    ), 0)
                }
                ,
                i.ontimeout = function() {
                    setTimeout((function() {
                        n(new TypeError("Network request failed"))
                    }
                    ), 0)
                }
                ,
                i.onabort = function() {
                    setTimeout((function() {
                        n(new H("Aborted","AbortError"))
                    }
                    ), 0)
                }
                ,
                i.open(o.method, function(t) {
                    try {
                        return "" === t && w.location.href ? w.location.href : t
                    } catch (e) {
                        return t
                    }
                }(o.url), !0),
                "include" === o.credentials ? i.withCredentials = !0 : "omit" === o.credentials && (i.withCredentials = !1),
                "responseType"in i && (S ? i.responseType = "blob" : T && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (i.responseType = "arraybuffer")),
                !e || "object" !== g(e.headers) || e.headers instanceof R ? o.headers.forEach((function(t, e) {
                    i.setRequestHeader(e, t)
                }
                )) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                    i.setRequestHeader(t, j(e.headers[t]))
                }
                )),
                o.signal && (o.signal.addEventListener("abort", a),
                i.onreadystatechange = function() {
                    4 === i.readyState && o.signal.removeEventListener("abort", a)
                }
                ),
                i.send(void 0 === o._bodyInit ? null : o._bodyInit)
            }
            ))
        }
        M.polyfill = !0,
        w.fetch || (w.fetch = M,
        w.Headers = R,
        w.Request = I,
        w.Response = G);
        var V = function() {
            return new URLSearchParams(window.location.search).get("lang") || ""
        }
          , $ = !0;
        function z(t, e, r, n, o, i, a) {
            try {
                var s = t[i](a)
                  , u = s.value
            } catch (t) {
                return void r(t)
            }
            s.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function J(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        z(i, n, o, a, s, "next", t)
                    }
                    function s(t) {
                        z(i, n, o, a, s, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var W = "index"
          , X = "scan";
        function Y() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            e && history.state !== X && history.pushState(X, ""),
            Z(!1),
            t(".intro")[0].setAttribute("hidden", "true"),
            t(".result")[0].setAttribute("hidden", "true"),
            t(".scanner")[0].removeAttribute("hidden", "true"),
            tt(),
            Promise.all([n.e(798), n.e(431)]).then(n.bind(n, 431)).then((function(t) {
                var e = t.scan;
                !function() {
                    var t = J(regeneratorRuntime.mark((function t() {
                        var r, n, o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1,
                                    t.next = 4,
                                    e();
                                case 4:
                                    return r = t.sent,
                                    n = r.isValid,
                                    o = r.payload,
                                    Q(n, o),
                                    t.abrupt("break", 17);
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t.catch(1);
                                case 13:
                                    return t.next = 15,
                                    new Promise((function(t) {
                                        return setTimeout(t, 400)
                                    }
                                    ));
                                case 15:
                                    t.next = 0;
                                    break;
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 11]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ))
        }
        function K(t) {
            return new Intl.DateTimeFormat("lt-lt",{
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric"
            }).format(new Date(t))
        }
        function Q(e, r) {
            et(),
            e ? (t("#info-name")[0].innerText = r.fn + " " + r.ln,
            t("#info-year-of-birth")[0].innerText = r.by,
            t("#info-issued")[0].innerText = K(r.iss),
            t("#info-valid-till")[0].innerText = K(r.vt),
            t(".pass-status")[0].classList.add("GREEN"),
            t(".pass-status")[0].classList.remove("RED"),
            t("#pass-symbol img")[0].src = passSymbols.green,
            t("#pass-title")[0].innerText = i18n.status_title_GREEN,
            t("#pass-description")[0].innerText = i18n.status_description_GREEN) : (t("#info-name")[0].innerText = "-",
            t("#info-year-of-birth")[0].innerText = "-",
            t("#info-issued")[0].innerText = "-",
            t("#info-valid-till")[0].innerText = "-",
            t("#pass-symbol img")[0].src = passSymbols.red,
            t(".pass-status")[0].classList.add("RED"),
            t(".pass-status")[0].classList.remove("GREEN"),
            t("#pass-title")[0].innerText = i18n.status_title_RED,
            t("#pass-description")[0].innerText = i18n.status_description_RED),
            Z(!1),
            t(".intro")[0].setAttribute("hidden", "true"),
            t(".scanner")[0].setAttribute("hidden", "true"),
            t(".result")[0].removeAttribute("hidden")
        }
        function Z(e) {
            t(".languages").forEach((function(t) {
                return t.style.display = e ? "" : "none"
            }
            ))
        }
        function tt() {
            window.navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment"
                },
                audio: !1
            }).then((function(t) {
                var e = document.getElementById("output");
                e.srcObject = t,
                e.play()
            }
            )).catch((function(t) {
                "NotAllowedError" !== t.name && alert(i18n.device_failed_to_start)
            }
            ))
        }
        function et() {
            var t = document.getElementById("output");
            t.pause();
            try {
                t.srcObject.getTracks().forEach((function(t) {
                    return t.stop()
                }
                ))
            } catch (t) {}
        }
        !function() {
            var r;
            (function(e) {
                if (e) {
                    var r, n, o = 0, i = t('[role="tabpanel"]', e.parentNode);
                    window.addEventListener("resize", (r = s,
                    function() {
                        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
                            e[o] = arguments[o];
                        n || (r.apply(void 0, e),
                        n = setTimeout((function() {
                            n = null,
                            r.apply(void 0, e)
                        }
                        ), 100))
                    }
                    )),
                    s();
                    var a = t('[role="tab"]', e.parentNode);
                    a.forEach((function(t) {
                        t.addEventListener("click", u)
                    }
                    )),
                    e.addEventListener("keydown", (function(t) {
                        39 !== t.keyCode && 37 !== t.keyCode || (a[o].setAttribute("tabindex", -1),
                        39 === t.keyCode ? ++o >= a.length && (o = 0) : 37 === t.keyCode && --o < 0 && (o = a.length - 1),
                        a[o].setAttribute("tabindex", 0),
                        a[o].focus())
                    }
                    ))
                }
                function s() {
                    if (window.matchMedia("(min-width: 991px)").matches)
                        i.forEach((function(t) {
                            return t.removeAttribute("aria-hidden")
                        }
                        ));
                    else {
                        var r = t('[aria-selected="true"]', e)[0];
                        i.forEach((function(t) {
                            t.id !== r.getAttribute("aria-controls") && t.setAttribute("aria-hidden", "true")
                        }
                        ))
                    }
                }
                function u(e) {
                    var r = e.target
                      , n = r.parentNode
                      , o = n.parentNode;
                    t('[aria-selected="true"]', n).forEach((function(t) {
                        return t.setAttribute("aria-selected", !1)
                    }
                    )),
                    r.setAttribute("aria-selected", !0),
                    t('[role="tabpanel"]', o).forEach((function(t) {
                        t.setAttribute("aria-hidden", !0)
                    }
                    )),
                    t("#".concat(r.getAttribute("aria-controls")), o.parentNode)[0].removeAttribute("aria-hidden")
                }
            }
            )(t(".tablist")[0]),
            t(".language-selector-button").forEach(e),
            (localStorage.getItem("language") || "") !== V() && ("" === V() || (r = V(),
            localStorage.setItem("language", r)));
            var n = t('[data-id="pdf-form"]');
            if (n.length > 0 && !window.certSaved) {
                window.addEventListener("beforeunload", (function(t) {
                    $ && (t.preventDefault(),
                    t.returnValue = "")
                }
                ));
                var o = function() {
                    $ = !1
                };
                n.forEach((function(t) {
                    return t.addEventListener("submit", o)
                }
                )),
                t(".logout").forEach((function(t) {
                    return t.addEventListener("click", o)
                }
                )),
                t(".check-next").forEach((function(t) {
                    return t.addEventListener("click", o)
                }
                ))
            }
        }(),
        t('input[type="checkbox"]').forEach((function(e) {
            var r = t("button", e.parentNode)[0];
            e.addEventListener("change", (function() {
                e.checked ? r.removeAttribute("disabled") : r.setAttribute("disabled", "disabled")
            }
            ))
        }
        )),
        "serviceWorker"in navigator && navigator.serviceWorker.register("/sw.js"),
        window.addEventListener("popstate", (function(e) {
            switch (e.state) {
            case W:
                !function() {
                    arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] || history.pushState(W, ""),
                    et(),
                    Z(!0),
                    t(".intro")[0].removeAttribute("hidden"),
                    t(".result")[0].setAttribute("hidden", "true"),
                    t(".scanner")[0].setAttribute("hidden", "true")
                }(!1);
                break;
            case X:
                Y(!1)
            }
        }
        )),
        window.navigator.mediaDevices ? (t(".styled-checkbox").forEach((function(t) {
            return t.removeAttribute("disabled")
        }
        )),
        history.replaceState(W, ""),
        t('[data-id="scan-button"]').forEach((function(t) {
            return t.addEventListener("click", Y)
        }
        ))) : t(".form-error").forEach((function(t) {
            return t.style.display = ""
        }
        ))
    }()
}();
