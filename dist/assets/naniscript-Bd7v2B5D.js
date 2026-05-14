l.displayName = "naniscript";
l.aliases = ["nani"];
function l(d) {
  (function(n) {
    var i = /\{[^\r\n\[\]{}]*\}/, p = { "quoted-string": { pattern: /"(?:[^"\\]|\\.)*"/, alias: "operator" }, "command-param-id": { pattern: /(\s)\w+:/, lookbehind: true, alias: "property" }, "command-param-value": [{ pattern: i, alias: "selector" }, { pattern: /([\t ])\S+/, lookbehind: true, greedy: true, alias: "operator" }, { pattern: /\S(?:.*\S)?/, alias: "operator" }] };
    n.languages.naniscript = { comment: { pattern: /^([\t ]*);.*/m, lookbehind: true }, define: { pattern: /^>.+/m, alias: "tag", inside: { value: { pattern: /(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/, lookbehind: true, alias: "operator" }, key: { pattern: /(^>)\w+/, lookbehind: true } } }, label: { pattern: /^([\t ]*)#[\t ]*\w+[\t ]*$/m, lookbehind: true, alias: "regex" }, command: { pattern: /^([\t ]*)@\w+(?=[\t ]|$).*/m, lookbehind: true, alias: "function", inside: { "command-name": /^@\w+/, expression: { pattern: i, greedy: true, alias: "selector" }, "command-params": { pattern: /\s*\S[\s\S]*/, inside: p } } }, "generic-text": { pattern: /(^[ \t]*)[^#@>;\s].*/m, lookbehind: true, alias: "punctuation", inside: { "escaped-char": /\\[{}\[\]"]/, expression: { pattern: i, greedy: true, alias: "selector" }, "inline-command": { pattern: /\[[\t ]*\w[^\r\n\[\]]*\]/, greedy: true, alias: "function", inside: { "command-params": { pattern: /(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/, lookbehind: true, inside: p }, "command-param-name": { pattern: /^(\[[\t ]*)\w+/, lookbehind: true, alias: "name" }, "start-stop-char": /[\[\]]/ } } } } }, n.languages.nani = n.languages.naniscript, n.hooks.add("after-tokenize", function(e) {
      var o = e.tokens;
      o.forEach(function(a) {
        if (typeof a != "string" && a.type === "generic-text") {
          var t = s(a);
          u(t) || (a.type = "bad-line", a.content = t);
        }
      });
    });
    function u(e) {
      for (var o = "[]{}", a = [], t = 0; t < e.length; t++) {
        var c = e[t], r = o.indexOf(c);
        if (r !== -1) {
          if (r % 2 === 0) a.push(r + 1);
          else if (a.pop() !== r) return false;
        }
      }
      return a.length === 0;
    }
    function s(e) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(s).join("") : s(e.content);
    }
  })(d);
}
export {
  l as default
};
