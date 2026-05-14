import r from "./markup-BHKKUsMC.js";
t.displayName = "parser";
t.aliases = [];
function t(n) {
  n.register(r), (function(a) {
    var e = a.languages.parser = a.languages.extend("markup", { keyword: { pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/, lookbehind: true }, variable: { pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/, lookbehind: true, inside: { punctuation: /\.|:+/ } }, function: { pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/, lookbehind: true, inside: { keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: true }, punctuation: /\.|:+/ } }, escape: { pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i, alias: "builtin" }, punctuation: /[\[\](){};]/ });
    e = a.languages.insertBefore("parser", "keyword", { "parser-comment": { pattern: /(\s)#.*/, lookbehind: true, alias: "comment" }, expression: { pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/, greedy: true, lookbehind: true, inside: { string: { pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/, lookbehind: true }, keyword: e.keyword, variable: e.variable, function: e.function, boolean: /\b(?:false|true)\b/, number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i, escape: e.escape, operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/, punctuation: e.punctuation } } }), a.languages.insertBefore("inside", "punctuation", { expression: e.expression, keyword: e.keyword, variable: e.variable, function: e.function, escape: e.escape, "parser-punctuation": { pattern: e.punctuation, alias: "punctuation" } }, e.tag.inside["attr-value"]);
  })(n);
}
export {
  t as default
};
