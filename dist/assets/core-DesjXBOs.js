import { d as G, h as J, __tla as __tla_0 } from "./index-DM8mm4VO.js";
let v;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const K = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml"
  ], H = {
    0: "\uFFFD",
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  };
  function M(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 48 && t <= 57;
  }
  function V(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
  }
  function W(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 97 && t <= 122 || t >= 65 && t <= 90;
  }
  function Y(e) {
    return W(e) || M(e);
  }
  const X = [
    "",
    "Named character references must be terminated by a semicolon",
    "Numeric character references must be terminated by a semicolon",
    "Named character references cannot be empty",
    "Numeric character references cannot be empty",
    "Named character references must be known",
    "Numeric character references cannot be disallowed",
    "Numeric character references cannot be outside the permissible Unicode range"
  ];
  function Z(e, t) {
    const n = {}, i = typeof n.additional == "string" ? n.additional.charCodeAt(0) : n.additional, r = [];
    let a = 0, s = -1, l = "", u, d;
    n.position && ("start" in n.position || "indent" in n.position ? (d = n.position.indent, u = n.position.start) : u = n.position);
    let T = (u ? u.line : 0) || 1, O = (u ? u.column : 0) || 1, R = S(), P;
    for (a--; ++a <= e.length; ) if (P === 10 && (O = (d ? d[s] : 0) || 1), P = e.charCodeAt(a), P === 38) {
      const c = e.charCodeAt(a + 1);
      if (c === 9 || c === 10 || c === 12 || c === 32 || c === 38 || c === 60 || Number.isNaN(c) || i && c === i) {
        l += String.fromCharCode(P), O++;
        continue;
      }
      const p = a + 1;
      let y = p, o = p, b;
      if (c === 35) {
        o = ++y;
        const f = e.charCodeAt(o);
        f === 88 || f === 120 ? (b = "hexadecimal", o = ++y) : b = "decimal";
      } else b = "named";
      let m = "", A = "", x = "";
      const _ = b === "named" ? Y : b === "decimal" ? M : V;
      for (o--; ++o <= e.length; ) {
        const f = e.charCodeAt(o);
        if (!_(f)) break;
        x += String.fromCharCode(f), b === "named" && K.includes(x) && (m = x, A = G(x));
      }
      let I = e.charCodeAt(o) === 59;
      if (I) {
        o++;
        const f = b === "named" ? G(x) : false;
        f && (m = x, A = f);
      }
      let C = 1 + o - p, E = "";
      if (!(!I && n.nonTerminated === false)) if (!x) b !== "named" && w(4, C);
      else if (b === "named") {
        if (I && !A) w(5, 1);
        else if (m !== x && (o = y + m.length, C = 1 + o - y, I = false), !I) {
          const f = m ? 1 : 3;
          if (n.attribute) {
            const U = e.charCodeAt(o);
            U === 61 ? (w(f, C), A = "") : Y(U) ? A = "" : w(f, C);
          } else w(f, C);
        }
        E = A;
      } else {
        I || w(2, C);
        let f = Number.parseInt(x, b === "hexadecimal" ? 16 : 10);
        if (L(f)) w(7, C), E = "\uFFFD";
        else if (f in H) w(6, C), E = H[f];
        else {
          let U = "";
          k(f) && w(6, C), f > 65535 && (f -= 65536, U += String.fromCharCode(f >>> 10 | 55296), f = 56320 | f & 1023), E = U + String.fromCharCode(f);
        }
      }
      if (E) {
        g(), R = S(), a = o - 1, O += o - p + 1, r.push(E);
        const f = S();
        f.offset++, n.reference && n.reference.call(n.referenceContext || void 0, E, {
          start: R,
          end: f
        }, e.slice(p - 1, o)), R = f;
      } else x = e.slice(p - 1, o), l += x, O += x.length, a = o - 1;
    } else P === 10 && (T++, s++, O = 0), Number.isNaN(P) ? g() : (l += String.fromCharCode(P), O++);
    return r.join("");
    function S() {
      return {
        line: T,
        column: O,
        offset: a + ((u ? u.offset : 0) || 0)
      };
    }
    function w(c, p) {
      let y;
      n.warning && (y = S(), y.column += p, y.offset += p, n.warning.call(n.warningContext || void 0, X[c], y, c));
    }
    function g() {
      l && (r.push(l), n.text && n.text.call(n.textContext || void 0, l, {
        start: R,
        end: S()
      }), l = "");
    }
  }
  function L(e) {
    return e >= 55296 && e <= 57343 || e > 1114111;
  }
  function k(e) {
    return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
  }
  var ee = 0, z = {}, h = {
    util: {
      type: function(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++ee
        }), e.__id;
      },
      clone: function e(t, n) {
        n = n || {};
        var i, r;
        switch (h.util.type(t)) {
          case "Object":
            if (r = h.util.objId(t), n[r]) return n[r];
            i = {}, n[r] = i;
            for (var a in t) t.hasOwnProperty(a) && (i[a] = e(t[a], n));
            return i;
          case "Array":
            return r = h.util.objId(t), n[r] ? n[r] : (i = [], n[r] = i, t.forEach(function(s, l) {
              i[l] = e(s, n);
            }), i);
          default:
            return t;
        }
      }
    },
    languages: {
      plain: z,
      plaintext: z,
      text: z,
      txt: z,
      extend: function(e, t) {
        var n = h.util.clone(h.languages[e]);
        for (var i in t) n[i] = t[i];
        return n;
      },
      insertBefore: function(e, t, n, i) {
        i = i || h.languages;
        var r = i[e], a = {};
        for (var s in r) if (r.hasOwnProperty(s)) {
          if (s == t) for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
          n.hasOwnProperty(s) || (a[s] = r[s]);
        }
        var u = i[e];
        return i[e] = a, h.languages.DFS(h.languages, function(d, T) {
          T === u && d != e && (this[d] = a);
        }), a;
      },
      DFS: function e(t, n, i, r) {
        r = r || {};
        var a = h.util.objId;
        for (var s in t) if (t.hasOwnProperty(s)) {
          n.call(t, s, t[s], i || s);
          var l = t[s], u = h.util.type(l);
          u === "Object" && !r[a(l)] ? (r[a(l)] = true, e(l, n, null, r)) : u === "Array" && !r[a(l)] && (r[a(l)] = true, e(l, n, s, r));
        }
      }
    },
    plugins: {},
    highlight: function(e, t, n) {
      var i = {
        code: e,
        grammar: t,
        language: n
      };
      if (h.hooks.run("before-tokenize", i), !i.grammar) throw new Error('The language "' + i.language + '" has no grammar.');
      return i.tokens = h.tokenize(i.code, i.grammar), h.hooks.run("after-tokenize", i), q.stringify(h.util.encode(i.tokens), i.language);
    },
    tokenize: function(e, t) {
      var n = t.rest;
      if (n) {
        for (var i in n) t[i] = n[i];
        delete t.rest;
      }
      var r = new ne();
      return N(r, r.head, e), Q(e, r, t, r.head, 0), ie(r);
    },
    hooks: {
      all: {},
      add: function(e, t) {
        var n = h.hooks.all;
        n[e] = n[e] || [], n[e].push(t);
      },
      run: function(e, t) {
        var n = h.hooks.all[e];
        if (!(!n || !n.length)) for (var i = 0, r; r = n[i++]; ) r(t);
      }
    },
    Token: q
  };
  function q(e, t, n, i) {
    this.type = e, this.content = t, this.alias = n, this.length = (i || "").length | 0;
  }
  function B(e, t, n, i) {
    e.lastIndex = t;
    var r = e.exec(n);
    if (r && i && r[1]) {
      var a = r[1].length;
      r.index += a, r[0] = r[0].slice(a);
    }
    return r;
  }
  function Q(e, t, n, i, r, a) {
    for (var s in n) if (!(!n.hasOwnProperty(s) || !n[s])) {
      var l = n[s];
      l = Array.isArray(l) ? l : [
        l
      ];
      for (var u = 0; u < l.length; ++u) {
        if (a && a.cause == s + "," + u) return;
        var d = l[u], T = d.inside, O = !!d.lookbehind, R = !!d.greedy, P = d.alias;
        if (R && !d.pattern.global) {
          var S = d.pattern.toString().match(/[imsuy]*$/)[0];
          d.pattern = RegExp(d.pattern.source, S + "g");
        }
        for (var w = d.pattern || d, g = i.next, c = r; g !== t.tail && !(a && c >= a.reach); c += g.value.length, g = g.next) {
          var p = g.value;
          if (t.length > e.length) return;
          if (!(p instanceof q)) {
            var y = 1, o;
            if (R) {
              if (o = B(w, c, e, O), !o || o.index >= e.length) break;
              var x = o.index, b = o.index + o[0].length, m = c;
              for (m += g.value.length; x >= m; ) g = g.next, m += g.value.length;
              if (m -= g.value.length, c = m, g.value instanceof q) continue;
              for (var A = g; A !== t.tail && (m < b || typeof A.value == "string"); A = A.next) y++, m += A.value.length;
              y--, p = e.slice(c, m), o.index -= c;
            } else if (o = B(w, 0, p, O), !o) continue;
            var x = o.index, _ = o[0], I = p.slice(0, x), C = p.slice(x + _.length), E = c + p.length;
            a && E > a.reach && (a.reach = E);
            var f = g.prev;
            I && (f = N(t, f, I), c += I.length), te(t, f, y);
            var U = new q(s, T ? h.tokenize(_, T) : _, P, _);
            if (g = N(t, f, U), C && N(t, g, C), y > 1) {
              var j = {
                cause: s + "," + u,
                reach: E
              };
              Q(e, t, n, g.prev, c, j), a && j.reach > a.reach && (a.reach = j.reach);
            }
          }
        }
      }
    }
  }
  function ne() {
    var e = {
      value: null,
      prev: null,
      next: null
    }, t = {
      value: null,
      prev: e,
      next: null
    };
    e.next = t, this.head = e, this.tail = t, this.length = 0;
  }
  function N(e, t, n) {
    var i = t.next, r = {
      value: n,
      prev: t,
      next: i
    };
    return t.next = r, i.prev = r, e.length++, r;
  }
  function te(e, t, n) {
    for (var i = t.next, r = 0; r < n && i !== e.tail; r++) i = i.next;
    t.next = i, i.prev = t, e.length -= r;
  }
  function ie(e) {
    for (var t = [], n = e.head.next; n !== e.tail; ) t.push(n.value), n = n.next;
    return t;
  }
  const $ = h;
  function F() {
  }
  F.prototype = $;
  v = new F();
  v.highlight = re;
  v.register = ae;
  v.alias = fe;
  v.registered = le;
  v.listLanguages = oe;
  v.util.encode = se;
  v.Token.stringify = D;
  function re(e, t) {
    if (typeof e != "string") throw new TypeError("Expected `string` for `value`, got `" + e + "`");
    let n, i;
    if (t && typeof t == "object") n = t;
    else {
      if (i = t, typeof i != "string") throw new TypeError("Expected `string` for `name`, got `" + i + "`");
      if (Object.hasOwn(v.languages, i)) n = v.languages[i];
      else throw new Error("Unknown language: `" + i + "` is not registered");
    }
    return {
      type: "root",
      children: $.highlight.call(v, e, n, i)
    };
  }
  function ae(e) {
    if (typeof e != "function" || !e.displayName) throw new Error("Expected `function` for `syntax`, got `" + e + "`");
    Object.hasOwn(v.languages, e.displayName) || e(v);
  }
  function fe(e, t) {
    const n = v.languages;
    let i = {};
    typeof e == "string" ? t && (i[e] = t) : i = e;
    let r;
    for (r in i) if (Object.hasOwn(i, r)) {
      const a = i[r], s = typeof a == "string" ? [
        a
      ] : a;
      let l = -1;
      for (; ++l < s.length; ) n[s[l]] = n[r];
    }
  }
  function le(e) {
    if (typeof e != "string") throw new TypeError("Expected `string` for `aliasOrLanguage`, got `" + e + "`");
    return Object.hasOwn(v.languages, e);
  }
  function oe() {
    const e = v.languages, t = [];
    let n;
    for (n in e) Object.hasOwn(e, n) && typeof e[n] == "object" && t.push(n);
    return t;
  }
  function D(e, t) {
    if (typeof e == "string") return {
      type: "text",
      value: e
    };
    if (Array.isArray(e)) {
      const i = [];
      let r = -1;
      for (; ++r < e.length; ) e[r] !== null && e[r] !== void 0 && e[r] !== "" && i.push(D(e[r], t));
      return i;
    }
    const n = {
      attributes: {},
      classes: [
        "token",
        e.type
      ],
      content: D(e.content, t),
      language: t,
      tag: "span",
      type: e.type
    };
    return e.alias && n.classes.push(...typeof e.alias == "string" ? [
      e.alias
    ] : e.alias), v.hooks.run("wrap", n), J(n.tag + "." + n.classes.join("."), ce(n.attributes), n.content);
  }
  function se(e) {
    return e;
  }
  function ce(e) {
    let t;
    for (t in e) Object.hasOwn(e, t) && (e[t] = Z(e[t]));
    return e;
  }
});
export {
  __tla,
  v as refractor
};
