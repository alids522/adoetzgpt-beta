import m from "./markup-BHKKUsMC.js";
d.displayName = "textile";
d.aliases = [];
function d(s) {
  s.register(m), (function(a) {
    var l = /\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source, p = /\)|\((?![^|()\n]+\))/.source;
    function e(c, k) {
      return RegExp(c.replace(/<MOD>/g, function() {
        return "(?:" + l + ")";
      }).replace(/<PAR>/g, function() {
        return "(?:" + p + ")";
      }), k || "");
    }
    var i = { css: { pattern: /\{[^{}]+\}/, inside: { rest: a.languages.css } }, "class-id": { pattern: /(\()[^()]+(?=\))/, lookbehind: true, alias: "attr-value" }, lang: { pattern: /(\[)[^\[\]]+(?=\])/, lookbehind: true, alias: "attr-value" }, punctuation: /[\\\/]\d+|\S/ }, u = a.languages.textile = a.languages.extend("markup", { phrase: { pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/, lookbehind: true, inside: { "block-tag": { pattern: e(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source), inside: { modifier: { pattern: e(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source), lookbehind: true, inside: i }, tag: /^[a-z]\w*/, punctuation: /\.$/ } }, list: { pattern: e(/^[*#]+<MOD>*\s+\S.*/.source, "m"), inside: { modifier: { pattern: e(/(^[*#]+)<MOD>+/.source), lookbehind: true, inside: i }, punctuation: /^[*#]+/ } }, table: { pattern: e(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source, "m"), inside: { modifier: { pattern: e(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source), lookbehind: true, inside: i }, punctuation: /\||^\./ } }, inline: { pattern: e(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source), lookbehind: true, inside: { bold: { pattern: e(/(^(\*\*?)<MOD>*).+?(?=\2)/.source), lookbehind: true }, italic: { pattern: e(/(^(__?)<MOD>*).+?(?=\2)/.source), lookbehind: true }, cite: { pattern: e(/(^\?\?<MOD>*).+?(?=\?\?)/.source), lookbehind: true, alias: "string" }, code: { pattern: e(/(^@<MOD>*).+?(?=@)/.source), lookbehind: true, alias: "keyword" }, inserted: { pattern: e(/(^\+<MOD>*).+?(?=\+)/.source), lookbehind: true }, deleted: { pattern: e(/(^-<MOD>*).+?(?=-)/.source), lookbehind: true }, span: { pattern: e(/(^%<MOD>*).+?(?=%)/.source), lookbehind: true }, modifier: { pattern: e(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source), lookbehind: true, inside: i }, punctuation: /[*_%?@+\-^~]+/ } }, "link-ref": { pattern: /^\[[^\]]+\]\S+$/m, inside: { string: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true }, url: { pattern: /(^\])\S+$/, lookbehind: true }, punctuation: /[\[\]]/ } }, link: { pattern: e(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source), inside: { text: { pattern: e(/(^"<MOD>*)[^"]+(?=")/.source), lookbehind: true }, modifier: { pattern: e(/(^")<MOD>+/.source), lookbehind: true, inside: i }, url: { pattern: /(:).+/, lookbehind: true }, punctuation: /[":]/ } }, image: { pattern: e(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source), inside: { source: { pattern: e(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source), lookbehind: true, alias: "url" }, modifier: { pattern: e(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source), lookbehind: true, inside: i }, url: { pattern: /(:).+/, lookbehind: true }, punctuation: /[!:]/ } }, footnote: { pattern: /\b\[\d+\]/, alias: "comment", inside: { punctuation: /\[|\]/ } }, acronym: { pattern: /\b[A-Z\d]+\([^)]+\)/, inside: { comment: { pattern: /(\()[^()]+(?=\))/, lookbehind: true }, punctuation: /[()]/ } }, mark: { pattern: /\b\((?:C|R|TM)\)/, alias: "comment", inside: { punctuation: /[()]/ } } } } }), t = u.phrase.inside, n = { inline: t.inline, link: t.link, image: t.image, footnote: t.footnote, acronym: t.acronym, mark: t.mark };
    u.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
    var o = t.inline.inside;
    o.bold.inside = n, o.italic.inside = n, o.inserted.inside = n, o.deleted.inside = n, o.span.inside = n;
    var r = t.table.inside;
    r.inline = n.inline, r.link = n.link, r.image = n.image, r.footnote = n.footnote, r.acronym = n.acronym, r.mark = n.mark;
  })(s);
}
export {
  d as default
};
