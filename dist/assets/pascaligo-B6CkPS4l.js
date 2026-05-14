i.displayName = "pascaligo";
i.aliases = [];
function i(a) {
  (function(o) {
    var s = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source, n = /(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g, function() {
      return s;
    }), t = o.languages.pascaligo = { comment: /\(\*[\s\S]+?\*\)|\/\/.*/, string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i, greedy: true }, "class-name": [{ pattern: RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g, function() {
      return n;
    }), "i"), lookbehind: true, inside: null }, { pattern: RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g, function() {
      return n;
    }), "i"), inside: null }, { pattern: RegExp(/(:\s*)<type>/.source.replace(/<type>/g, function() {
      return n;
    })), lookbehind: true, inside: null }], keyword: { pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i, lookbehind: true }, boolean: { pattern: /(^|[^&])\b(?:False|True)\b/i, lookbehind: true }, builtin: { pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i, lookbehind: true }, function: /\b\w+(?=\s*\()/, number: [/%[01]+|&[0-7]+|\$[a-f\d]+/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i], operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/, punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/ }, u = ["comment", "keyword", "builtin", "operator", "punctuation"].reduce(function(e, r) {
      return e[r] = t[r], e;
    }, {});
    t["class-name"].forEach(function(e) {
      e.inside = u;
    });
  })(a);
}
export {
  i as default
};
