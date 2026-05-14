l.displayName = "robotframework";
l.aliases = ["robot"];
function l(c) {
  (function(n) {
    var s = { pattern: /(^[ \t]*| {2}|\t)#.*/m, lookbehind: true, greedy: true }, r = { pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/, lookbehind: true, inside: { punctuation: /^[$@&%]\{|\}$/ } };
    function e(p, u) {
      var t = {};
      t["section-header"] = { pattern: /^ ?\*{3}.+?\*{3}/, alias: "keyword" };
      for (var d in u) t[d] = u[d];
      return t.tag = { pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/, lookbehind: true, inside: { punctuation: /\[|\]/ } }, t.variable = r, t.comment = s, { pattern: RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g, function() {
        return p;
      }), "im"), alias: "section", inside: t };
    }
    var a = { pattern: /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/, lookbehind: true, alias: "string" }, o = { pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true, alias: "function", inside: { variable: r } }, i = { pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true, inside: { variable: r } };
    n.languages.robotframework = { settings: e("Settings", { documentation: { pattern: /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/, lookbehind: true, alias: "string" }, property: { pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true } }), variables: e("Variables"), "test-cases": e("Test Cases", { "test-name": o, documentation: a, property: i }), keywords: e("Keywords", { "keyword-name": o, documentation: a, property: i }), tasks: e("Tasks", { "task-name": o, documentation: a, property: i }), comment: s }, n.languages.robot = n.languages.robotframework;
  })(c);
}
export {
  l as default
};
