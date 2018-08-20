﻿"object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(t) {
            return 10 > t ? "0" + t: t
        }
        function quote(t) {
            return escapable.lastIndex = 0,
                escapable.test(t) ? '"' + t.replace(escapable,
                        function(t) {
                            var e = meta[t];
                            return "string" == typeof e ? e: "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                        }) + '"': '"' + t + '"'
        }
        function str(t, e) {
            var n, r, o, u, i, a = gap,
                f = e[t];
            switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(t)), "function" == typeof rep && (f = rep.call(e, t, f)), typeof f) {
                case "string":
                    return quote(f);
                case "number":
                    return isFinite(f) ? String(f) : "null";
                case "boolean":
                case "null":
                    return String(f);
                case "object":
                    if (!f) return "null";
                    if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                        for (u = f.length, n = 0; u > n; n += 1) i[n] = str(n, f) || "null";
                        return o = 0 === i.length ? "[]": gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + a + "]": "[" + i.join(",") + "]",
                            gap = a,
                            o
                    }
                    if (rep && "object" == typeof rep) for (u = rep.length, n = 0; u > n; n += 1)"string" == typeof rep[n] && (r = rep[n], o = str(r, f), o && i.push(quote(r) + (gap ? ": ": ":") + o));
                    else for (r in f) Object.prototype.hasOwnProperty.call(f, r) && (o = str(r, f), o && i.push(quote(r) + (gap ? ": ": ":") + o));
                    return o = 0 === i.length ? "{}": gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + a + "}": "{" + i.join(",") + "}",
                        gap = a,
                        o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        },
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
        var cx, escapable, gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
            JSON.stringify = function(t, e, n) {
                var r;
                if (gap = "", indent = "", "number" == typeof n) for (r = 0; n > r; r += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }),
        "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, r, o = t[e];
                if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r: delete o[n]);
                return reviver.call(t, e, o)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
                    function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                        "": j
                    },
                    "") : j;
            throw new SyntaxError("JSON.parse")
        })
    } ();
var BJ_REPORT = function(t) {
    if (t.BJ_REPORT) return t.BJ_REPORT;
    var e = [],
        n = {
            id: 0,
            uin: 0,
            url: "",
            combo: 1,
            ext: {},
            level: 4,
            ignore: [],
            random: 1,
            delay: 1e3,
            submit: null
        },
        r = function(t, e) {
            return Object.prototype.toString.call(t) === "[object " + (e || "Object") + "]"
        },
        o = function(t) {
            var e = typeof t;
            return "object" === e && !!t
        },
        u = function(t) {
            return null === t ? !0 : r(t, "Number") ? !1 : !t
        },
        i = (t.onerror,
            function(t) {
                try {
                    if (t.stack) {
                        var e = t.stack.match("https?://[^\n]+");
                        e = e ? e[0] : "";
                        var n = e.match(":(\\d+):(\\d+)");
                        n || (n = [0, 0, 0]);
                        var r = a(t);
                        return {
                            msg: r,
                            rowNum: n[1],
                            colNum: n[2],
                            target: e.replace(n[0], "")
                        }
                    }
                    return t.name && t.message && t.description ? {
                        msg: JSON.stringify(t)
                    }: t
                } catch(o) {
                    return t
                }
            }),
        a = function(t) {
            var e = t.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, ""),
                n = t.toString();
            return e.indexOf(n) < 0 && (e = n + "@" + e),
                e
        },
        f = function(t, e) {
            var r = [],
                i = [],
                a = [];
            if (o(t)) {
                t.level = t.level || n.level;
                for (var f in t) {
                    var s = t[f];
                    if (!u(s)) {
                        if (o(s)) try {
                            s = JSON.stringify(s)
                        } catch(c) {
                            s = "[BJ_REPORT detect value stringify error] " + c.toString()
                        }
                        a.push(f + ":" + s),
                            r.push(f + "=" + encodeURIComponent(s)),
                            i.push(f + "[" + e + "]=" + encodeURIComponent(s))
                    }
                }
            }
            return [i.join("&"), a.join(","), r.join("&")]
        },
        s = [],
        c = function(t) {
            if (n.submit) n.submit(t);
            else {
                var e = new Image;
                s.push(e),
                    e.src = t
            }
        },
        p = [],
        l = 0,
        g = function(t) {
            if (n.report) {
                for (; e.length;) {
                    var o = !1,
                        u = e.shift(),
                        i = f(u, p.length);
                    if (r(n.ignore, "Array")) for (var a = 0,
                                                       s = n.ignore.length; s > a; a++) {
                        var g = n.ignore[a];
                        if (r(g, "RegExp") && g.test(i[1]) || r(g, "Function") && g(u, i[1])) {
                            o = !0;
                            break
                        }
                    }
                    o || (n.combo ? p.push(i[0]) : c(n.report + i[2] + "&_t=" + +new Date), n.onReport && n.onReport(n.id, u))
                }
                var y = p.length;
                if (y) {
                    var d = function() {
                        clearTimeout(l),
                            c(n.report + p.join("&") + "&count=" + y + "&_t=" + +new Date),
                            l = 0,
                            p = []
                    };
                    t ? d() : l || (l = setTimeout(d, n.delay))
                }
            }
        },
        y = {
            push: function(t) {
                return Math.random() >= n.random ? y: (e.push(o(t) ? i(t) : {
                    msg: t
                }), g(), y)
            },
            report: function(t) {
                return t && y.push(t),
                    g(!0),
                    y
            },
            info: function(t) {
                return t ? (o(t) ? t.level = 2 : t = {
                    msg: t,
                    level: 2
                },
                    y.push(t), y) : y
            },
            debug: function(t) {
                return t ? (o(t) ? t.level = 1 : t = {
                    msg: t,
                    level: 1
                },
                    y.push(t), y) : y
            },
            init: function(t) {
                if (o(t)) for (var e in t) n[e] = t[e];
                var r = parseInt(n.id, 10);
                return r && (/qq\.com$/gi.test(window.location.hostname) && (n.url || (n.url = "//badjs2.qq.com/badjs"), n.uin || (n.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), n.report = n.url + "?id=" + r + "&uin=" + n.uin + "&from=" + encodeURIComponent(location.href) + "&ext=" + JSON.stringify(n.ext) + "&"),
                    y
            },
            __onerror__: t.onerror
        };
    return "undefined" != typeof console && console.error && setTimeout(function() {
            var t = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
            t && console.error("BJ_ERROR", decodeURIComponent(t).replace(/(:\d+:\d+)\s*/g, "$1\n"))
        },
        0),
        y
} (window);
"undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = BJ_REPORT), exports.BJ_REPORT = BJ_REPORT),
    function(t) {
        if (t.BJ_REPORT) {
            var e, n = function(e) {
                    t.BJ_REPORT.report(e)
                },
                r = t.BJ_REPORT.tryJs = function(t) {
                    return t && (n = t),
                        r
                },
                o = function(t, e) {
                    var n;
                    for (n in e) t[n] = e[n]
                },
                u = function(t) {
                    return "function" == typeof t
                },
                i = function(r, o) {
                    return function() {
                        try {
                            return r.apply(this, o || arguments)
                        } catch(u) {
                            if (n(u), u.stack && console && console.error && console.error("[BJ-REPORT]", u.stack), !e) {
                                var i = t.onerror;
                                t.onerror = function() {},
                                    e = setTimeout(function() {
                                            t.onerror = i,
                                                e = null
                                        },
                                        50)
                            }
                            throw u
                        }
                    }
                },
                a = function(t) {
                    return function() {
                        for (var e, n = [], r = 0, o = arguments.length; o > r; r++) e = arguments[r],
                        u(e) && (e = i(e)),
                            n.push(e);
                        return t.apply(this, n)
                    }
                },
                f = function(t) {
                    return function(e, n) {
                        if ("string" == typeof e) try {
                            e = new Function(e)
                        } catch(r) {
                            throw r
                        }
                        var o = [].slice.call(arguments, 2);
                        return e = i(e, o.length && o),
                            t(e, n)
                    }
                },
                s = function(t, e) {
                    return function() {
                        for (var n, r, o = [], a = 0, f = arguments.length; f > a; a++) n = arguments[a],
                        u(n) && (r = i(n)) && (n.tryWrap = r) && (n = r),
                            o.push(n);
                        return t.apply(e || this, o)
                    }
                },
                c = function(t) {
                    var e, n;
                    for (e in t) n = t[e],
                    u(n) && (t[e] = i(n));
                    return t
                };
            r.spyJquery = function() {
                var e = t.$;
                if (!e || !e.event) return r;
                var n, o;
                e.zepto ? (n = e.fn.on, o = e.fn.off, e.fn.on = s(n), e.fn.off = function() {
                    for (var t, e = [], n = 0, r = arguments.length; r > n; n++) t = arguments[n],
                    u(t) && t.tryWrap && (t = t.tryWrap),
                        e.push(t);
                    return o.apply(this, e)
                }) : window.jQuery && (n = e.event.add, o = e.event.remove, e.event.add = s(n), e.event.remove = function() {
                        for (var t, e = [], n = 0, r = arguments.length; r > n; n++) t = arguments[n],
                        u(t) && t.tryWrap && (t = t.tryWrap),
                            e.push(t);
                        return o.apply(this, e)
                    });
                var i = e.ajax;
                return i && (e.ajax = function(t, n) {
                    return n || (n = t, t = void 0),
                        c(n),
                        t ? i.call(e, t, n) : i.call(e, n)
                }),
                    r
            },
                r.spyModules = function() {
                    var e = t.require,
                        n = t.define;
                    return n && n.amd && e && (t.require = a(e), o(t.require, e), t.define = a(n), o(t.define, n)),
                    t.seajs && n && (t.define = function() {
                        for (var t, e = [], r = 0, o = arguments.length; o > r; r++) t = arguments[r],
                        u(t) && (t = i(t), t.toString = function(t) {
                            return function() {
                                return t.toString()
                            }
                        } (arguments[r])),
                            e.push(t);
                        return n.apply(this, e)
                    },
                        t.seajs.use = a(t.seajs.use), o(t.define, n)),
                        r
                },
                r.spySystem = function() {
                    return t.setTimeout = f(t.setTimeout),
                        t.setInterval = f(t.setInterval),
                        r
                },
                r.spyCustom = function(t) {
                    return u(t) ? i(t) : c(t)
                },
                r.spyAll = function() {
                    return r.spyJquery().spyModules().spySystem(),
                        r
                }
        }
    } (window),
    BJ_REPORT.init({
        id: 1,
        combo: 1,
        delay: 1e3,
        url: "http://webbad.nie.netease.com/badjs",
        ignore: [/Script error/i]
    });; !
    function(e, t) {
        function n(e) {
            return B.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
        }
        function r(e) {
            if (!gn[e]) {
                var t = M.body,
                    n = B("<" + e + ">").appendTo(t),
                    r = n.css("display");
                n.remove(),
                ("none" === r || "" === r) && (dn || (dn = M.createElement("iframe"), dn.frameBorder = dn.width = dn.height = 0), t.appendChild(dn), pn && dn.createElement || (pn = (dn.contentWindow || dn.contentDocument).document, pn.write(("CSS1Compat" === M.compatMode ? "<!doctype html>": "") + "<html><body>"), pn.close()), n = pn.createElement(e), pn.body.appendChild(n), r = B.css(n, "display"), t.removeChild(dn)),
                    gn[e] = r
            }
            return gn[e]
        }
        function i(e, t) {
            var n = {};
            return B.each(bn.concat.apply([], bn.slice(0, t)),
                function() {
                    n[this] = e
                }),
                n
        }
        function o() {
            mn = t
        }
        function a() {
            return setTimeout(o, 0),
                mn = B.now()
        }
        function s() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch(t) {}
        }
        function l() {
            try {
                return new e.XMLHttpRequest
            } catch(t) {}
        }
        function u(e, n) {
            e.dataFilter && (n = e.dataFilter(n, e.dataType));
            var r, i, o, a, s, l, u, c, f = e.dataTypes,
                d = {},
                p = f.length,
                h = f[0];
            for (r = 1; p > r; r++) {
                if (1 === r) for (i in e.converters)"string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
                if (a = h, h = f[r], "*" === h) h = a;
                else if ("*" !== a && a !== h) {
                    if (s = a + " " + h, l = d[s] || d["* " + h], !l) {
                        c = t;
                        for (u in d) if (o = u.split(" "), (o[0] === a || "*" === o[0]) && (c = d[o[1] + " " + h])) {
                            u = d[u],
                                u === !0 ? l = c: c === !0 && (l = u);
                            break
                        }
                    } ! l && !c && B.error("No conversion from " + s.replace(" ", " to ")),
                    l !== !0 && (n = l ? l(n) : c(u(n)))
                }
            }
            return n
        }
        function c(e, n, r) {
            var i, o, a, s, l = e.contents,
                u = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in r && (n[c[o]] = r[o]);
            for (;
                "*" === u[0];) u.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i) for (o in l) if (l[o] && l[o].test(i)) {
                u.unshift(o);
                break
            }
            if (u[0] in r) a = u[0];
            else {
                for (o in r) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
        }
        function f(e, t, n, r) {
            if (B.isArray(t)) B.each(t,
                function(t, i) {
                    n || Wt.test(e) ? r(e, i) : f(e + "[" + ("object" == typeof i || B.isArray(i) ? t: "") + "]", i, n, r)
                });
            else if (n || null == t || "object" != typeof t) r(e, t);
            else for (var i in t) f(e + "[" + i + "]", t[i], n, r)
        }
        function d(e, n) {
            var r, i, o = B.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
            i && B.extend(!0, e, i)
        }
        function p(e, n, r, i, o, a) {
            o = o || n.dataTypes[0],
                a = a || {},
                a[o] = !0;
            for (var s, l = e[o], u = 0, c = l ? l.length: 0, f = e === nn; c > u && (f || !s); u++) s = l[u](n, r, i),
            "string" == typeof s && (!f || a[s] ? s = t: (n.dataTypes.unshift(s), s = p(e, n, r, i, s, a)));
            return (f || !s) && !a["*"] && (s = p(e, n, r, i, "*", a)),
                s
        }
        function h(e) {
            return function(t, n) {
                if ("string" != typeof t && (n = t, t = "*"), B.isFunction(n)) for (var r, i, o, a = t.toLowerCase().split(Qt), s = 0, l = a.length; l > s; s++) r = a[s],
                    o = /^\+/.test(r),
                o && (r = r.substr(1) || "*"),
                    i = e[r] = e[r] || [],
                    i[o ? "unshift": "push"](n)
            }
        }
        function m(e, t, n) {
            var r = "width" === t ? e.offsetWidth: e.offsetHeight,
                i = "width" === t ? Bt: Pt;
            return r > 0 ? ("border" !== n && B.each(i,
                function() {
                    n || (r -= parseFloat(B.css(e, "padding" + this)) || 0),
                        "margin" === n ? r += parseFloat(B.css(e, n + this)) || 0 : r -= parseFloat(B.css(e, "border" + this + "Width")) || 0
                }), r + "px") : (r = St(e, t, t), (0 > r || null == r) && (r = e.style[t] || 0), r = parseFloat(r) || 0, n && B.each(i,
                function() {
                    r += parseFloat(B.css(e, "padding" + this)) || 0,
                    "padding" !== n && (r += parseFloat(B.css(e, "border" + this + "Width")) || 0),
                    "margin" === n && (r += parseFloat(B.css(e, n + this)) || 0)
                }), r + "px")
        }
        function g(e, t) {
            t.src ? B.ajax({
                url: t.src,
                async: !1,
                dataType: "script"
            }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ct, "/*$0*/")),
            t.parentNode && t.parentNode.removeChild(t)
        }
        function y(e) {
            B.nodeName(e, "input") ? v(e) : "getElementsByTagName" in e && B.grep(e.getElementsByTagName("input"), v)
        }
        function v(e) { ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
        }
        function b(e) {
            return "getElementsByTagName" in e ? e.getElementsByTagName("*") : "querySelectorAll" in e ? e.querySelectorAll("*") : []
        }
        function x(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML: "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(B.expando))
        }
        function T(e, t) {
            if (1 === t.nodeType && B.hasData(e)) {
                var n = B.expando,
                    r = B.data(e),
                    i = B.data(t, r);
                if (r = r[n]) {
                    var o = r.events;
                    if (i = i[n] = B.extend({},
                            r), o) {
                        delete i.handle,
                            i.events = {};
                        for (var a in o) for (var s = 0,
                                                  l = o[a].length; l > s; s++) B.event.add(t, a + (o[a][s].namespace ? ".": "") + o[a][s].namespace, o[a][s], o[a][s].data)
                    }
                }
            }
        }
        function w(e) {
            return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function N(e, t, n) {
            if (t = t || 0, B.isFunction(t)) return B.grep(e,
                function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
            if (t.nodeType) return B.grep(e,
                function(e) {
                    return e === t === n
                });
            if ("string" == typeof t) {
                var r = B.grep(e,
                    function(e) {
                        return 1 === e.nodeType
                    });
                if (ft.test(t)) return B.filter(t, r, !n);
                t = B.filter(t, r)
            }
            return B.grep(e,
                function(e) {
                    return B.inArray(e, t) >= 0 === n
                })
        }
        function C(e) {
            return ! e || !e.parentNode || 11 === e.parentNode.nodeType
        }
        function E(e, t) {
            return (e && "*" !== e ? e + ".": "") + t.replace(Q, "`").replace(Z, "&")
        }
        function S(e) {
            var t, n, r, i, o, a, s, l, u, c, f, d, p = [],
                h = [],
                m = B._data(this, "events");
            if (e.liveFired !== this && m && m.live && !e.target.disabled && (!e.button || "click" !== e.type)) {
                e.namespace && (f = new RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
                    e.liveFired = this;
                var g = m.live.slice(0);
                for (s = 0; s < g.length; s++) o = g[s],
                    o.origType.replace(G, "") === e.type ? h.push(o.selector) : g.splice(s--, 1);
                for (i = B(e.target).closest(h, e.currentTarget), l = 0, u = i.length; u > l; l++) for (c = i[l], s = 0; s < g.length; s++) o = g[s],
                c.selector !== o.selector || f && !f.test(o.namespace) || c.elem.disabled || (a = c.elem, r = null, ("mouseenter" === o.preType || "mouseleave" === o.preType) && (e.type = o.preType, r = B(e.relatedTarget).closest(o.selector)[0], r && B.contains(a, r) && (r = a)), (!r || r !== a) && p.push({
                    elem: a,
                    handleObj: o,
                    level: c.level
                }));
                for (l = 0, u = p.length; u > l && (i = p[l], !(n && i.level > n)) && (e.currentTarget = i.elem, e.data = i.handleObj.data, e.handleObj = i.handleObj, d = i.handleObj.origHandler.apply(i.elem, arguments), d !== !1 && !e.isPropagationStopped() || (n = i.level, d === !1 && (t = !1), !e.isImmediatePropagationStopped())); l++);
                return t
            }
        }
        function A(e, n, r) {
            var i = B.extend({},
                r[0]);
            i.type = e,
                i.originalEvent = {},
                i.liveFired = t,
                B.event.handle.call(n, i),
            i.isDefaultPrevented() && r[0].preventDefault()
        }
        function k() {
            return ! 0
        }
        function D() {
            return ! 1
        }
        function F(e, n, r) {
            var i = n + "defer",
                o = n + "queue",
                a = n + "mark",
                s = B.data(e, i, t, !0); ! (!s || "queue" !== r && B.data(e, o, t, !0) || "mark" !== r && B.data(e, a, t, !0) || !setTimeout(function() { ! B.data(e, o, t, !0) && !B.data(e, a, t, !0) && (B.removeData(e, i, !0), s.resolve())
                },
                0))
        }
        function j(e) {
            for (var t in e) if ("toJSON" !== t) return ! 1;
            return ! 0
        }
        function L(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(_, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: B.isNaN(r) ? I.test(r) ? B.parseJSON(r) : r: parseFloat(r)
                    } catch(o) {}
                    B.data(e, n, r)
                } else r = t
            }
            return r
        }
        var M = e.document,
            O = e.navigator,
            H = e.location,
            B = function() {
                function n() {
                    if (!s.isReady) {
                        try {
                            M.documentElement.doScroll("left")
                        } catch(e) {
                            return void setTimeout(n, 1)
                        }
                        s.ready()
                    }
                }
                var r, i, o, a, s = function(e, t) {
                        return new s.fn.init(e, t, r)
                    },
                    l = e.jQuery,
                    u = e.$,
                    c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    f = /\S/,
                    d = /^\s+/,
                    p = /\s+$/,
                    h = /\d/,
                    m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    g = /^[\],:{}\s]*$/,
                    y = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    b = /(?:^|:|,)(?:\s*\[)+/g,
                    x = /(webkit)[ \/]([\w.]+)/,
                    T = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    w = /(msie) ([\w.]+)/,
                    N = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    C = /-([a-z]|[0-9])/gi,
                    E = /^-ms-/,
                    S = function(e, t) {
                        return (t + "").toUpperCase()
                    },
                    A = O.userAgent,
                    k = Object.prototype.toString,
                    D = Object.prototype.hasOwnProperty,
                    F = Array.prototype.push,
                    j = Array.prototype.slice,
                    L = String.prototype.trim,
                    H = Array.prototype.indexOf,
                    B = {};
                return s.fn = s.prototype = {
                    constructor: s,
                    init: function(e, n, r) {
                        var i, o, a, l;
                        if (!e) return this;
                        if (e.nodeType) return this.context = this[0] = e,
                            this.length = 1,
                            this;
                        if ("body" === e && !n && M.body) return this.context = M,
                            this[0] = M.body,
                            this.selector = e,
                            this.length = 1,
                            this;
                        if ("string" == typeof e) {
                            if (i = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? c.exec(e) : [null, e, null], i && (i[1] || !n)) {
                                if (i[1]) return n = n instanceof s ? n[0] : n,
                                    l = n ? n.ownerDocument || n: M,
                                    a = m.exec(e),
                                    a ? s.isPlainObject(n) ? (e = [M.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([i[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes),
                                    s.merge(this, e);
                                if (o = M.getElementById(i[2]), o && o.parentNode) {
                                    if (o.id !== i[2]) return r.find(e);
                                    this.length = 1,
                                        this[0] = o
                                }
                                return this.context = M,
                                    this.selector = e,
                                    this
                            }
                            return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                        }
                        return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                    },
                    selector: "",
                    jquery: "1.6.4",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return j.call(this, 0)
                    },
                    get: function(e) {
                        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                    },
                    pushStack: function(e, t, n) {
                        var r = this.constructor();
                        return s.isArray(e) ? F.apply(r, e) : s.merge(r, e),
                            r.prevObject = this,
                            r.context = this.context,
                            "find" === t ? r.selector = this.selector + (this.selector ? " ": "") + n: t && (r.selector = this.selector + "." + t + "(" + n + ")"),
                            r
                    },
                    each: function(e, t) {
                        return s.each(this, e, t)
                    },
                    ready: function(e) {
                        return s.bindReady(),
                            o.done(e),
                            this
                    },
                    eq: function(e) {
                        return - 1 === e ? this.slice(e) : this.slice(e, +e + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq( - 1)
                    },
                    slice: function() {
                        return this.pushStack(j.apply(this, arguments), "slice", j.call(arguments).join(","))
                    },
                    map: function(e) {
                        return this.pushStack(s.map(this,
                            function(t, n) {
                                return e.call(t, n, t)
                            }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: F,
                    sort: [].sort,
                    splice: [].splice
                },
                    s.fn.init.prototype = s.fn,
                    s.extend = s.fn.extend = function() {
                        var e, n, r, i, o, a, l = arguments[0] || {},
                            u = 1,
                            c = arguments.length,
                            f = !1;
                        for ("boolean" == typeof l && (f = l, l = arguments[1] || {},
                            u = 2), "object" != typeof l && !s.isFunction(l) && (l = {}), c === u && (l = this, --u); c > u; u++) if (null != (e = arguments[u])) for (n in e) r = l[n],
                            i = e[n],
                        l !== i && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r: []) : a = r && s.isPlainObject(r) ? r: {},
                            l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
                        return l
                    },
                    s.extend({
                        noConflict: function(t) {
                            return e.$ === s && (e.$ = u),
                            t && e.jQuery === s && (e.jQuery = l),
                                s
                        },
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? s.readyWait++:s.ready(!0)
                        },
                        ready: function(e) {
                            if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                                if (!M.body) return setTimeout(s.ready, 1);
                                if (s.isReady = !0, e !== !0 && --s.readyWait > 0) return;
                                o.resolveWith(M, [s]),
                                s.fn.trigger && s(M).trigger("ready").unbind("ready")
                            }
                        },
                        bindReady: function() {
                            if (!o) {
                                if (o = s._Deferred(), "complete" === M.readyState) return setTimeout(s.ready, 1);
                                if (M.addEventListener) M.addEventListener("DOMContentLoaded", a, !1),
                                    e.addEventListener("load", s.ready, !1);
                                else if (M.attachEvent) {
                                    M.attachEvent("onreadystatechange", a),
                                        e.attachEvent("onload", s.ready);
                                    var t = !1;
                                    try {
                                        t = null == e.frameElement
                                    } catch(r) {}
                                    M.documentElement.doScroll && t && n()
                                }
                            }
                        },
                        isFunction: function(e) {
                            return "function" === s.type(e)
                        },
                        isArray: Array.isArray ||
                        function(e) {
                            return "array" === s.type(e)
                        },
                        isWindow: function(e) {
                            return e && "object" == typeof e && "setInterval" in e
                        },
                        isNaN: function(e) {
                            return null == e || !h.test(e) || isNaN(e)
                        },
                        type: function(e) {
                            return null == e ? String(e) : B[k.call(e)] || "object"
                        },
                        isPlainObject: function(e) {
                            if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return ! 1;
                            try {
                                if (e.constructor && !D.call(e, "constructor") && !D.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                            } catch(n) {
                                return ! 1
                            }
                            var r;
                            for (r in e);
                            return r === t || D.call(e, r)
                        },
                        isEmptyObject: function(e) {
                            for (var t in e) return ! 1;
                            return ! 0
                        },
                        error: function(e) {
                            throw e
                        },
                        parseJSON: function(t) {
                            return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(y, "@").replace(v, "]").replace(b, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
                        },
                        parseXML: function(n) {
                            var r, i;
                            try {
                                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                            } catch(o) {
                                r = t
                            }
                            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + n),
                                r
                        },
                        noop: function() {},
                        globalEval: function(t) {
                            t && f.test(t) && (e.execScript ||
                            function(t) {
                                e.eval.call(e, t)
                            })(t)
                        },
                        camelCase: function(e) {
                            return e.replace(E, "ms-").replace(C, S)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                        },
                        each: function(e, n, r) {
                            var i, o = 0,
                                a = e.length,
                                l = a === t || s.isFunction(e);
                            if (r) if (l) {
                                for (i in e) if (n.apply(e[i], r) === !1) break
                            } else for (; a > o && n.apply(e[o++], r) !== !1;);
                            else if (l) {
                                for (i in e) if (n.call(e[i], i, e[i]) === !1) break
                            } else for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                            return e
                        },
                        trim: L ?
                            function(e) {
                                return null == e ? "": L.call(e)
                            }: function(e) {
                                return null == e ? "": (e + "").replace(d, "").replace(p, "")
                            },
                        makeArray: function(e, t) {
                            var n = t || [];
                            if (null != e) {
                                var r = s.type(e);
                                null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? F.call(n, e) : s.merge(n, e)
                            }
                            return n
                        },
                        inArray: function(e, t) {
                            if (!t) return - 1;
                            if (H) return H.call(t, e);
                            for (var n = 0,
                                     r = t.length; r > n; n++) if (t[n] === e) return n;
                            return - 1
                        },
                        merge: function(e, n) {
                            var r = e.length,
                                i = 0;
                            if ("number" == typeof n.length) for (var o = n.length; o > i; i++) e[r++] = n[i];
                            else for (; n[i] !== t;) e[r++] = n[i++];
                            return e.length = r,
                                e
                        },
                        grep: function(e, t, n) {
                            var r, i = [];
                            n = !!n;
                            for (var o = 0,
                                     a = e.length; a > o; o++) r = !!t(e[o], o),
                            n !== r && i.push(e[o]);
                            return i
                        },
                        map: function(e, n, r) {
                            var i, o, a = [],
                                l = 0,
                                u = e.length,
                                c = e instanceof s || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || s.isArray(e));
                            if (c) for (; u > l; l++) i = n(e[l], l, r),
                            null != i && (a[a.length] = i);
                            else for (o in e) i = n(e[o], o, r),
                            null != i && (a[a.length] = i);
                            return a.concat.apply([], a)
                        },
                        guid: 1,
                        proxy: function(e, n) {
                            if ("string" == typeof n) {
                                var r = e[n];
                                n = e,
                                    e = r
                            }
                            if (!s.isFunction(e)) return t;
                            var i = j.call(arguments, 2),
                                o = function() {
                                    return e.apply(n, i.concat(j.call(arguments)))
                                };
                            return o.guid = e.guid = e.guid || o.guid || s.guid++,
                                o
                        },
                        access: function(e, n, r, i, o, a) {
                            var l = e.length;
                            if ("object" == typeof n) {
                                for (var u in n) s.access(e, u, n[u], i, o, r);
                                return e
                            }
                            if (r !== t) {
                                i = !a && i && s.isFunction(r);
                                for (var c = 0; l > c; c++) o(e[c], n, i ? r.call(e[c], c, o(e[c], n)) : r, a);
                                return e
                            }
                            return l ? o(e[0], n) : t
                        },
                        now: function() {
                            return (new Date).getTime()
                        },
                        uaMatch: function(e) {
                            e = e.toLowerCase();
                            var t = x.exec(e) || T.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && N.exec(e) || [];
                            return {
                                browser: t[1] || "",
                                version: t[2] || "0"
                            }
                        },
                        sub: function() {
                            function e(t, n) {
                                return new e.fn.init(t, n)
                            }
                            s.extend(!0, e, this),
                                e.superclass = this,
                                e.fn = e.prototype = this(),
                                e.fn.constructor = e,
                                e.sub = this.sub,
                                e.fn.init = function(n, r) {
                                    return r && r instanceof s && !(r instanceof e) && (r = e(r)),
                                        s.fn.init.call(this, n, r, t)
                                },
                                e.fn.init.prototype = e.fn;
                            var t = e(M);
                            return e
                        },
                        browser: {}
                    }),
                    s.each("Boolean Number String Function Array Date RegExp Object".split(" "),
                        function(e, t) {
                            B["[object " + t + "]"] = t.toLowerCase()
                        }),
                    i = s.uaMatch(A),
                i.browser && (s.browser[i.browser] = !0, s.browser.version = i.version),
                s.browser.webkit && (s.browser.safari = !0),
                f.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/),
                    r = s(M),
                    M.addEventListener ? a = function() {
                        M.removeEventListener("DOMContentLoaded", a, !1),
                            s.ready()
                    }: M.attachEvent && (a = function() {
                            "complete" === M.readyState && (M.detachEvent("onreadystatechange", a), s.ready())
                        }),
                    s
            } (),
            P = "done fail isResolved isRejected promise then always pipe".split(" "),
            q = [].slice;
        B.extend({
            _Deferred: function() {
                var e, t, n, r = [],
                    i = {
                        done: function() {
                            if (!n) {
                                var t, o, a, s, l, u = arguments;
                                for (e && (l = e, e = 0), t = 0, o = u.length; o > t; t++) a = u[t],
                                    s = B.type(a),
                                    "array" === s ? i.done.apply(i, a) : "function" === s && r.push(a);
                                l && i.resolveWith(l[0], l[1])
                            }
                            return this
                        },
                        resolveWith: function(i, o) {
                            if (!n && !e && !t) {
                                o = o || [],
                                    t = 1;
                                try {
                                    for (; r[0];) r.shift().apply(i, o)
                                } finally {
                                    e = [i, o],
                                        t = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            return i.resolveWith(this, arguments),
                                this
                        },
                        isResolved: function() {
                            return !! t || !!e
                        },
                        cancel: function() {
                            return n = 1,
                                r = [],
                                this
                        }
                    };
                return i
            },
            Deferred: function(e) {
                var t, n = B._Deferred(),
                    r = B._Deferred();
                return B.extend(n, {
                    then: function(e, t) {
                        return n.done(e).fail(t),
                            this
                    },
                    always: function() {
                        return n.done.apply(n, arguments).fail.apply(this, arguments)
                    },
                    fail: r.done,
                    rejectWith: r.resolveWith,
                    reject: r.resolve,
                    isRejected: r.isResolved,
                    pipe: function(e, t) {
                        return B.Deferred(function(r) {
                            B.each({
                                    done: [e, "resolve"],
                                    fail: [t, "reject"]
                                },
                                function(e, t) {
                                    var i, o = t[0],
                                        a = t[1];
                                    n[e](B.isFunction(o) ?
                                        function() {
                                            i = o.apply(this, arguments),
                                                i && B.isFunction(i.promise) ? i.promise().then(r.resolve, r.reject) : r[a + "With"](this === n ? r: this, [i])
                                        }: r[a])
                                })
                        }).promise()
                    },
                    promise: function(e) {
                        if (null == e) {
                            if (t) return t;
                            t = e = {}
                        }
                        for (var r = P.length; r--;) e[P[r]] = n[P[r]];
                        return e
                    }
                }),
                    n.done(r.cancel).fail(n.cancel),
                    delete n.cancel,
                e && e.call(n, n),
                    n
            },
            when: function(e) {
                function t(e) {
                    return function(t) {
                        n[e] = arguments.length > 1 ? q.call(arguments, 0) : t,
                        --o || a.resolveWith(a, q.call(n, 0))
                    }
                }
                var n = arguments,
                    r = 0,
                    i = n.length,
                    o = i,
                    a = 1 >= i && e && B.isFunction(e.promise) ? e: B.Deferred();
                if (i > 1) {
                    for (; i > r; r++) n[r] && B.isFunction(n[r].promise) ? n[r].promise().then(t(r), a.reject) : --o;
                    o || a.resolveWith(a, n)
                } else a !== e && a.resolveWith(a, i ? [e] : []);
                return a.promise()
            }
        }),
            B.support = function() {
                var e, t, n, r, i, o, a, s, l, u, c, f, d, p, h, m, g = M.createElement("div"),
                    y = M.documentElement;
                if (g.setAttribute("className", "t"), g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", e = g.getElementsByTagName("*"), t = g.getElementsByTagName("a")[0], !e || !e.length || !t) return {};
                n = M.createElement("select"),
                    r = n.appendChild(M.createElement("option")),
                    i = g.getElementsByTagName("input")[0],
                    a = {
                        leadingWhitespace: 3 === g.firstChild.nodeType,
                        tbody: !g.getElementsByTagName("tbody").length,
                        htmlSerialize: !!g.getElementsByTagName("link").length,
                        style: /top/.test(t.getAttribute("style")),
                        hrefNormalized: "/a" === t.getAttribute("href"),
                        opacity: /^0.55$/.test(t.style.opacity),
                        cssFloat: !!t.style.cssFloat,
                        checkOn: "on" === i.value,
                        optSelected: r.selected,
                        getSetAttribute: "t" !== g.className,
                        submitBubbles: !0,
                        changeBubbles: !0,
                        focusinBubbles: !1,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0
                    },
                    i.checked = !0,
                    a.noCloneChecked = i.cloneNode(!0).checked,
                    n.disabled = !0,
                    a.optDisabled = !r.disabled;
                try {
                    delete g.test
                } catch(v) {
                    a.deleteExpando = !1
                } ! g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick",
                    function() {
                        a.noCloneEvent = !1
                    }), g.cloneNode(!0).fireEvent("onclick")),
                    i = M.createElement("input"),
                    i.value = "t",
                    i.setAttribute("type", "radio"),
                    a.radioValue = "t" === i.value,
                    i.setAttribute("checked", "checked"),
                    g.appendChild(i),
                    s = M.createDocumentFragment(),
                    s.appendChild(g.firstChild),
                    a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    g.innerHTML = "",
                    g.style.width = g.style.paddingLeft = "1px",
                    l = M.getElementsByTagName("body")[0],
                    c = M.createElement(l ? "div": "body"),
                    f = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    },
                l && B.extend(f, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (h in f) c.style[h] = f[h];
                if (c.appendChild(g), u = l || y, u.insertBefore(c, u.firstChild), a.appendChecked = i.checked, a.boxModel = 2 === g.offsetWidth, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== g.offsetWidth), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", d = g.getElementsByTagName("td"), m = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", a.reliableHiddenOffsets = m && 0 === d[0].offsetHeight, g.innerHTML = "", M.defaultView && M.defaultView.getComputedStyle && (o = M.createElement("div"), o.style.width = "0", o.style.marginRight = "0", g.appendChild(o), a.reliableMarginRight = 0 === (parseInt((M.defaultView.getComputedStyle(o, null) || {
                            marginRight: 0
                        }).marginRight, 10) || 0)), c.innerHTML = "", u.removeChild(c), g.attachEvent) for (h in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) p = "on" + h,
                    m = p in g,
                m || (g.setAttribute(p, "return;"), m = "function" == typeof g[p]),
                    a[h + "Bubbles"] = m;
                return c = s = n = r = l = o = g = i = null,
                    a
            } (),
            B.boxModel = B.support.boxModel;
        var I = /^(?:\{.*\}|\[.*\])$/,
            _ = /([A-Z])/g;
        B.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando],
                !!e && !j(e)
            },
            data: function(e, n, r, i) {
                if (B.acceptData(e)) {
                    var o, a, s = B.expando,
                        l = "string" == typeof n,
                        u = e.nodeType,
                        c = u ? B.cache: e,
                        f = u ? e[B.expando] : e[B.expando] && B.expando;
                    if ((!f || i && f && c[f] && !c[f][s]) && l && r === t) return;
                    return f || (u ? e[B.expando] = f = ++B.uuid: f = B.expando),
                    c[f] || (c[f] = {},
                    u || (c[f].toJSON = B.noop)),
                    ("object" == typeof n || "function" == typeof n) && (i ? c[f][s] = B.extend(c[f][s], n) : c[f] = B.extend(c[f], n)),
                        o = c[f],
                    i && (o[s] || (o[s] = {}), o = o[s]),
                    r !== t && (o[B.camelCase(n)] = r),
                        "events" !== n || o[n] ? (l ? (a = o[n], null == a && (a = o[B.camelCase(n)])) : a = o, a) : o[s] && o[s].events
                }
            },
            removeData: function(e, t, n) {
                if (B.acceptData(e)) {
                    var r, i = B.expando,
                        o = e.nodeType,
                        a = o ? B.cache: e,
                        s = o ? e[B.expando] : B.expando;
                    if (!a[s]) return;
                    if (t && (r = n ? a[s][i] : a[s], r && (r[t] || (t = B.camelCase(t)), delete r[t], !j(r)))) return;
                    if (n && (delete a[s][i], !j(a[s]))) return;
                    var l = a[s][i];
                    B.support.deleteExpando || !a.setInterval ? delete a[s] : a[s] = null,
                        l ? (a[s] = {},
                        o || (a[s].toJSON = B.noop), a[s][i] = l) : o && (B.support.deleteExpando ? delete e[B.expando] : e.removeAttribute ? e.removeAttribute(B.expando) : e[B.expando] = null)
                }
            },
            _data: function(e, t, n) {
                return B.data(e, t, n, !0)
            },
            acceptData: function(e) {
                if (e.nodeName) {
                    var t = B.noData[e.nodeName.toLowerCase()];
                    if (t) return t !== !0 && e.getAttribute("classid") === t
                }
                return ! 0
            }
        }),
            B.fn.extend({
                data: function(e, n) {
                    var r = null;
                    if ("undefined" == typeof e) {
                        if (this.length && (r = B.data(this[0]), 1 === this[0].nodeType)) for (var i, o = this[0].attributes, a = 0, s = o.length; s > a; a++) i = o[a].name,
                        0 === i.indexOf("data-") && (i = B.camelCase(i.substring(5)), L(this[0], i, r[i]));
                        return r
                    }
                    if ("object" == typeof e) return this.each(function() {
                        B.data(this, e)
                    });
                    var l = e.split(".");
                    return l[1] = l[1] ? "." + l[1] : "",
                        n === t ? (r = this.triggerHandler("getData" + l[1] + "!", [l[0]]), r === t && this.length && (r = B.data(this[0], e), r = L(this[0], e, r)), r === t && l[1] ? this.data(l[0]) : r) : this.each(function() {
                            var t = B(this),
                                r = [l[0], n];
                            t.triggerHandler("setData" + l[1] + "!", r),
                                B.data(this, e, n),
                                t.triggerHandler("changeData" + l[1] + "!", r)
                        })
                },
                removeData: function(e) {
                    return this.each(function() {
                        B.removeData(this, e)
                    })
                }
            }),
            B.extend({
                _mark: function(e, n) {
                    e && (n = (n || "fx") + "mark", B.data(e, n, (B.data(e, n, t, !0) || 0) + 1, !0))
                },
                _unmark: function(e, n, r) {
                    if (e !== !0 && (r = n, n = e, e = !1), n) {
                        r = r || "fx";
                        var i = r + "mark",
                            o = e ? 0 : (B.data(n, i, t, !0) || 1) - 1;
                        o ? B.data(n, i, o, !0) : (B.removeData(n, i, !0), F(n, r, "mark"))
                    }
                },
                queue: function(e, n, r) {
                    if (e) {
                        n = (n || "fx") + "queue";
                        var i = B.data(e, n, t, !0);
                        return r && (!i || B.isArray(r) ? i = B.data(e, n, B.makeArray(r), !0) : i.push(r)),
                        i || []
                    }
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = B.queue(e, t),
                        r = n.shift();
                    "inprogress" === r && (r = n.shift()),
                    r && ("fx" === t && n.unshift("inprogress"), r.call(e,
                        function() {
                            B.dequeue(e, t)
                        })),
                    n.length || (B.removeData(e, t + "queue", !0), F(e, t, "queue"))
                }
            }),
            B.fn.extend({
                queue: function(e, n) {
                    return "string" != typeof e && (n = e, e = "fx"),
                        n === t ? B.queue(this[0], e) : this.each(function() {
                            var t = B.queue(this, e, n);
                            "fx" === e && "inprogress" !== t[0] && B.dequeue(this, e)
                        })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        B.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = B.fx ? B.fx.speeds[e] || e: e,
                        t = t || "fx",
                        this.queue(t,
                            function() {
                                var n = this;
                                setTimeout(function() {
                                        B.dequeue(n, t)
                                    },
                                    e)
                            })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    function r() {--l || o.resolveWith(a, [a])
                    }
                    "string" != typeof e && (n = e, e = t),
                        e = e || "fx";
                    for (var i, o = B.Deferred(), a = this, s = a.length, l = 1, u = e + "defer", c = e + "queue", f = e + "mark"; s--;)(i = B.data(a[s], u, t, !0) || (B.data(a[s], c, t, !0) || B.data(a[s], f, t, !0)) && B.data(a[s], u, B._Deferred(), !0)) && (l++, i.done(r));
                    return r(),
                        o.promise()
                }
            });
        var W, R, $ = /[\n\t\r]/g,
            X = /\s+/,
            z = /\r/g,
            V = /^(?:button|input)$/i,
            U = /^(?:button|input|object|select|textarea)$/i,
            J = /^a(?:rea)?$/i,
            Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
        B.fn.extend({
            attr: function(e, t) {
                return B.access(this, e, t, !0, B.attr)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    B.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return B.access(this, e, t, !0, B.prop)
            },
            removeProp: function(e) {
                return e = B.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch(n) {}
                    })
            },
            addClass: function(e) {
                var t, n, r, i, o, a, s;
                if (B.isFunction(e)) return this.each(function(t) {
                    B(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e) for (t = e.split(X), n = 0, r = this.length; r > n; n++) if (i = this[n], 1 === i.nodeType) if (i.className || 1 !== t.length) {
                    for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++)~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                    i.className = B.trim(o)
                } else i.className = e;
                return this
            },
            removeClass: function(e) {
                var n, r, i, o, a, s, l;
                if (B.isFunction(e)) return this.each(function(t) {
                    B(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t) for (n = (e || "").split(X), r = 0, i = this.length; i > r; r++) if (o = this[r], 1 === o.nodeType && o.className) if (e) {
                    for (a = (" " + o.className + " ").replace($, " "), s = 0, l = n.length; l > s; s++) a = a.replace(" " + n[s] + " ", " ");
                    o.className = B.trim(a)
                } else o.className = "";
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return this.each(B.isFunction(e) ?
                    function(n) {
                        B(this).toggleClass(e.call(this, n, this.className, t), t)
                    }: function() {
                        if ("string" === n) for (var i, o = 0,
                                                     a = B(this), s = t, l = e.split(X); i = l[o++];) s = r ? s: !a.hasClass(i),
                            a[s ? "addClass": "removeClass"](i);
                        else("undefined" === n || "boolean" === n) && (this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": B._data(this, "__className__") || "")
                    })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ",
                         n = 0,
                         r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($, " ").indexOf(t) > -1) return ! 0;
                return ! 1
            },
            val: function(e) {
                var n, r, i = this[0];
                if (!arguments.length) return i ? (n = B.valHooks[i.nodeName.toLowerCase()] || B.valHooks[i.type], n && "get" in n && (r = n.get(i, "value")) !== t ? r: (r = i.value, "string" == typeof r ? r.replace(z, "") : null == r ? "": r)) : t;
                var o = B.isFunction(e);
                return this.each(function(r) {
                    var i, a = B(this);
                    1 === this.nodeType && (i = o ? e.call(this, r, a.val()) : e, null == i ? i = "": "number" == typeof i ? i += "": B.isArray(i) && (i = B.map(i,
                            function(e) {
                                return null == e ? "": e + ""
                            })), n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type], n && "set" in n && n.set(this, i, "value") !== t || (this.value = i))
                })
            }
        }),
            B.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return ! t || t.specified ? e.value: e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n = e.selectedIndex,
                                r = [],
                                i = e.options,
                                o = "select-one" === e.type;
                            if (0 > n) return null;
                            for (var a = o ? n: 0, s = o ? n + 1 : i.length; s > a; a++) {
                                var l = i[a];
                                if (! (!l.selected || (B.support.optDisabled ? l.disabled: null !== l.getAttribute("disabled")) || l.parentNode.disabled && B.nodeName(l.parentNode, "optgroup"))) {
                                    if (t = B(l).val(), o) return t;
                                    r.push(t)
                                }
                            }
                            return o && !r.length && i.length ? B(i[n]).val() : r
                        },
                        set: function(e, t) {
                            var n = B.makeArray(t);
                            return B(e).find("option").each(function() {
                                this.selected = B.inArray(B(this).val(), n) >= 0
                            }),
                            n.length || (e.selectedIndex = -1),
                                n
                        }
                    }
                },
                attrFn: {
                    val: !0,
                    css: !0,
                    html: !0,
                    text: !0,
                    data: !0,
                    width: !0,
                    height: !0,
                    offset: !0
                },
                attrFix: {
                    tabindex: "tabIndex"
                },
                attr: function(e, n, r, i) {
                    var o = e.nodeType;
                    if (!e || 3 === o || 8 === o || 2 === o) return t;
                    if (i && n in B.attrFn) return B(e)[n](r);
                    if (! ("getAttribute" in e)) return B.prop(e, n, r);
                    var a, s, l = 1 !== o || !B.isXMLDoc(e);
                    return l && (n = B.attrFix[n] || n, s = B.attrHooks[n], s || (Y.test(n) ? s = R: W && (s = W))),
                        r !== t ? null === r ? (B.removeAttr(e, n), t) : s && "set" in s && l && (a = s.set(e, r, n)) !== t ? a: (e.setAttribute(n, "" + r), r) : s && "get" in s && l && null !== (a = s.get(e, n)) ? a: (a = e.getAttribute(n), null === a ? t: a)
                },
                removeAttr: function(e, t) {
                    var n;
                    1 === e.nodeType && (t = B.attrFix[t] || t, B.attr(e, t, ""), e.removeAttribute(t), Y.test(t) && (n = B.propFix[t] || t) in e && (e[n] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (V.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
                            else if (!B.support.radioValue && "radio" === t && B.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                    t
                            }
                        }
                    },
                    value: {
                        get: function(e, t) {
                            return W && B.nodeName(e, "button") ? W.get(e, t) : t in e ? e.value: null
                        },
                        set: function(e, t, n) {
                            return W && B.nodeName(e, "button") ? W.set(e, t, n) : void(e.value = t)
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, r) {
                    var i = e.nodeType;
                    if (!e || 3 === i || 8 === i || 2 === i) return t;
                    var o, a, s = 1 !== i || !B.isXMLDoc(e);
                    return s && (n = B.propFix[n] || n, a = B.propHooks[n]),
                        r !== t ? a && "set" in a && (o = a.set(e, r, n)) !== t ? o: e[n] = r: a && "get" in a && null !== (o = a.get(e, n)) ? o: e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }),
            B.attrHooks.tabIndex = B.propHooks.tabIndex,
            R = {
                get: function(e, n) {
                    var r;
                    return B.prop(e, n) === !0 || (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
                },
                set: function(e, t, n) {
                    var r;
                    return t === !1 ? B.removeAttr(e, n) : (r = B.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())),
                        n
                }
            },
        B.support.getSetAttribute || (W = B.valHooks.button = {
            get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n),
                    r && "" !== r.nodeValue ? r.nodeValue: t
            },
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = M.createAttribute(n), e.setAttributeNode(r)),
                    r.nodeValue = t + ""
            }
        },
            B.each(["width", "height"],
                function(e, t) {
                    B.attrHooks[t] = B.extend(B.attrHooks[t], {
                        set: function(e, n) {
                            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                        }
                    })
                })),
        B.support.hrefNormalized || B.each(["href", "src", "width", "height"],
            function(e, n) {
                B.attrHooks[n] = B.extend(B.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return null === r ? t: r
                    }
                })
            }),
        B.support.style || (B.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = "" + t
            }
        }),
        B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        B.support.checkOn || B.each(["radio", "checkbox"],
            function() {
                B.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on": e.value
                    }
                }
            }),
            B.each(["radio", "checkbox"],
                function() {
                    B.valHooks[this] = B.extend(B.valHooks[this], {
                        set: function(e, t) {
                            return B.isArray(t) ? e.checked = B.inArray(B(e).val(), t) >= 0 : void 0
                        }
                    })
                });
        var G = /\.(.*)$/,
            K = /^(?:textarea|input|select)$/i,
            Q = /\./g,
            Z = / /g,
            et = /[^\w\s.|`]/g,
            tt = function(e) {
                return e.replace(et, "\\$&")
            };
        B.event = {
            add: function(e, n, r, i) {
                if (3 !== e.nodeType && 8 !== e.nodeType) {
                    if (r === !1) r = D;
                    else if (!r) return;
                    var o, a;
                    r.handler && (o = r, r = o.handler),
                    r.guid || (r.guid = B.guid++);
                    var s = B._data(e);
                    if (!s) return;
                    var l = s.events,
                        u = s.handle;
                    l || (s.events = l = {}),
                    u || (s.handle = u = function(e) {
                        return "undefined" == typeof B || e && B.event.triggered === e.type ? t: B.event.handle.apply(u.elem, arguments)
                    }),
                        u.elem = e,
                        n = n.split(" ");
                    for (var c, f, d = 0; c = n[d++];) {
                        a = o ? B.extend({},
                            o) : {
                            handler: r,
                            data: i
                        },
                            c.indexOf(".") > -1 ? (f = c.split("."), c = f.shift(), a.namespace = f.slice(0).sort().join(".")) : (f = [], a.namespace = ""),
                            a.type = c,
                        a.guid || (a.guid = r.guid);
                        var p = l[c],
                            h = B.event.special[c] || {};
                        p || (p = l[c] = [], h.setup && h.setup.call(e, i, f, u) !== !1 || (e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u))),
                        h.add && (h.add.call(e, a), a.handler.guid || (a.handler.guid = r.guid)),
                            p.push(a),
                            B.event.global[c] = !0
                    }
                    e = null
                }
            },
            global: {},
            remove: function(e, n, r, i) {
                if (3 !== e.nodeType && 8 !== e.nodeType) {
                    r === !1 && (r = D);
                    var o, a, s, l, u, c, f, d, p, h, m = 0,
                        g = B.hasData(e) && B._data(e),
                        y = g && g.events;
                    if (!g || !y) return;
                    if (n && n.type && (r = n.handler, n = n.type), !n || "string" == typeof n && "." === n.charAt(0)) {
                        n = n || "";
                        for (a in y) B.event.remove(e, a + n);
                        return
                    }
                    for (n = n.split(" "); a = n[m++];) if (h = a, p = null, l = a.indexOf(".") < 0, u = [], l || (u = a.split("."), a = u.shift(), c = new RegExp("(^|\\.)" + B.map(u.slice(0).sort(), tt).join("\\.(?:.*\\.)?") + "(\\.|$)")), d = y[a], d) if (r) {
                        for (f = B.event.special[a] || {},
                                 s = i || 0; s < d.length && (p = d[s], r.guid !== p.guid || ((l || c.test(p.namespace)) && (null == i && d.splice(s--, 1), f.remove && f.remove.call(e, p)), null == i)); s++); (0 === d.length || null != i && 1 === d.length) && ((!f.teardown || f.teardown.call(e, u) === !1) && B.removeEvent(e, a, g.handle), o = null, delete y[a])
                    } else for (s = 0; s < d.length; s++) p = d[s],
                    (l || c.test(p.namespace)) && (B.event.remove(e, h, p.handler, s), d.splice(s--, 1));
                    if (B.isEmptyObject(y)) {
                        var v = g.handle;
                        v && (v.elem = null),
                            delete g.events,
                            delete g.handle,
                        B.isEmptyObject(g) && B.removeData(e, t, !0)
                    }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                var a, s = n.type || n,
                    l = [];
                if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), a = !0), s.indexOf(".") >= 0 && (l = s.split("."), s = l.shift(), l.sort()), i && !B.event.customEvent[s] || B.event.global[s]) {
                    if (n = "object" == typeof n ? n[B.expando] ? n: new B.Event(s, n) : new B.Event(s), n.type = s, n.exclusive = a, n.namespace = l.join("."), n.namespace_re = new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)"), (o || !i) && (n.preventDefault(), n.stopPropagation()), !i) return void B.each(B.cache,
                        function() {
                            var e = B.expando,
                                t = this[e];
                            t && t.events && t.events[s] && B.event.trigger(n, r, t.handle.elem)
                        });
                    if (3 === i.nodeType || 8 === i.nodeType) return;
                    n.result = t,
                        n.target = i,
                        r = null != r ? B.makeArray(r) : [],
                        r.unshift(n);
                    var u = i,
                        c = s.indexOf(":") < 0 ? "on" + s: "";
                    do {
                        var f = B._data(u, "handle");
                        n.currentTarget = u, f && f.apply(u, r), c && B.acceptData(u) && u[c] && u[c].apply(u, r) === !1 && (n.result = !1, n.preventDefault()), u = u.parentNode || u.ownerDocument || u === n.target.ownerDocument && e
                    } while ( u && ! n . isPropagationStopped ());
                    if (!n.isDefaultPrevented()) {
                        var d, p = B.event.special[s] || {};
                        if (! (p._default && p._default.call(i.ownerDocument, n) !== !1 || "click" === s && B.nodeName(i, "a") || !B.acceptData(i))) {
                            try {
                                c && i[s] && (d = i[c], d && (i[c] = null), B.event.triggered = s, i[s]())
                            } catch(h) {}
                            d && (i[c] = d),
                                B.event.triggered = t
                        }
                    }
                    return n.result
                }
            },
            handle: function(n) {
                n = B.event.fix(n || e.event);
                var r = ((B._data(this, "events") || {})[n.type] || []).slice(0),
                    i = !n.exclusive && !n.namespace,
                    o = Array.prototype.slice.call(arguments, 0);
                o[0] = n,
                    n.currentTarget = this;
                for (var a = 0,
                         s = r.length; s > a; a++) {
                    var l = r[a];
                    if (i || n.namespace_re.test(l.namespace)) {
                        n.handler = l.handler,
                            n.data = l.data,
                            n.handleObj = l;
                        var u = l.handler.apply(this, o);
                        if (u !== t && (n.result = u, u === !1 && (n.preventDefault(), n.stopPropagation())), n.isImmediatePropagationStopped()) break
                    }
                }
                return n.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(e) {
                if (e[B.expando]) return e;
                var n = e;
                e = B.Event(n);
                for (var r, i = this.props.length; i;) r = this.props[--i],
                    e[r] = n[r];
                if (e.target || (e.target = e.srcElement || M), 3 === e.target.nodeType && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement: e.fromElement), null == e.pageX && null != e.clientX) {
                    var o = e.target.ownerDocument || M,
                        a = o.documentElement,
                        s = o.body;
                    e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0),
                        e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
                }
                return null == e.which && (null != e.charCode || null != e.keyCode) && (e.which = null != e.charCode ? e.charCode: e.keyCode),
                !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey),
                !e.which && e.button !== t && (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0),
                    e
            },
            guid: 1e8,
            proxy: B.proxy,
            special: {
                ready: {
                    setup: B.bindReady,
                    teardown: B.noop
                },
                live: {
                    add: function(e) {
                        B.event.add(this, E(e.origType, e.selector), B.extend({},
                            e, {
                                handler: S,
                                guid: e.handler.guid
                            }))
                    },
                    remove: function(e) {
                        B.event.remove(this, E(e.origType, e.selector), e)
                    }
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        B.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            }
        },
            B.removeEvent = M.removeEventListener ?
                function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                }: function(e, t, n) {
                    e.detachEvent && e.detachEvent("on" + t, n)
                },
            B.Event = function(e, t) {
                return this.preventDefault ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k: D) : this.type = e, t && B.extend(this, t), this.timeStamp = B.now(), this[B.expando] = !0, void 0) : new B.Event(e, t)
            },
            B.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = k;
                    var e = this.originalEvent; ! e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    this.isPropagationStopped = k;
                    var e = this.originalEvent; ! e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = k,
                        this.stopPropagation()
                },
                isDefaultPrevented: D,
                isPropagationStopped: D,
                isImmediatePropagationStopped: D
            };
        var nt = function(e) {
                var t = e.relatedTarget,
                    n = !1,
                    r = e.type;
                e.type = e.data,
                t !== this && (t && (n = B.contains(this, t)), n || (B.event.handle.apply(this, arguments), e.type = r))
            },
            rt = function(e) {
                e.type = e.data,
                    B.event.handle.apply(this, arguments)
            };
        if (B.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                function(e, t) {
                    B.event.special[e] = {
                        setup: function(n) {
                            B.event.add(this, t, n && n.selector ? rt: nt, e)
                        },
                        teardown: function(e) {
                            B.event.remove(this, t, e && e.selector ? rt: nt)
                        }
                    }
                }), B.support.submitBubbles || (B.event.special.submit = {
                setup: function() {
                    return B.nodeName(this, "form") ? !1 : (B.event.add(this, "click.specialSubmit",
                        function(e) {
                            var t = e.target,
                                n = B.nodeName(t, "input") || B.nodeName(t, "button") ? t.type: ""; ("submit" === n || "image" === n) && B(t).closest("form").length && A("submit", this, arguments)
                        }), void B.event.add(this, "keypress.specialSubmit",
                        function(e) {
                            var t = e.target,
                                n = B.nodeName(t, "input") || B.nodeName(t, "button") ? t.type: ""; ("text" === n || "password" === n) && B(t).closest("form").length && 13 === e.keyCode && A("submit", this, arguments)
                        }))
                },
                teardown: function() {
                    B.event.remove(this, ".specialSubmit")
                }
            }), !B.support.changeBubbles) {
            var it, ot = function(e) {
                    var t = B.nodeName(e, "input") ? e.type: "",
                        n = e.value;
                    return "radio" === t || "checkbox" === t ? n = e.checked: "select-multiple" === t ? n = e.selectedIndex > -1 ? B.map(e.options,
                        function(e) {
                            return e.selected
                        }).join("-") : "": B.nodeName(e, "select") && (n = e.selectedIndex),
                        n
                },
                at = function(e) {
                    var n, r, i = e.target;
                    if (K.test(i.nodeName) && !i.readOnly) {
                        if (n = B._data(i, "_change_data"), r = ot(i), ("focusout" !== e.type || "radio" !== i.type) && B._data(i, "_change_data", r), n === t || r === n) return; (null != n || r) && (e.type = "change", e.liveFired = t, B.event.trigger(e, arguments[1], i))
                    }
                };
            B.event.special.change = {
                filters: {
                    focusout: at,
                    beforedeactivate: at,
                    click: function(e) {
                        var t = e.target,
                            n = B.nodeName(t, "input") ? t.type: ""; ("radio" === n || "checkbox" === n || B.nodeName(t, "select")) && at.call(this, e)
                    },
                    keydown: function(e) {
                        var t = e.target,
                            n = B.nodeName(t, "input") ? t.type: ""; (13 === e.keyCode && !B.nodeName(t, "textarea") || 32 === e.keyCode && ("checkbox" === n || "radio" === n) || "select-multiple" === n) && at.call(this, e)
                    },
                    beforeactivate: function(e) {
                        var t = e.target;
                        B._data(t, "_change_data", ot(t))
                    }
                },
                setup: function() {
                    if ("file" === this.type) return ! 1;
                    for (var e in it) B.event.add(this, e + ".specialChange", it[e]);
                    return K.test(this.nodeName)
                },
                teardown: function() {
                    return B.event.remove(this, ".specialChange"),
                        K.test(this.nodeName)
                }
            },
                it = B.event.special.change.filters,
                it.focus = it.beforeactivate
        }
        B.support.focusinBubbles || B.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                function n(e) {
                    var n = B.event.fix(e);
                    n.type = t,
                        n.originalEvent = {},
                        B.event.trigger(n, null, n.target),
                    n.isDefaultPrevented() && e.preventDefault()
                }
                var r = 0;
                B.event.special[t] = {
                    setup: function() {
                        0 === r++&&M.addEventListener(e, n, !0)
                    },
                    teardown: function() {
                        0 === --r && M.removeEventListener(e, n, !0)
                    }
                }
            }),
            B.each(["bind", "one"],
                function(e, n) {
                    B.fn[n] = function(e, r, i) {
                        var o;
                        if ("object" == typeof e) {
                            for (var a in e) this[n](a, r, e[a], i);
                            return this
                        }
                        if ((2 === arguments.length || r === !1) && (i = r, r = t), "one" === n ? (o = function(e) {
                                return B(this).unbind(e, o),
                                    i.apply(this, arguments)
                            },
                                o.guid = i.guid || B.guid++) : o = i, "unload" === e && "one" !== n) this.one(e, r, i);
                        else for (var s = 0,
                                      l = this.length; l > s; s++) B.event.add(this[s], e, o, r);
                        return this
                    }
                }),
            B.fn.extend({
                unbind: function(e, t) {
                    if ("object" != typeof e || e.preventDefault) for (var n = 0,
                                                                           r = this.length; r > n; n++) B.event.remove(this[n], e, t);
                    else for (var i in e) this.unbind(i, e[i]);
                    return this
                },
                delegate: function(e, t, n, r) {
                    return this.live(t, n, r, e)
                },
                undelegate: function(e, t, n) {
                    return 0 === arguments.length ? this.unbind("live") : this.die(t, null, n, e)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        B.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    return this[0] ? B.event.trigger(e, t, this[0], !0) : void 0
                },
                toggle: function(e) {
                    var t = arguments,
                        n = e.guid || B.guid++,
                        r = 0,
                        i = function(n) {
                            var i = (B.data(this, "lastToggle" + e.guid) || 0) % r;
                            return B.data(this, "lastToggle" + e.guid, i + 1),
                                n.preventDefault(),
                            t[i].apply(this, arguments) || !1
                        };
                    for (i.guid = n; r < t.length;) t[r++].guid = n;
                    return this.click(i)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
        var st = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        B.each(["live", "die"],
            function(e, n) {
                B.fn[n] = function(e, r, i, o) {
                    var a, s, l, u, c = 0,
                        f = o || this.selector,
                        d = o ? this: B(this.context);
                    if ("object" == typeof e && !e.preventDefault) {
                        for (var p in e) d[n](p, r, e[p], f);
                        return this
                    }
                    if ("die" === n && !e && o && "." === o.charAt(0)) return d.unbind(o),
                        this;
                    for ((r === !1 || B.isFunction(r)) && (i = r || D, r = t), e = (e || "").split(" "); null != (a = e[c++]);) if (s = G.exec(a), l = "", s && (l = s[0], a = a.replace(G, "")), "hover" !== a) if (u = a, st[a] ? (e.push(st[a] + l), a += l) : a = (st[a] || a) + l, "live" === n) for (var h = 0,
                                                                                                                                                                                                                                                                                                               m = d.length; m > h; h++) B.event.add(d[h], "live." + E(a, f), {
                        data: r,
                        selector: f,
                        handler: i,
                        origType: a,
                        origHandler: i,
                        preType: u
                    });
                    else d.unbind("live." + E(a, f), i);
                    else e.push("mouseenter" + l, "mouseleave" + l);
                    return this
                }
            }),
            B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
                function(e, t) {
                    B.fn[t] = function(e, n) {
                        return null == n && (n = e, e = null),
                            arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
                    },
                    B.attrFn && (B.attrFn[t] = !0)
                }),
            function() {
                function e(e, t, n, r, i, o) {
                    for (var a = 0,
                             s = r.length; s > a; a++) {
                        var l = r[a];
                        if (l) {
                            var u = !1;
                            for (l = l[e]; l;) {
                                if (l.sizcache === n) {
                                    u = r[l.sizset];
                                    break
                                }
                                if (1 === l.nodeType) if (o || (l.sizcache = n, l.sizset = a), "string" != typeof t) {
                                    if (l === t) {
                                        u = !0;
                                        break
                                    }
                                } else if (c.filter(t, [l]).length > 0) {
                                    u = l;
                                    break
                                }
                                l = l[e]
                            }
                            r[a] = u
                        }
                    }
                }
                function n(e, t, n, r, i, o) {
                    for (var a = 0,
                             s = r.length; s > a; a++) {
                        var l = r[a];
                        if (l) {
                            var u = !1;
                            for (l = l[e]; l;) {
                                if (l.sizcache === n) {
                                    u = r[l.sizset];
                                    break
                                }
                                if (1 === l.nodeType && !o && (l.sizcache = n, l.sizset = a), l.nodeName.toLowerCase() === t) {
                                    u = l;
                                    break
                                }
                                l = l[e]
                            }
                            r[a] = u
                        }
                    }
                }
                var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    i = 0,
                    o = Object.prototype.toString,
                    a = !1,
                    s = !0,
                    l = /\\/g,
                    u = /\W/; [0, 0].sort(function() {
                    return s = !1,
                        0
                });
                var c = function(e, t, n, i) {
                    n = n || [],
                        t = t || M;
                    var a = t;
                    if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                    if (!e || "string" != typeof e) return n;
                    var s, l, u, p, h, g, y, v, x = !0,
                        T = c.isXML(t),
                        w = [],
                        N = e;
                    do
                        if (r.exec(""), s = r.exec(N), s && (N = s[3], w.push(s[1]), s[2])) {
                            p = s[3];
                            break
                        }
                    while (s);
                    if (w.length > 1 && d.exec(e)) if (2 === w.length && f.relative[w[0]]) l = b(w[0] + w[1], t);
                    else for (l = f.relative[w[0]] ? [t] : c(w.shift(), t); w.length;) e = w.shift(),
                        f.relative[e] && (e += w.shift()),
                            l = b(e, l);
                    else if (!i && w.length > 1 && 9 === t.nodeType && !T && f.match.ID.test(w[0]) && !f.match.ID.test(w[w.length - 1]) && (h = c.find(w.shift(), t, T), t = h.expr ? c.filter(h.expr, h.set)[0] : h.set[0]), t) for (h = i ? {
                        expr: w.pop(),
                        set: m(i)
                    }: c.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t: t.parentNode, T), l = h.expr ? c.filter(h.expr, h.set) : h.set, w.length > 0 ? u = m(l) : x = !1; w.length;) g = w.pop(),
                        y = g,
                        f.relative[g] ? y = w.pop() : g = "",
                    null == y && (y = t),
                        f.relative[g](u, y, T);
                    else u = w = [];
                    if (u || (u = l), u || c.error(g || e), "[object Array]" === o.call(u)) if (x) if (t && 1 === t.nodeType) for (v = 0; null != u[v]; v++) u[v] && (u[v] === !0 || 1 === u[v].nodeType && c.contains(t, u[v])) && n.push(l[v]);
                    else for (v = 0; null != u[v]; v++) u[v] && 1 === u[v].nodeType && n.push(l[v]);
                    else n.push.apply(n, u);
                    else m(u, n);
                    return p && (c(p, a, n, i), c.uniqueSort(n)),
                        n
                };
                c.uniqueSort = function(e) {
                    if (y && (a = s, e.sort(y), a)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                    return e
                },
                    c.matches = function(e, t) {
                        return c(e, null, null, t)
                    },
                    c.matchesSelector = function(e, t) {
                        return c(t, null, null, [e]).length > 0
                    },
                    c.find = function(e, t, n) {
                        var r;
                        if (!e) return [];
                        for (var i = 0,
                                 o = f.order.length; o > i; i++) {
                            var a, s = f.order[i];
                            if (a = f.leftMatch[s].exec(e)) {
                                var u = a[1];
                                if (a.splice(1, 1), "\\" !== u.substr(u.length - 1) && (a[1] = (a[1] || "").replace(l, ""), r = f.find[s](a, t, n), null != r)) {
                                    e = e.replace(f.match[s], "");
                                    break
                                }
                            }
                        }
                        return r || (r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []),
                            {
                                set: r,
                                expr: e
                            }
                    },
                    c.filter = function(e, n, r, i) {
                        for (var o, a, s = e,
                                 l = [], u = n, d = n && n[0] && c.isXML(n[0]); e && n.length;) {
                            for (var p in f.filter) if (null != (o = f.leftMatch[p].exec(e)) && o[2]) {
                                var h, m, g = f.filter[p],
                                    y = o[1];
                                if (a = !1, o.splice(1, 1), "\\" === y.substr(y.length - 1)) continue;
                                if (u === l && (l = []), f.preFilter[p]) if (o = f.preFilter[p](o, u, r, l, i, d)) {
                                    if (o === !0) continue
                                } else a = h = !0;
                                if (o) for (var v = 0; null != (m = u[v]); v++) if (m) {
                                    h = g(m, o, v, u);
                                    var b = i ^ !!h;
                                    r && null != h ? b ? a = !0 : u[v] = !1 : b && (l.push(m), a = !0)
                                }
                                if (h !== t) {
                                    if (r || (u = l), e = e.replace(f.match[p], ""), !a) return [];
                                    break
                                }
                            }
                            if (e === s) {
                                if (null != a) break;
                                c.error(e)
                            }
                            s = e
                        }
                        return u
                    },
                    c.error = function(e) {
                        throw "Syntax error, unrecognized expression: " + e
                    };
                var f = c.selectors = {
                        order: ["ID", "NAME", "TAG"],
                        match: {
                            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                        },
                        leftMatch: {},
                        attrMap: {
                            "class": "className",
                            "for": "htmlFor"
                        },
                        attrHandle: {
                            href: function(e) {
                                return e.getAttribute("href")
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                        relative: {
                            "+": function(e, t) {
                                var n = "string" == typeof t,
                                    r = n && !u.test(t),
                                    i = n && !r;
                                r && (t = t.toLowerCase());
                                for (var o, a = 0,
                                         s = e.length; s > a; a++) if (o = e[a]) {
                                    for (; (o = o.previousSibling) && 1 !== o.nodeType;);
                                    e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                                }
                                i && c.filter(t, e, !0)
                            },
                            ">": function(e, t) {
                                var n, r = "string" == typeof t,
                                    i = 0,
                                    o = e.length;
                                if (r && !u.test(t)) {
                                    for (t = t.toLowerCase(); o > i; i++) if (n = e[i]) {
                                        var a = n.parentNode;
                                        e[i] = a.nodeName.toLowerCase() === t ? a: !1
                                    }
                                } else {
                                    for (; o > i; i++) n = e[i],
                                    n && (e[i] = r ? n.parentNode: n.parentNode === t);
                                    r && c.filter(t, e, !0)
                                }
                            },
                            "": function(t, r, o) {
                                var a, s = i++,
                                    l = e;
                                "string" == typeof r && !u.test(r) && (r = r.toLowerCase(), a = r, l = n),
                                    l("parentNode", r, s, t, a, o)
                            },
                            "~": function(t, r, o) {
                                var a, s = i++,
                                    l = e;
                                "string" == typeof r && !u.test(r) && (r = r.toLowerCase(), a = r, l = n),
                                    l("previousSibling", r, s, t, a, o)
                            }
                        },
                        find: {
                            ID: function(e, t, n) {
                                if ("undefined" != typeof t.getElementById && !n) {
                                    var r = t.getElementById(e[1]);
                                    return r && r.parentNode ? [r] : []
                                }
                            },
                            NAME: function(e, t) {
                                if ("undefined" != typeof t.getElementsByName) {
                                    for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; o > i; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                    return 0 === n.length ? null: n
                                }
                            },
                            TAG: function(e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                            }
                        },
                        preFilter: {
                            CLASS: function(e, t, n, r, i, o) {
                                if (e = " " + e[1].replace(l, "") + " ", o) return e;
                                for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                                return ! 1
                            },
                            ID: function(e) {
                                return e[1].replace(l, "")
                            },
                            TAG: function(e) {
                                return e[1].replace(l, "").toLowerCase()
                            },
                            CHILD: function(e) {
                                if ("nth" === e[1]) {
                                    e[2] || c.error(e[0]),
                                        e[2] = e[2].replace(/^\+|\s*/g, "");
                                    var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                    e[2] = t[1] + (t[2] || 1) - 0,
                                        e[3] = t[3] - 0
                                } else e[2] && c.error(e[0]);
                                return e[0] = i++,
                                    e
                            },
                            ATTR: function(e, t, n, r, i, o) {
                                var a = e[1] = e[1].replace(l, "");
                                return ! o && f.attrMap[a] && (e[1] = f.attrMap[a]),
                                    e[4] = (e[4] || e[5] || "").replace(l, ""),
                                "~=" === e[2] && (e[4] = " " + e[4] + " "),
                                    e
                            },
                            PSEUDO: function(e, t, n, i, o) {
                                if ("not" === e[1]) {
                                    if (! ((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                        var a = c.filter(e[3], t, n, !0 ^ o);
                                        return n || i.push.apply(i, a),
                                            !1
                                    }
                                    e[3] = c(e[3], null, null, t)
                                } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0])) return ! 0;
                                return e
                            },
                            POS: function(e) {
                                return e.unshift(!0),
                                    e
                            }
                        },
                        filters: {
                            enabled: function(e) {
                                return e.disabled === !1 && "hidden" !== e.type
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                return e.checked === !0
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                            },
                            parent: function(e) {
                                return !! e.firstChild
                            },
                            empty: function(e) {
                                return ! e.firstChild
                            },
                            has: function(e, t, n) {
                                return !! c(n[3], e).length
                            },
                            header: function(e) {
                                return /h\d/i.test(e.nodeName)
                            },
                            text: function(e) {
                                var t = e.getAttribute("type"),
                                    n = e.type;
                                return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                            },
                            radio: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                            },
                            checkbox: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                            },
                            file: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "file" === e.type
                            },
                            password: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "password" === e.type
                            },
                            submit: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t || "button" === t) && "submit" === e.type
                            },
                            image: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "image" === e.type
                            },
                            reset: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t || "button" === t) && "reset" === e.type
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            input: function(e) {
                                return /input|select|textarea|button/i.test(e.nodeName)
                            },
                            focus: function(e) {
                                return e === e.ownerDocument.activeElement
                            }
                        },
                        setFilters: {
                            first: function(e, t) {
                                return 0 === t
                            },
                            last: function(e, t, n, r) {
                                return t === r.length - 1
                            },
                            even: function(e, t) {
                                return t % 2 === 0
                            },
                            odd: function(e, t) {
                                return t % 2 === 1
                            },
                            lt: function(e, t, n) {
                                return t < n[3] - 0
                            },
                            gt: function(e, t, n) {
                                return t > n[3] - 0
                            },
                            nth: function(e, t, n) {
                                return n[3] - 0 === t
                            },
                            eq: function(e, t, n) {
                                return n[3] - 0 === t
                            }
                        },
                        filter: {
                            PSEUDO: function(e, t, n, r) {
                                var i = t[1],
                                    o = f.filters[i];
                                if (o) return o(e, n, t, r);
                                if ("contains" === i) return (e.textContent || e.innerText || c.getText([e]) || "").indexOf(t[3]) >= 0;
                                if ("not" === i) {
                                    for (var a = t[3], s = 0, l = a.length; l > s; s++) if (a[s] === e) return ! 1;
                                    return ! 0
                                }
                                c.error(i)
                            },
                            CHILD: function(e, t) {
                                var n = t[1],
                                    r = e;
                                switch (n) {
                                    case "only":
                                    case "first":
                                        for (; r = r.previousSibling;) if (1 === r.nodeType) return ! 1;
                                        if ("first" === n) return ! 0;
                                        r = e;
                                    case "last":
                                        for (; r = r.nextSibling;) if (1 === r.nodeType) return ! 1;
                                        return ! 0;
                                    case "nth":
                                        var i = t[2],
                                            o = t[3];
                                        if (1 === i && 0 === o) return ! 0;
                                        var a = t[0],
                                            s = e.parentNode;
                                        if (s && (s.sizcache !== a || !e.nodeIndex)) {
                                            var l = 0;
                                            for (r = s.firstChild; r; r = r.nextSibling) 1 === r.nodeType && (r.nodeIndex = ++l);
                                            s.sizcache = a
                                        }
                                        var u = e.nodeIndex - o;
                                        return 0 === i ? 0 === u: u % i === 0 && u / i >= 0
                                }
                            },
                            ID: function(e, t) {
                                return 1 === e.nodeType && e.getAttribute("id") === t
                            },
                            TAG: function(e, t) {
                                return "*" === t && 1 === e.nodeType || e.nodeName.toLowerCase() === t
                            },
                            CLASS: function(e, t) {
                                return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                            },
                            ATTR: function(e, t) {
                                var n = t[1],
                                    r = f.attrHandle[n] ? f.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                    i = r + "",
                                    o = t[2],
                                    a = t[4];
                                return null == r ? "!=" === o: "=" === o ? i === a: "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a: "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a: "|=" === o ? i === a || i.substr(0, a.length + 1) === a + "-": !1 : i && r !== !1
                            },
                            POS: function(e, t, n, r) {
                                var i = t[2],
                                    o = f.setFilters[i];
                                return o ? o(e, n, t, r) : void 0
                            }
                        }
                    },
                    d = f.match.POS,
                    p = function(e, t) {
                        return "\\" + (t - 0 + 1)
                    };
                for (var h in f.match) f.match[h] = new RegExp(f.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                    f.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[h].source.replace(/\\(\d+)/g, p));
                var m = function(e, t) {
                    return e = Array.prototype.slice.call(e, 0),
                        t ? (t.push.apply(t, e), t) : e
                };
                try {
                    Array.prototype.slice.call(M.documentElement.childNodes, 0)[0].nodeType
                } catch(g) {
                    m = function(e, t) {
                        var n = 0,
                            r = t || [];
                        if ("[object Array]" === o.call(e)) Array.prototype.push.apply(r, e);
                        else if ("number" == typeof e.length) for (var i = e.length; i > n; n++) r.push(e[n]);
                        else for (; e[n]; n++) r.push(e[n]);
                        return r
                    }
                }
                var y, v;
                M.documentElement.compareDocumentPosition ? y = function(e, t) {
                    return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                }: (y = function(e, t) {
                    if (e === t) return a = !0,
                        0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        o = [],
                        s = e.parentNode,
                        l = t.parentNode,
                        u = s;
                    if (s === l) return v(e, t);
                    if (!s) return - 1;
                    if (!l) return 1;
                    for (; u;) i.unshift(u),
                        u = u.parentNode;
                    for (u = l; u;) o.unshift(u),
                        u = u.parentNode;
                    n = i.length,
                        r = o.length;
                    for (var c = 0; n > c && r > c; c++) if (i[c] !== o[c]) return v(i[c], o[c]);
                    return c === n ? v(e, o[c], -1) : v(i[c], t, 1)
                },
                    v = function(e, t, n) {
                        if (e === t) return n;
                        for (var r = e.nextSibling; r;) {
                            if (r === t) return - 1;
                            r = r.nextSibling
                        }
                        return 1
                    }),
                    c.getText = function(e) {
                        for (var t, n = "",
                                 r = 0; e[r]; r++) t = e[r],
                            3 === t.nodeType || 4 === t.nodeType ? n += t.nodeValue: 8 !== t.nodeType && (n += c.getText(t.childNodes));
                        return n
                    },
                    function() {
                        var e = M.createElement("div"),
                            n = "script" + (new Date).getTime(),
                            r = M.documentElement;
                        e.innerHTML = "<a name='" + n + "'/>",
                            r.insertBefore(e, r.firstChild),
                        M.getElementById(n) && (f.find.ID = function(e, n, r) {
                            if ("undefined" != typeof n.getElementById && !r) {
                                var i = n.getElementById(e[1]);
                                return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t: []
                            }
                        },
                            f.filter.ID = function(e, t) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return 1 === e.nodeType && n && n.nodeValue === t
                            }),
                            r.removeChild(e),
                            r = e = null
                    } (),
                    function() {
                        var e = M.createElement("div");
                        e.appendChild(M.createComment("")),
                        e.getElementsByTagName("*").length > 0 && (f.find.TAG = function(e, t) {
                            var n = t.getElementsByTagName(e[1]);
                            if ("*" === e[1]) {
                                for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                                n = r
                            }
                            return n
                        }),
                            e.innerHTML = "<a href='#'></a>",
                        e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (f.attrHandle.href = function(e) {
                            return e.getAttribute("href", 2)
                        }),
                            e = null
                    } (),
                M.querySelectorAll &&
                function() {
                    var e = c,
                        t = M.createElement("div"),
                        n = "__sizzle__";
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                        c = function(t, r, i, o) {
                            if (r = r || M, !o && !c.isXML(r)) {
                                var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                if (a && (1 === r.nodeType || 9 === r.nodeType)) {
                                    if (a[1]) return m(r.getElementsByTagName(t), i);
                                    if (a[2] && f.find.CLASS && r.getElementsByClassName) return m(r.getElementsByClassName(a[2]), i)
                                }
                                if (9 === r.nodeType) {
                                    if ("body" === t && r.body) return m([r.body], i);
                                    if (a && a[3]) {
                                        var s = r.getElementById(a[3]);
                                        if (!s || !s.parentNode) return m([], i);
                                        if (s.id === a[3]) return m([s], i)
                                    }
                                    try {
                                        return m(r.querySelectorAll(t), i)
                                    } catch(l) {}
                                } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                                    var u = r,
                                        d = r.getAttribute("id"),
                                        p = d || n,
                                        h = r.parentNode,
                                        g = /^\s*[+~]/.test(t);
                                    d ? p = p.replace(/'/g, "\\$&") : r.setAttribute("id", p),
                                    g && h && (r = r.parentNode);
                                    try {
                                        if (!g || h) return m(r.querySelectorAll("[id='" + p + "'] " + t), i)
                                    } catch(y) {} finally {
                                        d || u.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, r, i, o)
                        };
                        for (var r in e) c[r] = e[r];
                        t = null
                    }
                } (),
                    function() {
                        var e = M.documentElement,
                            t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                        if (t) {
                            var n = !t.call(M.createElement("div"), "div"),
                                r = !1;
                            try {
                                t.call(M.documentElement, "[test!='']:sizzle")
                            } catch(i) {
                                r = !0
                            }
                            c.matchesSelector = function(e, i) {
                                if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !c.isXML(e)) try {
                                    if (r || !f.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                        var o = t.call(e, i);
                                        if (o || !n || e.document && 11 !== e.document.nodeType) return o
                                    }
                                } catch(a) {}
                                return c(i, null, null, [e]).length > 0
                            }
                        }
                    } (),
                    function() {
                        var e = M.createElement("div");
                        if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                            if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length) return;
                            f.order.splice(1, 0, "CLASS"),
                                f.find.CLASS = function(e, t, n) {
                                    return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                                },
                                e = null
                        }
                    } (),
                    c.contains = M.documentElement.contains ?
                        function(e, t) {
                            return e !== t && (e.contains ? e.contains(t) : !0)
                        }: M.documentElement.compareDocumentPosition ?
                            function(e, t) {
                                return !! (16 & e.compareDocumentPosition(t))
                            }: function() {
                                return ! 1
                            },
                    c.isXML = function(e) {
                        var t = (e ? e.ownerDocument || e: 0).documentElement;
                        return t ? "HTML" !== t.nodeName: !1
                    };
                var b = function(e, t) {
                    for (var n, r = [], i = "", o = t.nodeType ? [t] : t; n = f.match.PSEUDO.exec(e);) i += n[0],
                        e = e.replace(f.match.PSEUDO, "");
                    e = f.relative[e] ? e + "*": e;
                    for (var a = 0,
                             s = o.length; s > a; a++) c(e, o[a], r);
                    return c.filter(i, r)
                };
                B.find = c,
                    B.expr = c.selectors,
                    B.expr[":"] = B.expr.filters,
                    B.unique = c.uniqueSort,
                    B.text = c.getText,
                    B.isXMLDoc = c.isXML,
                    B.contains = c.contains
            } ();
        var lt = /Until$/,
            ut = /^(?:parents|prevUntil|prevAll)/,
            ct = /,/,
            ft = /^.[^:#\[\.,]*$/,
            dt = Array.prototype.slice,
            pt = B.expr.match.POS,
            ht = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        B.fn.extend({
            find: function(e) {
                var t, n, r = this;
                if ("string" != typeof e) return B(e).filter(function() {
                    for (t = 0, n = r.length; n > t; t++) if (B.contains(r[t], this)) return ! 0
                });
                var i, o, a, s = this.pushStack("", "find", e);
                for (t = 0, n = this.length; n > t; t++) if (i = s.length, B.find(e, this[t], s), t > 0) for (o = i; o < s.length; o++) for (a = 0; i > a; a++) if (s[a] === s[o]) {
                    s.splice(o--, 1);
                    break
                }
                return s
            },
            has: function(e) {
                var t = B(e);
                return this.filter(function() {
                    for (var e = 0,
                             n = t.length; n > e; e++) if (B.contains(this, t[e])) return ! 0
                })
            },
            not: function(e) {
                return this.pushStack(N(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(N(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !! e && ("string" == typeof e ? B.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n, r, i = [],
                    o = this[0];
                if (B.isArray(e)) {
                    var a, s, l = {},
                        u = 1;
                    if (o && e.length) {
                        for (n = 0, r = e.length; r > n; n++) s = e[n],
                        l[s] || (l[s] = pt.test(s) ? B(s, t || this.context) : s);
                        for (; o && o.ownerDocument && o !== t;) {
                            for (s in l) a = l[s],
                            (a.jquery ? a.index(o) > -1 : B(o).is(a)) && i.push({
                                selector: s,
                                elem: o,
                                level: u
                            });
                            o = o.parentNode,
                                u++
                        }
                    }
                    return i
                }
                var c = pt.test(e) || "string" != typeof e ? B(e, t || this.context) : 0;
                for (n = 0, r = this.length; r > n; n++) for (o = this[n]; o;) {
                    if (c ? c.index(o) > -1 : B.find.matchesSelector(o, e)) {
                        i.push(o);
                        break
                    }
                    if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType) break
                }
                return i = i.length > 1 ? B.unique(i) : i,
                    this.pushStack(i, "closest", e)
            },
            index: function(e) {
                return e ? "string" == typeof e ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
                    r = B.merge(this.get(), n);
                return this.pushStack(C(n[0]) || C(r[0]) ? r: B.unique(r))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }),
            B.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t: null
                    },
                    parents: function(e) {
                        return B.dir(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return B.dir(e, "parentNode", n)
                    },
                    next: function(e) {
                        return B.nth(e, 2, "nextSibling")
                    },
                    prev: function(e) {
                        return B.nth(e, 2, "previousSibling")
                    },
                    nextAll: function(e) {
                        return B.dir(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return B.dir(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return B.dir(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return B.dir(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return B.sibling(e.parentNode.firstChild, e)
                    },
                    children: function(e) {
                        return B.sibling(e.firstChild)
                    },
                    contents: function(e) {
                        return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: B.makeArray(e.childNodes)
                    }
                },
                function(e, t) {
                    B.fn[e] = function(n, r) {
                        var i = B.map(this, t, n),
                            o = dt.call(arguments);
                        return lt.test(e) || (r = n),
                        r && "string" == typeof r && (i = B.filter(r, i)),
                            i = this.length > 1 && !ht[e] ? B.unique(i) : i,
                        (this.length > 1 || ct.test(r)) && ut.test(e) && (i = i.reverse()),
                            this.pushStack(i, e, o.join(","))
                    }
                }),
            B.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"),
                        1 === t.length ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
                },
                dir: function(e, n, r) {
                    for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !B(o).is(r));) 1 === o.nodeType && i.push(o),
                        o = o[n];
                    return i
                },
                nth: function(e, t, n) {
                    t = t || 1;
                    for (var r = 0; e && (1 !== e.nodeType || ++r !== t); e = e[n]);
                    return e
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
        var mt = / jQuery\d+="(?:\d+|null)"/g,
            gt = /^\s+/,
            yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            vt = /<([\w:]+)/,
            bt = /<tbody/i,
            xt = /<|&#?\w+;/,
            Tt = /<(?:script|object|embed|option|style)/i,
            wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Nt = /\/(java|ecma)script/i,
            Ct = /^\s*<!(?:\[CDATA\[|\-\-)/,
            Et = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            };
        Et.optgroup = Et.option,
            Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead,
            Et.th = Et.td,
        B.support.htmlSerialize || (Et._default = [1, "div<div>", "</div>"]),
            B.fn.extend({
                text: function(e) {
                    return B.isFunction(e) ? this.each(function(t) {
                        var n = B(this);
                        n.text(e.call(this, t, n.text()))
                    }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || M).createTextNode(e)) : B.text(this)
                },
                wrapAll: function(e) {
                    if (B.isFunction(e)) return this.each(function(t) {
                        B(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                return e
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return this.each(B.isFunction(e) ?
                        function(t) {
                            B(this).wrapInner(e.call(this, t))
                        }: function() {
                            var t = B(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                },
                wrap: function(e) {
                    return this.each(function() {
                        B(this).wrapAll(e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0,
                        function(e) {
                            1 === this.nodeType && this.appendChild(e)
                        })
                },
                prepend: function() {
                    return this.domManip(arguments, !0,
                        function(e) {
                            1 === this.nodeType && this.insertBefore(e, this.firstChild)
                        })
                },
                before: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode.insertBefore(e, this)
                        });
                    if (arguments.length) {
                        var e = B(arguments[0]);
                        return e.push.apply(e, this.toArray()),
                            this.pushStack(e, "before", arguments)
                    }
                },
                after: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode.insertBefore(e, this.nextSibling)
                        });
                    if (arguments.length) {
                        var e = this.pushStack(this, "after", arguments);
                        return e.push.apply(e, B(arguments[0]).toArray()),
                            e
                    }
                },
                remove: function(e, t) {
                    for (var n, r = 0; null != (n = this[r]); r++)(!e || B.filter(e, [n]).length) && (!t && 1 === n.nodeType && (B.cleanData(n.getElementsByTagName("*")), B.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && B.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e,
                        t = null == t ? e: t,
                        this.map(function() {
                            return B.clone(this, e, t)
                        })
                },
                html: function(e) {
                    if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(mt, "") : null;
                    if ("string" != typeof e || Tt.test(e) || !B.support.leadingWhitespace && gt.test(e) || Et[(vt.exec(e) || ["", ""])[1].toLowerCase()]) B.isFunction(e) ? this.each(function(t) {
                        var n = B(this);
                        n.html(e.call(this, t, n.html()))
                    }) : this.empty().append(e);
                    else {
                        e = e.replace(yt, "<$1></$2>");
                        try {
                            for (var n = 0,
                                     r = this.length; r > n; n++) 1 === this[n].nodeType && (B.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                        } catch(i) {
                            this.empty().append(e)
                        }
                    }
                    return this
                },
                replaceWith: function(e) {
                    return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function(t) {
                        var n = B(this),
                            r = n.html();
                        n.replaceWith(e.call(this, t, r))
                    }) : ("string" != typeof e && (e = B(e).detach()), this.each(function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        B(this).remove(),
                            t ? B(t).before(e) : B(n).append(e)
                    })) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, r) {
                    var i, o, a, s, l = e[0],
                        u = [];
                    if (!B.support.checkClone && 3 === arguments.length && "string" == typeof l && wt.test(l)) return this.each(function() {
                        B(this).domManip(e, n, r, !0)
                    });
                    if (B.isFunction(l)) return this.each(function(i) {
                        var o = B(this);
                        e[0] = l.call(this, i, n ? o.html() : t),
                            o.domManip(e, n, r)
                    });
                    if (this[0]) {
                        if (s = l && l.parentNode, i = B.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                                fragment: s
                            }: B.buildFragment(e, this, u), a = i.fragment, o = 1 === a.childNodes.length ? a = a.firstChild: a.firstChild, o) {
                            n = n && B.nodeName(o, "tr");
                            for (var c = 0,
                                     f = this.length,
                                     d = f - 1; f > c; c++) r.call(n ? w(this[c], o) : this[c], i.cacheable || f > 1 && d > c ? B.clone(a, !0, !0) : a)
                        }
                        u.length && B.each(u, g)
                    }
                    return this
                }
            }),
            B.buildFragment = function(e, t, n) {
                var r, i, o, a;
                return t && t[0] && (a = t[0].ownerDocument || t[0]),
                a.createDocumentFragment || (a = M),
                1 === e.length && "string" == typeof e[0] && e[0].length < 512 && a === M && "<" === e[0].charAt(0) && !Tt.test(e[0]) && (B.support.checkClone || !wt.test(e[0])) && (i = !0, o = B.fragments[e[0]], o && 1 !== o && (r = o)),
                r || (r = a.createDocumentFragment(), B.clean(e, a, r, n)),
                i && (B.fragments[e[0]] = o ? r: 1),
                    {
                        fragment: r,
                        cacheable: i
                    }
            },
            B.fragments = {},
            B.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                },
                function(e, t) {
                    B.fn[e] = function(n) {
                        var r = [],
                            i = B(n),
                            o = 1 === this.length && this[0].parentNode;
                        if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length) return i[t](this[0]),
                            this;
                        for (var a = 0,
                                 s = i.length; s > a; a++) {
                            var l = (a > 0 ? this.clone(!0) : this).get();
                            B(i[a])[t](l),
                                r = r.concat(l)
                        }
                        return this.pushStack(r, e, i.selector)
                    }
                }),
            B.extend({
                clone: function(e, t, n) {
                    var r, i, o, a = e.cloneNode(!0);
                    if (! (B.support.noCloneEvent && B.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || B.isXMLDoc(e))) for (x(e, a), r = b(e), i = b(a), o = 0; r[o]; ++o) i[o] && x(r[o], i[o]);
                    if (t && (T(e, a), n)) for (r = b(e), i = b(a), o = 0; r[o]; ++o) T(r[o], i[o]);
                    return r = i = null,
                        a
                },
                clean: function(e, t, n, r) {
                    var i;
                    t = t || M,
                    "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || M);
                    for (var o, a, s = [], l = 0; null != (a = e[l]); l++) if ("number" == typeof a && (a += ""), a) {
                        if ("string" == typeof a) if (xt.test(a)) {
                            a = a.replace(yt, "<$1></$2>");
                            var u = (vt.exec(a) || ["", ""])[1].toLowerCase(),
                                c = Et[u] || Et._default,
                                f = c[0],
                                d = t.createElement("div");
                            for (d.innerHTML = c[1] + a + c[2]; f--;) d = d.lastChild;
                            if (!B.support.tbody) {
                                var p = bt.test(a),
                                    h = "table" !== u || p ? "<table>" !== c[1] || p ? [] : d.childNodes: d.firstChild && d.firstChild.childNodes;
                                for (o = h.length - 1; o >= 0; --o) B.nodeName(h[o], "tbody") && !h[o].childNodes.length && h[o].parentNode.removeChild(h[o])
                            } ! B.support.leadingWhitespace && gt.test(a) && d.insertBefore(t.createTextNode(gt.exec(a)[0]), d.firstChild),
                                a = d.childNodes
                        } else a = t.createTextNode(a);
                        var m;
                        if (!B.support.appendChecked) if (a[0] && "number" == typeof(m = a.length)) for (o = 0; m > o; o++) y(a[o]);
                        else y(a);
                        a.nodeType ? s.push(a) : s = B.merge(s, a)
                    }
                    if (n) for (i = function(e) {
                        return ! e.type || Nt.test(e.type)
                    },
                                    l = 0; s[l]; l++) if (!r || !B.nodeName(s[l], "script") || s[l].type && "text/javascript" !== s[l].type.toLowerCase()) {
                        if (1 === s[l].nodeType) {
                            var g = B.grep(s[l].getElementsByTagName("script"), i);
                            s.splice.apply(s, [l + 1, 0].concat(g))
                        }
                        n.appendChild(s[l])
                    } else r.push(s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]);
                    return s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = B.cache,
                             o = B.expando,
                             a = B.event.special,
                             s = B.support.deleteExpando,
                             l = 0; null != (r = e[l]); l++) if ((!r.nodeName || !B.noData[r.nodeName.toLowerCase()]) && (n = r[B.expando])) {
                        if (t = i[n] && i[n][o], t && t.events) {
                            for (var u in t.events) a[u] ? B.event.remove(r, u) : B.removeEvent(r, u, t.handle);
                            t.handle && (t.handle.elem = null)
                        }
                        s ? delete r[B.expando] : r.removeAttribute && r.removeAttribute(B.expando),
                            delete i[n]
                    }
                }
            });
        var St, At, kt, Dt = /alpha\([^)]*\)/i,
            Ft = /opacity=([^)]*)/,
            jt = /([A-Z]|^ms)/g,
            Lt = /^-?\d+(?:px)?$/i,
            Mt = /^-?\d/,
            Ot = /^([\-+])=([\-+.\de]+)/,
            Ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Bt = ["Left", "Right"],
            Pt = ["Top", "Bottom"];
        B.fn.css = function(e, n) {
            return 2 === arguments.length && n === t ? this: B.access(this, e, n, !0,
                function(e, n, r) {
                    return r !== t ? B.style(e, n, r) : B.css(e, n)
                })
        },
            B.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = St(e, "opacity", "opacity");
                                return "" === n ? "1": n
                            }
                            return e.style.opacity
                        }
                    }
                },
                cssNumber: {
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": B.support.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s = B.camelCase(n),
                            l = e.style,
                            u = B.cssHooks[s];
                        if (n = B.cssProps[s] || s, r === t) return u && "get" in u && (o = u.get(e, !1, i)) !== t ? o: l[n];
                        if (a = typeof r, "string" === a && (o = Ot.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(B.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r)) return;
                        if ("number" === a && !B.cssNumber[s] && (r += "px"), !(u && "set" in u && (r = u.set(e, r)) === t)) try {
                            l[n] = r
                        } catch(c) {}
                    }
                },
                css: function(e, n, r) {
                    var i, o;
                    return n = B.camelCase(n),
                        o = B.cssHooks[n],
                        n = B.cssProps[n] || n,
                    "cssFloat" === n && (n = "float"),
                        o && "get" in o && (i = o.get(e, !0, r)) !== t ? i: St ? St(e, n) : void 0
                },
                swap: function(e, t, n) {
                    var r = {};
                    for (var i in t) r[i] = e.style[i],
                        e.style[i] = t[i];
                    n.call(e);
                    for (i in t) e.style[i] = r[i]
                }
            }),
            B.curCSS = B.css,
            B.each(["height", "width"],
                function(e, t) {
                    B.cssHooks[t] = {
                        get: function(e, n, r) {
                            var i;
                            return n ? 0 !== e.offsetWidth ? m(e, t, r) : (B.swap(e, Ht,
                                function() {
                                    i = m(e, t, r)
                                }), i) : void 0
                        },
                        set: function(e, t) {
                            return Lt.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px": void 0) : t
                        }
                    }
                }),
        B.support.opacity || (B.cssHooks.opacity = {
            get: function(e, t) {
                return Ft.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": t ? "1": ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = B.isNaN(t) ? "": "alpha(opacity=" + 100 * t + ")",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1,
                t >= 1 && "" === B.trim(o.replace(Dt, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Dt.test(o) ? o.replace(Dt, i) : o + " " + i)
            }
        }),
            B(function() {
                B.support.reliableMarginRight || (B.cssHooks.marginRight = {
                    get: function(e, t) {
                        var n;
                        return B.swap(e, {
                                display: "inline-block"
                            },
                            function() {
                                n = t ? St(e, "margin-right", "marginRight") : e.style.marginRight
                            }),
                            n
                    }
                })
            }),
        M.defaultView && M.defaultView.getComputedStyle && (At = function(e, n) {
            var r, i, o;
            return n = n.replace(jt, "-$1").toLowerCase(),
                (i = e.ownerDocument.defaultView) ? ((o = i.getComputedStyle(e, null)) && (r = o.getPropertyValue(n), "" === r && !B.contains(e.ownerDocument.documentElement, e) && (r = B.style(e, n))), r) : t
        }),
        M.documentElement.currentStyle && (kt = function(e, t) {
            var n, r = e.currentStyle && e.currentStyle[t],
                i = e.runtimeStyle && e.runtimeStyle[t],
                o = e.style;
            return ! Lt.test(r) && Mt.test(r) && (n = o.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em": r || 0, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)),
                "" === r ? "auto": r
        }),
            St = At || kt,
        B.expr && B.expr.filters && (B.expr.filters.hidden = function(e) {
            var t = e.offsetWidth,
                n = e.offsetHeight;
            return 0 === t && 0 === n || !B.support.reliableHiddenOffsets && "none" === (e.style.display || B.css(e, "display"))
        },
            B.expr.filters.visible = function(e) {
                return ! B.expr.filters.hidden(e)
            });
        var qt, It, _t = /%20/g,
            Wt = /\[\]$/,
            Rt = /\r?\n/g,
            $t = /#.*$/,
            Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            zt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Vt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Ut = /^(?:GET|HEAD)$/,
            Jt = /^\/\//,
            Yt = /\?/,
            Gt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Kt = /^(?:select|textarea)/i,
            Qt = /\s+/,
            Zt = /([?&])_=[^&]*/,
            en = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            tn = B.fn.load,
            nn = {},
            rn = {},
            on = ["*/"] + ["*"];
        try {
            qt = H.href
        } catch(an) {
            qt = M.createElement("a"),
                qt.href = "",
                qt = qt.href
        }
        It = en.exec(qt.toLowerCase()) || [],
            B.fn.extend({
                load: function(e, n, r) {
                    if ("string" != typeof e && tn) return tn.apply(this, arguments);
                    if (!this.length) return this;
                    var i = e.indexOf(" ");
                    if (i >= 0) {
                        var o = e.slice(i, e.length);
                        e = e.slice(0, i)
                    }
                    var a = "GET";
                    n && (B.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = B.param(n, B.ajaxSettings.traditional), a = "POST"));
                    var s = this;
                    return B.ajax({
                        url: e,
                        type: a,
                        dataType: "html",
                        data: n,
                        complete: function(e, t, n) {
                            n = e.responseText,
                            e.isResolved() && (e.done(function(e) {
                                n = e
                            }), s.html(o ? B("<div>").append(n.replace(Gt, "")).find(o) : n)),
                            r && s.each(r, [n, t, e])
                        }
                    }),
                        this
                },
                serialize: function() {
                    return B.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        return this.elements ? B.makeArray(this.elements) : this
                    }).filter(function() {
                        return this.name && !this.disabled && (this.checked || Kt.test(this.nodeName) || zt.test(this.type))
                    }).map(function(e, t) {
                        var n = B(this).val();
                        return null == n ? null: B.isArray(n) ? B.map(n,
                            function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Rt, "\r\n")
                                }
                            }) : {
                            name: t.name,
                            value: n.replace(Rt, "\r\n")
                        }
                    }).get()
                }
            }),
            B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
                function(e, t) {
                    B.fn[t] = function(e) {
                        return this.bind(t, e)
                    }
                }),
            B.each(["get", "post"],
                function(e, n) {
                    B[n] = function(e, r, i, o) {
                        return B.isFunction(r) && (o = o || i, i = r, r = t),
                            B.ajax({
                                type: n,
                                url: e,
                                data: r,
                                success: i,
                                dataType: o
                            })
                    }
                }),
            B.extend({
                getScript: function(e, n) {
                    return B.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return B.get(e, t, n, "json")
                },
                ajaxSetup: function(e, t) {
                    return t ? d(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings),
                        d(e, t),
                        e
                },
                ajaxSettings: {
                    url: qt,
                    isLocal: Vt.test(It[1]),
                    global: !0,
                    type: "GET",
                    contentType: "application/x-www-form-urlencoded",
                    processData: !0,
                    async: !0,
                    accepts: {
                        xml: "application/xml, text/xml",
                        html: "text/html",
                        text: "text/plain",
                        json: "application/json, text/javascript",
                        "*": on
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": B.parseJSON,
                        "text xml": B.parseXML
                    },
                    flatOptions: {
                        context: !0,
                        url: !0
                    }
                },
                ajaxPrefilter: h(nn),
                ajaxTransport: h(rn),
                ajax: function(e, n) {
                    function r(e, n, r, a) {
                        if (2 !== N) {
                            N = 2,
                            l && clearTimeout(l),
                                s = t,
                                o = a || "",
                                C.readyState = e > 0 ? 4 : 0;
                            var f, p, h, T, w, E = n,
                                S = r ? c(m, C, r) : t;
                            if (e >= 200 && 300 > e || 304 === e) if (m.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (B.lastModified[i] = T), (w = C.getResponseHeader("Etag")) && (B.etag[i] = w)), 304 === e) E = "notmodified",
                                f = !0;
                            else try {
                                    p = u(m, S),
                                        E = "success",
                                        f = !0
                                } catch(A) {
                                    E = "parsererror",
                                        h = A
                                } else h = E,
                            (!E || e) && (E = "error", 0 > e && (e = 0));
                            C.status = e,
                                C.statusText = "" + (n || E),
                                f ? v.resolveWith(g, [p, E, C]) : v.rejectWith(g, [C, E, h]),
                                C.statusCode(x),
                                x = t,
                            d && y.trigger("ajax" + (f ? "Success": "Error"), [C, m, f ? p: h]),
                                b.resolveWith(g, [C, E]),
                            d && (y.trigger("ajaxComplete", [C, m]), --B.active || B.event.trigger("ajaxStop"))
                        }
                    }
                    "object" == typeof e && (n = e, e = t),
                        n = n || {};
                    var i, o, a, s, l, f, d, h, m = B.ajaxSetup({},
                        n),
                        g = m.context || m,
                        y = g !== m && (g.nodeType || g instanceof B) ? B(g) : B.event,
                        v = B.Deferred(),
                        b = B._Deferred(),
                        x = m.statusCode || {},
                        T = {},
                        w = {},
                        N = 0,
                        C = {
                            readyState: 0,
                            setRequestHeader: function(e, t) {
                                if (!N) {
                                    var n = e.toLowerCase();
                                    e = w[n] = w[n] || e,
                                        T[e] = t
                                }
                                return this
                            },
                            getAllResponseHeaders: function() {
                                return 2 === N ? o: null
                            },
                            getResponseHeader: function(e) {
                                var n;
                                if (2 === N) {
                                    if (!a) for (a = {}; n = Xt.exec(o);) a[n[1].toLowerCase()] = n[2];
                                    n = a[e.toLowerCase()]
                                }
                                return n === t ? null: n
                            },
                            overrideMimeType: function(e) {
                                return N || (m.mimeType = e),
                                    this
                            },
                            abort: function(e) {
                                return e = e || "abort",
                                s && s.abort(e),
                                    r(0, e),
                                    this
                            }
                        };
                    if (v.promise(C), C.success = C.done, C.error = C.fail, C.complete = b.done, C.statusCode = function(e) {
                            if (e) {
                                var t;
                                if (2 > N) for (t in e) x[t] = [x[t], e[t]];
                                else t = e[C.status],
                                    C.then(t, t)
                            }
                            return this
                        },
                            m.url = ((e || m.url) + "").replace($t, "").replace(Jt, It[1] + "//"), m.dataTypes = B.trim(m.dataType || "*").toLowerCase().split(Qt), null == m.crossDomain && (f = en.exec(m.url.toLowerCase()), m.crossDomain = !(!f || f[1] == It[1] && f[2] == It[2] && (f[3] || ("http:" === f[1] ? 80 : 443)) == (It[3] || ("http:" === It[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = B.param(m.data, m.traditional)), p(nn, m, n, C), 2 === N) return ! 1;
                    if (d = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Ut.test(m.type), d && 0 === B.active++&&B.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Yt.test(m.url) ? "&": "?") + m.data, delete m.data), i = m.url, m.cache === !1)) {
                        var E = B.now(),
                            S = m.url.replace(Zt, "$1_=" + E);
                        m.url = S + (S === m.url ? (Yt.test(m.url) ? "&": "?") + "_=" + E: "")
                    } (m.data && m.hasContent && m.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", m.contentType),
                    m.ifModified && (i = i || m.url, B.lastModified[i] && C.setRequestHeader("If-Modified-Since", B.lastModified[i]), B.etag[i] && C.setRequestHeader("If-None-Match", B.etag[i])),
                        C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + on + "; q=0.01": "") : m.accepts["*"]);
                    for (h in m.headers) C.setRequestHeader(h, m.headers[h]);
                    if (m.beforeSend && (m.beforeSend.call(g, C, m) === !1 || 2 === N)) return C.abort(),
                        !1;
                    for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[h](m[h]);
                    if (s = p(rn, m, n, C)) {
                        C.readyState = 1,
                        d && y.trigger("ajaxSend", [C, m]),
                        m.async && m.timeout > 0 && (l = setTimeout(function() {
                                C.abort("timeout")
                            },
                            m.timeout));
                        try {
                            N = 1,
                                s.send(T, r)
                        } catch(A) {
                            2 > N ? r( - 1, A) : B.error(A)
                        }
                    } else r( - 1, "No Transport");
                    return C
                },
                param: function(e, n) {
                    var r = [],
                        i = function(e, t) {
                            t = B.isFunction(t) ? t() : t,
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        };
                    if (n === t && (n = B.ajaxSettings.traditional), B.isArray(e) || e.jquery && !B.isPlainObject(e)) B.each(e,
                        function() {
                            i(this.name, this.value)
                        });
                    else for (var o in e) f(o, e[o], n, i);
                    return r.join("&").replace(_t, "+")
                }
            }),
            B.extend({
                active: 0,
                lastModified: {},
                etag: {}
            });
        var sn = B.now(),
            ln = /(\=)\?(&|$)|\?\?/i;
        B.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return B.expando + "_" + sn++
            }
        }),
            B.ajaxPrefilter("json jsonp",
                function(t, n, r) {
                    var i = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
                    if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ln.test(t.url) || i && ln.test(t.data))) {
                        var o, a = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                            s = e[a],
                            l = t.url,
                            u = t.data,
                            c = "$1" + a + "$2";
                        return t.jsonp !== !1 && (l = l.replace(ln, c), t.url === l && (i && (u = u.replace(ln, c)), t.data === u && (l += (/\?/.test(l) ? "&": "?") + t.jsonp + "=" + a))),
                            t.url = l,
                            t.data = u,
                            e[a] = function(e) {
                                o = [e]
                            },
                            r.always(function() {
                                e[a] = s,
                                o && B.isFunction(s) && e[a](o[0])
                            }),
                            t.converters["script json"] = function() {
                                return o || B.error(a + " was not called"),
                                    o[0]
                            },
                            t.dataTypes[0] = "json",
                            "script"
                    }
                }),
            B.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /javascript|ecmascript/
                },
                converters: {
                    "text script": function(e) {
                        return B.globalEval(e),
                            e
                    }
                }
            }),
            B.ajaxPrefilter("script",
                function(e) {
                    e.cache === t && (e.cache = !1),
                    e.crossDomain && (e.type = "GET", e.global = !1)
                }),
            B.ajaxTransport("script",
                function(e) {
                    if (e.crossDomain) {
                        var n, r = M.head || M.getElementsByTagName("head")[0] || M.documentElement;
                        return {
                            send: function(i, o) {
                                n = M.createElement("script"),
                                    n.async = "async",
                                e.scriptCharset && (n.charset = e.scriptCharset),
                                    n.src = e.url,
                                    n.onload = n.onreadystatechange = function(e, i) { (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                                    },
                                    r.insertBefore(n, r.firstChild)
                            },
                            abort: function() {
                                n && n.onload(0, 1)
                            }
                        }
                    }
                });
        var un, cn = e.ActiveXObject ?
                function() {
                    for (var e in un) un[e](0, 1)
                }: !1,
            fn = 0;
        B.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return ! this.isLocal && l() || s()
            }: l,
            function(e) {
                B.extend(B.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                })
            } (B.ajaxSettings.xhr()),
        B.support.ajax && B.ajaxTransport(function(n) {
            if (!n.crossDomain || B.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                        !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) l.setRequestHeader(s, i[s])
                        } catch(u) {}
                        l.send(n.hasContent && n.data || null),
                            r = function(e, i) {
                                var s, u, c, f, d;
                                try {
                                    if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = B.noop, cn && delete un[a]), i) 4 !== l.readyState && l.abort();
                                    else {
                                        s = l.status,
                                            c = l.getAllResponseHeaders(),
                                            f = {},
                                            d = l.responseXML,
                                        d && d.documentElement && (f.xml = d),
                                            f.text = l.responseText;
                                        try {
                                            u = l.statusText
                                        } catch(p) {
                                            u = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                    }
                                } catch(h) {
                                    i || o( - 1, h)
                                }
                                f && o(s, u, f, c)
                            },
                            n.async && 4 !== l.readyState ? (a = ++fn, cn && (un || (un = {},
                                B(e).unload(cn)), un[a] = r), l.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
        var dn, pn, hn, mn, gn = {},
            yn = /^(?:toggle|show|hide)$/,
            vn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            bn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
        B.fn.extend({
            show: function(e, t, n) {
                var o, a;
                if (e || 0 === e) return this.animate(i("show", 3), e, t, n);
                for (var s = 0,
                         l = this.length; l > s; s++) o = this[s],
                o.style && (a = o.style.display, !B._data(o, "olddisplay") && "none" === a && (a = o.style.display = ""), "" === a && "none" === B.css(o, "display") && B._data(o, "olddisplay", r(o.nodeName)));
                for (s = 0; l > s; s++) o = this[s],
                o.style && (a = o.style.display, ("" === a || "none" === a) && (o.style.display = B._data(o, "olddisplay") || ""));
                return this
            },
            hide: function(e, t, n) {
                if (e || 0 === e) return this.animate(i("hide", 3), e, t, n);
                for (var r = 0,
                         o = this.length; o > r; r++) if (this[r].style) {
                    var a = B.css(this[r], "display");
                    "none" !== a && !B._data(this[r], "olddisplay") && B._data(this[r], "olddisplay", a)
                }
                for (r = 0; o > r; r++) this[r].style && (this[r].style.display = "none");
                return this
            },
            _toggle: B.fn.toggle,
            toggle: function(e, t, n) {
                var r = "boolean" == typeof e;
                return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function() {
                    var t = r ? e: B(this).is(":hidden");
                    B(this)[t ? "show": "hide"]()
                }) : this.animate(i("toggle", 3), e, t, n),
                    this
            },
            fadeTo: function(e, t, n, r) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                        opacity: t
                    },
                    e, n, r)
            },
            animate: function(e, t, n, i) {
                var o = B.speed(t, n, i);
                return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({},
                    e), this[o.queue === !1 ? "each": "queue"](function() {
                    o.queue === !1 && B._mark(this);
                    var t, n, i, a, s, l, u, c, f, d = B.extend({},
                        o),
                        p = 1 === this.nodeType,
                        h = p && B(this).is(":hidden");
                    d.animatedProperties = {};
                    for (i in e) {
                        if (t = B.camelCase(i), i !== t && (e[t] = e[i], delete e[i]), n = e[t], B.isArray(n) ? (d.animatedProperties[t] = n[1], n = e[t] = n[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing", "hide" === n && h || "show" === n && !h) return d.complete.call(this);
                        p && ("height" === t || "width" === t) && (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === B.css(this, "display") && "none" === B.css(this, "float") && (B.support.inlineBlockNeedsLayout ? (a = r(this.nodeName), "inline" === a ? this.style.display = "inline-block": (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                    }
                    null != d.overflow && (this.style.overflow = "hidden");
                    for (i in e) s = new B.fx(this, d, i),
                        n = e[i],
                        yn.test(n) ? s["toggle" === n ? h ? "show": "hide": n]() : (l = vn.exec(n), u = s.cur(), l ? (c = parseFloat(l[2]), f = l[3] || (B.cssNumber[i] ? "": "px"), "px" !== f && (B.style(this, i, (c || 1) + f), u = (c || 1) / s.cur() * u, B.style(this, i, u + f)), l[1] && (c = ("-=" === l[1] ? -1 : 1) * c + u), s.custom(u, c, f)) : s.custom(u, n, ""));
                    return ! 0
                }))
            },
            stop: function(e, t) {
                return e && this.queue([]),
                    this.each(function() {
                        var e = B.timers,
                            n = e.length;
                        for (t || B._unmark(!0, this); n--;) e[n].elem === this && (t && e[n](!0), e.splice(n, 1))
                    }),
                t || this.dequeue(),
                    this
            }
        }),
            B.each({
                    slideDown: i("show", 1),
                    slideUp: i("hide", 1),
                    slideToggle: i("toggle", 1),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                },
                function(e, t) {
                    B.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }),
            B.extend({
                speed: function(e, t, n) {
                    var r = e && "object" == typeof e ? B.extend({},
                        e) : {
                        complete: n || !n && t || B.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !B.isFunction(t) && t
                    };
                    return r.duration = B.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default,
                        r.old = r.complete,
                        r.complete = function(e) {
                            B.isFunction(r.old) && r.old.call(this),
                                r.queue !== !1 ? B.dequeue(this) : e !== !1 && B._unmark(this)
                        },
                        r
                },
                easing: {
                    linear: function(e, t, n, r) {
                        return n + r * e
                    },
                    swing: function(e, t, n, r) {
                        return ( - Math.cos(e * Math.PI) / 2 + .5) * r + n
                    }
                },
                timers: [],
                fx: function(e, t, n) {
                    this.options = t,
                        this.elem = e,
                        this.prop = n,
                        t.orig = t.orig || {}
                }
            }),
            B.fx.prototype = {
                update: function() {
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        (B.fx.step[this.prop] || B.fx.step._default)(this)
                },
                cur: function() {
                    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                    var e, t = B.css(this.elem, this.prop);
                    return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t: 0 : e
                },
                custom: function(e, t, n) {
                    function r(e) {
                        return i.step(e)
                    }
                    var i = this,
                        o = B.fx;
                    this.startTime = mn || a(),
                        this.start = e,
                        this.end = t,
                        this.unit = n || this.unit || (B.cssNumber[this.prop] ? "": "px"),
                        this.now = this.start,
                        this.pos = this.state = 0,
                        r.elem = this.elem,
                    r() && B.timers.push(r) && !hn && (hn = setInterval(o.tick, o.interval))
                },
                show: function() {
                    this.options.orig[this.prop] = B.style(this.elem, this.prop),
                        this.options.show = !0,
                        this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
                        B(this.elem).show()
                },
                hide: function() {
                    this.options.orig[this.prop] = B.style(this.elem, this.prop),
                        this.options.hide = !0,
                        this.custom(this.cur(), 0)
                },
                step: function(e) {
                    var t, n, r = mn || a(),
                        i = !0,
                        o = this.elem,
                        s = this.options;
                    if (e || r >= s.duration + this.startTime) {
                        this.now = this.end,
                            this.pos = this.state = 1,
                            this.update(),
                            s.animatedProperties[this.prop] = !0;
                        for (t in s.animatedProperties) s.animatedProperties[t] !== !0 && (i = !1);
                        if (i) {
                            if (null != s.overflow && !B.support.shrinkWrapBlocks && B.each(["", "X", "Y"],
                                    function(e, t) {
                                        o.style["overflow" + t] = s.overflow[e]
                                    }), s.hide && B(o).hide(), s.hide || s.show) for (var l in s.animatedProperties) B.style(o, l, s.orig[l]);
                            s.complete.call(o)
                        }
                        return ! 1
                    }
                    return 1 / 0 == s.duration ? this.now = r: (n = r - this.startTime, this.state = n / s.duration, this.pos = B.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), this.now = this.start + (this.end - this.start) * this.pos),
                        this.update(),
                        !0
                }
            },
            B.extend(B.fx, {
                tick: function() {
                    for (var e = B.timers,
                             t = 0; t < e.length; ++t) e[t]() || e.splice(t--, 1);
                    e.length || B.fx.stop()
                },
                interval: 13,
                stop: function() {
                    clearInterval(hn),
                        hn = null
                },
                speeds: {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                step: {
                    opacity: function(e) {
                        B.style(e.elem, "opacity", e.now)
                    },
                    _default: function(e) {
                        e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = ("width" === e.prop || "height" === e.prop ? Math.max(0, e.now) : e.now) + e.unit: e.elem[e.prop] = e.now
                    }
                }
            }),
        B.expr && B.expr.filters && (B.expr.filters.animated = function(e) {
            return B.grep(B.timers,
                function(t) {
                    return e === t.elem
                }).length
        });
        var xn = /^t(?:able|d|h)$/i,
            Tn = /^(?:body|html)$/i;
        B.fn.offset = "getBoundingClientRect" in M.documentElement ?
            function(e) {
                var t, r = this[0];
                if (e) return this.each(function(t) {
                    B.offset.setOffset(this, e, t)
                });
                if (!r || !r.ownerDocument) return null;
                if (r === r.ownerDocument.body) return B.offset.bodyOffset(r);
                try {
                    t = r.getBoundingClientRect()
                } catch(i) {}
                var o = r.ownerDocument,
                    a = o.documentElement;
                if (!t || !B.contains(a, r)) return t ? {
                    top: t.top,
                    left: t.left
                }: {
                    top: 0,
                    left: 0
                };
                var s = o.body,
                    l = n(o),
                    u = a.clientTop || s.clientTop || 0,
                    c = a.clientLeft || s.clientLeft || 0,
                    f = l.pageYOffset || B.support.boxModel && a.scrollTop || s.scrollTop,
                    d = l.pageXOffset || B.support.boxModel && a.scrollLeft || s.scrollLeft,
                    p = t.top + f - u,
                    h = t.left + d - c;
                return {
                    top: p,
                    left: h
                }
            }: function(e) {
                var t = this[0];
                if (e) return this.each(function(t) {
                    B.offset.setOffset(this, e, t)
                });
                if (!t || !t.ownerDocument) return null;
                if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
                B.offset.initialize();
                for (var n, r = t.offsetParent,
                         i = t,
                         o = t.ownerDocument,
                         a = o.documentElement,
                         s = o.body,
                         l = o.defaultView,
                         u = l ? l.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, f = t.offsetLeft; (t = t.parentNode) && t !== s && t !== a && (!B.offset.supportsFixedPosition || "fixed" !== u.position);) n = l ? l.getComputedStyle(t, null) : t.currentStyle,
                    c -= t.scrollTop,
                    f -= t.scrollLeft,
                t === r && (c += t.offsetTop, f += t.offsetLeft, B.offset.doesNotAddBorder && (!B.offset.doesAddBorderForTableAndCells || !xn.test(t.nodeName)) && (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent),
                B.offset.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0),
                    u = n;
                return ("relative" === u.position || "static" === u.position) && (c += s.offsetTop, f += s.offsetLeft),
                B.offset.supportsFixedPosition && "fixed" === u.position && (c += Math.max(a.scrollTop, s.scrollTop), f += Math.max(a.scrollLeft, s.scrollLeft)),
                    {
                        top: c,
                        left: f
                    }
            },
            B.offset = {
                initialize: function() {
                    var e, t, n, r = M.body,
                        i = M.createElement("div"),
                        o = parseFloat(B.css(r, "marginTop")) || 0,
                        a = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                    B.extend(i.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        border: 0,
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    }),
                        i.innerHTML = a,
                        r.insertBefore(i, r.firstChild),
                        e = i.firstChild,
                        t = e.firstChild,
                        n = e.nextSibling.firstChild.firstChild,
                        this.doesNotAddBorder = 5 !== t.offsetTop,
                        this.doesAddBorderForTableAndCells = 5 === n.offsetTop,
                        t.style.position = "fixed",
                        t.style.top = "20px",
                        this.supportsFixedPosition = 20 === t.offsetTop || 15 === t.offsetTop,
                        t.style.position = t.style.top = "",
                        e.style.overflow = "hidden",
                        e.style.position = "relative",
                        this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop,
                        this.doesNotIncludeMarginInBodyOffset = r.offsetTop !== o,
                        r.removeChild(i),
                        B.offset.initialize = B.noop
                },
                bodyOffset: function(e) {
                    var t = e.offsetTop,
                        n = e.offsetLeft;
                    return B.offset.initialize(),
                    B.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, n += parseFloat(B.css(e, "marginLeft")) || 0),
                        {
                            top: t,
                            left: n
                        }
                },
                setOffset: function(e, t, n) {
                    var r = B.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i, o, a = B(e),
                        s = a.offset(),
                        l = B.css(e, "top"),
                        u = B.css(e, "left"),
                        c = ("absolute" === r || "fixed" === r) && B.inArray("auto", [l, u]) > -1,
                        f = {},
                        d = {};
                    c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0),
                    B.isFunction(t) && (t = t.call(e, n, s)),
                    null != t.top && (f.top = t.top - s.top + i),
                    null != t.left && (f.left = t.left - s.left + o),
                        "using" in t ? t.using.call(e, f) : a.css(f)
                }
            },
            B.fn.extend({
                position: function() {
                    if (!this[0]) return null;
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = Tn.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        }: t.offset();
                    return n.top -= parseFloat(B.css(e, "marginTop")) || 0,
                        n.left -= parseFloat(B.css(e, "marginLeft")) || 0,
                        r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0,
                        r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0,
                        {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || M.body; e && !Tn.test(e.nodeName) && "static" === B.css(e, "position");) e = e.offsetParent;
                        return e
                    })
                }
            }),
            B.each(["Left", "Top"],
                function(e, r) {
                    var i = "scroll" + r;
                    B.fn[i] = function(r) {
                        var o, a;
                        return r === t ? (o = this[0]) ? (a = n(o), a ? "pageXOffset" in a ? a[e ? "pageYOffset": "pageXOffset"] : B.support.boxModel && a.document.documentElement[i] || a.document.body[i] : o[i]) : null: this.each(function() {
                            a = n(this),
                                a ? a.scrollTo(e ? B(a).scrollLeft() : r, e ? r: B(a).scrollTop()) : this[i] = r
                        })
                    }
                }),
            B.each(["Height", "Width"],
                function(e, n) {
                    var r = n.toLowerCase();
                    B.fn["inner" + n] = function() {
                        var e = this[0];
                        return e && e.style ? parseFloat(B.css(e, r, "padding")) : null
                    },
                        B.fn["outer" + n] = function(e) {
                            var t = this[0];
                            return t && t.style ? parseFloat(B.css(t, r, e ? "margin": "border")) : null
                        },
                        B.fn[r] = function(e) {
                            var i = this[0];
                            if (!i) return null == e ? null: this;
                            if (B.isFunction(e)) return this.each(function(t) {
                                var n = B(this);
                                n[r](e.call(this, t, n[r]()))
                            });
                            if (B.isWindow(i)) {
                                var o = i.document.documentElement["client" + n],
                                    a = i.document.body;
                                return "CSS1Compat" === i.document.compatMode && o || a && a["client" + n] || o
                            }
                            if (9 === i.nodeType) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
                            if (e === t) {
                                var s = B.css(i, r),
                                    l = parseFloat(s);
                                return B.isNaN(l) ? s: l
                            }
                            return this.css(r, "string" == typeof e ? e: e + "px")
                        }
                }),
            e.jQuery = e.$ = B
    } (window);;
var nie = nie || {}; !
    function(t) {
        t.host = function() {
            var t = window.location.protocol,
                e = "";
            return e = t.indexOf("https") > -1 ? t + "": t + ""
        } ()
    } (jQuery),
    !
        function(t) {
            t.browser = t.browser ||
                function() {
                    var t = navigator.userAgent.toLowerCase(),
                        e = /(webkit)[ \/]([\w.]+)/,
                        n = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                        i = /(msie) ([\w.]+)/,
                        o = /(mozilla)(?:.*? rv:([\w.]+))?/,
                        r = e.exec(t) || n.exec(t) || i.exec(t) || t.indexOf("compatible") < 0 && o.exec(t) || [];
                    return {
                        browser: r[1] || "",
                        version: r[2] || "0",
                        msie: "msie" == r[1]
                    }
                } ()
        } (jQuery),
    !
        function() {
            jQuery.cookie = function(t, e, n) {
                if ("undefined" == typeof e) {
                    var i = null;
                    if (document.cookie && "" != document.cookie) for (var o = document.cookie.split(";"), r = 0; r < o.length; r++) {
                        var a = jQuery.trim(o[r]);
                        if (a.substring(0, t.length + 1) == t + "=") {
                            i = decodeURIComponent(a.substring(t.length + 1));
                            break
                        }
                    }
                    return i
                }
                n = n || {},
                null === e && (e = "", n.expires = -1);
                var c = "";
                if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
                    var u;
                    "number" == typeof n.expires ? (u = new Date, u.setTime(u.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : u = n.expires,
                        c = "; expires=" + u.toUTCString()
                }
                var s = n.path ? "; path=" + n.path: "",
                    l = n.domain ? "; domain=" + n.domain: "",
                    d = n.secure ? "; secure": "";
                document.cookie = [t, "=", encodeURIComponent(e), c, s, l, d].join("")
            }
        } (jQuery),
    !
        function(t) {
            var e = function(t, e) {
                    return t << e | t >>> 32 - e
                },
                n = function(t, e) {
                    var n, i, o, r, a;
                    return o = 2147483648 & t,
                        r = 2147483648 & e,
                        n = 1073741824 & t,
                        i = 1073741824 & e,
                        a = (1073741823 & t) + (1073741823 & e),
                        n & i ? 2147483648 ^ a ^ o ^ r: n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r: 1073741824 ^ a ^ o ^ r: a ^ o ^ r
                },
                i = function(t, e, n) {
                    return t & e | ~t & n
                },
                o = function(t, e, n) {
                    return t & n | e & ~n
                },
                r = function(t, e, n) {
                    return t ^ e ^ n
                },
                a = function(t, e, n) {
                    return e ^ (t | ~n)
                },
                c = function(t, o, r, a, c, u, s) {
                    return t = n(t, n(n(i(o, r, a), c), s)),
                        n(e(t, u), o)
                },
                u = function(t, i, r, a, c, u, s) {
                    return t = n(t, n(n(o(i, r, a), c), s)),
                        n(e(t, u), i)
                },
                s = function(t, i, o, a, c, u, s) {
                    return t = n(t, n(n(r(i, o, a), c), s)),
                        n(e(t, u), i)
                },
                l = function(t, i, o, r, c, u, s) {
                    return t = n(t, n(n(a(i, o, r), c), s)),
                        n(e(t, u), i)
                },
                d = function(t) {
                    for (var e, n = t.length,
                             i = n + 8,
                             o = (i - i % 64) / 64, r = 16 * (o + 1), a = Array(r - 1), c = 0, u = 0; n > u;) e = (u - u % 4) / 4,
                        c = u % 4 * 8,
                        a[e] = a[e] | t.charCodeAt(u) << c,
                        u++;
                    return e = (u - u % 4) / 4,
                        c = u % 4 * 8,
                        a[e] = a[e] | 128 << c,
                        a[r - 2] = n << 3,
                        a[r - 1] = n >>> 29,
                        a
                },
                f = function(t) {
                    var e, n, i = "",
                        o = "";
                    for (n = 0; 3 >= n; n++) e = t >>> 8 * n & 255,
                        o = "0" + e.toString(16),
                        i += o.substr(o.length - 2, 2);
                    return i
                },
                m = function(t) {
                    t = t.replace(/\x0d\x0a/g, "\n");
                    for (var e = "",
                             n = 0; n < t.length; n++) {
                        var i = t.charCodeAt(n);
                        128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
                    }
                    return e
                };
            t.extend(t, {
                md5: function(t) {
                    var e, i, o, r, a, h, p, g, y, w = Array(),
                        x = 7,
                        b = 12,
                        v = 17,
                        _ = 22,
                        j = 5,
                        k = 9,
                        S = 14,
                        z = 20,
                        D = 4,
                        q = 11,
                        C = 16,
                        L = 23,
                        T = 6,
                        P = 10,
                        R = 15,
                        B = 21;
                    for (t = m(t), w = d(t), h = 1732584193, p = 4023233417, g = 2562383102, y = 271733878, e = 0; e < w.length; e += 16) i = h,
                        o = p,
                        r = g,
                        a = y,
                        h = c(h, p, g, y, w[e + 0], x, 3614090360),
                        y = c(y, h, p, g, w[e + 1], b, 3905402710),
                        g = c(g, y, h, p, w[e + 2], v, 606105819),
                        p = c(p, g, y, h, w[e + 3], _, 3250441966),
                        h = c(h, p, g, y, w[e + 4], x, 4118548399),
                        y = c(y, h, p, g, w[e + 5], b, 1200080426),
                        g = c(g, y, h, p, w[e + 6], v, 2821735955),
                        p = c(p, g, y, h, w[e + 7], _, 4249261313),
                        h = c(h, p, g, y, w[e + 8], x, 1770035416),
                        y = c(y, h, p, g, w[e + 9], b, 2336552879),
                        g = c(g, y, h, p, w[e + 10], v, 4294925233),
                        p = c(p, g, y, h, w[e + 11], _, 2304563134),
                        h = c(h, p, g, y, w[e + 12], x, 1804603682),
                        y = c(y, h, p, g, w[e + 13], b, 4254626195),
                        g = c(g, y, h, p, w[e + 14], v, 2792965006),
                        p = c(p, g, y, h, w[e + 15], _, 1236535329),
                        h = u(h, p, g, y, w[e + 1], j, 4129170786),
                        y = u(y, h, p, g, w[e + 6], k, 3225465664),
                        g = u(g, y, h, p, w[e + 11], S, 643717713),
                        p = u(p, g, y, h, w[e + 0], z, 3921069994),
                        h = u(h, p, g, y, w[e + 5], j, 3593408605),
                        y = u(y, h, p, g, w[e + 10], k, 38016083),
                        g = u(g, y, h, p, w[e + 15], S, 3634488961),
                        p = u(p, g, y, h, w[e + 4], z, 3889429448),
                        h = u(h, p, g, y, w[e + 9], j, 568446438),
                        y = u(y, h, p, g, w[e + 14], k, 3275163606),
                        g = u(g, y, h, p, w[e + 3], S, 4107603335),
                        p = u(p, g, y, h, w[e + 8], z, 1163531501),
                        h = u(h, p, g, y, w[e + 13], j, 2850285829),
                        y = u(y, h, p, g, w[e + 2], k, 4243563512),
                        g = u(g, y, h, p, w[e + 7], S, 1735328473),
                        p = u(p, g, y, h, w[e + 12], z, 2368359562),
                        h = s(h, p, g, y, w[e + 5], D, 4294588738),
                        y = s(y, h, p, g, w[e + 8], q, 2272392833),
                        g = s(g, y, h, p, w[e + 11], C, 1839030562),
                        p = s(p, g, y, h, w[e + 14], L, 4259657740),
                        h = s(h, p, g, y, w[e + 1], D, 2763975236),
                        y = s(y, h, p, g, w[e + 4], q, 1272893353),
                        g = s(g, y, h, p, w[e + 7], C, 4139469664),
                        p = s(p, g, y, h, w[e + 10], L, 3200236656),
                        h = s(h, p, g, y, w[e + 13], D, 681279174),
                        y = s(y, h, p, g, w[e + 0], q, 3936430074),
                        g = s(g, y, h, p, w[e + 3], C, 3572445317),
                        p = s(p, g, y, h, w[e + 6], L, 76029189),
                        h = s(h, p, g, y, w[e + 9], D, 3654602809),
                        y = s(y, h, p, g, w[e + 12], q, 3873151461),
                        g = s(g, y, h, p, w[e + 15], C, 530742520),
                        p = s(p, g, y, h, w[e + 2], L, 3299628645),
                        h = l(h, p, g, y, w[e + 0], T, 4096336452),
                        y = l(y, h, p, g, w[e + 7], P, 1126891415),
                        g = l(g, y, h, p, w[e + 14], R, 2878612391),
                        p = l(p, g, y, h, w[e + 5], B, 4237533241),
                        h = l(h, p, g, y, w[e + 12], T, 1700485571),
                        y = l(y, h, p, g, w[e + 3], P, 2399980690),
                        g = l(g, y, h, p, w[e + 10], R, 4293915773),
                        p = l(p, g, y, h, w[e + 1], B, 2240044497),
                        h = l(h, p, g, y, w[e + 8], T, 1873313359),
                        y = l(y, h, p, g, w[e + 15], P, 4264355552),
                        g = l(g, y, h, p, w[e + 6], R, 2734768916),
                        p = l(p, g, y, h, w[e + 13], B, 1309151649),
                        h = l(h, p, g, y, w[e + 4], T, 4149444226),
                        y = l(y, h, p, g, w[e + 11], P, 3174756917),
                        g = l(g, y, h, p, w[e + 2], R, 718787259),
                        p = l(p, g, y, h, w[e + 9], B, 3951481745),
                        h = n(h, i),
                        p = n(p, o),
                        g = n(g, r),
                        y = n(y, a);
                    var I = f(h) + f(p) + f(g) + f(y);
                    return I.toLowerCase()
                }
            })
        } (jQuery),
    !
        function(t) {
            t.chainclude = function(e, n) {
                var i = function(o, r) {
                    if ("undefined" != typeof e.length) return 0 == e.length ? t.isFunction(n) ? n(r) : null: (e.shift(), t.chainclude.load(e, i));
                    for (var a in e) {
                        e[a](r),
                            delete e[a];
                        var c = 0;
                        for (var u in e) c++;
                        return 0 == c ? t.isFunction(n) ? n(r) : null: t.chainclude.load(e, i)
                    }
                };
                t.chainclude.load(e, i)
            },
                t.chainclude.load = function(e, n) {
                    if ("object" == typeof e && "undefined" == typeof e.length) for (var i in e) return t.include.load(i, n, e[i].callback);
                    e = t.makeArray(e),
                        t.include.load(e[0], n, null)
                },
                t.include = function(e, n) {
                    var i = t.include.luid++,
                        o = function(e, o) {
                            t.isFunction(e) && e(o),
                            0 == --t.include.counter[i] && t.isFunction(n) && n()
                        };
                    if ("object" == typeof e && "undefined" == typeof e.length) {
                        t.include.counter[i] = 0;
                        for (var r in e) t.include.counter[i]++;
                        return t.each(e,
                            function(e, n) {
                                t.include.load(e, o, n)
                            })
                    }
                    e = "object" == typeof e ? e: [e],
                        t.include.counter[i] = e.length,
                        t.each(e,
                            function() {
                                t.include.load(this, o, null)
                            })
                },
                t.extend(t.include, {
                    luid: 0,
                    counter: [],
                    load: function(e, n, i) {
                        if (t.include.exist(e)) return n(i);
                        var o = e.match(/\.([^\.]+)$/);
                        if (o) switch (o[1]) {
                            case "css":
                                t.include.loadCSS(e, n, i);
                                break;
                            case "js":
                                t.include.loadJS(e, n, i);
                                break;
                            default:
                                t.get(e,
                                    function(t) {
                                        n(i, t)
                                    })
                        }
                    },
                    loadCSS: function(e, n, i) {
                        var o = document.createElement("link");
                        o.setAttribute("type", "text/css"),
                            o.setAttribute("rel", "stylesheet"),
                            o.setAttribute("href", e.toString()),
                            t("head").get(0).appendChild(o),
                            t.browser.msie ? t.include.IEonload(o, n, i) : n(i)
                    },
                    loadJS: function(e, n, i) {
                        var o = document.createElement("script"),
                            r = /charset=([^&]+)/i.exec(e);
                        o.setAttribute("defer", !0),
                            o.setAttribute("charset", r && r[1] ? r[1] : "gbk"),
                            o.src = e;
                        var a = function() {
                            "function" == typeof i && i(),
                                t(o).remove()
                        };
                        "onload" in o ? o.onload = function() {
                            n(a)
                        }: t.include.IEonload(o, n, a),
                            t("head").get(0)
                    },
                    IEonload: function(t, e, n) {
                        t.onreadystatechange = function() { ("loaded" == this.readyState || "complete" == this.readyState) && e(n)
                        }
                    },
                    exist: function(e) {
                        var n = !1;
                        return t("head script").each(function() {
                            return /.css$/.test(e) && this.href == e ? n = !0 : /.js$/.test(e) && this.src == e ? n = !0 : void 0
                        }),
                            n
                    }
                })
        } (jQuery),
    !
        function() {
            nie.site = nie.site ||
                function() {
                    var t = window.self.location.hostname,
                        e = /^((?:[^\.]+\.)+)163\.com$/i.exec(t),
                        n = {
                            immortalconquest: 1,
                            onmyojigame: 1
                        };
                    if (e) return e[1].substring(0, e[1].length - 1).toLowerCase();
                    if (/^(www\.)?(\u68a6\u5e7b\u897f\u6e38|xn--owt49tjseb46a)\.(com|cn|net|\u4e2d\u56fd|xn--fiqs8s)$/i.test(t)) return "xyq";
                    if (/^(www\.)?(\u98de\u98de|xn--q35aa)\.(com|cn|net|\u4e2d\u56fd|xn--fiqs8s)$/i.test(t)) return "ff";
                    if (/^(www\.)?(\u5927\u8bdd\u897f\u6e38|xn--pss230cs2tifc)\.(com|cn|net|\u4e2d\u56fd|xn--fiqs8s)$/i.test(t)) return "xy2";
                    var i = /^((?:[^\.]+\.)+)([^\.]+)\.\w+/i.exec(t);
                    return i && n[i[i.length - 1]] ? i[i.length - 1].toLowerCase() : null
                } ()
        } (jQuery),
    !
        function(t) {
            nie.useJsURL = "",
                nie.use = function(e, n) {
                    var i = e.sort().toString(),
                        o = t.host + "/comm/js/" + (0 != window.self.location.href.indexOf("http") ? "use.php?p=" + i + "&": "cache/" + t.md5(i)) + ".js";
                    nie.useJsURL = o,
                        t.include(o, n)
                }
        } (jQuery),
    !
        function($) {
            function unique(t) {
                for (var e, n = [], i = {},
                         o = 0; null != (e = t[o]); o++) i[e] || (n.push(e), i[e] = !0);
                return n
            }
            function filter(t, e) {
                for (var n = [], i = 0; i < t.length; i++) 1 == e(t[i], i) && n.push(t[i]);
                return n
            }
            function factoryProcess(t) {
                function e(t) {
                    _factoryList[t].canProcess = !0,
                        _factoryList[t].did = !0,
                        _factoryList[t].name ? window[_factoryList[t].name] = _defineList[_factoryList[t].name] = _factoryList[t].factory() || _factoryList[t].name: _factoryList[t].factory(),
                    _factoryList[t + 1] && _factoryList[t + 1].canProcess && e(t + 1)
                }
                return 0 >= t ? (e(t), !0) : _factoryList[t - 1].did ? (e(t), !0) : (_factoryList[t].canProcess = !0, !1)
            }
            var _defineList = {},
                _host = $.host + "/comm/js/",
                _nameHash = {
                    "ui.tab": " $.tab",
                    "ui.Switch": "$.Switch",
                    "nie.util.copytext": "nie.util.copyText",
                    "nie.util.audio": "audio",
                    "util.swfobject": "$.flash",
                    "nie.util.pager": "Pager",
                    "ui.marquee2": "$.marquee2",
                    "nie.util.Lottery": "Lottery",
                    "util.bjTime": "$",
                    "nie.util.mobiShare": "MobileShare",
                    "nie.util.mobiShare2": "MobileShare",
                    "nie.util.shareV5": "nie.util.share",
                    "nie.util.shareV4": "nie.util.share",
                    "nie.util.shareV3": "nie.util.share",
                    "nie.util.videoV2": "nie.util.video",
                    "ui.lightBox": "$",
                    "nie.util.login": "Login",
                    "nie.util.login2": "Login",
                    "nie.util.fur3": "fur3",
                    "nie.util.frame": "Frame",
                    "nie.util.Comment": "Comment",
                    "nie.util.barrage": "Barrage",
                    "nie.util.niedownload": "NieDownload",
                    "nie.util.shake": "Shake",
                    "nie.util.gallery": "Gallery",
                    "nie.util.galleryV2": "Gallery",
                    "nie.util.imageshow": "ImageShow",
                    "nie.util.GamePackage": "GamePackage",
                    "nie.util.PopDialog": "PopDialog",
                    "nie.util.imageUploader": "ImageUploader",
                    "nie.util.imageCropper": "ImageCropper",
                    "nie.util.FormCheck": "FormCheck",
                    "nie.util.nosUploader": "nosUploader",
                    "nie.util.gamestart": "GameStart",
                    "nie.util.bullet": "BulletUtil",
                    "nie.util.indexorder": "IndexOrder"
                },
                _verHash = {
                    "nie.util.pager": 2,
                    "nie.util.copytext": 6,
                    "nie.util.videoV2": 10,
                    "nie.util.audio": 5,
                    "ui.lightBox": 5,
                    "nie.util.mobiShare2": 10,
                    "nie.util.login": 17,
                    "nie.util.login2": 40,
                    "nie.util.Lottery": 6,
                    "nie.util.fur2": 6,
                    "nie.util.fur3": 26,
                    "util.bjTime": 4,
                    "nie.util.Comment": 22,
                    "nie.util.frame": 5,
                    "nie.util.shareV5": 5,
                    "nie.util.niedownload": 4,
                    "nie.util.GamePackage": 5,
                    "nie.util.imageUploader": 17,
                    "nie.util.imageCropper": 9,
                    "nie.util.PopDialog": 2,
                    "nie.util.FormCheck": 3,
                    "nie.util.imageshow": 6,
                    "nie.util.galleryV2": 3,
                    "nie.util.bullet": 13,
                    "nie.util.indexorder": 8,
                    "nie.util.gamestart": 6
                },
                _factoryList = [],
                _factoryIndex = 0;
            nie.define = function(t, e) {
                "string" != typeof t && (e = t, t = null),
                    e.__nieIndex = _factoryIndex,
                    _factoryIndex += 1,
                    _factoryList.push({
                        factory: e,
                        name: t
                    });
                var n = e.toString().match(/nie\.require\([^\)]+\)/g),
                    i = "",
                    o = 0;
                if (t && (_defineList[t] = !0), !n || !n.length) return factoryProcess(e.__nieIndex);
                for (var r = 0; r < n.length; r++) n[r] = n[r].match(/\(([^\)]+)\)/i)[1].replace(/'|"/g, "");
                if (n = unique(n), n = filter(n,
                        function(t) {
                            return _defineList[t] ? !1 : !0
                        }), !n || !n.length) return factoryProcess(e.__nieIndex);
                for (n = n.sort(function(t, e) {
                    return t > e
                }), r = 0; r < n.length; r++) i += n[r].replace(/\./g, "/") + ".js,",
                _verHash[n[r]] && (o += _verHash[n[r]]);
                i = _host + "??" + i + "v=" + o + ".js",
                    $.include(i,
                        function() {
                            for (var t = 0; t < n.length; t++) {
                                var i = n[t];
                                _defineList[i] = _nameHash[i] || i
                            }
                            factoryProcess(e.__nieIndex)
                        })
            },
                nie.require = function(name) {
                    return name = _defineList[name] || name,
                        "string" != (typeof name).toLowerCase() ? name: eval("(" + name + ")")
                },
                nie.require = BJ_REPORT.tryJs().spyCustom(nie.require),
                nie.define = BJ_REPORT.tryJs().spyCustom(nie.define)
        } (window.jQuery || window.Zepto),
    !
        function(t) {
            nie.config = nie.config || {
                    site: nie.site,
                    stats: {
                        loaded: !1,
                        defaultRun: function() {
                            try {
                                return window.top != window.self || window.top.location.hostname != window.self.location.hostname ? !1 : !0
                            } catch(t) {
                                return ! 1
                            }
                        } (),
                        name: "Devilfish",
                        clickStats: !1,
                        clickStatsPrecent: null,
                        id: null,
                        url: {
                            _data: [],
                            add: function(t, e) {
                                var n = "http://clickgame.163.com/" + nie.config.site + "/" + t,
                                    i = e || null;
                                nie.config.stats.url._data.push({
                                    url: n,
                                    title: i
                                }),
                                nie.config.stats.loaded && nie.config.stats.url._run(n, i)
                            },
                            addto: function(t, e, n) {
                                var i = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?" + t,
                                    o = e || null;
                                n = n || window._ntes_nacc,
                                    nie.config.stats.url._data.push({
                                        url: i,
                                        title: o,
                                        site: n
                                    }),
                                nie.config.stats.loaded && nie.config.stats.url._run(i, o, n)
                            },
                            _cb: function() {
                                for (var t = nie.config.stats.url._data,
                                         e = 0,
                                         n = t.length; n > e; e++) nie.config.stats.url._run(t[e].url, t[e].title, t[e].site)
                            },
                            _run: function(e, n, i) {
                                t.isFunction(neteaseTracker) && neteaseTracker(!0, e, n, i ? i: "clickgame")
                            }
                        }
                    },
                    topBar: {
                        hasRun: !1,
                        time: 2e3
                    },
                    copyRight: new
                    function() {
                        var t = 1,
                            e = !1,
                            n = function(n, i) { (i || !e) && (t = n, e = !0)
                            };
                        this.product = nie.site,
                            this.getStyle = function() {
                                return t
                            },
                            this.setSiteDefaultStyle = function(t) {
                                e || ("white" == t ? n(2, !0) : (t = "gray") && n(3, !0))
                            },
                            this.setGray = function() {
                                n(3)
                            },
                            this.setWhite = function() {
                                n(2)
                            },
                            this.setNormal = function() {
                                n(1)
                            }
                    }
                }
        } (jQuery),
    nie.util = nie.util || {},
    nie.util.addStyle = function(t) {
        var e;
        document.all ? (e = document.createStyleSheet(), e.cssText = t) : (e = document.createElement("style"), e.type = "text/css", e.textContent = t);
        try {
            document.getElementsByTagName("head")[0].appendChild(e)
        } catch(n) {}
        e = null
    },
    nie.util.ajax = function(t) {
        var e = window.location.hostname;
        return "127.0.0.1" != e && "locahost" != e && "test.nie.163.com" != e && 0 != e.indexOf("10.") && 0 != e.indexOf("192.") && e.indexOf("test.nie.163.com") < 0 ? $.ajax(t) : (url = t.url.replace(/#\S*/gi, ""), void $.ajax({
            type: "get",
            url: "//webpub.nie.netease.com/home/tool/proxy",
            dataType: "jsonp",
            data: "url=" + url,
            success: function(e) {
                t.success && t.success(e.data)
            },
            error: function() {
                t.error && t.error("\u8bf7\u6c42\u5931\u8d25")
            }
        }))
    },
    !
        function(t) {
            nie.util.stats = function() {
                var e = {
                        nb: "vipnb",
                        gs: "gssumr",
                        "wy.xy3": "xy3",
                        pk: "xyw",
                        xdw: "xyw",
                        xc: "itown",
                        jl: "mc",
                        jlcs: "mc",
                        pet: "petkingdom",
                        sg: "sgtx",
                        zg: "zgfy",
                        qn: "qnyh",
                        qn2: "qnyh",
                        "v.cc": "cc",
                        yx: "ipush",
                        tx3: "tx2",
                        "game.campus": "gamecampus",
                        y3: "dota",
                        lj: "gamex",
                        "bang.tx3": "tx2",
                        f: "f4",
                        gamef: "f4",
                        dtws2: "dt2",
                        dtws: "dt2",
                        zd: "zdcq",
                        zmq: "zdcq",
                        yxsg: "dota",
                        dj: "esports",
                        "xyq.baike": "xyq",
                        "xy3.baike": "xy3",
                        "y3.baike": "dota",
                        "xy2.baike": "xy2",
                        "xdw.baike": "xyw",
                        "my.baike": "my",
                        "tx3.baike": "tx2",
                        "x3.baike": "x3",
                        kyx: "kanyouxi",
                        "wst.webapp": "xyq",
                        wj: "f4",
                        newwar: "xxx",
                        "tuku.xyq": "xyq",
                        "so.xyq": "xyq",
                        story: "xy2",
                        "zgmh.baike": "zgmh",
                        "daren.nie": "daren",
                        "game.academy": "gameacademy",
                        wh2: "wh",
                        "b2c.nb": "vipnb",
                        fire: "xcbw",
                        bw: "xcbw",
                        xcbw: "xcbwsy",
                        qnyh: "qnyhc",
                        game: "nie",
                        "mall.gs": "gssumr",
                        "pm.gs": "gssumr",
                        ma: "ma2",
                        z: "z1",
                        cssg: "blcx",
                        gzbnl: "yszj",
                        xn: "mxxc",
                        xqn: "qnyh",
                        ldz: "raven",
                        n: "nsh",
                        "tuku.tx": "tx",
                        mc: "mc163",
                        dt: "dtm",
                        "wx.game": "wx",
                        "new.hi": "hi",
                        au: "dance"
                    },
                    n = null,
                    i = function(t) {
                        return e[t] || t
                    };
                if (null == nie.config.stats.id) {
                    if (null != nie.config.site) if ("undefined" != typeof e[nie.config.site]) n = i(nie.config.site);
                    else {
                        var o = nie.config.site.match(/([^.]+)\.webapp/);
                        if (o && o.length > 1 && (n = i(o[1].split("-")[0])), "v" == nie.config.site) {
                            var r = window.location.pathname.split("/");
                            r = "paike" == r[1] ? r[2] : r[1],
                                n = i(r)
                        }
                        o = nie.config.site.match(/([^.]+)\.baike/),
                        o && o.length > 1 && (n = i(o[1].split("-")[0])),
                            o = nie.config.site.match(/tuku\.([^.]+)/),
                        o && o.length > 1 && (n = i(o[1].split("-")[0])),
                            o = nie.config.site.match(/([^.]+)\.tuku/),
                        o && o.length > 1 && (n = i(o[1].split("-")[0])),
                        null == n && nie.config.site.split(".").length < 2 && (n = i(nie.config.site))
                    }
                } else n = i(nie.config.stats.id);
                null != n && t.include("//analytics.163.com/ntes.js",
                    function() {
                        nie.config.stats.loaded = !0,
                            _ntes_nacc = n,
                        t.isFunction(neteaseTracker) && neteaseTracker(),
                        nie.config.stats.clickStats && (nie.config.stats.clickStatsPrecent ? neteaseClickStat(nie.config.stats.clickStatsPrecent) : neteaseClickStat()),
                            nie.config.stats.url._cb()
                    })
            }
        } (jQuery);
var LocalData = {
        hname: location.hostname ? location.hostname: "localStatus",
        dataDom: null,
        isLocalStorage: function() {
            try {
                return window.localStorage ? !0 : !1
            } catch(t) {
                return ! 1
            }
        },
        initDom: function() {
            if (!this.dataDom) try {
                this.dataDom = document.body,
                    this.dataDom.addBehavior("#default#userData");
                var t = new Date;
                t = t.getDate() + 30,
                    this.dataDom.expires = t.toUTCString()
            } catch(e) {
                return ! 1
            }
            return ! 0
        },
        set: function(t, e) {
            if (this.isLocalStorage()) try {
                window.localStorage.setItem(t, e)
            } catch(n) {} else if (this.initDom()) try {
                this.dataDom.load(this.hname),
                    this.dataDom.setAttribute(t, e),
                    this.dataDom.save(this.hname)
            } catch(n) {}
        },
        get: function(t) {
            if (this.isLocalStorage()) try {
                return window.localStorage.getItem(t)
            } catch(e) {
                return null
            } else if (this.initDom()) try {
                return this.dataDom.load(this.hname),
                    this.dataDom.getAttribute(t)
            } catch(e) {
                return null
            }
        },
        remove: function(t) {
            this.isLocalStorage ? localStorage.removeItem(t) : this.initDom() && (this.dataDom.load(this.hname), this.dataDom.removeAttribute(t), this.dataDom.save(this.hname))
        }
    },
    __GetScript = function(t) {
        function e(t) {
            if (1 == /iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase()) || 0 == /msie/i.test(navigator.userAgent)) return n(t);
            var e = "script" + Math.floor(1e5 * Math.random() + 1e5),
                i = 0,
                o = (new Date, document.createElement("script"));
            o.type = "text/javascript";
            var r = o.onerror = function(e) {
                return i ? (clearTimeout(i), t.error(), document.body.removeChild(o), window.random = null, void("undefined" != typeof BJ_REPORT && BJ_REPORT.report(1 == e ? "[" + nie.site + "][adconfig_error][timeout][data:" + t.data + "]": "[" + nie.site + "][adconfig_error][interface_error][data:" + t.data + "]"))) : !1
            };
            window[e] = function() {
                if (!i) return ! 1;
                clearTimeout(i);
                try {
                    t.success.apply(null, arguments)
                } catch(e) {
                    t.error()
                }
                document.body.removeChild(o),
                    window.random = null
            },
                i = setTimeout(function() {
                        r(!0),
                            i = 0
                    },
                    t.time || 3e3),
                o.src = t.url + "?" + t.data + "&callback=" + e,
                document.body.appendChild(o)
        }
        function n(e) {
            new Date,
                t.ajax({
                    url: e.url + "?" + e.data,
                    dataType: "json",
                    timeout: e.time || 3e3,
                    type: "POST",
                    success: function(t) {
                        try {
                            e.success(t)
                        } catch(n) {
                            e.error()
                        }
                    },
                    error: function(n, i, o) {
                        return "yys" != nie.site ? e.error() : (BJ_REPORT.report("[" + nie.site + "][adconfig_ajax_error][data:" + e.data + "][status:" + i + "][error:" + o + "][msg:" + n.responseText + "]"), void(("abort" == i || "timeout" == i) && t.ajax({
                            url: "http://106.2.69.124/fz/interface/frontend/fz.do?" + e.data,
                            dataType: "json",
                            timeout: 1e4,
                            type: "GET",
                            success: function(t) {
                                e.success(t),
                                    BJ_REPORT.report("[" + nie.site + "][adconfig_ip_success][repeat_" + nie.site + "][data:" + e.data + "]")
                            },
                            error: function(t, n, i) {
                                e.error(),
                                    BJ_REPORT.report("[" + nie.site + "][adconfig_ip_error][repeat_" + nie.site + "][status:" + n + "][error:" + i + "][msg:" + t.responseText + "]")
                            }
                        })))
                    }
                })
        }
        return e
    } (window.jQuery || window.Zepto);
if (window.ADData) ADBase.flag && (ADData.isInit = !0);
else var ADData = window.ADData = {
        list: []
    },
    ADBase = window.ADBase = {
        config: function(t) {
            ADData.list.push(t)
        }
    };
var ADBase = function(t) {
    function e(t) {
        t = t || {},
            t = t instanceof Array ? t: [t],
            n(t)
    }
    function n(t) {
        for (var e = [], n = [], o = !!t[0].noCache, r = t[0].time || 15e3, c = (new Date, 0); c < t.length; c++) e.push(t[c].pos),
            n.push(t[c].callback);
        e = e.join(","),
            d({
                url: p.getData,
                data: "pos=" + e,
                time: r,
                success: function(t) {
                    if (t.succ && "00" == t.result.code) {
                        var r = t.result.content;
                        i(r, e, n, o),
                            setTimeout(function() {
                                    u(e)
                                },
                                1e3)
                    } else a(e, n),
                    "undefined" != typeof BJ_REPORT && BJ_REPORT.report("[" + l.site + "][adconfig_error][interface_fail][data:" + f.stringify(t) + "]")
                },
                error: function() {
                    a(e, n)
                }
            })
    }
    function i(t, e, n, i) {
        s(".adbase-ctn").css("background", "none");
        var a = i ? {}: o(e);
        a = r(a, t),
        i || m.set(e, f.stringify(a));
        for (var u = 0; u < n.length; u++) n[u](!0, a);
        c()
    }
    function o(t) {
        var e = m.get(t);
        return e ? f.parse(e) : {}
    }
    function r(t, e) {
        for (var n in e) ! t[n] || t[n].length < 1 ? t[n] = e[n] : t[n] && t[n].length && e[n] && e[n].length ? t[n] = e[n] : t[n] && t[n].length && (!e[n] || e[n].length < 1) || (!e[n] || e[n].length < 1) && (!t[n] || t[n].length < 1) && (t[n] = []);
        return t
    }
    function a(t, e) {
        var n = m.get(t);
        if (n) {
            n = f.parse(n),
                s(".adbase-ctn").css("background", "none");
            for (var i = 0; i < e.length; i++) e[i](!0, n);
            c()
        } else {
            s(".adbase-ctn").css("background", "url(" + s.host + "/comm/js/nie/util/img/error.png) center center no-repeat");
            for (var i = 0; i < e.length; i++) e[i](!1, {})
        }
    }
    function c() {
        s(".adbase-ctn").each(function(t, e) {
            s(e).contents().length < 1 && s(e).css("background", "url(" + s.host + "/comm/js/nie/util/img/error.png) center center no-repeat")
        })
    }
    function u(t) {
        var e = new Image;
        e.src = [p.report, "?pos=", t].join("")
    }
    var s = t.jQuery || t.Zepto,
        l = t.nie,
        d = t.__GetScript,
        f = t.JSON,
        m = t.LocalData,
        h = (t.ADData, "https://a.game.163.com"),
        p = {
            getData: h + "/fz/interface/frontend/fz.do",
            report: h + "/fz/interface/frontend/viewstatics.do"
        },
        g = {
            config: e,
            flag: !0
        };
    return g
} (window, document); !
    function(t) {
        nie.util.topBar = nie.util.topBar ||
            function() { ! nie.config.topBar.hasRun && document.getElementById("NIE-topBar") && (nie.config.topBar.hasRun = !0, t.include(t.host + "./js/topBar.v2.last.js")),
            (document.getElementById("NIE-topBar") || document.getElementById("NIE-topBar-include"))
            }
    } (jQuery),
    !
        function(t) {
            nie.util.copyRight = nie.util.copyRight ||
                function() {
                    function e() {
                        var e = "",
                            o = function(t, e) {
                                "m" == t ? i.html(e) : n.html(e)
                            };
                        0 == n.length && i.length > 0 && (e = "m"),
                            t.ajax({
                                url: "https://websource.nie.netease.com/copyright/get/byreferer",
                                dataType: "jsonp",
                                data: {
                                    type: e
                                },
                                success: function(n) {
                                    if (n.success) t(function() {
                                        2 == nie.config.copyRight.getStyle() && (n.result = n.result.replace(/(\/images\/([^\.\/]*)\.)\d{1}(\.png)/gi, "$12$3")),
                                            o(e, n.result)
                                    });
                                    else {
                                        var i = n.msg || n.errmsg;
                                        o(e, "\u7248\u6743\u52a0\u8f7d\u5931\u8d25\uff1a" + i)
                                    }
                                },
                                error: function(t) {
                                    o(e, "\u7248\u6743\u52a0\u8f7d\u5931\u8d25\uff1a" + JSON.stringfy(t))
                                }
                            })
                    }
                    var n = t("#NIE-copyRight"),
                        i = t(".NIE-copyRight_m");
                    return n.length > 0 || i.length > 0 ? void e() : void 0
                }
        } (jQuery),
    !
        function(t) {
            nie.util.union = nie.util.union || {
                    unionFabUrlList: ["http://dh2.163.com/biz/wm/", "http://x3.163.com/biz/wm/", "http://x3.163.com/biz/wm01/", "http://x3.163.com/biz/wm2/", "http://y3.163.com/biz/wm/", "http://y3.163.com/biz/wm3/", "http://wh.163.com/wm/", "http://wh.163.com/biz/wm1/", "http://wh.163.com/wm1/", "http://wh.163.com/biz/wm3/", "http://wh2.163.com/biz/wm/", "http://zh.163.com/fab/wm1/", "http://xy2.163.com/biz/wm1/", "http://xy2.163.com/", "http://xy2.163.com/biz/wm2/", "http://x3.163.com/biz/wm2/", "http://dtws2.163.com/biz/wm01/", "http://dtws2.163.com/biz/wm02/", "http://dtws2.163.com/biz/wm1/", "http://dtws.163.com/biz/wm/", "http://dtws2.163.com/biz/wm/", "http://qn2.163.com/biz/wm1/?id=01/", "http://qn2.163.com/biz/wm2/", "http://qn2.163.com/biz/wm/", "http://qn2.163.com/biz/wm3/", "http://qn2.163.com/biz/wm1/", "http://qn2.163.com/biz/wm01/", "http://tx3.163.com/biz/wm2/", "http://tx3.163.com/biz/wm3/", "http://tx3.163.com/biz/wm/", "http://tx3.163.com/biz/wm1/", "http://xyq.163.com/fab3/", "http://xyq.163.com/biz/wm/", "http://xyq.163.com/wmc/", "http://xyq.163.com/biz/wm1407/", "http://xdw.163.com/biz/wm2/", "http://xdw.163.com/biz/wm1/", "http://dh2.163.com/biz/wm1/"],
                    unionApi: "http://union.gad.netease.com/union2/monitor/point_code",
                    url: {},
                    qUrsUnion: {},
                    init: function() {
                        this.url.raw = window.location.href,
                            this.url.isUnion = !1
                    },
                    processUrl: function() {
                        function e(t, e) {
                            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                                i = e.match(n);
                            return null !== i ? unescape(i[2]) : null
                        }
                        function n(n) {
                            var i = n.indexOf("?"),
                                o = {};
                            if (i > 0) {
                                o.req = n.substring(0, i);
                                var r = n.substring(i + 1),
                                    a = ["login", "username", "product"];
                                t.each(a,
                                    function(t, n) {
                                        var i = e(n, r);
                                        i && (o[n] = i)
                                    })
                            } else o.req = n;
                            return "/" != o.req.charAt(o.req.length - 1) && (o.req += "/"),
                                o
                        }
                        if (t.inArray(this.url.raw, this.unionFabUrlList) >= 0) this.url.isUnion = !0,
                            this.url.req = this.url.raw;
                        else {
                            var i = n(this.url.raw);
                            this.url.req = i.req,
                            i.hasOwnProperty("login") && (this.url.isUnion = !0, this.url.urs = i.login),
                            i.hasOwnProperty("username") && (this.url.isUnion = !0, this.url.urs = i.username),
                            i.hasOwnProperty("product") && (this.url.isUnion = !0, this.url.product = i.product)
                        }
                    },
                    setupUnion: function(e) {
                        function n(e) {
                            t.getScript(e)
                        }
                        function i(t, e) { (new Image).src = t + "&urs=" + e
                        }
                        e.hasOwnProperty("0") && n(e[0]),
                        e.hasOwnProperty("1") && (this.qUrsUnion.url = e[1]),
                        e.hasOwnProperty("2") && i(e[2], this.url.urs),
                        e.hasOwnProperty("3") && i(e[3], this.url.urs)
                    },
                    getUnionCode: function() {
                        var e = this;
                        t.ajax({
                            type: "get",
                            url: e.unionApi,
                            data: {
                                url: e.url.req,
                                product: e.url.product
                            },
                            dataType: "jsonp",
                            success: function(t) {
                                e.setupUnion(t)
                            }
                        })
                    },
                    run: function() {}
                }
        } (jQuery),
    BJ_REPORT.tryJs().spyAll(),
    function(t) {
        t(function() {
            window.onerror = function() {},
            nie.config.stats.defaultRun && setTimeout(function() {
                    nie.util.stats()
                },
                0),
                setTimeout(function() {
                        nie.util.copyRight(),
                            nie.util.union.run()
                    },
                    0),
                t(window).bind("load",
                    function() {
                        nie.util.topBar();
                        var t = (document.documentElement || document.body).innerHTML;
                        t.match(/\[an\serror\soccurred\swhile\sprocessing\sthis\sdirective\]/i) && BJ_REPORT.report("include_error_" + window.location.href)
                    }),
                setTimeout(function() {
                        nie.config.topBar.hasRun || nie.util.topBar()
                    },
                    nie.config.topBar.time)
        })
    } (jQuery),
    !
        function(t) {
            function e() {
                function t(t, e) {
                    var n = Math.pow(10, e);
                    return Math.round(t * n) / n
                }
                var e = 1,
                    n = window,
                    i = document.documentElement || document.body,
                    o = n.devicePixelRatio;
                return o && 1 > o && o > 0 ? (e = o, i.dpr = o) : isNaN(screen.deviceXDPI) || isNaN(screen.logicalXDPI) ? n.outerWidth > 0 && n.innerWidth > 0 && (i.outerWidth = n.outerWidth, i.innerWidth = n.innerWidth, e = n.outerWidth / n.innerWidth) : e = screen.deviceXDPI / screen.logicalXDPI,
                    i.zoom = e,
                1 !== t(e, 1)
            }
            function n() {
                var e = '';
                t(document.body).append(e),
                    t("#_js_neteaes_tips a").click(function() {
                        t.cookie("_zoom_tips", "1", {
                            expires: 7,
                            path: "/",
                            domain: "163.com",
                            secure: !1
                        }),
                            t("#_js_neteaes_tips").remove()
                    }),
                    t(document).keydown(function(e) {
                        e.ctrlKey && 96 == e.keyCode && t("#_js_neteaes_tips")[0] && (t.cookie("_zoom_tips", "1", {
                            expires: 7,
                            path: "/",
                            domain: "163.com",
                            secure: !1
                        }), t("#_js_neteaes_tips").remove())
                    })
            }
            function i() {
                return this.top != this ? !1 : t.cookie("_zoom_tips") ? !1 : 0 == e() ? !1 : 1 == /iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase()) ? !1 : void t(document).ready(n)
            }
            i()
        } (jQuery);
