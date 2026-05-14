r.displayName = "jq";
r.aliases = [];
function r(a) {
  (function(i) {
    var t = /\\\((?:[^()]|\([^()]*\))*\)/.source, n = RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, function() {
      return t;
    })), e = { interpolation: { pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + t), lookbehind: true, inside: { content: { pattern: /^(\\\()[\s\S]+(?=\)$)/, lookbehind: true, inside: null }, punctuation: /^\\\(|\)$/ } } }, o = i.languages.jq = { comment: /#.*/, property: { pattern: RegExp(n.source + /(?=\s*:(?!:))/.source), lookbehind: true, greedy: true, inside: e }, string: { pattern: n, lookbehind: true, greedy: true, inside: e }, function: { pattern: /(\bdef\s+)[a-z_]\w+/i, lookbehind: true }, variable: /\B\$\w+/, "property-literal": { pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i, alias: "property" }, keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/, boolean: /\b(?:false|true)\b/, number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/, operator: [{ pattern: /\|=?/, alias: "pipe" }, /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/], "c-style-function": { pattern: /\b[a-z_]\w*(?=\s*\()/i, alias: "function" }, punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/, dot: { pattern: /\./, alias: "important" } };
    e.interpolation.inside.content.inside = o;
  })(a);
}
export {
  r as default
};
