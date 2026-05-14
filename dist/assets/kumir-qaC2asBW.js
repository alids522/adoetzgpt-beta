o.displayName = "kumir";
o.aliases = ["kum"];
function o(r) {
  (function(e) {
    var t = /\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;
    function n(a, d) {
      return RegExp(a.replace(/<nonId>/g, t), d);
    }
    e.languages.kumir = { comment: { pattern: /\|.*/ }, prolog: { pattern: /#.*/, greedy: true }, string: { pattern: /"[^\n\r"]*"|'[^\n\r']*'/, greedy: true }, boolean: { pattern: n(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source), lookbehind: true }, "operator-word": { pattern: n(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source), lookbehind: true, alias: "keyword" }, "system-variable": { pattern: n(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source), lookbehind: true, alias: "keyword" }, type: [{ pattern: n(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source), lookbehind: true, alias: "builtin" }, { pattern: n(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source), lookbehind: true, alias: "important" }], keyword: { pattern: n(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source), lookbehind: true }, name: { pattern: n(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source), lookbehind: true }, number: { pattern: n(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source, "i"), lookbehind: true }, punctuation: /:=|[(),:;\[\]]/, "operator-char": { pattern: /\*\*?|<[=>]?|>=?|[-+/=]/, alias: "operator" } }, e.languages.kum = e.languages.kumir;
  })(r);
}
export {
  o as default
};
