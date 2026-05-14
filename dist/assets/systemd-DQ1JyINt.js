r.displayName = "systemd";
r.aliases = [];
function r(n) {
  (function(a) {
    var t = { pattern: /^[;#].*/m, greedy: true }, e = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;
    a.languages.systemd = { comment: t, section: { pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m, greedy: true, inside: { punctuation: /^\[|\]$/, "section-name": { pattern: /[\s\S]+/, alias: "selector" } } }, key: { pattern: /^[^\s=]+(?=[ \t]*=)/m, greedy: true, alias: "attr-name" }, value: { pattern: RegExp(/(=[ \t]*(?!\s))/.source + "(?:" + e + `|(?=[^"\r
]))(?:` + (/[^\s\\]/.source + '|[ 	]+(?:(?![ 	"])|' + e + ")|" + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source) + ")*"), lookbehind: true, greedy: true, alias: "attr-value", inside: { comment: t, quoted: { pattern: RegExp(/(^|\s)/.source + e), lookbehind: true, greedy: true }, punctuation: /\\$/m, boolean: { pattern: /^(?:false|no|off|on|true|yes)$/, greedy: true } } }, punctuation: /=/ };
  })(n);
}
export {
  r as default
};
