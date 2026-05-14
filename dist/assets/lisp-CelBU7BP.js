c.displayName = "lisp";
c.aliases = ["elisp", "emacs", "emacs-lisp"];
function c(g) {
  (function(t) {
    function u(l) {
      return RegExp(/(\()/.source + "(?:" + l + ")" + /(?=[\s\)])/.source);
    }
    function p(l) {
      return RegExp(/([\s([])/.source + "(?:" + l + ")" + /(?=[\s)])/.source);
    }
    var e = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source, m = "&" + e, a = "(\\()", b = "(?=\\))", d = "(?=\\s)", n = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source, r = { heading: { pattern: /;;;.*/, alias: ["comment", "title"] }, comment: /;.*/, string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: true, inside: { argument: /[-A-Z]+(?=[.,\s])/, symbol: RegExp("`" + e + "'") } }, "quoted-symbol": { pattern: RegExp("#?'" + e), alias: ["variable", "symbol"] }, "lisp-property": { pattern: RegExp(":" + e), alias: "property" }, splice: { pattern: RegExp(",@?" + e), alias: ["symbol", "variable"] }, keyword: [{ pattern: RegExp(a + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + d), lookbehind: true }, { pattern: RegExp(a + "(?:append|by|collect|concat|do|finally|for|in|return)" + d), lookbehind: true }], declare: { pattern: u(/declare/.source), lookbehind: true, alias: "keyword" }, interactive: { pattern: u(/interactive/.source), lookbehind: true, alias: "keyword" }, boolean: { pattern: p(/nil|t/.source), lookbehind: true }, number: { pattern: p(/[-+]?\d+(?:\.\d*)?/.source), lookbehind: true }, defvar: { pattern: RegExp(a + "def(?:const|custom|group|var)\\s+" + e), lookbehind: true, inside: { keyword: /^def[a-z]+/, variable: RegExp(e) } }, defun: { pattern: RegExp(a + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + e + /\s+\(/.source + n + /\)/.source), lookbehind: true, greedy: true, inside: { keyword: /^(?:cl-)?def\S+/, arguments: null, function: { pattern: RegExp("(^\\s)" + e), lookbehind: true }, punctuation: /[()]/ } }, lambda: { pattern: RegExp(a + "lambda\\s+\\(\\s*(?:&?" + e + "(?:\\s+&?" + e + ")*\\s*)?\\)"), lookbehind: true, greedy: true, inside: { keyword: /^lambda/, arguments: null, punctuation: /[()]/ } }, car: { pattern: RegExp(a + e), lookbehind: true }, punctuation: [/(?:['`,]?\(|[)\[\]])/, { pattern: /(\s)\.(?=\s)/, lookbehind: true }] }, s = { "lisp-marker": RegExp(m), varform: { pattern: RegExp(/\(/.source + e + /\s+(?=\S)/.source + n + /\)/.source), inside: r }, argument: { pattern: RegExp(/(^|[\s(])/.source + e), lookbehind: true, alias: "variable" }, rest: r }, o = "\\S+(?:\\s+\\S+)*", i = { pattern: RegExp(a + n + b), lookbehind: true, inside: { "rest-vars": { pattern: RegExp("&(?:body|rest)\\s+" + o), inside: s }, "other-marker-vars": { pattern: RegExp("&(?:aux|optional)\\s+" + o), inside: s }, keys: { pattern: RegExp("&key\\s+" + o + "(?:\\s+&allow-other-keys)?"), inside: s }, argument: { pattern: RegExp(e), alias: "variable" }, punctuation: /[()]/ } };
    r.lambda.inside.arguments = i, r.defun.inside.arguments = t.util.clone(i), r.defun.inside.arguments.inside.sublist = i, t.languages.lisp = r, t.languages.elisp = r, t.languages.emacs = r, t.languages["emacs-lisp"] = r;
  })(g);
}
export {
  c as default
};
