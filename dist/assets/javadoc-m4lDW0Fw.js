import r from "./java-CUQYWvAL.js";
import i from "./javadoclike-DpeksqCO.js";
import u from "./markup-BHKKUsMC.js";
import "./clike-BF_vhPOR.js";
t.displayName = "javadoc";
t.aliases = [];
function t(a) {
  a.register(r), a.register(i), a.register(u), (function(e) {
    var n = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m, o = /#\s*\w+(?:\s*\([^()]*\))?/.source, s = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g, function() {
      return o;
    });
    e.languages.javadoc = e.languages.extend("javadoclike", {}), e.languages.insertBefore("javadoc", "keyword", { reference: { pattern: RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source + "(?:" + s + ")"), lookbehind: true, inside: { function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: true }, field: { pattern: /(#\s*)\w+/, lookbehind: true }, namespace: { pattern: /\b(?:[a-z]\w*\s*\.\s*)+/, inside: { punctuation: /\./ } }, "class-name": /\b[A-Z]\w*/, keyword: e.languages.java.keyword, punctuation: /[#()[\],.]/ } }, "class-name": { pattern: /(@param\s+)<[A-Z]\w*>/, lookbehind: true, inside: { punctuation: /[.<>]/ } }, "code-section": [{ pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/, lookbehind: true, inside: { code: { pattern: n, lookbehind: true, inside: e.languages.java, alias: "language-java" } } }, { pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/, lookbehind: true, inside: { line: { pattern: n, lookbehind: true, inside: { tag: e.languages.markup.tag, entity: e.languages.markup.entity, code: { pattern: /.+/, inside: e.languages.java, alias: "language-java" } } } } }], tag: e.languages.markup.tag, entity: e.languages.markup.entity }), e.languages.javadoclike.addSupport("java", e.languages.javadoc);
  })(a);
}
export {
  t as default
};
