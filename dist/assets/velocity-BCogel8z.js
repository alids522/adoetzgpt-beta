import i from "./markup-BHKKUsMC.js";
n.displayName = "velocity";
n.aliases = [];
function n(a) {
  a.register(i), (function(t) {
    t.languages.velocity = t.languages.extend("markup", {});
    var e = { variable: { pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i, lookbehind: true, inside: {} }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, number: /\b\d+\b/, boolean: /\b(?:false|true)\b/, operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/, punctuation: /[(){}[\]:,.]/ };
    e.variable.inside = { string: e.string, function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: true }, number: e.number, boolean: e.boolean, punctuation: e.punctuation }, t.languages.insertBefore("velocity", "comment", { unparsed: { pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/, lookbehind: true, greedy: true, inside: { punctuation: /^#\[\[|\]\]#$/ } }, "velocity-comment": [{ pattern: /(^|[^\\])#\*[\s\S]*?\*#/, lookbehind: true, greedy: true, alias: "comment" }, { pattern: /(^|[^\\])##.*/, lookbehind: true, greedy: true, alias: "comment" }], directive: { pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i, lookbehind: true, inside: { keyword: { pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/, inside: { punctuation: /[{}]/ } }, rest: e } }, variable: e.variable }), t.languages.velocity.tag.inside["attr-value"].inside.rest = t.languages.velocity;
  })(a);
}
export {
  n as default
};
