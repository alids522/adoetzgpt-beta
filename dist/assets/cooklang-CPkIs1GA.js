r.displayName = "cooklang";
r.aliases = [];
function r(n) {
  (function(o) {
    var t = /(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source, e = /[^{}@#]+/.source, i = /\{[^}#@]*\}/.source, a = e + i, s = /(?:h|hours|hrs|m|min|minutes)/.source, u = { pattern: /\{[^{}]*\}/, inside: { amount: { pattern: /([\{|])[^{}|*%]+/, lookbehind: true, alias: "number" }, unit: { pattern: /(%)[^}]+/, lookbehind: true, alias: "symbol" }, "servings-scaler": { pattern: /\*/, alias: "operator" }, "servings-alternative-separator": { pattern: /\|/, alias: "operator" }, "unit-separator": { pattern: /(?:%|(\*)%)/, lookbehind: true, alias: "operator" }, punctuation: /[{}]/ } };
    o.languages.cooklang = { comment: { pattern: /\[-[\s\S]*?-\]|--.*/, greedy: true }, meta: { pattern: />>.*:.*/, inside: { property: { pattern: /(>>\s*)[^\s:](?:[^:]*[^\s:])?/, lookbehind: true } } }, "cookware-group": { pattern: new RegExp("#(?:" + a + "|" + t + ")"), inside: { cookware: { pattern: new RegExp("(^#)(?:" + e + ")"), lookbehind: true, alias: "variable" }, "cookware-keyword": { pattern: /^#/, alias: "keyword" }, "quantity-group": { pattern: new RegExp(/\{[^{}@#]*\}/), inside: { quantity: { pattern: new RegExp(/(^\{)/.source + e), lookbehind: true, alias: "number" }, punctuation: /[{}]/ } } } }, "ingredient-group": { pattern: new RegExp("@(?:" + a + "|" + t + ")"), inside: { ingredient: { pattern: new RegExp("(^@)(?:" + e + ")"), lookbehind: true, alias: "variable" }, "ingredient-keyword": { pattern: /^@/, alias: "keyword" }, "amount-group": u } }, "timer-group": { pattern: /~(?!\s)[^@#~{}]*\{[^{}]*\}/, inside: { timer: { pattern: /(^~)[^{]+/, lookbehind: true, alias: "variable" }, "duration-group": { pattern: /\{[^{}]*\}/, inside: { punctuation: /[{}]/, unit: { pattern: new RegExp(/(%\s*)/.source + s + /\b/.source), lookbehind: true, alias: "symbol" }, operator: /%/, duration: { pattern: /\d+/, alias: "number" } } }, "timer-keyword": { pattern: /^~/, alias: "keyword" } } } };
  })(n);
}
export {
  r as default
};
