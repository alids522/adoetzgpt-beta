import a from "./java-CUQYWvAL.js";
import n from "./mata-BewqVM6b.js";
import r from "./python-3xaErVbm.js";
import "./clike-BF_vhPOR.js";
t.displayName = "stata";
t.aliases = [];
function t(e) {
  e.register(a), e.register(n), e.register(r), e.languages.stata = { comment: [{ pattern: /(^[ \t]*)\*.*/m, lookbehind: true, greedy: true }, { pattern: /(^|\s)\/\/.*|\/\*[\s\S]*?\*\//, lookbehind: true, greedy: true }], "string-literal": { pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/, greedy: true, inside: { interpolation: { pattern: /\$\{[^{}]*\}|[‘`']\w[^’`'\r\n]*[’`']/, inside: { punctuation: /^\$\{|\}$/, expression: { pattern: /[\s\S]+/, inside: null } } }, string: /[\s\S]+/ } }, mata: { pattern: /(^[ \t]*mata[ \t]*:)[\s\S]+?(?=^end\b)/m, lookbehind: true, greedy: true, alias: "language-mata", inside: e.languages.mata }, java: { pattern: /(^[ \t]*java[ \t]*:)[\s\S]+?(?=^end\b)/m, lookbehind: true, greedy: true, alias: "language-java", inside: e.languages.java }, python: { pattern: /(^[ \t]*python[ \t]*:)[\s\S]+?(?=^end\b)/m, lookbehind: true, greedy: true, alias: "language-python", inside: e.languages.python }, command: { pattern: /(^[ \t]*(?:\.[ \t]+)?(?:(?:bayes|bootstrap|by|bysort|capture|collect|fmm|fp|frame|jackknife|mfp|mi|nestreg|noisily|permute|quietly|rolling|simulate|statsby|stepwise|svy|version|xi)\b[^:\r\n]*:[ \t]*|(?:capture|noisily|quietly|version)[ \t]+)?)[a-zA-Z]\w*/m, lookbehind: true, greedy: true, alias: "keyword" }, variable: /\$\w+|[‘`']\w[^’`'\r\n]*[’`']/, keyword: /\b(?:bayes|bootstrap|by|bysort|capture|clear|collect|fmm|fp|frame|if|in|jackknife|mi[ \t]+estimate|mfp|nestreg|noisily|of|permute|quietly|rolling|simulate|sort|statsby|stepwise|svy|varlist|version|xi)\b/, boolean: /\b(?:off|on)\b/, number: /\b\d+(?:\.\d+)?\b|\B\.\d+/, function: /\b[a-z_]\w*(?=\()/i, operator: /\+\+|--|##?|[<>!=~]=?|[+\-*^&|/]/, punctuation: /[(){}[\],:]/ }, e.languages.stata["string-literal"].inside.interpolation.inside.expression.inside = e.languages.stata;
}
export {
  t as default
};
