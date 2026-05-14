e.displayName = "gcode";
e.aliases = [];
function e(t) {
  t.languages.gcode = { comment: /;.*|\B\(.*?\)\B/, string: { pattern: /"(?:""|[^"])*"/, greedy: true }, keyword: /\b[GM]\d+(?:\.\d+)?\b/, property: /\b[A-Z]/, checksum: { pattern: /(\*)\d+/, lookbehind: true, alias: "number" }, punctuation: /[:*]/ };
}
export {
  e as default
};
