t.displayName = "linker-script";
t.aliases = ["ld"];
function t(e) {
  e.languages["linker-script"] = { comment: { pattern: /(^|\s)\/\*[\s\S]*?(?:$|\*\/)/, lookbehind: true, greedy: true }, identifier: { pattern: /"[^"\r\n]*"/, greedy: true }, "location-counter": { pattern: /\B\.\B/, alias: "important" }, section: { pattern: /(^|[^\w*])\.\w+\b/, lookbehind: true, alias: "keyword" }, function: /\b[A-Z][A-Z_]*(?=\s*\()/, number: /\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/, operator: />>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/, punctuation: /[(){},;]/ }, e.languages.ld = e.languages["linker-script"];
}
export {
  t as default
};
