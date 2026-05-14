t.displayName = "gettext";
t.aliases = ["po"];
function t(e) {
  e.languages.gettext = { comment: [{ pattern: /# .*/, greedy: true, alias: "translator-comment" }, { pattern: /#\..*/, greedy: true, alias: "extracted-comment" }, { pattern: /#:.*/, greedy: true, alias: "reference-comment" }, { pattern: /#,.*/, greedy: true, alias: "flag-comment" }, { pattern: /#\|.*/, greedy: true, alias: "previously-untranslated-comment" }, { pattern: /#.*/, greedy: true }], string: { pattern: /(^|[^\\])"(?:[^"\\]|\\.)*"/, lookbehind: true, greedy: true }, keyword: /^msg(?:ctxt|id|id_plural|str)\b/m, number: /\b\d+\b/, punctuation: /[\[\]]/ }, e.languages.po = e.languages.gettext;
}
export {
  t as default
};
