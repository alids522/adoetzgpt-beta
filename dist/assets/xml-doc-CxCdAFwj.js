import i from "./markup-BHKKUsMC.js";
r.displayName = "xml-doc";
r.aliases = [];
function r(t) {
  t.register(i), (function(e) {
    function a(m, s) {
      e.languages[m] && e.languages.insertBefore(m, "comment", { "doc-comment": s });
    }
    var n = e.languages.markup.tag, o = { pattern: /\/\/\/.*/, greedy: true, alias: "comment", inside: { tag: n } }, c = { pattern: /'''.*/, greedy: true, alias: "comment", inside: { tag: n } };
    a("csharp", o), a("fsharp", o), a("vbnet", c);
  })(t);
}
export {
  r as default
};
