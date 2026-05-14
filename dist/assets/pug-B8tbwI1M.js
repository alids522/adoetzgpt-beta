import p from "./javascript-CEvf9hWA.js";
import o from "./markup-BHKKUsMC.js";
import "./clike-BF_vhPOR.js";
l.displayName = "pug";
l.aliases = [];
function l(a) {
  a.register(p), a.register(o), (function(e) {
    e.languages.pug = { comment: { pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m, lookbehind: true }, "multiline-script": { pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true, inside: e.languages.javascript }, filter: { pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: /\S[\s\S]*/ } }, "multiline-plain-text": { pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true }, markup: { pattern: /(^[\t ]*)<.+/m, lookbehind: true, inside: e.languages.markup }, doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: true }, "flow-control": { pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m, lookbehind: true, inside: { each: { pattern: /^each .+? in\b/, inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ } }, branch: { pattern: /^(?:case|default|else|if|unless|when|while)\b/, alias: "keyword" }, rest: e.languages.javascript } }, keyword: { pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m, lookbehind: true }, mixin: [{ pattern: /(^[\t ]*)mixin .+/m, lookbehind: true, inside: { keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/ } }, { pattern: /(^[\t ]*)\+.+/m, lookbehind: true, inside: { name: { pattern: /^\+\w+/, alias: "function" }, rest: e.languages.javascript } }], script: { pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m, lookbehind: true, inside: e.languages.javascript }, "plain-text": { pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m, lookbehind: true }, tag: { pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m, lookbehind: true, inside: { attributes: [{ pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript }, { pattern: /\([^)]+\)/, inside: { "attr-value": { pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/, lookbehind: true, inside: e.languages.javascript }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/ } }], punctuation: /:/, "attr-id": /#[\w\-]+/, "attr-class": /\.[\w\-]+/ } }, code: [{ pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: true, inside: e.languages.javascript }], punctuation: /[.\-!=|]+/ };
    for (var s = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source, r = [{ filter: "atpl", language: "twig" }, { filter: "coffee", language: "coffeescript" }, "ejs", "handlebars", "less", "livescript", "markdown", { filter: "sass", language: "scss" }, "stylus"], i = {}, n = 0, u = r.length; n < u; n++) {
      var t = r[n];
      t = typeof t == "string" ? { filter: t, language: t } : t, e.languages[t.language] && (i["filter-" + t.filter] = { pattern: RegExp(s.replace("<filter_name>", function() {
        return t.filter;
      }), "m"), lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: { pattern: /\S[\s\S]*/, alias: [t.language, "language-" + t.language], inside: e.languages[t.language] } } });
    }
    e.languages.insertBefore("pug", "filter", i);
  })(a);
}
export {
  l as default
};
