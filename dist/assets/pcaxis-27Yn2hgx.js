t.displayName = "pcaxis";
t.aliases = ["px"];
function t(e) {
  e.languages.pcaxis = { string: /"[^"]*"/, keyword: { pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/, lookbehind: true, greedy: true, inside: { keyword: /^[-A-Z\d]+/, language: { pattern: /^(\s*)\[[-\w]+\]/, lookbehind: true, inside: { punctuation: /^\[|\]$/, property: /[-\w]+/ } }, "sub-key": { pattern: /^(\s*)\S[\s\S]*/, lookbehind: true, inside: { parameter: { pattern: /"[^"]*"/, alias: "property" }, punctuation: /^\(|\)$|,/ } } } }, operator: /=/, tlist: { pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/, greedy: true, inside: { function: /^TLIST/, property: { pattern: /^(\s*\(\s*)\w+/, lookbehind: true }, string: /"[^"]*"/, punctuation: /[(),]/, operator: /-/ } }, punctuation: /[;,]/, number: { pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/, lookbehind: true }, boolean: /NO|YES/ }, e.languages.px = e.languages.pcaxis;
}
export {
  t as default
};
