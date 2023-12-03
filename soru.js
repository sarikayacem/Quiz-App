function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "TypeScript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "Css", b: "Html", c: "JavaScript", d: "Sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "Node.js", b: "TypeScript", c: "Angular", d: "React" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "VueJs", d: "Asp.Net" }, "d")
];