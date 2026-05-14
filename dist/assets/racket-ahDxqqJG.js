import t from "./scheme-BDxDT0na.js";
a.displayName = "racket";
a.aliases = ["rkt"];
function a(e) {
  e.register(t), e.languages.racket = e.languages.extend("scheme", { "lambda-parameter": { pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/, lookbehind: true } }), e.languages.insertBefore("racket", "string", { lang: { pattern: /^#lang.+/m, greedy: true, alias: "keyword" } }), e.languages.rkt = e.languages.racket;
}
export {
  a as default
};
