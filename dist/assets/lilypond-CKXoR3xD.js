import d from "./scheme-BDxDT0na.js";
t.displayName = "lilypond";
t.aliases = ["ly"];
function t(s) {
  s.register(d), (function(n) {
    for (var e = /\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source, a = 5, i = 0; i < a; i++) e = e.replace(/<expr>/g, function() {
      return e;
    });
    e = e.replace(/<expr>/g, /[^\s\S]/.source);
    var r = n.languages.lilypond = { comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/, "embedded-scheme": { pattern: RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g, function() {
      return e;
    }), "m"), lookbehind: true, greedy: true, inside: { scheme: { pattern: /^(#)[\s\S]+$/, lookbehind: true, alias: "language-scheme", inside: { "embedded-lilypond": { pattern: /#\{[\s\S]*?#\}/, greedy: true, inside: { punctuation: /^#\{|#\}$/, lilypond: { pattern: /[\s\S]+/, alias: "language-lilypond", inside: null } } }, rest: n.languages.scheme } }, punctuation: /#/ } }, string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: true }, "class-name": { pattern: /(\\new\s+)[\w-]+/, lookbehind: true }, keyword: { pattern: /\\[a-z][-\w]*/i, inside: { punctuation: /^\\/ } }, operator: /[=|]|<<|>>/, punctuation: { pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/, lookbehind: true }, number: /\b\d+(?:\/\d+)?\b/ };
    r["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside = r, n.languages.ly = r;
  })(s);
}
export {
  t as default
};
