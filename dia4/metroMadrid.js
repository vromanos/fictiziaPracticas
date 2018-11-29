/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 */
! function(e, t) {
    typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t()
}("domready", function() {
    var e = [],
        t, n = document,
        r = n.documentElement.doScroll,
        i = "DOMContentLoaded",
        s = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
    return s || n.addEventListener(i, t = function() {
            n.removeEventListener(i, t), s = 1;
            while (t = e.shift()) t()
        }),
        function(t) {
            s ? setTimeout(t, 0) : e.push(t)
        }
});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return K(a, "nextSibling")
        },
        prev: function(a) {
            return K(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function N(a) {
        return a
    }

    function O(a) {
        throw a
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function(a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function(a, b) {
            X.remove(a, b)
        },
        _data: function(a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function(a, b) {
            W.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a)
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c
                } else this.each(function() {
                    X.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0)
        },
        hide: function() {
            return ia(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
            k = 0;
            while (f = g[k++]) la.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0
    }

    function wa() {
        return !1
    }

    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(L) || [""], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0)
        },
        remove: function(a) {
            return Ka(this, a)
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                    return $a(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya)
    }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
    }

    function fb() {
        return a.setTimeout(function() {
            ab = void 0
        }), ab = r.now()
    }

    function gb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
                p || ia([a]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }
    r.Animation = r.extend(kb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
            },
            prefilters: [ib],
            prefilter: function(a, b) {
                b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
            }, d
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(da).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), r.fx.start()
        }, r.fx.interval = 13, r.fx.start = function() {
            bb || (bb = !0, eb())
        }, r.fx.stop = function() {
            bb = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, qb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, qb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Rb = {
            0: 200,
            1223: 204
        },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0)
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
});;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e) {
    "use strict";
    if (typeof exports === "object") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(e) {
    "use strict";
    var n = function(e) {
        e = e || "once";
        if (typeof e !== "string") {
            throw new TypeError("The jQuery Once id parameter must be a string")
        }
        return e
    };
    e.fn.once = function(t) {
        var r = "jquery-once-" + n(t);
        return this.filter(function() {
            return e(this).data(r) !== true
        }).data(r, true)
    };
    e.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + n(e))
    };
    e.fn.findOnce = function(t) {
        var r = "jquery-once-" + n(t);
        return this.filter(function() {
            return e(this).data(r) === true
        })
    }
});

/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

    window.drupalSettings = {};

    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
})();;
window.drupalTranslations = {
    "strings": {
        "": {
            "Open": "Abierta",
            "Close": "Cerrar",
            "@action @title configuration options": "@action @title opciones de configuraci\u00f3n",
            "No results": "No hay resultados",
            "clear": "limpiar",
            "No modules added within the last week.": "No hay m\u00f3dulos adicionados en la \u00faltima semana.",
            "@enabled of @total": "@enabled de @total",
            "Hide": "Ocultar",
            "Show": "Mostrar",
            "An AJAX HTTP error occurred.": "Hubo un error HTTP AJAX.",
            "HTTP Result Code: !status": "C\u00f3digo de Resultado HTTP: !status",
            "An AJAX HTTP request terminated abnormally.": "Una solicitud HTTP de AJAX termin\u00f3 de manera anormal.",
            "Debugging information follows.": "A continuaci\u00f3n se detalla la informaci\u00f3n de depuraci\u00f3n.",
            "Path: !uri": "Ruta: !uri",
            "StatusText: !statusText": "StatusText: !statusText",
            "ResponseText: !responseText": "ResponseText: !responseText",
            "ReadyState: !readyState": "ReadyState: !readyState",
            "CustomMessage: !customMessage": "CustomMessage: !customMessage",
            "Please wait...": "Espere, por favor...",
            "The response failed verification so will not be processed.": "La respuesta de verificaci\u00f3n fall\u00f3, por lo que no se procesar\u00e1.",
            "The callback URL is not local and not trusted: !url": "La URL de llamada no es local y no es confiable: !url",
            "Changed": "Cambiado",
            "Extend": "Ampliar",
            "Collapse": "Plegar",
            "@label": "@label",
            "Horizontal orientation": "Orientaci\u00f3n horizontal",
            "Vertical orientation": "Orientaci\u00f3n vertical",
            "The toolbar cannot be set to a horizontal orientation when it is locked.": "La barra de herramientas no puede ser puesta en orientaci\u00f3n horizontal cuando esta bloqueada.",
            "Tray orientation changed to @orientation.": "La orientaci\u00f3n de la bandeja se ha cambiado a @orientation.",
            "closed": "cerrado",
            "opened": "abierto",
            "Tray \u0022@tray\u0022 @action.": "Bandeja \u0022@tray\u0022 @action",
            "Tray @action.": "Bandeja @action.",
            "Tabbing is no longer constrained by the Contextual module.": "Tabulando (Tabbing) ya no se ver\u00e1 limitado por el m\u00f3dulo Contextual (Contextual).",
            "Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.": "La tabulaci\u00f3n est\u00e1 restringida a un conjunto de @contextualsCount y al cambio a modo de edici\u00f3n.",
            "Press the esc key to exit.": "Presionar tecla esc para salir.",
            "@count contextual link\u0003@count contextual links": "@count enlace contextual\u0003@count enlaces contextuales",
            "!tour_item of !total": "!tour_item de !total",
            "End tour": "Final del recorrido",
            "Home": "Inicio",
            "Show all columns": "Mostrar todas las columnas",
            "Hide lower priority columns": "Ocultar columnas de menor prioridad",
            "Show table cells that were hidden to make the table fit within a small screen.": "Mostrar celdas de tablas que estaban ocultas para que la tabla se ajuste a una pantalla peque\u00f1a.",
            "List additional actions": "Lista adicional de acciones",
            "Re-order rows by numerical weight instead of dragging.": "Reordenar las filas por peso num\u00e9rico en lugar de arrastrar.",
            "Show row weights": "Mostrar pesos de la fila",
            "Hide row weights": "Ocultar pesos de la fila",
            "Drag to re-order": "Arrastre para reordenar",
            "You have unsaved changes.": "Tiene cambios sin guardar.",
            "Width": "Ancho",
            "Height": "Alto",
            "Delete": "Eliminar",
            "Edit": "Editar",
            "Next": "Siguiente",
            "Status": "Estado",
            "List": "Lista",
            "Cancel": "Cancelar",
            "Disabled": "Desactivado",
            "Enabled": "Activado",
            "File": "Archivo",
            "Date": "Date",
            "Size": "Tama\u00f1o",
            "Link": "Enlace",
            "Image": "Imagen",
            "root": "ra\u00edz",
            "Name": "Nombre",
            "Save": "Guardar",
            "Sunday": "Domingo",
            "Monday": "Lunes",
            "Tuesday": "Martes",
            "Wednesday": "Mi\u00e9rcoles",
            "Thursday": "Jueves",
            "Friday": "Viernes",
            "Saturday": "S\u00e1bado",
            "Add": "Agregar",
            "Filename": "Nombre de archivo",
            "Refresh": "Actualizar",
            "Upload": "Subir al servidor",
            "Continue": "Continuar",
            "Create": "Crear",
            "Done": "Hecho",
            "N\/A": "N\/D",
            "OK": "OK",
            "Prev": "Previo",
            "Mon": "Lun",
            "Tue": "Mar",
            "Wed": "Mi\u00e9",
            "Thu": "Jue",
            "Fri": "Vie",
            "Sat": "S\u00e1b",
            "Sun": "Dom",
            "May": "Mayo",
            "Add group": "A\u00f1adir grupo",
            "1 item\u0003@count items": "1 elemento\u0003@count elementos",
            "Select all rows in this table": "Seleccionar todas las filas de esta tabla",
            "Deselect all rows in this table": "Quitar la selecci\u00f3n a todas las filas de esta tabla",
            "Today": "Hoy",
            "Jan": "Ene",
            "Feb": "Feb",
            "Mar": "Mar",
            "Apr": "Abr",
            "Jun": "Jun",
            "Jul": "Jul",
            "Aug": "Ago",
            "Sep": "Sep",
            "Oct": "Oct",
            "Nov": "Nov",
            "Dec": "Dic",
            "Su": "Do",
            "Mo": "Lu",
            "Tu": "Ma",
            "We": "Mi",
            "Th": "Ju",
            "Fr": "Vi",
            "Sa": "Sa",
            "Not published": "No publicado",
            "Loading...": "Cargando...",
            "Apply": "Aplicar",
            "Select": "Seleccionar",
            "Unlink": "Desvincular",
            "Resize": "Redimensionar",
            "Not promoted": "No publicado en p\u00e1gina principal",
            "mm\/dd\/yy": "mm\/dd\/yy",
            "Quick edit": "Edici\u00f3n r\u00e1pida",
            "button": "bot\u00f3n",
            "Only files with the following extensions are allowed: %files-allowed.": "S\u00f3lo se permiten archivos con las siguientes extensiones: %files-allowed.",
            "Edit Link": "Editar enlace",
            "Remove group": "Eliminar grupo",
            "By @name on @date": "Por @name en @date",
            "By @name": "Por @name",
            "Not in menu": "No est\u00e1 en un men\u00fa",
            "Alias: @alias": "Alias: @alias",
            "No alias": "Sin alias",
            "New revision": "Nueva revisi\u00f3n",
            "Changes made in this table will not be saved until the form is submitted.": "Los cambios realizados en esta tabla no se guardar\u00e1n hasta que se env\u00ede el formulario",
            "1 byte\u0003@count bytes": "1 byte\u0003@count bytes",
            "@size KB": "@size KB",
            "@size MB": "@size MB",
            "Discard changes": "\u00bfDescartar cambios?",
            "Show description": "Mostrar descripci\u00f3n",
            "New group": "Nuevo grupo",
            "Saving": "Guardando",
            "This permission is inherited from the authenticated user role.": "Este permiso se hereda del rol de usuario registrado.",
            "No revision": "Sin revisi\u00f3n",
            "Requires a title": "Necesita un t\u00edtulo",
            "Not restricted": "Sin restricci\u00f3n",
            "(active tab)": "(solapa activa)",
            "Restricted to certain pages": "Restringido a algunas p\u00e1ginas",
            "The block cannot be placed in this region.": "El bloque no se puede colocar en esta regi\u00f3n.",
            "Hide summary": "Ocultar resumen",
            "Edit summary": "Editar resumen",
            "Don\u0027t display post information": "No mostrar informaci\u00f3n del env\u00edo",
            "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.": "El archivo seleccionado %filename no se puede subir al servidor. Solo se permiten archivos con las siguientes extensiones: %extensions.",
            "Apply (all displays)": "Aplicar (todas las presentaciones)",
            "Apply (this display)": "Aplicar (esta presentaci\u00f3n)",
            "Revert to default": "Volver al valor inicial",
            "Hide description": "Esconder descripci\u00f3n",
            "You have unsaved changes": "Usted tiene cambios no guaradados",
            "Needs to be updated": "Necesita ser actualizado",
            "Does not need to be updated": "No necesita ser actualizado",
            "Flag other translations as outdated": "Marcar las otras traducciones como desfasadas",
            "Do not flag other translations as outdated": "No marcar las otras traducciones como desfasadas",
            "No styles configured": "Ning\u00fan estilo configurado",
            "@count styles configured": "@count estilos configurados",
            "Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.": "Basado en la configuraci\u00f3n del editor de texto, esas etiquetas fueron a\u00f1adidas autom\u00e1ticamente:  \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.",
            "Uploads disabled": "Subidas desactivadas",
            "Uploads enabled, max size: @size @dimensions": "Subidas activadas, tama\u00f1o m\u00e1ximo: @size @dimensions",
            "Discard changes?": "\u00bfDescartar cambios?",
            "Could not load the form for \u003Cq\u003E@field-label\u003C\/q\u003E, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.": "No se pudo cargar el formulario para \u003Cq\u003E@field-label\u003C\/q\u003E, ya sea debido a un problema en el sitio, ya por un problema de conexi\u00f3n de red.\u003Cbr\u003EPor favor, int\u00e9ntelo de nuevo.",
            "Your changes to \u003Cq\u003E@entity-title\u003C\/q\u003E could not be saved, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.": "Los cambios en \u003Cq\u003E@entity-title\u003C\/q\u003E no podr\u00e1n salvarse, debido a un problema en el sitio web o un problema de conexi\u00f3n de red.\u003Cbr\u003EPor favor, int\u00e9ntelo de nuevo.",
            "Hide group names": "Ocultar grupos de nombres",
            "Show group names": "Mostrar grupos de nombres",
            "@groupName button group in position @position of @positionCount in row @row of @rowCount.": "Grupo de botones \u0022@groupName\u0022 en posici\u00f3n @position de @positionCount en la fila @row de @rowCount.",
            "Press the down arrow key to create a new row.": "Oprima la tecla fecha abajo para crear una nueva fila.",
            "@name @type.": "@type @name.",
            "Press the down arrow key to activate.": "Oprima la tecla fecha abajo para activar.",
            "@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.": "@name @type en posici\u00f3n @position de @positionCount en el grupo de botones @groupName en la fila @row de @rowCount.",
            "Press the down arrow key to create a new button group in a new row.": "Oprima la tecla fecha abajo para crear un nuevo grupo de botones en una nueva fila.",
            "This is the last group. Move the button forward to create a new group.": "Este es el \u00faltimo grupo. Mueve el bot\u00f3n adelante para crear un nuevo grupo.",
            "The \u0022@name\u0022 button is currently enabled.": "El bot\u00f3n @name est\u00e1 actualmente habilitado.",
            "Use the keyboard arrow keys to change the position of this button.": "Use las teclas de fecha del teclado para cambiar la posici\u00f3n de este bot\u00f3n.",
            "Press the up arrow key on the top row to disable the button.": "Oprima la tecla fecha arriba arriba de la fila para desabilitar el bot\u00f3n.",
            "The \u0022@name\u0022 button is currently disabled.": "El bot\u00f3n de \u0022@name\u0022 est\u00e1 actualmente desactivado.",
            "Use the down arrow key to move this button into the active toolbar.": "Utilice la tecla de flecha hacia abajo para mover este bot\u00f3n en la barra de herramientas activa.",
            "This @name is currently enabled.": "Este @name est\u00e1 actualmente habilitado.",
            "Use the keyboard arrow keys to change the position of this separator.": "Utilice las teclas de flechas del teclado para cambiar la posici\u00f3n de este separador.",
            "Separators are used to visually split individual buttons.": "Los separadores se utilizan para dividir visualmente botones individuales.",
            "This @name is currently disabled.": "Este @name est\u00e1 actualmente deshabilitado.",
            "Use the down arrow key to move this separator into the active toolbar.": "Utilice las teclas de flecha del teclado para mover este separador en la barra de herramientas activa.",
            "You may add multiple separators to each button group.": "Puede agregar varios separadores para cada grupo de botones.",
            "Please provide a name for the button group.": "Por favor, ingrese un nombre para el grupo de botones.",
            "Button group name": "Nombre del grupo de botones",
            "Editing the name of the new button group in a dialog.": "Editando el nombre del nuevo grupo de botones en un di\u00e1logo.",
            "Editing the name of the \u0022@groupName\u0022 button group in a dialog.": "Editando el nombre del grupo de botones \u0022@groupName\u0022 en un cuadro de di\u00e1logo.",
            "Place a button to create a new button group.": "Coloque un bot\u00f3n para crear un nuevo grupo de botones.",
            "Add a CKEditor button group to the end of this row.": "A\u00f1adir un grupo de botones de CKEditor la final de esta fila.",
            "Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.": "Cambiar el formato de texto a %text_format eliminar\u00e1 permanentemente el contenido que no est\u00e1 permitido en ese formato de texto.\u003Cbr\u003E\u003Cbr\u003EGuarde sus datos antes de cambiar el formato de texto para evitar perder datos.",
            "Change text format?": "\u00bfCambiar el formato de texto?",
            "Rich Text Editor, !label field": "Editor de texto con formato, campo !label",
            "Leave preview?": "\u00bfSalir de la vista previa?",
            "Leave preview": "Salir de la vista previa",
            "Leaving the preview will cause unsaved changes to be lost. Are you sure you want to leave the preview?": "La salida de la vista previa provocar\u00e1 la p\u00e9rdida de los cambios no guardados. \u00bfEst\u00e1 seguro de que desea abandonar la vista previa?",
            "CTRL+Left click will prevent this dialog from showing and proceed to the clicked link.": "CTRL+Clic izquierdo evitar\u00e1 que aparezca este di\u00e1logo e ir\u00e1 directamente al enlace pulsado.",
            "!modules modules are available in the modified list.": "!modules m\u00f3dulos est\u00e1n disponibles en la lista modificada.",
            "Network problem!": "Problema de red!",
            "Authored on @date": "Escrito el @date",
            "Priority": "Prioridad",
            "Select files": "Seleccionar los archivos",
            "Insert this token into your form": "Inserte este comod\u00edn en su formulario",
            "First click a text field to insert your tokens into.": "Primero haga clic en un campo de texto en el que quiera insertar sus patrones de reemplazo.",
            "Change frequency": "Frecuencia de cambio",
            "Automatic alias": "Alias autom\u00e1tico",
            "Downloads": "Descargas",
            "Not customizable": "No personalizable",
            "Colorbox": "Colorbox",
            "On by default with opt out": "Activado por defecto con opci\u00f3n de desactivar",
            "Off by default with opt in": "Desactivado por defecto con elecci\u00f3n de activar",
            "Not tracked": "No monitorizado",
            "One domain with multiple subdomains": "Un dominio con m\u00faltiples subdominios",
            "Multiple top-level domains": "M\u00faltiples dominios de nivel superior",
            "All pages with exceptions": "Todas las p\u00e1ginas con excepciones",
            "Excepted: @roles": "Exceptuando: @roles",
            "A single domain": "Un \u00fanico dominio",
            "No privacy": "Sin privacidad",
            "@items enabled": "@items activado",
            "Mailto links": "Enlaces de Correo electr\u00f3nico",
            "AdSense ads": "Anuncios de AdSense",
            "Anonymize IP": "Anonimizar IP",
            "Display features": "Caracter\u00edsticas de la presentaci\u00f3n",
            "Drag files here.": "Arrastre los archivos aqu\u00ed.",
            "File extension error.": "Error de extension de archivo.",
            "File size error.": "Error del tama\u00f1o de archivo.",
            "%d files queued": "%d archivos en cola",
            "Please wait while your files are being uploaded.": "Por favor espere mientras sus archivos est\u00e1n siendo cargados.",
            "item": "elemento",
            "items": "elementos",
            "Stop Upload": "Detener la subida de ficheros",
            "Start Upload": "Iniciar la subida de ficheros",
            "Uploaded %d\/%d files": "Subidos %d\/%d ficheros ",
            "Add Files": "A\u00f1adir ficheros",
            "Please select a file.": "Seleccione un documento, por favor.",
            "New folder": "Nueva carpeta",
            "Add file": "Agregar archivo",
            "Create a copy": "Crear una copia",
            "Open File Browser": "Abrir el explorador de ficheros del servidor",
            "Saving draft...": "Salvando borrador...",
            "Resume editing": "Seguir editando el borrador guardado",
            "Discard": "Descartar el borrador guardado",
            "Scheduled for publishing": "Contenido programado para publicar",
            "Scheduled for unpublishing": "Contenido programado para despublicar",
            "Publishing enabled": "Publicaci\u00f3n activada",
            "Geolocation is not supported by your browser": "La geolocalizaci\u00f3n no est\u00e1 soportada por su versi\u00f3n de navegador.",
            "Permission denied by user.": "Geolocalizaci\u00f3n no autorizada por el usuario.",
            "Location position unavailable.": "Servicio de geolocalizaci\u00f3n no diisponible.",
            "Request timeout.": "L\u00edmite de tiempo expirado.",
            "Unknown error.": "Error desconocido.",
            "Unable to retrieve your location: ": "No se puede obtener su localizaci\u00f3n: ",
            "Locating\u2026": "Localizando..."
        },
        "Long month name": {
            "January": "Enero",
            "February": "Febrero",
            "March": "Marzo",
            "April": "Abril",
            "May": "Mayo",
            "June": "Junio",
            "July": "Julio",
            "August": "Agosto",
            "September": "Septiembre",
            "October": "Octubre",
            "November": "Noviembre",
            "December": "Diciembre"
        }
    },
    "pluralFormula": {
        "1": 0,
        "default": 1
    }
};;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

window.Drupal = {
    behaviors: {},
    locale: {}
};

(function(Drupal, drupalSettings, drupalTranslations) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    };

    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;

        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };

    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;

        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };

    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };

    Drupal.formatString = function(str, args) {
        var processedArgs = {};

        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;

                case '!':
                    processedArgs[key] = args[key];
                    break;

                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });

        return Drupal.stringReplace(str, processedArgs, null);
    };

    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }

        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});

            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }

        if (keys.length === 0) {
            return str;
        }

        var key = keys.pop();
        var fragments = str.split(key);

        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }

        return fragments.join(args[key]);
    };

    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }

        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };

    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };

    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');

        try {
            url = decodeURIComponent(url);
        } catch (e) {}

        urlParsingNode.setAttribute('href', url);

        return urlParsingNode.cloneNode(false).href;
    };

    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;

        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}

        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
    };

    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;

        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }

        return translations[index];
    };

    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };

    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    };

    Drupal.theme.placeholder = function(str) {
        return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
    };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

if (window.jQuery) {
    jQuery.noConflict();
}

document.documentElement.className += ' js';

(function(domready, Drupal, drupalSettings) {
    domready(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(domready, Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        }
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.extend({
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form)
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version", "./escape-selector"], a) : a(jQuery)
}(function(a) {
    return a.fn.labels = function() {
        var b, c, d, e, f;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), d = this.attr("id"), d && (b = this.eq(0).parents().last(), f = b.add(b.length ? b.siblings() : this.siblings()), c = "label[for='" + a.ui.escapeSelector(d) + "']", e = e.add(f.find(c).addBack(c))), this.pushStack(e))
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    "1.7" === a.fn.jquery.substring(0, 3) && (a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.scrollParent = function(b) {
        var c = this.css("position"),
            d = "absolute" === c,
            e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            f = this.parents().filter(function() {
                var b = a(this);
                return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
        return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version", "./focusable"], a) : a(jQuery)
}(function(a) {
    return a.extend(a.expr[":"], {
        tabbable: function(b) {
            var c = a.attr(b, "tabindex"),
                d = null != c;
            return (!d || c >= 0) && a.ui.focusable(b, d)
        }
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.extend({
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    return a.ui = a.ui || {}, a.ui.version = "1.12.1"
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    function b(a) {
        for (var b = a.css("visibility");
            "inherit" === b;) a = a.parent(), b = a.css("visibility");
        return "hidden" !== b
    }
    return a.ui.focusable = function(c, d) {
        var e, f, g, h, i, j = c.nodeName.toLowerCase();
        return "area" === j ? (e = c.parentNode, f = e.name, !(!c.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']"), g.length > 0 && g.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(j) ? (h = !c.disabled, h && (i = a(c).closest("fieldset")[0], i && (h = !i.disabled))) : h = "a" === j ? c.href || d : d, h && a(c).is(":visible") && b(a(c)))
    }, a.extend(a.expr[":"], {
        focusable: function(b) {
            return a.ui.focusable(b, null != a.attr(b, "tabindex"))
        }
    }), a.ui.focusable
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.safeActiveElement = function(a) {
        var b;
        try {
            b = a.activeElement
        } catch (c) {
            b = a.body
        }
        return b || (b = a.body), b.nodeName || (b = a.body), b
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.safeBlur = function(b) {
        b && "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur")
    }
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    var b = 0,
        c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
            } catch (g) {}
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h = {},
            i = b.split(".")[0];
        b = b.split(".")[1];
        var j = i + "-" + b;
        return d || (d = c, c = a.Widget), a.isArray(d) && (d = a.extend.apply(null, [{}].concat(d))), a.expr[":"][j.toLowerCase()] = function(b) {
            return !!a.data(b, j)
        }, a[i] = a[i] || {}, e = a[i][b], f = a[i][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new f(a, b)
        }, a.extend(f, e, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), g = new c, g.options = a.widget.extend({}, g.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(h[b] = function() {
                function a() {
                    return c.prototype[b].apply(this, arguments)
                }

                function e(a) {
                    return c.prototype[b].apply(this, a)
                }
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(h[b] = d)
        }), f.prototype = a.widget.extend(g, {
            widgetEventPrefix: e ? g.widgetEventPrefix || b : b
        }, h, {
            constructor: f,
            namespace: i,
            widgetName: b,
            widgetFullName: j
        }), e ? (a.each(e._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, f, c._proto)
        }), delete e._childConstructors) : c._childConstructors.push(f), a.widget.bridge(b, f), f
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
            for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f,
                h = c.call(arguments, 1),
                i = this;
            return g ? this.length || "instance" !== f ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : i = void 0 : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), this.classesElementLookup = {}, d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            var b = this;
            this._destroy(), a.each(this.classesElementLookup, function(a, c) {
                b._removeClass(c, a)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return "classes" === a && this._setOptionClasses(b), this.options[a] = b, "disabled" === a && this._setOptionDisabled(b), this
        },
        _setOptionClasses: function(b) {
            var c, d, e;
            for (c in b) e = this.classesElementLookup[c], b[c] !== this.options.classes[c] && e && e.length && (d = a(e.get()), this._removeClass(e, c), d.addClass(this._classes({
                element: d,
                keys: c,
                classes: b,
                add: !0
            })))
        },
        _setOptionDisabled: function(a) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a), a && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(b) {
            function c(c, f) {
                var g, h;
                for (h = 0; h < c.length; h++) g = e.classesElementLookup[c[h]] || a(), g = a(b.add ? a.unique(g.get().concat(b.element.get())) : g.not(b.element).get()), e.classesElementLookup[c[h]] = g, d.push(c[h]), f && b.classes[c[h]] && d.push(b.classes[c[h]])
            }
            var d = [],
                e = this;
            return b = a.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, b), this._on(b.element, {
                remove: "_untrackClassesElement"
            }), b.keys && c(b.keys.match(/\S+/g) || [], !0), b.extra && c(b.extra.match(/\S+/g) || []), d.join(" ")
        },
        _untrackClassesElement: function(b) {
            var c = this;
            a.each(c.classesElementLookup, function(d, e) {
                a.inArray(b.target, e) !== -1 && (c.classesElementLookup[d] = a(e.not(b.target).get()))
            })
        },
        _removeClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !1)
        },
        _addClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !0)
        },
        _toggleClass: function(a, b, c, d) {
            d = "boolean" == typeof d ? d : c;
            var e = "string" == typeof a || null === a,
                f = {
                    extra: e ? b : c,
                    keys: e ? a : b,
                    element: e ? this.element : a,
                    add: d
                };
            return f.element.toggleClass(this._classes(f), d), this
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.on(j, k, h) : c.on(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.off(c).off(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-focus")
                },
                focusout: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
});;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal) {
    var autocomplete = void 0;

    var inBrowser = typeof window !== 'undefined';
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isAndroid = UA && UA.indexOf('android') > 0;

    function autocompleteSplitValues(value) {
        var result = [];
        var quote = false;
        var current = '';
        var valueLength = value.length;
        var character = void 0;

        for (var i = 0; i < valueLength; i++) {
            character = value.charAt(i);
            if (character === '"') {
                current += character;
                quote = !quote;
            } else if (character === ',' && !quote) {
                result.push(current.trim());
                current = '';
            } else {
                current += character;
            }
        }
        if (value.length > 0) {
            result.push($.trim(current));
        }

        return result;
    }

    function extractLastTerm(terms) {
        return autocomplete.splitValues(terms).pop();
    }

    function searchHandler(event) {
        var options = autocomplete.options;

        if (options.isComposing) {
            return false;
        }

        var term = autocomplete.extractLastTerm(event.target.value);

        if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
            return false;
        }

        return term.length >= options.minLength;
    }

    function sourceData(request, response) {
        var elementId = this.element.attr('id');

        if (!(elementId in autocomplete.cache)) {
            autocomplete.cache[elementId] = {};
        }

        function showSuggestions(suggestions) {
            var tagged = autocomplete.splitValues(request.term);
            var il = tagged.length;
            for (var i = 0; i < il; i++) {
                var index = suggestions.indexOf(tagged[i]);
                if (index >= 0) {
                    suggestions.splice(index, 1);
                }
            }
            response(suggestions);
        }

        var term = autocomplete.extractLastTerm(request.term);

        function sourceCallbackHandler(data) {
            autocomplete.cache[elementId][term] = data;

            showSuggestions(data);
        }

        if (autocomplete.cache[elementId].hasOwnProperty(term)) {
            showSuggestions(autocomplete.cache[elementId][term]);
        } else {
            var options = $.extend({
                success: sourceCallbackHandler,
                data: {
                    q: term
                }
            }, autocomplete.ajax);
            $.ajax(this.element.attr('data-autocomplete-path'), options);
        }
    }

    function focusHandler() {
        return false;
    }

    function selectHandler(event, ui) {
        var terms = autocomplete.splitValues(event.target.value);

        terms.pop();

        terms.push(ui.item.value);

        event.target.value = terms.join(', ');

        return false;
    }

    function renderItem(ul, item) {
        return $('<li>').append($('<a>').html(item.label)).appendTo(ul);
    }

    Drupal.behaviors.autocomplete = {
        attach: function attach(context) {
            var $autocomplete = $(context).find('input.form-autocomplete').once('autocomplete');
            if ($autocomplete.length) {
                var blacklist = $autocomplete.attr('data-autocomplete-first-character-blacklist');
                $.extend(autocomplete.options, {
                    firstCharacterBlacklist: blacklist || ''
                });

                $autocomplete.autocomplete(autocomplete.options).each(function() {
                    $(this).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
                });

                $autocomplete.on('change.autocomplete', function() {
                    autocomplete.options.isComposing = false;
                });
                if (!isAndroid) {
                    $autocomplete.on('compositionstart.autocomplete', function() {
                        autocomplete.options.isComposing = true;
                    });
                    $autocomplete.on('compositionend.autocomplete', function() {
                        autocomplete.options.isComposing = false;
                    });
                }
            }
        },
        detach: function detach(context, settings, trigger) {
            if (trigger === 'unload') {
                $(context).find('input.form-autocomplete').removeOnce('autocomplete').autocomplete('destroy');
            }
        }
    };

    autocomplete = {
        cache: {},

        splitValues: autocompleteSplitValues,
        extractLastTerm: extractLastTerm,

        options: {
            source: sourceData,
            focus: focusHandler,
            search: searchHandler,
            select: selectHandler,
            renderItem: renderItem,
            minLength: 1,

            firstCharacterBlacklist: '',

            isComposing: false
        },
        ajax: {
            dataType: 'json'
        }
    };

    Drupal.autocomplete = autocomplete;
})(jQuery, Drupal);;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function($, Drupal, drupalSettings) {

    /* eslint max-nested-callbacks: ["error", 4] */

    'use strict';

    Drupal.google_analytics = {};

    $(document).ready(function() {

        // Attach mousedown, keyup, touchstart events to document only and catch
        // clicks on all elements.
        $(document.body).on('mousedown keyup touchstart', function(event) {

            // Catch the closest surrounding link of a clicked element.
            $(event.target).closest('a,area').each(function() {

                // Is the clicked URL internal?
                if (Drupal.google_analytics.isInternal(this.href)) {
                    // Skip 'click' tracking, if custom tracking events are bound.
                    if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
                        // Do nothing here. The custom event will handle all tracking.
                        // console.info('Click on .colorbox item has been detected.');
                    }
                    // Is download tracking activated and the file extension configured
                    // for download tracking?
                    else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
                        // Download link clicked.
                        ga('send', {
                            hitType: 'event',
                            eventCategory: 'Downloads',
                            eventAction: Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(),
                            eventLabel: Drupal.google_analytics.getPageUrl(this.href),
                            transport: 'beacon'
                        });
                    } else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
                        // Keep the internal URL for Google Analytics website overlay intact.
                        ga('send', {
                            hitType: 'pageview',
                            page: Drupal.google_analytics.getPageUrl(this.href),
                            transport: 'beacon'
                        });
                    }
                } else {
                    if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
                        // Mailto link clicked.
                        ga('send', {
                            hitType: 'event',
                            eventCategory: 'Mails',
                            eventAction: 'Click',
                            eventLabel: this.href.substring(7),
                            transport: 'beacon'
                        });
                    } else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
                        if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
                            // External link clicked / No top-level cross domain clicked.
                            ga('send', {
                                hitType: 'event',
                                eventCategory: 'Outbound links',
                                eventAction: 'Click',
                                eventLabel: this.href,
                                transport: 'beacon'
                            });
                        }
                    }
                }
            });
        });

        // Track hash changes as unique pageviews, if this option has been enabled.
        if (drupalSettings.google_analytics.trackUrlFragments) {
            window.onhashchange = function() {
                ga('send', {
                    hitType: 'pageview',
                    page: location.pathname + location.search + location.hash
                });
            };
        }

        // Colorbox: This event triggers when the transition has completed and the
        // newly loaded content has been revealed.
        if (drupalSettings.google_analytics.trackColorbox) {
            $(document).on('cbox_complete', function() {
                var href = $.colorbox.element().attr('href');
                if (href) {
                    ga('send', {
                        hitType: 'pageview',
                        page: Drupal.google_analytics.getPageUrl(href)
                    });
                }
            });
        }

    });

    /**
     * Check whether the hostname is part of the cross domains or not.
     *
     * @param {string} hostname
     *   The hostname of the clicked URL.
     * @param {array} crossDomains
     *   All cross domain hostnames as JS array.
     *
     * @return {boolean} isCrossDomain
     */
    Drupal.google_analytics.isCrossDomain = function(hostname, crossDomains) {
        return $.inArray(hostname, crossDomains) > -1 ? true : false;
    };

    /**
     * Check whether this is a download URL or not.
     *
     * @param {string} url
     *   The web url to check.
     *
     * @return {boolean} isDownload
     */
    Drupal.google_analytics.isDownload = function(url) {
        var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
        return isDownload.test(url);
    };

    /**
     * Check whether this is an absolute internal URL or not.
     *
     * @param {string} url
     *   The web url to check.
     *
     * @return {boolean} isInternal
     */
    Drupal.google_analytics.isInternal = function(url) {
        var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
        return isInternal.test(url);
    };

    /**
     * Check whether this is a special URL or not.
     *
     * URL types:
     *  - gotwo.module /go/* links.
     *
     * @param {string} url
     *   The web url to check.
     *
     * @return {boolean} isInternalSpecial
     */
    Drupal.google_analytics.isInternalSpecial = function(url) {
        var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
        return isInternalSpecial.test(url);
    };

    /**
     * Extract the relative internal URL from an absolute internal URL.
     *
     * Examples:
     * - http://mydomain.com/node/1 -> /node/1
     * - http://example.com/foo/bar -> http://example.com/foo/bar
     *
     * @param {string} url
     *   The web url to check.
     *
     * @return {string} getPageUrl
     *   Internal website URL.
     */
    Drupal.google_analytics.getPageUrl = function(url) {
        var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
        return url.replace(extractInternalUrl, '');
    };

    /**
     * Extract the download file extension from the URL.
     *
     * @param {string} url
     *   The web url to check.
     *
     * @return {string} getDownloadExtension
     *   The file extension of the passed url. e.g. 'zip', 'txt'
     */
    Drupal.google_analytics.getDownloadExtension = function(url) {
        var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
        var extension = extractDownloadextension.exec(url);
        return (extension === null) ? '' : extension[1];
    };

})(jQuery, Drupal, drupalSettings);;
! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }
    var i = {};
    e.m = t, e.c = i, e.i = function(t) {
        return t
    }, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 36)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, i) {
    "use strict";

    function n() {
        return "rtl" === r()("html").attr("dir")
    }

    function s(t, e) {
        return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
    }

    function o(t) {
        var e, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
            n = document.createElement("div");
        for (var s in i) void 0 !== n.style[s] && (e = i[s]);
        return e || (e = setTimeout(function() {
            t.triggerHandler("transitionend", [t])
        }, 1), "transitionend")
    }
    i.d(e, "a", function() {
        return n
    }), i.d(e, "b", function() {
        return s
    }), i.d(e, "c", function() {
        return o
    });
    var a = i(0),
        r = i.n(a)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function o(t) {
        return s(void 0 !== t.constructor.name ? t.constructor.name : t.className)
    }
    i.d(e, "a", function() {
        return u
    });
    var a = i(0),
        r = (i.n(a), i(1)),
        l = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = function() {
            function t(e, s) {
                n(this, t), this._setup(e, s);
                var a = o(this);
                this.uuid = i.i(r.b)(6, a), this.$element.attr("data-" + a) || this.$element.attr("data-" + a, this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf." + a)
            }
            return l(t, [{
                key: "destroy",
                value: function() {
                    this._destroy();
                    var t = o(this);
                    this.$element.removeAttr("data-" + t).removeData("zfPlugin").trigger("destroyed.zf." + t);
                    for (var e in this) this[e] = null
                }
            }]), t
        }()
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !(!a()(this).is(":visible") || a()(this).attr("tabindex") < 0)
        })
    }

    function s(t) {
        var e = l[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
        return e = e.replace(/\W+/, ""), t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e = e.replace(/_$/, "")
    }
    i.d(e, "a", function() {
        return c
    });
    var o = i(0),
        a = i.n(o),
        r = i(1),
        l = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        u = {},
        c = {
            keys: function(t) {
                var e = {};
                for (var i in t) e[t[i]] = t[i];
                return e
            }(l),
            parseKey: s,
            handleKey: function(t, e, n) {
                var s, o, l, c = u[e],
                    h = this.parseKey(t);
                if (!c) return console.warn("Component not defined!");
                if (s = void 0 === c.ltr ? c : i.i(r.a)() ? a.a.extend({}, c.ltr, c.rtl) : a.a.extend({}, c.rtl, c.ltr), o = s[h], (l = n[o]) && "function" == typeof l) {
                    var d = l.apply();
                    (n.handled || "function" == typeof n.handled) && n.handled(d)
                } else(n.unhandled || "function" == typeof n.unhandled) && n.unhandled()
            },
            findFocusable: n,
            register: function(t, e) {
                u[t] = e
            },
            trapFocus: function(t) {
                var e = n(t),
                    i = e.eq(0),
                    o = e.eq(-1);
                t.on("keydown.zf.trapfocus", function(t) {
                    t.target === o[0] && "TAB" === s(t) ? (t.preventDefault(), i.focus()) : t.target === i[0] && "SHIFT_TAB" === s(t) && (t.preventDefault(), o.focus())
                })
            },
            releaseFocus: function(t) {
                t.off("keydown.zf.trapfocus")
            }
        }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        var e = {};
        return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function(t, e) {
            var i = e.replace(/\+/g, " ").split("="),
                n = i[0],
                s = i[1];
            return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s, t
        }, {}) : e
    }
    i.d(e, "a", function() {
        return r
    });
    var s = i(0),
        o = i.n(s),
        a = window.matchMedia || function() {
            var t = window.styleMedia || window.media;
            if (!t) {
                var e = document.createElement("style"),
                    i = document.getElementsByTagName("script")[0],
                    n = null;
                e.type = "text/css", e.id = "matchmediajs-test", i && i.parentNode && i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                    matchMedium: function(t) {
                        var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                        return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                    }
                }
            }
            return function(e) {
                return {
                    matches: t.matchMedium(e || "all"),
                    media: e || "all"
                }
            }
        }(),
        r = {
            queries: [],
            current: "",
            _init: function() {
                var t = this;
                o()("meta.foundation-mq").length || o()('<meta class="foundation-mq">').appendTo(document.head);
                var e, i = o()(".foundation-mq").css("font-family");
                e = n(i);
                for (var s in e) e.hasOwnProperty(s) && t.queries.push({
                    name: s,
                    value: "only screen and (min-width: " + e[s] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(t) {
                var e = this.get(t);
                return !!e && a(e).matches
            },
            is: function(t) {
                return t = t.trim().split(" "), t.length > 1 && "only" === t[1] ? t[0] === this._getCurrentSize() : this.atLeast(t[0])
            },
            get: function(t) {
                for (var e in this.queries)
                    if (this.queries.hasOwnProperty(e)) {
                        var i = this.queries[e];
                        if (t === i.name) return i.value
                    }
                return null
            },
            _getCurrentSize: function() {
                for (var t, e = 0; e < this.queries.length; e++) {
                    var i = this.queries[e];
                    a(i.value).matches && (t = i)
                }
                return "object" == typeof t ? t.name : t
            },
            _watcher: function() {
                var t = this;
                o()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
                    var e = t._getCurrentSize(),
                        i = t.current;
                    e !== i && (t.current = e, o()(window).trigger("changed.zf.mediaquery", [e, i]))
                })
            }
        }
}, function(t, e, i) {
    "use strict";

    function n(t, e, i) {
        var n = void 0,
            s = Array.prototype.slice.call(arguments, 3);
        o()(window).off(e).on(e, function(e) {
            n && clearTimeout(n), n = setTimeout(function() {
                i.apply(null, s)
            }, t || 10)
        })
    }
    i.d(e, "a", function() {
        return u
    });
    var s = i(0),
        o = i.n(s),
        a = i(6),
        r = function() {
            for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                if (t[e] + "MutationObserver" in window) return window[t[e] + "MutationObserver"];
            return !1
        }(),
        l = function(t, e) {
            t.data(e).split(" ").forEach(function(i) {
                o()("#" + i)["close" === e ? "trigger" : "triggerHandler"](e + ".zf.trigger", [t])
            })
        },
        u = {
            Listeners: {
                Basic: {},
                Global: {}
            },
            Initializers: {}
        };
    u.Listeners.Basic = {
        openListener: function() {
            l(o()(this), "open")
        },
        closeListener: function() {
            o()(this).data("close") ? l(o()(this), "close") : o()(this).trigger("close.zf.trigger")
        },
        toggleListener: function() {
            o()(this).data("toggle") ? l(o()(this), "toggle") : o()(this).trigger("toggle.zf.trigger")
        },
        closeableListener: function(t) {
            t.stopPropagation();
            var e = o()(this).data("closable");
            "" !== e ? a.a.animateOut(o()(this), e, function() {
                o()(this).trigger("closed.zf")
            }) : o()(this).fadeOut().trigger("closed.zf")
        },
        toggleFocusListener: function() {
            var t = o()(this).data("toggle-focus");
            o()("#" + t).triggerHandler("toggle.zf.trigger", [o()(this)])
        }
    }, u.Initializers.addOpenListener = function(t) {
        t.off("click.zf.trigger", u.Listeners.Basic.openListener), t.on("click.zf.trigger", "[data-open]", u.Listeners.Basic.openListener)
    }, u.Initializers.addCloseListener = function(t) {
        t.off("click.zf.trigger", u.Listeners.Basic.closeListener), t.on("click.zf.trigger", "[data-close]", u.Listeners.Basic.closeListener)
    }, u.Initializers.addToggleListener = function(t) {
        t.off("click.zf.trigger", u.Listeners.Basic.toggleListener), t.on("click.zf.trigger", "[data-toggle]", u.Listeners.Basic.toggleListener)
    }, u.Initializers.addCloseableListener = function(t) {
        t.off("close.zf.trigger", u.Listeners.Basic.closeableListener), t.on("close.zf.trigger", "[data-closeable], [data-closable]", u.Listeners.Basic.closeableListener)
    }, u.Initializers.addToggleFocusListener = function(t) {
        t.off("focus.zf.trigger blur.zf.trigger", u.Listeners.Basic.toggleFocusListener), t.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", u.Listeners.Basic.toggleFocusListener)
    }, u.Listeners.Global = {
        resizeListener: function(t) {
            r || t.each(function() {
                o()(this).triggerHandler("resizeme.zf.trigger")
            }), t.attr("data-events", "resize")
        },
        scrollListener: function(t) {
            r || t.each(function() {
                o()(this).triggerHandler("scrollme.zf.trigger")
            }), t.attr("data-events", "scroll")
        },
        closeMeListener: function(t, e) {
            var i = t.namespace.split(".")[0];
            o()("[data-" + i + "]").not('[data-yeti-box="' + e + '"]').each(function() {
                var t = o()(this);
                t.triggerHandler("close.zf.trigger", [t])
            })
        }
    }, u.Initializers.addClosemeListener = function(t) {
        var e = o()("[data-yeti-box]"),
            i = ["dropdown", "tooltip", "reveal"];
        if (t && ("string" == typeof t ? i.push(t) : "object" == typeof t && "string" == typeof t[0] ? i.concat(t) : console.error("Plugin names must be strings")), e.length) {
            var n = i.map(function(t) {
                return "closeme.zf." + t
            }).join(" ");
            o()(window).off(n).on(n, u.Listeners.Global.closeMeListener)
        }
    }, u.Initializers.addResizeListener = function(t) {
        var e = o()("[data-resize]");
        e.length && n(t, "resize.zf.trigger", u.Listeners.Global.resizeListener, e)
    }, u.Initializers.addScrollListener = function(t) {
        var e = o()("[data-scroll]");
        e.length && n(t, "scroll.zf.trigger", u.Listeners.Global.scrollListener, e)
    }, u.Initializers.addMutationEventsListener = function(t) {
        if (!r) return !1;
        var e = t.find("[data-resize], [data-scroll], [data-mutate]"),
            i = function(t) {
                var e = o()(t[0].target);
                switch (t[0].type) {
                    case "attributes":
                        "scroll" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("scrollme.zf.trigger", [e, window.pageYOffset]), "resize" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("resizeme.zf.trigger", [e]), "style" === t[0].attributeName && (e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]));
                        break;
                    case "childList":
                        e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]);
                        break;
                    default:
                        return !1
                }
            };
        if (e.length)
            for (var n = 0; n <= e.length - 1; n++) {
                var s = new r(i);
                s.observe(e[n], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
            }
    }, u.Initializers.addSimpleListeners = function() {
        var t = o()(document);
        u.Initializers.addOpenListener(t), u.Initializers.addCloseListener(t), u.Initializers.addToggleListener(t), u.Initializers.addCloseableListener(t), u.Initializers.addToggleFocusListener(t)
    }, u.Initializers.addGlobalListeners = function() {
        var t = o()(document);
        u.Initializers.addMutationEventsListener(t), u.Initializers.addResizeListener(), u.Initializers.addScrollListener(), u.Initializers.addClosemeListener()
    }, u.init = function(t, e) {
        if (void 0 === t.triggersInitialized) {
            t(document);
            "complete" === document.readyState ? (u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners()) : t(window).on("load", function() {
                u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners()
            }), t.triggersInitialized = !0
        }
        e && (e.Triggers = u, e.IHearYou = u.Initializers.addGlobalListeners)
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e, i) {
        function n(r) {
            a || (a = r), o = r - a, i.apply(e), o < t ? s = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(s), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        }
        var s, o, a = null;
        if (0 === t) return i.apply(e), void e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]);
        s = window.requestAnimationFrame(n)
    }

    function s(t, e, n, s) {
        function o() {
            t || e.hide(), c(), s && s.apply(e)
        }

        function c() {
            e[0].style.transitionDuration = 0, e.removeClass(h + " " + d + " " + n)
        }
        if (e = a()(e).eq(0), e.length) {
            var h = t ? l[0] : l[1],
                d = t ? u[0] : u[1];
            c(), e.addClass(n).css("transition", "none"), requestAnimationFrame(function() {
                e.addClass(h), t && e.show()
            }), requestAnimationFrame(function() {
                e[0].offsetWidth, e.css("transition", "").addClass(d)
            }), e.one(i.i(r.c)(e), o)
        }
    }
    i.d(e, "b", function() {
        return n
    }), i.d(e, "a", function() {
        return c
    });
    var o = i(0),
        a = i.n(o),
        r = i(1),
        l = ["mui-enter", "mui-leave"],
        u = ["mui-enter-active", "mui-leave-active"],
        c = {
            animateIn: function(t, e, i) {
                s(!0, t, e, i)
            },
            animateOut: function(t, e, i) {
                s(!1, t, e, i)
            }
        }
}, function(t, e, i) {
    "use strict";

    function n(t, e, i, n, o) {
        return 0 === s(t, e, i, n, o)
    }

    function s(t, e, i, n, s) {
        var a, r, l, u, c = o(t);
        if (e) {
            var h = o(e);
            r = h.height + h.offset.top - (c.offset.top + c.height), a = c.offset.top - h.offset.top, l = c.offset.left - h.offset.left, u = h.width + h.offset.left - (c.offset.left + c.width)
        } else r = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height), a = c.offset.top - c.windowDims.offset.top, l = c.offset.left - c.windowDims.offset.left, u = c.windowDims.width - (c.offset.left + c.width);
        return r = s ? 0 : Math.min(r, 0), a = Math.min(a, 0), l = Math.min(l, 0), u = Math.min(u, 0), i ? l + u : n ? a + r : Math.sqrt(a * a + r * r + l * l + u * u)
    }

    function o(t) {
        if ((t = t.length ? t[0] : t) === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var e = t.getBoundingClientRect(),
            i = t.parentNode.getBoundingClientRect(),
            n = document.body.getBoundingClientRect(),
            s = window.pageYOffset,
            o = window.pageXOffset;
        return {
            width: e.width,
            height: e.height,
            offset: {
                top: e.top + s,
                left: e.left + o
            },
            parentDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: i.top + s,
                    left: i.left + o
                }
            },
            windowDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: s,
                    left: o
                }
            }
        }
    }

    function a(t, e, n, s, o, a) {
        switch (console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"), n) {
            case "top":
                return i.i(l.a)() ? r(t, e, "top", "left", s, o, a) : r(t, e, "top", "right", s, o, a);
            case "bottom":
                return i.i(l.a)() ? r(t, e, "bottom", "left", s, o, a) : r(t, e, "bottom", "right", s, o, a);
            case "center top":
                return r(t, e, "top", "center", s, o, a);
            case "center bottom":
                return r(t, e, "bottom", "center", s, o, a);
            case "center left":
                return r(t, e, "left", "center", s, o, a);
            case "center right":
                return r(t, e, "right", "center", s, o, a);
            case "left bottom":
                return r(t, e, "bottom", "left", s, o, a);
            case "right bottom":
                return r(t, e, "bottom", "right", s, o, a);
            case "center":
                return {
                    left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + o,
                    top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + s)
                };
            case "reveal":
                return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2 + o,
                    top: $eleDims.windowDims.offset.top + s
                };
            case "reveal full":
                return {
                    left: $eleDims.windowDims.offset.left,
                    top: $eleDims.windowDims.offset.top
                };
            default:
                return {
                    left: i.i(l.a)() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - o : $anchorDims.offset.left + o,
                    top: $anchorDims.offset.top + $anchorDims.height + s
                }
        }
    }

    function r(t, e, i, n, s, a, r) {
        var l, u, c = o(t),
            h = e ? o(e) : null;
        switch (i) {
            case "top":
                l = h.offset.top - (c.height + s);
                break;
            case "bottom":
                l = h.offset.top + h.height + s;
                break;
            case "left":
                u = h.offset.left - (c.width + a);
                break;
            case "right":
                u = h.offset.left + h.width + a
        }
        switch (i) {
            case "top":
            case "bottom":
                switch (n) {
                    case "left":
                        u = h.offset.left + a;
                        break;
                    case "right":
                        u = h.offset.left - c.width + h.width - a;
                        break;
                    case "center":
                        u = r ? a : h.offset.left + h.width / 2 - c.width / 2 + a
                }
                break;
            case "right":
            case "left":
                switch (n) {
                    case "bottom":
                        l = h.offset.top - s + h.height - c.height;
                        break;
                    case "top":
                        l = h.offset.top + s;
                        break;
                    case "center":
                        l = h.offset.top + s + h.height / 2 - c.height / 2
                }
        }
        return {
            top: l,
            left: u
        }
    }
    i.d(e, "a", function() {
        return u
    });
    var l = i(1),
        u = {
            ImNotTouchingYou: n,
            OverlapArea: s,
            GetDimensions: o,
            GetOffsets: a,
            GetExplicitOffsets: r
        }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i() {
            0 === --n && e()
        }
        var n = t.length;
        0 === n && e(), t.each(function() {
            if (this.complete && void 0 !== this.naturalWidth) i();
            else {
                var t = new Image,
                    e = "load.zf.images error.zf.images";
                o()(t).one(e, function t(n) {
                    o()(this).off(e, t), i()
                }), t.src = o()(this).attr("src")
            }
        })
    }
    i.d(e, "a", function() {
        return n
    });
    var s = i(0),
        o = i.n(s)
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
        return o
    });
    var n = i(0),
        s = i.n(n),
        o = {
            Feather: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
                t.attr("role", "menubar");
                var i = t.find("li").attr({
                        role: "menuitem"
                    }),
                    n = "is-" + e + "-submenu",
                    o = n + "-item",
                    a = "is-" + e + "-submenu-parent",
                    r = "accordion" !== e;
                i.each(function() {
                    var t = s()(this),
                        i = t.children("ul");
                    i.length && (t.addClass(a), i.addClass("submenu " + n).attr({
                        "data-submenu": ""
                    }), r && (t.attr({
                        "aria-haspopup": !0,
                        "aria-label": t.children("a:first").text()
                    }), "drilldown" === e && t.attr({
                        "aria-expanded": !1
                    })), i.addClass("submenu " + n).attr({
                        "data-submenu": "",
                        role: "menu"
                    }), "drilldown" === e && i.attr({
                        "aria-hidden": !0
                    })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item " + o)
                })
            },
            Burn: function(t, e) {
                var i = "is-" + e + "-submenu",
                    n = i + "-item",
                    s = "is-" + e + "-submenu-parent";
                t.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
            }
        }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s() {
        this.removeEventListener("touchmove", o), this.removeEventListener("touchend", s), g = !1
    }

    function o(t) {
        if (f.a.spotSwipe.preventDefault && t.preventDefault(), g) {
            var e, i = t.touches[0].pageX,
                n = (t.touches[0].pageY, l - i);
            h = (new Date).getTime() - c, Math.abs(n) >= f.a.spotSwipe.moveThreshold && h <= f.a.spotSwipe.timeThreshold && (e = n > 0 ? "left" : "right"), e && (t.preventDefault(), s.call(this), f()(this).trigger("swipe", e).trigger("swipe" + e))
        }
    }

    function a(t) {
        1 == t.touches.length && (l = t.touches[0].pageX, u = t.touches[0].pageY, g = !0, c = (new Date).getTime(), this.addEventListener("touchmove", o, !1), this.addEventListener("touchend", s, !1))
    }

    function r() {
        this.addEventListener && this.addEventListener("touchstart", a, !1)
    }
    i.d(e, "a", function() {
        return m
    });
    var l, u, c, h, d = i(0),
        f = i.n(d),
        p = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        m = {},
        g = !1,
        v = function() {
            function t(e) {
                n(this, t), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, this._init()
            }
            return p(t, [{
                key: "_init",
                value: function() {
                    var t = this.$;
                    t.event.special.swipe = {
                        setup: r
                    }, t.each(["left", "up", "down", "right"], function() {
                        t.event.special["swipe" + this] = {
                            setup: function() {
                                t(this).on("swipe", t.noop)
                            }
                        }
                    })
                }
            }]), t
        }();
    m.setupSpotSwipe = function(t) {
        t.spotSwipe = new v(t)
    }, m.setupTouchHandler = function(t) {
        t.fn.addTouch = function() {
            this.each(function(i, n) {
                t(n).bind("touchstart touchmove touchend touchcancel", function() {
                    e(event)
                })
            });
            var e = function(t) {
                var e, i = t.changedTouches,
                    n = i[0],
                    s = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    },
                    o = s[t.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(o, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: n.screenX,
                    screenY: n.screenY,
                    clientX: n.clientX,
                    clientY: n.clientY
                }) : (e = document.createEvent("MouseEvent"), e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(e)
            }
        }
    }, m.init = function(t) {
        void 0 === t.spotSwipe && (m.setupSpotSwipe(t), m.setupTouchHandler(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(1),
        c = i(2),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Accordion", this._init(), l.a.register("Accordion", {
                        ENTER: "toggle",
                        SPACE: "toggle",
                        ARROW_DOWN: "next",
                        ARROW_UP: "previous"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this;
                    this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(t, e) {
                        var n = r()(e),
                            s = n.children("[data-tab-content]"),
                            o = s[0].id || i.i(u.b)(6, "accordion"),
                            a = e.id || o + "-label";
                        n.find("a:first").attr({
                            "aria-controls": o,
                            role: "tab",
                            id: a,
                            "aria-expanded": !1,
                            "aria-selected": !1
                        }), s.attr({
                            role: "tabpanel",
                            "aria-labelledby": a,
                            "aria-hidden": !0,
                            id: o
                        })
                    });
                    var e = this.$element.find(".is-active").children("[data-tab-content]");
                    this.firstTimeInit = !0, e.length && (this.down(e, this.firstTimeInit), this.firstTimeInit = !1), this._checkDeepLink = function() {
                        var e = window.location.hash;
                        if (e.length) {
                            var i = t.$element.find('[href$="' + e + '"]'),
                                n = r()(e);
                            if (i.length && n) {
                                if (i.parent("[data-accordion-item]").hasClass("is-active") || (t.down(n, t.firstTimeInit), t.firstTimeInit = !1), t.options.deepLinkSmudge) {
                                    var s = t;
                                    r()(window).on('load', function() {
                                        var t = s.$element.offset();
                                        r()("html, body").animate({
                                            scrollTop: t.top
                                        }, s.options.deepLinkSmudgeDelay)
                                    })
                                }
                                t.$element.trigger("deeplink.zf.accordion", [i, n])
                            }
                        }
                    }, this.options.deepLink && this._checkDeepLink(), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.$tabs.each(function() {
                        var e = r()(this),
                            i = e.children("[data-tab-content]");
                        i.length && e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                            e.preventDefault(), t.toggle(i)
                        }).on("keydown.zf.accordion", function(n) {
                            l.a.handleKey(n, "Accordion", {
                                toggle: function() {
                                    t.toggle(i)
                                },
                                next: function() {
                                    var i = e.next().find("a").focus();
                                    t.options.multiExpand || i.trigger("click.zf.accordion")
                                },
                                previous: function() {
                                    var i = e.prev().find("a").focus();
                                    t.options.multiExpand || i.trigger("click.zf.accordion")
                                },
                                handled: function() {
                                    n.preventDefault(), n.stopPropagation()
                                }
                            })
                        })
                    }), this.options.deepLink && r()(window).on("popstate", this._checkDeepLink)
                }
            }, {
                key: "toggle",
                value: function(t) {
                    if (t.closest("[data-accordion]").is("[disabled]")) return void console.info("Cannot toggle an accordion that is disabled.");
                    if (t.parent().hasClass("is-active") ? this.up(t) : this.down(t), this.options.deepLink) {
                        var e = t.prev("a").attr("href");
                        this.options.updateHistory ? history.pushState({}, "", e) : history.replaceState({}, "", e)
                    }
                }
            }, {
                key: "down",
                value: function(t, e) {
                    var i = this;
                    if (t.closest("[data-accordion]").is("[disabled]") && !e) return void console.info("Cannot call down on an accordion that is disabled.");
                    if (t.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !e) {
                        var n = this.$element.children(".is-active").children("[data-tab-content]");
                        n.length && this.up(n.not(t))
                    }
                    t.slideDown(this.options.slideSpeed, function() {
                        i.$element.trigger("down.zf.accordion", [t])
                    }), r()("#" + t.attr("aria-labelledby")).attr({
                        "aria-expanded": !0,
                        "aria-selected": !0
                    })
                }
            }, {
                key: "up",
                value: function(t) {
                    if (t.closest("[data-accordion]").is("[disabled]")) return void console.info("Cannot call up on an accordion that is disabled.");
                    var e = t.parent().siblings(),
                        i = this;
                    (this.options.allowAllClosed || e.hasClass("is-active")) && t.parent().hasClass("is-active") && (t.slideUp(i.options.slideSpeed, function() {
                        i.$element.trigger("up.zf.accordion", [t])
                    }), t.attr("aria-hidden", !0).parent().removeClass("is-active"), r()("#" + t.attr("aria-labelledby")).attr({
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }))
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && r()(window).off("popstate", this._checkDeepLink)
                }
            }]), e
        }(c.a);
    d.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return f
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(1),
        h = i(2),
        d = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), d(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "AccordionMenu", this._init(), l.a.register("AccordionMenu", {
                        ENTER: "toggle",
                        SPACE: "toggle",
                        ARROW_RIGHT: "open",
                        ARROW_UP: "up",
                        ARROW_DOWN: "down",
                        ARROW_LEFT: "close",
                        ESCAPE: "closeAll"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    u.a.Feather(this.$element, "accordion");
                    var t = this;
                    this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                        role: "tree",
                        "aria-multiselectable": this.options.multiOpen
                    }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                        var e = this.id || i.i(c.b)(6, "acc-menu-link"),
                            n = r()(this),
                            s = n.children("[data-submenu]"),
                            o = s[0].id || i.i(c.b)(6, "acc-menu"),
                            a = s.hasClass("is-active");
                        t.options.submenuToggle ? (n.addClass("has-submenu-toggle"), n.children("a").after('<button id="' + e + '" class="submenu-toggle" aria-controls="' + o + '" aria-expanded="' + a + '" title="' + t.options.submenuToggleText + '"><span class="submenu-toggle-text">' + t.options.submenuToggleText + "</span></button>")) : n.attr({
                            "aria-controls": o,
                            "aria-expanded": a,
                            id: e
                        }), s.attr({
                            "aria-labelledby": e,
                            "aria-hidden": !a,
                            role: "group",
                            id: o
                        })
                    }), this.$element.find("li").attr({
                        role: "treeitem"
                    });
                    var e = this.$element.find(".is-active");
                    if (e.length) {
                        var t = this;
                        e.each(function() {
                            t.down(r()(this))
                        })
                    }
                    this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.$element.find("li").each(function() {
                        var e = r()(this).children("[data-submenu]");
                        e.length && (t.options.submenuToggle ? r()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(i) {
                            t.toggle(e)
                        }) : r()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(i) {
                            i.preventDefault(), t.toggle(e)
                        }))
                    }).on("keydown.zf.accordionmenu", function(e) {
                        var i, n, s = r()(this),
                            o = s.parent("ul").children("li"),
                            a = s.children("[data-submenu]");
                        o.each(function(t) {
                            if (r()(this).is(s)) return i = o.eq(Math.max(0, t - 1)).find("a").first(), n = o.eq(Math.min(t + 1, o.length - 1)).find("a").first(), r()(this).children("[data-submenu]:visible").length && (n = s.find("li:first-child").find("a").first()), r()(this).is(":first-child") ? i = s.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), void(r()(this).is(":last-child") && (n = s.parents("li").first().next("li").find("a").first()))
                        }), l.a.handleKey(e, "AccordionMenu", {
                            open: function() {
                                a.is(":hidden") && (t.down(a), a.find("li").first().find("a").first().focus())
                            },
                            close: function() {
                                a.length && !a.is(":hidden") ? t.up(a) : s.parent("[data-submenu]").length && (t.up(s.parent("[data-submenu]")), s.parents("li").first().find("a").first().focus())
                            },
                            up: function() {
                                return i.focus(), !0
                            },
                            down: function() {
                                return n.focus(), !0
                            },
                            toggle: function() {
                                return !t.options.submenuToggle && (s.children("[data-submenu]").length ? (t.toggle(s.children("[data-submenu]")), !0) : void 0)
                            },
                            closeAll: function() {
                                t.hideAll()
                            },
                            handled: function(t) {
                                t && e.preventDefault(), e.stopImmediatePropagation()
                            }
                        })
                    })
                }
            }, {
                key: "hideAll",
                value: function() {
                    this.up(this.$element.find("[data-submenu]"))
                }
            }, {
                key: "showAll",
                value: function() {
                    this.down(this.$element.find("[data-submenu]"))
                }
            }, {
                key: "toggle",
                value: function(t) {
                    t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
                }
            }, {
                key: "down",
                value: function(t) {
                    var e = this;
                    this.options.multiOpen || this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))), t.addClass("is-active").attr({
                        "aria-hidden": !1
                    }), this.options.submenuToggle ? t.prev(".submenu-toggle").attr({
                        "aria-expanded": !0
                    }) : t.parent(".is-accordion-submenu-parent").attr({
                        "aria-expanded": !0
                    }), t.slideDown(e.options.slideSpeed, function() {
                        e.$element.trigger("down.zf.accordionMenu", [t])
                    })
                }
            }, {
                key: "up",
                value: function(t) {
                    var e = this;
                    t.slideUp(e.options.slideSpeed, function() {
                        e.$element.trigger("up.zf.accordionMenu", [t])
                    });
                    var i = t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                    this.options.submenuToggle ? i.prev(".submenu-toggle").attr("aria-expanded", !1) : i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), this.$element.find(".submenu-toggle").remove()), u.a.Burn(this.$element, "accordion")
                }
            }]), e
        }(h.a);
    f.defaults = {
        slideSpeed: 250,
        submenuToggle: !1,
        submenuToggleText: "Toggle menu",
        multiOpen: !0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return p
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(1),
        h = i(7),
        d = i(2),
        f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), f(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Drilldown", this._init(), l.a.register("Drilldown", {
                        ENTER: "open",
                        SPACE: "open",
                        ARROW_RIGHT: "next",
                        ARROW_UP: "up",
                        ARROW_DOWN: "down",
                        ARROW_LEFT: "previous",
                        ESCAPE: "close",
                        TAB: "down",
                        SHIFT_TAB: "up"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    u.a.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), this.$element.attr({
                        role: "tree",
                        "aria-multiselectable": !1
                    }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"), this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || i.i(c.b)(6, "drilldown")), this._prepareMenu(), this._registerEvents(), this._keyboardEvents()
                }
            }, {
                key: "_prepareMenu",
                value: function() {
                    var t = this;
                    this.$submenuAnchors.each(function() {
                        var e = r()(this),
                            i = e.parent();
                        t.options.parentLink && e.clone().prependTo(i.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), e.data("savedHref", e.attr("href")).removeAttr("href").attr("tabindex", 0), e.children("[data-submenu]").attr({
                            "aria-hidden": !0,
                            tabindex: 0,
                            role: "group"
                        }), t._events(e)
                    }), this.$submenus.each(function() {
                        var e = r()(this);
                        if (!e.find(".js-drilldown-back").length) switch (t.options.backButtonPosition) {
                            case "bottom":
                                e.append(t.options.backButton);
                                break;
                            case "top":
                                e.prepend(t.options.backButton);
                                break;
                            default:
                                console.error("Unsupported backButtonPosition value '" + t.options.backButtonPosition + "'")
                        }
                        t._back(e)
                    }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = r()(this.options.wrapper).addClass("is-drilldown"), this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims())
                }
            }, {
                key: "_resize",
                value: function() {
                    this.$wrapper.css({
                        "max-width": "none",
                        "min-height": "none"
                    }), this.$wrapper.css(this._getMaxDims())
                }
            }, {
                key: "_events",
                value: function(t) {
                    var e = this;
                    t.off("click.zf.drilldown").on("click.zf.drilldown", function(i) {
                        if (r()(i.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (i.stopImmediatePropagation(), i.preventDefault()), e._show(t.parent("li")), e.options.closeOnClick) {
                            var n = r()("body");
                            n.off(".zf.drilldown").on("click.zf.drilldown", function(t) {
                                t.target === e.$element[0] || r.a.contains(e.$element[0], t.target) || (t.preventDefault(), e._hideAll(), n.off(".zf.drilldown"))
                            })
                        }
                    })
                }
            }, {
                key: "_registerEvents",
                value: function() {
                    this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler)), this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
                }
            }, {
                key: "_scrollTop",
                value: function() {
                    var t = this,
                        e = "" != t.options.scrollTopElement ? r()(t.options.scrollTopElement) : t.$element,
                        i = parseInt(e.offset().top + t.options.scrollTopOffset, 10);
                    r()("html, body").stop(!0).animate({
                        scrollTop: i
                    }, t.options.animationDuration, t.options.animationEasing, function() {
                        this === r()("html")[0] && t.$element.trigger("scrollme.zf.drilldown")
                    })
                }
            }, {
                key: "_keyboardEvents",
                value: function() {
                    var t = this;
                    this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e) {
                        var n, s, o = r()(this),
                            a = o.parent("li").parent("ul").children("li").children("a");
                        a.each(function(t) {
                            if (r()(this).is(o)) return n = a.eq(Math.max(0, t - 1)), void(s = a.eq(Math.min(t + 1, a.length - 1)))
                        }), l.a.handleKey(e, "Drilldown", {
                            next: function() {
                                if (o.is(t.$submenuAnchors)) return t._show(o.parent("li")), o.parent("li").one(i.i(c.c)(o), function() {
                                    o.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                                }), !0
                            },
                            previous: function() {
                                return t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(i.i(c.c)(o), function() {
                                    setTimeout(function() {
                                        o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                    }, 1)
                                }), !0
                            },
                            up: function() {
                                return n.focus(), !o.is(t.$element.find("> li:first-child > a"))
                            },
                            down: function() {
                                return s.focus(), !o.is(t.$element.find("> li:last-child > a"))
                            },
                            close: function() {
                                o.is(t.$element.find("> li > a")) || (t._hide(o.parent().parent()), o.parent().parent().siblings("a").focus())
                            },
                            open: function() {
                                return o.is(t.$menuItems) ? o.is(t.$submenuAnchors) ? (t._show(o.parent("li")), o.parent("li").one(i.i(c.c)(o), function() {
                                    o.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                                }), !0) : void 0 : (t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(i.i(c.c)(o), function() {
                                    setTimeout(function() {
                                        o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                    }, 1)
                                }), !0)
                            },
                            handled: function(t) {
                                t && e.preventDefault(), e.stopImmediatePropagation()
                            }
                        })
                    })
                }
            }, {
                key: "_hideAll",
                value: function() {
                    var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                    this.options.autoHeight && this.$wrapper.css({
                        height: t.parent().closest("ul").data("calcHeight")
                    }), t.one(i.i(c.c)(t), function(e) {
                        t.removeClass("is-active is-closing")
                    }), this.$element.trigger("closed.zf.drilldown")
                }
            }, {
                key: "_back",
                value: function(t) {
                    var e = this;
                    t.off("click.zf.drilldown"), t.children(".js-drilldown-back").on("click.zf.drilldown", function(i) {
                        i.stopImmediatePropagation(), e._hide(t);
                        var n = t.parent("li").parent("ul").parent("li");
                        n.length && e._show(n)
                    })
                }
            }, {
                key: "_menuLinkEvents",
                value: function() {
                    var t = this;
                    this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                        setTimeout(function() {
                            t._hideAll()
                        }, 0)
                    })
                }
            }, {
                key: "_show",
                value: function(t) {
                    this.options.autoHeight && this.$wrapper.css({
                        height: t.children("[data-submenu]").data("calcHeight")
                    }), t.attr("aria-expanded", !0), t.children("[data-submenu]").addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), this.$element.trigger("open.zf.drilldown", [t])
                }
            }, {
                key: "_hide",
                value: function(t) {
                    this.options.autoHeight && this.$wrapper.css({
                        height: t.parent().closest("ul").data("calcHeight")
                    });
                    t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0).addClass("is-closing"), t.addClass("is-closing").one(i.i(c.c)(t), function() {
                        t.removeClass("is-active is-closing"), t.blur().addClass("invisible")
                    }), t.trigger("hide.zf.drilldown", [t])
                }
            }, {
                key: "_getMaxDims",
                value: function() {
                    var t = 0,
                        e = {},
                        i = this;
                    return this.$submenus.add(this.$element).each(function() {
                        var n = (r()(this).children("li").length, h.a.GetDimensions(this).height);
                        t = n > t ? n : t, i.options.autoHeight && (r()(this).data("calcHeight", n), r()(this).hasClass("is-drilldown-submenu") || (e.height = n))
                    }), this.options.autoHeight || (e["min-height"] = t + "px"), e["max-width"] = this.$element[0].getBoundingClientRect().width + "px", e
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), this._hideAll(), this.$element.off("mutateme.zf.trigger"), u.a.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                        r()(this).off(".zf.drilldown")
                    }), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                        var t = r()(this);
                        t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
                    })
                }
            }]), e
        }(d.a);
    p.defaults = {
        autoApplyClass: !0,
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return p
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(7),
        h = i(1),
        d = i(2),
        f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), f(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "DropdownMenu", this._init(), l.a.register("DropdownMenu", {
                        ENTER: "open",
                        SPACE: "open",
                        ARROW_RIGHT: "next",
                        ARROW_UP: "up",
                        ARROW_DOWN: "down",
                        ARROW_LEFT: "previous",
                        ESCAPE: "close"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    u.a.Feather(this.$element, "dropdown");
                    var t = this.$element.find("li.is-dropdown-submenu-parent");
                    this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || i.i(h.a)() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : (this.options.alignment = "left", t.addClass("opens-right")) : "right" === this.options.alignment ? t.addClass("opens-left") : t.addClass("opens-right"), this.changed = !1, this._events()
                }
            }, {
                key: "_isVertical",
                value: function() {
                    return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction")
                }
            }, {
                key: "_isRtl",
                value: function() {
                    return this.$element.hasClass("align-right") || i.i(h.a)() && !this.$element.hasClass("align-left")
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this,
                        e = "ontouchstart" in window || void 0 !== window.ontouchstart,
                        i = "is-dropdown-submenu-parent",
                        n = function(n) {
                            var s = r()(n.target).parentsUntil("ul", "." + i),
                                o = s.hasClass(i),
                                a = "true" === s.attr("data-is-click"),
                                l = s.children(".is-dropdown-submenu");
                            if (o)
                                if (a) {
                                    if (!t.options.closeOnClick || !t.options.clickOpen && !e || t.options.forceFollow && e) return;
                                    n.stopImmediatePropagation(), n.preventDefault(), t._hide(s)
                                } else n.preventDefault(), n.stopImmediatePropagation(), t._show(l), s.add(s.parentsUntil(t.$element, "." + i)).attr("data-is-click", !0)
                        };
                    (this.options.clickOpen || e) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", n), t.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(e) {
                        r()(this).hasClass(i) || t._hide()
                    }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                        var n = r()(this);
                        n.hasClass(i) && (clearTimeout(n.data("_delay")), n.data("_delay", setTimeout(function() {
                            t._show(n.children(".is-dropdown-submenu"))
                        }, t.options.hoverDelay)))
                    }).on("mouseleave.zf.dropdownmenu", function(e) {
                        var n = r()(this);
                        if (n.hasClass(i) && t.options.autoclose) {
                            if ("true" === n.attr("data-is-click") && t.options.clickOpen) return !1;
                            clearTimeout(n.data("_delay")), n.data("_delay", setTimeout(function() {
                                t._hide(n)
                            }, t.options.closingTime))
                        }
                    }), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                        var i, n, s = r()(e.target).parentsUntil("ul", '[role="menuitem"]'),
                            o = t.$tabs.index(s) > -1,
                            a = o ? t.$tabs : s.siblings("li").add(s);
                        a.each(function(t) {
                            if (r()(this).is(s)) return i = a.eq(t - 1), void(n = a.eq(t + 1))
                        });
                        var u = function() {
                                n.children("a:first").focus(), e.preventDefault()
                            },
                            c = function() {
                                i.children("a:first").focus(), e.preventDefault()
                            },
                            h = function() {
                                var i = s.children("ul.is-dropdown-submenu");
                                i.length && (t._show(i), s.find("li > a:first").focus(), e.preventDefault())
                            },
                            d = function() {
                                var i = s.parent("ul").parent("li");
                                i.children("a:first").focus(), t._hide(i), e.preventDefault()
                            },
                            f = {
                                open: h,
                                close: function() {
                                    t._hide(t.$element), t.$menuItems.eq(0).children("a").focus(), e.preventDefault()
                                },
                                handled: function() {
                                    e.stopImmediatePropagation()
                                }
                            };
                        o ? t._isVertical() ? t._isRtl() ? r.a.extend(f, {
                            down: u,
                            up: c,
                            next: d,
                            previous: h
                        }) : r.a.extend(f, {
                            down: u,
                            up: c,
                            next: h,
                            previous: d
                        }) : t._isRtl() ? r.a.extend(f, {
                            next: c,
                            previous: u,
                            down: h,
                            up: d
                        }) : r.a.extend(f, {
                            next: u,
                            previous: c,
                            down: h,
                            up: d
                        }) : t._isRtl() ? r.a.extend(f, {
                            next: d,
                            previous: h,
                            down: u,
                            up: c
                        }) : r.a.extend(f, {
                            next: h,
                            previous: d,
                            down: u,
                            up: c
                        }), l.a.handleKey(e, "DropdownMenu", f)
                    })
                }
            }, {
                key: "_addBodyHandler",
                value: function() {
                    var t = r()(document.body),
                        e = this;
                    t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(i) {
                        e.$element.find(i.target).length || (e._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                    })
                }
            }, {
                key: "_show",
                value: function(t) {
                    var e = this.$tabs.index(this.$tabs.filter(function(e, i) {
                            return r()(i).find(t).length > 0
                        })),
                        i = t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                    this._hide(i, e), t.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                    var n = c.a.ImNotTouchingYou(t, null, !0);
                    if (!n) {
                        var s = "left" === this.options.alignment ? "-right" : "-left",
                            o = t.parent(".is-dropdown-submenu-parent");
                        o.removeClass("opens" + s).addClass("opens-" + this.options.alignment), n = c.a.ImNotTouchingYou(t, null, !0), n || o.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                    }
                    t.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [t])
                }
            }, {
                key: "_hide",
                value: function(t, e) {
                    var i;
                    if (i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t, i) {
                            return t === e
                        }) : this.$element, i.hasClass("is-active") || i.find(".is-active").length > 0) {
                        if (i.find("li.is-active").add(i).attr({
                                "data-is-click": !1
                            }).removeClass("is-active"), i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                            var n = "left" === this.options.alignment ? "right" : "left";
                            i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + n), this.changed = !1
                        }
                        this.$element.trigger("hide.zf.dropdownmenu", [i])
                    }
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), r()(document.body).off(".zf.dropdownmenu"), u.a.Burn(this.$element, "dropdown")
                }
            }]), e
        }(d.a);
    p.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "auto",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        var i = e.indexOf(t);
        return i === e.length - 1 ? e[0] : e[i + 1]
    }
    i.d(e, "a", function() {
        return m
    });
    var r = i(7),
        l = i(2),
        u = i(1),
        c = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        h = ["left", "right", "top", "bottom"],
        d = ["top", "bottom", "center"],
        f = ["left", "right", "center"],
        p = {
            left: d,
            right: d,
            top: f,
            bottom: f
        },
        m = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), c(e, [{
                key: "_init",
                value: function() {
                    this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment
                }
            }, {
                key: "_getDefaultPosition",
                value: function() {
                    return "bottom"
                }
            }, {
                key: "_getDefaultAlignment",
                value: function() {
                    switch (this.position) {
                        case "bottom":
                        case "top":
                            return i.i(u.a)() ? "right" : "left";
                        case "left":
                        case "right":
                            return "bottom"
                    }
                }
            }, {
                key: "_reposition",
                value: function() {
                    this._alignmentsExhausted(this.position) ? (this.position = a(this.position, h), this.alignment = p[this.position][0]) : this._realign()
                }
            }, {
                key: "_realign",
                value: function() {
                    this._addTriedPosition(this.position, this.alignment), this.alignment = a(this.alignment, p[this.position])
                }
            }, {
                key: "_addTriedPosition",
                value: function(t, e) {
                    this.triedPositions[t] = this.triedPositions[t] || [], this.triedPositions[t].push(e)
                }
            }, {
                key: "_positionsExhausted",
                value: function() {
                    for (var t = !0, e = 0; e < h.length; e++) t = t && this._alignmentsExhausted(h[e]);
                    return t
                }
            }, {
                key: "_alignmentsExhausted",
                value: function(t) {
                    return this.triedPositions[t] && this.triedPositions[t].length == p[t].length
                }
            }, {
                key: "_getVOffset",
                value: function() {
                    return this.options.vOffset
                }
            }, {
                key: "_getHOffset",
                value: function() {
                    return this.options.hOffset
                }
            }, {
                key: "_setPosition",
                value: function(t, e, i) {
                    if ("false" === t.attr("aria-expanded")) return !1;
                    r.a.GetDimensions(e), r.a.GetDimensions(t);
                    if (e.offset(r.a.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset())), !this.options.allowOverlap) {
                        for (var n = 1e8, s = {
                                position: this.position,
                                alignment: this.alignment
                            }; !this._positionsExhausted();) {
                            var o = r.a.OverlapArea(e, i, !1, !1, this.options.allowBottomOverlap);
                            if (0 === o) return;
                            o < n && (n = o, s = {
                                position: this.position,
                                alignment: this.alignment
                            }), this._reposition(), e.offset(r.a.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                        }
                        this.position = s.position, this.alignment = s.alignment, e.offset(r.a.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                    }
                }
            }]), e
        }(l.a);
    m.defaults = {
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        vOffset: 0,
        hOffset: 0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return h
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(2),
        c = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        h = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), c(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "SmoothScroll", this._init()
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this.$element[0].id || i.i(l.b)(6, "smooth-scroll");
                    this.$element.attr({
                        id: t
                    }), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this,
                        i = function(i) {
                            if (!r()(this).is('a[href^="#"]')) return !1;
                            var n = this.getAttribute("href");
                            t._inTransition = !0, e.scrollToLoc(n, t.options, function() {
                                t._inTransition = !1
                            }), i.preventDefault()
                        };
                    this.$element.on("click.zf.smoothScroll", i), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', i)
                }
            }], [{
                key: "scrollToLoc",
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.defaults,
                        n = arguments[2];
                    if (!r()(t).length) return !1;
                    var s = Math.round(r()(t).offset().top - i.threshold / 2 - i.offset);
                    r()("html, body").stop(!0).animate({
                        scrollTop: s
                    }, i.animationDuration, i.animationEasing, function() {
                        n && "function" == typeof n && n()
                    })
                }
            }]), e
        }(u.a);
    h.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(8),
        c = i(2),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Tabs", this._init(), l.a.register("Tabs", {
                        ENTER: "open",
                        SPACE: "open",
                        ARROW_RIGHT: "next",
                        ARROW_UP: "previous",
                        ARROW_DOWN: "next",
                        ARROW_LEFT: "previous"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this,
                        e = this;
                    if (this.$element.attr({
                            role: "tablist"
                        }), this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = r()('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                            var t = r()(this),
                                i = t.find("a"),
                                n = t.hasClass("" + e.options.linkActiveClass),
                                s = i.attr("data-tabs-target") || i[0].hash.slice(1),
                                o = i[0].id ? i[0].id : s + "-label",
                                a = r()("#" + s);
                            t.attr({
                                role: "presentation"
                            }), i.attr({
                                role: "tab",
                                "aria-controls": s,
                                "aria-selected": n,
                                id: o,
                                tabindex: n ? "0" : "-1"
                            }), a.attr({
                                role: "tabpanel",
                                "aria-labelledby": o
                            }), n || a.attr("aria-hidden", "true"), n && e.options.autoFocus && r()(window).on('load', function() {
                                r()("html, body").animate({
                                    scrollTop: t.offset().top
                                }, e.options.deepLinkSmudgeDelay, function() {
                                    i.focus()
                                })
                            })
                        }), this.options.matchHeight) {
                        var n = this.$tabContent.find("img");
                        n.length ? i.i(u.a)(n, this._setHeight.bind(this)) : this._setHeight()
                    }
                    this._checkDeepLink = function() {
                        var e = window.location.hash;
                        if (e.length) {
                            var i = t.$element.find('[href$="' + e + '"]');
                            if (i.length) {
                                if (t.selectTab(r()(e), !0), t.options.deepLinkSmudge) {
                                    var n = t.$element.offset();
                                    r()("html, body").animate({
                                        scrollTop: n.top
                                    }, t.options.deepLinkSmudgeDelay)
                                }
                                t.$element.trigger("deeplink.zf.tabs", [i, r()(e)])
                            }
                        }
                    }, this.options.deepLink && this._checkDeepLink(), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), r()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && r()(window).on("popstate", this._checkDeepLink)
                }
            }, {
                key: "_addClickHandler",
                value: function() {
                    var t = this;
                    this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
                        e.preventDefault(), e.stopPropagation(), t._handleTabChange(r()(this))
                    })
                }
            }, {
                key: "_addKeyHandler",
                value: function() {
                    var t = this;
                    this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                        if (9 !== e.which) {
                            var i, n, s = r()(this),
                                o = s.parent("ul").children("li");
                            o.each(function(e) {
                                if (r()(this).is(s)) return void(t.options.wrapOnKeys ? (i = 0 === e ? o.last() : o.eq(e - 1), n = e === o.length - 1 ? o.first() : o.eq(e + 1)) : (i = o.eq(Math.max(0, e - 1)), n = o.eq(Math.min(e + 1, o.length - 1))))
                            }), l.a.handleKey(e, "Tabs", {
                                open: function() {
                                    s.find('[role="tab"]').focus(), t._handleTabChange(s)
                                },
                                previous: function() {
                                    i.find('[role="tab"]').focus(), t._handleTabChange(i)
                                },
                                next: function() {
                                    n.find('[role="tab"]').focus(), t._handleTabChange(n)
                                },
                                handled: function() {
                                    e.stopPropagation(), e.preventDefault()
                                }
                            })
                        }
                    })
                }
            }, {
                key: "_handleTabChange",
                value: function(t, e) {
                    if (t.hasClass("" + this.options.linkActiveClass)) return void(this.options.activeCollapse && (this._collapseTab(t), this.$element.trigger("collapse.zf.tabs", [t])));
                    var i = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass),
                        n = t.find('[role="tab"]'),
                        s = n.attr("data-tabs-target") || n[0].hash.slice(1),
                        o = this.$tabContent.find("#" + s);
                    if (this._collapseTab(i), this._openTab(t), this.options.deepLink && !e) {
                        var a = t.find("a").attr("href");
                        this.options.updateHistory ? history.pushState({}, "", a) : history.replaceState({}, "", a)
                    }
                    this.$element.trigger("change.zf.tabs", [t, o]), o.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
            }, {
                key: "_openTab",
                value: function(t) {
                    var e = t.find('[role="tab"]'),
                        i = e.attr("data-tabs-target") || e[0].hash.slice(1),
                        n = this.$tabContent.find("#" + i);
                    t.addClass("" + this.options.linkActiveClass), e.attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }), n.addClass("" + this.options.panelActiveClass).removeAttr("aria-hidden")
                }
            }, {
                key: "_collapseTab",
                value: function(t) {
                    var e = t.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                        "aria-selected": "false",
                        tabindex: -1
                    });
                    r()("#" + e.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                        "aria-hidden": "true"
                    })
                }
            }, {
                key: "selectTab",
                value: function(t, e) {
                    var i;
                    i = "object" == typeof t ? t[0].id : t, i.indexOf("#") < 0 && (i = "#" + i);
                    var n = this.$tabTitles.find('[href$="' + i + '"]').parent("." + this.options.linkClass);
                    this._handleTabChange(n, e)
                }
            }, {
                key: "_setHeight",
                value: function() {
                    var t = 0,
                        e = this;
                    this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                        var i = r()(this),
                            n = i.hasClass("" + e.options.panelActiveClass);
                        n || i.css({
                            visibility: "hidden",
                            display: "block"
                        });
                        var s = this.getBoundingClientRect().height;
                        n || i.css({
                            visibility: "",
                            display: ""
                        }), t = s > t ? s : t
                    }).css("height", t + "px")
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && r()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && r()(window).off("popstate", this._checkDeepLink)
                }
            }]), e
        }(c.a);
    d.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e, i) {
        var n, s, o = this,
            a = e.duration,
            r = Object.keys(t.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(s), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(s), l = l <= 0 ? a : l, t.data("paused", !1), n = Date.now(), s = setTimeout(function() {
                e.infinite && o.restart(), i && "function" == typeof i && i()
            }, l), t.trigger("timerstart.zf." + r)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(s), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf." + r)
        }
    }
    i.d(e, "a", function() {
        return n
    });
    var s = i(0);
    i.n(s)
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        s = i.n(n),
        o = i(21),
        a = i(1),
        r = i(7),
        l = i(8),
        u = i(3),
        c = i(4),
        h = i(6),
        d = i(9),
        f = i(18),
        p = i(10),
        m = i(5),
        g = i(20),
        v = i(11),
        b = i(12),
        y = i(13),
        w = i(22),
        _ = i(14),
        $ = i(23),
        k = i(24),
        C = i(25),
        z = i(26),
        O = i(27),
        T = i(29),
        E = i(30),
        P = i(31),
        A = i(32),
        F = i(16),
        x = i(33),
        D = i(17),
        S = i(34),
        R = i(35),
        H = i(28);
    o.a.addToJquery(s.a), o.a.rtl = a.a, o.a.GetYoDigits = a.b, o.a.transitionend = a.c, o.a.Box = r.a, o.a.onImagesLoaded = l.a, o.a.Keyboard = u.a, o.a.MediaQuery = c.a, o.a.Motion = h.a, o.a.Move = h.b, o.a.Nest = d.a, o.a.Timer = f.a, p.a.init(s.a), m.a.init(s.a, o.a), o.a.plugin(g.a, "Abide"), o.a.plugin(v.a, "Accordion"), o.a.plugin(b.a, "AccordionMenu"), o.a.plugin(y.a, "Drilldown"), o.a.plugin(w.a, "Dropdown"), o.a.plugin(_.a, "DropdownMenu"), o.a.plugin($.a, "Equalizer"), o.a.plugin(k.a, "Interchange"), o.a.plugin(C.a, "Magellan"), o.a.plugin(z.a, "OffCanvas"), o.a.plugin(O.a, "Orbit"), o.a.plugin(T.a, "ResponsiveMenu"), o.a.plugin(E.a, "ResponsiveToggle"), o.a.plugin(P.a, "Reveal"), o.a.plugin(A.a, "Slider"), o.a.plugin(F.a, "SmoothScroll"), o.a.plugin(x.a, "Sticky"), o.a.plugin(D.a, "Tabs"), o.a.plugin(S.a, "Toggler"), o.a.plugin(R.a, "Tooltip"), o.a.plugin(H.a, "ResponsiveAccordionTabs")
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return c
    });
    var a = i(0),
        r = i.n(a),
        l = i(2),
        u = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        c = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), u(e, [{
                key: "_setup",
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.$element = t, this.options = r.a.extend(!0, {}, e.defaults, this.$element.data(), i), this.className = "Abide", this._init()
                }
            }, {
                key: "_init",
                value: function() {
                    this.$inputs = this.$element.find("input, textarea, select"), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.$element.off(".abide").on("reset.zf.abide", function() {
                        t.resetForm()
                    }).on("submit.zf.abide", function() {
                        return t.validateForm()
                    }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                        t.validateInput(r()(e.target))
                    }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                        t.validateInput(r()(e.target))
                    }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                        t.validateInput(r()(e.target))
                    })
                }
            }, {
                key: "_reflow",
                value: function() {
                    this._init()
                }
            }, {
                key: "requiredCheck",
                value: function(t) {
                    if (!t.attr("required")) return !0;
                    var e = !0;
                    switch (t[0].type) {
                        case "checkbox":
                            e = t[0].checked;
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            var i = t.find("option:selected");
                            i.length && i.val() || (e = !1);
                            break;
                        default:
                            t.val() && t.val().length || (e = !1)
                    }
                    return e
                }
            }, {
                key: "findFormError",
                value: function(t) {
                    var e = t[0].id,
                        i = t.siblings(this.options.formErrorSelector);
                    return i.length || (i = t.parent().find(this.options.formErrorSelector)), i = i.add(this.$element.find('[data-form-error-for="' + e + '"]'))
                }
            }, {
                key: "findLabel",
                value: function(t) {
                    var e = t[0].id,
                        i = this.$element.find('label[for="' + e + '"]');
                    return i.length ? i : t.closest("label")
                }
            }, {
                key: "findRadioLabels",
                value: function(t) {
                    var e = this,
                        i = t.map(function(t, i) {
                            var n = i.id,
                                s = e.$element.find('label[for="' + n + '"]');
                            return s.length || (s = r()(i).closest("label")), s[0]
                        });
                    return r()(i)
                }
            }, {
                key: "addErrorClasses",
                value: function(t) {
                    var e = this.findLabel(t),
                        i = this.findFormError(t);
                    e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
                }
            }, {
                key: "removeRadioErrorClasses",
                value: function(t) {
                    var e = this.$element.find(':radio[name="' + t + '"]'),
                        i = this.findRadioLabels(e),
                        n = this.findFormError(e);
                    i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
                }
            }, {
                key: "removeErrorClasses",
                value: function(t) {
                    if ("radio" == t[0].type) return this.removeRadioErrorClasses(t.attr("name"));
                    var e = this.findLabel(t),
                        i = this.findFormError(t);
                    e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
                }
            }, {
                key: "validateInput",
                value: function(t) {
                    var e = this.requiredCheck(t),
                        i = !1,
                        n = !0,
                        s = t.attr("data-validator"),
                        o = !0;
                    if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]') || t.is("[disabled]")) return !0;
                    switch (t[0].type) {
                        case "radio":
                            i = this.validateRadio(t.attr("name"));
                            break;
                        case "checkbox":
                            i = e;
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            i = e;
                            break;
                        default:
                            i = this.validateText(t)
                    }
                    s && (n = this.matchValidation(t, s, t.attr("required"))), t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                    var a = -1 === [e, i, n, o].indexOf(!1),
                        l = (a ? "valid" : "invalid") + ".zf.abide";
                    if (a) {
                        var u = this.$element.find('[data-equalto="' + t.attr("id") + '"]');
                        if (u.length) {
                            var c = this;
                            u.each(function() {
                                r()(this).val() && c.validateInput(r()(this))
                            })
                        }
                    }
                    return this[a ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(l, [t]), a
                }
            }, {
                key: "validateForm",
                value: function() {
                    var t = [],
                        e = this;
                    this.$inputs.each(function() {
                        t.push(e.validateInput(r()(this)))
                    });
                    var i = -1 === t.indexOf(!1);
                    return this.$element.find("[data-abide-error]").css("display", i ? "none" : "block"), this.$element.trigger((i ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), i
                }
            }, {
                key: "validateText",
                value: function(t, e) {
                    e = e || t.attr("pattern") || t.attr("type");
                    var i = t.val(),
                        n = !1;
                    return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e === t.attr("type") || new RegExp(e).test(i) : t.prop("required") || (n = !0), n
                }
            }, {
                key: "validateRadio",
                value: function(t) {
                    var e = this.$element.find(':radio[name="' + t + '"]'),
                        i = !1,
                        n = !1;
                    return e.each(function(t, e) {
                        r()(e).attr("required") && (n = !0)
                    }), n || (i = !0), i || e.each(function(t, e) {
                        r()(e).prop("checked") && (i = !0)
                    }), i
                }
            }, {
                key: "matchValidation",
                value: function(t, e, i) {
                    var n = this;
                    return i = !!i, -1 === e.split(" ").map(function(e) {
                        return n.options.validators[e](t, i, t.parent())
                    }).indexOf(!1)
                }
            }, {
                key: "resetForm",
                value: function() {
                    var t = this.$element,
                        e = this.options;
                    r()("." + e.labelErrorClass, t).not("small").removeClass(e.labelErrorClass), r()("." + e.inputErrorClass, t).not("small").removeClass(e.inputErrorClass), r()(e.formErrorSelector + "." + e.formErrorClass).removeClass(e.formErrorClass), t.find("[data-abide-error]").css("display", "none"), r()(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), r()(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), r()(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), t.trigger("formreset.zf.abide", [t])
                }
            }, {
                key: "_destroy",
                value: function() {
                    var t = this;
                    this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                        t.removeErrorClasses(r()(this))
                    })
                }
            }]), e
        }(l.a);
    c.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
                test: function(t) {
                    return c.defaults.patterns.domain.test(t) || c.defaults.patterns.url.test(t)
                }
            }
        },
        validators: {
            equalTo: function(t, e, i) {
                return r()("#" + t.attr("data-equalto")).val() === t.val()
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/,
                i = e.exec(t.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function s(t) {
        return "true" === t || "false" !== t && (isNaN(1 * t) ? t : parseFloat(t))
    }

    function o(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    i.d(e, "a", function() {
        return c
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(4),
        c = {
            version: "6.4.3",
            _plugins: {},
            _uuids: [],
            plugin: function(t, e) {
                var i = e || n(t),
                    s = o(i);
                this._plugins[s] = this[i] = t
            },
            registerPlugin: function(t, e) {
                var s = e ? o(e) : n(t.constructor).toLowerCase();
                t.uuid = i.i(l.b)(6, s), t.$element.attr("data-" + s) || t.$element.attr("data-" + s, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + s), this._uuids.push(t.uuid)
            },
            unregisterPlugin: function(t) {
                var e = o(n(t.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + e).removeData("zfPlugin").trigger("destroyed.zf." + e);
                for (var i in t) t[i] = null
            },
            reInit: function(t) {
                var e = t instanceof r.a;
                try {
                    if (e) t.each(function() {
                        r()(this).data("zfPlugin")._init()
                    });
                    else {
                        var i = typeof t,
                            n = this;
                        ({
                            object: function(t) {
                                t.forEach(function(t) {
                                    t = o(t), r()("[data-" + t + "]").foundation("_init")
                                })
                            },
                            string: function() {
                                t = o(t), r()("[data-" + t + "]").foundation("_init")
                            },
                            undefined: function() {
                                this.object(Object.keys(n._plugins))
                            }
                        })[i](t)
                    }
                } catch (t) {
                    console.error(t)
                } finally {
                    return t
                }
            },
            reflow: function(t, e) {
                void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [e]);
                var i = this;
                r.a.each(e, function(e, n) {
                    var o = i._plugins[n];
                    r()(t).find("[data-" + n + "]").addBack("[data-" + n + "]").each(function() {
                        var t = r()(this),
                            e = {};
                        if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + n + " on an element that already has a Foundation plugin.");
                        t.attr("data-options") && t.attr("data-options").split(";").forEach(function(t, i) {
                            var n = t.split(":").map(function(t) {
                                return t.trim()
                            });
                            n[0] && (e[n[0]] = s(n[1]))
                        });
                        try {
                            t.data("zfPlugin", new o(r()(this), e))
                        } catch (t) {
                            console.error(t)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: n,
            addToJquery: function(t) {
                var e = function(e) {
                    var i = typeof e,
                        s = t(".no-js");
                    if (s.length && s.removeClass("no-js"), "undefined" === i) u.a._init(), c.reflow(this);
                    else {
                        if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                        var o = Array.prototype.slice.call(arguments, 1),
                            a = this.data("zfPlugin");
                        if (void 0 === a || void 0 === a[e]) throw new ReferenceError("We're sorry, '" + e + "' is not an available method for " + (a ? n(a) : "this element") + ".");
                        1 === this.length ? a[e].apply(a, o) : this.each(function(i, n) {
                            a[e].apply(t(n).data("zfPlugin"), o)
                        })
                    }
                    return this
                };
                return t.fn.foundation = e, t
            }
        };
    c.util = {
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var n = this,
                        s = arguments;
                    null === i && (i = setTimeout(function() {
                        t.apply(n, s), i = null
                    }, e))
                }
            }
        }, window.Foundation = c,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() {
                        t(n = i)
                    }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                s = function() {
                    return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
        })
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return p
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(1),
        c = i(15),
        h = i(5),
        d = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === s) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, i, n)
            }
            if ("value" in s) return s.value;
            var a = s.get;
            if (void 0 !== a) return a.call(n)
        },
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), d(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Dropdown", h.a.init(r.a), this._init(), l.a.register("Dropdown", {
                        ENTER: "open",
                        SPACE: "open",
                        ESCAPE: "close"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this.$element.attr("id");
                    this.$anchors = r()('[data-toggle="' + t + '"]').length ? r()('[data-toggle="' + t + '"]') : r()('[data-open="' + t + '"]'), this.$anchors.attr({
                        "aria-controls": t,
                        "data-is-focus": !1,
                        "data-yeti-box": t,
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null, this.$element.attr({
                        "aria-hidden": "true",
                        "data-yeti-box": t,
                        "data-resize": t,
                        "aria-labelledby": this.$currentAnchor.id || i.i(u.b)(6, "dd-anchor")
                    }), f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_init", this).call(this), this._events()
                }
            }, {
                key: "_getDefaultPosition",
                value: function() {
                    var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                    return t ? t[0] : "bottom"
                }
            }, {
                key: "_getDefaultAlignment",
                value: function() {
                    var t = /float-(\S+)/.exec(this.$currentAnchor.className);
                    return t ? t[1] : f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_getDefaultAlignment", this).call(this)
                }
            }, {
                key: "_setPosition",
                value: function() {
                    f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent)
                }
            }, {
                key: "_setCurrentAnchor",
                value: function(t) {
                    this.$currentAnchor = r()(t)
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "close.zf.trigger": this.close.bind(this),
                        "toggle.zf.trigger": this.toggle.bind(this),
                        "resizeme.zf.trigger": this._setPosition.bind(this)
                    }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
                        t._setCurrentAnchor(this)
                    }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                        t._setCurrentAnchor(this);
                        var e = r()("body").data();
                        void 0 !== e.whatinput && "mouse" !== e.whatinput || (clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                            t.open(), t.$anchors.data("hover", !0)
                        }, t.options.hoverDelay))
                    }).on("mouseleave.zf.dropdown", function() {
                        clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                            t.close(), t.$anchors.data("hover", !1)
                        }, t.options.hoverDelay)
                    }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                        clearTimeout(t.timeout)
                    }).on("mouseleave.zf.dropdown", function() {
                        clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                            t.close(), t.$anchors.data("hover", !1)
                        }, t.options.hoverDelay)
                    })), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e) {
                        var i = r()(this);
                        l.a.findFocusable(t.$element);
                        l.a.handleKey(e, "Dropdown", {
                            open: function() {
                                i.is(t.$anchors) && (t.open(), t.$element.attr("tabindex", -1).focus(), e.preventDefault())
                            },
                            close: function() {
                                t.close(), t.$anchors.focus()
                            }
                        })
                    })
                }
            }, {
                key: "_addBodyHandler",
                value: function() {
                    var t = r()(document.body).not(this.$element),
                        e = this;
                    t.off("click.zf.dropdown").on("click.zf.dropdown", function(i) {
                        e.$anchors.is(i.target) || e.$anchors.find(i.target).length || e.$element.find(i.target).length || (e.close(), t.off("click.zf.dropdown"))
                    })
                }
            }, {
                key: "open",
                value: function() {
                    if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                            "aria-expanded": !0
                        }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                            "aria-hidden": !1
                        }), this.options.autoFocus) {
                        var t = l.a.findFocusable(this.$element);
                        t.length && t.eq(0).focus()
                    }
                    this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && l.a.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element])
                }
            }, {
                key: "close",
                value: function() {
                    if (!this.$element.hasClass("is-open")) return !1;
                    this.$element.removeClass("is-open").attr({
                        "aria-hidden": !0
                    }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && l.a.releaseFocus(this.$element)
                }
            }, {
                key: "toggle",
                value: function() {
                    if (this.$element.hasClass("is-open")) {
                        if (this.$anchors.data("hover")) return;
                        this.close()
                    } else this.open()
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), r()(document.body).off("click.zf.dropdown")
                }
            }]), e
        }(c.a);
    p.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 0,
        hOffset: 0,
        positionClass: "",
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return f
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(8),
        c = i(1),
        h = i(2),
        d = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), d(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Equalizer", this._init()
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this.$element.attr("data-equalizer") || "",
                        e = this.$element.find('[data-equalizer-watch="' + t + '"]');
                    l.a._init(), this.$watched = e.length ? e : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || i.i(c.b)(6, "eq")), this.$element.attr("data-mutate", t || i.i(c.b)(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                        onResizeMeBound: this._onResizeMe.bind(this),
                        onPostEqualizedBound: this._onPostEqualized.bind(this)
                    };
                    var n, s = this.$element.find("img");
                    this.options.equalizeOn ? (n = this._checkMQ(), r()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && !1 === n || void 0 === n) && (s.length ? i.i(u.a)(s, this._reflow.bind(this)) : this._reflow())
                }
            }, {
                key: "_pauseEvents",
                value: function() {
                    this.isOn = !1, this.$element.off({
                        ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                        "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                        "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                    })
                }
            }, {
                key: "_onResizeMe",
                value: function(t) {
                    this._reflow()
                }
            }, {
                key: "_onPostEqualized",
                value: function(t) {
                    t.target !== this.$element[0] && this._reflow()
                }
            }, {
                key: "_events",
                value: function() {
                    this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0
                }
            }, {
                key: "_checkMQ",
                value: function() {
                    var t = !l.a.is(this.options.equalizeOn);
                    return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t
                }
            }, {
                key: "_killswitch",
                value: function() {}
            }, {
                key: "_reflow",
                value: function() {
                    if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
                    this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
                }
            }, {
                key: "_isStacked",
                value: function() {
                    return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
                }
            }, {
                key: "getHeights",
                value: function(t) {
                    for (var e = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
                    t(e)
                }
            }, {
                key: "getHeightsByRow",
                value: function(t) {
                    var e = this.$watched.length ? this.$watched.first().offset().top : 0,
                        i = [],
                        n = 0;
                    i[n] = [];
                    for (var s = 0, o = this.$watched.length; s < o; s++) {
                        this.$watched[s].style.height = "auto";
                        var a = r()(this.$watched[s]).offset().top;
                        a != e && (n++, i[n] = [], e = a), i[n].push([this.$watched[s], this.$watched[s].offsetHeight])
                    }
                    for (var l = 0, u = i.length; l < u; l++) {
                        var c = r()(i[l]).map(function() {
                                return this[1]
                            }).get(),
                            h = Math.max.apply(null, c);
                        i[l].push(h)
                    }
                    t(i)
                }
            }, {
                key: "applyHeight",
                value: function(t) {
                    var e = Math.max.apply(null, t);
                    this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
                }
            }, {
                key: "applyHeightByRow",
                value: function(t) {
                    this.$element.trigger("preequalized.zf.equalizer");
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t[e].length,
                            s = t[e][n - 1];
                        if (n <= 2) r()(t[e][0][0]).css({
                            height: "auto"
                        });
                        else {
                            this.$element.trigger("preequalizedrow.zf.equalizer");
                            for (var o = 0, a = n - 1; o < a; o++) r()(t[e][o][0]).css({
                                height: s
                            });
                            this.$element.trigger("postequalizedrow.zf.equalizer")
                        }
                    }
                    this.$element.trigger("postequalized.zf.equalizer")
                }
            }, {
                key: "_destroy",
                value: function() {
                    this._pauseEvents(), this.$watched.css("height", "auto")
                }
            }]), e
        }(h.a);
    f.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(2),
        c = i(1),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, i), this.rules = [], this.currentPath = "", this.className = "Interchange", this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    l.a._init();
                    var t = this.$element[0].id || i.i(c.b)(6, "interchange");
                    this.$element.attr({
                        "data-resize": t,
                        id: t
                    }), this._addBreakpoints(), this._generateRules(), this._reflow()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                        return t._reflow()
                    })
                }
            }, {
                key: "_reflow",
                value: function() {
                    var t;
                    for (var e in this.rules)
                        if (this.rules.hasOwnProperty(e)) {
                            var i = this.rules[e];
                            window.matchMedia(i.query).matches && (t = i)
                        }
                    t && this.replace(t.path)
                }
            }, {
                key: "_addBreakpoints",
                value: function() {
                    for (var t in l.a.queries)
                        if (l.a.queries.hasOwnProperty(t)) {
                            var i = l.a.queries[t];
                            e.SPECIAL_QUERIES[i.name] = i.value
                        }
                }
            }, {
                key: "_generateRules",
                value: function(t) {
                    var i, n = [];
                    i = this.options.rules ? this.options.rules : this.$element.data("interchange"), i = "string" == typeof i ? i.match(/\[.*?\]/g) : i;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var o = i[s].slice(1, -1).split(", "),
                                a = o.slice(0, -1).join(""),
                                r = o[o.length - 1];
                            e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]), n.push({
                                path: a,
                                query: r
                            })
                        }
                    this.rules = n
                }
            }, {
                key: "replace",
                value: function(t) {
                    if (this.currentPath !== t) {
                        var e = this,
                            i = "replaced.zf.interchange";
                        "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
                            e.currentPath = t
                        }).trigger(i) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                            "background-image": "url(" + t + ")"
                        }).trigger(i)) : r.a.get(t, function(n) {
                            e.$element.html(n).trigger(i), r()(n).foundation(), e.currentPath = t
                        })
                    }
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.off("resizeme.zf.trigger")
                }
            }]), e
        }(u.a);
    d.defaults = {
        rules: null
    }, d.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(2),
        c = i(16),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Magellan", this._init(), this.calcPoints()
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this.$element[0].id || i.i(l.b)(6, "magellan");
                    this.$targets = r()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                        "data-resize": t,
                        "data-scroll": t,
                        id: t
                    }), this.$active = r()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
                }
            }, {
                key: "calcPoints",
                value: function() {
                    var t = this,
                        e = document.body,
                        i = document.documentElement;
                    this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, i.clientHeight)), this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)), this.$targets.each(function() {
                        var e = r()(this),
                            i = Math.round(e.offset().top - t.options.threshold);
                        e.targetPoint = i, t.points.push(i)
                    })
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    r()("html, body"), t.options.animationDuration, t.options.animationEasing;
                    r()(window).one("load", function() {
                        t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
                    }), this.$element.on({
                        "resizeme.zf.trigger": this.reflow.bind(this),
                        "scrollme.zf.trigger": this._updateActive.bind(this)
                    }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                        e.preventDefault();
                        var i = this.getAttribute("href");
                        t.scrollToLoc(i)
                    }), this._deepLinkScroll = function(e) {
                        t.options.deepLinking && t.scrollToLoc(window.location.hash)
                    }, r()(window).on("popstate", this._deepLinkScroll)
                }
            }, {
                key: "scrollToLoc",
                value: function(t) {
                    this._inTransition = !0;
                    var e = this,
                        i = {
                            animationEasing: this.options.animationEasing,
                            animationDuration: this.options.animationDuration,
                            threshold: this.options.threshold,
                            offset: this.options.offset
                        };
                    c.a.scrollToLoc(t, i, function() {
                        e._inTransition = !1, e._updateActive()
                    })
                }
            }, {
                key: "reflow",
                value: function() {
                    this.calcPoints(), this._updateActive()
                }
            }, {
                key: "_updateActive",
                value: function() {
                    if (!this._inTransition) {
                        var t, e = parseInt(window.pageYOffset, 10);
                        if (e + this.winHeight === this.docHeight) t = this.points.length - 1;
                        else if (e < this.points[0]) t = void 0;
                        else {
                            var i = this.scrollPos < e,
                                n = this,
                                s = this.points.filter(function(t, s) {
                                    return i ? t - n.options.offset <= e : t - n.options.offset - n.options.threshold <= e
                                });
                            t = s.length ? s.length - 1 : 0
                        }
                        if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(t).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
                            var o = "";
                            void 0 != t && (o = this.$active[0].getAttribute("href")), o !== window.location.hash && (window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o)
                        }
                        this.scrollPos = e, this.$element.trigger("update.zf.magellan", [this.$active])
                    }
                }
            }, {
                key: "_destroy",
                value: function() {
                    if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                        var t = this.$active[0].getAttribute("href");
                        window.location.hash.replace(t, "")
                    }
                    r()(window).off("popstate", this._deepLinkScroll)
                }
            }]), e
        }(u.a);
    d.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        offset: 0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return p
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(4),
        c = i(1),
        h = i(2),
        d = i(5),
        f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), f(e, [{
                key: "_setup",
                value: function(t, i) {
                    var n = this;
                    this.className = "OffCanvas", this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.contentClasses = {
                        base: [],
                        reveal: []
                    }, this.$lastTrigger = r()(), this.$triggers = r()(), this.position = "left", this.$content = r()(), this.nested = !!this.options.nested, r()(["push", "overlap"]).each(function(t, e) {
                        n.contentClasses.base.push("has-transition-" + e)
                    }), r()(["left", "right", "top", "bottom"]).each(function(t, e) {
                        n.contentClasses.base.push("has-position-" + e), n.contentClasses.reveal.push("has-reveal-" + e)
                    }), d.a.init(r.a), u.a._init(), this._init(), this._events(), l.a.register("OffCanvas", {
                        ESCAPE: "close"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    var t = this.$element.attr("id");
                    if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = r()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-" + this.options.transition + " is-closed"), this.$triggers = r()(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay) {
                        var e = document.createElement("div"),
                            i = "fixed" === r()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                        e.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = r()(e), "is-overlay-fixed" === i ? r()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
                    }
                    this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), !0 === this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this._removeContentClasses()
                }
            }, {
                key: "_events",
                value: function() {
                    if (this.$element.off(".zf.trigger .zf.offcanvas").on({
                            "open.zf.trigger": this.open.bind(this),
                            "close.zf.trigger": this.close.bind(this),
                            "toggle.zf.trigger": this.toggle.bind(this),
                            "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                        }), !0 === this.options.closeOnClick) {
                        (this.options.contentOverlay ? this.$overlay : this.$content).on({
                            "click.zf.offcanvas": this.close.bind(this)
                        })
                    }
                }
            }, {
                key: "_setMQChecker",
                value: function() {
                    var t = this;
                    r()(window).on("changed.zf.mediaquery", function() {
                        u.a.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1)
                    }).one("load.zf.offcanvas", function() {
                        u.a.atLeast(t.options.revealOn) && t.reveal(!0)
                    })
                }
            }, {
                key: "_removeContentClasses",
                value: function(t) {
                    "boolean" != typeof t ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === t && this.$content.removeClass("has-reveal-" + this.position)
                }
            }, {
                key: "_addContentClasses",
                value: function(t) {
                    this._removeContentClasses(t), "boolean" != typeof t ? this.$content.addClass("has-transition-" + this.options.transition + " has-position-" + this.position) : !0 === t && this.$content.addClass("has-reveal-" + this.position)
                }
            }, {
                key: "reveal",
                value: function(t) {
                    t ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                        "open.zf.trigger": this.open.bind(this),
                        "toggle.zf.trigger": this.toggle.bind(this)
                    }), this.$element.addClass("is-closed")), this._addContentClasses(t)
                }
            }, {
                key: "_stopScrolling",
                value: function(t) {
                    return !1
                }
            }, {
                key: "_recordScrollable",
                value: function(t) {
                    var e = this;
                    e.scrollHeight !== e.clientHeight && (0 === e.scrollTop && (e.scrollTop = 1), e.scrollTop === e.scrollHeight - e.clientHeight && (e.scrollTop = e.scrollHeight - e.clientHeight - 1)), e.allowUp = e.scrollTop > 0, e.allowDown = e.scrollTop < e.scrollHeight - e.clientHeight, e.lastY = t.originalEvent.pageY
                }
            }, {
                key: "_stopScrollPropagation",
                value: function(t) {
                    var e = this,
                        i = t.pageY < e.lastY,
                        n = !i;
                    e.lastY = t.pageY, i && e.allowUp || n && e.allowDown ? t.stopPropagation() : t.preventDefault()
                }
            }, {
                key: "open",
                value: function(t, e) {
                    if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                        var n = this;
                        e && (this.$lastTrigger = e), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (r()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(i.i(c.c)(this.$element), function() {
                            if (n.$element.hasClass("is-open")) {
                                var t = n.$element.find("[data-autofocus]");
                                t.length ? t.eq(0).focus() : n.$element.find("a, button").eq(0).focus()
                            }
                        }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), l.a.trapFocus(this.$element)), this._addContentClasses()
                    }
                }
            }, {
                key: "close",
                value: function(t) {
                    if (this.$element.hasClass("is-open") && !this.isRevealed) {
                        var e = this;
                        this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !1 === this.options.contentScroll && (r()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), l.a.releaseFocus(this.$element)), this.$element.one(i.i(c.c)(this.$element), function(t) {
                            e.$element.addClass("is-closed"), e._removeContentClasses()
                        })
                    }
                }
            }, {
                key: "toggle",
                value: function(t, e) {
                    this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
                }
            }, {
                key: "_handleKeyboard",
                value: function(t) {
                    var e = this;
                    l.a.handleKey(t, "OffCanvas", {
                        close: function() {
                            return e.close(), e.$lastTrigger.focus(), !0
                        },
                        handled: function() {
                            t.stopPropagation(), t.preventDefault()
                        }
                    })
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas")
                }
            }]), e
        }(h.a);
    p.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return g
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(6),
        c = i(18),
        h = i(8),
        d = i(1),
        f = i(2),
        p = i(10),
        m = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        g = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), m(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Orbit", p.a.init(r.a), this._init(), l.a.register("Orbit", {
                        ltr: {
                            ARROW_RIGHT: "next",
                            ARROW_LEFT: "previous"
                        },
                        rtl: {
                            ARROW_LEFT: "next",
                            ARROW_RIGHT: "previous"
                        }
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    this._reset(), this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                    var t = this.$element.find("img"),
                        e = this.$slides.filter(".is-active"),
                        n = this.$element[0].id || i.i(d.b)(6, "orbit");
                    this.$element.attr({
                        "data-resize": n,
                        id: n
                    }), e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? i.i(h.a)(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
                }
            }, {
                key: "_loadBullets",
                value: function() {
                    this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
                }
            }, {
                key: "geoSync",
                value: function() {
                    var t = this;
                    this.timer = new c.a(this.$element, {
                        duration: this.options.timerDelay,
                        infinite: !1
                    }, function() {
                        t.changeSlide(!0)
                    }), this.timer.start()
                }
            }, {
                key: "_prepareForOrbit",
                value: function() {
                    this._setWrapperHeight()
                }
            }, {
                key: "_setWrapperHeight",
                value: function(t) {
                    var e, i = 0,
                        n = 0,
                        s = this;
                    this.$slides.each(function() {
                        e = this.getBoundingClientRect().height, r()(this).attr("data-slide", n), /mui/g.test(r()(this)[0].className) || s.$slides.filter(".is-active")[0] === s.$slides.eq(n)[0] || r()(this).css({
                            position: "relative",
                            display: "none"
                        }), i = e > i ? e : i, n++
                    }), n === this.$slides.length && (this.$wrapper.css({
                        height: i
                    }), t && t(i))
                }
            }, {
                key: "_setSlideHeight",
                value: function(t) {
                    this.$slides.each(function() {
                        r()(this).css("max-height", t)
                    })
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    if (this.$element.off(".resizeme.zf.trigger").on({
                            "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                        }), this.$slides.length > 1) {
                        if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                                e.preventDefault(), t.changeSlide(!0)
                            }).on("swiperight.zf.orbit", function(e) {
                                e.preventDefault(), t.changeSlide(!1)
                            }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                                t.$element.data("clickedOn", !t.$element.data("clickedOn")), t.timer[t.$element.data("clickedOn") ? "pause" : "start"]()
                            }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                                t.timer.pause()
                            }).on("mouseleave.zf.orbit", function() {
                                t.$element.data("clickedOn") || t.timer.start()
                            })), this.options.navButtons) {
                            this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e) {
                                e.preventDefault(), t.changeSlide(r()(this).hasClass(t.options.nextClass))
                            })
                        }
                        this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                            if (/is-active/g.test(this.className)) return !1;
                            var e = r()(this).data("slide"),
                                i = e > t.$slides.filter(".is-active").data("slide"),
                                n = t.$slides.eq(e);
                            t.changeSlide(i, n, e)
                        }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
                            l.a.handleKey(e, "Orbit", {
                                next: function() {
                                    t.changeSlide(!0)
                                },
                                previous: function() {
                                    t.changeSlide(!1)
                                },
                                handled: function() {
                                    r()(e.target).is(t.$bullets) && t.$bullets.filter(".is-active").focus()
                                }
                            })
                        })
                    }
                }
            }, {
                key: "_reset",
                value: function() {
                    void 0 !== this.$slides && this.$slides.length > 1 && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), this.options.autoPlay && this.timer.restart(), this.$slides.each(function(t) {
                        r()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
                    }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]), this.options.bullets && this._updateBullets(0))
                }
            }, {
                key: "changeSlide",
                value: function(t, e, i) {
                    if (this.$slides) {
                        var n = this.$slides.filter(".is-active").eq(0);
                        if (/mui/g.test(n[0].className)) return !1;
                        var s, o = this.$slides.first(),
                            a = this.$slides.last(),
                            r = t ? "Right" : "Left",
                            l = t ? "Left" : "Right",
                            c = this;
                        s = e || (t ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : a : n.prev("." + this.options.slideClass)), s.length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]), this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), this.options.useMUI && !this.$element.is(":hidden") ? (u.a.animateIn(s.addClass("is-active").css({
                            position: "absolute",
                            top: 0
                        }), this.options["animInFrom" + r], function() {
                            s.css({
                                position: "relative",
                                display: "block"
                            }).attr("aria-live", "polite")
                        }), u.a.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function() {
                            n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                        })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [s]))
                    }
                }
            }, {
                key: "_updateBullets",
                value: function(t) {
                    var e = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),
                        i = e.find("span:last").detach();
                    this.$bullets.eq(t).addClass("is-active").append(i)
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()
                }
            }]), e
        }(f.a);
    g.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return m
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(1),
        c = i(2),
        h = i(11),
        d = i(17),
        f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        p = {
            tabs: {
                cssClass: "tabs",
                plugin: d.a
            },
            accordion: {
                cssClass: "accordion",
                plugin: h.a
            }
        },
        m = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), f(e, [{
                key: "_setup",
                value: function(t, e) {
                    this.$element = r()(t), this.options = r.a.extend({}, this.$element.data(), e), this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", i.i(u.b)(6, "responsiveaccordiontabs")), this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    if (l.a._init(), "string" == typeof this.rules) {
                        for (var t = {}, e = this.rules.split(" "), i = 0; i < e.length; i++) {
                            var n = e[i].split("-"),
                                s = n.length > 1 ? n[0] : "small",
                                o = n.length > 1 ? n[1] : n[0];
                            null !== p[o] && (t[s] = p[o])
                        }
                        this.rules = t
                    }
                    this._getAllOptions(), r.a.isEmptyObject(this.rules) || this._checkMediaQueries()
                }
            }, {
                key: "_getAllOptions",
                value: function() {
                    var t = this;
                    t.allOptions = {};
                    for (var e in p)
                        if (p.hasOwnProperty(e)) {
                            var i = p[e];
                            try {
                                var n = r()("<ul></ul>"),
                                    s = new i.plugin(n, t.options);
                                for (var o in s.options)
                                    if (s.options.hasOwnProperty(o) && "zfPlugin" !== o) {
                                        var a = s.options[o];
                                        t.allOptions[o] = a
                                    }
                                s.destroy()
                            } catch (t) {}
                        }
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    r()(window).on("changed.zf.mediaquery", function() {
                        t._checkMediaQueries()
                    })
                }
            }, {
                key: "_checkMediaQueries",
                value: function() {
                    var t, e = this;
                    r.a.each(this.rules, function(e) {
                        l.a.atLeast(e) && (t = e)
                    }), t && (this.currentPlugin instanceof this.rules[t].plugin || (r.a.each(p, function(t, i) {
                        e.$element.removeClass(i.cssClass)
                    }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(this.rules[t].cssClass), this.currentPlugin = new this.rules[t].plugin(this.$element, {}), this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
                }
            }, {
                key: "_handleMarkup",
                value: function(t) {
                    var e = this,
                        n = "accordion",
                        s = r()("[data-tabs-content=" + this.$element.attr("id") + "]");
                    if (s.length && (n = "tabs"), n !== t) {
                        var o = e.allOptions.linkClass ? e.allOptions.linkClass : "tabs-title",
                            a = e.allOptions.panelClass ? e.allOptions.panelClass : "tabs-panel";
                        this.$element.removeAttr("role");
                        var l = this.$element.children("." + o + ",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),
                            c = l.children("a").removeClass("accordion-title");
                        if ("tabs" === n ? (s = s.children("." + a).removeClass(a).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby"), s.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected")) : s = l.children("[data-tab-content]").removeClass("accordion-content"), s.css({
                                display: "",
                                visibility: ""
                            }), l.css({
                                display: "",
                                visibility: ""
                            }), "accordion" === t) s.each(function(t, i) {
                            r()(i).appendTo(l.get(t)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                                height: ""
                            }), r()("[data-tabs-content=" + e.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + e.$element.attr("id") + '"></div>').detach(), l.addClass("accordion-item").attr("data-accordion-item", ""), c.addClass("accordion-title")
                        });
                        else if ("tabs" === t) {
                            var h = r()("[data-tabs-content=" + e.$element.attr("id") + "]"),
                                d = r()("#tabs-placeholder-" + e.$element.attr("id"));
                            d.length ? (h = r()('<div class="tabs-content"></div>').insertAfter(d).attr("data-tabs-content", e.$element.attr("id")), d.remove()) : h = r()('<div class="tabs-content"></div>').insertAfter(e.$element).attr("data-tabs-content", e.$element.attr("id")), s.each(function(t, e) {
                                var n = r()(e).appendTo(h).addClass(a),
                                    s = c.get(t).hash.slice(1),
                                    o = r()(e).attr("id") || i.i(u.b)(6, "accordion");
                                s !== o && ("" !== s ? r()(e).attr("id", s) : (s = o, r()(e).attr("id", s), r()(c.get(t)).attr("href", r()(c.get(t)).attr("href").replace("#", "") + "#" + s))), r()(l.get(t)).hasClass("is-active") && n.addClass("is-active")
                            }), l.addClass(o)
                        }
                    }
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.currentPlugin && this.currentPlugin.destroy(), r()(window).off(".zf.ResponsiveAccordionTabs")
                }
            }]), e
        }(c.a);
    m.defaults = {}
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return g
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(1),
        c = i(2),
        h = i(14),
        d = i(13),
        f = i(12),
        p = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        m = {
            dropdown: {
                cssClass: "dropdown",
                plugin: h.a
            },
            drilldown: {
                cssClass: "drilldown",
                plugin: d.a
            },
            accordion: {
                cssClass: "accordion-menu",
                plugin: f.a
            }
        },
        g = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), p(e, [{
                key: "_setup",
                value: function(t, e) {
                    this.$element = r()(t), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    if (l.a._init(), "string" == typeof this.rules) {
                        for (var t = {}, e = this.rules.split(" "), n = 0; n < e.length; n++) {
                            var s = e[n].split("-"),
                                o = s.length > 1 ? s[0] : "small",
                                a = s.length > 1 ? s[1] : s[0];
                            null !== m[a] && (t[o] = m[a])
                        }
                        this.rules = t
                    }
                    r.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || i.i(u.b)(6, "responsive-menu"))
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    r()(window).on("changed.zf.mediaquery", function() {
                        t._checkMediaQueries()
                    })
                }
            }, {
                key: "_checkMediaQueries",
                value: function() {
                    var t, e = this;
                    r.a.each(this.rules, function(e) {
                        l.a.atLeast(e) && (t = e)
                    }), t && (this.currentPlugin instanceof this.rules[t].plugin || (r.a.each(m, function(t, i) {
                        e.$element.removeClass(i.cssClass)
                    }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {})))
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.currentPlugin.destroy(), r()(window).off(".zf.ResponsiveMenu")
                }
            }]), e
        }(c.a);
    g.defaults = {}
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(6),
        c = i(2),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = r()(t), this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "ResponsiveToggle", this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    l.a._init();
                    var t = this.$element.data("responsive-toggle");
                    if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = r()("#" + t), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                            var e = r()(this).data("toggle");
                            return e === t || "" === e
                        }), this.options = r.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate) {
                        var e = this.options.animate.split(" ");
                        this.animationIn = e[0], this.animationOut = e[1] || null
                    }
                    this._update()
                }
            }, {
                key: "_events",
                value: function() {
                    this._updateMqHandler = this._update.bind(this), r()(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
                }
            }, {
                key: "_update",
                value: function() {
                    l.a.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
                }
            }, {
                key: "toggleMenu",
                value: function() {
                    var t = this;
                    l.a.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? u.a.animateIn(this.$targetMenu, this.animationIn, function() {
                        t.$element.trigger("toggled.zf.responsiveToggle"), t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
                    }) : u.a.animateOut(this.$targetMenu, this.animationOut, function() {
                        t.$element.trigger("toggled.zf.responsiveToggle")
                    }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle")))
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), r()(window).off("changed.zf.mediaquery", this._updateMqHandler)
                }
            }]), e
        }(c.a);
    d.defaults = {
        hideFor: "medium",
        animate: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function r() {
        return /Android/.test(window.navigator.userAgent)
    }

    function l() {
        return a() || r()
    }
    i.d(e, "a", function() {
        return v
    });
    var u = i(0),
        c = i.n(u),
        h = i(3),
        d = i(4),
        f = i(6),
        p = i(2),
        m = i(5),
        g = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        v = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), g(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = c.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Reveal", this._init(), m.a.init(c.a), h.a.register("Reveal", {
                        ESCAPE: "close"
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    d.a._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                        mq: d.a.current
                    }, this.isMobile = l(), this.$anchor = c()('[data-open="' + this.id + '"]').length ? c()('[data-open="' + this.id + '"]') : c()('[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                        "aria-controls": this.id,
                        "aria-haspopup": !0,
                        tabindex: 0
                    }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                        role: "dialog",
                        "aria-hidden": !0,
                        "data-yeti-box": this.id,
                        "data-resize": this.id
                    }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(c()(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && c()(window).one("load.zf.reveal", this.open.bind(this))
                }
            }, {
                key: "_makeOverlay",
                value: function() {
                    var t = "";
                    return this.options.additionalOverlayClasses && (t = " " + this.options.additionalOverlayClasses), c()("<div></div>").addClass("reveal-overlay" + t).appendTo(this.options.appendTo)
                }
            }, {
                key: "_updatePosition",
                value: function() {
                    var t, e, i = this.$element.outerWidth(),
                        n = c()(window).width(),
                        s = this.$element.outerHeight(),
                        o = c()(window).height();
                    t = "auto" === this.options.hOffset ? parseInt((n - i) / 2, 10) : parseInt(this.options.hOffset, 10), e = "auto" === this.options.vOffset ? s > o ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - s) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                        top: e + "px"
                    }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                        left: t + "px"
                    }), this.$element.css({
                        margin: "0px"
                    }))
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this,
                        e = this;
                    this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "close.zf.trigger": function(i, n) {
                            if (i.target === e.$element[0] || c()(i.target).parents("[data-closable]")[0] === n) return t.close.apply(t)
                        },
                        "toggle.zf.trigger": this.toggle.bind(this),
                        "resizeme.zf.trigger": function() {
                            e._updatePosition()
                        }
                    }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(t) {
                        t.target !== e.$element[0] && !c.a.contains(e.$element[0], t.target) && c.a.contains(document, t.target) && e.close()
                    }), this.options.deepLink && c()(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
                }
            }, {
                key: "_handleState",
                value: function(t) {
                    window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
                }
            }, {
                key: "open",
                value: function() {
                    function t() {
                        n.isMobile ? (n.originalScrollPos || (n.originalScrollPos = window.pageYOffset), c()("html, body").addClass("is-reveal-open")) : c()("body").addClass("is-reveal-open")
                    }
                    var e = this;
                    if (this.options.deepLink) {
                        var i = "#" + this.id;
                        window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", i) : window.history.replaceState({}, "", i) : window.location.hash = i
                    }
                    this.isActive = !0, this.$element.css({
                        visibility: "hidden"
                    }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                        visibility: "hidden"
                    }).show(), this._updatePosition(), this.$element.hide().css({
                        visibility: ""
                    }), this.$overlay && (this.$overlay.css({
                        visibility: ""
                    }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                    var n = this;
                    if (this.options.animationIn) {
                        var s = function() {
                            n.$element.attr({
                                "aria-hidden": !1,
                                tabindex: -1
                            }).focus(), t(), h.a.trapFocus(n.$element)
                        };
                        this.options.overlay && f.a.animateIn(this.$overlay, "fade-in"), f.a.animateIn(this.$element, this.options.animationIn, function() {
                            e.$element && (e.focusableElements = h.a.findFocusable(e.$element), s())
                        })
                    } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                    this.$element.attr({
                        "aria-hidden": !1,
                        tabindex: -1
                    }).focus(), h.a.trapFocus(this.$element), t(), this._extraHandlers(), this.$element.trigger("open.zf.reveal")
                }
            }, {
                key: "_extraHandlers",
                value: function() {
                    var t = this;
                    this.$element && (this.focusableElements = h.a.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || c()("body").on("click.zf.reveal", function(e) {
                        e.target !== t.$element[0] && !c.a.contains(t.$element[0], e.target) && c.a.contains(document, e.target) && t.close()
                    }), this.options.closeOnEsc && c()(window).on("keydown.zf.reveal", function(e) {
                        h.a.handleKey(e, "Reveal", {
                            close: function() {
                                t.options.closeOnEsc && t.close()
                            }
                        })
                    }))
                }
            }, {
                key: "close",
                value: function() {
                    function t() {
                        e.isMobile ? (0 === c()(".reveal:visible").length && c()("html, body").removeClass("is-reveal-open"), e.originalScrollPos && (c()("body").scrollTop(e.originalScrollPos), e.originalScrollPos = null)) : 0 === c()(".reveal:visible").length && c()("body").removeClass("is-reveal-open"), h.a.releaseFocus(e.$element), e.$element.attr("aria-hidden", !0), e.$element.trigger("closed.zf.reveal")
                    }
                    if (!this.isActive || !this.$element.is(":visible")) return !1;
                    var e = this;
                    this.options.animationOut ? (this.options.overlay && f.a.animateOut(this.$overlay, "fade-out"), f.a.animateOut(this.$element, this.options.animationOut, t)) : (this.$element.hide(this.options.hideDelay), this.options.overlay ? this.$overlay.hide(0, t) : t()), this.options.closeOnEsc && c()(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && c()("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, e.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = ""), this.$anchor.focus()
                }
            }, {
                key: "toggle",
                value: function() {
                    this.isActive ? this.close() : this.open()
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.options.overlay && (this.$element.appendTo(c()(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), c()(window).off(".zf.reveal:" + this.id)
                }
            }]), e
        }(p.a);
    v.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        updateHistory: !1,
        appendTo: "body",
        additionalOverlayClasses: ""
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        return t / e
    }

    function r(t, e, i, n) {
        return Math.abs(t.position()[e] + t[n]() / 2 - i)
    }

    function l(t, e) {
        return Math.log(e) / Math.log(t)
    }
    i.d(e, "a", function() {
        return b
    });
    var u = i(0),
        c = i.n(u),
        h = i(3),
        d = i(6),
        f = i(1),
        p = i(2),
        m = i(10),
        g = i(5),
        v = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        b = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), v(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = c.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Slider", m.a.init(c.a), g.a.init(c.a), this._init(), h.a.register("Slider", {
                        ltr: {
                            ARROW_RIGHT: "increase",
                            ARROW_UP: "increase",
                            ARROW_DOWN: "decrease",
                            ARROW_LEFT: "decrease",
                            SHIFT_ARROW_RIGHT: "increase_fast",
                            SHIFT_ARROW_UP: "increase_fast",
                            SHIFT_ARROW_DOWN: "decrease_fast",
                            SHIFT_ARROW_LEFT: "decrease_fast",
                            HOME: "min",
                            END: "max"
                        },
                        rtl: {
                            ARROW_LEFT: "increase",
                            ARROW_RIGHT: "decrease",
                            SHIFT_ARROW_LEFT: "increase_fast",
                            SHIFT_ARROW_RIGHT: "decrease_fast"
                        }
                    })
                }
            }, {
                key: "_init",
                value: function() {
                    this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : c()("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                    (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = c()().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : c()("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), !0, this._setInitAttr(1)), this.setHandles(), this._events()
                }
            }, {
                key: "setHandles",
                value: function() {
                    var t = this;
                    this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                        t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0)
                    }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0)
                }
            }, {
                key: "_reflow",
                value: function() {
                    this.setHandles()
                }
            }, {
                key: "_pctOfBar",
                value: function(t) {
                    var e = a(t - this.options.start, this.options.end - this.options.start);
                    switch (this.options.positionValueFunction) {
                        case "pow":
                            e = this._logTransform(e);
                            break;
                        case "log":
                            e = this._powTransform(e)
                    }
                    return e.toFixed(2)
                }
            }, {
                key: "_value",
                value: function(t) {
                    switch (this.options.positionValueFunction) {
                        case "pow":
                            t = this._powTransform(t);
                            break;
                        case "log":
                            t = this._logTransform(t)
                    }
                    return (this.options.end - this.options.start) * t + this.options.start
                }
            }, {
                key: "_logTransform",
                value: function(t) {
                    return l(this.options.nonLinearBase, t * (this.options.nonLinearBase - 1) + 1)
                }
            }, {
                key: "_powTransform",
                value: function(t) {
                    return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1)
                }
            }, {
                key: "_setHandlePos",
                value: function(t, e, n, s) {
                    if (!this.$element.hasClass(this.options.disabledClass)) {
                        e = parseFloat(e), e < this.options.start ? e = this.options.start : e > this.options.end && (e = this.options.end);
                        var o = this.options.doubleSided;
                        if (this.options.vertical && !n && (e = this.options.end - e), o)
                            if (0 === this.handles.index(t)) {
                                var r = parseFloat(this.$handle2.attr("aria-valuenow"));
                                e = e >= r ? r - this.options.step : e
                            } else {
                                var l = parseFloat(this.$handle.attr("aria-valuenow"));
                                e = e <= l ? l + this.options.step : e
                            }
                        var u = this,
                            c = this.options.vertical,
                            h = c ? "height" : "width",
                            f = c ? "top" : "left",
                            p = t[0].getBoundingClientRect()[h],
                            m = this.$element[0].getBoundingClientRect()[h],
                            g = this._pctOfBar(e),
                            v = (m - p) * g,
                            b = (100 * a(v, m)).toFixed(this.options.decimal);
                        e = parseFloat(e.toFixed(this.options.decimal));
                        var y = {};
                        if (this._setValues(t, e), o) {
                            var w, _ = 0 === this.handles.index(t),
                                $ = ~~(100 * a(p, m));
                            if (_) y[f] = b + "%", w = parseFloat(this.$handle2[0].style[f]) - b + $, s && "function" == typeof s && s();
                            else {
                                var k = parseFloat(this.$handle[0].style[f]);
                                w = b - (isNaN(k) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : k) + $
                            }
                            y["min-" + h] = w + "%"
                        }
                        this.$element.one("finished.zf.animate", function() {
                            u.$element.trigger("moved.zf.slider", [t])
                        });
                        var C = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                        i.i(d.b)(C, t, function() {
                            isNaN(b) ? t.css(f, 100 * g + "%") : t.css(f, b + "%"), u.options.doubleSided ? u.$fill.css(y) : u.$fill.css(h, 100 * g + "%")
                        }), clearTimeout(u.timeout), u.timeout = setTimeout(function() {
                            u.$element.trigger("changed.zf.slider", [t])
                        }, u.options.changedDelay)
                    }
                }
            }, {
                key: "_setInitAttr",
                value: function(t) {
                    var e = 0 === t ? this.options.initialStart : this.options.initialEnd,
                        n = this.inputs.eq(t).attr("id") || i.i(f.b)(6, "slider");
                    this.inputs.eq(t).attr({
                        id: n,
                        max: this.options.end,
                        min: this.options.start,
                        step: this.options.step
                    }), this.inputs.eq(t).val(e), this.handles.eq(t).attr({
                        role: "slider",
                        "aria-controls": n,
                        "aria-valuemax": this.options.end,
                        "aria-valuemin": this.options.start,
                        "aria-valuenow": e,
                        "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                        tabindex: 0
                    })
                }
            }, {
                key: "_setValues",
                value: function(t, e) {
                    var i = this.options.doubleSided ? this.handles.index(t) : 0;
                    this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
                }
            }, {
                key: "_handleEvent",
                value: function(t, e, n) {
                    var s, o;
                    if (n) s = this._adjustValue(null, n), o = !0;
                    else {
                        t.preventDefault();
                        var l = this,
                            u = this.options.vertical,
                            h = u ? "height" : "width",
                            d = u ? "top" : "left",
                            p = u ? t.pageY : t.pageX,
                            m = (this.$handle[0].getBoundingClientRect()[h], this.$element[0].getBoundingClientRect()[h]),
                            g = u ? c()(window).scrollTop() : c()(window).scrollLeft(),
                            v = this.$element.offset()[d];
                        t.clientY === t.pageY && (p += g);
                        var b, y = p - v;
                        b = y < 0 ? 0 : y > m ? m : y;
                        var w = a(b, m);
                        if (s = this._value(w), i.i(f.a)() && !this.options.vertical && (s = this.options.end - s), s = l._adjustValue(null, s), o = !1, !e) {
                            e = r(this.$handle, d, b, h) <= r(this.$handle2, d, b, h) ? this.$handle : this.$handle2
                        }
                    }
                    this._setHandlePos(e, s, o)
                }
            }, {
                key: "_adjustValue",
                value: function(t, e) {
                    var i, n, s, o, a = this.options.step,
                        r = parseFloat(a / 2);
                    return i = t ? parseFloat(t.attr("aria-valuenow")) : e, n = i % a, s = i - n, o = s + a, 0 === n ? i : i = i >= s + r ? o : s
                }
            }, {
                key: "_events",
                value: function() {
                    this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2)
                }
            }, {
                key: "_eventsForHandle",
                value: function(t) {
                    var e, i = this;
                    if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(t) {
                            var e = i.inputs.index(c()(this));
                            i._handleEvent(t, i.handles.eq(e), c()(this).val())
                        }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(t) {
                            if (i.$element.data("dragging")) return !1;
                            c()(t.target).is("[data-slider-handle]") || (i.options.doubleSided ? i._handleEvent(t) : i._handleEvent(t, i.$handle))
                        }), this.options.draggable) {
                        this.handles.addTouch();
                        var n = c()("body");
                        t.off("mousedown.zf.slider").on("mousedown.zf.slider", function(s) {
                            t.addClass("is-dragging"), i.$fill.addClass("is-dragging"), i.$element.data("dragging", !0), e = c()(s.currentTarget), n.on("mousemove.zf.slider", function(t) {
                                t.preventDefault(), i._handleEvent(t, e)
                            }).on("mouseup.zf.slider", function(s) {
                                i._handleEvent(s, e), t.removeClass("is-dragging"), i.$fill.removeClass("is-dragging"), i.$element.data("dragging", !1), n.off("mousemove.zf.slider mouseup.zf.slider")
                            })
                        }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                            t.preventDefault()
                        })
                    }
                    t.off("keydown.zf.slider").on("keydown.zf.slider", function(t) {
                        var e, n = c()(this),
                            s = i.options.doubleSided ? i.handles.index(n) : 0,
                            o = parseFloat(i.inputs.eq(s).val());
                        h.a.handleKey(t, "Slider", {
                            decrease: function() {
                                e = o - i.options.step
                            },
                            increase: function() {
                                e = o + i.options.step
                            },
                            decrease_fast: function() {
                                e = o - 10 * i.options.step
                            },
                            increase_fast: function() {
                                e = o + 10 * i.options.step
                            },
                            min: function() {
                                e = i.options.start
                            },
                            max: function() {
                                e = i.options.end
                            },
                            handled: function() {
                                t.preventDefault(), i._setHandlePos(n, e, !0)
                            }
                        })
                    })
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), clearTimeout(this.timeout)
                }
            }]), e
        }(p.a);
    b.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }
    i.d(e, "a", function() {
        return p
    });
    var r = i(0),
        l = i.n(r),
        u = i(1),
        c = i(4),
        h = i(2),
        d = i(5),
        f = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), f(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = l.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Sticky", d.a.init(l.a), this._init()
                }
            }, {
                key: "_init",
                value: function() {
                    c.a._init();
                    var t = this.$element.parent("[data-sticky-container]"),
                        e = this.$element[0].id || i.i(u.b)(6, "sticky"),
                        n = this;
                    t.length ? this.$container = t : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                        "data-resize": e,
                        "data-mutate": e
                    }), "" !== this.options.anchor && l()("#" + n.options.anchor).attr({
                        "data-mutate": e
                    }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, l()(window).one("load.zf.sticky", function() {
                        n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = l()("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function() {
                            var t = window.pageYOffset;
                            n._calc(!1, t), n.isStuck || n._removeSticky(!(t >= n.topPoint))
                        }), n._events(e.split("-").reverse().join("-"))
                    })
                }
            }, {
                key: "_parsePoints",
                value: function() {
                    for (var t = "" == this.options.topAnchor ? 1 : this.options.topAnchor, e = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, i = [t, e], n = {}, s = 0, o = i.length; s < o && i[s]; s++) {
                        var a;
                        if ("number" == typeof i[s]) a = i[s];
                        else {
                            var r = i[s].split(":"),
                                u = l()("#" + r[0]);
                            a = u.offset().top, r[1] && "bottom" === r[1].toLowerCase() && (a += u[0].getBoundingClientRect().height)
                        }
                        n[s] = a
                    }
                    this.points = n
                }
            }, {
                key: "_events",
                value: function(t) {
                    var e = this,
                        i = this.scrollListener = "scroll.zf." + t;
                    this.isOn || (this.canStick && (this.isOn = !0, l()(window).off(i).on(i, function(t) {
                        0 === e.scrollCount ? (e.scrollCount = e.options.checkEvery, e._setSizes(function() {
                            e._calc(!1, window.pageYOffset)
                        })) : (e.scrollCount--, e._calc(!1, window.pageYOffset))
                    })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(i, n) {
                        e._eventsHandler(t)
                    }), this.$element.on("mutateme.zf.trigger", function(i, n) {
                        e._eventsHandler(t)
                    }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function(i, n) {
                        e._eventsHandler(t)
                    }))
                }
            }, {
                key: "_eventsHandler",
                value: function(t) {
                    var e = this,
                        i = this.scrollListener = "scroll.zf." + t;
                    e._setSizes(function() {
                        e._calc(!1), e.canStick ? e.isOn || e._events(t) : e.isOn && e._pauseListeners(i)
                    })
                }
            }, {
                key: "_pauseListeners",
                value: function(t) {
                    this.isOn = !1, l()(window).off(t), this.$element.trigger("pause.zf.sticky")
                }
            }, {
                key: "_calc",
                value: function(t, e) {
                    if (t && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
                    e || (e = window.pageYOffset), e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
                }
            }, {
                key: "_setSticky",
                value: function() {
                    var t = this,
                        e = this.options.stickTo,
                        i = "top" === e ? "marginTop" : "marginBottom",
                        n = "top" === e ? "bottom" : "top",
                        s = {};
                    s[i] = this.options[i] + "em", s[e] = 0, s[n] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + e).css(s).trigger("sticky.zf.stuckto:" + e), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        t._setSizes()
                    })
                }
            }, {
                key: "_removeSticky",
                value: function(t) {
                    var e = this.options.stickTo,
                        i = "top" === e,
                        n = {},
                        s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                        o = i ? "marginTop" : "marginBottom",
                        a = t ? "top" : "bottom";
                    n[o] = 0, n.bottom = "auto", n.top = t ? 0 : s, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + e).addClass("is-anchored is-at-" + a).css(n).trigger("sticky.zf.unstuckfrom:" + a)
                }
            }, {
                key: "_setSizes",
                value: function(t) {
                    this.canStick = c.a.is(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
                    var e = this.$container[0].getBoundingClientRect().width,
                        i = window.getComputedStyle(this.$container[0]),
                        n = parseInt(i["padding-left"], 10),
                        s = parseInt(i["padding-right"], 10);
                    this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                        "max-width": e - n - s + "px"
                    });
                    var o = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                    if ("none" == this.$element.css("display") && (o = 0), this.containerHeight = o, this.$container.css({
                            height: o
                        }), this.elemHeight = o, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                        var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                        this.$element.css("top", a)
                    }
                    this._setBreakPoints(o, function() {
                        t && "function" == typeof t && t()
                    })
                }
            }, {
                key: "_setBreakPoints",
                value: function(t, e) {
                    if (!this.canStick) {
                        if (!e || "function" != typeof e) return !1;
                        e()
                    }
                    var i = a(this.options.marginTop),
                        n = a(this.options.marginBottom),
                        s = this.points ? this.points[0] : this.$anchor.offset().top,
                        o = this.points ? this.points[1] : s + this.anchorHeight,
                        r = window.innerHeight;
                    "top" === this.options.stickTo ? (s -= i, o -= t + i) : "bottom" === this.options.stickTo && (s -= r - (t + n), o -= r - n), this.topPoint = s, this.bottomPoint = o, e && "function" == typeof e && e()
                }
            }, {
                key: "_destroy",
                value: function() {
                    this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                        height: "",
                        top: "",
                        bottom: "",
                        "max-width": ""
                    }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), l()(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                        height: ""
                    })
                }
            }]), e
        }(h.a);
    p.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return d
    });
    var a = i(0),
        r = i.n(a),
        l = i(6),
        u = i(2),
        c = i(5),
        h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), h(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, t.data(), i), this.className = "", this.className = "Toggler", c.a.init(r.a), this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    var t;
                    this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
                    var e = this.$element[0].id;
                    r()('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-controls", e), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
                }
            }, {
                key: "_events",
                value: function() {
                    this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
                }
            }, {
                key: "toggle",
                value: function() {
                    this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
                }
            }, {
                key: "_toggleClass",
                value: function() {
                    this.$element.toggleClass(this.className);
                    var t = this.$element.hasClass(this.className);
                    t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
            }, {
                key: "_toggleAnimate",
                value: function() {
                    var t = this;
                    this.$element.is(":hidden") ? l.a.animateIn(this.$element, this.animationIn, function() {
                        t._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                    }) : l.a.animateOut(this.$element, this.animationOut, function() {
                        t._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                    })
                }
            }, {
                key: "_updateARIA",
                value: function(t) {
                    this.$element.attr("aria-expanded", !!t)
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.off(".zf.toggler")
                }
            }]), e
        }(u.a);
    d.defaults = {
        animate: !1
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    i.d(e, "a", function() {
        return p
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(4),
        c = i(5),
        h = i(15),
        d = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        f = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === s) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, i, n)
            }
            if ("value" in s) return s.value;
            var a = s.get;
            if (void 0 !== a) return a.call(n)
        },
        p = function(t) {
            function e() {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return o(e, t), d(e, [{
                key: "_setup",
                value: function(t, i) {
                    this.$element = t, this.options = r.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Tooltip", this.isActive = !1, this.isClick = !1, c.a.init(r.a), this._init()
                }
            }, {
                key: "_init",
                value: function() {
                    u.a._init();
                    var t = this.$element.attr("aria-describedby") || i.i(l.b)(6, "tooltip");
                    this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? r()(this.options.template) : this._buildTemplate(t), this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                        title: "",
                        "aria-describedby": t,
                        "data-yeti-box": t,
                        "data-toggle": t,
                        "data-resize": t
                    }).addClass(this.options.triggerClass), f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_init", this).call(this), this._events()
                }
            }, {
                key: "_getDefaultPosition",
                value: function() {
                    var t = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
                    return t ? t[0] : "top"
                }
            }, {
                key: "_getDefaultAlignment",
                value: function() {
                    return "center"
                }
            }, {
                key: "_getHOffset",
                value: function() {
                    return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset
                }
            }, {
                key: "_getVOffset",
                value: function() {
                    return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset
                }
            }, {
                key: "_buildTemplate",
                value: function(t) {
                    var e = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim();
                    return r()("<div></div>").addClass(e).attr({
                        role: "tooltip",
                        "aria-hidden": !0,
                        "data-is-active": !1,
                        "data-is-focus": !1,
                        id: t
                    })
                }
            }, {
                key: "_setPosition",
                value: function() {
                    f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_setPosition", this).call(this, this.$element, this.template)
                }
            }, {
                key: "show",
                value: function() {
                    if ("all" !== this.options.showOn && !u.a.is(this.options.showOn)) return !1;
                    var t = this;
                    this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                        "data-is-active": !0,
                        "aria-hidden": !1
                    }), t.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    this.template.stop().attr({
                        "aria-hidden": !0,
                        "data-is-active": !1
                    }).fadeOut(this.options.fadeOutDuration, function() {
                        t.isActive = !1, t.isClick = !1
                    }), this.$element.trigger("hide.zf.tooltip")
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this,
                        e = (this.template, !1);
                    this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                        t.isActive || (t.timeout = setTimeout(function() {
                            t.show()
                        }, t.options.hoverDelay))
                    }).on("mouseleave.zf.tooltip", function(i) {
                        clearTimeout(t.timeout), (!e || t.isClick && !t.options.clickOpen) && t.hide()
                    }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                        e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                    }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                        e.stopImmediatePropagation(), t.isClick = !0
                    }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                        t.isActive ? t.hide() : t.show()
                    }), this.$element.on({
                        "close.zf.trigger": this.hide.bind(this)
                    }), this.$element.on("focus.zf.tooltip", function(i) {
                        if (e = !0, t.isClick) return t.options.clickOpen || (e = !1), !1;
                        t.show()
                    }).on("focusout.zf.tooltip", function(i) {
                        e = !1, t.isClick = !1, t.hide()
                    }).on("resizeme.zf.trigger", function() {
                        t.isActive && t._setPosition()
                    })
                }
            }, {
                key: "toggle",
                value: function() {
                    this.isActive ? this.hide() : this.show()
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove()
                }
            }]), e
        }(h.a);
    p.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !1,
        vOffset: 0,
        hOffset: 0,
        tooltipHeight: 14,
        tooltipWidth: 12,
        allowHtml: !1
    }
}, function(t, e, i) {
    t.exports = i(19)
}]);;
/**
 * @file
 * Initializes foundation's JavaScript.
 *
 */
(function($, Drupal) {

    /**
     * Initializes foundation's JavaScript for new content added to the page.
     */
    Drupal.behaviors.foundationInit = {
        attach: function(context, settings) {
            $(context).foundation();
        }
    };

})(jQuery, Drupal);;
! function(n, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : n.MotionUI = e(n.jQuery)
}(this, function(n) {
    "use strict";

    function e(e, a, r, u) {
        function s() {
            e || a.hide(), m(), u && u.apply(a)
        }

        function m() {
            a[0].style.transitionDuration = 0, a.removeClass(d + " " + c + " " + r)
        }
        if (a = n(a).eq(0), a.length) {
            if (null === o) return e ? a.show() : a.hide(), void u();
            var d = e ? i[0] : i[1],
                c = e ? t[0] : t[1];
            m(), a.addClass(r), a.css("transition", "none"), requestAnimationFrame(function() {
                a.addClass(d), e && a.show()
            }), requestAnimationFrame(function() {
                a[0].offsetWidth, a.css("transition", ""), a.addClass(c)
            }), a.one("transitionend", s)
        }
    }! function() {
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        });
        for (var n = ["webkit", "moz"], e = 0; e < n.length && !window.requestAnimationFrame; ++e) {
            var i = n[e];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var t = 0;
            window.requestAnimationFrame = function(n) {
                var e = Date.now(),
                    i = Math.max(t + 16, e);
                return setTimeout(function() {
                    n(t = i)
                }, i - e)
            }, window.cancelAnimationFrame = clearTimeout
        }
    }();
    var i = ["mui-enter", "mui-leave"],
        t = ["mui-enter-active", "mui-leave-active"],
        o = function() {
            var n = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend"
                },
                e = window.document.createElement("div");
            for (var i in n)
                if ("undefined" != typeof e.style[i]) return n[i];
            return null
        }(),
        a = {
            animateIn: function(n, i, t) {
                e(!0, n, i, t)
            },
            animateOut: function(n, i, t) {
                e(!1, n, i, t)
            }
        };
    return a
});;
/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 *
 *  @TODO: scrolling horiz. tabs to top when clicked (line pages):
 *         see https://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
 */
(function($, Drupal) {

    /**
     * Use this behavior as a template for custom Javascript.
     */
    Drupal.behaviors.exampleBehavior = {
        attach: function(context, settings) {
            var form_class = '.field-paragraph--field-webform';
            if (jQuery(form_class).length) {
                jQuery('.webform-button--submit').click(function() {
                    var error_class = '.callout.alert'; //'.form-item--error-message';
                    var success_class = '.webform-submission-form';
                    if (jQuery(error_class).length || jQuery(success_class).length) goTopWebform(1000);
                });
            }

            // Overrides the default autocompleteSplitValues() found in core/misc/autocomplete.js
            // for not considering commas and aphostrofes as separators
            Drupal.autocomplete.splitValues = function buson8SplitValues(value) {
                var result = [];
                var quote = false;
                var current = '';
                var valueLength = value.length;
                var character = void 0;

                for (var i = 0; i < valueLength; i++) {
                    character = value.charAt(i);
                    //if (character === '"') {
                    //  current += character;
                    //  quote = !quote;
                    //} else if (character === ',' && !quote) {
                    //  result.push(current.trim());
                    //  current = '';
                    //} else {
                    current += character;
                    //}
                }
                if (value.length > 0) {
                    result.push($.trim(current));
                }

                return result;
            }

        }
    };
})(jQuery, Drupal);

/**
 * Webforms
 */
var form_class = '.field-paragraph--field-webform';
if (jQuery(form_class).length) {
    var window = jQuery(window);

    function goTopWebform(timeout) {
        setTimeout(function() {
            if (window.innerWidth < 1024) {
                var vertical_class = '.vertical.tabs';
                var active_class = '.tabs-panel.is-active';
                if (jQuery(vertical_class).length) {
                    var webform_class = jQuery(active_class).length ? '.tabs-panel.is-active .field-name-field-webform' : '.field-name-field-webform';
                    var pos = jQuery(webform_class).offset().top - 200;
                } else var pos = jQuery('.field-name-field-webform').offset().top;
            } else var pos = jQuery('.tabs-content').offset().top - 250;

            jQuery('html,body').animate({
                scrollTop: pos
            }, 800, 'swing');
        }, timeout);
    }

    var showWebform = function(value, timeout) {
        jQuery('.tabs-panel.is-active').removeClass('is-active');
        jQuery('.tabs-panel' + value).addClass('is-active');
        goTopWebform(100, timeout);
    }

    jQuery('#customerservice-forms-tabs a').click(function(e) {
        e.preventDefault();
        var value = jQuery(this).attr("href");
        jQuery('.tabs-title.is-active').removeClass('is-active');
        jQuery(this).closest('li').addClass('is-active'); // I also tried .parent().addClass
        showWebform(value, 0);
        window.location.hash = value;
    });
}

/**
 * Vertical tabs
 */
var vertical_class = '.vertical.tabs';
var subtabs = '.box__app-contentLeft';
if (jQuery(vertical_class).length) {
    var window = jQuery(window);

    jQuery(document).ready(function() {
        var hash = window.location.hash;
        if (hash != '') {
            jQuery('.tabs-title.is-active').removeClass('is-active');
            jQuery('a[href="' + hash + '"]').closest('li').addClass('is-active'); // I also tried .parent().addClass
            showVertical(hash, 0);
        }
    });

    function goTopVertical(timeout) {
        setTimeout(function() {
            var pos = jQuery('.tabs-content').offset().top - 250;

            jQuery('html,body').animate({
                scrollTop: pos
            }, 800, 'swing');
        }, timeout);
    }

    var showVertical = function(value, timeout) {
        jQuery('.tabs-panel.is-active').removeClass('is-active');
        jQuery('.tabs-panel' + value).addClass('is-active');
        goTopVertical(100, timeout);
    }

    jQuery('.tabs-title a').click(function(e) {
        e.preventDefault();
        var value = jQuery(this).attr("href");
        jQuery('.tabs-title.is-active').removeClass('is-active');
        jQuery(this).closest('li').addClass('is-active'); // I also tried .parent().addClass
        showVertical(value, 0);
        window.location.hash = value;

        // Subtab first active
        if (jQuery(subtabs).length) {
            if (jQuery('ul.list-common--bibliometros').length) jQuery('ul.list-common--bibliometros li:first-child').addClass('is-active');
            if (jQuery('.tabs-content--info-bt .tabs-panel-second').length) jQuery('.tabs-content--info-bt .tabs-panel-second:first-child').addClass('is-active');
        }
    });
}

/*
 *  Secondary menu search box
 */
function searchInput() {
    var response = document.getElementById('searchbox').value;
    if (response) {
        window.location.replace('/buscar?text=' + response);
    }
    return false;
}

/**
 * Anchor link in #estacion-X
 */
if (jQuery('.node--type-line').length) {
    var window = jQuery(window);

    function goTop(pos, timeout) {
        if (window.innerWidth < 640) pos = pos + 400;
        setTimeout(function() {
            jQuery('html,body').animate({
                scrollTop: pos
            }, 800, 'swing');
        }, timeout);
    }

    function showRightPanel(value, timeout) {
        jQuery('.line-content.is-active').removeClass('is-active');
        jQuery('.line-content' + value).addClass('is-active');
        goTop(100, timeout);
    }

    function showStation(value) {
        jQuery(value).toggle();
        if (jQuery(value).is(':visible')) {
            var pos = jQuery(value).offset().top - 300;
            if (window.innerWidth < 640) pos = pos - 300;
            goTop(pos, 0);

        }
    }

    /**
     * Scroll top Horarios, Incidencias
     */
    if (jQuery('.node--type-line .box__line-left').length) {
        jQuery('#line-tabs a').click(function(e) {
            e.preventDefault();
            var value = jQuery(this).attr("href");
            jQuery('.list__btnblue-lateral__element.is-active').removeClass('is-active');
            jQuery(this).closest('li').addClass('is-active'); // I also tried .parent().addClass
            showRightPanel(value, 0);
            window.location.hash = value;
        });
    }

    /**
     * Load page
     */
    var hash = window.location.hash;
    if (hash != '') {
        var contains_station = hash.indexOf('#estacion-') !== -1;
        var contains_timetable = hash.indexOf('line-timetable') !== -1;
        var contains_incidents = hash.indexOf('line-incidents') !== -1;

        if (contains_station) showStation(hash);

        if (contains_incidents || contains_timetable) {
            if (contains_incidents) var label_list = '#label-incidents';
            else var label_list = '#label-timetable';
            jQuery('.list__btnblue-lateral__element.is-active').removeClass('is-active');
            jQuery(label_list).addClass('is-active'); // I also tried .parent().addClass
            showRightPanel(hash, 400);
        }
    }

    /**
     * Click station
     */
    jQuery('.list-line__btn.accordion-title').click(function(e) {
        e.preventDefault();
        var station = jQuery(this).attr("href");
        showStation(station);
        window.location.hash = station;
    });
} else { // No line station
    var window = jQuery(window);

    function goTopWeb(hash) {
        setTimeout(function() {
            var pos = jQuery(hash).offset().top - 300;
            jQuery('html,body').animate({
                scrollTop: pos
            }, 800, 'swing');
        }, 500);
    }

    var hash = window.location.hash;
    if (hash != '') goTopWeb(hash);
}

// Tabs inside tabs
if (jQuery('.box__app-contentLeft').length) {

    function goTopTabs(hash) {
        setTimeout(function() {
            var pos = jQuery(hash).offset().top - 300;
            jQuery('html,body').animate({
                scrollTop: pos
            }, 800, 'swing');
        }, 500);
    }

    jQuery('.box__app-contentLeft .list-common .tabs-title-second a').click(function(event) {
        var value = jQuery(this).attr("href");
        // Container
        jQuery('.tabs-content .tabs-panel-second').removeClass('is-active');
        jQuery(value).addClass('is-active');

        // Link
        jQuery('.tabs-title-second.is-active').removeClass('is-active');
        jQuery(this).closest('li').addClass('is-active');

        // Get tabs parent and add is-active
        var parent_panel = '.large-9.columns > .tabs-content > .tabs-panel';
        var id = jQuery(this).closest(parent_panel).attr('id');
        if (id) {
            jQuery('#' + id).addClass('is-active');
            event.preventDefault();
            //if (value != '') goTopTabs(value);
        }
    });
};
/*! jquery.cookie v1.4.1 | MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});;
/**
 * @file eu_cookie_compliance.js
 *
 * Defines the behavior of the eu cookie compliance banner.
 */

(function($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.euCookieCompliancePopup = {
        attach: function(context) {
            $('body').once('eu-cookie-compliance').each(function() {
                // If configured, check JSON callback to determine if in EU.
                if (drupalSettings.eu_cookie_compliance.popup_eu_only_js) {
                    if (Drupal.eu_cookie_compliance.showBanner()) {
                        var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance-check';
                        var data = {};
                        $.getJSON(url, data, function(data) {
                            // If in the EU, show the compliance banner.
                            if (data.in_eu) {
                                Drupal.eu_cookie_compliance.execute();
                            }

                            // If not in EU, set an agreed cookie automatically.
                            else {
                                Drupal.eu_cookie_compliance.setStatus(2);
                            }
                        });
                    }
                }

                // Otherwise, fallback to standard behavior which is to render the banner.
                else {
                    Drupal.eu_cookie_compliance.execute();
                }
            });
        },
    };

    Drupal.eu_cookie_compliance = {};

    Drupal.eu_cookie_compliance.execute = function() {
        try {
            if (!drupalSettings.eu_cookie_compliance.popup_enabled) {
                return;
            }

            if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
                return;
            }

            var status = Drupal.eu_cookie_compliance.getCurrentStatus();
            if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null) {
                if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
                    // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
                    if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
                        Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.mobile_popup_html_info);
                    } else {
                        Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_info);
                    }

                    Drupal.eu_cookie_compliance.attachAgreeEvents();
                }
            } else if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
                Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_agreed);
                Drupal.eu_cookie_compliance.attachHideEvents();
            } else if (status === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
                Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
                Drupal.eu_cookie_compliance.attachWithdrawEvents();
            }
        } catch (e) {}
    };

    Drupal.eu_cookie_compliance.createWithdrawBanner = function(html) {
        var $html = $('<div></div>').html(html);
        var $banner = $('.eu-cookie-withdraw-banner', $html);
        $html.attr('id', 'sliding-popup');
        $html.addClass('eu-cookie-withdraw-wrapper');

        if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
            $banner.height(drupalSettings.eu_cookie_compliance.popup_height)
                .width(drupalSettings.eu_cookie_compliance.popup_width);
        }
        $html.hide();
        var height = 0;
        if (drupalSettings.eu_cookie_compliance.popup_position) {
            $html.prependTo('body');
            height = $html.outerHeight();

            $html.show()
                .addClass('sliding-popup-top')
                .addClass('clearfix')
                .css({
                    top: -1 * height
                });
            // For some reason, the tab outerHeight is -10 if we don't use a timeout
            // function to reveal the tab.
            setTimeout(function() {
                var height = $html.outerHeight();

                $html.animate({
                    top: -1 * (height)
                }, drupalSettings.eu_cookie_compliance.popup_delay, null, function() {
                    $html.trigger('eu_cookie_compliance_popup_open');
                });
            }.bind($html), 0);
        } else {
            if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
                $html.prependTo('body');
            } else {
                $html.appendTo('body');
            }
            height = $html.outerHeight();
            $html.show()
                .addClass('sliding-popup-bottom')
                .css({
                    bottom: -1 * height
                });
            // For some reason, the tab outerHeight is -10 if we don't use a timeout
            // function to reveal the tab.
            setTimeout(function() {
                var height = $html.outerHeight();

                $html.animate({
                    bottom: -1 * (height)
                }, drupalSettings.eu_cookie_compliance.popup_delay, null, function() {
                    $html.trigger('eu_cookie_compliance_popup_open');
                });
            }.bind($html), 0);
        }
    };

    Drupal.eu_cookie_compliance.toggleWithdrawBanner = function() {
        var $wrapper = $('#sliding-popup');
        var $tab = $('.eu-cookie-withdraw-tab');
        var $bannerIsShowing = drupalSettings.eu_cookie_compliance.popup_position ? parseInt($wrapper.css('top')) === 0 : parseInt($wrapper.css('bottom')) === 0;
        var height = $wrapper.outerHeight();
        if (drupalSettings.eu_cookie_compliance.popup_position) {
            if ($bannerIsShowing) {
                $wrapper.animate({
                    'top': -1 * (height)
                }, drupalSettings.eu_cookie_compliance.popup_delay);
            } else {
                $wrapper.animate({
                    'top': 0
                }, drupalSettings.eu_cookie_compliance.popup_delay);
            }
        } else {
            if ($bannerIsShowing) {
                $wrapper.animate({
                    'bottom': -1 * (height)
                }, drupalSettings.eu_cookie_compliance.popup_delay);
            } else {
                $wrapper.animate({
                    'bottom': 0
                }, drupalSettings.eu_cookie_compliance.popup_delay);
            }
        }
    };

    Drupal.eu_cookie_compliance.createPopup = function(html) {
        // This fixes a problem with jQuery 1.9.
        var popup = $('<div></div>').html(html);
        popup.attr('id', 'sliding-popup');
        if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
            popup.height(drupalSettings.eu_cookie_compliance.popup_height)
                .width(drupalSettings.eu_cookie_compliance.popup_width);
        }

        popup.hide();
        var height = 0;
        if (drupalSettings.eu_cookie_compliance.popup_position) {
            popup.prependTo('body');
            height = popup.outerHeight();
            popup.show()
                .addClass('sliding-popup-top clearfix')
                .css({
                    top: -1 * height
                })
                .animate({
                    top: 0
                }, drupalSettings.eu_cookie_compliance.popup_delay, null, function() {
                    popup.trigger('eu_cookie_compliance_popup_open');
                });
        } else {
            if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
                popup.prependTo('body');
            } else {
                popup.appendTo('body');
            }

            height = popup.outerHeight();
            popup.show()
                .addClass('sliding-popup-bottom')
                .css({
                    bottom: -1 * height
                })
                .animate({
                    bottom: 0
                }, drupalSettings.eu_cookie_compliance.popup_delay, null, function() {
                    popup.trigger('eu_cookie_compliance_popup_open');
                });
        }
    };

    Drupal.eu_cookie_compliance.attachAgreeEvents = function() {
        var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
        var scrollConfirms = drupalSettings.eu_cookie_compliance.popup_scrolling_confirmation;

        $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);
        $('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);

        if (clickingConfirms) {
            $('a, input[type=submit], button[type=submit]').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
        }

        if (scrollConfirms) {
            var alreadyScrolled = false;
            var scrollHandler = function() {
                if (alreadyScrolled) {
                    Drupal.eu_cookie_compliance.acceptAction();
                    $(window).off('scroll', scrollHandler);
                } else {
                    alreadyScrolled = true;
                }
            };

            $(window).bind('scroll', scrollHandler);
        }

        $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    };

    Drupal.eu_cookie_compliance.attachHideEvents = function() {
        var popupHideAgreed = drupalSettings.eu_cookie_compliance.popup_hide_agreed;
        var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
        $('.hide-popup-button').click(function() {
            Drupal.eu_cookie_compliance.changeStatus(2);
        });
        if (clickingConfirms) {
            $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
        }

        if (popupHideAgreed) {
            $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function() {
                Drupal.eu_cookie_compliance.changeStatus(2);
            });
        }

        $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    };

    Drupal.eu_cookie_compliance.attachWithdrawEvents = function() {
        $('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);
        $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
    };

    Drupal.eu_cookie_compliance.acceptAction = function() {
        var agreedEnabled = drupalSettings.eu_cookie_compliance.popup_agreed_enabled;
        var nextStatus = 1;
        if (!agreedEnabled) {
            Drupal.eu_cookie_compliance.setStatus(1);
            nextStatus = 2;
        }

        if (!euCookieComplianceHasLoadedScripts) {
            euCookieComplianceLoadScripts();
        }

        if (typeof euCookieComplianceBlockCookies !== 'undefined') {
            clearInterval(euCookieComplianceBlockCookies);
        }

        Drupal.eu_cookie_compliance.changeStatus(nextStatus);
    };

    Drupal.eu_cookie_compliance.declineAction = function() {
        Drupal.eu_cookie_compliance.setStatus(0);
        let popup = $('#sliding-popup');
        if (popup.hasClass('sliding-popup-top')) {
            popup.animate({
                top: popup.outerHeight() * -1
            }).trigger('eu_cookie_compliance_popup_close');
        } else {
            popup.animate({
                bottom: popup.outerHeight() * -1
            }).trigger('eu_cookie_compliance_popup_close');
        }
    };

    Drupal.eu_cookie_compliance.withdrawAction = function() {
        Drupal.eu_cookie_compliance.setStatus(null);
        location.reload();
    };

    Drupal.eu_cookie_compliance.moreInfoAction = function() {
        if (drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup) {
            Drupal.eu_cookie_compliance.setStatus(0);
            $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
        } else {
            if (drupalSettings.eu_cookie_compliance.popup_link_new_window) {
                window.open(drupalSettings.eu_cookie_compliance.popup_link);
            } else {
                window.location.href = drupalSettings.eu_cookie_compliance.popup_link;
            }
        }
    };

    Drupal.eu_cookie_compliance.getCurrentStatus = function() {
        var cookieName = (drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
        var value = $.cookie(cookieName);
        value = parseInt(value);
        if (isNaN(value)) {
            value = null;
        }

        return value;
    };

    Drupal.eu_cookie_compliance.changeStatus = function(value) {
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        var reloadPage = drupalSettings.eu_cookie_compliance.reload_page;
        if (status === value) {
            return;
        }

        if (drupalSettings.eu_cookie_compliance.popup_position) {
            $('.sliding-popup-top').animate({
                top: $('#sliding-popup').outerHeight() * -1
            }, drupalSettings.eu_cookie_compliance.popup_delay, function() {
                if (status === null && !reloadPage) {
                    $('#sliding-popup').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({
                        top: 0
                    }, drupalSettings.eu_cookie_compliance.popup_delay);
                    Drupal.eu_cookie_compliance.attachHideEvents();
                } else if (status === 1) {
                    $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
                }
            });
        } else {
            $('.sliding-popup-bottom').animate({
                bottom: $('#sliding-popup').outerHeight() * -1
            }, drupalSettings.eu_cookie_compliance.popup_delay, function() {
                if (status === null && !reloadPage) {
                    $('#sliding-popup').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({
                        bottom: 0
                    }, drupalSettings.eu_cookie_compliance.popup_delay);
                    Drupal.eu_cookie_compliance.attachHideEvents();
                } else if (status === 1) {
                    $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
                }
            });
        }

        if (drupalSettings.eu_cookie_compliance.reload_page) {
            location.reload();
        }

        if (value === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
            Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
            Drupal.eu_cookie_compliance.attachWithdrawEvents();
        }

        Drupal.eu_cookie_compliance.setStatus(value);
    };

    Drupal.eu_cookie_compliance.setStatus = function(status) {
        var date = new Date();
        var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
        var path = drupalSettings.path.baseUrl;
        var cookieName = (drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
        if (path.length > 1) {
            var pathEnd = path.length - 1;
            if (path.lastIndexOf('/') === pathEnd) {
                path = path.substring(0, pathEnd);
            }
        }

        var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
        if (cookie_session) {
            $.cookie(cookieName, status, {
                path: path,
                domain: domain
            });
        } else {
            var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
            date.setDate(date.getDate() + lifetime);
            $.cookie(cookieName, status, {
                expires: date,
                path: path,
                domain: domain
            });
        }
        $(document).trigger('eu_cookie_compliance.changeStatus', [status]);

        // Store consent if applicable.
        if (drupalSettings.eu_cookie_compliance.store_consent && ((status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) || (status === 2 && !drupalSettings.eu_cookie_compliance.popup_agreed_enabled))) {
            var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance/store_consent/banner';
            $.post(url, {}, function(data) {});
        }
    };

    Drupal.eu_cookie_compliance.hasAgreed = function() {
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        return (status === 1 || status === 2);
    };

    Drupal.eu_cookie_compliance.showBanner = function() {
        var showBanner = false;
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null) {
            if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
                showBanner = true;
            }
        } else if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
            showBanner = true;
        }

        return showBanner;
    };

    Drupal.eu_cookie_compliance.cookiesEnabled = function() {
        var cookieEnabled = (navigator.cookieEnabled);
        if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
            $.cookie('testcookie', 'testcookie', {
                expires: 100
            });
            cookieEnabled = ($.cookie('testcookie').indexOf('testcookie') !== -1);
        }

        return (cookieEnabled);
    };

    // Load blocked scripts if the user has agreed to being tracked.
    var euCookieComplianceHasLoadedScripts = false;
    $(function() {
        if (Drupal.eu_cookie_compliance.hasAgreed() || (Drupal.eu_cookie_compliance.getCurrentStatus() === null && drupalSettings.eu_cookie_compliance.method !== 'opt_in')) {
            euCookieComplianceLoadScripts();
            euCookieComplianceHasLoadedScripts = true;
        }
    });

    // Block cookies when the user hasn't agreed.
    if ((drupalSettings.eu_cookie_compliance.method === 'opt_in' && (Drupal.eu_cookie_compliance.getCurrentStatus() === null || !Drupal.eu_cookie_compliance.hasAgreed())) || (drupalSettings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && Drupal.eu_cookie_compliance.getCurrentStatus() !== null)) {
        // Split the white-listed cookies.
        var euCookieComplianceWhitelist = drupalSettings.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);

        // Add the EU Cookie Compliance cookie.
        euCookieComplianceWhitelist.push((drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name);
        var euCookieComplianceBlockCookies = setInterval(function() {
            // Load all cookies from jQuery.
            var cookies = $.cookie();

            // Check each cookie and try to remove it if it's not white-listed.
            for (var i in cookies) {
                var remove = true;
                var hostname = window.location.hostname;
                var cookieRemoved = false;
                var index = 0;

                // Skip the PHP session cookie.
                if (i.indexOf('SESS') === 0 || i.indexOf('SSESS') === 0) {
                    remove = false;
                }

                // Check if the cookie is white-listed.
                for (var item in euCookieComplianceWhitelist) {
                    if (i === euCookieComplianceWhitelist[item]) {
                        remove = false;
                    }
                }

                // Remove the cookie if it's not white-listed.
                if (remove) {
                    while (!cookieRemoved && hostname !== '') {
                        // Attempt to remove.
                        cookieRemoved = $.removeCookie(i, {
                            domain: '.' + hostname,
                            path: '/'
                        });
                        if (!cookieRemoved) {
                            cookieRemoved = $.removeCookie(i, {
                                domain: hostname,
                                path: '/'
                            });
                        }

                        index = hostname.indexOf('.');

                        // We can be on a sub-domain, so keep checking the main domain as well.
                        hostname = (index === -1) ? '' : hostname.substring(index + 1);
                    }
                }
            }
        }, 5000);
    }

})(jQuery, Drupal, drupalSettings);;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
! function(t, e, i) {
    var n, o, a, r, h, s, l, d, c, g, u, f, p, m, w, v, x, b, y, T, C, H, k, W, E, I, M, L, P, S, F, R, K, B = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return t(this).attr("href")
            },
            title: function() {
                return this.title
            },
            createImg: function() {
                var e = new Image,
                    i = t(this).data("cbox-img-attrs");
                return "object" == typeof i && t.each(i, function(t, i) {
                    e[t] = i
                }), e
            },
            createIframe: function() {
                var i = e.createElement("iframe"),
                    n = t(this).data("cbox-iframe-attrs");
                return "object" == typeof n && t.each(n, function(t, e) {
                    i[t] = e
                }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
            }
        },
        O = "colorbox",
        $ = "cbox",
        N = $ + "Element",
        _ = $ + "_open",
        j = $ + "_load",
        D = $ + "_complete",
        z = $ + "_cleanup",
        A = $ + "_closed",
        q = $ + "_purge",
        U = t("<a/>"),
        G = "div",
        Q = 0,
        J = {};

    function V(i, n, o) {
        var a = e.createElement(i);
        return n && (a.id = $ + n), o && (a.style.cssText = o), t(a)
    }

    function X() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function Y(e, i) {
        i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) {
            var n;
            return void 0 === this.cache[e] && (void 0 !== (n = t(this.el).attr("data-cbox-" + e)) ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== B[e] && (this.cache[e] = B[e])), this.cache[e]
        }, this.get = function(e) {
            var i = this.value(e);
            return t.isFunction(i) ? i.call(this.el, this) : i
        }
    }

    function Z(t) {
        var e = c.length,
            i = (I + t) % e;
        return i < 0 ? e + i : i
    }

    function tt(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? g.width() : X()) / 100 : 1) * parseInt(t, 10))
    }

    function et(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function it(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function nt(t) {
        "contains" in o[0] && !o[0].contains(t.target) && t.target !== n[0] && (t.stopPropagation(), o.focus())
    }

    function ot(t) {
        ot.str !== t && (o.add(n).removeClass(ot.str).addClass(t), ot.str = t)
    }

    function at(i) {
        t(e).trigger(i), U.triggerHandler(i)
    }
    var rt = function() {
        var t, e, i = $ + "Slideshow_",
            n = "click." + $;

        function a() {
            clearTimeout(e)
        }

        function r() {
            (C.get("loop") || c[I + 1]) && (a(), e = setTimeout(R.next, C.get("slideshowSpeed")))
        }

        function h() {
            v.html(C.get("slideshowStop")).attr("aria-lable", C.get("slideshowStop")).unbind(n).one(n, s), U.bind(D, r).bind(j, a), o.removeClass(i + "off").addClass(i + "on")
        }

        function s() {
            a(), U.unbind(D, r).unbind(j, a), v.html(C.get("slideshowStart")).attr("aria-lable", C.get("slideshowStart")).unbind(n).one(n, function() {
                R.next(), h()
            }), o.removeClass(i + "on").addClass(i + "off")
        }

        function l() {
            t = !1, v.attr("aria-hidden", "true").hide(), a(), U.unbind(D, r).unbind(j, a), o.removeClass(i + "off " + i + "on")
        }
        return function() {
            t ? C.get("slideshow") || (U.unbind(z, l), l()) : C.get("slideshow") && c[1] && (t = !0, U.one(z, l), C.get("slideshowAuto") ? h() : s(), v.show(), v.attr("aria-hidden", "false").show())
        }
    }();

    function ht(a) {
        var g, w;
        if (!S) {
            if (g = t(a).data(O), C = new Y(a, g), w = C.get("rel"), I = 0, w && !1 !== w && "nofollow" !== w ? (c = t("." + N).filter(function() {
                    return new Y(this, t.data(this, O)).get("rel") === w
                }), -1 === (I = c.index(C.el)) && (c = c.add(C.el), I = c.length - 1)) : c = t(C.el), !L) {
                L = P = !0, ot(C.get("className")), o.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }).attr("aria-hidden", "true"), u = V(G, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), r.css({
                    width: "",
                    height: ""
                }).append(u), H = h.height() + d.height() + r.outerHeight(!0) - r.height(), k = s.width() + l.width() + r.outerWidth(!0) - r.width(), W = u.outerHeight(!0), E = u.outerWidth(!0);
                var v = tt(C.get("initialWidth"), "x"),
                    x = tt(C.get("initialHeight"), "y"),
                    b = C.get("maxWidth"),
                    K = C.get("maxHeight");
                C.w = Math.max((!1 !== b ? Math.min(v, tt(b, "x")) : v) - E - k, 0), C.h = Math.max((!1 !== K ? Math.min(x, tt(K, "y")) : x) - W - H, 0), u.css({
                    width: "",
                    height: C.h
                }), R.position(), at(_), C.get("onOpen"), T.add(m).hide(), o.attr("aria-hidden", "false").focus(), C.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", nt, !0), U.one(A, function() {
                    e.removeEventListener("focus", nt, !0)
                })), C.get("returnFocus") && U.one(A, function() {
                    t(C.el).focus()
                })
            }
            var B = parseFloat(C.get("opacity"));
            n.css({
                    opacity: B == B ? B : "",
                    cursor: C.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), C.get("closeButton") ? y.html(C.get("close")).attr("aria-label", C.get("close")).attr("aria-hidden", "false").appendTo(r) : y.appendTo("<div/>"),
                function() {
                    var e, n, o, a = R.prep,
                        r = ++Q;
                    P = !0, M = !1, at(q), at(j), C.get("onLoad"), C.h = C.get("height") ? tt(C.get("height"), "y") - W - H : C.get("innerHeight") && tt(C.get("innerHeight"), "y"), C.w = C.get("width") ? tt(C.get("width"), "x") - E - k : C.get("innerWidth") && tt(C.get("innerWidth"), "x"), C.mw = C.w, C.mh = C.h, C.get("maxWidth") && (C.mw = tt(C.get("maxWidth"), "x") - E - k, C.mw = C.w && C.w < C.mw ? C.w : C.mw);
                    C.get("maxHeight") && (C.mh = tt(C.get("maxHeight"), "y") - W - H, C.mh = C.h && C.h < C.mh ? C.h : C.mh);
                    if (e = C.get("href"), F = setTimeout(function() {
                            p.show()
                        }, 100), C.get("inline")) {
                        var h = t(e).eq(0);
                        o = t("<div>").hide().insertBefore(h), U.one(q, function() {
                            o.replaceWith(h)
                        }), a(h)
                    } else C.get("iframe") ? a(" ") : C.get("html") ? a(C.get("html")) : et(C, e) ? (e = it(C, e), M = C.get("createImg"), t(M).addClass($ + "Photo").bind("error." + $, function() {
                        a(V(G, "Error").html(C.get("imgError")))
                    }).one("load", function() {
                        r === Q && setTimeout(function() {
                            var e;
                            C.get("retinaImage") && i.devicePixelRatio > 1 && (M.height = M.height / i.devicePixelRatio, M.width = M.width / i.devicePixelRatio), C.get("scalePhotos") && (n = function() {
                                M.height -= M.height * e, M.width -= M.width * e
                            }, C.mw && M.width > C.mw && (e = (M.width - C.mw) / M.width, n()), C.mh && M.height > C.mh && (e = (M.height - C.mh) / M.height, n())), C.h && (M.style.marginTop = Math.max(C.mh - M.height, 0) / 2 + "px"), c[1] && (C.get("loop") || c[I + 1]) && (M.style.cursor = "pointer", t(M).bind("click." + $, function() {
                                R.next()
                            })), M.style.width = M.width + "px", M.style.height = M.height + "px", a(M)
                        }, 1)
                    }), M.src = e) : e && f.load(e, C.get("data"), function(e, i) {
                        r === Q && a("error" === i ? V(G, "Error").html(C.get("xhrError")) : t(this).contents())
                    })
                }()
        }
    }

    function st() {
        o || (K = !1, g = t(i), o = V(G).attr({
            id: O,
            class: !1 === t.support.opacity ? $ + "IE" : "",
            role: "dialog",
            "aria-hidden": "true",
            "aria-labelledby": "cboxTitle",
            "aria-describedby": "cboxCurrent",
            tabindex: "-1"
        }).hide(), n = V(G, "Overlay").hide(), p = t([V(G, "LoadingOverlay")[0], V(G, "LoadingGraphic")[0]]), a = V(G, "Wrapper"), r = V(G, "Content").append(m = V(G, "Title"), w = V(G, "Current"), b = t('<button type="button">previous</button>').attr({
            id: $ + "Previous",
            "aria-label": "previous",
            "aria-hidden": "true"
        }), x = t('<button type="button">next</button>').attr({
            id: $ + "Next",
            "aria-label": "next",
            "aria-hidden": "true"
        }), v = t('<button type="button">start slideshow</button>').attr({
            id: $ + "Slideshow",
            "aria-label": "start slideshow",
            "aria-hidden": "true"
        }), p), y = t('<button type="button">close</button>').attr({
            id: $ + "Close",
            "aria-label": "close",
            "aria-hidden": "true"
        }), a.append(V(G).append(V(G, "TopLeft"), h = V(G, "TopCenter"), V(G, "TopRight")), V(G, !1, "clear:left").append(s = V(G, "MiddleLeft"), r, l = V(G, "MiddleRight")), V(G, !1, "clear:left").append(V(G, "BottomLeft"), d = V(G, "BottomCenter"), V(G, "BottomRight"))).find("div div").css({
            float: "left"
        }), f = V(G, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), T = x.add(b).add(w).add(v)), e.body && !o.parent().length && t(e.body).append(n, o.append(a, f))
    }
    t[O] || (t(st), (R = t.fn[O] = t[O] = function(i, a) {
        var r = this;
        return i = i || {}, t.isFunction(r) && (r = t("<a/>"), i.open = !0), r[0] ? (st(), function() {
            function i(t) {
                t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), ht(this))
            }
            return !!o && (K || (K = !0, x.click(function() {
                R.next()
            }), b.click(function() {
                R.prev()
            }), y.click(function() {
                R.close()
            }), n.click(function() {
                C.get("overlayClose") && R.close()
            }), t(e).bind("keydown." + $, function(t) {
                var e = t.keyCode;
                L && C.get("escKey") && 27 === e && (t.preventDefault(), R.close()), L && C.get("arrowKey") && c[1] && !t.altKey && (37 === e ? (t.preventDefault(), b.click()) : 39 === e && (t.preventDefault(), x.click()))
            }), t.isFunction(t.fn.on) ? t(e).on("click." + $, "." + N, i) : t("." + N).live("click." + $, i)), !0)
        }() && (a && (i.onComplete = a), r.each(function() {
            var e = t.data(this, O) || {};
            t.data(this, O, t.extend(e, i))
        }).addClass(N), new Y(r[0], i).get("open") && ht(r[0])), r) : r
    }).position = function(e, i) {
        var n, c, u, f = 0,
            p = 0,
            m = o.offset();

        function w() {
            h[0].style.width = d[0].style.width = r[0].style.width = parseInt(o[0].style.width, 10) - k + "px", r[0].style.height = s[0].style.height = l[0].style.height = parseInt(o[0].style.height, 10) - H + "px"
        }
        if (g.unbind("resize." + $), o.css({
                top: -9e4,
                left: -9e4
            }), c = g.scrollTop(), u = g.scrollLeft(), C.get("fixed") ? (m.top -= c, m.left -= u, o.css({
                position: "fixed"
            })) : (f = c, p = u, o.css({
                position: "absolute"
            })), !1 !== C.get("right") ? p += Math.max(g.width() - C.w - E - k - tt(C.get("right"), "x"), 0) : !1 !== C.get("left") ? p += tt(C.get("left"), "x") : p += Math.round(Math.max(g.width() - C.w - E - k, 0) / 2), !1 !== C.get("bottom") ? f += Math.max(X() - C.h - W - H - tt(C.get("bottom"), "y"), 0) : !1 !== C.get("top") ? f += tt(C.get("top"), "y") : f += Math.round(Math.max(X() - C.h - W - H, 0) / 2), o.css({
                top: m.top,
                left: m.left,
                visibility: "visible"
            }).attr("aria-hidden", "false"), a[0].style.width = a[0].style.height = "9999px", n = {
                width: C.w + E + k,
                height: C.h + W + H,
                top: f,
                left: p
            }, e) {
            var v = 0;
            t.each(n, function(t) {
                n[t] === J[t] || (v = e)
            }), e = v
        }
        J = n, e || o.css(n), o.dequeue().animate(n, {
            duration: e || 0,
            complete: function() {
                w(), P = !1, a[0].style.width = C.w + E + k + "px", a[0].style.height = C.h + W + H + "px", C.get("reposition") && setTimeout(function() {
                    g.bind("resize." + $, R.position)
                }, 1), t.isFunction(i) && i()
            },
            step: w
        })
    }, R.resize = function(t) {
        var e;
        L && ((t = t || {}).width && (C.w = tt(t.width, "x") - E - k), t.innerWidth && (C.w = tt(t.innerWidth, "x")), u.css({
            width: C.w
        }), t.height && (C.h = tt(t.height, "y") - W - H), t.innerHeight && (C.h = tt(t.innerHeight, "y")), t.innerHeight || t.height || (e = u.scrollTop(), u.css({
            height: "auto"
        }), C.h = u.height()), u.css({
            height: C.h
        }), e && u.scrollTop(e), R.position("none" === C.get("transition") ? 0 : C.get("speed")))
    }, R.prep = function(i) {
        if (L) {
            var n, a = "none" === C.get("transition") ? 0 : C.get("speed");
            u.remove(), (u = V(G, "LoadedContent").append(i)).hide().appendTo(f.show()).css({
                width: (C.w = C.w || u.width(), C.w = C.mw && C.mw < C.w ? C.mw : C.w, C.w),
                overflow: C.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: (C.h = C.h || u.height(), C.h = C.mh && C.mh < C.h ? C.mh : C.h, C.h)
            }).prependTo(r), f.hide(), t(M).css({
                float: "none"
            }), ot(C.get("className")), n = function() {
                var i, n, r = c.length;

                function h() {
                    !1 === t.support.opacity && o[0].style.removeAttribute("filter")
                }
                L && (n = function() {
                    clearTimeout(F), p.hide(), at(D), C.get("onComplete")
                }, m.html(C.get("title")).show(), u.show(), r > 1 ? ("string" == typeof C.get("current") && w.html(C.get("current").replace("{current}", I + 1).replace("{total}", r)).show(), $showNext = C.get("loop") || I < r - 1, x[$showNext ? "show" : "hide"]().html(C.get("next")).attr("aria-hidden", $showNext ? "false" : "true").attr("aria-label", C.get("next")), $showPrev = C.get("loop") || I, b[$showPrev ? "show" : "hide"]().html(C.get("previous")).attr("aria-hidden", $showPrev ? "false" : "true").attr("aria-label", C.get("previous")), rt(), C.get("preloading") && t.each([Z(-1), Z(1)], function() {
                    var i = c[this],
                        n = new Y(i, t.data(i, O)),
                        o = n.get("href");
                    o && et(n, o) && (o = it(n, o), e.createElement("img").src = o)
                })) : T.hide(), C.get("iframe") ? (i = C.get("createIframe"), C.get("scrolling") || (i.scrolling = "no"), t(i).attr({
                    src: C.get("href"),
                    class: $ + "Iframe"
                }).one("load", n).appendTo(u), U.one(q, function() {
                    i.src = "//about:blank"
                }), C.get("fastIframe") && t(i).trigger("load")) : n(), "fade" === C.get("transition") ? o.fadeTo(a, 1, h) : h())
            }, "fade" === C.get("transition") ? o.fadeTo(a, 0, function() {
                R.position(0, n)
            }) : R.position(a, n)
        }
    }, R.next = function() {
        !P && c[1] && (C.get("loop") || c[I + 1]) && (I = Z(1), ht(c[I]))
    }, R.prev = function() {
        !P && c[1] && (C.get("loop") || I) && (I = Z(-1), ht(c[I]))
    }, R.close = function() {
        L && !S && (S = !0, L = !1, at(z), C.get("onCleanup"), g.unbind("." + $), n.fadeTo(C.get("fadeOut") || 0, 0), o.stop().fadeTo(C.get("fadeOut") || 0, 0, function() {
            o.hide().attr("aria-hidden", "true"), n.hide(), at(q), u.remove(), setTimeout(function() {
                S = !1, at(A), C.get("onClosed")
            }, 1)
        }))
    }, R.remove = function() {
        o && (o.stop(), t[O].close(), o.stop(!1, !0).remove(), n.remove(), S = !1, o = null, t("." + N).removeData(O).removeClass(N), t(e).unbind("click." + $).unbind("keydown." + $))
    }, R.element = function() {
        return t(C.el)
    }, R.settings = B)
}(jQuery, document, window);;
(function($, Drupal) {

    'use strict';

    Drupal.behaviors.initColorbox = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
                return;
            }

            if (settings.colorbox.mobiledetect && window.matchMedia) {
                // Disable Colorbox for small screens.
                var mq = window.matchMedia('(max-device-width: ' + settings.colorbox.mobiledevicewidth + ')');
                if (mq.matches) {
                    return;
                }
            }

            settings.colorbox.rel = function() {
                return $(this).data('colorbox-gallery')
            };

            $('.colorbox', context)
                .once('init-colorbox')
                .colorbox(settings.colorbox);
        }
    };

})(jQuery, Drupal);;
/**
 * @file
 */

(function($) {

    Drupal.behaviors.initColorboxDefaultStyle = {
        attach: function(context, settings) {
            $(context).bind('cbox_complete', function() {
                // Only run if there is a title.
                if ($('#cboxTitle:empty', context).length == false) {
                    $('#cboxLoadedContent img', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideDown();
                    });
                    $('#cboxOverlay', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideUp();
                    });
                } else {
                    $('#cboxTitle', context).hide();
                }
            });
        }
    };

})(jQuery);;
/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function($, Drupal, drupalSettings) {
    'use strict';
    /**
     * Use this behavior as a template for custom Javascript.
     */
    Drupal.behaviors.metro_calc_router = {
        attach: function(context, settings) {

            // Restore station radio if browser back button is pressed from Calculo
            if (performance.navigation.type == 2) {;
                //$("input[type='radio'][value='station']").click ();
                $('.form-ruta')[0].reset();
                $('[data-js-id="origin_station"]').val('');
                $('[data-js-id="origin_address"]').val('');
                $('[data-js-id="destination_station"]').val('');
                $('[data-js-id="destination_address"]').val('');
            }

            // Store the autocomplete ids in hidden fields from the form
            $('[data-js-id="origin_station"], [data-js-id="origin_address"], [data-js-id="destination_station"], [data-js-id="destination_address"]').autocomplete({
                select: function(event, ui) {
                    var selectedObj = ui.item;

                    $('input[name="' + event.target.name + '_id"]').val(selectedObj.value);
                    selectedObj.value = selectedObj.label;
                }
            });

            // Do not allow to enter invalid values on the station autocomplete fields
            $('[data-js-id="origin_station"], [data-js-id="destination_station"]').autocomplete({
                change: function(event, ui) {
                    var selectedObj = ui.item;

                    if (selectedObj == null) {
                        $('input[name="' + event.target.name).val('').focus();
                        //$('[data-drupal-selector="edit-submit"]').prop('disabled', true);
                    } else {
                        //$('[data-drupal-selector="edit-submit"]').prop('enabled', true);
                    }
                }
            });

            // Flip input fields content
            // Do not use ids, Drupal may append '--2' if the form is rendered in other page
            $('#form-ruta-flip-fields').click(function() {
                var tmp = $('[data-js-id="origin_station"]').val();
                $('[data-js-id="origin_station"]').val($('[data-js-id="destination_station"]').val());
                $('[data-js-id="destination_station"]').val(tmp);

                var tmp = $('[data-js-id="origin_address"]').val();
                $('[data-js-id="origin_address"]').val($('[data-js-id="destination_address"]').val());
                $('[data-js-id="destination_address"]').val(tmp);

                var tmp = $('[name="origin_station_id"]').val();
                $('[name="origin_station_id"]').val($('[name="destination_station_id"]').val());
                $('[name="destination_station_id"]').val(tmp);

                var tmp = $('[name="origin_address_id"]').val();
                $('[name="origin_address_id"]').val($('[name="destination_address_id"]').val());
                $('[name="destination_address_id"]').val(tmp);

                var radios_origin = $("input[type='radio'][name='calc_mode_origin']");
                var radios_destination = $("input[type='radio'][name='calc_mode_destination']");
                var idx_origin_checked = (radios_origin[0].checked) ? 0 : 1;
                var idx_destination_checked = (radios_destination[0].checked) ? 0 : 1;
                // Flip radios
                radios_origin[idx_destination_checked].checked = true;
                radios_destination[idx_origin_checked].checked = true;

                // Hide/show fields & geofindme after flip
                if (radios_origin[0].checked) {
                    $('#form-ruta-geofindme-origin').addClass('hide');
                    $('.form-item-origin-station').show();
                    $('.form-item-origin-address').hide();
                    $('[data-js-id="origin_address"]').addClass('hide');
                } else {
                    $('#form-ruta-geofindme-origin').removeClass('hide');
                    $('.form-item-origin-station').hide();
                    $('.form-item-origin-address').show();
                    $('[data-js-id="origin_address"]').removeClass('hide');
                }
                if (radios_destination[0].checked) {
                    $('#form-ruta-geofindme-destination').addClass('hide');
                    $('.form-item-destination-station').show();
                    $('.form-item-destination-address').hide();
                    $('[data-js-id="destination_address"]').addClass('hide');
                } else {
                    $('#form-ruta-geofindme-destination').removeClass('hide');
                    $('.form-item-destination-station').hide();
                    $('.form-item-destination-address').show();
                    $('[data-js-id="destination_address"]').removeClass('hide');
                }

            });

            // Show geolocation icon only in Address mode. Elements are initially hidden using the Zurb class 'hide'
            $("input[type='radio'][name='calc_mode_origin']").click(function() {
                if (this.value == 'address') {
                    $('#form-ruta-geofindme-origin').removeClass('hide');
                    $('[data-js-id="origin_address"]').removeClass('hide');
                } else {
                    $('#form-ruta-geofindme-origin').addClass('hide');
                    $('[data-js-id="origin_address"]').addClass('hide');
                }
            });
            $("input[type='radio'][name='calc_mode_destination']").click(function() {
                if (this.value == 'address') {
                    $('#form-ruta-geofindme-destination').removeClass('hide');
                    $('[data-js-id="destination_address"]').removeClass('hide');
                } else {
                    $('#form-ruta-geofindme-destination').addClass('hide');
                    $('[data-js-id="destination_address"]').addClass('hide');
                }
            });

            // My location (origin)
            $('#form-ruta-geofindme-origin').click(function() {
                // Element to render results of errors
                var origin = document.getElementsByName("origin_address")[0];
                var output = document.getElementById('geo-message');

                if (!navigator.geolocation) {
                    output.innerHTML = '<p>' + Drupal.t('Geolocation is not supported by your browser') + '</p>';
                    return;
                }

                function geoFindMeSuccess(position) {
                    var latitude = position.coords.latitude.toFixed(6);
                    var longitude = position.coords.longitude.toFixed(6);

                    output.innerHTML = '';
                    origin.value = '[' + latitude + ',' + longitude + ']';
                    // Enable the submit button
                    var submit_btn = document.getElementsByClassName('route-calc-form-submit')[0];
                    submit_btn.disabled = false;
                };

                function geoFindMeError(error) {
                    var error_txt = '';

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            error_txt = Drupal.t("Permission denied by user.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            error_txt = Drupal.t("Location position unavailable.");
                            break;
                        case error.TIMEOUT:
                            error_txt = Drupal.t("Request timeout.");
                            break;
                        case error.UNKNOWN_ERROR:
                            error_txt = Drupal.t("Unknown error.");
                            break;
                    }
                    output.innerHTML = '<p>' + Drupal.t('Unable to retrieve your location: ') + error_txt + '</p>';

                    // If geolocation errors dismiss button and reset the form
                    setTimeout(function() {
                        $('#geo-message').fadeOut(500);
                        $('#form-ruta-geofindme-origin').fadeOut(500);
                        $('.form-ruta')[0].reset();
                    }, 3000);
                };

                output.innerHTML = '<p>' + Drupal.t('Locating…') + '</p>';

                navigator.geolocation.getCurrentPosition(
                    geoFindMeSuccess,
                    geoFindMeError, {
                        timeout: 5000,
                        enableHighAccuracy: true
                    }
                );
            });

            // My location (destination)
            $('#form-ruta-geofindme-destination').click(function() {
                // Element to render results of errors
                var origin = document.getElementsByName("destination_address")[0];
                var output = document.getElementById('geo-message');

                if (!navigator.geolocation) {
                    output.innerHTML = '<p>' + Drupal.t('Geolocation is not supported by your browser') + '</p>';
                    return;
                }

                function geoFindMeSuccess(position) {
                    var latitude = position.coords.latitude.toFixed(6);
                    var longitude = position.coords.longitude.toFixed(6);

                    output.innerHTML = '';
                    origin.value = '[' + latitude + ',' + longitude + ']';
                    // Enable the submit button
                    var submit_btn = document.getElementsByClassName('route-calc-form-submit')[0];
                    submit_btn.disabled = false;
                };

                function geoFindMeError(error) {
                    var error_txt = '';

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            error_txt = Drupal.t("Permission denied by user.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            error_txt = Drupal.t("Location position unavailable.");
                            break;
                        case error.TIMEOUT:
                            error_txt = Drupal.t("Request timeout.");
                            break;
                        case error.UNKNOWN_ERROR:
                            error_txt = Drupal.t("Unknown error.");
                            break;
                    }
                    output.innerHTML = '<p>' + Drupal.t('Unable to retrieve your location: ') + error_txt + '</p>';

                    // If geolocation errors dismiss button and reset the form
                    setTimeout(function() {
                        $('#geo-message').fadeOut(500);
                        $('#form-ruta-geofindme-destination').fadeOut(500);
                        $('.form-ruta')[0].reset();
                    }, 3000);
                };

                output.innerHTML = '<p>' + Drupal.t('Locating…') + '</p>';

                navigator.geolocation.getCurrentPosition(
                    geoFindMeSuccess,
                    geoFindMeError, {
                        timeout: 5000,
                        enableHighAccuracy: true
                    }
                );
            });

        }
    };
})(jQuery, Drupal, drupalSettings);;
(function() {
    "use strict";
    var summaryNode = "summary";
    var detailsNode = "details";
    document.createElement(detailsNode);
    document.createElement(summaryNode);

    function init() {
        var isDetailsSupported = Modernizr.details;
        if (!isDetailsSupported) {
            var rightArrow = String.fromCharCode(9658);
            var downArrow = String.fromCharCode(9660);
            var styles = ["details > * {position: absolute;top: -4000px;left: -4000px;}", "details > summary, details[open] > * {position: static;}", "details, details > summary {display: block;}", 'details > summary:before {content: "' + rightArrow + '";padding-right: 5px;font-size: 11px;}', 'details[open] > summary:before {content:"' + downArrow + '"}'];
            if (false) {
                styles.push("details > summary { ... }")
            }
            styles = styles.join("\n");
            var head = document.getElementsByTagName("HEAD")[0];
            var css = document.createElement("style");
            css.type = "text/css";
            if (css.styleSheet) {
                css.styleSheet.cssText = styles
            } else {
                css.appendChild(document.createTextNode(styles))
            }
            var c = head.childNodes && head.childNodes[0];
            if (c) {
                head.insertBefore(css, c)
            } else {
                head.appendChild(css)
            }
            var body = document.getElementsByTagName("BODY")[0];
            if (!window.addEventListener) {
                window.addEventListener = function(eventType, callback, dummy) {
                    document.attachEvent("on" + eventType, function(event) {
                        var e = event || window.event;
                        if (!e.target) {
                            e.target = e.srcElement
                        }
                        if (typeof e.preventDefault !== "function") {
                            e.preventDefault = function() {
                                this.returnValue = false
                            }
                        }
                        if (typeof e.stopPropagation !== "function") {
                            e.stopPropagation = function() {
                                this.cancelBubble = true
                            }
                        }
                        callback(e)
                    })
                }
            }
            var dummyClassName = "trigger-refresh ";
            var dummyClassNameLength = dummyClassName.length;
            body.className = body.className || "";
            window.addEventListener("click", function(event) {
                var target = event.target;
                var targetNode, parentNode;
                while (target) {
                    targetNode = target.nodeName.toLowerCase();
                    if (targetNode === summaryNode) {
                        parentNode = target.parentNode;
                        if (parentNode.getAttributeNode("open")) {
                            parentNode.removeAttribute("open")
                        } else {
                            parentNode.setAttribute("open", "open")
                        }
                        body.className = dummyClassName + body.className;
                        body.className = body.className.substr(dummyClassNameLength);
                        break
                    }
                    if (targetNode === detailsNode) {
                        break
                    }
                    target = target.parentNode
                }
            }, false)
        }
    }

    function loader() {
        if (document.getElementsByTagName("BODY").length > 0) {
            init()
        } else {
            setTimeout(loader, 50)
        }
    }
    loader()
})();;
/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version 1.3.4
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var DateFormatter;
! function() {
    "use strict";
    var t, e, r, n, a, u, i;
    u = 864e5, i = 3600, t = function(t, e) {
        return "string" == typeof t && "string" == typeof e && t.toLowerCase() === e.toLowerCase()
    }, e = function(t, r, n) {
        var a = n || "0",
            u = t.toString();
        return u.length < r ? e(a + u, r) : u
    }, r = function(t) {
        var e, n;
        for (t = t || {}, e = 1; e < arguments.length; e++)
            if (n = arguments[e])
                for (var a in n) n.hasOwnProperty(a) && ("object" == typeof n[a] ? r(t[a], n[a]) : t[a] = n[a]);
        return t
    }, n = function(t, e) {
        for (var r = 0; r < e.length; r++)
            if (e[r].toLowerCase() === t.toLowerCase()) return r;
        return -1
    }, a = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function(t) {
                var e = t % 10,
                    r = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                return 1 !== Math.floor(t % 100 / 10) && r[e] ? r[e] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, DateFormatter = function(t) {
        var e = this,
            n = r(a, t);
        e.dateSettings = n.dateSettings, e.separators = n.separators, e.validParts = n.validParts, e.intParts = n.intParts, e.tzParts = n.tzParts, e.tzClip = n.tzClip
    }, DateFormatter.prototype = {
        constructor: DateFormatter,
        getMonth: function(t) {
            var e, r = this;
            return e = n(t, r.dateSettings.monthsShort) + 1, 0 === e && (e = n(t, r.dateSettings.months) + 1), e
        },
        parseDate: function(e, r) {
            var n, a, u, i, s, o, c, f, l, h, d = this,
                g = !1,
                m = !1,
                p = d.dateSettings,
                y = {
                    date: null,
                    year: null,
                    month: null,
                    day: null,
                    hour: 0,
                    min: 0,
                    sec: 0
                };
            if (!e) return null;
            if (e instanceof Date) return e;
            if ("U" === r) return u = parseInt(e), u ? new Date(1e3 * u) : e;
            switch (typeof e) {
                case "number":
                    return new Date(e);
                case "string":
                    break;
                default:
                    return null
            }
            if (n = r.match(d.validParts), !n || 0 === n.length) throw new Error("Invalid date format definition.");
            for (a = e.replace(d.separators, "\x00").split("\x00"), u = 0; u < a.length; u++) switch (i = a[u], s = parseInt(i), n[u]) {
                case "y":
                case "Y":
                    if (!s) return null;
                    l = i.length, y.year = 2 === l ? parseInt((70 > s ? "20" : "19") + i) : s, g = !0;
                    break;
                case "m":
                case "n":
                case "M":
                case "F":
                    if (isNaN(s)) {
                        if (o = d.getMonth(i), !(o > 0)) return null;
                        y.month = o
                    } else {
                        if (!(s >= 1 && 12 >= s)) return null;
                        y.month = s
                    }
                    g = !0;
                    break;
                case "d":
                case "j":
                    if (!(s >= 1 && 31 >= s)) return null;
                    y.day = s, g = !0;
                    break;
                case "g":
                case "h":
                    if (c = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, h = a[c], c > -1) f = t(h, p.meridiem[0]) ? 0 : t(h, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && f > -1 ? y.hour = s + f - 1 : s >= 0 && 23 >= s && (y.hour = s);
                    else {
                        if (!(s >= 0 && 23 >= s)) return null;
                        y.hour = s
                    }
                    m = !0;
                    break;
                case "G":
                case "H":
                    if (!(s >= 0 && 23 >= s)) return null;
                    y.hour = s, m = !0;
                    break;
                case "i":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.min = s, m = !0;
                    break;
                case "s":
                    if (!(s >= 0 && 59 >= s)) return null;
                    y.sec = s, m = !0
            }
            if (g === !0 && y.year && y.month && y.day) y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);
            else {
                if (m !== !0) return null;
                y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0)
            }
            return y.date
        },
        guessDate: function(t, e) {
            if ("string" != typeof t) return t;
            var r, n, a, u, i, s, o = this,
                c = t.replace(o.separators, "\x00").split("\x00"),
                f = /^[djmn]/g,
                l = e.match(o.validParts),
                h = new Date,
                d = 0;
            if (!f.test(l[0])) return t;
            for (a = 0; a < c.length; a++) {
                if (d = 2, i = c[a], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
                switch (a) {
                    case 0:
                        "m" === l[0] || "n" === l[0] ? h.setMonth(s - 1) : h.setDate(s);
                        break;
                    case 1:
                        "m" === l[0] || "n" === l[0] ? h.setDate(s) : h.setMonth(s - 1);
                        break;
                    case 2:
                        if (n = h.getFullYear(), r = i.length, d = 4 > r ? r : 4, n = parseInt(4 > r ? n.toString().substr(0, 4 - r) + i : i.substr(0, 4)), !n) return null;
                        h.setFullYear(n);
                        break;
                    case 3:
                        h.setHours(s);
                        break;
                    case 4:
                        h.setMinutes(s);
                        break;
                    case 5:
                        h.setSeconds(s)
                }
                u = i.substr(d), u.length > 0 && c.splice(a + 1, 0, u)
            }
            return h
        },
        parseFormat: function(t, r) {
            var n, a = this,
                s = a.dateSettings,
                o = /\\?(.?)/gi,
                c = function(t, e) {
                    return n[t] ? n[t]() : e
                };
            return n = {
                d: function() {
                    return e(n.j(), 2)
                },
                D: function() {
                    return s.daysShort[n.w()]
                },
                j: function() {
                    return r.getDate()
                },
                l: function() {
                    return s.days[n.w()]
                },
                N: function() {
                    return n.w() || 7
                },
                w: function() {
                    return r.getDay()
                },
                z: function() {
                    var t = new Date(n.Y(), n.n() - 1, n.j()),
                        e = new Date(n.Y(), 0, 1);
                    return Math.round((t - e) / u)
                },
                W: function() {
                    var t = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
                        r = new Date(t.getFullYear(), 0, 4);
                    return e(1 + Math.round((t - r) / u / 7), 2)
                },
                F: function() {
                    return s.months[r.getMonth()]
                },
                m: function() {
                    return e(n.n(), 2)
                },
                M: function() {
                    return s.monthsShort[r.getMonth()]
                },
                n: function() {
                    return r.getMonth() + 1
                },
                t: function() {
                    return new Date(n.Y(), n.n(), 0).getDate()
                },
                L: function() {
                    var t = n.Y();
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 1 : 0
                },
                o: function() {
                    var t = n.n(),
                        e = n.W(),
                        r = n.Y();
                    return r + (12 === t && 9 > e ? 1 : 1 === t && e > 9 ? -1 : 0)
                },
                Y: function() {
                    return r.getFullYear()
                },
                y: function() {
                    return n.Y().toString().slice(-2)
                },
                a: function() {
                    return n.A().toLowerCase()
                },
                A: function() {
                    var t = n.G() < 12 ? 0 : 1;
                    return s.meridiem[t]
                },
                B: function() {
                    var t = r.getUTCHours() * i,
                        n = 60 * r.getUTCMinutes(),
                        a = r.getUTCSeconds();
                    return e(Math.floor((t + n + a + i) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return n.G() % 12 || 12
                },
                G: function() {
                    return r.getHours()
                },
                h: function() {
                    return e(n.g(), 2)
                },
                H: function() {
                    return e(n.G(), 2)
                },
                i: function() {
                    return e(r.getMinutes(), 2)
                },
                s: function() {
                    return e(r.getSeconds(), 2)
                },
                u: function() {
                    return e(1e3 * r.getMilliseconds(), 6)
                },
                e: function() {
                    var t = /\((.*)\)/.exec(String(r))[1];
                    return t || "Coordinated Universal Time"
                },
                I: function() {
                    var t = new Date(n.Y(), 0),
                        e = Date.UTC(n.Y(), 0),
                        r = new Date(n.Y(), 6),
                        a = Date.UTC(n.Y(), 6);
                    return t - e !== r - a ? 1 : 0
                },
                O: function() {
                    var t = r.getTimezoneOffset(),
                        n = Math.abs(t);
                    return (t > 0 ? "-" : "+") + e(100 * Math.floor(n / 60) + n % 60, 4)
                },
                P: function() {
                    var t = n.O();
                    return t.substr(0, 3) + ":" + t.substr(3, 2)
                },
                T: function() {
                    var t = (String(r).match(a.tzParts) || [""]).pop().replace(a.tzClip, "");
                    return t || "UTC"
                },
                Z: function() {
                    return 60 * -r.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(o, c)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(o, c)
                },
                U: function() {
                    return r.getTime() / 1e3 || 0
                }
            }, c(t, t)
        },
        formatDate: function(t, e) {
            var r, n, a, u, i, s = this,
                o = "",
                c = "\\";
            if ("string" == typeof t && (t = s.parseDate(t, e), !t)) return null;
            if (t instanceof Date) {
                for (a = e.length, r = 0; a > r; r++) i = e.charAt(r), "S" !== i && i !== c && (r > 0 && e.charAt(r - 1) === c ? o += i : (u = s.parseFormat(i, t), r !== a - 1 && s.intParts.test(i) && "S" === e.charAt(r + 1) && (n = parseInt(u) || 0, u += s.dateSettings.ordinal(n)), o += u));
                return o
            }
            return ""
        }
    }
}();
/**
 * @preserve jQuery DateTimePicker
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
 */

/**
 * @param {jQuery} $
 */
var datetimepickerFactory = function($) {
    'use strict';

    var default_options = {
        i18n: {
            ar: { // Arabic
                months: [
                    "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
                ],
                dayOfWeekShort: [
                    "ن", "ث", "ع", "خ", "ج", "س", "ح"
                ],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: { // Romanian
                months: [
                    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
                ],
                dayOfWeekShort: [
                    "Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"
                ],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: { // Indonesian
                months: [
                    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                ],
                dayOfWeekShort: [
                    "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
                ],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: { // Icelandic
                months: [
                    "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
                ],
                dayOfWeekShort: [
                    "Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
                ],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: { // Bulgarian
                months: [
                    "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
                ],
                dayOfWeekShort: [
                    "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
                ],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: { // Persian/Farsi
                months: [
                    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
                ],
                dayOfWeekShort: [
                    'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
                ],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: { // Russian
                months: [
                    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                dayOfWeekShort: [
                    "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
                ],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: { // Ukrainian
                months: [
                    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
                ],
                dayOfWeekShort: [
                    "Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
                ],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: { // English
                months: [
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                ],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: { // Ελληνικά
                months: [
                    "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
                ],
                dayOfWeekShort: [
                    "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
                ],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: { // German
                months: [
                    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
                ],
                dayOfWeekShort: [
                    "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
                ],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: { // Dutch
                months: [
                    "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
                ],
                dayOfWeekShort: [
                    "zo", "ma", "di", "wo", "do", "vr", "za"
                ],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: { // Turkish
                months: [
                    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
                ],
                dayOfWeekShort: [
                    "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
                ],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: { //French
                months: [
                    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                ],
                dayOfWeekShort: [
                    "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
                ],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: { // Spanish
                months: [
                    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
                ],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: { // Thai
                months: [
                    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
                ],
                dayOfWeekShort: [
                    'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
                ],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: { // Polish
                months: [
                    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
                ],
                dayOfWeekShort: [
                    "nd", "pn", "wt", "śr", "cz", "pt", "sb"
                ],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: { // Portuguese
                months: [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ],
                dayOfWeekShort: [
                    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
                ],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: { // Simplified Chinese
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ]
            },
            se: { // Swedish
                months: [
                    "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
                ]
            },
            km: { // Khmer (ភាសាខ្មែរ)
                months: [
                    "មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"
                ],
                dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
            },
            kr: { // Korean
                months: [
                    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ],
                dayOfWeekShort: [
                    "일", "월", "화", "수", "목", "금", "토"
                ],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: { // Italian
                months: [
                    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
                ],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: { // Dansk
                months: [
                    "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
                ],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: { // Norwegian
                months: [
                    "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
                ],
                dayOfWeekShort: [
                    "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
                ],
                dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
            },
            ja: { // Japanese
                months: [
                    "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
                ],
                dayOfWeekShort: [
                    "日", "月", "火", "水", "木", "金", "土"
                ],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: { // Vietnamese
                months: [
                    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
                ],
                dayOfWeekShort: [
                    "CN", "T2", "T3", "T4", "T5", "T6", "T7"
                ],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: { // Slovenščina
                months: [
                    "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
                ],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: { // Čeština
                months: [
                    "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
                ],
                dayOfWeekShort: [
                    "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
                ]
            },
            hu: { // Hungarian
                months: [
                    "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
                ],
                dayOfWeekShort: [
                    "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
                ],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: { //Azerbaijanian (Azeri)
                months: [
                    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
                ],
                dayOfWeekShort: [
                    "B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
                ],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: { //Bosanski
                months: [
                    "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: { //Català
                months: [
                    "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
                ],
                dayOfWeekShort: [
                    "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
                ],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            'en-GB': { //English (British)
                months: [
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                ],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: { //"Eesti"
                months: [
                    "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
                ],
                dayOfWeekShort: [
                    "P", "E", "T", "K", "N", "R", "L"
                ],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: { //Euskara
                months: [
                    "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
                ],
                dayOfWeekShort: [
                    "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
                ],
                dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
            },
            fi: { //Finnish (Suomi)
                months: [
                    "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
                ],
                dayOfWeekShort: [
                    "Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
                ],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: { //Galego
                months: [
                    "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
                ],
                dayOfWeekShort: [
                    "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
                ],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: { //Hrvatski
                months: [
                    "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: { //Korean (한국어)
                months: [
                    "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ],
                dayOfWeekShort: [
                    "일", "월", "화", "수", "목", "금", "토"
                ],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: { //Lithuanian (lietuvių)
                months: [
                    "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
                ],
                dayOfWeekShort: [
                    "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
                ],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: { //Latvian (Latviešu)
                months: [
                    "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
                ],
                dayOfWeekShort: [
                    "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
                ],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: { //Macedonian (Македонски)
                months: [
                    "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
                ],
                dayOfWeekShort: [
                    "нед", "пон", "вто", "сре", "чет", "пет", "саб"
                ],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: { //Mongolian (Монгол)
                months: [
                    "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
                ],
                dayOfWeekShort: [
                    "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
                ],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            'pt-BR': { //Português(Brasil)
                months: [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ],
                dayOfWeekShort: [
                    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
                ],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: { //Slovenčina
                months: [
                    "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
                ],
                dayOfWeekShort: [
                    "Ne", "Po", "Ut", "St", "Št", "Pi", "So"
                ],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: { //Albanian (Shqip)
                months: [
                    "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
                ],
                dayOfWeekShort: [
                    "Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"
                ],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            'sr-YU': { //Serbian (Srpski)
                months: [
                    "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
                ],
                dayOfWeekShort: [
                    "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
                ],
                dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: { //Serbian Cyrillic (Српски)
                months: [
                    "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
                ],
                dayOfWeekShort: [
                    "нед", "пон", "уто", "сре", "чет", "пет", "суб"
                ],
                dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: { //Svenska
                months: [
                    "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
                ],
                dayOfWeekShort: [
                    "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
                ],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            'zh-TW': { //Traditional Chinese (繁體中文)
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: { //Simplified Chinese (简体中文)
                months: [
                    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                dayOfWeekShort: [
                    "日", "一", "二", "三", "四", "五", "六"
                ],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            ug: { // Uyghur(ئۇيغۇرچە)
                months: [
                    "1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"
                ],
                dayOfWeek: [
                    "يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"
                ]
            },
            he: { //Hebrew (עברית)
                months: [
                    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
                ],
                dayOfWeekShort: [
                    'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
                ],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: { // Armenian
                months: [
                    "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
                ],
                dayOfWeekShort: [
                    "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
                ],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: { // Kyrgyz
                months: [
                    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
                ],
                dayOfWeekShort: [
                    "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
                ],
                dayOfWeek: [
                    "Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"
                ]
            },
            rm: { // Romansh
                months: [
                    "Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"
                ],
                dayOfWeekShort: [
                    "Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"
                ],
                dayOfWeek: [
                    "Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"
                ]
            },
            ka: { // Georgian
                months: [
                    'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
                ],
                dayOfWeekShort: [
                    "კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"
                ],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            }
        },

        ownerDocument: document,
        contentWindow: window,

        value: '',
        rtl: false,

        format: 'Y/m/d H:i',
        formatTime: 'H:i',
        formatDate: 'Y/m/d',

        startDate: false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
        step: 60,
        monthChangeSpinner: true,

        closeOnDateSelect: false,
        closeOnTimeSelect: true,
        closeOnWithoutClick: true,
        closeOnInputClick: true,
        openOnFocus: true,

        timepicker: true,
        datepicker: true,
        weeks: false,

        defaultTime: false, // use formatTime format (ex. '10:00' for formatTime:	'H:i')
        defaultDate: false, // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        minDateTime: false,

        disabledMinTime: false,
        disabledMaxTime: false,

        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        theme: '',
        touchMovedThreshold: 5,

        onSelectDate: function() {},
        onSelectTime: function() {},
        onChangeMonth: function() {},
        onGetWeekOfYear: function() {},
        onChangeYear: function() {},
        onChangeDateTime: function() {},
        onShow: function() {},
        onClose: function() {},
        onGenerate: function() {},

        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        next: 'xdsoft_next',
        prev: 'xdsoft_prev',
        dayOfWeekStart: 0,
        parentID: 'body',
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        prevButton: true,
        nextButton: true,
        defaultSelect: true,

        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,

        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: '',
        id: '',
        fixed: false,
        roundTime: 'round', // ceil, floor
        className: '',
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,

        enterLikeTab: true,
        showApplyButton: false
    };

    var dateHelper = null,
        globalLocaleDefault = 'en',
        globalLocale = 'en';

    var dateFormatterOptionsDefault = {
        meridiem: ['AM', 'PM']
    };

    var initDateFormatter = function() {
        var locale = default_options.i18n[globalLocale],
            opts = {
                days: locale.dayOfWeek,
                daysShort: locale.dayOfWeekShort,
                months: locale.months,
                monthsShort: $.map(locale.months, function(n) {
                    return n.substring(0, 3)
                })
            };

        if (typeof DateFormatter === 'function') {
            dateHelper = new DateFormatter({
                dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
            });
        }
    };

    // for locale settings
    $.datetimepicker = {
        setLocale: function(locale) {
            var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
            if (globalLocale !== newLocale) {
                globalLocale = newLocale;
                // reinit date formatter
                initDateFormatter();
            }
        },

        setDateFormatter: function(dateFormatter) {
            dateHelper = dateFormatter;
        },

        RFC_2822: 'D, d M Y H:i:s O',
        ATOM: 'Y-m-d\TH:i:sP',
        ISO_8601: 'Y-m-d\TH:i:sO',
        RFC_822: 'D, d M y H:i:s O',
        RFC_850: 'l, d-M-y H:i:s T',
        RFC_1036: 'D, d M y H:i:s O',
        RFC_1123: 'D, d M Y H:i:s O',
        RSS: 'D, d M Y H:i:s O',
        W3C: 'Y-m-d\TH:i:sP'
    };

    // first init date formatter
    initDateFormatter();

    // fix for ie8
    if (!window.getComputedStyle) {
        window.getComputedStyle = function(el) {
            this.el = el;
            this.getPropertyValue = function(prop) {
                var re = /(-([a-z]))/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function(a, b, c) {
                        return c.toUpperCase();
                    });
                }
                return el.currentStyle[prop] || null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            var i, j;
            for (i = (start || 0), j = this.length; i < j; i += 1) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
    }

    Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    };

    $.fn.xdsoftScroller = function(options, percent) {
        return this.each(function() {
            var timeboxparent = $(this),
                pointerEventToXY = function(e) {
                    var out = {
                            x: 0,
                            y: 0
                        },
                        touch;
                    if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                        touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        out.x = touch.clientX;
                        out.y = touch.clientY;
                    } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
                        out.x = e.clientX;
                        out.y = e.clientY;
                    }
                    return out;
                },
                timebox,
                parentHeight,
                height,
                scrollbar,
                scroller,
                maximumOffset = 100,
                start = false,
                startY = 0,
                startTop = 0,
                h1 = 0,
                touchStart = false,
                startTopScroll = 0,
                calcOffset = function() {};

            if (percent === 'hide') {
                timeboxparent.find('.xdsoft_scrollbar').hide();
                return;
            }

            if (!$(this).hasClass('xdsoft_scroller_box')) {
                timebox = timeboxparent.children().eq(0);
                parentHeight = timeboxparent[0].clientHeight;
                height = timebox[0].offsetHeight;
                scrollbar = $('<div class="xdsoft_scrollbar"></div>');
                scroller = $('<div class="xdsoft_scroller"></div>');
                scrollbar.append(scroller);

                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                calcOffset = function calcOffset(event) {
                    var offset = pointerEventToXY(event).y - startY + startTopScroll;
                    if (offset < 0) {
                        offset = 0;
                    }
                    if (offset + scroller[0].offsetHeight > h1) {
                        offset = h1 - scroller[0].offsetHeight;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
                };

                scroller
                    .on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function(event) {
                        if (!parentHeight) {
                            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
                        }

                        startY = pointerEventToXY(event).y;
                        startTopScroll = parseInt(scroller.css('margin-top'), 10);
                        h1 = scrollbar[0].offsetHeight;

                        if (event.type === 'mousedown' || event.type === 'touchstart') {
                            if (options.ownerDocument) {
                                $(options.ownerDocument.body).addClass('xdsoft_noselect');
                            }
                            $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
                                $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee)
                                    .off('mousemove.xdsoft_scroller', calcOffset)
                                    .removeClass('xdsoft_noselect');
                            });
                            $(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
                        } else {
                            touchStart = true;
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    })
                    .on('touchmove', function(event) {
                        if (touchStart) {
                            event.preventDefault();
                            calcOffset(event);
                        }
                    })
                    .on('touchend touchcancel', function() {
                        touchStart = false;
                        startTopScroll = 0;
                    });

                timeboxparent
                    .on('scroll_element.xdsoft_scroller', function(event, percentage) {
                        if (!parentHeight) {
                            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
                        }
                        percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

                        scroller.css('margin-top', maximumOffset * percentage);

                        setTimeout(function() {
                            timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
                        }, 10);
                    })
                    .on('resize_scroll.xdsoft_scroller', function(event, percentage, noTriggerScroll) {
                        var percent, sh;
                        parentHeight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        percent = parentHeight / height;
                        sh = percent * scrollbar[0].offsetHeight;
                        if (percent > 1) {
                            scroller.hide();
                        } else {
                            scroller.show();
                            scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
                            maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
                            if (noTriggerScroll !== true) {
                                timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
                            }
                        }
                    });

                timeboxparent.on('mousewheel', function(event) {
                    var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

                    top = top - (event.deltaY * 20);
                    if (top < 0) {
                        top = 0;
                    }

                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
                    event.stopPropagation();
                    return false;
                });

                timeboxparent.on('touchstart', function(event) {
                    start = pointerEventToXY(event);
                    startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
                });

                timeboxparent.on('touchmove', function(event) {
                    if (start) {
                        event.preventDefault();
                        var coord = pointerEventToXY(event);
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
                    }
                });

                timeboxparent.on('touchend touchcancel', function() {
                    start = false;
                    startTop = 0;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
        });
    };

    $.fn.datetimepicker = function(opt, opt2) {
        var result = this,
            KEY0 = 48,
            KEY9 = 57,
            _KEY0 = 96,
            _KEY9 = 105,
            CTRLKEY = 17,
            DEL = 46,
            ENTER = 13,
            ESC = 27,
            BACKSPACE = 8,
            ARROWLEFT = 37,
            ARROWUP = 38,
            ARROWRIGHT = 39,
            ARROWDOWN = 40,
            TAB = 9,
            F5 = 116,
            AKEY = 65,
            CKEY = 67,
            VKEY = 86,
            ZKEY = 90,
            YKEY = 89,
            ctrlDown = false,
            options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

            lazyInitTimer = 0,
            createDateTimePicker,
            destroyDateTimePicker,

            lazyInit = function(input) {
                input
                    .on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
                        if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
                            return;
                        }
                        clearTimeout(lazyInitTimer);
                        lazyInitTimer = setTimeout(function() {

                            if (!input.data('xdsoft_datetimepicker')) {
                                createDateTimePicker(input);
                            }
                            input
                                .off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback)
                                .trigger('open.xdsoft');
                        }, 100);
                    });
            };

        createDateTimePicker = function(input) {
            var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                datepicker = $('<div class="xdsoft_datepicker active"></div>'),
                month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
                    '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
                    '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
                    '<button type="button" class="xdsoft_next"></button></div>'),
                calendar = $('<div class="xdsoft_calendar"></div>'),
                timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
                timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),

                monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                triggerAfterOpen = false,
                XDSoft_datetime,

                xchangeTimer,
                timerclick,
                current_time_index,
                setPos,
                timer = 0,
                _xdsoft_datetime,
                forEachAncestorOf;

            if (options.id) {
                datetimepicker.attr('id', options.id);
            }
            if (options.style) {
                datetimepicker.attr('style', options.style);
            }
            if (options.weeks) {
                datetimepicker.addClass('xdsoft_showweeks');
            }
            if (options.rtl) {
                datetimepicker.addClass('xdsoft_rtl');
            }

            datetimepicker.addClass('xdsoft_' + options.theme);
            datetimepicker.addClass(options.className);

            month_picker
                .find('.xdsoft_month span')
                .after(monthselect);
            month_picker
                .find('.xdsoft_year span')
                .after(yearselect);

            month_picker
                .find('.xdsoft_month,.xdsoft_year')
                .on('touchstart mousedown.xdsoft', function(event) {
                    var select = $(this).find('.xdsoft_select').eq(0),
                        val = 0,
                        top = 0,
                        visible = select.is(':visible'),
                        items,
                        i;

                    month_picker
                        .find('.xdsoft_select')
                        .hide();
                    if (_xdsoft_datetime.currentTime) {
                        val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
                    }

                    select[visible ? 'hide' : 'show']();
                    for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
                        if (items.eq(i).data('value') === val) {
                            break;
                        } else {
                            top += items[0].offsetHeight;
                        }
                    }

                    select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
                    event.stopPropagation();
                    return false;
                });

            var handleTouchMoved = function(event) {
                this.touchStartPosition = this.touchStartPosition || event.originalEvent.touches[0]
                var touchPosition = event.originalEvent.touches[0]
                var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX)
                var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY)
                var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement)
                if (distance > options.touchMovedThreshold) {
                    this.touchMoved = true;
                }
            }

            month_picker
                .find('.xdsoft_select')
                .xdsoftScroller(options)
                .on('touchstart mousedown.xdsoft', function(event) {
                    this.touchMoved = false;
                    this.touchStartPosition = event.originalEvent.touches[0]
                    event.stopPropagation();
                    event.preventDefault();
                })
                .on('touchmove', '.xdsoft_option', handleTouchMoved)
                .on('touchend mousedown.xdsoft', '.xdsoft_option', function() {
                    if (!this.touchMoved) {
                        if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        }

                        var year = _xdsoft_datetime.currentTime.getFullYear();
                        if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
                            _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
                        }

                        $(this).parent().parent().hide();

                        datetimepicker.trigger('xchange.xdsoft');
                        if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                            options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                        }

                        if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                            options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                        }
                    }
                });

            datetimepicker.getValue = function() {
                return _xdsoft_datetime.getCurrentTime();
            };

            datetimepicker.setOptions = function(_options) {
                var highlightedDates = {};

                options = $.extend(true, {}, options, _options);

                if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
                    options.allowTimes = $.extend(true, [], _options.allowTimes);
                }

                if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
                    options.weekends = $.extend(true, [], _options.weekends);
                }

                if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
                    options.allowDates = $.extend(true, [], _options.allowDates);
                }

                if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
                    options.allowDateRe = new RegExp(_options.allowDateRe);
                }

                if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
                    $.each(_options.highlightedDates, function(index, value) {
                        var splitData = $.map(value.split(','), $.trim),
                            exDesc,
                            hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
                            keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
                        if (highlightedDates[keyDate] !== undefined) {
                            exDesc = highlightedDates[keyDate].desc;
                            if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                            }
                        } else {
                            highlightedDates[keyDate] = hDate;
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
                    highlightedDates = $.extend(true, [], options.highlightedDates);
                    $.each(_options.highlightedPeriods, function(index, value) {
                        var dateTest, // start date
                            dateEnd,
                            desc,
                            hDate,
                            keyDate,
                            exDesc,
                            style;
                        if ($.isArray(value)) {
                            dateTest = value[0];
                            dateEnd = value[1];
                            desc = value[2];
                            style = value[3];
                        } else {
                            var splitData = $.map(value.split(','), $.trim);
                            dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
                            dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
                            desc = splitData[2];
                            style = splitData[3];
                        }

                        while (dateTest <= dateEnd) {
                            hDate = new HighlightedDate(dateTest, desc, style);
                            keyDate = dateHelper.formatDate(dateTest, options.formatDate);
                            dateTest.setDate(dateTest.getDate() + 1);
                            if (highlightedDates[keyDate] !== undefined) {
                                exDesc = highlightedDates[keyDate].desc;
                                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                    highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                                }
                            } else {
                                highlightedDates[keyDate] = hDate;
                            }
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }

                if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
                    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
                }

                if ((options.open || options.opened) && (!options.inline)) {
                    input.trigger('open.xdsoft');
                }

                if (options.inline) {
                    triggerAfterOpen = true;
                    datetimepicker.addClass('xdsoft_inline');
                    input.after(datetimepicker).hide();
                }

                if (options.inverseButton) {
                    options.next = 'xdsoft_prev';
                    options.prev = 'xdsoft_next';
                }

                if (options.datepicker) {
                    datepicker.addClass('active');
                } else {
                    datepicker.removeClass('active');
                }

                if (options.timepicker) {
                    timepicker.addClass('active');
                } else {
                    timepicker.removeClass('active');
                }

                if (options.value) {
                    _xdsoft_datetime.setCurrentTime(options.value);
                    if (input && input.val) {
                        input.val(_xdsoft_datetime.str);
                    }
                }

                if (isNaN(options.dayOfWeekStart)) {
                    options.dayOfWeekStart = 0;
                } else {
                    options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
                }

                if (!options.timepickerScrollbar) {
                    timeboxparent.xdsoftScroller(options, 'hide');
                }

                if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
                    options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
                }

                if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
                    options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
                }

                if (options.minDateTime && /^\+(.*)$/.test(options.minDateTime)) {
                    options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
                }

                applyButton.toggle(options.showApplyButton);

                month_picker
                    .find('.xdsoft_today_button')
                    .css('visibility', !options.todayButton ? 'hidden' : 'visible');

                month_picker
                    .find('.' + options.prev)
                    .css('visibility', !options.prevButton ? 'hidden' : 'visible');

                month_picker
                    .find('.' + options.next)
                    .css('visibility', !options.nextButton ? 'hidden' : 'visible');

                setMask(options);

                if (options.validateOnBlur) {
                    input
                        .off('blur.xdsoft')
                        .on('blur.xdsoft', function() {
                            if (options.allowBlank && (!$.trim($(this).val()).length ||
                                    (typeof options.mask === "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_')))) {
                                $(this).val(null);
                                datetimepicker.data('xdsoft_datetime').empty();
                            } else {
                                var d = dateHelper.parseDate($(this).val(), options.format);
                                if (d) { // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                                    $(this).val(dateHelper.formatDate(d, options.format));
                                } else {
                                    var splittedHours = +([$(this).val()[0], $(this).val()[1]].join('')),
                                        splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

                                    // parse the numbers as 0312 => 03:12
                                    if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                                        $(this).val([splittedHours, splittedMinutes].map(function(item) {
                                            return item > 9 ? item : '0' + item;
                                        }).join(':'));
                                    } else {
                                        $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                                    }
                                }
                                datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                            }

                            datetimepicker.trigger('changedatetime.xdsoft');
                            datetimepicker.trigger('close.xdsoft');
                        });
                }
                options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

                datetimepicker
                    .trigger('xchange.xdsoft')
                    .trigger('afterOpen.xdsoft');
            };

            datetimepicker
                .data('options', options)
                .on('touchstart mousedown.xdsoft', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    yearselect.hide();
                    monthselect.hide();
                    return false;
                });

            //scroll_element = timepicker.find('.xdsoft_time_box');
            timeboxparent.append(timebox);
            timeboxparent.xdsoftScroller(options);

            datetimepicker.on('afterOpen.xdsoft', function() {
                timeboxparent.xdsoftScroller(options);
            });

            datetimepicker
                .append(datepicker)
                .append(timepicker);

            if (options.withoutCopyright !== true) {
                datetimepicker
                    .append(xdsoft_copyright);
            }

            datepicker
                .append(month_picker)
                .append(calendar)
                .append(applyButton);

            $(options.parentID)
                .append(datetimepicker);

            XDSoft_datetime = function() {
                var _this = this;
                _this.now = function(norecursion) {
                    var d = new Date(),
                        date,
                        time;

                    if (!norecursion && options.defaultDate) {
                        date = _this.strToDateTime(options.defaultDate);
                        d.setFullYear(date.getFullYear());
                        d.setMonth(date.getMonth());
                        d.setDate(date.getDate());
                    }

                    if (options.yearOffset) {
                        d.setFullYear(d.getFullYear() + options.yearOffset);
                    }

                    if (!norecursion && options.defaultTime) {
                        time = _this.strtotime(options.defaultTime);
                        d.setHours(time.getHours());
                        d.setMinutes(time.getMinutes());
                        d.setSeconds(time.getSeconds());
                        d.setMilliseconds(time.getMilliseconds());
                    }
                    return d;
                };

                _this.isValidDate = function(d) {
                    if (Object.prototype.toString.call(d) !== "[object Date]") {
                        return false;
                    }
                    return !isNaN(d.getTime());
                };

                _this.setCurrentTime = function(dTime, requireValidDate) {
                    if (typeof dTime === 'string') {
                        _this.currentTime = _this.strToDateTime(dTime);
                    } else if (_this.isValidDate(dTime)) {
                        _this.currentTime = dTime;
                    } else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
                        _this.currentTime = null;
                    } else {
                        _this.currentTime = _this.now();
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                };

                _this.empty = function() {
                    _this.currentTime = null;
                };

                _this.getCurrentTime = function() {
                    return _this.currentTime;
                };

                _this.nextMonth = function() {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() + 1,
                        year;
                    if (month === 12) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
                        month = 0;
                    }

                    year = _this.currentTime.getFullYear();

                    _this.currentTime.setDate(
                        Math.min(
                            new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
                            _this.currentTime.getDate()
                        )
                    );
                    _this.currentTime.setMonth(month);

                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.prevMonth = function() {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() - 1;
                    if (month === -1) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
                        month = 11;
                    }
                    _this.currentTime.setDate(
                        Math.min(
                            new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
                            _this.currentTime.getDate()
                        )
                    );
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.getWeekOfYear = function(datetime) {
                    if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
                        var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
                        if (typeof week !== 'undefined') {
                            return week;
                        }
                    }
                    var onejan = new Date(datetime.getFullYear(), 0, 1);

                    //First week of the year is th one with the first Thursday according to ISO8601
                    if (onejan.getDay() !== 4) {
                        onejan.setMonth(0, 1 + ((4 - onejan.getDay() + 7) % 7));
                    }

                    return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
                };

                _this.strToDateTime = function(sDateTime) {
                    var tmpDate = [],
                        timeOffset, currentTime;

                    if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
                        return sDateTime;
                    }

                    tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);

                    if (tmpDate) {
                        tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
                    }

                    if (tmpDate && tmpDate[2]) {
                        timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
                        currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
                    } else {
                        currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
                    }

                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now();
                    }

                    return currentTime;
                };

                _this.strToDate = function(sDate) {
                    if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
                        return sDate;
                    }

                    var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.strtotime = function(sTime) {
                    if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
                        return sTime;
                    }
                    var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.str = function() {
                    return dateHelper.formatDate(_this.currentTime, options.format);
                };
                _this.currentTime = this.now();
            };

            _xdsoft_datetime = new XDSoft_datetime();

            applyButton.on('touchend click', function(e) { //pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker
                .find('.xdsoft_today_button')
                .on('touchend mousedown.xdsoft', function() {
                    datetimepicker.data('changed', true);
                    _xdsoft_datetime.setCurrentTime(0, true);
                    datetimepicker.trigger('afterOpen.xdsoft');
                }).on('dblclick.xdsoft', function() {
                    var currentDate = _xdsoft_datetime.getCurrentTime(),
                        minDate, maxDate;
                    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                    minDate = _xdsoft_datetime.strToDate(options.minDate);
                    minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                    if (currentDate < minDate) {
                        return;
                    }
                    maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                    maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
                    if (currentDate > maxDate) {
                        return;
                    }
                    input.val(_xdsoft_datetime.str());
                    input.trigger('change');
                    datetimepicker.trigger('close.xdsoft');
                });
            month_picker
                .find('.xdsoft_prev,.xdsoft_next')
                .on('touchend mousedown.xdsoft', function() {
                    var $this = $(this),
                        timer = 0,
                        stop = false;

                    (function arguments_callee1(v) {
                        if ($this.hasClass(options.next)) {
                            _xdsoft_datetime.nextMonth();
                        } else if ($this.hasClass(options.prev)) {
                            _xdsoft_datetime.prevMonth();
                        }
                        if (options.monthChangeSpinner) {
                            if (!stop) {
                                timer = setTimeout(arguments_callee1, v || 100);
                            }
                        }
                    }(500));

                    $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
                        clearTimeout(timer);
                        stop = true;
                        $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
                    });
                });

            timepicker
                .find('.xdsoft_prev,.xdsoft_next')
                .on('touchend mousedown.xdsoft', function() {
                    var $this = $(this),
                        timer = 0,
                        stop = false,
                        period = 110;
                    (function arguments_callee4(v) {
                        var pheight = timeboxparent[0].clientHeight,
                            height = timebox[0].offsetHeight,
                            top = Math.abs(parseInt(timebox.css('marginTop'), 10));
                        if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
                            timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
                        } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
                            timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
                        }
                        /**
                         * Fixed bug:
                         * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
                         * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
                         * would cause a bug when you use jquery.css method.
                         * Let's say: * { transition: all .5s ease; }
                         * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
                         * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
                         * next/prev button.
                         *
                         * What we should do:
                         * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
                         */
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
                        period = (period > 10) ? 10 : period - 10;
                        if (!stop) {
                            timer = setTimeout(arguments_callee4, v || period);
                        }
                    }(500));
                    $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
                        clearTimeout(timer);
                        stop = true;
                        $([options.ownerDocument.body, options.contentWindow])
                            .off('touchend mouseup.xdsoft', arguments_callee5);
                    });
                });

            xchangeTimer = 0;
            // base handler - generating a calendar and timepicker
            datetimepicker
                .on('xchange.xdsoft', function(event) {
                    clearTimeout(xchangeTimer);
                    xchangeTimer = setTimeout(function() {

                        if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        }

                        var table = '',
                            start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
                            i = 0,
                            j,
                            today = _xdsoft_datetime.now(),
                            maxDate = false,
                            minDate = false,
                            minDateTime = false,
                            hDate,
                            day,
                            d,
                            y,
                            m,
                            w,
                            classes = [],
                            customDateSettings,
                            newRow = true,
                            time = '',
                            h,
                            line_time,
                            description;

                        while (start.getDay() !== options.dayOfWeekStart) {
                            start.setDate(start.getDate() - 1);
                        }

                        table += '<table><thead><tr>';

                        if (options.weeks) {
                            table += '<th></th>';
                        }

                        for (j = 0; j < 7; j += 1) {
                            table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
                        }

                        table += '</tr></thead>';
                        table += '<tbody>';

                        if (options.maxDate !== false) {
                            maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                            maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
                        }

                        if (options.minDate !== false) {
                            minDate = _xdsoft_datetime.strToDate(options.minDate);
                            minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                        }

                        if (options.minDateTime !== false) {
                            minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
                            minDateTime = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), minDateTime.getHours(), minDateTime.getMinutes(), minDateTime.getSeconds());
                        }

                        while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
                            classes = [];
                            i += 1;

                            day = start.getDay();
                            d = start.getDate();
                            y = start.getFullYear();
                            m = start.getMonth();
                            w = _xdsoft_datetime.getWeekOfYear(start);
                            description = '';

                            classes.push('xdsoft_date');

                            if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
                                customDateSettings = options.beforeShowDay.call(datetimepicker, start);
                            } else {
                                customDateSettings = null;
                            }

                            if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
                                if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                                    classes.push('xdsoft_disabled');
                                }
                            }

                            if (options.allowDates && options.allowDates.length > 0) {
                                if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                                    classes.push('xdsoft_disabled');
                                }
                            }

                            if ((maxDate !== false && start > maxDate) || (minDateTime !== false && start < minDateTime) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
                                classes.push('xdsoft_disabled');
                            }

                            if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                                classes.push('xdsoft_disabled');
                            }

                            if (options.disabledWeekDays.indexOf(day) !== -1) {
                                classes.push('xdsoft_disabled');
                            }

                            if (input.is('[disabled]')) {
                                classes.push('xdsoft_disabled');
                            }

                            if (customDateSettings && customDateSettings[1] !== "") {
                                classes.push(customDateSettings[1]);
                            }

                            if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                                classes.push('xdsoft_other_month');
                            }

                            if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                                classes.push('xdsoft_current');
                            }

                            if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                                classes.push('xdsoft_today');
                            }

                            if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                                classes.push('xdsoft_weekend');
                            }

                            if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
                                hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
                                classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
                                description = hDate.desc === undefined ? '' : hDate.desc;
                            }

                            if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
                                classes.push(options.beforeShowDay(start));
                            }

                            if (newRow) {
                                table += '<tr>';
                                newRow = false;
                                if (options.weeks) {
                                    table += '<th>' + w + '</th>';
                                }
                            }

                            table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
                                '<div>' + d + '</div>' +
                                '</td>';

                            if (start.getDay() === options.dayOfWeekStartPrev) {
                                table += '</tr>';
                                newRow = true;
                            }

                            start.setDate(d + 1);
                        }
                        table += '</tbody></table>';

                        calendar.html(table);

                        month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
                        month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

                        // generate timebox
                        time = '';
                        h = '';
                        m = '';

                        line_time = function line_time(h, m) {
                            var now = _xdsoft_datetime.now(),
                                optionDateTime, current_time,
                                isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
                            now.setHours(h);
                            h = parseInt(now.getHours(), 10);
                            now.setMinutes(m);
                            m = parseInt(now.getMinutes(), 10);
                            optionDateTime = new Date(_xdsoft_datetime.currentTime);
                            optionDateTime.setHours(h);
                            optionDateTime.setMinutes(m);
                            classes = [];
                            if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
                                classes.push('xdsoft_disabled');
                            } else if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || ((options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime()) && (options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()))) {
                                classes.push('xdsoft_disabled');
                            } else if (input.is('[disabled]')) {
                                classes.push('xdsoft_disabled');
                            }

                            current_time = new Date(_xdsoft_datetime.currentTime);
                            current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

                            if (!isALlowTimesInit) {
                                current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                            }

                            if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && ((!isALlowTimesInit && options.step > 59) || current_time.getMinutes() === parseInt(m, 10))) {
                                if (options.defaultSelect || datetimepicker.data('changed')) {
                                    classes.push('xdsoft_current');
                                } else if (options.initTime) {
                                    classes.push('xdsoft_init_time');
                                }
                            }
                            if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                                classes.push('xdsoft_today');
                            }
                            time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
                        };

                        if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
                            for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                                for (j = 0; j < 60; j += options.step) {
                                    h = (i < 10 ? '0' : '') + i;
                                    m = (j < 10 ? '0' : '') + j;
                                    line_time(h, m);
                                }
                            }
                        } else {
                            for (i = 0; i < options.allowTimes.length; i += 1) {
                                h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                                m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                                line_time(h, m);
                            }
                        }

                        timebox.html(time);

                        opt = '';

                        for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
                            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
                        }
                        yearselect.children().eq(0)
                            .html(opt);

                        for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
                            opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
                        }
                        monthselect.children().eq(0).html(opt);
                        $(datetimepicker)
                            .trigger('generate.xdsoft');
                    }, 10);
                    event.stopPropagation();
                })
                .on('afterOpen.xdsoft', function() {
                    if (options.timepicker) {
                        var classType, pheight, height, top;
                        if (timebox.find('.xdsoft_current').length) {
                            classType = '.xdsoft_current';
                        } else if (timebox.find('.xdsoft_init_time').length) {
                            classType = '.xdsoft_init_time';
                        }
                        if (classType) {
                            pheight = timeboxparent[0].clientHeight;
                            height = timebox[0].offsetHeight;
                            top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
                            if ((height - pheight) < top) {
                                top = height - pheight;
                            }
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
                        } else {
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
                        }
                    }
                });

            timerclick = 0;
            calendar
                .on('touchend click.xdsoft', 'td', function(xdevent) {
                    xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
                    timerclick += 1;
                    var $this = $(this),
                        currentTime = _xdsoft_datetime.currentTime;

                    if (currentTime === undefined || currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        currentTime = _xdsoft_datetime.currentTime;
                    }

                    if ($this.hasClass('xdsoft_disabled')) {
                        return false;
                    }

                    currentTime.setDate(1);
                    currentTime.setFullYear($this.data('year'));
                    currentTime.setMonth($this.data('month'));
                    currentTime.setDate($this.data('date'));

                    datetimepicker.trigger('select.xdsoft', [currentTime]);

                    input.val(_xdsoft_datetime.str());

                    if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
                        options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                    }

                    datetimepicker.data('changed', true);
                    datetimepicker.trigger('xchange.xdsoft');
                    datetimepicker.trigger('changedatetime.xdsoft');
                    if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
                        datetimepicker.trigger('close.xdsoft');
                    }
                    setTimeout(function() {
                        timerclick = 0;
                    }, 200);
                });

            timebox
                .on('touchstart', 'div', function(xdevent) {
                    this.touchMoved = false;
                })
                .on('touchmove', 'div', handleTouchMoved)
                .on('touchend click.xdsoft', 'div', function(xdevent) {
                    if (!this.touchMoved) {
                        xdevent.stopPropagation();
                        var $this = $(this),
                            currentTime = _xdsoft_datetime.currentTime;

                        if (currentTime === undefined || currentTime === null) {
                            _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                            currentTime = _xdsoft_datetime.currentTime;
                        }

                        if ($this.hasClass('xdsoft_disabled')) {
                            return false;
                        }
                        currentTime.setHours($this.data('hour'));
                        currentTime.setMinutes($this.data('minute'));
                        datetimepicker.trigger('select.xdsoft', [currentTime]);

                        datetimepicker.data('input').val(_xdsoft_datetime.str());

                        if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
                            options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                        }
                        datetimepicker.data('changed', true);
                        datetimepicker.trigger('xchange.xdsoft');
                        datetimepicker.trigger('changedatetime.xdsoft');
                        if (options.inline !== true && options.closeOnTimeSelect === true) {
                            datetimepicker.trigger('close.xdsoft');
                        }
                    }
                });

            datepicker
                .on('mousewheel.xdsoft', function(event) {
                    if (!options.scrollMonth) {
                        return true;
                    }
                    if (event.deltaY < 0) {
                        _xdsoft_datetime.nextMonth();
                    } else {
                        _xdsoft_datetime.prevMonth();
                    }
                    return false;
                });

            input
                .on('mousewheel.xdsoft', function(event) {
                    if (!options.scrollInput) {
                        return true;
                    }
                    if (!options.datepicker && options.timepicker) {
                        current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
                        if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
                            current_time_index += event.deltaY;
                        }
                        if (timebox.children().eq(current_time_index).length) {
                            timebox.children().eq(current_time_index).trigger('mousedown');
                        }
                        return false;
                    }
                    if (options.datepicker && !options.timepicker) {
                        datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
                        if (input.val) {
                            input.val(_xdsoft_datetime.str());
                        }
                        datetimepicker.trigger('changedatetime.xdsoft');
                        return false;
                    }
                });

            datetimepicker
                .on('changedatetime.xdsoft', function(event) {
                    if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
                        var $input = datetimepicker.data('input');
                        options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
                        delete options.value;
                        $input.trigger('change');
                    }
                })
                .on('generate.xdsoft', function() {
                    if (options.onGenerate && $.isFunction(options.onGenerate)) {
                        options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    if (triggerAfterOpen) {
                        datetimepicker.trigger('afterOpen.xdsoft');
                        triggerAfterOpen = false;
                    }
                })
                .on('click.xdsoft', function(xdevent) {
                    xdevent.stopPropagation();
                });

            current_time_index = 0;

            /**
             * Runs the callback for each of the specified node's ancestors.
             *
             * Return FALSE from the callback to stop ascending.
             *
             * @param {DOMNode} node
             * @param {Function} callback
             * @returns {undefined}
             */
            forEachAncestorOf = function(node, callback) {
                do {
                    node = node.parentNode;

                    if (!node || callback(node) === false) {
                        break;
                    }
                } while (node.nodeName !== 'HTML');
            };

            /**
             * Sets the position of the picker.
             *
             * @returns {undefined}
             */
            setPos = function() {
                var dateInputOffset,
                    dateInputElem,
                    verticalPosition,
                    left,
                    position,
                    datetimepickerElem,
                    dateInputHasFixedAncestor,
                    $dateInput,
                    windowWidth,
                    verticalAnchorEdge,
                    datetimepickerCss,
                    windowHeight,
                    windowScrollTop;

                $dateInput = datetimepicker.data('input');
                dateInputOffset = $dateInput.offset();
                dateInputElem = $dateInput[0];

                verticalAnchorEdge = 'top';
                verticalPosition = (dateInputOffset.top + dateInputElem.offsetHeight) - 1;
                left = dateInputOffset.left;
                position = "absolute";

                windowWidth = $(options.contentWindow).width();
                windowHeight = $(options.contentWindow).height();
                windowScrollTop = $(options.contentWindow).scrollTop();

                if ((options.ownerDocument.documentElement.clientWidth - dateInputOffset.left) < datepicker.parent().outerWidth(true)) {
                    var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
                    left = left - diff;
                }

                if ($dateInput.parent().css('direction') === 'rtl') {
                    left -= (datetimepicker.outerWidth() - $dateInput.outerWidth());
                }

                if (options.fixed) {
                    verticalPosition -= windowScrollTop;
                    left -= $(options.contentWindow).scrollLeft();
                    position = "fixed";
                } else {
                    dateInputHasFixedAncestor = false;

                    forEachAncestorOf(dateInputElem, function(ancestorNode) {
                        if (ancestorNode === null) {
                            return false;
                        }

                        if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
                            dateInputHasFixedAncestor = true;
                            return false;
                        }
                    });

                    if (dateInputHasFixedAncestor) {
                        position = 'fixed';

                        //If the picker won't fit entirely within the viewport then display it above the date input.
                        if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
                            verticalAnchorEdge = 'bottom';
                            verticalPosition = (windowHeight + windowScrollTop) - dateInputOffset.top;
                        } else {
                            verticalPosition -= windowScrollTop;
                        }
                    } else {
                        if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
                            verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
                        }
                    }

                    if (verticalPosition < 0) {
                        verticalPosition = 0;
                    }

                    if (left + dateInputElem.offsetWidth > windowWidth) {
                        left = windowWidth - dateInputElem.offsetWidth;
                    }
                }

                datetimepickerElem = datetimepicker[0];

                forEachAncestorOf(datetimepickerElem, function(ancestorNode) {
                    var ancestorNodePosition;

                    ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');

                    if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
                        left = left - ((windowWidth - ancestorNode.offsetWidth) / 2);
                        return false;
                    }
                });

                datetimepickerCss = {
                    position: position,
                    left: left,
                    top: '', //Initialize to prevent previous values interfering with new ones.
                    bottom: '' //Initialize to prevent previous values interfering with new ones.
                };

                datetimepickerCss[verticalAnchorEdge] = verticalPosition;

                datetimepicker.css(datetimepickerCss);
            };

            datetimepicker
                .on('open.xdsoft', function(event) {
                    var onShow = true;
                    if (options.onShow && $.isFunction(options.onShow)) {
                        onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                    }
                    if (onShow !== false) {
                        datetimepicker.show();
                        setPos();
                        $(options.contentWindow)
                            .off('resize.xdsoft', setPos)
                            .on('resize.xdsoft', setPos);

                        if (options.closeOnWithoutClick) {
                            $([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
                                datetimepicker.trigger('close.xdsoft');
                                $([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
                            });
                        }
                    }
                })
                .on('close.xdsoft', function(event) {
                    var onClose = true;
                    month_picker
                        .find('.xdsoft_month,.xdsoft_year')
                        .find('.xdsoft_select')
                        .hide();
                    if (options.onClose && $.isFunction(options.onClose)) {
                        onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                    }
                    if (onClose !== false && !options.opened && !options.inline) {
                        datetimepicker.hide();
                    }
                    event.stopPropagation();
                })
                .on('toggle.xdsoft', function() {
                    if (datetimepicker.is(':visible')) {
                        datetimepicker.trigger('close.xdsoft');
                    } else {
                        datetimepicker.trigger('open.xdsoft');
                    }
                })
                .data('input', input);

            timer = 0;

            datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
            datetimepicker.setOptions(options);

            function getCurrentValue() {
                var ct = false,
                    time;

                if (options.startDate) {
                    ct = _xdsoft_datetime.strToDate(options.startDate);
                } else {
                    ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
                    if (ct) {
                        ct = _xdsoft_datetime.strToDateTime(ct);
                    } else if (options.defaultDate) {
                        ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
                        if (options.defaultTime) {
                            time = _xdsoft_datetime.strtotime(options.defaultTime);
                            ct.setHours(time.getHours());
                            ct.setMinutes(time.getMinutes());
                        }
                    }
                }

                if (ct && _xdsoft_datetime.isValidDate(ct)) {
                    datetimepicker.data('changed', true);
                } else {
                    ct = '';
                }

                return ct || 0;
            }

            function setMask(options) {

                var isValidValue = function(mask, value) {
                        var reg = mask
                            .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
                            .replace(/_/g, '{digit+}')
                            .replace(/([0-9]{1})/g, '{digit$1}')
                            .replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
                            .replace(/\{digit[\+]\}/g, '[0-9_]{1}');
                        return (new RegExp(reg)).test(value);
                    },
                    getCaretPos = function(input) {
                        try {
                            if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
                                var range = options.ownerDocument.selection.createRange();
                                return range.getBookmark().charCodeAt(2) - 2;
                            }
                            if (input.setSelectionRange) {
                                return input.selectionStart;
                            }
                        } catch (e) {
                            return 0;
                        }
                    },
                    setCaretPos = function(node, pos) {
                        node = (typeof node === "string" || node instanceof String) ? options.ownerDocument.getElementById(node) : node;
                        if (!node) {
                            return false;
                        }
                        if (node.createTextRange) {
                            var textRange = node.createTextRange();
                            textRange.collapse(true);
                            textRange.moveEnd('character', pos);
                            textRange.moveStart('character', pos);
                            textRange.select();
                            return true;
                        }
                        if (node.setSelectionRange) {
                            node.setSelectionRange(pos, pos);
                            return true;
                        }
                        return false;
                    };

                if (options.mask) {
                    input.off('keydown.xdsoft');
                }

                if (options.mask === true) {
                    if (typeof moment != 'undefined') {
                        options.mask = options.format
                            .replace(/Y{4}/g, '9999')
                            .replace(/Y{2}/g, '99')
                            .replace(/M{2}/g, '19')
                            .replace(/D{2}/g, '39')
                            .replace(/H{2}/g, '29')
                            .replace(/m{2}/g, '59')
                            .replace(/s{2}/g, '59');
                    } else {
                        options.mask = options.format
                            .replace(/Y/g, '9999')
                            .replace(/F/g, '9999')
                            .replace(/m/g, '19')
                            .replace(/d/g, '39')
                            .replace(/H/g, '29')
                            .replace(/i/g, '59')
                            .replace(/s/g, '59');
                    }
                }

                if ($.type(options.mask) === 'string') {
                    if (!isValidValue(options.mask, input.val())) {
                        input.val(options.mask.replace(/[0-9]/g, '_'));
                        setCaretPos(input[0], 0);
                    }

                    input.on('paste.xdsoft', function(event) {
                        // couple options here
                        // 1. return false - tell them they can't paste
                        // 2. insert over current characters - minimal validation
                        // 3. full fledged parsing and validation
                        // let's go option 2 for now

                        // fires multiple times for some reason

                        // https://stackoverflow.com/a/30496488/1366033
                        var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData,
                            pastedData = clipboardData.getData('text'),
                            val = this.value,
                            pos = this.selectionStart

                        var valueBeforeCursor = val.substr(0, pos);
                        var valueAfterPaste = val.substr(pos + pastedData.length);

                        val = valueBeforeCursor + pastedData + valueAfterPaste;
                        pos += pastedData.length;

                        if (isValidValue(options.mask, val)) {
                            this.value = val;
                            setCaretPos(this, pos);
                        } else if ($.trim(val) === '') {
                            this.value = options.mask.replace(/[0-9]/g, '_');
                        } else {
                            input.trigger('error_input.xdsoft');
                        }

                        event.preventDefault();
                        return false;
                    });

                    input.on('keydown.xdsoft', function(event) {
                        var val = this.value,
                            key = event.which,
                            pos = this.selectionStart,
                            selEnd = this.selectionEnd,
                            hasSel = pos !== selEnd,
                            digit;

                        // only alow these characters
                        if (((key >= KEY0 && key <= KEY9) ||
                                (key >= _KEY0 && key <= _KEY9)) ||
                            (key === BACKSPACE || key === DEL)) {

                            // get char to insert which is new character or placeholder ('_')
                            digit = (key === BACKSPACE || key === DEL) ? '_' :
                                String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key);

                            // we're deleting something, we're not at the start, and have normal cursor, move back one
                            // if we have a selection length, cursor actually sits behind deletable char, not in front
                            if (key === BACKSPACE && pos && !hasSel) {
                                pos -= 1;
                            }

                            // don't stop on a separator, continue whatever direction you were going
                            //   value char - keep incrementing position while on separator char and we still have room
                            //   del char   - keep decrementing position while on separator char and we still have room
                            while (true) {
                                var maskValueAtCurPos = options.mask.substr(pos, 1);
                                var posShorterThanMaskLength = pos < options.mask.length;
                                var posGreaterThanZero = pos > 0;
                                var notNumberOrPlaceholder = /[^0-9_]/;
                                var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
                                var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero

                                // if we hit a real char, stay where we are
                                if (!continueMovingPosition) break;

                                // hitting backspace in a selection, you can possibly go back any further - go forward
                                pos += (key === BACKSPACE && !hasSel) ? -1 : 1;

                            }

                            if (hasSel) {
                                // pos might have moved so re-calc length
                                var selLength = selEnd - pos

                                // if we have a selection length we will wipe out entire selection and replace with default template for that range
                                var defaultBlank = options.mask.replace(/[0-9]/g, '_');
                                var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
                                var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1) // might be empty

                                var valueBeforeSel = val.substr(0, pos);
                                var insertChars = digit + selReplacementRemainder;
                                var charsAfterSelection = val.substr(pos + selLength);

                                val = valueBeforeSel + insertChars + charsAfterSelection

                            } else {
                                var valueBeforeCursor = val.substr(0, pos);
                                var insertChar = digit;
                                var valueAfterNextChar = val.substr(pos + 1);

                                val = valueBeforeCursor + insertChar + valueAfterNextChar
                            }

                            if ($.trim(val) === '') {
                                // if empty, set to default
                                val = defaultBlank
                            } else {
                                // if at the last character don't need to do anything
                                if (pos === options.mask.length) {
                                    event.preventDefault();
                                    return false;
                                }
                            }

                            // resume cursor location
                            pos += (key === BACKSPACE) ? 0 : 1;
                            // don't stop on a separator, continue whatever direction you were going
                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += (key === BACKSPACE) ? 0 : 1;
                            }

                            if (isValidValue(options.mask, val)) {
                                this.value = val;
                                setCaretPos(this, pos);
                            } else if ($.trim(val) === '') {
                                this.value = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                input.trigger('error_input.xdsoft');
                            }
                        } else {
                            if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                                return true;
                            }
                        }

                        event.preventDefault();
                        return false;
                    });
                }
            }

            _xdsoft_datetime.setCurrentTime(getCurrentValue());

            input
                .data('xdsoft_datetimepicker', datetimepicker)
                .on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function() {
                    if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
                        return;
                    }
                    if (!options.openOnFocus) {
                        return;
                    }
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        if (input.is(':disabled')) {
                            return;
                        }

                        triggerAfterOpen = true;
                        _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
                        if (options.mask) {
                            setMask(options);
                        }
                        datetimepicker.trigger('open.xdsoft');
                    }, 100);
                })
                .on('keydown.xdsoft', function(event) {
                    var elementSelector,
                        key = event.which;
                    if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
                        elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
                        datetimepicker.trigger('close.xdsoft');
                        elementSelector.eq(elementSelector.index(this) + 1).focus();
                        return false;
                    }
                    if ([TAB].indexOf(key) !== -1) {
                        datetimepicker.trigger('close.xdsoft');
                        return true;
                    }
                })
                .on('blur.xdsoft', function() {
                    datetimepicker.trigger('close.xdsoft');
                });
        };
        destroyDateTimePicker = function(input) {
            var datetimepicker = input.data('xdsoft_datetimepicker');
            if (datetimepicker) {
                datetimepicker.data('xdsoft_datetime', null);
                datetimepicker.remove();
                input
                    .data('xdsoft_datetimepicker', null)
                    .off('.xdsoft');
                $(options.contentWindow).off('resize.xdsoft');
                $([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
                if (input.unmousewheel) {
                    input.unmousewheel();
                }
            }
        };
        $(options.ownerDocument)
            .off('keydown.xdsoftctrl keyup.xdsoftctrl')
            .on('keydown.xdsoftctrl', function(e) {
                if (e.keyCode === CTRLKEY) {
                    ctrlDown = true;
                }
            })
            .on('keyup.xdsoftctrl', function(e) {
                if (e.keyCode === CTRLKEY) {
                    ctrlDown = false;
                }
            });

        this.each(function() {
            var datetimepicker = $(this).data('xdsoft_datetimepicker'),
                $input;
            if (datetimepicker) {
                if ($.type(opt) === 'string') {
                    switch (opt) {
                        case 'show':
                            $(this).select().focus();
                            datetimepicker.trigger('open.xdsoft');
                            break;
                        case 'hide':
                            datetimepicker.trigger('close.xdsoft');
                            break;
                        case 'toggle':
                            datetimepicker.trigger('toggle.xdsoft');
                            break;
                        case 'destroy':
                            destroyDateTimePicker($(this));
                            break;
                        case 'reset':
                            this.value = this.defaultValue;
                            if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                                datetimepicker.data('changed', false);
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                            break;
                        case 'validate':
                            $input = datetimepicker.data('input');
                            $input.trigger('blur.xdsoft');
                            break;
                        default:
                            if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                                result = datetimepicker[opt](opt2);
                            }
                    }
                } else {
                    datetimepicker
                        .setOptions(opt);
                }
                return 0;
            }
            if ($.type(opt) !== 'string') {
                if (!options.lazyInit || options.open || options.inline) {
                    createDateTimePicker($(this));
                } else {
                    lazyInit($(this));
                }
            }
        });

        return result;
    };

    $.fn.datetimepicker.defaults = default_options;

    function HighlightedDate(date, desc, style) {
        "use strict";
        this.date = date;
        this.desc = desc;
        this.style = style;
    }
};;
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'jquery-mousewheel'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory(require('jquery'));;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(datetimepickerFactory));

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));;
/**
 * @file
 */

(function($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.picker = {
        attach: function(context, settings) {

            if (typeof drupalSettings.date_time_picker != 'undefined') {
                var count = 0;
                var default_date = null;

                // Setting the current language for the calendar.
                var language = drupalSettings.path.currentLanguage;
                jQuery.datetimepicker.setLocale(language);

                //Current date / time
                var today = new Date();
                var now = today;

                var day_week_start = 1;
                // For using in a standard date field, format should be Y-m-d\TH:i:s
                var date_format = 'd-m-Y H:i';

                var current_date = ('0' + now.getDate()).slice(-2) + '-' +
                    ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
                    now.getFullYear();
                var current_date_en = now.getFullYear() + '-' +
                    ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
                    ('0' + now.getDate()).slice(-2);

                var rounded_time = Math.ceil(now.getMinutes() / 15) * 15;
                if (rounded_time > 59) {
                    rounded_time = 0;
                }
                var current_time = now.getHours() + ':' + rounded_time;

                if (language == 'en') {
                    day_week_start = 0;
                    date_format = 'Y-m-d H:i';
                    current_date = current_date_en;
                }

                // index: element id, value: #setting
                $.each(drupalSettings.date_time_picker, function(index, value) {
                    //console.log(index);
                    var setting = jQuery.parseJSON(value);

                    // Settings from form elements can be collected here
                    //console.log(setting.setting1);

                    // DateTime picker settings
                    $('#' + index).datetimepicker({
                        lang: language,
                        format: date_format,
                        defaultDate: current_date,
                        defaultTime: current_time,
                        value: current_date + ' ' + current_time,
                        dayOfWeekStart: day_week_start,
                        startDate: today,
                        step: 15,
                        monthChangeSpinner: false, // do not work
                        scrollMonth: false, // do not work
                        yearStart: today.getFullYear(),
                        yearEnd: today.getFullYear() + 1,
                        lazyInit: true,
                        todayButton: true,
                    });
                    count++;
                });
            }
        }
    };
})(jQuery, Drupal, drupalSettings);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

Drupal.debounce = function(func, wait, immediate) {
    var timeout = void 0;
    var result = void 0;
    return function() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var context = this;
        var later = function later() {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
};;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal, debounce) {
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return this[0] && callback ? $.trim(callback(this[0])) : '';
    };

    $.fn.drupalSetSummary = function(callback) {
        var self = this;

        if (typeof callback !== 'function') {
            var val = callback;
            callback = function callback() {
                return val;
            };
        }

        return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function() {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated');
    };

    Drupal.behaviors.formSingleSubmit = {
        attach: function attach() {
            function onFormSubmit(e) {
                var $form = $(e.currentTarget);
                var formValues = $form.serialize();
                var previousValues = $form.attr('data-drupal-form-submit-last');
                if (previousValues === formValues) {
                    e.preventDefault();
                } else {
                    $form.attr('data-drupal-form-submit-last', formValues);
                }
            }

            $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
        }
    };

    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }

    function fieldsList(form) {
        var $fieldList = $(form).find('[name]').map(function(index, element) {
            return element.getAttribute('id');
        });

        return $.makeArray($fieldList);
    }

    Drupal.behaviors.formUpdated = {
        attach: function attach(context) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
            var formFields = void 0;

            if ($forms.length) {
                $.makeArray($forms).forEach(function(form) {
                    var events = 'change.formUpdated input.formUpdated ';
                    var eventHandler = debounce(function(event) {
                        triggerFormUpdated(event.target);
                    }, 300);
                    formFields = fieldsList(form).join(',');

                    form.setAttribute('data-drupal-form-fields', formFields);
                    $(form).on(events, eventHandler);
                });
            }

            if (contextIsForm) {
                formFields = fieldsList(context).join(',');

                var currentFields = $(context).attr('data-drupal-form-fields');

                if (formFields !== currentFields) {
                    triggerFormUpdated(context);
                }
            }
        },
        detach: function detach(context, settings, trigger) {
            var $context = $(context);
            var contextIsForm = $context.is('form');
            if (trigger === 'unload') {
                var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
                if ($forms.length) {
                    $.makeArray($forms).forEach(function(form) {
                        form.removeAttribute('data-drupal-form-fields');
                        $(form).off('.formUpdated');
                    });
                }
            }
        }
    };

    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach: function attach(context, settings) {
            var userInfo = ['name', 'mail', 'homepage'];
            var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
            if ($forms.length) {
                userInfo.forEach(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    var browserData = localStorage.getItem('Drupal.visitor.' + info);
                    var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
                    if ($element.length && emptyOrDefault && browserData) {
                        $element.val(browserData);
                    }
                });
            }
            $forms.on('submit', function() {
                userInfo.forEach(function(info) {
                    var $element = $forms.find('[name=' + info + ']');
                    if ($element.length) {
                        localStorage.setItem('Drupal.visitor.' + info, $element.val());
                    }
                });
            });
        }
    };

    var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
        var url = void 0;
        if (e.type === 'click') {
            url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
        } else {
            url = window.location;
        }
        var hash = url.hash.substr(1);
        if (hash) {
            var $target = $('#' + hash);
            $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

            setTimeout(function() {
                return $target.trigger('focus');
            }, 300);
        }
    };

    var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal) {
    Drupal.behaviors.detailsAria = {
        attach: function attach() {
            $('body').once('detailsAria').on('click.detailsAria', 'summary', function(event) {
                var $summary = $(event.currentTarget);
                var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';

                $summary.attr({
                    'aria-expanded': open,
                    'aria-pressed': open
                });
            });
        }
    };
})(jQuery, Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Modernizr, Drupal) {
    function CollapsibleDetails(node) {
        this.$node = $(node);
        this.$node.data('details', this);

        var anchor = window.location.hash && window.location.hash !== '#' ? ', ' + window.location.hash : '';
        if (this.$node.find('.error' + anchor).length) {
            this.$node.attr('open', true);
        }

        this.setupSummary();

        this.setupLegend();
    }

    $.extend(CollapsibleDetails, {
        instances: []
    });

    $.extend(CollapsibleDetails.prototype, {
        setupSummary: function setupSummary() {
            this.$summary = $('<span class="summary"></span>');
            this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated');
        },
        setupLegend: function setupLegend() {
            var $legend = this.$node.find('> summary');

            $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($legend).after(document.createTextNode(' '));

            $('<a class="details-title"></a>').attr('href', '#' + this.$node.attr('id')).prepend($legend.contents()).appendTo($legend);

            $legend.append(this.$summary).on('click', $.proxy(this.onLegendClick, this));
        },
        onLegendClick: function onLegendClick(e) {
            this.toggle();
            e.preventDefault();
        },
        onSummaryUpdated: function onSummaryUpdated() {
            var text = $.trim(this.$node.drupalGetSummary());
            this.$summary.html(text ? ' (' + text + ')' : '');
        },
        toggle: function toggle() {
            var _this = this;

            var isOpen = !!this.$node.attr('open');
            var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');
            if (isOpen) {
                $summaryPrefix.html(Drupal.t('Show'));
            } else {
                $summaryPrefix.html(Drupal.t('Hide'));
            }

            setTimeout(function() {
                _this.$node.attr('open', !isOpen);
            }, 0);
        }
    });

    Drupal.behaviors.collapse = {
        attach: function attach(context) {
            if (Modernizr.details) {
                return;
            }
            var $collapsibleDetails = $(context).find('details').once('collapse').addClass('collapse-processed');
            if ($collapsibleDetails.length) {
                for (var i = 0; i < $collapsibleDetails.length; i++) {
                    CollapsibleDetails.instances.push(new CollapsibleDetails($collapsibleDetails[i]));
                }
            }
        }
    };

    var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
        $target.parents('details').not('[open]').find('> summary').trigger('click');
    };

    $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);

    Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(),
                    h = a.map(g, function(a, b) {
                        return b
                    }).length,
                    i = !1,
                    j = this.elementValue(b);
                if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
                    if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
                    delete g.normalizer
                }
                for (d in g) {
                    e = {
                        method: d,
                        parameters: g[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function(a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function(a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});;
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    return function() {
        function b(a) {
            return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
        }
        a.validator.addMethod("maxWords", function(a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d
        }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function(a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d
        }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function(a, c, d) {
            var e = b(a),
                f = /\b\w+\b/g;
            return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
        }, a.validator.format("Please enter between {0} and {1} words."))
    }(), a.validator.addMethod("accept", function(b, c, d) {
        var e, f, g, h = "string" == typeof d ? d.replace(/\s/g, "") : "image/*",
            i = this.optional(c);
        if (i) return i;
        if ("file" === a(c).attr("type") && (h = h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), c.files && c.files.length))
            for (g = new RegExp(".?(" + h + ")$", "i"), e = 0; e < c.files.length; e++)
                if (f = c.files[e], !f.type.match(g)) return !1;
        return !0
    }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function(a, b) {
        return this.optional(b) || /^\w+$/i.test(a)
    }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function(a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c, d, e, f = a.replace(/ /g, ""),
            g = 0,
            h = f.length;
        for (c = 0; c < h; c++) d = h - c, e = f.substring(c, c + 1), g += d * e;
        return g % 11 === 0
    }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function(b, c) {
        return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c)
    }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function(a, b) {
        return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())
    }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function(a, b) {
        "use strict";

        function c(a) {
            return a % 2 === 0
        }
        if (this.optional(b)) return !0;
        var d, e, f, g, h = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
            i = a.substring(0, 1),
            j = a.substring(1, 8),
            k = a.substring(8, 9),
            l = 0,
            m = 0,
            n = 0;
        if (9 !== a.length || !h.test(a)) return !1;
        for (d = 0; d < j.length; d++) e = parseInt(j[d], 10), c(d) ? (e *= 2, n += e < 10 ? e : e - 9) : m += e;
        return l = m + n, f = (10 - l.toString().substr(-1)).toString(), f = parseInt(f, 10) > 9 ? "0" : f, g = "JABCDEFGHI".substr(f, 1).toString(), i.match(/[ABEH]/) ? k === f : i.match(/[KPQS]/) ? k === g : k === f || k === g
    }, "Please specify a valid CIF number."), a.validator.addMethod("cpfBR", function(a) {
        if (a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== a.length) return !1;
        var b, c, d, e, f = 0;
        if (b = parseInt(a.substring(9, 10), 10), c = parseInt(a.substring(10, 11), 10), d = function(a, b) {
                var c = 10 * a % 11;
                return 10 !== c && 11 !== c || (c = 0), c === b
            }, "" === a || "00000000000" === a || "11111111111" === a || "22222222222" === a || "33333333333" === a || "44444444444" === a || "55555555555" === a || "66666666666" === a || "77777777777" === a || "88888888888" === a || "99999999999" === a) return !1;
        for (e = 1; e <= 9; e++) f += parseInt(a.substring(e - 1, e), 10) * (11 - e);
        if (d(f, b)) {
            for (f = 0, e = 1; e <= 10; e++) f += parseInt(a.substring(e - 1, e), 10) * (12 - e);
            return d(f, c)
        }
        return !1
    }, "Please specify a valid CPF number"), a.validator.addMethod("creditcard", function(a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c, d, e = 0,
            f = 0,
            g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
        for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
    }, "Please enter a valid credit card number."), a.validator.addMethod("creditcardtypes", function(a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, "");
        var d = 0;
        return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : !!(128 & d)
    }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function(a, b, c) {
        var d, e = "string" == typeof c,
            f = e ? c : c[0],
            g = !!e || c[1];
        return f = f.replace(/,/g, ""), f = g ? f + "]" : f + "]?", d = "^[" + f + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
    }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function(a, b) {
        return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)
    }, a.validator.messages.date), a.validator.addMethod("dateITA", function(a, b) {
        var c, d, e, f, g, h = !1,
            i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return i.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0)), h = g.getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d) : h = !1, this.optional(b) || h
    }, a.validator.messages.date), a.validator.addMethod("dateNL", function(a, b) {
        return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
    }, a.validator.messages.date), a.validator.addMethod("extension", function(a, b, c) {
        return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i"))
    }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function(a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a)
    }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function(a, b) {
        if (this.optional(b)) return !0;
        var c, d, e, f, g, h, i, j, k, l = a.replace(/ /g, "").toUpperCase(),
            m = "",
            n = !0,
            o = "",
            p = "",
            q = 5;
        if (l.length < q) return !1;
        if (c = l.substring(0, 2), h = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            }, g = h[c], "undefined" != typeof g && (i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", ""), !i.test(l))) return !1;
        for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) e = d.charAt(j), "0" !== e && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
        for (k = 0; k < m.length; k++) f = m.charAt(k), p = "" + o + f, o = p % 97;
        return 1 === o
    }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function(a, b) {
        return this.optional(b) || /^-?\d+$/.test(a)
    }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function(a, b) {
        return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
    }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function(a, b) {
        return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
    }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function(a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a)
    }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function(a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
    }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), a.validator.addMethod("netmask", function(a, b) {
        return this.optional(b) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(a)
    }, "Please enter a valid netmask."), a.validator.addMethod("nieES", function(a, b) {
        "use strict";
        if (this.optional(b)) return !0;
        var c, d = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),
            e = "TRWAGMYFPDXBNJZSQVHLCKET",
            f = a.substr(a.length - 1).toUpperCase();
        return a = a.toString().toUpperCase(), !(a.length > 10 || a.length < 9 || !d.test(a)) && (a = a.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2"), c = 9 === a.length ? a.substr(0, 8) : a.substr(0, 9), e.charAt(parseInt(c, 10) % 23) === f)
    }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function(a, b) {
        "use strict";
        return !!this.optional(b) || (a = a.toUpperCase(), !!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : !!/^[KLM]{1}/.test(a) && a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 1) % 23)))
    }, "Please specify a valid NIF number."), a.validator.addMethod("nipPL", function(a) {
        "use strict";
        if (a = a.replace(/[^0-9]/g, ""), 10 !== a.length) return !1;
        for (var b = [6, 5, 7, 2, 3, 4, 5, 6, 7], c = 0, d = 0; d < 9; d++) c += b[d] * a[d];
        var e = c % 11,
            f = 10 === e ? 0 : e;
        return f === parseInt(a[9], 10)
    }, "Please specify a valid NIP number."), a.validator.addMethod("notEqualTo", function(b, c, d) {
        return this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
    }, "Please enter a different value, values must not be the same."), a.validator.addMethod("nowhitespace", function(a, b) {
        return this.optional(b) || /^\S+$/i.test(a)
    }, "No white space please"), a.validator.addMethod("pattern", function(a, b, c) {
        return !!this.optional(b) || ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a))
    }, "Invalid format."), a.validator.addMethod("phoneNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid phone number."), a.validator.addMethod("phonesUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), a.validator.addMethod("phoneUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function(a, b) {
        return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("postalcodeBR", function(a, b) {
        return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
    }, "Informe um CEP válido."), a.validator.addMethod("postalCodeCA", function(a, b) {
        return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeIT", function(a, b) {
        return this.optional(b) || /^\d{5}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function(a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function(a, b) {
        return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
    }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function(b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
            h = e.filter(function() {
                return g.elementValue(this)
            }).length >= d[0];
        return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
            g.element(this)
        }), e.data("being_validated", !1)), h
    }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function(b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
            h = e.filter(function() {
                return g.elementValue(this)
            }).length,
            i = 0 === h || h >= d[0];
        return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
            g.element(this)
        }), e.data("being_validated", !1)), i
    }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), a.validator.addMethod("stateUS", function(a, b, c) {
        var d, e = "undefined" == typeof c,
            f = !e && "undefined" != typeof c.caseSensitive && c.caseSensitive,
            g = !e && "undefined" != typeof c.includeTerritories && c.includeTerritories,
            h = !e && "undefined" != typeof c.includeMilitary && c.includeMilitary;
        return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
    }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function(b, c, d) {
        return a(b).text().length >= d
    }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function(a, b) {
        return this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
    }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function(a, b) {
        return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
    }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function(a, b) {
        return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    }, a.validator.messages.url), a.validator.addMethod("vinUS", function(a) {
        if (17 !== a.length) return !1;
        var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            k = 0;
        for (b = 0; b < 17; b++) {
            if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                for (c = 0; c < h.length; c++)
                    if (d.toUpperCase() === h[c]) {
                        d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
                        break
                    }
            } else d *= e;
            k += d
        }
        return f = k % 11, 10 === f && (f = "X"), f === g
    }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function(a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a)
    }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function(a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"), a
});;
/**
 * @file
 * Attaches behaviors for the Clientside Validation jQuery module.
 */
(function($, Drupal) {
    /**
     * Attaches jQuery validate behavoir to forms.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *  Attaches the outline behavior to the right context.
     */
    Drupal.behaviors.cvJqueryValidate = {
        attach: function(context) {
            $(context).find('form').each(function() {
                $(this).validate();
            });
        }
    };
})(jQuery, Drupal);;
/**
 * @file
 * Attaches behaviors for the Clientside Validation jQuery module.
 */
(function($, Drupal, debounce, CKEDITOR) {
    /**
     * Attaches jQuery validate behavoir to forms.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *  Attaches the outline behavior to the right context.
     */
    Drupal.behaviors.cvJqueryValidateCKEditor = {
        attach: function(context) {
            if (typeof CKEDITOR === 'undefined') {
                return;
            }
            var ignore = ':hidden';
            var not = [];
            for (var instance in CKEDITOR.instances) {
                if (CKEDITOR.instances.hasOwnProperty(instance)) {
                    not.push('#' + instance);
                }
            }
            ignore += not.length ? ':not(' + not.join(', ') + ')' : '';
            $('form').each(function() {
                var validator = $(this).data('validator');
                if (!validator) {
                    return;
                }
                validator.settings.ignore = ignore;
                validator.settings.errorPlacement = function(place, $element) {
                    var id = $element.attr('id');
                    var afterElement = $element[0];
                    if (CKEDITOR.instances.hasOwnProperty(id)) {
                        afterElement = CKEDITOR.instances[id].container.$;
                    }
                    place.insertAfter(afterElement);
                };
            });
            var updateText = function(instance) {
                return debounce(function(e) {
                    instance.updateElement();
                    var event = $.extend(true, {}, e.data.$);
                    delete event.target;
                    delete event.explicitOriginalTarget;
                    delete event.originalTarget;
                    delete event.currentTarget;
                    $(instance.element.$).trigger(new $.Event(e.name, event));
                }, 250);
            };
            CKEDITOR.on('instanceReady', function() {
                for (var instance in CKEDITOR.instances) {
                    if (CKEDITOR.instances.hasOwnProperty(instance)) {
                        CKEDITOR.instances[instance].document.on("keyup", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("paste", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("keypress", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("blur", updateText(CKEDITOR.instances[instance]));
                        CKEDITOR.instances[instance].document.on("change", updateText(CKEDITOR.instances[instance]));
                    }
                }
            });
        }
    };
})(jQuery, Drupal, Drupal.debounce, (typeof CKEDITOR === 'undefined') ? undefined : CKEDITOR);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal) {
    Drupal.theme.progressBar = function(id) {
        return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
    };

    Drupal.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;

        this.element = $(Drupal.theme('progressBar', id));
    };

    $.extend(Drupal.ProgressBar.prototype, {
        setProgress: function setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').css('width', percentage + '%');
                $(this.element).find('div.progress__percentage').html(percentage + '%');
            }
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) {
                this.updateCallback(percentage, message, this);
            }
        },
        startMonitoring: function startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring: function stopMonitoring() {
            clearTimeout(this.timer);

            this.uri = null;
        },
        sendPing: function sendPing() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (this.uri) {
                var pb = this;

                var uri = this.uri;
                if (uri.indexOf('?') === -1) {
                    uri += '?';
                } else {
                    uri += '&';
                }
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success: function success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }

                        pb.setProgress(progress.percentage, progress.message, progress.label);

                        pb.timer = setTimeout(function() {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error: function error(xmlhttp) {
                        var e = new Drupal.AjaxError(xmlhttp, pb.uri);
                        pb.displayError('<pre>' + e.message + '</pre>');
                    }
                });
            }
        },
        displayError: function displayError(string) {
            var error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();

            if (this.errorCallback) {
                this.errorCallback(this);
            }
        }
    });
})(jQuery, Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function(Drupal) {
    Drupal.behaviors.responsiveImageAJAX = {
        attach: function attach() {
            if (window.picturefill) {
                window.picturefill();
            }
        }
    };
})(Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

(function($, window, Drupal, drupalSettings) {
    Drupal.behaviors.AJAX = {
        attach: function attach(context, settings) {
            function loadAjaxBehavior(base) {
                var elementSettings = settings.ajax[base];
                if (typeof elementSettings.selector === 'undefined') {
                    elementSettings.selector = '#' + base;
                }
                $(elementSettings.selector).once('drupal-ajax').each(function() {
                    elementSettings.element = this;
                    elementSettings.base = base;
                    Drupal.ajax(elementSettings);
                });
            }

            Object.keys(settings.ajax || {}).forEach(function(base) {
                return loadAjaxBehavior(base);
            });

            Drupal.ajax.bindAjaxLinks(document.body);

            $('.use-ajax-submit').once('ajax').each(function() {
                var elementSettings = {};

                elementSettings.url = $(this.form).attr('action');

                elementSettings.setClick = true;

                elementSettings.event = 'click';

                elementSettings.progress = {
                    type: 'throbber'
                };
                elementSettings.base = $(this).attr('id');
                elementSettings.element = this;

                Drupal.ajax(elementSettings);
            });
        },
        detach: function detach(context, settings, trigger) {
            if (trigger === 'unload') {
                Drupal.ajax.expired().forEach(function(instance) {
                    Drupal.ajax.instances[instance.instanceIndex] = null;
                });
            }
        }
    };

    Drupal.AjaxError = function(xmlhttp, uri, customMessage) {
        var statusCode = void 0;
        var statusText = void 0;
        var responseText = void 0;
        if (xmlhttp.status) {
            statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
                '!status': xmlhttp.status
            });
        } else {
            statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
        }
        statusCode += '\n' + Drupal.t('Debugging information follows.');
        var pathText = '\n' + Drupal.t('Path: !uri', {
            '!uri': uri
        });
        statusText = '';

        try {
            statusText = '\n' + Drupal.t('StatusText: !statusText', {
                '!statusText': $.trim(xmlhttp.statusText)
            });
        } catch (e) {}

        responseText = '';

        try {
            responseText = '\n' + Drupal.t('ResponseText: !responseText', {
                '!responseText': $.trim(xmlhttp.responseText)
            });
        } catch (e) {}

        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');

        var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState
        }) : '';

        customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
            '!customMessage': customMessage
        }) : '';

        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

        this.name = 'AjaxError';
    };

    Drupal.AjaxError.prototype = new Error();
    Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

    Drupal.ajax = function(settings) {
        if (arguments.length !== 1) {
            throw new Error('Drupal.ajax() function must be called with one configuration object only');
        }

        var base = settings.base || false;
        var element = settings.element || false;
        delete settings.base;
        delete settings.element;

        if (!settings.progress && !element) {
            settings.progress = false;
        }

        var ajax = new Drupal.Ajax(base, element, settings);
        ajax.instanceIndex = Drupal.ajax.instances.length;
        Drupal.ajax.instances.push(ajax);

        return ajax;
    };

    Drupal.ajax.instances = [];

    Drupal.ajax.expired = function() {
        return Drupal.ajax.instances.filter(function(instance) {
            return instance && instance.element !== false && !document.body.contains(instance.element);
        });
    };

    Drupal.ajax.bindAjaxLinks = function(element) {
        $(element).find('.use-ajax').once('ajax').each(function(i, ajaxLink) {
            var $linkElement = $(ajaxLink);

            var elementSettings = {
                progress: {
                    type: 'throbber'
                },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
            };
            var href = $linkElement.attr('href');

            if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
            }
            Drupal.ajax(elementSettings);
        });
    };

    Drupal.Ajax = function(base, element, elementSettings) {
        var defaults = {
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? '#' + base : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                js: true
            }
        };

        $.extend(this, defaults, elementSettings);

        this.commands = new Drupal.AjaxCommands();

        this.instanceIndex = false;

        if (this.wrapper) {
            this.wrapper = '#' + this.wrapper;
        }

        this.element = element;

        this.element_settings = elementSettings;

        this.elementSettings = elementSettings;

        if (this.element && this.element.form) {
            this.$form = $(this.element.form);
        }

        if (!this.url) {
            var $element = $(this.element);
            if ($element.is('a')) {
                this.url = $element.attr('href');
            } else if (this.element && element.form) {
                this.url = this.$form.attr('action');
            }
        }

        var originalUrl = this.url;

        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

        if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
            drupalSettings.ajaxTrustedUrl[this.url] = true;
        }

        var ajax = this;

        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function beforeSerialize(elementSettings, options) {
                return ajax.beforeSerialize(elementSettings, options);
            },
            beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(formValues, elementSettings, options);
            },
            beforeSend: function beforeSend(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success: function success(response, status, xmlhttprequest) {
                if (typeof response === 'string') {
                    response = $.parseJSON(response);
                }

                if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var customMessage = Drupal.t('The response failed verification so will not be processed.');
                        return ajax.error(xmlhttprequest, ajax.url, customMessage);
                    }
                }

                return ajax.success(response, status);
            },
            complete: function complete(xmlhttprequest, status) {
                ajax.ajaxing = false;
                if (status === 'error' || status === 'parsererror') {
                    return ajax.error(xmlhttprequest, ajax.url);
                }
            },

            dataType: 'json',
            type: 'POST'
        };

        if (elementSettings.dialog) {
            ajax.options.data.dialogOptions = elementSettings.dialog;
        }

        if (ajax.options.url.indexOf('?') === -1) {
            ajax.options.url += '?';
        } else {
            ajax.options.url += '&';
        }

        var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
        if (elementSettings.dialogRenderer) {
            wrapper += '.' + elementSettings.dialogRenderer;
        }
        ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

        $(ajax.element).on(elementSettings.event, function(event) {
            if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
                throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                    '!url': ajax.url
                }));
            }
            return ajax.eventResponse(this, event);
        });

        if (elementSettings.keypress) {
            $(ajax.element).on('keypress', function(event) {
                return ajax.keypressResponse(this, event);
            });
        }

        if (elementSettings.prevent) {
            $(ajax.element).on(elementSettings.prevent, false);
        }
    };

    Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

    Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

    Drupal.Ajax.prototype.execute = function() {
        if (this.ajaxing) {
            return;
        }

        try {
            this.beforeSerialize(this.element, this.options);

            return $.ajax(this.options);
        } catch (e) {
            this.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

            return $.Deferred().reject();
        }
    };

    Drupal.Ajax.prototype.keypressResponse = function(element, event) {
        var ajax = this;

        if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
            event.preventDefault();
            event.stopPropagation();
            $(element).trigger(ajax.elementSettings.event);
        }
    };

    Drupal.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();

        var ajax = this;

        if (ajax.ajaxing) {
            return;
        }

        try {
            if (ajax.$form) {
                if (ajax.setClick) {
                    element.form.clk = element;
                }

                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            ajax.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
        }
    };

    Drupal.Ajax.prototype.beforeSerialize = function(element, options) {
        if (this.$form) {
            var settings = this.settings || drupalSettings;
            Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }

        options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

        var pageState = drupalSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    };

    Drupal.Ajax.prototype.beforeSubmit = function(formValues, element, options) {};

    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.$form) {
            options.extraData = options.extraData || {};

            options.extraData.ajax_iframe_upload = '1';

            var v = $.fieldValue(this.element);
            if (v !== null) {
                options.extraData[this.element.name] = v;
            }
        }

        $(this.element).prop('disabled', true);

        if (!this.progress || !this.progress.type) {
            return;
        }

        var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
            this[progressIndicatorMethod].call(this);
        }
    };

    Drupal.theme.ajaxProgressThrobber = function(message) {
        var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
        var throbber = '<div class="throbber">&nbsp;</div>';

        return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
    };

    Drupal.theme.ajaxProgressIndicatorFullscreen = function() {
        return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
    };

    Drupal.theme.ajaxProgressMessage = function(message) {
        return '<div class="message">' + message + '</div>';
    };

    Drupal.Ajax.prototype.setProgressIndicatorBar = function() {
        var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
        if (this.progress.message) {
            progressBar.setProgress(-1, this.progress.message);
        }
        if (this.progress.url) {
            progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        }
        this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    };

    Drupal.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
        $(this.element).after(this.progress.element);
    };

    Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
        $('body').after(this.progress.element);
    };

    Drupal.Ajax.prototype.success = function(response, status) {
        var _this = this;

        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.element).prop('disabled', false);

        var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

        var focusChanged = false;
        Object.keys(response || {}).forEach(function(i) {
            if (response[i].command && _this.commands[response[i].command]) {
                _this.commands[response[i].command](_this, response[i], status);
                if (response[i].command === 'invoke' && response[i].method === 'focus') {
                    focusChanged = true;
                }
            }
        });

        if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
            var target = false;

            for (var n = elementParents.length - 1; !target && n >= 0; n--) {
                target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
            }

            if (target) {
                $(target).trigger('focus');
            }
        }

        if (this.$form) {
            var settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }

        this.settings = null;
    };

    Drupal.Ajax.prototype.getEffect = function(response) {
        var type = response.effect || this.effect;
        var speed = response.speed || this.speed;

        var effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed;
        }

        return effect;
    };

    Drupal.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }

        $(this.wrapper).show();

        $(this.element).prop('disabled', false);

        if (this.$form) {
            var settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
    };

    Drupal.theme.ajaxWrapperNewContent = function($newContent, ajax, response) {
        return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function(i) {
            return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
        }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
    };

    Drupal.theme.ajaxWrapperMultipleRootElements = function($elements) {
        return $('<div></div>').append($elements);
    };

    Drupal.AjaxCommands = function() {};
    Drupal.AjaxCommands.prototype = {
        insert: function insert(ajax, response) {
            var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            var method = response.method || ajax.method;
            var effect = ajax.getEffect(response);

            var settings = response.settings || ajax.settings || drupalSettings;

            var $newContent = $($.parseHTML(response.data, document, true));

            $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    Drupal.detachBehaviors($wrapper.get(0), settings);
                    break;
                default:
                    break;
            }

            $wrapper[method]($newContent);

            if (effect.showEffect !== 'show') {
                $newContent.hide();
            }

            var $ajaxNewContent = $newContent.find('.ajax-new-content');
            if ($ajaxNewContent.length) {
                $ajaxNewContent.hide();
                $newContent.show();
                $ajaxNewContent[effect.showEffect](effect.showSpeed);
            } else if (effect.showEffect !== 'show') {
                $newContent[effect.showEffect](effect.showSpeed);
            }

            if ($newContent.parents('html').length) {
                $newContent.each(function(index, element) {
                    if (element.nodeType === Node.ELEMENT_NODE) {
                        Drupal.attachBehaviors(element, settings);
                    }
                });
            }
        },
        remove: function remove(ajax, response, status) {
            var settings = response.settings || ajax.settings || drupalSettings;
            $(response.selector).each(function() {
                Drupal.detachBehaviors(this, settings);
            }).remove();
        },
        changed: function changed(ajax, response, status) {
            var $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) {
                    $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
                }
            }
        },
        alert: function alert(ajax, response, status) {
            window.alert(response.text, response.title);
        },
        redirect: function redirect(ajax, response, status) {
            window.location = response.url;
        },
        css: function css(ajax, response, status) {
            $(response.selector).css(response.argument);
        },
        settings: function settings(ajax, response, status) {
            var ajaxSettings = drupalSettings.ajax;

            if (ajaxSettings) {
                Drupal.ajax.expired().forEach(function(instance) {

                    if (instance.selector) {
                        var selector = instance.selector.replace('#', '');
                        if (selector in ajaxSettings) {
                            delete ajaxSettings[selector];
                        }
                    }
                });
            }

            if (response.merge) {
                $.extend(true, drupalSettings, response.settings);
            } else {
                ajax.settings = response.settings;
            }
        },
        data: function data(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },
        invoke: function invoke(ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, _toConsumableArray(response.args));
        },
        restripe: function restripe(ajax, response, status) {
            $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
        },
        update_build_id: function update_build_id(ajax, response, status) {
            $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
        },
        add_css: function add_css(ajax, response, status) {
            $('head').prepend(response.data);

            var match = void 0;
            var importMatch = /^@import url\("(.*)"\);$/gim;
            if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
                importMatch.lastIndex = 0;
                do {
                    match = importMatch.exec(response.data);
                    document.styleSheets[0].addImport(match[1]);
                } while (match);
            }
        }
    };
})(jQuery, window, Drupal, drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return function() {
        function b(a, b, c) {
            return [parseFloat(a[0]) * (l.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (l.test(a[1]) ? c / 100 : 1)]
        }

        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            }
        }
        var e, f = Math.max,
            g = Math.abs,
            h = /left|center|right/,
            i = /top|center|bottom/,
            j = /[\+\-]\d+(\.[\d]+)?%?/,
            k = /^\w+/,
            l = /%$/,
            m = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (void 0 !== e) return e;
                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    f = d.children()[0];
                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
            },
            getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                    d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                    e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                    f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {
                    width: f ? a.position.scrollbarWidth() : 0,
                    height: e ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(b) {
                var c = a(b || window),
                    d = a.isWindow(c[0]),
                    e = !!c[0] && 9 === c[0].nodeType,
                    f = !d && !e;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: f ? a(b).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: c.outerWidth(),
                    height: c.outerHeight()
                }
            }
        }, a.fn.position = function(e) {
            if (!e || !e.of) return m.apply(this, arguments);
            e = a.extend({}, e);
            var l, n, o, p, q, r, s = a(e.of),
                t = a.position.getWithinInfo(e.within),
                u = a.position.getScrollInfo(t),
                v = (e.collision || "flip").split(" "),
                w = {};
            return r = d(s), s[0].preventDefault && (e.at = "left top"), n = r.width, o = r.height, p = r.offset, q = a.extend({}, p), a.each(["my", "at"], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = h.test(c[0]) ? c.concat(["center"]) : i.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = h.test(c[0]) ? c[0] : "center", c[1] = i.test(c[1]) ? c[1] : "center", a = j.exec(c[0]), b = j.exec(c[1]), w[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [k.exec(c[0])[0], k.exec(c[1])[0]]
            }), 1 === v.length && (v[1] = v[0]), "right" === e.at[0] ? q.left += n : "center" === e.at[0] && (q.left += n / 2), "bottom" === e.at[1] ? q.top += o : "center" === e.at[1] && (q.top += o / 2), l = b(w.at, n, o), q.left += l[0], q.top += l[1], this.each(function() {
                var d, h, i = a(this),
                    j = i.outerWidth(),
                    k = i.outerHeight(),
                    m = c(this, "marginLeft"),
                    r = c(this, "marginTop"),
                    x = j + m + c(this, "marginRight") + u.width,
                    y = k + r + c(this, "marginBottom") + u.height,
                    z = a.extend({}, q),
                    A = b(w.my, i.outerWidth(), i.outerHeight());
                "right" === e.my[0] ? z.left -= j : "center" === e.my[0] && (z.left -= j / 2), "bottom" === e.my[1] ? z.top -= k : "center" === e.my[1] && (z.top -= k / 2), z.left += A[0], z.top += A[1], d = {
                    marginLeft: m,
                    marginTop: r
                }, a.each(["left", "top"], function(b, c) {
                    a.ui.position[v[b]] && a.ui.position[v[b]][c](z, {
                        targetWidth: n,
                        targetHeight: o,
                        elemWidth: j,
                        elemHeight: k,
                        collisionPosition: d,
                        collisionWidth: x,
                        collisionHeight: y,
                        offset: [l[0] + A[0], l[1] + A[1]],
                        my: e.my,
                        at: e.at,
                        within: t,
                        elem: i
                    })
                }), e.using && (h = function(a) {
                    var b = p.left - z.left,
                        c = b + n - j,
                        d = p.top - z.top,
                        h = d + o - k,
                        l = {
                            target: {
                                element: s,
                                left: p.left,
                                top: p.top,
                                width: n,
                                height: o
                            },
                            element: {
                                element: i,
                                left: z.left,
                                top: z.top,
                                width: j,
                                height: k
                            },
                            horizontal: c < 0 ? "left" : b > 0 ? "right" : "center",
                            vertical: h < 0 ? "top" : d > 0 ? "bottom" : "middle"
                        };
                    n < j && g(b + c) < n && (l.horizontal = "center"), o < k && g(d + h) < o && (l.vertical = "middle"), f(g(b), g(c)) > f(g(d), g(h)) ? l.important = "horizontal" : l.important = "vertical", e.using.call(this, a, l)
                }), i.offset(a.extend(z, {
                    using: h
                }))
            })
        }, a.ui.position = {
            fit: {
                left: function(a, b) {
                    var c, d = b.within,
                        e = d.isWindow ? d.scrollLeft : d.offset.left,
                        g = d.width,
                        h = a.left - b.collisionPosition.marginLeft,
                        i = e - h,
                        j = h + b.collisionWidth - g - e;
                    b.collisionWidth > g ? i > 0 && j <= 0 ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : j > 0 && i <= 0 ? a.left = e : i > j ? a.left = e + g - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
                },
                top: function(a, b) {
                    var c, d = b.within,
                        e = d.isWindow ? d.scrollTop : d.offset.top,
                        g = b.within.height,
                        h = a.top - b.collisionPosition.marginTop,
                        i = e - h,
                        j = h + b.collisionHeight - g - e;
                    b.collisionHeight > g ? i > 0 && j <= 0 ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : j > 0 && i <= 0 ? a.top = e : i > j ? a.top = e + g - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var c, d, e = b.within,
                        f = e.offset.left + e.scrollLeft,
                        h = e.width,
                        i = e.isWindow ? e.scrollLeft : e.offset.left,
                        j = a.left - b.collisionPosition.marginLeft,
                        k = j - i,
                        l = j + b.collisionWidth - h - i,
                        m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                        n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        o = -2 * b.offset[0];
                    k < 0 ? (c = a.left + m + n + o + b.collisionWidth - h - f, (c < 0 || c < g(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || g(d) < l) && (a.left += m + n + o))
                },
                top: function(a, b) {
                    var c, d, e = b.within,
                        f = e.offset.top + e.scrollTop,
                        h = e.height,
                        i = e.isWindow ? e.scrollTop : e.offset.top,
                        j = a.top - b.collisionPosition.marginTop,
                        k = j - i,
                        l = j + b.collisionHeight - h - i,
                        m = "top" === b.my[1],
                        n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                        o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        p = -2 * b.offset[1];
                    k < 0 ? (d = a.top + n + o + p + b.collisionHeight - h - f, (d < 0 || d < g(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || g(c) < l) && (a.top += n + o + p))
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), a.ui.position
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(b) {
                    var c = a(b.target),
                        d = a(a.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && d.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(b) {
                    if (!this.previousFilter) {
                        var c = a(b.target).closest(".ui-menu-item"),
                            d = a(b.currentTarget);
                        c[0] === d[0] && (this._removeClass(d.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(b, d))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, c)
                },
                blur: function(b) {
                    this._delay(function() {
                        var c = !a.contains(this.element[0], a.ui.safeActiveElement(this.document[0]));
                        c && this.collapseAll(b)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var b = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                c = b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), c.children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-caret") && b.remove()
            })
        },
        _keydown: function(b) {
            var c, d, e, f, g = !0;
            switch (b.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(b);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(b);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", b);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", b);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(b);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(b);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(b);
                    break;
                case a.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(b);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(b);
                    break;
                default:
                    g = !1, d = this.previousFilter || "", f = !1, e = b.keyCode >= 96 && b.keyCode <= 105 ? (b.keyCode - 96).toString() : String.fromCharCode(b.keyCode), clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && c.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            g && b.preventDefault()
        },
        _activate: function(a) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var b, c, d, e, f, g = this,
                h = this.options.icons.submenu,
                i = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), d = i.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this),
                    c = b.prev(),
                    d = a("<span>").data("ui-menu-submenu-caret", !0);
                g._addClass(d, "ui-menu-icon", "ui-icon " + h), c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
            }), this._addClass(d, "ui-menu", "ui-widget ui-widget-content ui-front"), b = i.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                var b = a(this);
                g._isDivider(b) && g._addClass(b, "ui-menu-divider", "ui-widget-content")
            }), e = c.not(".ui-menu-item, .ui-menu-divider"), f = e.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(e, "ui-menu-item")._addClass(f, "ui-menu-item-wrapper"), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, b) {
            if ("icons" === a) {
                var c = this.element.find(".ui-menu-icon");
                this._removeClass(c, null, this.options.icons.submenu)._addClass(c, null, b.submenu)
            }
            this._super(a, b)
        },
        _setOptionDisabled: function(a) {
            this._super(a), this.element.attr("aria-disabled", String(a)), this._toggleClass(null, "ui-state-disabled", !!a)
        },
        focus: function(a, b) {
            var c, d, e;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children(".ui-menu-item-wrapper"), this._addClass(d, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), e = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(e, null, "ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), e < 0 ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", a, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a)
            }, this.delay))
        },
        _open: function(b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this._removeClass(d.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = d
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(b) {
            return !a(b.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d - e < 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
        },
        _filterMenuItems: function(b) {
            var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                d = new RegExp("^" + c, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    })
});;
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                f = "textarea" === e,
                g = "input" === e;
            this.isMultiLine = f || !g && this._isContentEditable(this.element), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                        case f.PAGE_UP:
                            b = !0, this._move("previousPage", e);
                            break;
                        case f.PAGE_DOWN:
                            b = !0, this._move("nextPage", e);
                            break;
                        case f.UP:
                            b = !0, this._keyEvent("previous", e);
                            break;
                        case f.DOWN:
                            b = !0, this._keyEvent("next", e);
                            break;
                        case f.ENTER:
                            this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                            break;
                        case f.TAB:
                            this.menu.active && this.menu.select(e);
                            break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                            break;
                        default:
                            c = !0, this._searchTimeout(e)
                    }
                },
                keypress: function(d) {
                    if (b) return b = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault());
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", d);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", d);
                                break;
                            case e.UP:
                                this._keyEvent("previous", d);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", d)
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                }
            }), this._initSource(), this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== a.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(b, c) {
                    var d, e;
                    return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                        a(b.target).trigger(b.originalEvent)
                    })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                        item: e
                    }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
                },
                menuselect: function(b, c) {
                    var d = c.item.data("ui-autocomplete-item"),
                        e = this.previous;
                    this.element[0] !== a.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e, this._delay(function() {
                        this.previous = e, this.selectedItem = d
                    })), !1 !== this._trigger("select", b, {
                        item: d
                    }) && this._value(d.value), this.term = this._value(), this.close(b), this.selectedItem = d
                }
            }), this.liveRegion = a("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(b) {
            var c = this.menu.element[0];
            return b.target === this.element[0] || b.target === c || a.contains(c, b.target)
        },
        _closeOnClickOutside: function(a) {
            this._isEventTargetInWidget(a) || this.close()
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), b.length || (b = this.document[0].body), b
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                d(a.ui.autocomplete.filter(b, c.term))
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function(a) {
                        e(a)
                    },
                    error: function() {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var b = this.term === this._value(),
                    c = this.menu.element.is(":visible"),
                    d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                b && (!b || c || d) || (this.selectedItem = null, this.search(null, a))
            }, this.options.delay)
        },
        search: function(a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
        },
        _search: function(a) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var b = ++this.requestIndex;
            return a.proxy(function(a) {
                b === this.requestIndex && this.__response(a), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0, this._close(a)
        },
        _close: function(a) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({}, b, {
                    label: b.label || b.value,
                    value: b.value || b.label
                })
            })
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c)
            })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(b, c) {
            return a("<li>").append(a("<div>").text(c.label)).appendTo(b)
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, b) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(a, b), b.preventDefault())
        },
        _isContentEditable: function(a) {
            if (!a.length) return !1;
            var b = a.prop("contentEditable");
            return "inherit" === b ? this._isContentEditable(a.parent()) : "true" === b
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a)
            })
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(b) {
            var c;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
        }
    }), a.ui.autocomplete
});;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal) {
    var states = {
        postponed: []
    };

    Drupal.states = states;

    function invert(a, invertState) {
        return invertState && typeof a !== 'undefined' ? !a : a;
    }

    function _compare2(a, b) {
        if (a === b) {
            return typeof a === 'undefined' ? a : true;
        }

        return typeof a === 'undefined' || typeof b === 'undefined';
    }

    function ternary(a, b) {
        if (typeof a === 'undefined') {
            return b;
        }
        if (typeof b === 'undefined') {
            return a;
        }

        return a && b;
    }

    Drupal.behaviors.states = {
        attach: function attach(context, settings) {
            var $states = $(context).find('[data-drupal-states]');
            var il = $states.length;

            var _loop = function _loop(i) {
                var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
                Object.keys(config || {}).forEach(function(state) {
                    new states.Dependent({
                        element: $($states[i]),
                        state: states.State.sanitize(state),
                        constraints: config[state]
                    });
                });
            };

            for (var i = 0; i < il; i++) {
                _loop(i);
            }

            while (states.postponed.length) {
                states.postponed.shift()();
            }
        }
    };

    states.Dependent = function(args) {
        var _this = this;

        $.extend(this, {
            values: {},
            oldValue: null
        }, args);

        this.dependees = this.getDependees();
        Object.keys(this.dependees || {}).forEach(function(selector) {
            _this.initializeDependee(selector, _this.dependees[selector]);
        });
    };

    states.Dependent.comparisons = {
        RegExp: function RegExp(reference, value) {
            return reference.test(value);
        },
        Function: function Function(reference, value) {
            return reference(value);
        },
        Number: function Number(reference, value) {
            return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
        }
    };

    states.Dependent.prototype = {
        initializeDependee: function initializeDependee(selector, dependeeStates) {
            var _this2 = this;

            this.values[selector] = {};

            Object.keys(dependeeStates).forEach(function(i) {
                var state = dependeeStates[i];

                if ($.inArray(state, dependeeStates) === -1) {
                    return;
                }

                state = states.State.sanitize(state);

                _this2.values[selector][state.name] = null;

                $(selector).on('state:' + state, {
                    selector: selector,
                    state: state
                }, function(e) {
                    _this2.update(e.data.selector, e.data.state, e.value);
                });

                new states.Trigger({
                    selector: selector,
                    state: state
                });
            });
        },
        compare: function compare(reference, selector, state) {
            var value = this.values[selector][state.name];
            if (reference.constructor.name in states.Dependent.comparisons) {
                return states.Dependent.comparisons[reference.constructor.name](reference, value);
            }

            return _compare2(reference, value);
        },
        update: function update(selector, state, value) {
            if (value !== this.values[selector][state.name]) {
                this.values[selector][state.name] = value;
                this.reevaluate();
            }
        },
        reevaluate: function reevaluate() {
            var value = this.verifyConstraints(this.constraints);

            if (value !== this.oldValue) {
                this.oldValue = value;

                value = invert(value, this.state.invert);

                this.element.trigger({
                    type: 'state:' + this.state,
                    value: value,
                    trigger: true
                });
            }
        },
        verifyConstraints: function verifyConstraints(constraints, selector) {
            var result = void 0;
            if ($.isArray(constraints)) {
                var hasXor = $.inArray('xor', constraints) === -1;
                var len = constraints.length;
                for (var i = 0; i < len; i++) {
                    if (constraints[i] !== 'xor') {
                        var constraint = this.checkConstraints(constraints[i], selector, i);

                        if (constraint && (hasXor || result)) {
                            return hasXor;
                        }
                        result = result || constraint;
                    }
                }
            } else if ($.isPlainObject(constraints)) {
                for (var n in constraints) {
                    if (constraints.hasOwnProperty(n)) {
                        result = ternary(result, this.checkConstraints(constraints[n], selector, n));

                        if (result === false) {
                            return false;
                        }
                    }
                }
            }
            return result;
        },
        checkConstraints: function checkConstraints(value, selector, state) {
            if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
                state = null;
            } else if (typeof selector === 'undefined') {
                selector = state;
                state = null;
            }

            if (state !== null) {
                state = states.State.sanitize(state);
                return invert(this.compare(value, selector, state), state.invert);
            }

            return this.verifyConstraints(value, selector);
        },
        getDependees: function getDependees() {
            var cache = {};

            var _compare = this.compare;
            this.compare = function(reference, selector, state) {
                (cache[selector] || (cache[selector] = [])).push(state.name);
            };

            this.verifyConstraints(this.constraints);

            this.compare = _compare;

            return cache;
        }
    };

    states.Trigger = function(args) {
        $.extend(this, args);

        if (this.state in states.Trigger.states) {
            this.element = $(this.selector);

            if (!this.element.data('trigger:' + this.state)) {
                this.initialize();
            }
        }
    };

    states.Trigger.prototype = {
        initialize: function initialize() {
            var _this3 = this;

            var trigger = states.Trigger.states[this.state];

            if (typeof trigger === 'function') {
                trigger.call(window, this.element);
            } else {
                Object.keys(trigger || {}).forEach(function(event) {
                    _this3.defaultTrigger(event, trigger[event]);
                });
            }

            this.element.data('trigger:' + this.state, true);
        },
        defaultTrigger: function defaultTrigger(event, valueFn) {
            var oldValue = valueFn.call(this.element);

            this.element.on(event, $.proxy(function(e) {
                var value = valueFn.call(this.element, e);

                if (oldValue !== value) {
                    this.element.trigger({
                        type: 'state:' + this.state,
                        value: value,
                        oldValue: oldValue
                    });
                    oldValue = value;
                }
            }, this));

            states.postponed.push($.proxy(function() {
                this.element.trigger({
                    type: 'state:' + this.state,
                    value: oldValue,
                    oldValue: null
                });
            }, this));
        }
    };

    states.Trigger.states = {
        empty: {
            keyup: function keyup() {
                return this.val() === '';
            }
        },

        checked: {
            change: function change() {
                var checked = false;
                this.each(function() {
                    checked = $(this).prop('checked');

                    return !checked;
                });
                return checked;
            }
        },

        value: {
            keyup: function keyup() {
                if (this.length > 1) {
                    return this.filter(':checked').val() || false;
                }
                return this.val();
            },
            change: function change() {
                if (this.length > 1) {
                    return this.filter(':checked').val() || false;
                }
                return this.val();
            }
        },

        collapsed: {
            collapsed: function collapsed(e) {
                return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
            }
        }
    };

    states.State = function(state) {
        this.pristine = state;
        this.name = state;

        var process = true;
        do {
            while (this.name.charAt(0) === '!') {
                this.name = this.name.substring(1);
                this.invert = !this.invert;
            }

            if (this.name in states.State.aliases) {
                this.name = states.State.aliases[this.name];
            } else {
                process = false;
            }
        } while (process);
    };

    states.State.sanitize = function(state) {
        if (state instanceof states.State) {
            return state;
        }

        return new states.State(state);
    };

    states.State.aliases = {
        enabled: '!disabled',
        invisible: '!visible',
        invalid: '!valid',
        untouched: '!touched',
        optional: '!required',
        filled: '!empty',
        unchecked: '!checked',
        irrelevant: '!relevant',
        expanded: '!collapsed',
        open: '!collapsed',
        closed: 'collapsed',
        readwrite: '!readonly'
    };

    states.State.prototype = {
        invert: false,

        toString: function toString() {
            return this.name;
        }
    };

    var $document = $(document);
    $document.on('state:disabled', function(e) {
        if (e.trigger) {
            $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
        }
    });

    $document.on('state:required', function(e) {
        if (e.trigger) {
            if (e.value) {
                var label = 'label' + (e.target.id ? '[for=' + e.target.id + ']' : '');
                var $label = $(e.target).attr({
                    required: 'required',
                    'aria-required': 'aria-required'
                }).closest('.js-form-item, .js-form-wrapper').find(label);

                if (!$label.hasClass('js-form-required').length) {
                    $label.addClass('js-form-required form-required');
                }
            } else {
                $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
            }
        }
    });

    $document.on('state:visible', function(e) {
        if (e.trigger) {
            $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
        }
    });

    $document.on('state:checked', function(e) {
        if (e.trigger) {
            $(e.target).prop('checked', e.value);
        }
    });

    $document.on('state:collapsed', function(e) {
        if (e.trigger) {
            if ($(e.target).is('[open]') === e.value) {
                $(e.target).find('> summary').trigger('click');
            }
        }
    });
})(jQuery, Drupal);;
/**
 * @file
 * Dropdown language selector js.
 */

(function($, Drupal) {
    'use strict';

    Drupal.behaviors.dropdownLanguagesSelector = {
        attach: function(context, settings) {
            $('.dropdown-language-item .active-language', context).once('dropdown-language-selector')
                .click(function(e) {
                    var $wrapper = $(this).closest('.dropbutton-wrapper');
                    if ($wrapper.length > 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        $wrapper.toggleClass('open');
                    }
                });
        }
    };

})(jQuery, Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function($, Drupal) {
    function DropButton(dropbutton, settings) {
        var options = $.extend({
            title: Drupal.t('List additional actions')
        }, settings);
        var $dropbutton = $(dropbutton);

        this.$dropbutton = $dropbutton;

        this.$list = $dropbutton.find('.dropbutton');

        this.$actions = this.$list.find('li').addClass('dropbutton-action');

        if (this.$actions.length > 1) {
            var $primary = this.$actions.slice(0, 1);

            var $secondary = this.$actions.slice(1);
            $secondary.addClass('secondary-action');

            $primary.after(Drupal.theme('dropbuttonToggle', options));

            this.$dropbutton.addClass('dropbutton-multiple').on({
                'mouseleave.dropbutton': $.proxy(this.hoverOut, this),

                'mouseenter.dropbutton': $.proxy(this.hoverIn, this),

                'focusout.dropbutton': $.proxy(this.focusOut, this),

                'focusin.dropbutton': $.proxy(this.focusIn, this)
            });
        } else {
            this.$dropbutton.addClass('dropbutton-single');
        }
    }

    function dropbuttonClickHandler(e) {
        e.preventDefault();
        $(e.target).closest('.dropbutton-wrapper').toggleClass('open');
    }

    Drupal.behaviors.dropButton = {
        attach: function attach(context, settings) {
            var $dropbuttons = $(context).find('.dropbutton-wrapper').once('dropbutton');
            if ($dropbuttons.length) {
                var $body = $('body').once('dropbutton-click');
                if ($body.length) {
                    $body.on('click', '.dropbutton-toggle', dropbuttonClickHandler);
                }

                var il = $dropbuttons.length;
                for (var i = 0; i < il; i++) {
                    DropButton.dropbuttons.push(new DropButton($dropbuttons[i], settings.dropbutton));
                }
            }
        }
    };

    $.extend(DropButton, {
        dropbuttons: []
    });

    $.extend(DropButton.prototype, {
        toggle: function toggle(show) {
            var isBool = typeof show === 'boolean';
            show = isBool ? show : !this.$dropbutton.hasClass('open');
            this.$dropbutton.toggleClass('open', show);
        },
        hoverIn: function hoverIn() {
            if (this.timerID) {
                window.clearTimeout(this.timerID);
            }
        },
        hoverOut: function hoverOut() {
            this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
        },
        open: function open() {
            this.toggle(true);
        },
        close: function close() {
            this.toggle(false);
        },
        focusOut: function focusOut(e) {
            this.hoverOut.call(this, e);
        },
        focusIn: function focusIn(e) {
            this.hoverIn.call(this, e);
        }
    });

    $.extend(Drupal.theme, {
        dropbuttonToggle: function dropbuttonToggle(options) {
            return '<li class="dropbutton-toggle"><button type="button"><span class="dropbutton-arrow"><span class="visually-hidden">' + options.title + '</span></span></button></li>';
        }
    });

    Drupal.DropButton = DropButton;
})(jQuery, Drupal);;
/**
 * @file
 * Adds the active class to active links, for proper top bar rendering.
 *
 */
(function($, Drupal) {

    /**
     * Adds the "active" class to top bar <li> elements with active child links.
     */
    Drupal.behaviors.foundationTopBarActive = {
        attach: function(context, settings) {
            var $active_links = $(context).find('.top-bar .menu-item > a.is-active');
            if ($active_links.length) {
                $active_links.once('foundationTopBarActive').each(function() {
                    $(this).parent().addClass('active');
                });
            }
        }
    };

})(jQuery, Drupal);;