r.displayName = "csp";
r.aliases = [];
function r(t) {
  (function(o) {
    function e(s) {
      return RegExp(/([ \t])/.source + "(?:" + s + ")" + /(?=[\s;]|$)/.source, "i");
    }
    o.languages.csp = { directive: { pattern: /(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i, lookbehind: true, alias: "property" }, scheme: { pattern: e(/[a-z][a-z0-9.+-]*:/.source), lookbehind: true }, none: { pattern: e(/'none'/.source), lookbehind: true, alias: "keyword" }, nonce: { pattern: e(/'nonce-[-+/\w=]+'/.source), lookbehind: true, alias: "number" }, hash: { pattern: e(/'sha(?:256|384|512)-[-+/\w=]+'/.source), lookbehind: true, alias: "number" }, host: { pattern: e(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source + "|" + /\*[^\s;,']*/.source + "|" + /[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source), lookbehind: true, alias: "url", inside: { important: /\*/ } }, keyword: [{ pattern: e(/'unsafe-[a-z-]+'/.source), lookbehind: true, alias: "unsafe" }, { pattern: e(/'[a-z-]+'/.source), lookbehind: true, alias: "safe" }], punctuation: /;/ };
  })(t);
}
export {
  r as default
};
